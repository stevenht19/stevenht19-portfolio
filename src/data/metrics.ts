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
    id: "metric-projects",
    index: "02",
    category: "Entregables",
    type: "stat",
    statValue: "+10",
    statSuffix: "proyectos",
    label: "Completados con despliegue y arquitectura en producción",
    description: "Soluciones reales implementadas",
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
    label: "Disponible para trabajo remoto global (UTC-5)",
    description: "Zona horaria flexible",
    indicatorColor: "#d4ff00",
    isPulse: true,
  },
];
