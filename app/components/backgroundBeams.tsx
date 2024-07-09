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
          className="relative z-10 md:pb-4 text-2xl sm:text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-left font-sans font-bold"
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
            delay: 0.3,
            duration: 0.8,
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
          className="text-neutral-500 max-w-4xl mx-auto my-2 text-sm text-left relative z-10"
        >
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </motion.p>
        <div>

          <motion.div className="text-secondaryText">
            <Link href={'blog'}>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{

                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="rounded-full border border-neutral-800 focus:ring-2 focus:ring-teal-500  text-white px-3 py-2 text-sm relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              >
                Get started
              </motion.button>
            </Link>
            <Link href={"https://e3d840fc-de16-4c0f-a2af-4bb02b48d797-00-1iz57nutmrl9d.sisko.replit.dev/"} className="relative z-10 md:pb-4 text-2xl sm:text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-left font-sans font-bold">
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{

                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="rounded-full ml-2 text-secondary border border-neutral-800 focus:ring-2 font-medium focus:ring-teal-500  bg-white px-3 py-2 text-sm relative z-10 mt-4 "
              >
                Learn more
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
