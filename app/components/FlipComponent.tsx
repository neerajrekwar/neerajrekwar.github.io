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
    <div className="border-2 flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-center text-gray-900 mb-8">
        How much should I charge for my
      </h1>
      <div
        id="flipper"
        className="flipper relative w-40 h-10 perspective-500 transform-style-preserve"
        ref={flipperRef}
      >
        <div
          className={`step step0 ${currentStep === 0 ? "set" : "down"}  text-gray-900`}
        >
          template?
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
