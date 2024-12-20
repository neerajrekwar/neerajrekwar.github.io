import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FlipWordsDemo } from "../components/FlipWords";
import { HeroSection } from "../components/heroSection";

export const metadata: Metadata = {
  title: "About - Front-End Web Developer Delhi | UI/UX Design",
  description:
    "Need a skilled Front-End Web Developer in Delhi? Nee specializes in building responsive, pixel-perfect websites with exceptional user experiences.",
};

export default function About() {
  return (
    <main className="bg-primary">
      <HeroSection />
    </main>
  );
}
