import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["best", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-xl  border-2 border-black items-center overflow-hidden sm:text-xl mx-auto font-normal text-neutral-600 dark:text-white">
        Build, I&apos;m
        <FlipWords
          words={words}
          className="border-2 overflow-hidden border-red-300"
        />{" "}
        <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
