// components/Weather.tsx
"use client";
import {
  IconCloudFilled,
  IconTemperature,
  IconWind,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (latitude: number, longitude: number) => {
      const options = {
        method: "GET",
        url: "https://api.open-meteo.com/v1/forecast",
        params: {
          latitude: latitude,
          longitude: longitude,
          current_weather: true,
          temperature_unit: "celsius",
          wind_speed_unit: "kmh",
          hourly: "cloudcover,diffuse_radiation,wind_speed_10m,rain",
          timezone: "auto",
        },
      };

      try {
        const response = await axios.request(options);
        setWeather(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch weather data");
      }
    };

    const getLocation = () => {
      const fallbackToIp = () => {
        // Fallback to IP-based location
        axios.get("https://ip-api.com/json")
          .then((response) => {
            const data = response.data;
            if (data.lat && data.lon) {
              fetchWeather(data.lat, data.lon);
            } else {
              setError("Failed to retrieve location from IP.");
            }
          })
          .catch((ipError) => {
            console.error("IP location error:", ipError);
            setError("Geolocation and IP lookup failed.");
          });
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            console.error("Geolocation error:", error);
            fallbackToIp();
          }
        );
      } else {
        fallbackToIp();
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      {error ? (
        <motion.p
          className="text-primary"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 6, duration: 2 }}
        >
          {error}
        </motion.p>
      ) : weather ? (
        <div className="text-sm text-primary  md:text-md">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4, ease: "easeInOut" }}
            className=" flex flex-col opacity-75 sm:flex-row md:gap-2  md:p-2   rounded-md items-end"
          >
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, ease: "easeInOut" }}
              className="flex w-fit  md:bg-seven md:p-1  rounded-full md:px-2 items-center justify-center"
            >
              <IconTemperature />
              {weather.current_weather.temperature}°C
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 6, ease: "easeInOut" }}
              className=" flex w-fit gap-2 md:bg-seven md:p-1 rounded-full md:px-2 items-center justify-center"
            >
              <IconCloudFilled /> {weather.hourly.cloudcover[0]}%
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 8, ease: "easeInOut" }}
              className=" flex w-fit gap-2 md:bg-seven md:p-1 rounded-full md:px-2 items-center justify-center"
            >
              <IconWind /> {weather.hourly.wind_speed_10m[0]} km/h
            </motion.p>{" "}
          </motion.div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Weather;
