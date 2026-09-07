export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  title: string;
}

export interface HeaderProps {
  brandName?: string;
  navLinks?: NavLink[];
  socialLinks?: SocialLink[];
  ctaLabel?: string;
  ctaHref?: string;
  class?: string;
}
