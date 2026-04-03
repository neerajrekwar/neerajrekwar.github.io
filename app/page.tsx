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
    default: "Neeraj Rekwar | Full Stack Developer & Creator",
    template: "%s | Neeraj Rekwar"
  },
  description: "Portfolio of Neeraj Rekwar, a passionate Programmer and Entrepreneur specializing in Next.js, Tailwind CSS, and modern web development. Turning complex problems into elegant solutions.",
  keywords: [
    "Next.js Developer",
    "React",
    "Tailwind CSS",
    "Full Stack Developer",
    "Programmer",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "Creative Developer",
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
    title: "Neeraj Rekwar | Full Stack Developer & Creator",
    description: "Building modern web experiences with Next.js and Tailwind CSS. Check out my latest projects and articles.",
    siteName: "Neeraj Rekwar Portfolio",
    images: [
      {
        url: "/me_profile.webp", // You should create an image file in your public folder
        width: 1200,
        height: 630,
        alt: "Neeraj Rekwar- Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neerajrekwar",
    title: "Neeraj Rekwar | Full Stack Developer & Creator",
    description: "Building modern web experiences with Next.js and Tailwind CSS.",
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
