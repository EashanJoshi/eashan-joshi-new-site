export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  skills: SkillCategory[];
  resume: ResumeProps;
  contact: ContactProps;
}

export interface HeroLink {
  title: string;
  description: string;
  href: string;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  latestWork: {
    title: string;
    href: string;
    videoSrc: string;
  };
  links: HeroLink[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  linkPreview?: string;
  linkSource?: string;
  previewLabel?: string;
  sourceLabel?: string;
  bullets?: string[];
  tech?: string[];
}

export interface AboutProps {
  paragraphs: string[];
  image: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ResumeProps {
  description: string;
  href: string;
  label: string;
}

export type ContactIcon = "email" | "github" | "linkedin" | "instagram";

export interface ContactLink {
  label: string;
  href: string;
  icon: ContactIcon;
  external?: boolean;
}

export interface ContactProps {
  heading: string;
  description: string;
  links: ContactLink[];
}

export interface HeaderProps {
  siteLogo: string;
  author: string;
  navLinks: { text: string; href: string; external?: boolean }[];
}
