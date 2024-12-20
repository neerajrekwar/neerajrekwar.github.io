import React, { useState, useEffect, useRef } from "react";
import Refresh from "./acceries/Refresh"; // Assuming you have a Refresh component
import { motion } from "framer-motion";

const texts = [
  "Optimized",
  "libraries",
  "and",
  "frameworks",
];

const TextRotator = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const refreshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (refreshRef.current) {
      refreshRef.current.classList.add('animate-spin');
      setTimeout(() => {
        if (refreshRef.current) { // Check if refreshRef.current exists
          refreshRef.current.classList.remove('animate-spin'); 
        }
      }, 1000); // Rotate for 1 second
    }
  }, [currentTextIndex]);

  return (
    <div className="flex flex-col items-end justify-end  ">
      <div ref={refreshRef} className="animate-spin rounded-full">
        <Refresh />
      </div>
      <motion.div 
        
        className="mb-4 text-2xl">
        {texts[currentTextIndex]}
      </motion.div>
    </div>
  );
};

export default TextRotator;
