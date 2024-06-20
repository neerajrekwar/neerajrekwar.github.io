import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      const res = await fetch("/data/items.json");
      const data: Item[] = await res.json();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="border-2 border-lime-800 grid-flow-col-dense  p-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => setSelectedId(item.id)}
          className="cursor-pointer mb-4 p-4 border border-gray-300 rounded-lg"
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId.toString()}
            className="fixed top-[20%] left-[20%] right-[20%] p-5 bg-white bg-rose-100 row-span-5  rounded-md shadow-lg "
          >
            <motion.h5>
              {items.find((item) => item.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2>
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="absolute right-2 border-2 top-2 aspact-sqaure p-2 border-none  text-white rounded-md cursor-pointer border-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedList;
