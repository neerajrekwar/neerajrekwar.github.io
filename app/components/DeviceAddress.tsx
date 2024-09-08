// components/DeviceAddress.tsx
"use client";
import { IconLocationFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4 }}
            className="flex text-xs overflow-y-hidden sm:text-sm gap-1 text-secondary justify-center items-center"
          >
            {/* <h2 className="text-2xl font-bold mb-4 text-center">Device Address</h2> */}
            {/* <p className="text-lg"><strong>IP:</strong> {address.ip}</p> */}
            <IconLocationFilled className="h-4 sm:h-10 " />
            <p className=""> {address.city},</p>
            <p className=""> {address.country}</p>
          </motion.div>
        ) : (
          <div className="text-center  p-2">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              just a moment...
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceAddress;
