import type { ITechMetadata, ITechResolver, TechIconId } from "@types";

/**
 * Registry of known technology metadata (Open/Closed Principle).
 * New technologies can be added here without modifying resolver logic or UI components.
 */
export const TECH_REGISTRY: Record<string, ITechMetadata> = {
  typescript: {
    id: "typescript",
    name: "TypeScript",
    brandColor: "#3178C6",
    category: "frontend",
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    brandColor: "#F7DF1E",
    category: "frontend",
  },
  react: {
    id: "react",
    name: "React",
    brandColor: "#61DAFB",
    category: "frontend",
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    brandColor: "#FFFFFF",
    category: "frontend",
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    brandColor: "#5FA04E",
    category: "backend",
  },
  nestjs: {
    id: "nestjs",
    name: "NestJS",
    brandColor: "#E0234E",
    category: "backend",
  },
  express: {
    id: "express",
    name: "Express",
    brandColor: "#E2E8F0",
    category: "backend",
  },
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    brandColor: "#4169E1",
    category: "database",
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    brandColor: "#47A248",
    category: "database",
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    brandColor: "#4479A1",
    category: "database",
  },
  redis: {
    id: "redis",
    name: "Redis",
    brandColor: "#FF4438",
    category: "database",
  },
  firebase: {
    id: "firebase",
    name: "Firebase",
    brandColor: "#FFCA28",
    category: "backend",
  },
  typeorm: {
    id: "typeorm",
    name: "TypeORM",
    brandColor: "#FE0808",
    category: "backend",
  },
  websockets: {
    id: "websockets",
    name: "WebSockets",
    brandColor: "#38BDF8",
    category: "backend",
  },
  docker: {
    id: "docker",
    name: "Docker",
    brandColor: "#2496ED",
    category: "cloud",
  },
  aws: {
    id: "aws",
    name: "AWS",
    brandColor: "#FF9900",
    category: "cloud",
  },
  storybook: {
    id: "storybook",
    name: "Storybook",
    brandColor: "#FF4785",
    category: "tool",
  },
  pug: {
    id: "pug",
    name: "Pug",
    brandColor: "#A86454",
    category: "frontend",
  },
};

/**
 * Mapping aliases to canonical registry keys.
 */
const TECH_ALIAS_MAP: Record<string, string> = {
  ts: "typescript",
  js: "javascript",
  next: "nextjs",
  "next.js": "nextjs",
  node: "nodejs",
  "node.js": "nodejs",
  nest: "nestjs",
  "nest.js": "nestjs",
  "express.js": "express",
  postgres: "postgresql",
  mongo: "mongodb",
  websocket: "websockets",
  ws: "websockets",
};

/**
 * TechResolverService implementing ITechResolver (Dependency Inversion / Single Responsibility).
 */
export class TechResolverService implements ITechResolver {
  public resolve(rawName: string): ITechMetadata {
    if (!rawName || typeof rawName !== "string") {
      return this.fallback(rawName);
    }

    const normalized = rawName.trim().toLowerCase();
    const canonicalKey = TECH_ALIAS_MAP[normalized] || normalized;

    if (TECH_REGISTRY[canonicalKey]) {
      return TECH_REGISTRY[canonicalKey];
    }

    // Attempt direct match ignoring spaces and hyphens
    const cleanKey = canonicalKey.replace(/[\s.-]/g, "");
    if (TECH_REGISTRY[cleanKey]) {
      return TECH_REGISTRY[cleanKey];
    }

    return this.fallback(rawName);
  }

  private fallback(name: string): ITechMetadata {
    return {
      id: "code" as TechIconId,
      name: name || "Tech",
      brandColor: "#A1A1AA",
      category: "other",
    };
  }
}

// Singleton default instance for convenient dependency injection
export const techResolver = new TechResolverService();
