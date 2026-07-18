
"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web",
    imageId: "project-1",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    description: "High-performance dashboard for geometric analysis."
  },
  {
    id: 2,
    title: "GridEngine v2",
    category: "System",
    imageId: "project-2",
    tags: ["Rust", "Wasm", "React"],
    description: "Core processing engine for grid-based data structures."
  },
  {
    id: 3,
    title: "Structural UI",
    category: "Design",
    imageId: "project-3",
    tags: ["Figma", "React", "SCSS"],
    description: "A component library built on architectural principles."
  },
  {
    id: 4,
    title: "Vault System",
    category: "Web",
    imageId: "project-4",
    tags: ["Solidity", "Ether.js", "Vue"],
    description: "Decentralized storage with zero-knowledge verification."
  }
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "System", "Design"];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const getImageUrl = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || "https://picsum.photos/seed/placeholder/800/600";
  };

  const getImageHint = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageHint || "project placeholder";
  };

  return (
    <section id="projects" className="py-24 border-b-2 border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Project Showcase</h2>
            <p className="text-muted-foreground max-w-xl font-body">
              A curated selection of industrial-grade software engineering projects. 
              Built with precision, documented for scaling.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 border-2 border-black font-headline font-bold uppercase text-xs transition-all ${
                  filter === cat ? "bg-black text-white" : "bg-white text-black hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white border-2 border-black overflow-hidden hover:shadow-[12px_12px_0px_0px_#30109C] transition-all">
              <div className="aspect-video relative overflow-hidden border-b-2 border-black">
                <Image 
                  src={getImageUrl(project.imageId)} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  data-ai-hint={getImageHint(project.imageId)}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="rounded-none border-2 border-black bg-white text-black font-headline uppercase font-bold px-3 py-1">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href="#" className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-headline font-bold uppercase tracking-tighter border border-black/20 px-2 py-1 bg-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
