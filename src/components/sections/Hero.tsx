
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, RefreshCcw } from "lucide-react";
import { generateDevPitch } from "@/ai/flows/generate-dev-pitch-flow";
import { useToast } from "@/hooks/use-toast";

const INITIAL_DATA = {
  projects: [
    { name: "GridOS", description: "A high-performance operating system interface", technologiesUsed: ["React", "Rust", "WebAssembly"] },
    { name: "StarkAPI", description: "Secure headless CMS with geometric validation", technologiesUsed: ["Node.js", "PostgreSQL", "Redis"] },
    { name: "PrismGraph", description: "Real-time data visualization engine", technologiesUsed: ["Three.js", "D3.js", "TypeScript"] }
  ]
};

export function Hero() {
  const [pitch, setPitch] = useState("I am a high-precision Full-Stack Developer specialized in geometric systems and architectural software design. Focused on building robust, scalable solutions with zero-tolerance for technical debt. My work emphasizes clarity, performance, and industrial-grade reliability across the entire modern web development stack and beyond.");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGeneratePitch = async () => {
    setIsGenerating(true);
    try {
      const result = await generateDevPitch(INITIAL_DATA);
      setPitch(result);
      toast({
        title: "Pitch Generated",
        description: "AI has successfully refined your professional introduction.",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not connect to the AI engine. Please try again later.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="about" className="py-20 bg-background border-b-2 border-black">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block px-4 py-2 border-2 border-black bg-primary text-white font-headline text-xs font-bold uppercase tracking-widest">
            Portfolio v2.4.0
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none">
            Precision <br />
            <span className="text-primary">Engineering</span>
          </h1>
          
          <div className="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-3 -right-3">
              <Button 
                onClick={handleGeneratePitch}
                disabled={isGenerating}
                className="rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white p-2 h-10 w-10"
              >
                {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              </Button>
            </div>
            <p className="text-lg md:text-xl font-body leading-relaxed text-black/80">
              {pitch}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-none border-2 border-black bg-black text-white px-8 py-6 uppercase font-headline font-bold hover:bg-primary transition-all">
              View Projects
            </Button>
            <Button className="rounded-none border-2 border-black bg-white text-black px-8 py-6 uppercase font-headline font-bold hover:bg-muted transition-all">
              Download CV
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="absolute inset-0 border-2 border-black bg-[url('https://picsum.photos/seed/99/600/600')] bg-cover grayscale opacity-10"></div>
          <div className="w-full h-full border-2 border-black relative bg-white flex items-center justify-center p-12 overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 w-full aspect-square border-2 border-black bg-white shadow-[12px_12px_0px_0px_#1B32A3] flex flex-col items-center justify-center text-center p-8">
               <div className="w-full h-full border border-dashed border-black flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 border-2 border-black rotate-45 flex items-center justify-center">
                    <div className="-rotate-45 font-headline font-bold text-2xl">01</div>
                  </div>
                  <h3 className="font-headline font-bold text-xl uppercase">Full-Stack Architect</h3>
                  <p className="text-xs uppercase tracking-widest font-headline">Node / React / Go / Postgres</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
