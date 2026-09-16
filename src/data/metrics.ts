import type { HeroMetricItem } from "@types";

export const METRICS_DATA: HeroMetricItem[] = [
  {
    id: "metric-experience",
    index: "01",
    category: "Trayectoria",
    type: "stat",
    statValue: "+3",
    statSuffix: "años",
    label: "Desarrollando software y sistemas web end-to-end",
    description: "Experiencia profesional continua",
  },
  {
    id: "metric-performance",
    index: "02",
    category: "Rendimiento",
    type: "stat",
    statValue: "Core",
    statSuffix: "Web Vitals",
    label: "Arquitectura escalable, optimización de velocidad y buenas prácticas",
    description: "Altos estándares de rendimiento web",
  },
  {
    id: "metric-stack",
    index: "03",
    category: "Stack Core",
    type: "list",
    items: ["Nextjs", "AWS", "NestJS"],
    label: "Ecosistema principal de desarrollo fullstack",
    description: "Herramientas de alto rendimiento",
  },
  {
    id: "metric-location",
    index: "04",
    category: "Ubicación",
    type: "location",
    title: "Lima, Perú",
    label: "Disponible para trabajo remoto global",
    description: "Zona horaria flexible",
    indicatorColor: "#d4ff00",
    isPulse: true,
  },
];
