export type SkillCategory =
  | "frontend"
  | "backend"
  | "databases"
  | "infrastructure";

export interface SkillCategoryMeta {
  id: SkillCategory;
  index: string;
  label: string;
  description: string;
}

export type TechIconName =
  | "nextjs"
  | "react"
  | "typescript"
  | "nestjs"
  | "nodejs"
  | "postgresql"
  | "mongodb"
  | "mysql"
  | "redis"
  | "docker"
  | "aws"
  | "database";

export interface SkillEntry {
  id: string;
  index: string;
  name: string;
  category: SkillCategory;
  description: string;
  icon: TechIconName;
}
