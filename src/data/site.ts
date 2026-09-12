import type { SiteInfo, SocialLink } from "@types";

export const SITE_INFO: SiteInfo = {
  name: "Martín Hernández",
  role: "Desarrollador Fullstack",
  bio: "especializado en diseñar y construir aplicaciones web modernas, rápidas y escalables con arquitectura sólida y experiencias fluidas.",
  location: "Lima, Perú",
  socials: {
    github: {
      name: "GitHub",
      href: "https://github.com/stevenht19",
      ariaLabel: "Perfil de GitHub de Martín Hernández",
      title: "GitHub",
    },
    linkedin: {
      name: "LinkedIn",
      href: "https://linkedin.com/in/stevenht19",
      ariaLabel: "Perfil de LinkedIn de Martín Hernández",
      title: "LinkedIn",
    },
  },
};

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  SITE_INFO.socials.github,
  SITE_INFO.socials.linkedin,
];
