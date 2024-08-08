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
  description: "I'm an SEO freelancer based in Delhi, helping businesses achieve top search engine rankings by optimizing websites for organic traffic and conversions",

  
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
