import type { ExperienceEntry } from "@types";

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: "voycelink",
    index: "01",
    company: "VoyceLink",
    role: "Frontend Developer",
    timeframe: "2024 · Actualidad",
    isCurrent: true,
    location: "Lima, Perú",
    workMode: "Remoto global",
    summary:
      "Desarrollo de la experiencia digital en una plataforma de comunicación e interpretación en tiempo real.",
    responsibilities: [
      "Implementación de nuevas funcionalidades en los módulos centrales de la plataforma.",
      "Optimización de rendimiento, escalabilidad y usabilidad de la interfaz.",
      "Integración de flujos de comunicación en tiempo real y consumo de APIs.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    id: "mit",
    index: "02",
    company: "Multilingual Interpreters & Translators",
    role: "Jr. Frontend Developer",
    timeframe: "2023 · 2024",
    location: "Lima, Perú",
    workMode: "Remoto",
    summary:
      "Aplicaciones internas orientadas a optimizar los procesos operativos de interpretación y traducción.",
    responsibilities: [
      "Desarrollo y mantenimiento de aplicaciones internas: chat en tiempo real, entrevistas online y facturación electrónica.",
      "Integración de mensajería y comunicación con Twilio JS.",
      "Automatización de flujos de negocio y mejora continua de procesos.",
    ],
    technologies: ["JavaScript", "React", "Twilio", "Node.js"],
  },
  {
    id: "isil",
    index: "03",
    company: "ISIL · Instituto San Ignacio de Loyola",
    role: "Técnico en Desarrollo de Software",
    timeframe: "2022 · 2024",
    location: "Lima, Perú",
    workMode: "Presencial",
    kind: "education",
    summary:
      "Estudios técnicos completados con todos los requisitos académicos y proceso de graduación finalizado.",
    responsibilities: [
      "Formación en desarrollo web y móvil, bases de datos y arquitectura de software.",
      "Aplicación de metodologías ágiles en proyectos multidisciplinarios.",
      "Construcción de una base sólida de ingeniería aplicada a productos reales.",
    ],
    technologies: ["Web", "Mobile", "SQL", "Arquitectura"],
  },
];