import fs from "fs";
import path from "path";

import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getFileData(folder: string, fileName: string) {
  const fullPath = path.join(contentDirectory, folder, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
}

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

export function getAllFilesData(folder: string): Project[] {
  const folderPath = path.join(contentDirectory, folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(folderPath);
  const allData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const file = getFileData(folder, fileName);

      if (!file) return null;

      const { data, content } = file;

      return {
        slug: fileName.replace(/\.md$/, ""),
        ...(data as any),
        content,
      } as Project;
    })
    .filter((p): p is Project => p !== null);

  return allData;
}

export function getProjects(lang: string): Project[] {
  return getAllFilesData(`projects/${lang}`);
}

export function getTranslation(lang: string) {
  const fullPath = path.join(contentDirectory, "translations", `${lang}.json`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

export function getSkills() {
  const fullPath = path.join(contentDirectory, "skills.json");

  if (!fs.existsSync(fullPath)) return [];

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

export function getExperience() {
  const fullPath = path.join(contentDirectory, "experience.json");

  if (!fs.existsSync(fullPath)) return [];

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}
