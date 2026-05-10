import type { Metadata } from "next";
import HomeSectionHeader from "../components/homeSectionHeader";
import IntroSection from "../components/introSection";
import { ReviewSection } from "../components/reviewSection";
import ExpSection from "../components/ExpSection";
import { VisionSection } from "../components/VisionSection";
import StickyRelativeDemo from "../components/StickyRelativeDemo";
import { AccordionDemo } from "@/components/ui/Accordion";



export const metadata: Metadata = {
  title: {
    default: "Neeraj Rekwar | Freelance Full Stack Developer & Next.js Expert",
    template: "%s | Neeraj Rekwar"
  },
  description: "Portfolio of Neeraj Rekwar, a freelance full stack developer for hire. Specializing in Next.js and custom website development services. Hire a remote web developer for your startup today.",
  keywords: [
    "hire freelance web developer",
    "hire Next.js developer",
    "freelance full stack developer for hire",
    "remote web developer for startup",
    "hire SEO expert for website",
    "freelance website developer global",
    "custom website development services",
    "hire developer for business website",
    "Next.js expert freelancer",
    "need website developer urgent",
    "redesign my website SEO friendly",
    "fix website performance issues",
    "hire Next.js developer for startup website",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Neeraj Rekwar", url: "https://neerajrekwar.github.io" }],
  creator: "Neeraj Rekwar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Neeraj Rekwar | Freelance Full Stack Developer & Next.js Expert",
    description: "Portfolio of Neeraj Rekwar, a freelance full stack developer for hire. Specializing in Next.js and custom website development services.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp", // You should create an image file in your public folder
        width: 1200,
        height: 630,
        alt: "Neeraj Rekwar - Freelance Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Neeraj Rekwar | Freelance Full Stack Developer & Next.js Expert",
    description: "Portfolio of Neeraj Rekwar, a freelance full stack developer for hire. Specializing in Next.js and custom website development.",
    images: ["/me_profile.webp"],
    creator: "@neerajrekwar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function Home() {
  return (
    <main className="scroll-smooth bg-primary  focus:scroll-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-four scrollbar-track-seven">
      <section className="">
        <HomeSectionHeader />
      </section>
      <section className="md:min-h-screen">
        <IntroSection />
      </section>
      <section className="three">
        <StickyRelativeDemo />
      </section>
      <section className="">
        <ReviewSection />
      </section>
      <section id="vision" className="">
        <ExpSection />
      </section>
      <section className="">
        <VisionSection />
      </section>
      <section className="text-five">
        <AccordionDemo />
      </section>
    </main>
  );
}
