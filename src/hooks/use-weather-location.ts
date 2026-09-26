"use client";

import { useState, useEffect, useCallback } from "react";

export interface GeoLocationData {
  ipAddress?: string;
  cityName: string;
  countryName: string;
  countryCode: string;
  regionName?: string;
  latitude: number;
  longitude: number;
  timeZones?: string[];
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
  refresh: () => Promise<void>;
}

const STORAGE_KEY = "njr_weather_location_cache_v1";
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes to strictly stay within FreeIPAPI rate limits (10 req/10s, 60/min)

export function parseWeatherCode(code: number): { condition: string; iconType: WeatherData["iconType"] } {
  // WMO Weather interpretation codes
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

export function useWeatherLocation(): WeatherLocationState {
  const [location, setLocation] = useState<GeoLocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  const fetchData = useCallback(async (force = false) => {
    setIsLoading(true);
    setError(null);

    // 1. Check local cache if not forcing refresh
    if (!force && typeof window !== "undefined") {
      try {
        const cached = localStorage.getItem(STORAGE_KEY);
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
      // 2. Fetch IP location from free.freeipapi.com/api/v1/
      let lat = 52.52;
      let lon = 13.41;
      let locData: GeoLocationData = {
        cityName: "Berlin",
        countryName: "Germany",
        countryCode: "DE",
        latitude: lat,
        longitude: lon,
      };

      try {
        const ipRes = await fetch("https://free.freeipapi.com/api/v1/json", {
          headers: { Accept: "application/json" },
        });

        if (ipRes.ok) {
          const ipJson = await ipRes.json();
          if (ipJson.latitude !== undefined && ipJson.longitude !== undefined) {
            lat = Number(ipJson.latitude);
            lon = Number(ipJson.longitude);
            locData = {
              ipAddress: ipJson.ipAddress,
              cityName: ipJson.cityName || ipJson.regionName || "Current Location",
              countryName: ipJson.countryName || "",
              countryCode: ipJson.countryCode || "",
              regionName: ipJson.regionName || "",
              latitude: lat,
              longitude: lon,
              timeZones: ipJson.timeZones,
            };
          }
        }
      } catch (ipErr) {
        console.warn("FreeIPAPI fetch error, using fallback coordinates:", ipErr);
      }

      // 3. Fetch atmospheric weather from Open-Meteo
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m`;
      const weatherRes = await fetch(weatherUrl);

      if (!weatherRes.ok) {
        throw new Error(`Weather service returned ${weatherRes.status}`);
      }

      const weatherJson = await weatherRes.json();
      
      let temp = 20;
      let unit = "°C";
      let code = 0;

      if (weatherJson.current) {
        temp = Math.round(weatherJson.current.temperature_2m * 10) / 10;
        unit = weatherJson.current_units?.temperature_2m || "°C";
        code = weatherJson.current.weather_code ?? 0;
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
            STORAGE_KEY,
            JSON.stringify({
              timestamp: now,
              location: locData,
              weather: weatherData,
            })
          );
        } catch {
          // localStorage full or unavailable
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to load weather & location";
      console.error("Location/Weather fetch failed:", err);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(async () => {
    await fetchData(true);
  }, [fetchData]);

  return {
    location,
    weather,
    isLoading,
    error,
    lastUpdated,
    refresh,
  };
}
