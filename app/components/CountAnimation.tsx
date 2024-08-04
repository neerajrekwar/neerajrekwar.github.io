// components/CountAnimation.tsx
'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Source_Code_Pro } from "next/font/google"


const source_code_pro = Source_Code_Pro({
  weight: '400',
  subsets: ['latin'],
});

const CountAnimation = () => {
    const [count, setCount] = useState(0);
    const [upCount, setUpCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % 10); // Loop from 0 to 9
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

   
    useEffect(() => {
        const interval = setInterval(() => {
            setUpCount((prevCount) => (prevCount + 1) % 10); // Loop from 0 to 9
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);
              
    return (
       <div className={source_code_pro.className}>
           <motion.div className='border-2 bg-five w-20 h-20 flex justify-center items-center rounded-lg p-4'>
               <motion.div
                   key={count}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.5 }}
                   className="text-4xl font-bold"
               >
                   {count}
               </motion.div>
               <motion.div
                   key={upCount}
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 20 }}
                   transition={{ duration: 0.5 }}
                   className="text-4xl font-bold"
               >
                   {upCount}
               </motion.div>
           </motion.div>
       </div>
    );
};

export default CountAnimation;
