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
      text: "neeraj rekwar.",
      className: "text-four",
    },
  ];
  return (
    <div className="flex  flex-col items-center justify-center  md:h-screen">
      <div className="flex flex-col items-center justify-center h-[40rem] w-full">
        <p className="text-four text-xs sm:text-base text-five">
          The road to make unique from here
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
}
