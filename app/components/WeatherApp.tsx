// components/Weather.tsx
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (latitude: number, longitude: number) => {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${latitude},${longitude}` },
        headers: {
          'x-rapidapi-key': 'fb4e3b3dd0mshddc389caebd5192p146dc6jsn1901b7092089',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setWeather(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch weather data');
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
            setError('Failed to retrieve location');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser');
      }
    };

    getLocation();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : weather ? (
      <div className=''>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          >
          <h2 className='text-lg'>{weather.location.region}, {weather.location.country}</h2>
          <p className='ml-1 text-xl font-bold'>{weather.current.temp_c}°C</p>
        </motion.div>
        <motion.div
           className='flex justify-end items-center border-neutral-800 w-full h-fit'
          >
          <p className='mr-1 sm:text-sm'>{weather.current.condition.text}</p>
          <img className='text-secondary '
            src={weather.current.condition.icon}
            alt="Weather Icon"
            width={24}
            height={24}
          />
        </motion.div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
