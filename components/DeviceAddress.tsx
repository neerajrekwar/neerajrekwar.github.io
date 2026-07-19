"use client";
import { IconLoader, IconLocationFilled } from "@tabler/icons-react";
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
  // NEW: Track mounting state to prevent hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Confirms we are running safely on the client

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

  // Server renders the loader cleanly; client matches it until state updates
  if (!isMounted) {
    return (
      <div className="flex items-baseline justify-end">
        <div className="text-center p-2">
          <IconLoader className="animate-spin h-5 w-5" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-baseline justify-end">
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
            className="flex text-sm md:text-md overflow-y-hidden sm:text-sm gap-1 text-five justify-center items-center"
          >
            <IconLocationFilled className="h-4 sm:h-10 " />
            <p className=""> {address.city},</p>
            <p className=""> {address.country}</p>
          </motion.div>
        ) : (
          <div className="text-center p-2">
            <IconLoader className="animate-spin h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceAddress;
