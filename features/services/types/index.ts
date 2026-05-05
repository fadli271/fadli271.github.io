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
