"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingVsStarts";
import AgeCalculator from "./AgeCalculator";
import CountAnimation from "./CountAnimation";
import { ImageSlides } from "./ImageSlides";
import Refresh from "./acceries/Refresh";
import TextRotator from "./TextsRefresh";
import {CoverDemo} from './CoverDemo';
import {MultiStepLoader} from "./MultiStepLoader"



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
              My Skills
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
                      Accusamus error alias unde optio deleniti. Deserunt vero,
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
                {/* <ul className="py-2 my-4 ">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex-col justify-start items-center"
                  >
                    
                    <motion.p 
                      initial={{ opacity: 0, x: 20, }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="pl-1 font-semibold">
                      Front End Development Libraries Certification
                    </motion.p>
                    <div className="flex justify-between border-b-1 border-dashed border-five pb-2">
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{}}
                        transition={{ }}
                        className="pl-1 text-sm">
                        Freecodecamp <motion.span
                                    
                                      animate={{}}
                                      transition={{ }}
                                      className="overflow-hidden   border-five"
                                      >
                          <motion.a 
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 0, x: 200 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            href="https://www.freecodecamp.org/certification/fcc36ba76de-81ed-4109-bcf2-c5dcfb1fc22e/responsive-web-design" >link
                          </motion.a></motion.span>
                      </motion.p>
                      <motion.p className="pl-1 text-sm md:pr-6">
                         April 21, 2022
                      </motion.p>
                    </div>
                  </motion.li>
                </ul> */}
              </div>
            </div>
            <div className="border-five flex  justify-center items-center border-five min-h-screen  m-2 rounded-lg basis-1/2">
              <div>
                <motion.ul
                  initial={{ opacity: 0, x: -40, y: -40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="container flex flex-wrap md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows "
                >
                  <motion.li
                    initial={{ opacity: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="m-2 w-full sm:w-auto rounded-lg text-right text-six bg-black aspect-square"
                  >
                    <h4 className="px-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                    <TextRotator />
                    </h4>
                    <div className="m-2">
                     
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="m-2 flex  col-span-2 rounded-lg text-six bg-black aspect-square"
                  >
                   
                    <h4 className="px-2 basis-1/2 text-4xl m-2 font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                      {" "}
                      Leveraging modern JavaScript features
                    </h4>
                    <div className="basis-1/2 bg-custom-radial flex justify-center items-center">
                      <CountAnimation />
                    </div>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="m-2 col-span-2 rounded-lg text-six bg-black aspect-square"
                  >
                   
                    <div className="rounded-md m-2 h-40 overflow-hidden z-20">
                      <ImageSlides />
                    </div>
                    <h4 className="px-2 text-4xl m-2 font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                      Efficient algorithms and data structures
                    </h4>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="m-2  rounded-lg w-full sm:w-auto text-six bg-black aspect-square"
                  >
                   
                    <h4 className="px-2 text-4xl md:text-2xl m-2 font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">Improved User Experience</h4>
                    <MultiStepLoader />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1 }}
                    className="m-2 rounded-lg text-six bg-black aspect-square"
                  >
                    
                    <h4 className="px-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br  from-pink-200 from-10% via-purple-300 from-10% to-blue-500 from-10%">
                      versions to access the latest performance optimizations
                    </h4>
                    <p className="m-2">
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="m-2 p-2 col-span-2 rounded-lg text-six bg-black aspect-square"
                  >
                      <CoverDemo />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0.5, x: -40, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="m-2 col-span-3 rounded-lg text-six bg-black"
                  >
                    
                    <h4 className="px-2 text-xl font-semibold">
                      Rigorously test your application
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
              My Skills
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
