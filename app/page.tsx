import type { Metadata } from "next";
import HomeSectionHeader from "./components/homeSectionHeader";
import IntroSection from "./components/introSection";
import { ReviewSection } from "./components/reviewSection";

import ExpSection from "./components/ExpSection";
import { VisionSection } from "./components/VisionSection";
import StickyRelativeDemo from "./components/StickyRelativeDemo";
import { AccordionDemo } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "nee. - SEO Freelancer in delhi | Boost Your Online Visibility",
  description: "Our Delhi-based team specializes in creating custom web development solutions and bespoke web tools. We have expertise in Nexjs and ensure high-quality, reliable code delivered on time and within budget.",

  
};

export default function Home() {
  return (
    <main className="bg-primary text-primary scroll-smooth focus:scroll-auto">
      <section className="">
        <HomeSectionHeader />
      </section>
      <section className=" md:h-screen">
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
      <section className=" ">
        <VisionSection />
      </section>
      <section className="text-five">
        
       <AccordionDemo />
      </section>
    </main>
    
  );
}
