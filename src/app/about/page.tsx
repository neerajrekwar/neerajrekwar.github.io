
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const portrait = PlaceHolderImages.find(img => img.id === "about-portrait");

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-0 border-2 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Left Pane - 40% */}
          <div className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 md:p-12 flex flex-col items-center justify-center bg-[#f0f0f0]">
            <div className="w-full aspect-square relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden group">
              <Image 
                src={portrait?.imageUrl || "https://picsum.photos/seed/dev-portrait/800/800"} 
                alt="Full-Stack Engineer Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                data-ai-hint={portrait?.imageHint || "professional portrait"}
              />
              <div className="absolute inset-0 border-[16px] border-black/5 pointer-events-none"></div>
            </div>
            <div className="mt-8 w-full text-center lg:text-left">
              <h2 className="font-headline font-bold text-3xl uppercase leading-none">The Architect</h2>
              <p className="font-headline text-xs uppercase tracking-widest mt-2 text-primary font-bold">Principal Engineer / GS-01</p>
            </div>
          </div>

          {/* Right Pane - 60% */}
          <div className="lg:col-span-6 p-8 md:p-12 space-y-12">
            <section className="space-y-4">
              <h3 className="text-sm font-headline font-bold uppercase tracking-[0.3em] text-primary">Technical Philosophy</h3>
              <div className="space-y-4 font-body text-lg leading-relaxed text-black/80">
                <p>
                  I believe in engineering software like physical architecture: with structural integrity, precision-calculated loads, and a zero-tolerance policy for redundancy. Code is a liability; every line must justify its existence through performance and maintainability.
                </p>
                <p>
                  My approach favors strictly typed environments, modular composition, and high-performance runtimes. I don't just build features; I design resilient systems that anticipate growth and withstand the entropy of scaling.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-headline font-bold uppercase tracking-[0.3em] text-primary">Standard Workflow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border-2 border-black bg-[#fafafa] relative overflow-hidden">
                  <span className="absolute -right-2 -top-2 text-4xl font-headline font-bold opacity-5 italic">01</span>
                  <h4 className="font-headline font-bold uppercase text-sm mb-2">Architectural Audit</h4>
                  <p className="text-sm font-body text-black/60">Strict schema validation and bottleneck analysis before a single line of logic is committed.</p>
                </div>
                <div className="p-6 border-2 border-black bg-[#fafafa] relative overflow-hidden">
                  <span className="absolute -right-2 -top-2 text-4xl font-headline font-bold opacity-5 italic">02</span>
                  <h4 className="font-headline font-bold uppercase text-sm mb-2">Iterative Hardening</h4>
                  <p className="text-sm font-body text-black/60">Continuous CI/CD integration with automated testing suites that simulate extreme edge-case failure.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-headline font-bold uppercase tracking-[0.3em] text-primary">Core Principles</h3>
              <ul className="space-y-4 font-body">
                <li className="flex gap-4">
                  <div className="w-6 h-6 border-2 border-black bg-black shrink-0"></div>
                  <p><strong>Performance First:</strong> Optimized asset delivery and low-latency data fetching are non-negotiable features.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 border-2 border-black bg-primary shrink-0"></div>
                  <p><strong>Type Safety:</strong> Catching errors at compile time to ensure industrial-grade runtime stability.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 border-2 border-black bg-white shrink-0"></div>
                  <p><strong>Design Fidelity:</strong> Pixel-perfect implementation of complex geometric layouts with zero rounded corners.</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
