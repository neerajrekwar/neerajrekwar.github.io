"use client";

import { Code2, Database, Layout, Server, Cpu, Globe, Zap } from "lucide-react";

const TECH_STACK = [
  { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
  { name: "Laravel", icon: <Server className="w-5 h-5" /> },
  { name: "React", icon: <Layout className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <Zap className="w-5 h-5" /> },
  { name: "Redis", icon: <Cpu className="w-5 h-5" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
];

export function TechMarquee() {
  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="w-full bg-[#EFFF00] border-y-2 border-black overflow-hidden py-4">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {marqueeItems.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="flex items-center gap-4 mx-8 group cursor-default"
          >
            <div className="p-2 border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-colors">
              {tech.icon}
            </div>
            <span className="font-headline font-bold text-2xl uppercase tracking-tighter">
              {tech.name}
            </span>
            <span className="text-black/20 text-4xl font-headline ml-8">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}