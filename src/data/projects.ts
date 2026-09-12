import type { Project } from "@types";
import socializeNow from "@assets/socialize-now.webp";
import ssanchez from "@assets/ssanchez.png";
import demopos from "@assets/demopos.webp";

export const PROJECTS_DATA: Project[] = [
  {
    id: "socialize-now",
    index: "01",
    title: "Socialize Now",
    role: "Fullstack Developer",
    description:
      "Plataforma de gestión y publicación omnicanal para redes sociales. Automatiza programación, métricas de engagement y flujos de trabajo colaborativos.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Material UI"],
    image: socializeNow,
    imageAlt: "Socialize Now - Plataforma de gestión de redes sociales",
    preview: "https://merry-capybara-cd3821.netlify.app/",
    repo: "https://github.com/stevenht19/mui-socializenow",
    tone: "blue",
  },
  {
    id: "sandra-sanchez",
    index: "02",
    title: "Sandra Sanchez",
    role: "Frontend Developer & Designer",
    description:
      "Sitio web profesional y portafolio interactivo para maquilladora profesional. Diseño editorial de alta gama, catálogo de servicios y canal directo de reservas.",
    technologies: ["Preact", "TypeScript", "Tailwind CSS", "Astro"],
    image: ssanchez,
    imageAlt: "Sandra Sanchez - Maquilladora Profesional",
    preview: "https://ssanchez-makeup.vercel.app",
    tone: "indigo",
  },
  {
    id: "pos-engine",
    index: "03",
    title: "POS Cloud Engine",
    role: "Fullstack Developer",
    description:
      "Sistema de punto de venta e inventario en tiempo real para retail y restaurantes, con sincronización offline y analíticas de ventas.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    image: demopos,
    imageAlt: "POS Cloud Engine - Sistema de Punto de Venta",
    preview: "https://demo-pos-app.vercel.app",
    repo: "https://github.com/stevenht19/demo-pos-app",
    tone: "cyan",
  },
];
