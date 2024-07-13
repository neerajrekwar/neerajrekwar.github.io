"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import TextFlipper from "./TextFlipper";
import Link from "next/link";
import Image from "next/image";


export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full bg-primary relative flex flex-col items-start justify-center antialiased">
      <div className="max-w-6xl text-left mx-auto p-4">
        
        {/* <motion.div className="gap-2 flex  flex-row justify-start items-center  text-secondaryText text-semibold">
          <Image
            src={"/me.jpg"}
            width={24}
            height={24}
            alt="Digital marketing for expert"
            className="aspact-square h-10 w-10 rounded-full"
          />
          <div className="font-semibold text-secondaryText">
            <p>Neeraj Rekwar</p>
            <div className="flex gap-1 h-4">
              <p className="text-thirdText flex flex-row justify-start items-center text-3xl">
                &#8226;
              </p>
              <p className="text-secondaryText flex flex-row justify-start items-center font-normal text-sm">
                Available for freelance work
              </p>
            </div>
          </div>
        </motion.div> */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative text-four font-bold z-10 md:pb-4 text-3xl sm:text-lg md:text-7xl  text-left "
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
          className="text-neutral-500 max-w-4xl mx-auto my-2 text-sm text-left relative z-10"
        >
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </motion.p>

        <motion.div className="text-secondaryText gap-2 mt-10 max-w-fit flex justify-center items-center">
        
          <Link href={'blog'} 
          className="relative z-10 font-bold">
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{

                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-secondary  justify-center items-center gap-2 text-Text  font-normal border-1 border-pBorder p-2 px-4 md:p-3 md:px-5 rounded-full"
            >
              
              Get started
            </motion.button>
          </Link> 
          <Link href={'#vision'} scroll={true}
            
          className="relative z-10 font-bold">
            <motion.button
              
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring', stiffness: 300, damping: 30,
                padding: "0.5rem",
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=" bg-primary justify-center items-center gap-2 text-thirdText  font-normal border-2 border-tBorder p-2 px-4 md:p-3 md:px-5 rounded-full"
            >
              
              Explore more
            </motion.button>
          </Link> 
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
