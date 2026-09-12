import type { ImageMetadata } from "astro";

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  title: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderProps {
  brandName?: string;
  navLinks?: NavLink[];
  socialLinks?: SocialLink[];
  ctaLabel?: string;
  ctaHref?: string;
  class?: string;
}

export interface SiteInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
  };
}

export type ProjectTone = "blue" | "indigo" | "sky" | "cyan";

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

export interface HeroMetricItem {
  id: string;
  index: string;
  category: string;
  type: "stat" | "list" | "location";
  statValue?: string;
  statSuffix?: string;
  title?: string;
  items?: string[];
  label: string;
  description: string;
  indicatorColor?: string;
  isPulse?: boolean;
}
