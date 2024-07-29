// components/DeviceAddress.tsx
"use client";
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
    <div className="flex  items-center justify-center">
      <div className="text-secondaryText  ">
        {error ? (
          <div className=" text-center">
            <p>Error: {error}</p>
          </div>
        ) : address ? (
          <div className="flex gap-1 text-secondary justify-center items-center">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">Device Address</h2> */}
            {/* <p className="text-lg"><strong>IP:</strong> {address.ip}</p> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-current-location">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              <path d="M12 2l0 2" />
              <path d="M12 20l0 2" />
              <path d="M20 12l2 0" />
              <path d="M2 12l2 0" />
            </svg>
            <p className=""> {address.city},</p>
            <p className=""> {address.country}</p>
          </div>
        ) : (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceAddress;
