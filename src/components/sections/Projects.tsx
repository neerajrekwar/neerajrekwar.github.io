"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageId: string;
  images?: string[];
  tags: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Registry mapping imageId to multiple image paths if available
const PROJECT_IMAGES_BY_ID: Record<string, string[]> = {
  "project-1": [
    "/images/project-1/walktrip-1.jpg",
    "/images/project-1/walktrip-2.jpg",
    "/images/project-1/walktrip-3.jpg",
  ],
  "project-2": [
    "/images/project-2/1.jpg",
    "/images/project-2/2.jpg",
    "/images/project-2/3.jpg",
    "/images/project-2/4.jpg",
    "/images/project-2/5.jpg",
    "/images/project-2/6.jpg",
    "/images/project-2/7.jpg",
  ],
};

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "WALKTRIP",
    category: "Web",
    imageId: "project-1",
    images: [
      "/images/project-1/walktrip-1.jpg",
      "/images/project-1/walktrip-2.jpg",
      "/images/project-1/walktrip-3.jpg",
    ],
    tags: ["NEXT.JS 16", "TypeScript", "Tailwind"],
    description: "Full-stack travel platform connecting travelers with local Delhi guides and curated cultural experiences.",
    githubUrl: "https://github.com/neerajrekwar/walktrip-",
    liveUrl: "https://walktrip-delhi.vercel.app"
  },
  {
    id: 2,
    title: "NEWSLYUSA",
    category: "Web",
    imageId: "project-2",
    images: [
      "/images/project-2/1.jpg",
      "/images/project-2/2.jpg",
      "/images/project-2/3.jpg",
      "/images/project-2/4.jpg",
      "/images/project-2/5.jpg",
      "/images/project-2/6.jpg",
      "/images/project-2/7.jpg",
    ],
    tags: ["NEXT.JS 16", "MONGODB", "TYPESCRIPT"],
    description: "Modern digital news platform for discovering and organizing stories across politics, health, travel, sports, technology, and entertainment.",
    githubUrl: "https://github.com/neerajrekwar",
    liveUrl: "https://walktrip-delhi.vercel.app"
  },
  // {
  //   id: 3,
  //   title: "Structural UI",
  //   category: "Design",
  //   imageId: "project-3",
  //   tags: ["Figma", "React", "SCSS"],
  //   description: "A component library built on architectural principles.",
  //   githubUrl: "https://github.com/neerajrekwar"
  // },
  // {
  //   id: 4,
  //   title: "Vault System",
  //   category: "Web",
  //   imageId: "project-4",
  //   tags: ["Solidity", "Ether.js", "Vue"],
  //   description: "Decentralized storage with zero-knowledge verification.",
  //   githubUrl: "https://github.com/neerajrekwar"
  // }
];

interface ProjectMediaProps {
  title: string;
  category: string;
  images: string[];
  imageHint: string;
}

function ProjectMedia({ title, category, images, imageHint }: ProjectMediaProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(images.length);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const hasMultipleImages = images.length > 1;

  return (
    <div className="aspect-video relative overflow-hidden border-b-2 border-black bg-muted">
      {hasMultipleImages ? (
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full group/carousel">
          <CarouselContent className="h-full ml-0">
            {images.map((img, idx) => (
              <CarouselItem key={idx} className="h-full pl-0 relative aspect-video">
                <Image
                  src={img}
                  alt={`${title} - Preview ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  priority={idx === 0}
                  data-ai-hint={imageHint}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation Buttons */}
          <CarouselPrevious
            type="button"
            className="left-2 top-1/2 -translate-y-1/2 border-2 border-black rounded-none bg-white text-black hover:bg-black hover:text-white shadow-[2px_2px_0px_0px_#000] opacity-90 md:opacity-0 md:group-hover/carousel:opacity-100 transition-all z-20 h-8 w-8 cursor-pointer"
          />
          <CarouselNext
            type="button"
            className="right-2 top-1/2 -translate-y-1/2 border-2 border-black rounded-none bg-white text-black hover:bg-black hover:text-white shadow-[2px_2px_0px_0px_#000] opacity-90 md:opacity-0 md:group-hover/carousel:opacity-100 transition-all z-20 h-8 w-8 cursor-pointer"
          />

          {/* Slide Indicator and Navigation Dots */}
          {count > 1 && (
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 pointer-events-auto">
              <div className="bg-black text-white font-headline text-[10px] font-bold px-2 py-0.5 border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)]">
                {current} / {count}
              </div>
              <div className="flex gap-1 bg-white/95 p-1 border border-black shadow-[2px_2px_0px_0px_#000]">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      api?.scrollTo(i);
                    }}
                    className={`w-2 h-2 transition-all cursor-pointer ${
                      current === i + 1 ? "bg-black scale-110" : "bg-black/25 hover:bg-black/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </Carousel>
      ) : (
        <Image
          src={images[0] || "https://picsum.photos/seed/placeholder/800/600"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
          data-ai-hint={imageHint}
        />
      )}

      {/* Category Badge overlay on top right */}
      <div className="absolute top-4 right-4 flex gap-2 z-20 pointer-events-none">
        <Badge className="rounded-none border-2 border-black bg-white text-black font-headline uppercase font-bold px-3 py-1">
          {category}
        </Badge>
      </div>
    </div>
  );
}

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

  const getProjectImages = (project: ProjectItem): string[] => {
    if (project.images && project.images.length > 0) {
      return project.images;
    }
    if (PROJECT_IMAGES_BY_ID[project.imageId] && PROJECT_IMAGES_BY_ID[project.imageId].length > 0) {
      return PROJECT_IMAGES_BY_ID[project.imageId];
    }
    return [getImageUrl(project.imageId)];
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
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 border-2 border-black font-headline font-bold uppercase text-xs transition-all cursor-pointer ${
                  filter === cat ? "bg-black text-white" : "bg-white text-black hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const projectImages = getProjectImages(project);
            return (
              <div key={project.id} className="group relative bg-white border-2 border-black overflow-hidden hover:shadow-[12px_12px_0px_0px_#3b5454] transition-all">
                <ProjectMedia
                  title={project.title}
                  category={project.category}
                  images={projectImages}
                  imageHint={getImageHint(project.imageId)}
                />

                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                          aria-label={`${project.title} GitHub Repository`}
                          title="View Source Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      ) : (
                        <span
                          className="p-2 border-2 border-black/30 text-black/30 cursor-not-allowed"
                          aria-label="GitHub Repository Unavailable"
                          title="Repository Unavailable"
                        >
                          <Github className="w-5 h-5" />
                        </span>
                      )}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                          aria-label={`${project.title} Live Website`}
                          title="Visit Live Site"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      ) : (
                        <span
                          className="p-2 border-2 border-black/30 text-black/30 cursor-not-allowed"
                          aria-label="Live Demo Unavailable"
                          title="Live Demo Unavailable"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </span>
                      )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
