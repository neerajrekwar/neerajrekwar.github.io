// pages/index.tsx
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const WeatherApp = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherByIp = async () => {
      try {
        const response = await axios.get('/api/weather');
        const data: WeatherData = response.data;
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherByIp();
  }, []);

  return (
    <div>
      <h1>Weather Information</h1>
      {weather ? (
        <div>
          <h2>{weather.location.name}, {weather.location.region}, {weather.location.country}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt="Weather Icon"
            width={64}
            height={64}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
