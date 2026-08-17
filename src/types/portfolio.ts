export interface PersonalInfo {
  name: string;
  alias: string;
  role: string;
  heroHeadline: string;
  heroSubheadline: string;
  bio: string;
  experienceYears: number;
  location: string;
  availability: string;
  avatarPlaceholderText: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface Skill {
  name: string;
  level?: number;
  iconName?: string;
  featured?: boolean;
  description?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string; // e.g. "Full-time"
  summary: string;
  responsibilities: string[];
  technologies: string[];
  featuredAchievement?: string;
}

export interface Project {
  id: string;
  issueNumber: string; // e.g. "ISSUE #01"
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "MERN" | "Enterprise" | "AI / RAG" | "Creative Web";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageAccent: string; // Hex color for glow/comic border
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socials: SocialLink[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
  contact: ContactInfo;
}
