import type { AboutExperienceEntry } from "@types";

export const ABOUT_BIO =
  "Desarrollador Full-Stack (+3 años) con experiencia en sistemas HR, CRM, CMS, LMS y comunicación en tiempo real con Twilio y WebSockets. Enfoque en Clean Architecture, principios SOLID y código mantenible.";

export const ABOUT_PARAGRAPHS: string[] = [
  "Desarrollador Full-Stack con más de 3 años creando soluciones para empresas en EE.UU. y Latam. He construido sistemas <strong>HR, CRM, CMS y LMS</strong>, además de aplicaciones de <strong>voz y video en tiempo real</strong> con Twilio.",
  "Aplico <strong>Clean Architecture</strong> y principios SOLID para desarrollar software robusto y escalable con React, Next.js, NestJS, TypeScript y PostgreSQL, priorizando rendimiento y código limpio.",
];

export const ABOUT_FOCUS: string[] = [
  "Sistemas HR & CRM",
  "CMS & LMS Escalables",
  "Llamadas Voz & Video (Twilio)",
  "Código Limpio & SOLID",
  "APIs REST & WebSockets",
];

export const ABOUT_EXPERIENCE: AboutExperienceEntry[] = [
  {
    id: "multilingual-interpreters",
    index: "01",
    role: "Full-Stack Developer",
    company: "Multilingual Interpreters & Translators",
    location: "Florida, Estados Unidos (Remoto)",
    timeframe: "Mar 2023 – Oct 2025",
    points: [
      "Desarrollo de interfaces frontend para plataformas de HR, CMS y LMS.",
      "Implementación de funcionalidades frontend utilizando Next.js y React.js, siguiendo principios SOLID.",
      "Integración de APIs REST con Express y PostgreSQL.",
      "Implementación de autenticación por roles en diversos sistemas, Twilio Voice y pruebas con Jest.",
    ],
    stack: [
      "TypeScript",
      "JavaScript",
      "React",
      "NextJS",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Firebase"
    ],
  },
  {
    id: "voycelink",
    index: "02",
    role: "Full-Stack Developer",
    company: "Voycelink",
    location: "Florida, Estados Unidos (Remoto)",
    timeframe: "Ene 2024 – Oct 2025",
    points: [
      "Desarrollo de interfaces frontend para plataformas de HR y videollamadas.",
      "Integración de autenticación segura mediante NextAuth y Azure AD B2C.",
      "Construcción e integración de REST APIs usando NestJS siguiendo los principios de clean architecture.",
      "Integración de Twilio JS para habilitar llamadas de voz y video en tiempo real dentro de las aplicaciones.",
    ],
    stack: [
      "TypeScript",
      "Nextjs",
      "React",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "NestJS",
      "TypeORM",
      "WebSockets",
    ],
  },
  {
    id: "ae-online-solutions",
    index: "03",
    role: "ReactJS Developer Middle",
    company: "AE Online Solutions",
    location: "Lima, Perú (Presencial)",
    timeframe: "Feb 2026 – Jul 2026",
    points: [
      "Desarrollo de interfaces frontend y consumo de REST APIs para sistemas LMS con autenticación basada en roles.",
      "Desarrollo y mantenimiento de componentes reutilizables en Storybook.",
      "Desarrollo de formularios, consumo de APIs y despliegues en AWS Amplify.",
    ],
    stack: ["React", "TypeScript", "Pug", "NextJS", "AWS", "Storybook"],
  },
];