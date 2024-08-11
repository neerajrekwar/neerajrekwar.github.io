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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative three flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="max-w-5xl text-left mx-auto text-four">
          <motion.div
        
            className="gap-2 flex mb-10 flex-row  w-fit p-1 pr-8 rounded-full bg-seven justify-start items-center text-semibold"
          >
            <motion.div 
              whileDrag={{ }}
              initial={{ rotate: 160, scale: 0.2, x: -200, y: -200  }}
              animate={{ rotate: 360, scale: 0.1, x: 400, x2: 0, y: 40 }}
              whileInView={{ rotate: 0, scale: 1, x2: -1040, x: 0, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 2,
                duration: 1,
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
              className="font-semibold text-secondary"
            >
              <motion.p 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1,
                  duration: 1,
                }}
                >Neeraj Rekwar</motion.p>
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
                className="flex gap-1 h-4">
                <p className=" flex flex-row justify-start text-third items-center text-3xl">
                  &#8226;
                </p>
                <p className="text-five flex flex-row justify-start items-center font-normal text-sm">
                  Available for freelance work
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0,  x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: "backIn",
            }}
            className="relative text-five font-bold z-10 md:pb-4 text-3xl  md:text-7xl  sm:text-4xl text-left "
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
            initial={{ opacity: 0,  x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: "backIn",
            }}
            className="flex w-full flex-col items-center justify-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mx-auto my-2 sm:text-xl"
          >
            We offer reliable, scalable, and customizable web solutions to optimize your online presence.
          </motion.p>

          <motion.div className=" gap-2 mt-10 max-w-fit flex justify-center items-center">
            <motion.button
              className="border-1 border-four  p-2 px-4 rounded-full shadow-[inset_4px_10px_7px_2px_#e8c8ff4a]  bg-seven"
              initial={{ opacity: 0, scale: 0.2, x: -200, y: -200  }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0  }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
                type: "spring", stiffness: 400
              }}
              whileHover={{ scale: 1.1 }}

            >
              <Link
                href="/https://1b7b70d3-f411-4cfb-9f19-e2cd3227a33d-00-1e36r1z5gi36g.pike.replit.dev/"
                className=" rounded-full 
                text-four font-semibold uppercase  p-2 px-4  text-center text-sm" 
              >
                get started
              </Link>
            </motion.button>
            <motion.button
              className="border border-seven  p-2 px-4 rounded-full shadow-[inset_1px_1px_7px_2px_#e8c8ff4a]  bg-seven"
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
                className="rounded-full 
                text-four font-semibold p-2 px-4  text-center text-sm"
              >
                Explore{" "}
              </Link>
            </motion.button>
            
          </motion.div>
        </div>

        
      </motion.div>
    </AuroraBackground>
  );
}
