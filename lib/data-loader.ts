import fs from "fs";
import path from "path";

import { Language } from "@/types";
import { Project, PortfolioContent } from "@/features/portfolio/types";
import { ServicesContent } from "@/features/services/types";

const rootDirectory = process.cwd();

export function getJsonData<T>(filePath: string): T | null {
  const fullPath = path.join(rootDirectory, filePath);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

export function getPortfolioData(lang: Language) {
  return getJsonData<any>(`features/portfolio/data/${lang}.json`);
}

export function getProjects(lang: Language): Project[] {
  const data = getPortfolioData(lang);

  return data?.projects || [];
}

export function getSkills(lang: Language = "id") {
  const data = getPortfolioData(lang);

  return data?.skills || [];
}

export function getExperience(lang: Language = "id") {
  const data = getPortfolioData(lang);

  return data?.experience || [];
}

export function getTranslation(lang: Language): PortfolioContent | null {
  return getJsonData<PortfolioContent>(`content/${lang}.json`);
}

export function getServicesData(lang: Language): ServicesContent | null {
  return getJsonData<ServicesContent>(`features/services/data/${lang}.json`);
}
