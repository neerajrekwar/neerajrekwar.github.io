"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Neeraj Rekwar",
    designation: "Front-end Developer",
    image: "/me.webp",
  },
  {
    id: 2,
    name: "",
    designation: "Product Manager",
    image: "",
  },
  {
    id: 3,
    name: "",
    designation: "Data Scientist",
    image: "",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
