"use client";

import { motion } from "framer-motion";

export const VisionSection: React.FC = () =>{
  return(
    <>
     <div className="max-w-6xl m-auto  min-h-screen ">
       <div className="p-2 justify-start flex text-secondary items-center gap-2 sm:gap-1 py-10 text-2xl  font-semibold visible sm:text-4xl">
         <div className="text-4xl text-third sm:text-5xl sm:mx-2">
           &#8226;
         </div>
         Vision to the Future
       </div>
       <div>
       <div
         style={{}}
         
         className=" text-four md:flex-row md:flex gap-4  border-four">
        <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-five basis-1/2 font-bold">User-centric customization</h2>
         <p className="basis-1/2">
           Websites will use AI to analyze user behavior and preferences, dynamically tailoring layouts, content, and recommendations to each visitor. Imagine a shopping site that curates a personalized product selection based on your browsing history and past purchases.
         </p>
       </div>
       </div>
       <div>
       <div
         style={{}}
         
         className=" text-four md:flex-row-reverse md:flex gap-4  border-four">
        <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-six basis-1/2 font-bold">User-centric customization</h2>
         <p className="basis-1/2">
           Websites will use AI to analyze user behavior and preferences, dynamically tailoring layouts, content, and recommendations to each visitor. Imagine a shopping site that curates a personalized product selection based on your browsing history and past purchases.
         </p>
       </div>
       </div>
     </div>
    </>
  )
}