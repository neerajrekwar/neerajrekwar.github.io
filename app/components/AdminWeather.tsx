// components/AdminWeather.tsx
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminWeather: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [location, setLocation] = useState<string>('Delhi, India');

  const fetchWeather = async (query: string) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: query },
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
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('location') as string;
    setLocation(query);
  };

  return (
    <div className='w-full t'>
      {/* <form onSubmit={handleSearch}>
        <input type="text" name="location" placeholder="Enter location" />
        <button type="submit">Search</button>
      </form> */}
      {weather && (
        <div className='flex  text-left text-base text-yellow-600 font-medium tracking-tight md:text-7xl'>
          <h2 className='mr-1'>
            {weather.location.region},
          </h2>
          <h2 className=''>
            {weather.location.country}
          </h2>
          <p className='ml-1'>{weather.current.temp_c}°C</p>
          
        </div>
      )}
    </div>
  );
};

export default AdminWeather;
