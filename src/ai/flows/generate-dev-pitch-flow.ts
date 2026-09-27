/**
 * @fileOverview Client-safe developer pitch generator for static export and production deployment.
 */

export interface ProjectData {
  name: string;
  description: string;
  technologiesUsed: string[];
}

export interface GenerateDevPitchInput {
  projects?: ProjectData[];
}

export interface HeadlineData {
  line1: string;
  line2: string;
}

export interface DevPitchProfile {
  headline: HeadlineData;
  pitch: string;
  role: string;
  tag: string;
  indexNumber: string;
}

export type GenerateDevPitchOutput = DevPitchProfile;

export const CURATED_PROFILES: DevPitchProfile[] = [
  {
    headline: { line1: "Precision", line2: "Engineering" },
    pitch: "I am a high-precision Full-Stack Developer specialized in geometric systems and architectural software design. Focused on building robust, scalable solutions with zero-tolerance for technical debt. My work emphasizes clarity, performance, and industrial-grade reliability across the entire modern web development stack and beyond.",
    role: "Full-Stack Architect",
    tag: "Node / React / Go / Postgres",
    indexNumber: "01",
  },
  {
    headline: { line1: "Resilient", line2: "Architecture" },
    pitch: "Architecting resilient, type-safe full-stack applications with high-performance runtimes. Specialized in Next.js, distributed services, and responsive design systems that eliminate latency and scale effortlessly under demanding production workloads.",
    role: "Systems Engineer",
    tag: "Next.js / TypeScript / Distributed Systems",
    indexNumber: "02",
  },
  {
    headline: { line1: "Mechanical", line2: "Integrity" },
    pitch: "Full-stack engineer dedicated to mechanical precision and structural software integrity. Combining modern frontend aesthetics with hardened database architectures, CI/CD automation, and rigorous end-to-end reliability.",
    role: "Software Craftsman",
    tag: "CI/CD / Rust / PostgreSQL / Docker",
    indexNumber: "03",
  },
  {
    headline: { line1: "Arts &", line2: "Humanities" },
    pitch: "Rooted in the arts and humanities alongside engineering, I bring cultural depth, ethical inquiry, and creative storytelling into technical architecture. I treat software as an expressive, human-centered medium—harmonizing aesthetic intuition, philosophical clarity, and computational rigor to craft meaningful digital experiences.",
    role: "Humanities & Creative Technologist",
    tag: "Arts & Humanities / Philosophy / UX Design / Creative Code",
    indexNumber: "04",
  },
];

export const CURATED_PITCHES: string[] = CURATED_PROFILES.map((p) => p.pitch);

let lastIndex = 0;

export async function generateDevPitch(input?: GenerateDevPitchInput): Promise<GenerateDevPitchOutput> {
  // Simulate AI orchestration delay
  await new Promise((resolve) => setTimeout(resolve, 350));
  lastIndex = (lastIndex + 1) % CURATED_PROFILES.length;
  return CURATED_PROFILES[lastIndex];
}
