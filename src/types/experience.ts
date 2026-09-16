export interface ExperienceEntry {
  id: string;
  index: string;
  company: string;
  role: string;
  timeframe: string;
  isCurrent?: boolean;
  location: string;
  workMode: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  kind?: "work" | "education";
}

export interface AboutExperienceEntry {
  id: string;
  index: string;
  role: string;
  company: string;
  location: string;
  timeframe: string;
  points: string[];
  stack: string[];
}
