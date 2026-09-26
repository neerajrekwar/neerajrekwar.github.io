"use client";

import { useState } from "react";
import { 
  MapPin, 
  Sun, 
  Cloud, 
  CloudSun, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudFog, 
  CloudDrizzle, 
  RefreshCw,
  Loader2,
  Activity
} from "lucide-react";
import { useWeatherLocation, type WeatherData } from "@/hooks/use-weather-location";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function WeatherIcon({ type, className = "w-4 h-4" }: { type: WeatherData["iconType"]; className?: string }) {
  switch (type) {
    case "sun":
      return <Sun className={`${className} text-amber-500`} />;
    case "cloud-sun":
      return <CloudSun className={`${className} text-amber-500`} />;
    case "cloud":
      return <Cloud className={`${className} text-zinc-500`} />;
    case "cloud-rain":
      return <CloudRain className={`${className} text-blue-500`} />;
    case "cloud-snow":
      return <CloudSnow className={`${className} text-sky-400`} />;
    case "cloud-lightning":
      return <CloudLightning className={`${className} text-yellow-500`} />;
    case "cloud-fog":
      return <CloudFog className={`${className} text-zinc-400`} />;
    case "cloud-drizzle":
      return <CloudDrizzle className={`${className} text-blue-400`} />;
    default:
      return <Sun className={`${className} text-amber-500`} />;
  }
}

export function NavbarWeather({ isMobileCompact = false }: { isMobileCompact?: boolean }) {
  const { location, weather, isLoading, error, refresh, lastUpdated } = useWeatherLocation();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRefreshing(true);
    try {
      await refresh();
    } finally {
      setIsRefreshing(false);
    }
  };

  if (isLoading && !location) {
    return (
      <div className="flex items-center gap-2 px-2.5 py-1 border-2 border-black bg-zinc-50 text-xs font-mono animate-pulse">
        <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-500" />
        <span className="text-[11px] uppercase tracking-wider text-zinc-600">Locating...</span>
      </div>
    );
  }

  const cityName = location?.cityName || "Current Location";
  const countryCode = location?.countryCode || "";
  const temperature = weather ? `${weather.temperature}${weather.unit}` : "--";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          title="Click to view sensor & location metadata"
          aria-label="View geolocation and weather details"
          className="group border-2 border-black bg-white hover:bg-zinc-100 transition-colors px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] flex items-center gap-1.5 text-xs font-mono select-none"
        >
          <span className="flex items-center gap-1 text-black font-semibold">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate max-w-[85px] sm:max-w-[120px]">
              {cityName}
              {countryCode && !isMobileCompact ? `, ${countryCode}` : ""}
            </span>
          </span>

          <span className="text-zinc-400 font-normal">|</span>

          {weather && (
            <span className="flex items-center gap-1 font-bold text-black shrink-0">
              <WeatherIcon type={weather.iconType} className="w-3.5 h-3.5" />
              <span>{temperature}</span>
            </span>
          )}

          {error && !weather && (
            <span className="text-[10px] text-destructive uppercase">Offline</span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent 
        align="end" 
        sideOffset={8}
        className="w-80 rounded-none border-2 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-xs font-mono"
      >
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4 text-primary" />
              <span>Geo & Atmospheric Telemetry</span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="h-6 px-2 rounded-none border border-black hover:bg-black hover:text-white text-[10px] uppercase font-bold"
            >
              {isRefreshing ? <Loader2 className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
            </Button>
          </div>

          {/* Location details */}
          <div className="space-y-1 bg-zinc-50 border border-black p-2.5">
            <div className="text-[10px] uppercase text-zinc-500 font-bold">Location Telemetry</div>
            <div className="font-bold text-sm text-black flex items-center justify-between">
              <span>{location?.cityName}, {location?.countryName}</span>
              {location?.countryCode && (
                <span className="px-1.5 py-0.5 border border-black bg-white text-[10px]">
                  {location.countryCode}
                </span>
              )}
            </div>
            {location?.regionName && (
              <div className="text-zinc-600 text-[11px]">Region: {location.regionName}</div>
            )}
            <div className="text-zinc-500 text-[11px] pt-1">
              Coordinates: {location?.latitude?.toFixed(4)}°, {location?.longitude?.toFixed(4)}°
            </div>
          </div>

          {/* Weather details */}
          {weather && (
            <div className="space-y-1.5 bg-zinc-50 border border-black p-2.5">
              <div className="text-[10px] uppercase text-zinc-500 font-bold">Weather Condition</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <WeatherIcon type={weather.iconType} className="w-6 h-6" />
                  <div>
                    <div className="font-bold text-base leading-none text-black">
                      {weather.temperature} {weather.unit}
                    </div>
                    <div className="text-zinc-600 text-[11px] capitalize mt-0.5">
                      {weather.condition}
                    </div>
                  </div>
                </div>
                <div className="text-right text-[10px] text-zinc-500">
                  WMO: #{weather.weatherCode}
                </div>
              </div>

              {/* Hourly mini forecast */}
              {weather.hourlyForecast && weather.hourlyForecast.length > 0 && (
                <div className="mt-2 pt-2 border-t border-dashed border-zinc-300">
                  <div className="text-[10px] text-zinc-500 uppercase font-semibold mb-1">Hourly Trend:</div>
                  <div className="grid grid-cols-5 gap-1 text-center">
                    {weather.hourlyForecast.map((hour, idx) => (
                      <div key={idx} className="bg-white border border-black/30 p-1">
                        <div className="text-[9px] text-zinc-500">{hour.time}</div>
                        <div className="font-bold text-[11px]">{hour.temp}°</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* API Engine Specs */}
          <div className="text-[10px] text-zinc-500 border-t border-black pt-2 space-y-0.5">
            <div><span className="font-bold text-black">IP Geolocation:</span> free.freeipapi.com (/api/v1/ • Free Plan)</div>
            <div><span className="font-bold text-black">Weather API:</span> open-meteo.com (Hourly & Current)</div>
            <div><span className="font-bold text-black">Rate Limit Policy:</span> Max 60 req/min (Cached 15m)</div>
            {lastUpdated && (
              <div className="text-[9px] text-zinc-400 pt-0.5">
                Last synchronized: {new Date(lastUpdated).toLocaleTimeString()}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
