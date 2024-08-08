import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FlipWordsDemo } from "../components/FlipWords";
import {HeroSection} from "../components/heroSection";

export const metadata: Metadata = {
  title: "nee - Portfolio passionate Programmer in Delhi",
  description: "Our Delhi-based team specializes in creating custom web development solutions and bespoke web tools. We have expertise in multiple programming languages and ensure high-quality, reliable code delivered on time and within budget.",
};


export default function About() {
  return (
    <section className="">
      <HeroSection />
    </section>
  );
}
