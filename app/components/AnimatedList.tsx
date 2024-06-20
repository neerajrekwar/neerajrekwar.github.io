import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
  id: number;
  title: string;
  subtitle: string;
}

const AnimatedList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/items.json');
      const data: Item[] = await res.json();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <motion.div 
          key={item.id} 
          layoutId={item.id.toString()} 
          onClick={() => setSelectedId(item.id)}
          style={{ cursor: 'pointer', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            layoutId={selectedId.toString()} 
            style={{ position: 'fixed', top: '20%', left: '20%', right: '20%', padding: '20px', background: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <motion.h5>{items.find(item => item.id === selectedId)?.subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId)?.title}</motion.h2>
            <motion.button 
              onClick={() => setSelectedId(null)}
              style={{ marginTop: '10px', padding: '10px', border: 'none', background: '#0070f3', color: 'white', borderRadius: '4px', cursor: 'pointer' }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedList;
