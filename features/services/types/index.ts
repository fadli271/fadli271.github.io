export interface NavLink {
  label: string;
  href: string;
}

export interface WhyChooseUsItem {
  iconName: string;
  iconBgClass: string;
  iconHoverBgClass: string;
  iconTextClass: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  iconName: string;
  iconColor: string;
  numberBg: string;
  blurBg: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  iconName: string;
  iconBgClass: string;
  title: string;
  description: string;
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

export interface StandardFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type Lang = "id" | "en";
