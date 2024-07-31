"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import HomeSectionHeader from "./homeSectionHeader";
import { Caveat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import TextFlipper from "./TextFlipper";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative three flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="max-w-5xl text-left mx-auto text-four">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="gap-2 flex mb-10 flex-row  justify-start items-center text-semibold"
          >
            <Image
              src={"/me.webp"}
              width={24}
              height={24}
              loading="lazy"
              alt="Digital marketing for expert"
              className="aspact-square h-10 w-10 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-semibold text-secondary"
            >
              <p>Neeraj Rekwar</p>
              <div className="flex gap-1 h-4">
                <p className=" flex flex-row justify-start text-third items-center text-3xl">
                  &#8226;
                </p>
                <p className="text-five flex flex-row justify-start items-center font-normal text-sm">
                  Available for freelance work
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative text-five font-bold z-10 md:pb-4 text-3xl sm:text-lg md:text-8xl  text-left "
          >
            Build the right to way <br />
            <div>
              with{" "}
              <pre className="font-bold z-999 inline-flex ">
                <TextFlipper />
              </pre>
            </div>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.2,
              ease: "backIn",
            }}
            className="flex w-full flex-col items-center justify-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mx-auto my-2 sm:text-xl"
          >
            We offer reliable, scalable, and customizable web solutions to optimize your online presence.
          </motion.p>

          <motion.div className="text-secondaryText gap-2 mt-10 max-w-fit flex justify-center items-center">
            <Link href={"https://84243cc8-6929-4062-809e-d7d9dda777bf-00-2j91rfjnf9ve1.pike.replit.dev/"} rel="preload" className="relative z-10 ">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: 0.1,
                  duration: 1,
                  ease: "easeInOut",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-full p-2 px-4 p-2 px-4 md:p-3 md:px-6  bg-five text-primary text-base hover:bg-secondary hover:text-primary hover:shadow-lg shadow-md "
              >
                Get started
              </motion.button>
            </Link>
            <Link href={"#vision"} scroll={true} rel="preload" className="relative z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 70,
                  delay: 0.1,
                  duration: 1,
                  ease: "easeInOut",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-full p-2 px-4 p-2 px-4 md:p-3 md:px-6  bg-five text-primary text-base hover:bg-secondary hover:text-primary hover:shadow-lg shadow-md "
              >
                Explore
              </motion.button>
            </Link>
          </motion.div>
        </div>

        
      </motion.div>
    </AuroraBackground>
  );
}
