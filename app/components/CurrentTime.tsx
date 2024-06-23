'use client'
import { useEffect, useState } from 'react';

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        dayPeriod: 'short',
        weekday: 'short',
        era: 'long',
        hour: 'numeric',
        minute:"numeric",
        hour12: true 
      }).format(now);
      setCurrentTime(formattedTime);
    };

    updateTime(); // Initial call to set the time immediately
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return <div
           className='font-bold'
           >{currentTime}</div>;
};

export default CurrentTime;
