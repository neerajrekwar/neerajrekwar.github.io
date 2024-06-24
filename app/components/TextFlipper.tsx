// components/TextFlipper.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ['Programmer', 'Creator', 'Artist', 'Photographer', 'Designer', 'Enthusiast'];

const TextFlipper: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex text-left h-full ">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold dark:text-gray-100 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-left text-3xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {words[index]}
      </motion.div>
    </div>
  );
};

export default TextFlipper;