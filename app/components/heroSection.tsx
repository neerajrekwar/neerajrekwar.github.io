"use client";
import React from "react";
import { motion } from "framer-motion";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingVsStarts";

export function HeroSection() {
  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <section className=" text-four min-h-screen">
        <div className="  max-w-6xl m-auto">
          <h2 className="text-2xl md:text-5xl p-4">About Me</h2>
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{}}
              className=" p-4 m-2  rounded-md bg-five  md:text-6xl  "
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-five ">
                Thinks create, develop, and grow-up tents{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
