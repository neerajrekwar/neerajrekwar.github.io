
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Packages } from "@/components/sections/Packages";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
