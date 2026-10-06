export interface SiteConfig {
  name: string;
  title: string;
  eyebrow: string;
  profileImage: string;
  cvFile: string;
  email: string;
  phone: string;
  location: string;
  showPrivateInformation: boolean;
}

export interface SocialLinks {
  linkedin: string;
  facebook: string;
  github: string;
  whatsapp: string;
}

export interface ExperienceCategory {
  categoryName: string;
  details: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location?: string;
  summary: string;
  categories?: ExperienceCategory[];
  bulletPoints?: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  field?: string;
  grade?: string;
}

export interface TrainingItem {
  title: string;
  institution: string;
  year: string;
  category: 'Fire Safety' | 'Compliance' | 'Communication' | 'Corporate Skills' | 'Creative Skills' | 'Industrial Training';
  duration?: string;
  location?: string;
}

export interface ProjectItem {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface AchievementItem {
  title: string;
  issuer: string;
  description: string;
}
