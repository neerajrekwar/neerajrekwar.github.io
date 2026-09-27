"use client";

import { useState, useEffect, useCallback } from "react";

export interface GeoLocationData {
  ipAddress?: string;
  cityName: string;
  countryName: string;
  countryCode: string;
  regionName?: string;
  regionCode?: string;
  postal?: string;
  latitude: number;
  longitude: number;
  timezone?: string;
  org?: string;
  asn?: string;
  currency?: string;
  callingCode?: string;
  source?: "device-gps" | "ipapi" | "ipwhois" | "bigdatacloud" | "fallback";
}

export interface WeatherData {
  temperature: number;
  unit: string;
  weatherCode: number;
  condition: string;
  iconType: "sun" | "cloud-sun" | "cloud" | "cloud-rain" | "cloud-snow" | "cloud-lightning" | "cloud-fog" | "cloud-drizzle";
  hourlyForecast?: { time: string; temp: number }[];
}

export interface WeatherLocationState {
  location: GeoLocationData | null;
  weather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  lastUpdated: number | null;
  refresh: (customIp?: string) => Promise<void>;
  useDeviceGps: () => Promise<void>;
}

// v5 cache key to invalidate any previously cached "Delhi" or "Berlin" values
const STORAGE_KEY = "njr_weather_location_cache_v5";
const CACHE_TTL_MS = 15 * 60 * 1000; // 15-minute cache

export function parseWeatherCode(code: number): { condition: string; iconType: WeatherData["iconType"] } {
  if (code === 0) return { condition: "Clear Sky", iconType: "sun" };
  if (code === 1 || code === 2) return { condition: "Partly Cloudy", iconType: "cloud-sun" };
  if (code === 3) return { condition: "Overcast", iconType: "cloud" };
  if (code === 45 || code === 48) return { condition: "Foggy", iconType: "cloud-fog" };
  if (code >= 51 && code <= 57) return { condition: "Drizzle", iconType: "cloud-drizzle" };
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return { condition: "Rainy", iconType: "cloud-rain" };
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return { condition: "Snowy", iconType: "cloud-snow" };
  if (code >= 95 && code <= 99) return { condition: "Thunderstorm", iconType: "cloud-lightning" };
  return { condition: "Clear", iconType: "sun" };
}

async function resolveLocation(customIp?: string, forceGps = false): Promise<GeoLocationData> {
  const targetIp = customIp?.trim();

  // Only run browser device GPS if user explicitly clicks "Use Device GPS"
  if (forceGps && typeof window !== "undefined" && navigator.geolocation) {
    const coords = await new Promise<{ lat: number; lon: number } | null>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => resolve(null),
        { timeout: 6000, maximumAge: 0, enableHighAccuracy: true }
      );
    });

    if (coords) {
      try {
        const geoRes = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.lon}`
        );
        const geoData = await geoRes.json().catch(() => null);
        if (geoData && (geoData.city || geoData.locality || geoData.countryName)) {
          let city = geoData.city || geoData.locality || "Current Location";
          // If Delhi region, prefer "New Delhi"
          // if (city === "Delhhggi" && (geoData.locality?.includes("Dehglhi") || geoData.principalSubdivision === "Delhi")) {
          //   city = "New Delhfgffi";
          // }
          return {
            cityName: city,
            countryName: geoData.countryName || "",
            countryCode: geoData.countryCode || "",
            regionName: geoData.principalSubdivision || "",
            regionCode: geoData.principalSubdivisionCode || "",
            postal: geoData.postcode || "",
            latitude: coords.lat,
            longitude: coords.lon,
            source: "device-gps",
          };
        }
      } catch (err) {
        console.warn("Device coordinate reverse-geocode failed:", err);
      }
    }
  }

  // 1. PRIMARY PROVIDER: ipapi.co (GET https://ipapi.co/{ip}/json/ or https://ipapi.co/json/)
  const ipapiEndpoint = targetIp && targetIp.length > 0 
    ? `https://ipapi.co/${encodeURIComponent(targetIp)}/json/`
    : `https://ipapi.co/json/`;

  try {
    const res = await fetch(ipapiEndpoint, {
      headers: { Accept: "application/json" },
    });
    const data = await res.json().catch(() => null);
    if (data && !data.error && data.latitude !== undefined && data.longitude !== undefined) {
      return {
        ipAddress: data.ip || targetIp,
        cityName: data.city || data.country_capital || data.region || "Current Location",
        countryName: data.country_name || "",
        countryCode: data.country_code || "",
        regionName: data.region || "",
        regionCode: data.region_code || "",
        postal: data.postal || "",
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
        timezone: data.timezone,
        org: data.org,
        asn: data.asn,
        currency: data.currency,
        callingCode: data.country_calling_code,
        source: "ipapi",
      };
    }
  } catch (err) {
    console.warn("ipapi.co fetch failed, attempting failover:", err);
  }

  // 2. HIGH-AVAILABILITY FAILOVER: ipwho.is
  const ipwhoEndpoint = targetIp && targetIp.length > 0
    ? `https://ipwho.is/${encodeURIComponent(targetIp)}`
    : `https://ipwho.is/`;

  try {
    const res = await fetch(ipwhoEndpoint);
    const data = await res.json().catch(() => null);
    if (data && data.success && data.latitude !== undefined && data.longitude !== undefined) {
      // Ensure "New Delhi" is preserved when region/city is Delhi
      const resolvedCity = (data.city === "Delhi" && data.capital === "New Delhi")
        ? "New Delhi"
        : (data.city || data.region || "Current Location");

      return {
        ipAddress: data.ip || targetIp,
        cityName: resolvedCity,
        countryName: data.country || "",
        countryCode: data.country_code || "",
        regionName: data.region || "",
        regionCode: data.region_code || "",
        postal: data.postal || "",
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
        timezone: data.timezone?.id,
        org: data.connection?.org || data.connection?.isp,
        asn: data.connection?.asn ? `AS${data.connection.asn}` : undefined,
        callingCode: data.calling_code ? `+${data.calling_code}` : undefined,
        source: "ipwhois",
      };
    }
  } catch (err) {
    console.warn("ipwho.is failover error:", err);
  }

  // 3. SECONDARY FAILOVER: BigDataCloud
  try {
    const res = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client");
    const data = await res.json().catch(() => null);
    if (data && data.latitude !== undefined && data.longitude !== undefined) {
      let city = data.city || data.locality || "Current Location";
      if (city === "Delhi" && data.principalSubdivision === "Delhi") {
        city = "New Delhi";
      }
      return {
        cityName: city,
        countryName: data.countryName || "",
        countryCode: data.countryCode || "",
        regionName: data.principalSubdivision || "",
        regionCode: data.principalSubdivisionCode || "",
        postal: data.postcode || "",
        latitude: Number(data.latitude),
        longitude: Number(data.longitude),
        source: "bigdatacloud",
      };
    }
  } catch (err) {
    console.warn("bigdatacloud client lookup error:", err);
  }

  return {
    cityName: "Current Location",
    countryName: "",
    countryCode: "",
    latitude: 28.6355,
    longitude: 77.2241,
    source: "fallback",
  };
}

