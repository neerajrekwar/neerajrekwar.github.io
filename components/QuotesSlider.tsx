import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The purpose of our lives is to be expedition.",
];

const QuotesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change the quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center  rounded-md shadow-lg">
      <div className="relative w-full max-w-lg text-center ">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full"
          >
            <p className="text-sm font-semibold">{quotes[currentIndex]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuotesSlider;
