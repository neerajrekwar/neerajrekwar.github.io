"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import TextFlipper from "./TextFlipper";
import Link from "next/link";
import Image from "next/image";


export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-start justify-center antialiased">
      <div className="max-w-5xl text-left mx-auto p-4">

        <motion.div
          initial={{opacity: 0, y: 10}}
          whileInView={{ opacity: 1, y: 0 }}
        

          className="gap-2 flex mb-10 flex-row justify-start items-center text-semibold">
          <Image
            src={"/me.jpg"}
            width={24}
            height={24}
            alt="Digital marketing for expert"
            className="aspact-square h-10 w-10 rounded-full"
          />
          <motion.div 
            initial={{opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0 }}
            
            className="font-semibold text-four">
            <p>Neeraj Rekwar</p>
            <div className="flex gap-1 h-4">
              <p className=" flex flex-row justify-start text-third items-center text-3xl">
                &#8226;
              </p>
              <p className="text-four flex flex-row justify-start items-center font-normal text-sm">
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
          className="relative text-secondary font-bold z-10 md:pb-4 text-2xl sm:text-lg md:text-7xl  text-left "
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
        >

        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-four  mx-auto my-2 sm:text-xl text-base relative z-10"
        >
          We could be best on the web, We provide reliable, scalable, and customizable web solutions for
          your business. Whether you&apos;re sending order any bug fix in your web, or tools, nee. has got you
          covered.
        </motion.p>

        <motion.div className="text-secondaryText gap-2 mt-10 max-w-fit flex justify-center items-center">

          <Link href={'/'}
            className="relative z-10 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring", stiffness: 400, damping: 17, delay: .3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="rounded-full p-2 px-4 p-2 px-4 md:p-3 md:px-6  bg-five hover:bg-secondary  hover:text-primary hover:shadow-lg shadow-md  "
            >

              Get started
            </motion.button>
          </Link>
          <Link href={'#vision'} scroll={true}

            className="relative z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring", stiffness: 400, damping: 17, delay: .6,
                duration: 0.5,
                ease: "easeInOut",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
  
              className="rounded-full p-2 px-4 md:p-3 md:px-6  bg-five hover:bg-secondary hover:text-primary hover:shadow-lg shadow-md "
            >

              Explore
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
