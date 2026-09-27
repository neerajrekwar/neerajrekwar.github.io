
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface HeroProfile {
  indexNumber: string;
  shortLabel: string;
  headline: {
    line1: string;
    line2: string;
  };
  pitch: string;
  role: string;
  tag: string;
}

export const HERO_PROFILES: HeroProfile[] = [
  {
    indexNumber: "01",
    shortLabel: "Engineering",
    headline: { line1: "Precision", line2: "Engineering" },
    pitch: "I am a high-precision Full-Stack Developer specialized in geometric systems and architectural software design. Focused on building robust, scalable solutions with zero-tolerance for technical debt. My work emphasizes clarity, performance, and industrial-grade reliability across the entire modern web development stack and beyond.",
    role: "Full-Stack Architect",
    tag: "Node / React / Go / Postgres",
  },
  {
    indexNumber: "02",
    shortLabel: "Architecture",
    headline: { line1: "Resilient", line2: "Architecture" },
    pitch: "Architecting resilient, type-safe full-stack applications with high-performance runtimes. Specialized in Next.js, distributed services, and responsive design systems that eliminate latency and scale effortlessly under demanding production workloads.",
    role: "Systems Engineer",
    tag: "Next.js / TypeScript / Distributed Systems",
  },
  {
    indexNumber: "03",
    shortLabel: "Integrity",
    headline: { line1: "Mechanical", line2: "Integrity" },
    pitch: "Full-stack engineer dedicated to mechanical precision and structural software integrity. Combining modern frontend aesthetics with hardened database architectures, CI/CD automation, and rigorous end-to-end reliability.",
    role: "Software Craftsman",
    tag: "CI/CD / Rust / PostgreSQL / Docker",
  },
  {
    indexNumber: "04",
    shortLabel: "Arts & Humanities",
    headline: { line1: "Arts &", line2: "Humanities" },
    pitch: "Rooted in the arts and humanities alongside engineering, I bring cultural depth, ethical inquiry, and creative storytelling into technical architecture. I treat software as an expressive, human-centered medium—harmonizing aesthetic intuition, philosophical clarity, and computational rigor to craft meaningful digital experiences.",
    role: "Humanities & Creative Technologist",
    tag: "Arts & Humanities / Philosophy / UX Design / Creative Code",
  },
];

export function Hero() {
  const [profile, setProfile] = useState<HeroProfile>(HERO_PROFILES[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGeneratePitch = async () => {
    setIsGenerating(true);
    try {
      // Fast responsive feedback
      await new Promise((resolve) => setTimeout(resolve, 150));
      const currentIndex = HERO_PROFILES.findIndex((p) => p.indexNumber === profile.indexNumber);
      const nextIndex = (currentIndex + 1) % HERO_PROFILES.length;
      const nextProfile = HERO_PROFILES[nextIndex];
      setProfile(nextProfile);
      toast({
        title: "Pitch & Headline Generated",
        description: `Switched focus to ${nextProfile.headline.line1} ${nextProfile.headline.line2}.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate profile. Please try again later.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectProfile = (selected: HeroProfile) => {
    setProfile(selected);
    toast({
      title: "Profile Set",
      description: `Active focus: ${selected.headline.line1} ${selected.headline.line2}.`,
    });
  };

  return (
    <section id="about" className="py-20 bg-background border-b-2 border-black">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-block px-3 py-1.5 border-2 border-black bg-primary text-white font-headline text-xs font-bold uppercase tracking-widest">
              Portfolio v2.4.0
            </div>
            {/* {HERO_PROFILES.map((p) => (
              <button
                key={p.indexNumber}
                type="button"
                onClick={() => handleSelectProfile(p)}
                className={`px-3 py-1.5 border-2 border-black font-headline text-xs font-bold uppercase transition-all ${
                  profile.indexNumber === p.indexNumber
                    ? "bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5"
                    : "bg-white text-black hover:bg-neutral-100"
                }`}
                title={`Set profile to ${p.headline.line1} ${p.headline.line2}`}
              >
                {p.indexNumber} {p.shortLabel}
              </button>
            ))} */}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <h1 
              key={profile.indexNumber}
              className="text-6xl md:text-8xl font-headline font-bold leading-none transition-all duration-300 animate-in fade-in slide-in-from-left-2"
            >
              {profile.headline.line1} <br />
              <span className="text-primary">{profile.headline.line2}</span>
            </h1>

            <Button
              onClick={handleGeneratePitch}
              disabled={isGenerating}
              title="Click to cycle headline and pitch"
              aria-label="Click to cycle headline and pitch"
              className="rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white px-4 py-3 h-auto self-start flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 shrink-0"
            >
              {isGenerating ? (
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              ) : (
                <Sparkles className="w-4 h-4 text-primary" />
              )}
              <span className="font-headline text-xs font-bold uppercase tracking-wider">
                {isGenerating ? "Refining..." : "Next Headline"}
              </span>
            </Button>
          </div>
          
          <div className="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-3 -right-3">
              <Button 
                onClick={handleGeneratePitch}
                disabled={isGenerating}
                title="Generate new headline and bio pitch"
                aria-label="Generate new headline and bio pitch"
                className="rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white p-2 h-10 w-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              >
                {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              </Button>
            </div>
            <p className="text-lg md:text-xl font-body leading-relaxed text-black/80">
              {profile.pitch}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="rounded-none border-2 border-black bg-black text-white px-8 py-6 uppercase font-headline font-bold hover:bg-primary transition-all">
              <Link href="/#projects">View Projects</Link>
            </Button>
            <Button asChild className="rounded-none border-2 border-black bg-white text-black px-8 py-6 uppercase font-headline font-bold hover:bg-muted transition-all">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="absolute inset-0 border-2 border-black bg-[url('https://picsum.photos/seed/99/600/600')] bg-cover grayscale opacity-10"></div>
          <div className="w-full h-full border-2 border-black relative bg-white flex items-center justify-center p-12 overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 w-full aspect-square border-2 border-black bg-white shadow-[12px_12px_0px_0px_#5c7979] flex flex-col items-center justify-center text-center p-8">
               <div className="w-full h-full border border-dashed border-black flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 border-2 border-black rotate-45 flex items-center justify-center">
                    <div className="-rotate-45 font-headline font-bold text-2xl">{profile.indexNumber}</div>
                  </div>
                  <h3 className="font-headline font-bold text-xl uppercase">{profile.role}</h3>
                  <p className="text-xs uppercase tracking-widest font-headline">{profile.tag}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
