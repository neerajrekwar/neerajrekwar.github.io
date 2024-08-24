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
        <p>{error}</p>
      ) : weather ? (
        <div className="sm:text-sm">
          <motion.div>
            <p className="">
              {weather.current_weather.temperature}°C
            </p>
            <p className="">Clear Sky</p>
          </motion.div>
          
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Weather;
