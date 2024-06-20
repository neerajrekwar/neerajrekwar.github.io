"use client"
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      
      className='sm:py-[1rem] sm:px-[1.5rem] py-2 px-3 sm:text-sm  text-[#242424] text-sm rounded-full bg-gradient-to-br from-[#5e716a] to-[#D9D9D9] font-bold'
    >
     Reach me
    </motion.button>
  );
};

export default AnimatedButton;
