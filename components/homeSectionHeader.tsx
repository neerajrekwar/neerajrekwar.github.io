'use client';
import Link from "next/link";
import Image from "next/image";
import { Alata, Caveat } from "next/font/google";
import DeviceAddress from "./DeviceAddress";

import Weather from "./WeatherApp";
import { AuroraBackgroundDemo as BackgroundAurra } from "./BackgroundAurra";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import TextFlipper from "./TextFlipper";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
});
const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export default function HomeSectionHeader() {
  return (
    <>
      <header className="min-h-screen relative flex items-center text-primary overflow-hidden w-full">
        <nav className="absolute top-0 left-0 w-full flex justify-between items-start px-6 md:px-12 py-6 z-50">
          <div className={`${alata.className} ${caveat.className}`}>
            <Link
              href={"/"}
              className="text-five text-3xl sm:text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity"
            >
              nee.
            </Link>
          </div>
          <div className="text-five flex flex-col md:flex-row items-center justify-start gap-3 text-start">
            <DeviceAddress />
            <Weather />
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center z-10 pt-20"
        >
          <div className="w-full text-left text-four">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 2 }}
              className="flex items-center gap-3 w-fit px-2 py-1.5 pr-5 mb-8 rounded-full bg-seven/30 border border-seven backdrop-blur-md"
            >
              <motion.div
                whileDrag={{}}
                initial={{ rotate: 160, scale: 0.2, x: -200, x2: 0, y: -200 }}
                animate={{ rotate: 360, scale: 0.1, x: 400, x2: 400, y: 200 }}
                whileInView={{ rotate: 0, scale: 1, x2: -1040, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: 4,
                  duration: 4,
                  ease: [0.6, 0.05, -0.01, 0.14],
                }}
              >
                <Image
                  src={"/me.webp"}
                  width={36}
                  height={36}
                  loading="lazy"
                  alt="Neeraj Rekwar"
                  className="aspect-square object-cover rounded-full shadow-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2, duration: 1 }}
                className="flex flex-col justify-center"
              >
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1, duration: 1 }}
                  className="text-sm font-semibold text-five leading-tight"
                >
                  Neeraj Rekwar
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 60, delay: 3, duration: 3 }}
                  className="flex items-center gap-2"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-four font-medium leading-none">
                    Available for freelance
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: [0.68, -0.55, 0.27, 1.55],
              }}
              className="relative text-five font-bold z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6"
            >
              Build the right way <br className="hidden sm:block" /> with              <span className="flex items-center gap-3">
                 <TextFlipper />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="max-w-2xl text-four text-base md:text-lg leading-relaxed mb-10 opacity-90"
            >
              Build the right way with programmers who turn ideas into scalable,
              secure, and high-performance solutions—crafted with precision,
              collaboration, and future-ready technology to help your business
              grow confidently.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-4 mt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.2, x: -200, y: -200 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0, 0.71, 0.2, 1.01], type: "spring", stiffness: 400 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-five text-primary font-semibold hover:bg-five/80 transition-all duration-300 shadow-lg hover:shadow-five/20 text-sm md:text-base inline-block"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.2, x: -200, y: -200 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01], type: "spring", stiffness: 400 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  href="/projects"
                  className="px-8 py-3.5 rounded-full bg-transparent border border-seven text-five font-semibold hover:bg-seven/30 transition-all duration-300 flex items-center gap-2 text-sm md:text-base inline-flex"
                >
                  <IconBrandYoutubeFilled className="w-5 h-5 text-four" />
                  Explore Work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
