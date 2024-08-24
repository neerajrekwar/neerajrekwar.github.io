// components/DeviceAddress.tsx
"use client";
import { IconLocationFilled } from "@tabler/icons-react";

import { useEffect, useState } from "react";

type DeviceAddress = {
  ip: string;
  city: string;
  region: string;
  country: string;
};

const DeviceAddress: React.FC = () => {
  const [address, setAddress] = useState<DeviceAddress | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeviceAddress = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Failed to fetch device address");
        }
        const data: DeviceAddress = await response.json();
        setAddress(data);
      } catch (err) {
        setError("An unknown error occurred.");
      }
    };

    fetchDeviceAddress();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className=" ">
        {error ? (
          <div className=" text-center">
            <p>Error: {error}</p>
          </div>
        ) : address ? (
          <div className="flex text-xs sm:text-sm gap-1 text-secondary justify-center items-center">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">Device Address</h2> */}
            {/* <p className="text-lg"><strong>IP:</strong> {address.ip}</p> */}
           <IconLocationFilled  className="h-4 sm:h-10 " />
            <p className=""> {address.city},</p>
            <p className=""> {address.country}</p>
          </div>
        ) : (
          <div className="text-center  p-2">
            <p>wait a minute...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceAddress;
