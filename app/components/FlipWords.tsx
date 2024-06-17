import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center dark:bg-[#DFECE7] border-green-500 items-center px-4">
      <div className="sm:text-4xl text-xl  mx-auto font-normal text-[#5e716a] dark:text-neutral-600">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
