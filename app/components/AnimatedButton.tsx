"use client"
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.button
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      
      className='py-2 px-3 border-2 text-sm rounded-full border-[#5e716a] text-yellow-400 opacity-75 font-bold'
    >
     Reach me
    </motion.button>
  );
};

export default AnimatedButton;
