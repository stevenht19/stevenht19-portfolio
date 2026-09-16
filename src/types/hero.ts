export interface HeroMetricItem {
  id: string;
  index: string;
  category: string;
  type: "stat" | "list" | "location";
  statValue?: string;
  statSuffix?: string;
  title?: string;
  items?: string[];
  label: string;
  description: string;
  indicatorColor?: string;
  isPulse?: boolean;
}
