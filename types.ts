import { LucideIcon } from 'lucide-react';

export enum ProjectCategory {
  HARDWARE = 'HARDWARE',
  SOFTWARE = 'SOFTWARE'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  techStack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  status?: string; // "Completed", "In Progress"
}

export interface SkillGroup {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  image?: string;
}