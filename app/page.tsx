import type { Metadata } from "next";
import HomeSectionHeader from "../components/homeSectionHeader";
import IntroSection from "../components/introSection";
import { ReviewSection } from "../components/reviewSection";
import ExpSection from "../components/ExpSection";
import { VisionSection } from "../components/VisionSection";
import StickyRelativeDemo from "../components/StickyRelativeDemo";
import { Accordion } from "@/components/ui/accordion";
import { AccordionDemo } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "nee - portfolio SEO Expert freelancer in delhi",
  description:
    "Struggling to rank higher on Google? Let Nee's SEO solutions help. I provide effective SEO services to help you outrank competitors and dominate search results.",
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
        <AccordionDemo />
      </section>
    </main>
  );
}
