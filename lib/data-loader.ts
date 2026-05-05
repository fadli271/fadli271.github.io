import fs from "fs";
import path from "path";

import { Project } from "@/features/portfolio/types";
import { Language } from "@/types";

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

export function getTranslation(lang: Language) {
  return getJsonData<any>(`content/translations/${lang}.json`);
}

export function getServicesData(lang: Language) {
  return getJsonData<any>(`features/services/data/${lang}.json`);
}
