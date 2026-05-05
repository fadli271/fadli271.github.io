import { FeatureItem } from "@/types";

export interface WhyChooseUsItem extends FeatureItem {
  iconName: string;
  iconBgClass: string;
  iconHoverBgClass: string;
  iconTextClass: string;
}

export interface ProcessStep extends FeatureItem {
  iconName: string;
  iconColor: string;
  numberBg: string;
  blurBg: string;
}

export interface ServiceItem extends FeatureItem {
  iconName: string;
  iconBgClass: string;
  features: string[];
  isPopular: boolean;
}

export interface PortfolioItem {
  category: string;
  categoryColor?: string;
  categoryBg?: string;
  title: string;
  description: string;
  stat: string;
  statSub: string;
  image: string;
  link?: string;
}

export interface Testimonial {
  iconName: string;
  iconBgClass: string;
  iconColorClass: string;
  businessName: string;
  businessType: string;
  rating: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorInitials: string;
}

export interface PackageInclude {
  iconName: string;
  text: string;
}

export interface Package {
  label: string;
  price: string;
  infra: string;
  fit: string;
  isPopular: boolean;
  waLink: string;
  includes: PackageInclude[];
}

export interface StandardFeature extends FeatureItem {}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicesContent {
  nav: {
    navIntro: string;
    navWhyUs: string;
    navServices: string;
    navPortfolio: string;
    navClients: string;
    navPricing: string;
    navFaq: string;
    navChat: string;
  };
  hero: {
    heroBadge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSubtitle: string;
    heroCta: string;
    heroFormCta: string;
    waMessage: string;
  };
  trustBadges: string[];
  whyUs: {
    label: string;
    title: string;
    subtitle: string;
    items: WhyChooseUsItem[];
  };
  promo: {
    badge: string;
    headline: string;
    subtext: string;
    cta: string;
    urgency: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    popularBadge: string;
    items: ServiceItem[];
  };
  portfolio: {
    label: string;
    title: string;
    subtitle: string;
    demoLabel: string;
    categories: {
      all: string;
      landingPage: string;
      companyProfile: string;
      system: string;
    };
    items: PortfolioItem[];
  };
  testimonials: {
    label: string;
    title: string;
    items: Testimonial[];
  };
  pricing: {
    label: string;
    title: string;
    subtitle: string;
    packages: Package[];
    otherServicesHeading: string;
    otherServicesSubtitle: string;
    otherServices: {
      title: string;
      description: string;
      features: string[];
      cta: string;
      icon: string;
      color: string;
      waMessage: string;
    }[];
    infoSetup: string;
    infoMaintenance: string;
  };
  valueAdded: {
    label: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    paragraph: string;
    profileRole: string;
    contactTitle: string;
    followTitle: string;
    rights: string;
  };
  processSteps: {
    label: string;
    title: string;
    subtitle: string;
    formCta: string;
    steps: ProcessStep[];
  };
  impactROI: {
    label: string;
    title: string;
    subtitle: string;
    labelProblem?: string;
    labelSolution?: string;
    items: {
      klien: string;
      sebelum: string;
      sesudah: string;
      roi: string;
      roiLabel: string;
      icon: string;
    }[];
  };
  whyChooseUs: {
    label: string;
    title: string;
    subtitle: string;
    items: WhyChooseUsItem[];
  };
}
