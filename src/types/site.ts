export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  title: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderProps {
  brandName?: string;
  navLinks?: NavLink[];
  socialLinks?: SocialLink[];
  ctaLabel?: string;
  ctaHref?: string;
  class?: string;
}

export interface SiteInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  email?: string;
  whatsapp?: string;
  url: string;
  keywords: string[];
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
  };
}
