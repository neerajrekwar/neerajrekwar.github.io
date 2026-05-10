import type { Metadata } from "next";
import React from "react";
import { HeroSection } from "../../components/heroSection";

export const metadata: Metadata = {
  title: "About neerajrekwar | Freelance Full Stack Developer",
  description: "Need a skilled Next.js expert and freelance web developer? Neeraj specializes in building responsive, pixel-perfect, and SEO-friendly websites with exceptional user experiences globally.",
  keywords: [
    "freelance full stack developer for hire",
    "hire freelance web developer",
    "hire Next.js developer",
    "remote web developer for startup",
    "freelance website developer global",
    "custom website development services",
    "Next.js expert freelancer"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/about",
    title: "About Neeraj Rekwar | Freelance Full Stack Developer",
    description: "Need a skilled Next.js expert and freelance web developer? Neeraj specializes in building responsive, pixel-perfect, and SEO-friendly websites with exceptional user experiences globally.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "About Neeraj Rekwar - Freelance Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "About Neeraj Rekwar | Freelance Full Stack Developer",
    description: "Need a skilled Next.js expert and freelance web developer? Neeraj specializes in building responsive, pixel-perfect, and SEO-friendly websites.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
};

export default function About() {
  return (
    <main className="bg-primary">
      <HeroSection />
    </main>
  );
}
