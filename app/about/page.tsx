import type { Metadata } from "next";
import React from "react";
import { HeroSection } from "../../components/heroSection";

export const metadata: Metadata = {
  title: "About - Front-End Web Developer Delhi | UI/UX Design",
  description:
    "Need a skilled Front-End Web Developer in Delhi? Nee specializes in building responsive, pixel-perfect websites with exceptional user experiences.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/about",
    title: "About Neeraj Rekwar | Front-End Web Developer",
    description: "Need a skilled Front-End Web Developer in Delhi? Nee specializes in building responsive, pixel-perfect websites with exceptional user experiences.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp",
        width: 1200,
        height: 630,
        alt: "About Neeraj Rekwar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "About Neeraj Rekwar | Front-End Web Developer",
    description: "Need a skilled Front-End Web Developer in Delhi? Nee specializes in building responsive, pixel-perfect websites.",
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
