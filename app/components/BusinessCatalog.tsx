import { useState } from 'react';
import { motion } from 'framer-motion';

interface BusinessStats {
  label: string;
  value: number;
}

const stats: BusinessStats[] = [
  { label: 'Clients', value: 120 },
  { label: 'Global Projects', value: 50 },
  { label: 'Satisfied Customers', value: 300 },
  { label: 'Years of Experience', value: 10 },
];

const BusinessCatalog = () => {
  return (
    <motion.div 
      className="grid border grid-cols-2 sm:flew-wrap md:flex text-four justify-around items-center">
      {stats.map((stat) => (
        <motion.div
         
          className="text-center m-4 p-4 shadow-md rounded-lg"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
        >
          <Counter targetValue={stat.value} />
          <p className="text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};



const Counter = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = useState(0);

  const startCounting = () => {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100);
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      setCount(currentValue);
    }, 20);
  };

  return (
    <motion.h3
      
      className="text-xl font-bold"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      onViewportEnter={startCounting}
    >
      {count}
    </motion.h3>
  );
};

export default BusinessCatalog;
