import type { ImageMetadata } from "astro";

export type ProjectTone = "blue" | "indigo" | "sky" | "cyan" | "roselight";

export interface Project {
  id: string;
  index: string;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  image: ImageMetadata;
  imageAlt: string;
  preview?: string;
  repo?: string;
  tone: ProjectTone;
}
