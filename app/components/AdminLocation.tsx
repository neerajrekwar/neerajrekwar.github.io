// app/components/AdminLocation.tsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Location {
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
}

const AdminLocation: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  const adminLocation = {
    latitude: 28.59,
    longitude: 77.04,
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const { latitude, longitude, city, region, country_name: country } = response.data;

        if (
          parseFloat(latitude) === adminLocation.latitude &&
          parseFloat(longitude) === adminLocation.longitude
        ) {
          setLocation({
            city,
            region,
            country,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          });
        } else {
          setLocation(null); // Set to null if location doesn't match
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch location data");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : location ? (
        <div>
          <h2 className="text-lg">Admin Location</h2>
          <p className="ml-1">
            {location.city}, {location.region}, {location.country}
          </p>
          <p className="ml-1">
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminLocation;
