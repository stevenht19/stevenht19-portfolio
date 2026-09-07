import type { NavLink, SocialLink } from "./types";

export const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/stevenht19",
    ariaLabel: "Perfil de GitHub",
    title: "GitHub @stevenht19",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/stevenht",
    ariaLabel: "Perfil de LinkedIn",
    title: "LinkedIn @stevenht",
  },
];
