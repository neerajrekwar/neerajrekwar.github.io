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
      <header className="min-h-screen text-primary overflow-hidden">
        <div className=" border">
          <BackgroundAurra>
            <div className="absolute flex justify-between items-start px-2 w-full opacity-75 flex justify-between  text-[.6rem] md:text-[.5rem] lg:text-[.7rem] top-0 text-four z-999  text-right ">
              <div className={caveat.className}>
                <Link
                  href={"/"}
                  className=" text-five/70 text-3xl sm:text-4xl md:text-5xl font-bold"
                >
                  {/* <i className="bg-white px-[.2rem] my-1 h-[3rem] rounded  border text-black not-italic"></i> */}
                  nee
                </Link>
              </div>
              <div className="">
                <div className="text-five/70  pt-1 md:flex justify-center overflow-hidden items-center gap-4 font-bold">
                  <DeviceAddress />
                  <Weather />
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute top-40 overflow-hidden flex flex-col gap-4 items-center justify-center px-4 md:px-[14%]"
            >
              <div className="w-full text-left m-auto text-four">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 2 }}
                  className="gap-2 backdrop-blur-sm flex mb-10 flex-row  w-fit p-1 pr-8 rounded-full bg-seven justify-start items-center text-semibold"
                >
                  <motion.div
                    whileDrag={{}}
                    initial={{
                      rotate: 160,
                      scale: 0.2,
                      x: -200,
                      x2: 0,
                      y: -200,
                    }}
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
                      width={24}
                      height={24}
                      loading="lazy"
                      alt="Digital marketing for expert"
                      className="aspact-square h-10 w-10 rounded-full"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 2,
                      duration: 1,
                    }}
                    className="font-semibold opacity-75 text-sm text-five"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{ opacity: 0.7, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1,
                        duration: 1,
                      }}
                    >
                      Neeraj Rekwar
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 60,
                        delay: 3,
                        duration: 3,
                      }}
                      className="flex gap-1 h-4"
                    >
                      <p className=" flex flex-row justify-start text-red-400 items-center text-2xl">
                        &#8226;
                      </p>
                      <p className="text-four text-xs flex flex-row justify-start items-center font-normal text-sm">
                      Soon available for freelance
                      </p>
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
                  className="relative text-five font-bold z-10  text-3xl  md:text-6xl   sm:text-4xl text-left "
                >
                  Build the right to way <br />
                  <div>
                    with{" "}
                    <pre className="font-bold  z-999 inline-flex ">
                      <TextFlipper />
                    </pre>
                  </div>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="mx-auto my-2 text-four/70 text-sm  sm:text-base "
                >Build the right way with programmers who turn ideas into scalable, secure, and high-performance solutions—crafted with precision, collaboration, and future-ready technology to help your business grow confidently.</motion.p>

                <motion.div className=" gap-2 mt-10 max-w-fit flex justify-center items-center">
                  <motion.button
                    className=" bg-seven  px-4 rounded-full border-secondary  flex items-center justify-between text-primary"
                    initial={{ opacity: 0, scale: 0.2, x: -200, y: -200 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: [0, 0.71, 0.2, 1.01],
                      type: "spring",
                      stiffness: 400,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      href="/"
                      className=" rounded-full 
                 uppercase text-five/70 p-3 px-4  text-center text-sm"
                    >
                      get started
                    </Link>
                  </motion.button>
                  <motion.button
                    className=" bg-seven  px-4 rounded-full border-secondary flex items-center justify-between text-primary"
                    initial={{ opacity: 0, scale: 0.2, x: -200, y: -200 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                      type: "spring",
                      stiffness: 400,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconBrandYoutubeFilled  className="text-five/70 "/>
                    <Link
                      href="/contact"
                      className="rounded-full 
                 font-semibold p-3 px-4 text-five/70  text-center text-sm"
                    >
                      Explore{" "}
                    </Link>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </BackgroundAurra>
        </div>
      </header>
    </>
  );
}
