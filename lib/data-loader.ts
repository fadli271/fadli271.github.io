import idPortfolio from "../features/portfolio/data/id.json";
import enPortfolio from "../features/portfolio/data/en.json";
import idContent from "../content/id.json";
import enContent from "../content/en.json";
import idServices from "../features/services/data/id.json";
import enServices from "../features/services/data/en.json";

import { Language } from "@/types";
import { Project, PortfolioContent } from "@/features/portfolio/types";
import { ServicesContent } from "@/features/services/types";

export function getPortfolioData(lang: Language) {
  return lang === "en" ? enPortfolio : idPortfolio;
}

export function getProjects(lang: Language): Project[] {
  const data = getPortfolioData(lang);
  return (data as any)?.projects || [];
}

export function getSkills(lang: Language = "id") {
  const data = getPortfolioData(lang);
  return (data as any)?.skills || [];
}

export function getExperience(lang: Language = "id") {
  const data = getPortfolioData(lang);
  return (data as any)?.experience || [];
}

export function getTranslation(lang: Language): PortfolioContent | null {
  return lang === "en" ? (enContent as any) : (idContent as any);
}

export function getServicesData(lang: Language): ServicesContent | null {
  return lang === "en" ? (enServices as any) : (idServices as any);
}

