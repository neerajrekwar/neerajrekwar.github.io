// components/TextFlipper.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Caveat } from "next/font/google"


const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
});
const words = ['Programming', 'Creative', 'Awesome', 'Artistic', 'Photography', 'Designer', 'Enthusiast'];
const TextFlipper: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
<div className="inline-flex text-five text-left md:h-20 lg:h-24 font-bold">
     <div className={caveat.className}>
       <motion.div
         key={index}
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 10 }}
         transition={{ duration: 0.5 }}
         className=" z-10 text-3xl sm:text-lg md:text-7xl font-bold text-center"
       >
         {words[index]}
       </motion.div>
     </div>
    </div>

  );
};

export default TextFlipper;
