export type TechIconId =
  | "typescript"
  | "javascript"
  | "react"
  | "nextjs"
  | "nodejs"
  | "nestjs"
  | "express"
  | "postgresql"
  | "mongodb"
  | "mysql"
  | "redis"
  | "docker"
  | "aws"
  | "firebase"
  | "typeorm"
  | "websockets"
  | "storybook"
  | "pug"
  | "code";

export interface ITechMetadata {
  id: TechIconId;
  name: string;
  brandColor?: string;
  category?: "frontend" | "backend" | "database" | "tool" | "cloud" | "other";
}

export interface ITechResolver {
  resolve(rawName: string): ITechMetadata;
}
