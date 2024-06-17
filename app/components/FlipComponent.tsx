"use client"; // components/FlipperComponent.tsx
import React, { useRef, useEffect, useState } from "react";

const FlipperComponent: React.FC = () => {
  const flipperRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % 7); // Adjust based on the number of steps
    }, 1500); // Interval time in milliseconds, adjust as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex-col justify-center items-center">
      <h1>hi, I&apos;m</h1>
      <div
        id="flipper"
        className="flipper flex border-2 relative  bg-transparent h-8 perspective-500  text-left transform-style-preserve font-bold  text-gray-900 "
        ref={flipperRef}
      >
        <div
          className={`step step0 ${currentStep === 0 ? "set" : "down"}  text-gray-900`}
        >
          Neeraj
        </div>
        <div
          className={`step step1 ${currentStep === 1 ? "set" : "down"}  text-gray-900`}
        >
          eBook?
        </div>
        <div
          className={`step step2 ${currentStep === 2 ? "set" : "down"}  text-gray-900`}
        >
          web service?
        </div>
        <div
          className={`step step3 ${currentStep === 3 ? "set" : "down"}  text-gray-900`}
        >
          another?
        </div>
        <div
          className={`step step4 ${currentStep === 4 ? "set" : "down"}  text-gray-900`}
        >
          otro?
        </div>
        <div
          className={`step step5 ${currentStep === 5 ? "set" : "down"} text-gray-900`}
        >
          sick yet?
        </div>
        <div
          className={`step step6 ${currentStep === 6 ? "set" : "down"}  text-gray-900`}
        >
          continue?
        </div>
      </div>
    </div>
  );
};

export default FlipperComponent;
