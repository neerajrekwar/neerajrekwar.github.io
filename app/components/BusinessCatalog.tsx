import { useState } from 'react';
import { motion } from 'framer-motion';

interface BusinessStats {
  label: string;
  value: number;
}

const stats: BusinessStats[] = [
  { label: 'Clients', value: 12 },
  { label: 'Global Projects', value: 5 },
  { label: 'Satisfied Customers', value: 30 },
  { label: 'Years of Experience', value: 3 },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
const itemVariants = [
  { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
];
const BusinessCatalog = () => {
  return (
    <motion.div
      className="container grid grid-cols-2 sm:flex-wrap md:flex text-four justify-around items-start"
      variants={container}
      initial="hidden"
      animate="visible"
      
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          className="item aspect-square md:aspect-auto flex flex-col text-center m-4 p-4 shadow-md rounded-lg"
          variants={item}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
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
