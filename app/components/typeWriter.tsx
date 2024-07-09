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
      className: "text-fourText",
    },
  ];
  return (
    <div className="bg-primary flex flex-col items-center justify-center h-[40rem] ">
      <div className="flex flex-col items-center justify-center h-[40rem] w-full">
        <p className="text-secondaryText sm:text-base  ">
          The road to make unique from here
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
}
