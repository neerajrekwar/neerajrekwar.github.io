import type { Metadata } from "next";
import HomeSectionHeader from "./components/homeSectionHeader";
import IntroSection from "./components/introSection";
import { ReviewSection } from "./components/reviewSection";

import ExpSection from "./components/ExpSection";
import { VisionSection } from "./components/VisionSection";
import StickyRelativeDemo from "./components/StickyRelativeDemo";
import { Accordion } from "@/components/ui/accordion";


export const metadata: Metadata = {
  title: "nee. - Anonymous seo find at Delhi ",
  description: "Our Delhi-based team specializes in creating custom web development solutions and bespoke web tools. We have expertise in Nexjs and ensure high-quality, reliable code delivered on time and within budget.",

  
};
export default function Home() {
  return (
    <main className="scroll-smooth bg-primary focus:scroll-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-four scrollbar-track-seven">
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
        
       <Accordion />
      </section>
    </main>
    
  );
}
