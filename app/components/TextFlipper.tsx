// components/TextFlipper.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ['Programmer', 'Creator', 'Artist', 'Photographer', 'Designer', 'Enthusiast'];

const TextFlipper: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex text-left lg:h-24 font-bold ">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className=" z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
      >
        {words[index]}
      </motion.div>
    </div>
  );
};

export default TextFlipper;
