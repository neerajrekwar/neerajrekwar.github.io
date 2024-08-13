"use client";
import React from "react";
import { TextGenerateEffectDemo } from "./textGenerate";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import AutoTyper from "./AutoTyper";
import BusinessCatalog from "./BusinessCatalog";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative w-full">
      <figure className="w-auto z-10  lg:flex-col  justify-center border-blue-500 sm:justify-evenly  items-center sm:flex md:flex-row-reverse sm:border-green-500">
        <div className=" md:flex md:flex-row-reverse max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.2, x: -200, y: -200  }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0  }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
               type: "spring", stiffness: 400, damping: 20,
            }}
            className="flex flex-col basis-1/2 justify-center h-60 md:h-auto items-center"
          >
            <Image
              src="/me.webp"
              width={350}
              height={350}
              loading="lazy"
              alt="Picture of the author"
              className="rounded md:h-[18rem] aspact-sqaure boreder-2 sm:w-[18rem] sm:h-[18rem] h-[8rem] w-[8rem] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
            />
          </motion.div>
          <div className="flex text-five basis-1/2 flex-col m-auto justify-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.2, x: -200, y: -200  }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0  }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-xl bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%m-2 px-8 py-4  md:text-3xl">
              <p className="font-normal">Hello, World!</p>
              <div className="text-2xl md:text-4xl lg:text-5xl flex">
                <p className="pr-2">I am</p>
                <AutoTyper
                  texts={["Progammer", "Developer", "Environmentalist", "Freelancer", "Digital marketing"]}
                />
              </div>
            </motion.h2>
            <div className="text-base text-[#5e716a] md:text-xl m-2 mx-8 pb-6 ">
              <TextGenerateEffectDemo />
            </div>
            <div className="text-base  text-[#E0F2E9] md:mt-10 flex gap-2 md:text-xl m-2 mx-8 ">
              <motion.button
                className="box p-2 px-4 rounded-full shadow-[inset_4px_7px_7px_2px_var(--seven)]  bg-seven"
                initial={{ opacity: 0, scale: 0.2, x: -200, y: -200  }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0  }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  type: "spring", stiffness: 400
                }}
                whileHover={{ scale: 1.1 }}
                
              >
                <Link
                  href="/contact"
                  className="p-2 px-4  text-secondary rounded-full 
                  bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%   "
                >
                  Let&apos;s talk
                </Link>
              </motion.button>
              <motion.button
                className=" box p-2 px-4 rounded-full shadow-[inset_4px_7px_7px_2px_var(--seven)]  bg-seven"
                initial={{ opacity: 0, scale: 0.2, x: -200, y: -200  }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0  }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                  type: "spring", stiffness: 400
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  href="/contact"
                  className=" rounded-full 
                  bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%   "
                >
                  Cantact{" "}
                </Link>
              </motion.button>
            </div>
            <div className="text-base md:text-xl m-2 mx-8 ">
              <div className="flex text-four py-6">
                <motion.span
                  initial={{ scale: 0.2, x: -200, y: -200  }}
                  animate={{ rotate: 360, scale: 1, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 2,
                    duration: 5,
                  }}
                  className=" p-2 m-1 shadow-[inset_4px_2px_7px_2px_var(--seven)] bg-seven  rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" hover:text-[#e7700d] active:text-[#e7700d ] transition-all duration-[1s] icon icon-tabler icons-tabler-outline icon-tabler-brand-stackoverflow"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
                    <path d="M8 16h8" />
                    <path d="M8.322 12.582l7.956 .836" />
                    <path d="M8.787 9.168l7.826 1.664" />
                    <path d="M10.096 5.764l7.608 2.472" />
                  </svg>
                </motion.span>
                <motion.span
                    initial={{ scale: 0.2,  x: -400, y: -200  }}
                    animate={{ rotate: 360, scale: 1, x: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 3,
                      duration: 5,
                    }}
                  
                  className="p-2 m-1 shadow-[inset_4px_2px_7px_2px_var(--seven)] bg-seven rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-[#053eff] active:text-[#053eff ] transition-all duration-[1s] icon icon-tabler icons-tabler-outline icon-tabler-brand-behance"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                    <path d="M3 12l4.5 0" />
                    <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                    <path d="M16 6l3 0" />
                  </svg>
                </motion.span>
                <motion.span
                  initial={{ scale: 0.2, x: -400, y: -200  }}
                  animate={{ rotate: 360, scale: 1, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 12,
                    duration: 5,
                  }}
                  className="p-2 m-1 shadow-[inset_4px_2px_7px_2px_var(--seven)] bg-seven rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-[#e60023] active:text-[#e60023] transition-all duration-[1s] icon icon-tabler icons-tabler-outline icon-tabler-brand-pinterest"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 20l4 -9" />
                    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  </svg>
                </motion.span>
                <motion.span
                  initial={{ scale: 0.2, x: -400, y: -200  }}
                  animate={{ rotate: 360, scale: 1, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 5,
                    duration: 5,
                  }}
                  className="p-2 m-1 shadow-[inset_4px_2px_7px_2px_var(--seven)] bg-seven rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-[#068932] active:text-[#068932] transition-all duration-[1s] icon icon-tabler icons-tabler-outline icon-tabler-brand-hackerrank"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.484 5.667c-1.146 -.904 -3.35 -2.394 -6.497 -3.429c-.484 -.159 -.725 -.238 -1.04 -.238c-.314 0 -.556 .08 -1.04 .238c-3.147 1.035 -5.35 2.525 -6.496 3.43c-.402 .317 -.604 .476 -.797 .816c-.194 .341 -.233 .62 -.309 1.178a33 33 0 0 0 -.305 4.338c0 1.742 .165 3.317 .305 4.338c.076 .558 .115 .837 .309 1.178c.193 .34 .395 .5 .797 .817c1.146 .904 3.35 2.394 6.497 3.429c.483 .159 .725 .238 1.04 .238c.314 0 .555 -.08 1.04 -.238c3.146 -1.035 5.35 -2.525 6.496 -3.43c.402 -.317 .603 -.476 .797 -.816c.194 -.341 .232 -.62 .309 -1.178c.14 -1.021 .305 -2.596 .305 -4.338s-.165 -3.317 -.305 -4.338c-.077 -.558 -.115 -.837 -.309 -1.178s-.395 -.5 -.797 -.817" />
                    <path d="M9 8v7" />
                    <path d="M9 12h6" />
                    <path d="M16 16h-2l1 1z" />
                    <path d="M8 8h2l-1 -1z" />
                    <path d="M15 9v7" />
                  </svg>
                </motion.span>
              </div>
            </div>
          </div>
          
        </div>
        {/* <div className="flex justify-center items-center">
          <BusinessCatalog />
        </div> */}
      </figure>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
