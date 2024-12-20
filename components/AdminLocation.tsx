// app/components/AdminLocation.tsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface LocationData {
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
}

const AdminLocation: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const adminLocation = {
    latitude: 28.59,
    longitude: 77.04,
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        console.log("Response data:", response.data);

        const {
          latitude,
          longitude,
          city,
          region,
          country_name: country,
        } = response.data;

        const userLatitude = parseFloat(latitude);
        const userLongitude = parseFloat(longitude);

        console.log("User Latitude:", userLatitude);
        console.log("User Longitude:", userLongitude);

        if (
          userLatitude.toFixed(2) === adminLocation.latitude.toFixed(2) &&
          userLongitude.toFixed(2) === adminLocation.longitude.toFixed(2)
        ) {
          setLocation({
            city,
            region,
            country,
            latitude: userLatitude,
            longitude: userLongitude,
          });
          console.log("Admin location matched!");
        } else {
          setLocation(null);
          console.log("Location does not match admin location.");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
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
          <p>
            {location.city}, {location.region}, {location.country}
          </p>
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        </div>
      ) : (
        <p>Loading or not an admin location...</p>
      )}
    </div>
  );
};

export default AdminLocation;
