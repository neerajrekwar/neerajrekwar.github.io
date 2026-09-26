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

// v3 cache key to immediately invalidate any legacy cached "Berlin" responses
const STORAGE_KEY = "njr_weather_location_cache_v3";
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

  // 1. If a specific IP is requested (e.g. 8.8.8.8)
  if (targetIp && targetIp.length > 0) {
    // Try ipapi.co first
    try {
      const res = await fetch(`https://ipapi.co/${encodeURIComponent(targetIp)}/json/`, {
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => null);
      if (data && !data.error && data.latitude !== undefined && data.longitude !== undefined) {
        return {
          ipAddress: data.ip || targetIp,
          cityName: data.city || data.region || "Location",
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
    } catch (e) {
      console.warn("ipapi.co error for IP query:", e);
    }

    // Failover to ipwho.is for specific IP query (no rate limit)
    try {
      const res = await fetch(`https://ipwho.is/${encodeURIComponent(targetIp)}`);
      const data = await res.json().catch(() => null);
      if (data && data.success && data.latitude !== undefined && data.longitude !== undefined) {
        return {
          ipAddress: data.ip || targetIp,
          cityName: data.city || data.region || "Location",
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
    } catch (e) {
      console.warn("ipwho.is failover error for IP query:", e);
    }

    throw new Error(`Unable to resolve location for IP: ${targetIp}`);
  }

  // 2. Resolve caller's real current location
  // Option A: If GPS is explicitly requested or permission is available
  if (typeof window !== "undefined" && navigator.geolocation) {
    const coords = await new Promise<{ lat: number; lon: number } | null>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => resolve(null),
        { timeout: forceGps ? 5000 : 2500, maximumAge: 60000, enableHighAccuracy: forceGps }
      );
    });

    if (coords) {
      try {
        const geoRes = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.lat}&longitude=${coords.lon}`
        );
        const geoData = await geoRes.json().catch(() => null);
        if (geoData && (geoData.city || geoData.locality || geoData.countryName)) {
          return {
            cityName: geoData.city || geoData.locality || "Current Location",
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
        console.warn("Device coordinate reverse-geocode failed, falling back to IP:", err);
      }
    }
  }

  // Option B: ipapi.co (GET https://ipapi.co/json/)
  try {
    const res = await fetch("https://ipapi.co/json/", {
      headers: { Accept: "application/json" },
    });
    const data = await res.json().catch(() => null);
    if (data && !data.error && data.latitude !== undefined && data.longitude !== undefined) {
      return {
        ipAddress: data.ip,
        cityName: data.city || data.region || "Current Location",
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
    console.warn("ipapi.co rate limit or network issue:", err);
  }

  // Option C: ipwho.is (Free tier, fast, returns real user city and coordinates)
  try {
    const res = await fetch("https://ipwho.is/");
    const data = await res.json().catch(() => null);
    if (data && data.success && data.latitude !== undefined && data.longitude !== undefined) {
      return {
        ipAddress: data.ip,
        cityName: data.city || data.region || "Current Location",
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
    console.warn("ipwho.is error:", err);
  }

  // Option D: BigDataCloud client reverse geocoding
  try {
    const res = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client");
    const data = await res.json().catch(() => null);
    if (data && data.latitude !== undefined && data.longitude !== undefined) {
      return {
        cityName: data.city || data.locality || "Current Location",
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

  // Fallback if completely offline
  return {
    cityName: "Current Location",
    countryName: "",
    countryCode: "",
    latitude: 20.5937,
    longitude: 78.9629,
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

    // 1. Check local cache unless force refresh
    if (!force && typeof window !== "undefined") {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          const age = Date.now() - (parsed.timestamp || 0);
          if (age < CACHE_TTL_MS && parsed.location && parsed.weather) {
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
      // 2. Accurately resolve location
      const locData = await resolveLocation(customIp, forceGps);

      // 3. Query Open-Meteo weather for coordinates
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

      // Hourly forecast sample (next 5 hours)
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

      // Cache the result
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
