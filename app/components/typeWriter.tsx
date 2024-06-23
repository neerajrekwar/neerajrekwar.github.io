"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "professional.",
      className: "text-cyan-500 dark:text-cyan-500",
    },
  ];
  return (
    <div className="flex flex-col items-center bg-white dark:bg-black justify-center h-[40rem]">
      <div>
        <h2 className="py-2 px-3 mt-4 sm:py-2 sm:px-3 sm:text-sm  text-xs rounded-full text-cyan-600 bg-cyan-50  text-[#353535] ">prologue</h2>
      </div>
      <div className="flex flex-col items-center bg-white dark:bg-black justify-center h-[40rem] w-full">
        <p className="text-neutral-600 text- dark:text-neutral-200 text-sm sm:text-base  ">
          The road to make unique from here
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
      
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> 
      </div>*/}
    </div>
  );
}
