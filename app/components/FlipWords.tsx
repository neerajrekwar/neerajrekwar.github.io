import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center bg-white dark:bg-slate-800  px-4">
      <div className="sm:text-4xl text-xl mx-auto font-normal text-neutral-600 dark:bg-white">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
