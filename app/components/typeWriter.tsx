"use client";
import DarkModeToggle from "./DarkModeToggle";
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
      text: "neeraj rekwar.",
      className: "text-[#5e716a] dark:text-[#5e716a] ",
    },
  ];
  return (
    <div className="bg-[#0a0a0a] text-white flex flex-col items-center   justify-center h-[40rem]">
      <div className="flex flex-col items-center  justify-center h-[40rem] w-full">
        <p className="text-white sm:text-base  ">
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
