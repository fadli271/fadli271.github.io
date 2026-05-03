import fs from "fs";
import path from "path";

import { Project } from "@/features/portfolio/types";

const rootDirectory = process.cwd();

export function getJsonData<T>(filePath: string): T | null {
  const fullPath = path.join(rootDirectory, filePath);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

export function getPortfolioData(lang: string) {
  return getJsonData<any>(`features/portfolio/data/${lang}.json`);
}

export function getProjects(lang: string): Project[] {
  const data = getPortfolioData(lang);

  return data?.projects || [];
}

export function getSkills(lang: string = "id") {
  const data = getPortfolioData(lang);

  return data?.skills || [];
}

export function getExperience(lang: string = "id") {
  const data = getPortfolioData(lang);

  return data?.experience || [];
}

export function getTranslation(lang: string) {
  return getJsonData<any>(`content/translations/${lang}.json`);
}

export function getServicesData(lang: string) {
  return getJsonData<any>(`features/services/data/${lang}.json`);
}
