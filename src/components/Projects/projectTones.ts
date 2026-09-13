import type { Project } from "@types";

interface ToneTokens {
  spot: string;
  roleChip: string;
  chipHover: string;
  indexHover: string;
  linkHover: string;
  arrowHover: string;
}

export const TONES: Record<Project["tone"], ToneTokens> = {
  blue: {
    spot: "59 130 246",
    roleChip: "border-blue-400/30 bg-blue-500/15 text-blue-200",
    chipHover: "hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
    indexHover: "group-hover/proj:text-primary",
    linkHover: "hover:text-primary",
    arrowHover: "group-hover/proj:bg-blue-400/20",
  },
  indigo: {
    spot: "147 51 234",
    roleChip: "border-purple-400/30 bg-purple-500/15 text-purple-200",
    chipHover: "hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
    indexHover: "group-hover/proj:text-primary",
    linkHover: "hover:text-primary",
    arrowHover: "group-hover/proj:bg-purple-400/20",
  },
  sky: {
    spot: "99 102 241",
    roleChip: "border-indigo-400/30 bg-indigo-500/15 text-indigo-200",
    chipHover: "hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
    indexHover: "group-hover/proj:text-primary",
    linkHover: "hover:text-primary",
    arrowHover: "group-hover/proj:bg-indigo-400/20",
  },
  cyan: {
    spot: "168 85 247",
    roleChip: "border-violet-400/30 bg-violet-500/15 text-violet-200",
    chipHover: "hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
    indexHover: "group-hover/proj:text-primary",
    linkHover: "hover:text-primary",
    arrowHover: "group-hover/proj:bg-violet-400/20",
  },
  roselight: {
    spot: "184 50 79",
    roleChip: "border-rose-400/30 bg-rose-500/15 text-rose-200",
    chipHover: "hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
    indexHover: "group-hover/proj:text-primary",
    linkHover: "hover:text-primary",
    arrowHover: "group-hover/proj:bg-rose-400/20",
  },
};
