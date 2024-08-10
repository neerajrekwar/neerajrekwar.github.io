"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingVsStarts";
import AgeCalculator from "./AgeCalculator";
import CountAnimation from "./CountAnimation";
import { ImageSlides } from "./ImageSlides";
import TextRotator from "./TextsRefresh";
import { CoverDemo } from "./CoverDemo";
import { MultiStepLoader } from "./MultiStepLoader";
import { Source_Code_Pro } from "next/font/google";
import ReactMarkdown from "react-markdown";

const markdown = `
[![Deploy Next.js site to Pages](https://github.com/neerajrekwar/neerajrekwar.github.io/actions/workflows/nextjs.yml/badge.svg)](https://github.com/neerajrekwar/neerajrekwar.github.io/actions/workflows/nextjs.yml)
`;

const source_code_pro = Source_Code_Pro({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-source-code-pro",
});

export function HeroSection() {
  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <section className=" bgrid2 text-four  min-h-screen">
        <div className=" max-w-6xl m-auto">
          <div className=" bgrid2 z-10 md:flex justify-center md:text-3xl pt-16 font-bold ">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                transition={{ delay: 0.4 }}
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
                    <span className="pr-1 flex">Current Age:</span>
                    
                      <AgeCalculator /> years
                    
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
                    transition={{ duration: 0.8, delay: 0.8 }}
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
                initial={{ opacity: 0, y: 40, x: -40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                animate={{}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="overflow-hidden z-20 md:h-[24rem] aspact-sqaure boreder-2 sm:w-[18rem] object-contain sm:h-[18rem] h-auto w-[20rem] "
              >
                <Image
                  src="/me_profile2.webp"
                  width={350}
                  height={350}
                  loading="lazy"
                  alt="Picture of the author"
                  className="bg-bottom  rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </section>
      <section className="bgrid2  text-four min-h-screen">
        <div className=" max-w-6xl m-auto">
          <div className="bgrid2 z-10 md:flex justify-center md:text-3xl pt-16 font-bold ">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              animate={{}}
              className=" text-2xl p-4 w-fit overflow-hidden "
            >
              My Skill
            </motion.h2>
          </div>
          <div className="overflow-hidden min-h-screen pb-20 lg:flex-row gap-2 lg:flex">
            <div className="border-five flex-col justify-between m-2 p-2 z-10 pb-4 rounded-lg basis-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                transition={{ delay: 1 }}
                className="w-fit overflow-x-hidden  z-9 py-2 font-semibold  px-2 md:p-4  md:px-4 text-2xl  md:text-6xl "
              >
                Evolving digital landscape in my expertise below the showcase.{" "}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                className="py-8 my-6  px-2 md:p-4  md:px-4 text-xl sm:text-2xl md:text-3xl"
              >
                <span className="text-third">&#9679;</span> Digital marketing
                specialize
              </motion.h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo voluptates molestiae sequi.
              </p>
              <div className="">
                <h6 className="font-semibold mt-8 text-xl md:text-2xl">
                  Certifications
                </h6>
                <ul className="py-2 my-2 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      Fundamental of Digital Marketing
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Google Digital Unlocked
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        September 2020
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>
                <ul className="py-2 my-4 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      Email Marketing
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Hubspot Academy
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        October 2023
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>
                <ul className="py-2 my-4 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      Entrepreneurship: From Business Idea to Action
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Futurelearn{" "}
                        <motion.span
                          animate={{}}
                          transition={{}}
                          className="overflow-hidden   border-five"
                        >
                          <motion.a
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 0, x: 200 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            href="https://www.futurelearn.com/certificates/tgje1n2"
                          >
                            link
                          </motion.a>
                        </motion.span>
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        June 2021
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="border-five flex  justify-center items-center border-five min-h-screen  m-2 rounded-lg basis-1/2">
              <div>
                <motion.ul
                  initial={{ opacity: 0, x: 40, y: 40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="container flex flex-wrap md:grid md:grid-flow-row-dense md:grid-cols-2 md:grid-rows "
                >
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-primary bg-black border-seven border"
                  >
                    <div className="md:pb-4 text-six">
                      <h4 className="px-2 text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                        Search Engine Optimization
                      </h4>

                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti.
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 text-white icon icon-tabler icons-tabler-outline icon-tabler-search"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                      <path d="M21 21l-6 -6" />
                    </svg>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-primary bg-black border-seven border"
                  >
                    <div className="md:pb-4 text-six">
                      <h4 className="px-2 text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                        Socail Media
                      </h4>
                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 text-white icon icon-tabler icons-tabler-outline icon-tabler-social"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M12 7l0 4" />
                      <path d="M6.7 17.8l2.8 -2" />
                      <path d="M17.3 17.8l-2.8 -2" />
                    </svg>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-primary bg-black border-seven border"
                  >
                    <div className="md:pb-4 text-six">
                      <h4 className="px-2 text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                        How to Grow Online
                      </h4>
                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 text-white icon icon-tabler icons-tabler-outline icon-tabler-world-www"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-primary bg-black border-seven border"
                  >
                    <div className="md:pb-4 text-six">
                      <h4 className="px-2 text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                        Localization
                      </h4>
                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 text-white icon icon-tabler icons-tabler-outline icon-tabler-building-store"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21l18 0" />
                      <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                      <path d="M5 21l0 -10.15" />
                      <path d="M19 21l0 -10.15" />
                      <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                    </svg>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-primary bg-black border-seven border"
                  >
                    <div className="md:pb-4 text-six">
                      <h4 className="px-2 text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                        Google Analytics
                      </h4>
                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-google-analytics"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 9m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                      <path d="M17 3m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    </svg>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-primary bg-black border-seven border"
                  >
                    <div className="md:pb-4 text-six">
                      <h4 className="px-2 text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                        Ads Word
                      </h4>
                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 text-white icon-tabler icons-tabler-outline icon-tabler-mailbox"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                      <path d="M12 11v-8h4l2 2l-2 2h-4" />
                      <path d="M6 15h1" />
                    </svg>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-primary bg-black border-seven border"
                  >
                    <div className="md:pb-4 text-six">
                      <h4 className="px-2 text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                        Email Marketing
                      </h4>
                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 text-white icon-tabler icons-tabler-outline icon-tabler-mailbox"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                      <path d="M12 11v-8h4l2 2l-2 2h-4" />
                      <path d="M6 15h1" />
                    </svg>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
          <div className="overflow-hidden min-h-screen pb-20 lg:flex-row-reverse gap-2 lg:flex">
            <div className="border-five flex-col justify-between m-2 p-2 z-10 pb-4 rounded-lg basis-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                transition={{ delay: 1 }}
                className="w-fit overflow-x-hidden  z-9 py-2 font-semibold  px-2 md:p-4  md:px-4 text-2xl  md:text-6xl "
              >
                Latest codes can enhance web app performance effectively.{" "}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                className="py-8 my-6  px-2 md:p-4  md:px-4 text-xl sm:text-2xl md:text-3xl"
              >
                <span className="text-third">&#9679;</span> Passionate
                programmer
              </motion.h2>
              <p>
                Absolutely, the quality and efficiency of your code directly
                influence web application performance.
              </p>
              <div className="">
                <h6 className="font-semibold mt-8 text-xl md:text-2xl">
                  Certifications
                </h6>

                <ul className="py-2 my-4 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      Responsive web design
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Freecodecamp{" "}
                        <motion.span
                          animate={{}}
                          transition={{}}
                          className="overflow-hidden   border-five"
                        >
                          <motion.a
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 0, x: 200 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            href="https://www.freecodecamp.org/certification/fcc36ba76de-81ed-4109-bcf2-c5dcfb1fc22e/responsive-web-design"
                          >
                            link
                          </motion.a>
                        </motion.span>
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        April 21, 2022
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>
                <ul className="py-2 my-4 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      JavaScript Algorithms and Data Structures (Beta)
                      Certification
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Freecodecamp{" "}
                        <motion.span
                          animate={{}}
                          transition={{}}
                          className="overflow-hidden   border-five"
                        >
                          <motion.a
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 0, x: 200 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            href="https://www.freecodecamp.org/certification/fcc36ba76de-81ed-4109-bcf2-c5dcfb1fc22e/responsive-web-design"
                          >
                            link
                          </motion.a>
                        </motion.span>
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        Pursuing
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>

                <div className="border-five flex-col justify-between mt-10 p-2 z-10  border-third">
                  <motion.ul 
                    initial={{ opacity: 0,  x: -20 }}
                    whileInView={{ opacity: 1,  x: 0 }}
                    transition={{duration: 0.4}}
                    className="py-8 md:flex md:justify-between">
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="py-4 basis-1/2">
                      Version Control with Git{" "}
                      <span className={source_code_pro.className}>
                        <p className="text-4xl">v2.46.0</p>
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="py-4 basis-1/2">
                      <h1>Deployment Badge</h1>
                      <ReactMarkdown>{markdown}</ReactMarkdown>
                    </motion.li>
                  </motion.ul>
                    <motion.ul 
                      initial={{ opacity: 0,  x: -20 }}
                      whileInView={{ opacity: 1,  x: 0 }}
                      transition={{duration: 0.4}}
                    className="pb-8 flex md:justify-between ">
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{}}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      className="py-4 basis-1/2">
                      Front-end & UI{" "}
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-framer"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
                        </svg>
                      </div>
                    </motion.li>
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{}}
                        transition={{ duration: 0.4, delay: 0.6 }} 
                      className="py-4 basis-1/2">
                      <h1>Current</h1>
                      <p className="font-bold text-[#8f5b84]">
                        ▲ Next.js 14.2.5
                      </p>
                    </motion.li>
                  </motion.ul>
                    <motion.ul 
                      initial={{ opacity: 0,  x: -20 }}
                      whileInView={{ opacity: 1,  x: 0 }}
                      transition={{duration: 0.4}} 
                    className="pb-8 flex md:justify-between">
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{}}
                        transition={{ duration: 0.4, delay: 0.6 }} 
                      className="py-4 flex items-start flex-col basis-1/2">
                      Library & Frameworks{" "}
                      <div className="flex items-start flex-col">
                        <p className="font-bold  items-center  flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={44}
                            height={44}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-npm"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M1 8h22v7h-12v2h-4v-2h-6z" />
                            <path d="M7 8v7" />
                            <path d="M14 8v7" />
                            <path d="M17 11v4" />
                            <path d="M4 11v4" />
                            <path d="M11 11v1" />
                            <path d="M20 11v4" />
                          </svg>{" "}
                          v10.8.2
                        </p>
                        <p className="font-bold  items-center  flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={44}
                            height={44}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                            <path d="M15 12v-3" />
                          </svg>{" "}
                          v14.2.5
                        </p>
                        <p className="font-bold  items-center  flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={44}
                            height={44}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-react">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
                            <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
                            <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
                            <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
                            <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
                            <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
                            <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
                          </svg>{" "}
                          v18.3.1
                        </p>
                      </div>
                    </motion.li>
                    <li className="py-4 basis-1/2">
                      <h1>back-end with Database</h1>
                      
                    </li>
                  </motion.ul>
                </div>
              </div>
            </div>
            <div className="border-five flex  justify-center items-center border-five min-h-screen  m-2 rounded-lg basis-1/2">
              <div>
                <motion.ul
                  initial={{ opacity: 0, x: -40, y: -40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className=" rounded-md flex flex-col md:grid sm:grid-flow-row-dense sm:grid-rows-2 md:grid-cols-3 "
                >
                  <motion.li
                    initial={{ opacity: 0, scale: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="m-2 flex flex-col justify-between  sm:w-auto rounded-lg text-right text-six bg-black aspect-square"
                  >
                    <motion.h4 className="px-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                      <TextRotator />
                    </motion.h4>
                    <div className="flex m-2 justify-center items-center aspect-[16/9]  rounded-md bg-custom-radial-s">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        whileInView={{ opacity: 0.1, scale: 1.1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                      >
                        apear soon
                      </motion.p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="m-2 flex border border-seven  col-span-2 rounded-lg text-six bg-black aspect-square"
                  >
                    <h4 className="px-2 basis-1/2 text-4xl m-2 font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                      {" "}
                      Leveraging modern JavaScript features
                    </h4>
                    <div className="basis-1/2 pt-2 bg-custom-radial flex justify-center items-center">
                      <CountAnimation />
                    </div>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, scale: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="m-2 border border-seven col-span-2 rounded-lg text-six bg-black aspect-square"
                  >
                    <div className="rounded-md m-2 h-60 overflow-hidden  z-20">
                      <ImageSlides />
                    </div>
                    <motion.h4
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-4xl m-2 overflow-hidden font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%"
                    >
                      Efficient algorithms and data structures
                    </motion.h4>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="m-2  rounded-lg  sm:w-auto text-six bg-black aspect-square"
                  >
                    <motion.h4
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-4xl md:text-2xl m-2 font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%"
                    >
                      Improved User Experience
                    </motion.h4>
                    <MultiStepLoader />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 1 }}
                    className="m-2 rounded-lg text-six bg-black aspect-square"
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%"
                    >
                      versions to access the latest performance optimizations
                    </motion.h4>
                    <p className="m-2">
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="m-2 p-2 col-span-2 rounded-lg text-six bg-black aspect-square"
                  >
                    <CoverDemo />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="m-2 col-span-3 md:h-40 rounded-lg text-six bg-black aspect-square"
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%"
                    >
                      Rigorously test your application
                    </motion.h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgrid2  text-four min-h-screen">
        <div className=" max-w-6xl m-auto">
          <div className="bgrid2 z-10 md:flex justify-center md:text-3xl pt-16 font-bold ">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              animate={{}}
              className=" text-2xl p-4 w-fit overflow-hidden "
            >
              Hobbies
            </motion.h2>
          </div>
          <div className="overflow-hidden min-h-screen  lg:flex-row gap-2 lg:flex">
            <div className="border-five flex-col justify-between m-2 p-2 z-10 pb-4 rounded-lg basis-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                transition={{ delay: 1 }}
                className="w-fit overflow-x-hidden  z-9 py-2 font-semibold  px-2 md:p-4  md:px-4 text-2xl  md:text-6xl "
              >
                Evolving digital landscape in my expertise below the showcase{" "}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{}}
                className="py-8 my-6  px-2 md:p-4  md:px-4 text-xl sm:text-2xl md:text-3xl"
              >
                <span className="text-third">&#9679;</span> Digital marketing
                specialize
              </motion.h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo voluptates molestiae sequi.
              </p>
              <div className="">
                <h6 className="font-semibold mt-8 text-xl md:text-2xl">
                  Certifications
                </h6>
                <ul className="py-2 my-2 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      Fundamental of Digital Marketing
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Google Digital Unlocked
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        September 2020
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>
                <ul className="py-2 my-4 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      Email Marketing
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Hubspot Academy
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        October 2023
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>
                <ul className="py-2 my-4 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold"
                    >
                      Entrepreneurship: From Business Idea to Action
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{}}
                        className="pl-1 text-sm"
                      >
                        Futurelearn{" "}
                        <motion.span
                          animate={{}}
                          transition={{}}
                          className="overflow-hidden   border-five"
                        >
                          <motion.a
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 0, x: 200 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            href="https://www.futurelearn.com/certificates/tgje1n2"
                          >
                            link
                          </motion.a>
                        </motion.span>
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                        June 2021
                      </motion.p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="border-five flex  justify-center items-center border-five min-h-screen  m-2 rounded-lg basis-1/2">
              <div>
                <motion.ul
                  initial={{ opacity: 0, x: 40, y: 40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="container flex flex-wrap md:grid md:grid-flow-row-dense md:grid-cols-2 md:grid-rows "
                >
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="m-2  rounded-lg text-six bg-four"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 icon icon-tabler icons-tabler-outline icon-tabler-search"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                      <path d="M21 21l-6 -6" />
                    </svg>
                    <h4 className="px-2 text-xl font-semibold">
                      Search Engine Optimization
                    </h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="m-2  rounded-lg text-six bg-four"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 icon icon-tabler icons-tabler-outline icon-tabler-social"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M12 7l0 4" />
                      <path d="M6.7 17.8l2.8 -2" />
                      <path d="M17.3 17.8l-2.8 -2" />
                    </svg>
                    <h4 className="px-2 text-xl font-semibold">
                      {" "}
                      Socail Media
                    </h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1 }}
                    className="m-2  rounded-lg text-six bg-four"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 icon icon-tabler icons-tabler-outline icon-tabler-world-www"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </svg>
                    <h4 className="px-2 text-xl font-semibold">
                      How to Grow Online
                    </h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="m-2  rounded-lg text-six bg-four"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 icon icon-tabler icons-tabler-outline icon-tabler-building-store"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21l18 0" />
                      <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                      <path d="M5 21l0 -10.15" />
                      <path d="M19 21l0 -10.15" />
                      <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                    </svg>
                    <h4 className="px-2 text-xl font-semibold">Localization</h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="m-2 rounded-lg text-six bg-four"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-google-analytics"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 9m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                      <path d="M17 3m0 1.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105z" />
                      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    </svg>
                    <h4 className="px-2 text-xl font-semibold">
                      Google Analytics
                    </h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="m-2  rounded-lg text-six bg-four"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 icon-tabler icons-tabler-outline icon-tabler-mailbox"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                      <path d="M12 11v-8h4l2 2l-2 2h-4" />
                      <path d="M6 15h1" />
                    </svg>
                    <h4 className="px-2 text-xl font-semibold">Ads Word</h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="m-2 rounded-lg text-six bg-four"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-2 icon-tabler icons-tabler-outline icon-tabler-mailbox"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                      <path d="M12 11v-8h4l2 2l-2 2h-4" />
                      <path d="M6 15h1" />
                    </svg>
                    <h4 className="px-2 text-xl font-semibold">
                      Email Marketing
                    </h4>
                    <p className="m-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
