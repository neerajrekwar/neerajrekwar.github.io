// components/Weather.tsx
"use client";
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
          temperature_unit: "celsius", // or "fahrenheit" if preferred
          hourly: "cloudcover,diffuse_radiation,rain,wind_speed_10m", // Adding hourly wind speed data
          wind_speed_unit: "kmh", // or "mph", "ms", "knots"
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
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            console.error(error);
            setError("Failed to retrieve location");
          }
        );
      } else {
        setError("Geolocation is not supported by this browser");
      }
    };

    getLocation();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      {error ? (
        <motion.p>{error}</motion.p>
      ) : weather ? (
        <div className="sm:text-sm">
          <motion.div>
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4 }}
            >
              {weather.current_weather.temperature}°C
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 6 }}
            >
              Cloud {weather.hourly.cloudcover[0]}%
            </motion.p>
            {/* <p>Diffuse Radiation: {weather.hourly.diffuse_radiation[0]} W/m²</p> */}
            {/* <p>Rain: {weather.hourly.rain[0]} mm</p>{" "} */}
            {/* Display hourly rain data */}
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 8 }}
            >
              Wind {weather.hourly.wind_speed_10m[0]} km/h
            </motion.p>{" "}
            {/* Display hourly wind speed */}
          </motion.div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Weather;
