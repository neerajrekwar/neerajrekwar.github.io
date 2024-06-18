// app/components/CurrentLocationAndTime.tsx
'use client';
import React, { useEffect, useState } from 'react';

const CurrentLocationAndTime: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => setDateTime(new Date());
    const timerId = setInterval(updateDateTime, 1000); 

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <p>Current Date and Time: {dateTime.toLocaleString()}</p>
    </div>
  );
};

export default CurrentLocationAndTime;
