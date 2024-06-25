// components/DotCircle.tsx
'use client'
import { motion } from 'framer-motion';

const DotCircle: React.FC = () => {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="10"
        fill="#3C6E71"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
};

export default DotCircle;
