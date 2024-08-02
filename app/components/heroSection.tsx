"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingVsStarts";
import AgeCalculator from "./AgeCalculator";

export function HeroSection() {
  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <section className="bgrid2 bg-primary text-four  min-h-screen">
        <div className="  max-w-6xl m-auto">
          <div className="bgrid2 z-10 md:flex justify-center md:text-3xl pt-16 font-bold ">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{duration: 0.6, delay: .4}}
              animate={{}}
              className=" text-2xl p-4 w-fit overflow-hidden "
            >
              About Me
            </motion.h2>
          </div>
          <div className="overflow-hidden min-h-screen  lg:flex-row-reverse gap-2 lg:flex">
            {/* <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{}}
              className=" p-4 m-2  rounded-md bg-five  md:text-6xl  "
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-five ">
                Thinks create, develop, and grow-up tents{" "}
              </p>
            </motion.div> */}
            <div className=" mx-2 p-2 z-10 pb-4 rounded-lg basis-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                className="w-fit overflow-x-hidden  z-9 py-2 font-semibold  px-2 md:p-4  md:px-4 rounded-full md:text-6xl "
              >
                Who Am I?{" "}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                
                className="py-2  px-2 md:p-4  md:px-4 text-xl sm:text-2xl md:text-3xl"
              >
                I&apos;m Neeraj Rekwar, with Programmer & Digital Marketing
                Expert.
              </motion.h2>

              <div className="md:flex mt-10 md:pt-6 ">
                <motion.ul
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="px-2 md:text-lg md:p-4 md:pt-16  md:px-4"
                >
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex "
                  >
                    <span className="">Native:</span>
                    <motion.p className="pl-1 font-semibold">
                      New Delhi
                    </motion.p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex "
                  >
                    <span className="">Current Age:</span>
                    <motion.p className="pl-1 flex">
                      <AgeCalculator /> years
                    </motion.p>
                  </motion.li>
                </motion.ul>
                <motion.ul
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{}}
                  transition={{ duration: 0.8 }}
                  className="md:text-lg px-2 md:p-4 md:pt-16  md:px-4"
                >
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex "
                  >
                    <span className="">From:</span>
                    <motion.p className="pl-1 font-semibold">
                      Madhya Pradesh, Bharat
                    </motion.p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.8  }}
                    className="flex "
                  >
                    <span className="">Email:</span>
                    <motion.p className="pl-1 font-semibold">
                      neerajrekwar817@gmail.com{" "}
                    </motion.p>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
            <div className="grid justify-center items-center border-five h-max  m-2 rounded-lg basis-1/2">
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                transition={{ duration: 2 }}
                className="overflow-hidden z-20 md:h-[24rem] aspact-sqaure boreder-2 sm:w-[18rem] object-contain sm:h-[18rem] h-auto w-[20rem] "
              >
                <Image
                  src="/me_profile2.webp"
                  width={350}
                  height={350}
                  alt="Picture of the author"
                  className="bg-bottom  rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </section>
      <section className="bgrid2 bg-primary text-four min-h-screen">
        <div className="  max-w-6xl m-auto">
          <div className="bgrid2 z-10 md:flex justify-center md:text-3xl pt-16 font-bold ">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{duration: 0.6, delay: .4}}
              animate={{}}
              className=" text-2xl p-4 w-fit overflow-hidden "
            >
              My Skills
            </motion.h2>
          </div>
          <div className="overflow-hidden min-h-screen  lg:flex-row-reverse gap-2 lg:flex">
            {/* <motion.div
              initial={{ opacity: 0, x: 200 , y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{}}
              className=" p-4 m-2  rounded-md bg-five  md:text-6xl  "
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-five ">
                Thinks create, develop, and grow-up tents{" "}
              </p>
            </motion.div> */}
            <div className=" mx-2 p-2 z-10 pb-4 rounded-lg basis-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                className="w-fit overflow-x-hidden  z-9 py-2 font-semibold  px-2 md:p-4  md:px-4  md:text-6xl "
              >
                Evolving digital landscape in my expertise below the showcase{" "}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}

                className="py-2  px-2 md:p-4  md:px-4 text-xl sm:text-2xl md:text-3xl"
              >
                Digital marketing specialize
              </motion.h2>

              <div className="md:flex mt-10 md:pt-6 ">
                <motion.ul
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="px-2 md:text-lg md:p-4 md:pt-16  md:px-4"
                >
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex "
                  >
                    <span className="">Native:</span>
                    <motion.p className="pl-1 font-semibold">
                      New Delhi
                    </motion.p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex "
                  >
                    <span className="">Current Age:</span>
                    <motion.p className="pl-1 flex">
                      <AgeCalculator /> years
                    </motion.p>
                  </motion.li>
                </motion.ul>
                <motion.ul
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{}}
                  transition={{ duration: 0.8 }}
                  className="md:text-lg px-2 md:p-4 md:pt-16  md:px-4"
                >
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex "
                  >
                    <span className="">From:</span>
                    <motion.p className="pl-1 font-semibold">
                      Madhya Pradesh, Bharat
                    </motion.p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.8  }}
                    className="flex "
                  >
                    <span className="">Email:</span>
                    <motion.p className="pl-1 font-semibold">
                      neerajrekwar817@gmail.com{" "}
                    </motion.p>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
            <div className="grid justify-center items-center border-five h-max  m-2 rounded-lg basis-1/2">
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                transition={{ duration: 2 }}
                className="overflow-hidden z-20 md:h-[24rem] aspact-sqaure boreder-2 sm:w-[18rem] object-contain sm:h-[18rem] h-auto w-[20rem] "
              >
                <Image
                  src="/me_profile2.webp"
                  width={350}
                  height={350}
                  alt="Picture of the author"
                  className="bg-bottom  rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
