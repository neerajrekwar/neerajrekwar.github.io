import { useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  time: string;
}

const fetchWeatherApi = async (url: string, params: Record<string, any>) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${url}?${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          latitude: 28.59,
          longitude: 77.04,
          hourly: 'temperature_2m',
          current_weather: true,
          temperature_unit: 'celsius', // Change to 'fahrenheit' if needed
          timezone: 'auto',
        };
        const url = 'https://api.open-meteo.com/v1/forecast';
        const response = await fetchWeatherApi(url, params);

        const weatherData = {
          temperature: response.current_weather.temperature,
          time: response.current_weather.time,
        };

        setWeatherData(weatherData);
      } catch (err) {
        setError('Failed to fetch weather data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {weatherData ? (
      <p>
        {weatherData.temperature}°C at {new Date(weatherData.time).toLocaleDateString("us", {
        weekday: 'short',
          hour: "2-digit",
          minute: '2-digit',
        })}
      </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
