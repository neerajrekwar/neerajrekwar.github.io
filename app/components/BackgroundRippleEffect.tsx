"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../utils/cn";

export const BackgroundCellAnimation = () => {
  return (
    <div className="relative h-screen bg-slate-950 flex justify-center overflow-hidden">
      <BackgroundCellCore />
      <div className="relative z-50 mt-40 pointer-events-none select-none">
        <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
          Background cell animation <br />
          with framer motion
        </h1>
      </div>
    </div>
  );
};
