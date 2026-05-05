import { SVGProps, ReactNode } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Language = "id" | "en";

export type Theme = "light" | "dark";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

export type BaseProps = ChildrenProps & ClassNameProps;

export interface ContactInfo {
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  email: string;
  address: {
    locality: string;
    region: string;
    country: string;
    postalCode: string;
  };
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}
