export interface BrandStyle {
  iconState: string;
  shadowHover: string;
}

export const CONTACT_BRAND_STYLES: Record<string, BrandStyle> = {
  github: {
    iconState: "group-hover:bg-white group-hover:text-zinc-950",
    shadowHover: "group-hover:shadow-[0_10px_30px_-8px_rgba(255,255,255,0.4)]",
  },
  linkedin: {
    iconState: "group-hover:bg-[#0a66c2] group-hover:text-white",
    shadowHover: "group-hover:shadow-[0_10px_30px_-8px_rgba(10,102,194,0.55)]",
  },
};
