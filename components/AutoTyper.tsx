// components/AutoTyper.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AutoTyperProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const AutoTyper: React.FC<AutoTyperProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = index % texts.length;
      const fullText = texts[currentIndex];

      if (isDeleting) {
        setDisplayText((prev) => fullText.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      } else {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-4xl lg:text-5xl"
    >
      {displayText}
      <span className="blinking-cursor ">|</span>
    </motion.div>
  );
};

export default AutoTyper;
