'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ImageGallery.module.css';

const images = [
  '/projects/mypro.png',
  '/projects/mypro.png',
  '/projects/mypro.png',
  '/projects/mypro.png'
]; // Add more image paths as needed

const ImageGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', (e) => {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          e.preventDefault();
          window.scrollBy({
            top: e.deltaY,
            behavior: 'smooth',
          });
        }
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.galleryContainer}>
      <motion.div style={{ y }} className={styles.imageContainer}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} className={styles.image} />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
