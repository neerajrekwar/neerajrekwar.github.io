import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FlipWordsDemo } from "../components/FlipWords";
import {HeroSection} from "../components/heroSection";

export const metadata: Metadata = {
  title: "nee - Portfolio passionate Programmer in Delhi",
  description: "A skilled and experienced programmer based in Delhi, offering custom software development, web application creation, and IT solutions tailored to your specific needs. With a strong foundation in [programming languages], I deliver high-quality, efficient, and reliable code while adhering to project deadlines and budgets.",
};


export default function About() {
  return (
    <section className="">
      <HeroSection />
    </section>
  );
}
