import type { SiteInfo, SocialLink } from "@types";

export const SITE_INFO: SiteInfo = {
  name: "Martín Hernández",
  role: "Desarrollador Fullstack",
  bio: "especializado en diseñar y construir aplicaciones web modernas, rápidas y escalables con arquitectura sólida y experiencias fluidas.",
  location: "Lima, Perú",
  email: "mstvdev19@gmail.com",
  whatsapp: "https://wa.me/51981729976?text=Hola%20Mart%C3%ADn%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20de%20un%20proyecto",
  socials: {
    github: {
      name: "GitHub",
      href: "https://github.com/stevenht19",
      ariaLabel: "Perfil de GitHub de Martín Hernández",
      title: "GitHub",
    },
    linkedin: {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/martin-hernández-torres-4778a3267/",
      ariaLabel: "Perfil de LinkedIn de Martín Hernández",
      title: "LinkedIn",
    },
  },
};

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  SITE_INFO.socials.github,
  SITE_INFO.socials.linkedin,
];
