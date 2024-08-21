"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export function MultiStepLoader() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-40 text-white flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-custom-radial-s hover:bg-seven mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center text-primary"
        style={{
          boxShadow:
            "0px -1px 0px 0px var(--four) inset, 0px 1px 0px 0px var(--four) inset",
        }}
      >
        Click to load
      </button>

      {loading && (
        <button
          className="fixed rounded-md top-4 right-4 text-five z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconX className="h-6 w-6 sm:h-10 md:w-10" />
        </button>
      )}
    </div>
  );
}
