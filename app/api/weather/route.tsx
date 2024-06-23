// pages/api/weather-by-ip.ts
"use client"
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get client IP address from the request
  const clientIp = req.headers['x-real-ip'] || req.socket.remoteAddress;

  // Example URL for geolocation API (replace with actual API)
  const geoApiUrl = `https://ipapi.co/${clientIp}/json/`;

  try {
    // Fetch geolocation data based on IP
    const geoResponse = await axios.get(geoApiUrl);
    const { latitude, longitude } = geoResponse.data;

    // Fetch weather data based on detected coordinates
    const weatherApiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';
    const weatherOptions = {
      params: { q: `${latitude},${longitude}` },
      headers: {
        'x-rapidapi-key': 'fb4e3b3dd0mshddc389caebd5192p146dc6jsn1901b7092089',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    const weatherResponse = await axios.get(weatherApiUrl, weatherOptions);
    res.status(200).json(weatherResponse.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}
