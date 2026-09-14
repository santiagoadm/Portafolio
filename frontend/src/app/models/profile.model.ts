export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  url?: string;
  badge?: string;
}

export interface Education {
  program: string;
  institution: string;
  period: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  url?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  about: string;
  services: Service[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
}
