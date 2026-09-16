import type { SkillCategoryMeta, SkillEntry } from "@types";

export const SKILL_CATEGORIES: SkillCategoryMeta[] = [
  {
    id: "frontend",
    index: "01",
    label: "Frontend",
    description: "Interfaces rápidas, reactivas y accesibles",
  },
  {
    id: "backend",
    index: "02",
    label: "Backend",
    description: "APIs y servicios sólidos y escalables",
  },
  {
    id: "databases",
    index: "03",
    label: "Bases de datos",
    description: "Modelado, optimización y consultas de alto rendimiento",
  },
  {
    id: "infrastructure",
    index: "04",
    label: "Infraestructura",
    description: "Contenedores, despliegues y computación en la nube",
  },
];

export const SKILLS_DATA: SkillEntry[] = [
  {
    id: "nextjs",
    index: "01",
    name: "Next.js",
    category: "frontend",
    icon: "nextjs",
    description:
      "Aplicaciones full-stack con renderizado híbrido, SEO y Performance.",
  },
  {
    id: "react",
    index: "02",
    name: "React",
    category: "frontend",
    icon: "react",
    description:
      "Interfaces componentizadas, escalables y fluidas para cualquier escala.",
  },
  {
    id: "typescript",
    index: "03",
    name: "TypeScript",
    category: "frontend",
    icon: "typescript",
    description:
      "Tipado estricto que convierte el caos en código mantenible y predecible.",
  },
  {
    id: "nestjs",
    index: "01",
    name: "NestJS",
    category: "backend",
    icon: "nestjs",
    description:
      "Backends modulares y bien estructurados, listos para producción.",
  },
  {
    id: "nodejs",
    index: "02",
    name: "Node.js",
    category: "backend",
    icon: "nodejs",
    description:
      "Servicios en tiempo real, APIs y microservicios de alto rendimiento.",
  },
  {
    id: "postgresql",
    index: "02",
    name: "PostgreSQL",
    category: "databases",
    icon: "postgresql",
    description:
      "Bases relacionales robustas con índices, particionado y buen modelado.",
  },
  {
    id: "mongodb",
    index: "03",
    name: "MongoDB",
    category: "databases",
    icon: "mongodb",
    description:
      "Documentos flexibles que escalan con datos no estructurados.",
  },
  {
    id: "mysql",
    index: "04",
    name: "MySQL",
    category: "databases",
    icon: "mysql",
    description:
      "Bases relacionales confiables para datos transaccionales de alto volumen.",
  },
  {
    id: "redis",
    index: "05",
    name: "Redis",
    category: "databases",
    icon: "redis",
    description:
      "Caché en memoria y colas de alta velocidad para servicios de bajísima latencia.",
  },
  {
    id: "docker",
    index: "01",
    name: "Docker",
    category: "infrastructure",
    icon: "docker",
    description:
      "Contenedores reproducibles que estandarizan cualquier despliegue.",
  },
  {
    id: "aws",
    index: "02",
    name: "AWS",
    category: "infrastructure",
    icon: "aws",
    description:
      "Infraestructura cloud segura y escalable para producción real.",
  },
];