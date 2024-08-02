"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingVsStarts";

export function HeroSection() {
  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <section className="bgrid2 bg-primary text-four  min-h-screen">
        <div className="  max-w-6xl m-auto">
          <div className="bgrid2 z-10   md:text-3xl pt-16 font-bold p-4">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{}}
              className=" text-2xl ">About Me</motion.h2>
          </div>
          <div className="overflow-hidden min-h-screen gap-2 lg:flex">
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
            <div className="border-2 border-five flex justify-center items-center h-80 m-2 rounded-lg basis-1/2"> <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="flex flex-col  justify-center h-60 md:h-auto  items-center"
              >
                <Image
                  src="/me_profile.webp"
                  width={350}
                  height={350}
                  alt="Picture of the author"
                  className="rounded md:rounded md:h-[18rem] aspact-sqaure boreder-2 sm:w-[18rem] sm:h-[18rem] h-[16rem] w-[16rem] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </motion.div>
            </div>
            <div className=" bg-five h-80 m-2 rounded-lg basis-1/2">
            </div>
            
            
          </div>
        </div>
      </section>
    </>
  );
}
