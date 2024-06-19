"use client";
import React from "react";
import { motion } from "framer-motion";

 export  function IntroText() {
  return (
    
    <div className="w-full ">
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-xs bg-gradient-to-br from-[#5e716a] to-slate-500 py-4 bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent sm:text-sm md:text-2xl md:pl-40 md:ml-20 pl-16"
      >
  
       solve your bugs in your websites with amazing animations and animations.
      </motion.p>
      <motion.h1>
       
      </motion.h1>
    </div>
  )
};
export default IntroText