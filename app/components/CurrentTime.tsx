"use client";
import { useEffect, useState } from "react";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [curDay, setCurDay] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        
        hour12: true,
        dayPeriod: "short",
        
      }).format(now);
      setCurrentTime(formattedTime);
    };
    updateTime(); // Initial call to set the time immediately
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const updateDay = () => {
      const now = new Date();
      const formattedDay = new Intl.DateTimeFormat("en-US", {
        weekday: 'short',
        
      }).format(now);
      setCurDay(formattedDay);
    };
    updateDay(); // Initial call to set the day immediately  
    const intervalId = setInterval(updateDay, 1000); // Update day every second
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <>
     <div className="flex gap-1">
       <div>{curDay}</div>
       <div>{currentTime}</div>
     </div>
    </>
  );
};

export default CurrentTime;
