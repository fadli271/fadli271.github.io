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

export interface PortfolioContent {
  nav: {
    home: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    line1: string;
    line2: string;
    tagline: string;
    scroll: string;
  };
  experienceSection: {
    about: {
      title: string;
      content: string;
      link: string;
    };
    experience: { title: string; subtitle: string };
    projects: { title: string; subtitle: string };
    partner: { title: string; subtitle: string };
    stack: { title: string; subtitle?: string };
    cta: {
      title: string;
      button: string;
    };
    download: {
      cv: string;
      link: string;
    };
    ui: {
      careerTitle: string;
      showMore: string;
      showLess: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
    ui: {
      seeAll: string;
      seeLess: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetailButton: string;
    modal: {
      noProjectSelected: string;
      previewTitle: string;
      problem: string;
      solution: string;
      impact: string;
      techStack: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    emailPrompt: string;
    socialPrompt: string;
    cta: {
      label: string;
      href: string;
    };
  };
  footer: {
    credit: string;
  };
}
