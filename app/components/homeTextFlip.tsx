"use client"; // components/FlipperComponent.tsx
import React, { useRef, useEffect, useState } from "react";

const HomeTextFlip: React.FC = () => {
  const flipperRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % 7); // Adjust based on the number of steps
    }, 1500); // Interval time in milliseconds, adjust as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
     <div
        id="flipper"
        className="flipper text-white  relative  bg-transparent perspective-500 text-left transform-style-preserve w-full  dark:text-white text-gray-900 "
        ref={flipperRef}
      >
        <div
          className={`step step0 ${currentStep === 0 ? "set" : "down"}  w-full bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl  dark:text-white text-gray-900 `}
        >
          Programmer
        </div>
        <div
          className={`step step1 ${currentStep === 1 ? "set" : "down"}  w-full bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl dark:text-white text-gray-900`}
        >
          Bug fixer
        </div>
        <div
          className={`step step2 ${currentStep === 2 ? "set" : "down"}   w-full bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl dark:text-white text-gray-900`}
        >
          website pro
        </div>
        <div
          className={`step step3 ${currentStep === 3 ? "set" : "down"} w-full bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl dark:text-white text-gray-900`}
        >
          another?
        </div>
        <div
          className={`step step4 ${currentStep === 4 ? "set" : "down"} w-full bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl dark:text-white text-gray-900`}
        >
          otro?
        </div>
        <div
          className={`step step5 ${currentStep === 5 ? "set" : "down"} w-full bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl dark:text-white text-gray-900`}
        >
          sick yet?
        </div>
        <div
          className={`step step6 ${currentStep === 6 ? "set" : "down"} w-full bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl dark:text-white text-gray-900`}
        >
          continue?
        </div>
      </div>
    </div>
  );
};

export default HomeTextFlip;
