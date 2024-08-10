import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FlipWordsDemo } from "../components/FlipWords";
import {HeroSection} from "../components/heroSection";

export const metadata: Metadata = {
  title: "nee - Portfolio | passionate Programmer in Delhi",
  description: "I'm an SEO freelancer based in Delhi, helping businesses achieve top search engine rankings by optimizing websites for organic traffic and conversions",
};


export default function About() {
  return (
    <main className="bgrid2">
      <HeroSection />
    </main>
  );
}
