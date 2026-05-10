// components/TextFlipper.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});
const words = [
  "Entrepreneur",
  "Developer",
  "Programmer",
  "Enthusiast",
];
const TextFlipper: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex text-left md:h-20 lg:h-24 font-bold">
      <div className={caveat.className}>
        <div className="py-1 border-black pr-4 relative flex justify-center items-center">
          <AnimatePresence mode="wait">
          <motion.div
            key={index}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
              className="z-10 text-five/70 font-bold text-center origin-center"
          >
            {words[index]}
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TextFlipper;
