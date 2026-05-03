export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  stack?: string[];
  caseStudy?: { problem: string; solution: string; impact: string };
  images?: string[];
  slug: string;
  content: string;
}

export interface Skill {
  name: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  metrics?: string[];
}
