"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingVsStarts";
import { WobbleCardDemo } from "./WobbleCard";
import AgeCalculator from "./AgeCalculator";
import CountAnimation from "./CountAnimation";
import { ImageSlides } from "./ImageSlides";
import TextRotator from "./TextsRefresh";
import { CoverDemo } from "./CoverDemo";
import { MultiStepLoader } from "./MultiStepLoader";
import { Source_Code_Pro } from "next/font/google";
import ReactMarkdown from "react-markdown";
import { IconAdFilled, IconBrandGoogleAnalytics, IconBuildingStore, IconCalendarClock, IconCircleArrowUpRightFilled, IconMail, IconMailbox, IconSearch, IconSocial, IconSortAscendingSmallBig, IconWorldWww } from "@tabler/icons-react";
import { ParallaxScrollDemo } from "./ParallaxScrollImages";
import { InfiniteImageScroller } from "./InfiniteImageScroller";

const markdown = `
[![Deploy Next.js site to Pages](https://github.com/neerajrekwar/neerajrekwar.github.io/actions/workflows/nextjs.yml/badge.svg)](https://github.com/neerajrekwar/neerajrekwar.github.io/actions/workflows/nextjs.yml)
`;

const images = [
  { src: "/projects/mypro.png", alt: "Project 1" },
  { src: "/projects/mypro.png", alt: "Project 2" },
  { src: "/projects/mypro.png", alt: "Project 3" },

  // Add more image paths here
];

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
              className=" p-4 m-2  rounded-lg bg-five  md:text-6xl  "
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
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-four bg-six border-seven border"
                  >
                    <div className="md:pb-4 text-five">
                      <h4 className="px-2 text-2xl md:text-xl font-bold text-four">
                        Search Engine Optimization
                      </h4>

                      <p className="m-2 text-four">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti.
                      </p>
                    </div>
                    <IconSearch width={44}
                      height={44} />
                    
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-four bg-six border-seven border"
                    >
                      <div className="md:pb-4 text-five">
                        <h4 className="px-2 text-2xl md:text-xl font-bold text-four">
                        Socail Media
                      </h4>
                      <p className="m-2 text-four">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <IconSocial  width={44}
                      height={44}  />
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-four bg-six border-seven border"
                    >
                      <div className="md:pb-4 text-five">
                        <h4 className="px-2 text-2xl md:text-xl font-bold text-four">
                        How to Grow Online
                      </h4>
                      <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <IconWorldWww  width={44}
                      height={44}  />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-four bg-six border-seven border"
                    >
                      <div className="md:pb-4 text-five">
                        <h4 className="px-2 text-2xl md:text-xl font-bold text-four">
                        Localization
                      </h4>
                      <p className="m-2 text-four">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <IconBuildingStore  width={44}
                      height={44}  />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-four bg-six border-seven border"
                    >
                      <div className="md:pb-4 text-five">
                        <h4 className="px-2 text-2xl md:text-xl font-bold text-four">
                        Google Analytics
                      </h4>
                      <p className="m-2 text-four">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <IconBrandGoogleAnalytics width={44}
                      height={44}  />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-four bg-six border-seven border"
                    >
                      <div className="md:pb-4 text-five">
                        <h4 className="px-2 text-2xl md:text-xl font-bold text-four">
                        Ads Word
                      </h4>
                      <p className="m-2 text-four">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <IconAdFilled width={44}
                      height={44}  />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="m-2 flex justify-between items-end text-right p-3 flex-col  aspect-square rounded-lg text-four bg-six border-seven border"
                    >
                      <div className="md:pb-4 text-five">
                        <h4 className="px-2 text-2xl md:text-xl font-bold text-four">
                        Email Marketing
                      </h4>
                      <p className="m-2 text-four">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus error alias unde optio deleniti. Deserunt
                        vero, ad a.
                      </p>
                    </div>
                    <IconMailbox width={44}
                      height={44}  />
                    
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="py-8 md:flex md:justify-between"
                  >
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="py-4 basis-1/2"
                    >
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
                      className="py-4 basis-1/2"
                    >
                      <h1>Deployment Badge</h1>
                      <ReactMarkdown>{markdown}</ReactMarkdown>
                    </motion.li>
                  </motion.ul>
                  <motion.ul
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="pb-8 flex md:justify-between "
                  >
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="py-4 basis-1/2"
                    >
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
                      className="py-4 basis-1/2"
                    >
                      <h1>Current</h1>
                      <p className="font-bold text-[#8f5b84]">
                        ▲ Next.js 14.2.5
                      </p>
                    </motion.li>
                  </motion.ul>
                  <motion.ul
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="pb-8 flex md:justify-between"
                  >
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      animate={{}}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="py-4 flex items-start flex-col basis-1/2"
                    >
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
                            className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs"
                          >
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
                            className="mr-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-react"
                          >
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
              <div className="three">
                <motion.ul
                  initial={{ opacity: 0, x: -40, y: -40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="three  rounded-lg flex flex-col md:grid sm:grid-flow-row-dense sm:grid-rows-2 md:grid-cols-3 "
                >
                  <motion.li
                    initial={{ opacity: 0, y: 40, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="m-2 flex flex-col justify-between  sm:w-auto rounded-lg text-right text-six bg-[#242424] aspect-square"
                  >
                    <motion.h4 className="px-2 text-4xl font-bold text-six">
                      <TextRotator />
                    </motion.h4>
                    <div className="flex m-2 justify-center items-center aspect-[16/9]  rounded-lg bg-custom-radial-s">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        whileInView={{ opacity: 0.1, scale: 1.1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                      >
                        apear soon
                      </motion.p>
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 40, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="m-2 flex border border-seven  col-span-2 rounded-lg text-six bg-[#242424] aspect-square"
                  >
                    <h4 className="px-2 basis-1/2 text-4xl m-2 font-bold text-six">
                      {" "}
                      Leveraging modern JavaScript features
                    </h4>
                    <div className="basis-1/2 pt-2 bg-custom-radial flex justify-center items-center">
                      <CountAnimation />
                    </div>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: 40, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="m-2 border border-seven col-span-2 rounded-lg text-six bg-[#242424] aspect-square"
                  >
                    <div className="rounded-lg m-2 h-60 overflow-hidden  z-20">
                      <ImageSlides />
                    </div>
                    <motion.h4
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-4xl m-2 overflow-hidden font-bold text-six "
                    >
                      Efficient algorithms and data structures
                    </motion.h4>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 40, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="m-2  rounded-lg  sm:w-auto text-six bg-[#242424] aspect-square"
                  >
                    <motion.h4
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-4xl md:text-2xl m-2 font-bold text-six  "
                    >
                      Improved User Experience
                    </motion.h4>
                    <MultiStepLoader />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 40, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="m-2 rounded-lg text-six bg-secondary aspect-square flex-col flex justify-center items-center"
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-2xl font-bold text-six overflow-hidden"
                    >
                      versions to access the latest performance optimizations
                    </motion.h4>
                    <p className="m-2 text-four">
                      Accusamus error alias unde optio deleniti. Deserunt vero,
                      ad a.
                    </p>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 40, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    animate={{}}
                    transition={{ duration: 0.9, delay: 0.6 }}
                    className="m-2 p-2 col-span-2 rounded-lg text-six bg-secondary aspect-square"
                  >
                    <CoverDemo />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 40, x: -40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    animate={{}}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="m-2  col-span-3 md:h-40 rounded-lg text-six bg-secondary aspect-square "
                  >
                    <motion.h4
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2, duration: 1.2 }}
                      className="px-2 text-2xl font-bold  text-six"
                    >
                      Rigorously test your application
                    </motion.h4>
                    <p className="m-2 text-four">Lorem ipsum dolor sit amet</p>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgrid2 text-four min-h-screen">
        <div className=" ">
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
          <div className="overflow-hidden p-2 md:p-4 min-h-screen max-w-7xl m-auto md:p-8  lg:flex-row gap-2 ">
            <motion.h1
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-4xl md:text-4xl lg:text-6xl font-bold "
            >
              what I think and explore everything.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              className="py-4 max-w-2xl  md:text-xl lg:text-2xl font-semibold "
            >
              Today I make space for miracles. I recognize that it&apos;s not
              how big a miracle is that&apos;s important, but how we make it
              happen. but how much room I create for it.
            </motion.p>
            <WobbleCardDemo />
            <div className="rounded-2xl flex flex-col gap-2 py-16 px-2 my-10  min-h-screen">
              <motion.h3
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 0, y: 3 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-4xl text-secondary relative z-40 max-w-2xl font-bold  "
              >
                hello to everyone
                <span className="absolute bottom-2 p-1 -z-50 left-0  h-2 w-[100%]  bg-custom-radial-sm"></span>
              </motion.h3>
              <div className=" border-third">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-four flex-row-reverse my-8 bg-secondary border-third rounded-lg md:flex justify-center  h-shv "
                >
                  <motion.div className="basis-1/2 text-primary bg-custom-radial-sm flex flex-col  justify-center p-4 md:p-6 lg:p-8 sm:min-h-shv md:m-12 rounded-lg ">
                    <motion.h2
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 0, x: 3 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: "easeIn",
                        type: "spring",
                        stiffness: 400,
                      }}
                      className="text-2xl  font-semibold md:text-3xl lg:text-4xl pt-4 px-2 font-bold  "
                    >
                      Make it for beatiful
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className="px-2  md:text-md py-2  "
                    >
                      I recognize that it&apos;s not how big a miracle is
                      that&apos;s important, but how we make it happen. but how
                      much room I create for it.
                    </motion.p>
                    <motion.a
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        type: "spring",
                        stiffness: 400,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileFocus={{ scale: 1.1 }}
                      href="/contact"
                      className=" mt-4 border-1 border-primary rounded-full flex justify-center items-center gap-2 text-lg relative py-1  px-3 mx-2 z-40  w-fit"
                    >
                      learn more <IconCircleArrowUpRightFilled />
                      <span className="absolute bottom-2 p-1  -z-50 left-2  h-[1%] w-20  bg-custom-radial-sm"></span>
                    </motion.a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    exit={{}}
                    className="lg:basis-1/2 text-primary overflow-hidden flex flex-col justify-center sm:min-h-shv m-2 mx-2 my-4 py-2 px-2  md:m-12 border-gray-600 rounded-lg"
                  >
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1.2 }}
                      whileInView={{ opacity: 0.1, scale: 1.1 }}
                      transition={{ duration: 4, delay: 0.8 }}
                      className="aspect-video hover:bg-seven flex justify-center items-center rounded-lg"
                    >
                      {" "}
                      video will be soon
                    </motion.h2>
                    {/* <iframe
                      className="aspect-video hover:bg-seven flex justify-center items-center rounded-lg"
                      src="https://www.youtube.com/embed/l8knG0BPr-o"


                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    {/* <video controls preload="none" aria-label="Video player">
                      <source src={&apos;https://youtu.be/l8knG0BPr-o?si=ZQjdIFcD7im_WwiT&apos;} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-four  my-8 bg-primary border-third rounded-lg md:flex justify-center  h-shv "
                >
                  <motion.div className="basis-1/2 text-secondary bg-custom-radial-sm flex flex-col  justify-center p-4 md:p-6 lg:p-8 sm:min-h-shv md:m-12 rounded-lg">
                    <motion.h2
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 0, x: 3 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: "easeIn",
                        type: "spring",
                        stiffness: 400,
                      }}
                      className="text-2xl  font-semibold md:text-3xl lg:text-4xl pt-4 px-2 font-bold  "
                    >
                      Make it for beatiful
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className="px-2  md:text-md py-2  "
                    >
                      I recognize that it&apos;s not how big a miracle is
                      that&apos;s important, but how we make it happen. but how
                      much room I create for it.
                    </motion.p>
                    <motion.a
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        type: "spring",
                        stiffness: 400,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileFocus={{ scale: 1.1 }}
                      href="/contact"
                      className=" mt-4 border-1  border-secondary rounded-full flex justify-center items-center gap-2 text-lg relative py-1  px-3 mx-2 z-40  w-fit"
                    >
                      find more <IconCircleArrowUpRightFilled />
                      <span className="absolute bottom-2 p-1  -z-50 left-2  h-[1%] w-20  bg-custom-radial-sm"></span>
                    </motion.a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    exit={{}}
                    className="lg:basis-2/2 overflow-hidden flex flex-col justify-center sm:min-h-shv m-2 mx-2 my-4 py-2 px-2  md:m-12 border-gray-600 rounded-lg"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 4, delay: 0.8 }}
                      className="aspect-video   flex justify-center items-center rounded-lg"
                    >
                      <ParallaxScrollDemo />
                    </motion.div>
                    {/* <iframe
                      className="aspect-video hover:bg-seven flex justify-center items-center rounded-lg"
                      src="https://www.youtube.com/embed/l8knG0BPr-o"


                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    {/* <video controls preload="none" aria-label="Video player">
                      <source src={&apos;https://youtu.be/l8knG0BPr-o?si=ZQjdIFcD7im_WwiT&apos;} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-four flex-row-reverse my-8 bg-primary border-third rounded-lg md:flex justify-center  h-shv "
                >
                  <motion.div className="basis-1/2 text-secondary bg-custom-radial-sm flex flex-col  justify-center p-4 md:p-6 lg:p-8 sm:min-h-shv md:m-12 rounded-lg ">
                    <motion.h2
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 0, x: 3 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: "easeIn",
                        type: "spring",
                        stiffness: 400,
                      }}
                      className="text-2xl  font-semibold md:text-3xl lg:text-4xl pt-4 px-2 font-bold  "
                    >
                      Make it for beatiful
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className="px-2  md:text-md py-2  "
                    >
                      I recognize that it&apos;s not how big a miracle is
                      that&apos;s important, but how we make it happen. but how
                      much room I create for it.
                    </motion.p>
                    <motion.a
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        type: "spring",
                        stiffness: 400,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileFocus={{ scale: 1.1 }}
                      href="/contact"
                      className=" mt-4 border-1 border-secondary rounded-full flex justify-center items-center gap-2 text-lg relative py-1  px-3 mx-2 z-40  w-fit"
                    >
                      read more <IconCircleArrowUpRightFilled />
                      <span className="absolute bottom-2 p-1  -z-50 left-2  h-[1%] w-20  bg-custom-radial-sm"></span>
                    </motion.a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileTap={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 5.2 }}
                    exit={{}}
                    className="lg:basis-1/2  overflow-hidden flex flex-col justify-center sm:min-h-shv m-2 mx-2 my-4 py-2 px-2  md:m-12 border-gray-600 rounded-lg"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 4, delay: 0.8 }}
                      className="aspect-video  flex justify-center items-center rounded-lg"
                    >
                      <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        whileInView={{ opacity: 0.1, scale: 1.1 }}
                        transition={{ duration: 4, delay: 0.8 }}
                        className="aspect-video hover:bg-seven flex justify-center items-center rounded-lg"
                        src="https://images.unsplash.com/photo-1723142481057-49e9a440c014?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </motion.div>
                    {/* <iframe
                      className="aspect-video hover:bg-seven flex justify-center items-center rounded-lg"
                      src="https://www.youtube.com/embed/l8knG0BPr-o"


                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    {/* <video controls preload="none" aria-label="Video player">
                      <source src={&apos;https://youtu.be/l8knG0BPr-o?si=ZQjdIFcD7im_WwiT&apos;} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgrid2  min-h-screen">
        
        <div className="flex overflow-hidden justify-center min-h-screen items-center rounded-2xl">
          
          <div className="text-4xl font-bold overflow-hidden">
            <InfiniteImageScroller
              direction="left"
              speed="normal"
              images={images}
            />
            <InfiniteImageScroller
              className="block md:hidden"
              direction="right"
              speed="fast"
              images={images}
            />
            <InfiniteImageScroller
              direction="right"
              speed="slow"
              images={images}
            />
          </div>
          <div className="absolute  bg-gradient-to-l from-primary   to-transparent  h-full w-full   font-bold"></div>
          <div className="absolute bg-gradient-to-r from-primary from-2% to-transparent  h-full w-full  font-bold"></div>
          <div className="absolute text-five flex flex-col bg-gradient-to-r 
 from-primary    justify-center items-center  md:text-left  md:justify-center md:items-start h-full w-full   font-bold ">
            <div className="absolute max-w-3xl m-auto ">
              <motion.h2 className="mx-4 text-four md:mx-10 text-4xl md:text-5xl lg:text-6xl">
                Have a Project in Mind?
              </motion.h2>
              <motion.p className="text-base text-four mx-4 md:mx-10  my-4 max-w-2xl font-normal">
                I&apos;m excited to be in touch with you! Whether you&apos;re prepared to launch a brand new website or give an existing one a fresh look, I&apos;m available to assist in transforming your concepts into tangible results.
              </motion.p>
              <motion.a className="text-base flex w-fit md:mx-10 mx-4 my-6 p-2 px-4 bg-primary gap-2 border border-secondary text-four rounded-full">
                 <IconCalendarClock /> book now
              </motion.a>
            </div>
          </div>
        </div>
        
      </section>
      
    </>
  );
}