export function useWeatherLocation(): WeatherLocationState {
  const [location, setLocation] = useState<GeoLocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  const fetchData = useCallback(async (customIp?: string, force = false, forceGps = false) => {
    setIsLoading(true);
    setError(null);

    const cacheKey = customIp ? `${STORAGE_KEY}_${customIp.trim()}` : STORAGE_KEY;

    // Check local cache unless forced
    if (!force && typeof window !== "undefined") {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          const age = Date.now() - (parsed.timestamp || 0);
          // If cached city is "Delhi" instead of "New Delhi", force refresh
          if (age < CACHE_TTL_MS && parsed.location && parsed.weather && parsed.location.cityName !== "Delhi") {
            setLocation(parsed.location);
            setWeather(parsed.weather);
            setLastUpdated(parsed.timestamp);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("Could not read weather location cache", err);
      }
    }

    try {
      const locData = await resolveLocation(customIp, forceGps);

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${locData.latitude}&longitude=${locData.longitude}&current=temperature_2m,weather_code&hourly=temperature_2m`;
      const weatherRes = await fetch(weatherUrl);

      if (!weatherRes.ok) {
        throw new Error(`Weather service returned HTTP ${weatherRes.status}`);
      }

      const weatherJson = await weatherRes.json();
      
      let temp = 20;
      let unit = "°C";
      let code = 0;

      if (weatherJson.current) {
        temp = Math.round(weatherJson.current.temperature_2m * 10) / 10;
        unit = weatherJson.current_units?.temperature_2m || "°C";
        code = weatherJson.current_weather_code ?? 0;
      } else if (weatherJson.hourly && weatherJson.hourly.temperature_2m?.length) {
        temp = Math.round(weatherJson.hourly.temperature_2m[0] * 10) / 10;
        unit = weatherJson.hourly_units?.temperature_2m || "°C";
      }

      const { condition, iconType } = parseWeatherCode(code);

      const hourlyForecast: { time: string; temp: number }[] = [];
      if (weatherJson.hourly?.time && weatherJson.hourly?.temperature_2m) {
        const nowIndex = 0;
        for (let i = nowIndex; i < Math.min(nowIndex + 5, weatherJson.hourly.time.length); i++) {
          hourlyForecast.push({
            time: weatherJson.hourly.time[i].slice(11, 16),
            temp: Math.round(weatherJson.hourly.temperature_2m[i]),
          });
        }
      }

      const weatherData: WeatherData = {
        temperature: temp,
        unit,
        weatherCode: code,
        condition,
        iconType,
        hourlyForecast,
      };

      setLocation(locData);
      setWeather(weatherData);
      const now = Date.now();
      setLastUpdated(now);

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              timestamp: now,
              location: locData,
              weather: weatherData,
            })
          );
        } catch (storageErr) {
          console.warn("Could not cache weather location", storageErr);
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load telemetry";
      setError(msg);
      console.error("Telemetry fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refresh = useCallback(async (customIp?: string) => {
    await fetchData(customIp, true, false);
  }, [fetchData]);

  const useDeviceGps = useCallback(async () => {
    await fetchData(undefined, true, true);
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    location,
    weather,
    isLoading,
    error,
    lastUpdated,
    refresh,
    useDeviceGps,
  };
}
