'use client';
import { useState, useEffect } from 'react';

const AgeCalculator: React.FC = () => {
  const calculateAge = (dob: Date): number => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    const dob = new Date('2001-10-20');
    setAge(calculateAge(dob));
  }, []);

  return (
    
      <div className="">
        <span className="font-semibold pr-1">{age}</span> 
      </div>
   
  );
};

export default AgeCalculator;
