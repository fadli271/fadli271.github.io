import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getFileData(folder: string, fileName: string) {
  const fullPath = path.join(contentDirectory, folder, fileName);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getAllFilesData(folder: string) {
  const folderPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(folderPath)) {
    console.warn(`Folder not found: ${folderPath}`);
    return [];
  }
  const fileNames = fs.readdirSync(folderPath);
  const allData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const { data, content } = getFileData(folder, fileName)!;
      return {
        slug: fileName.replace(/\.md$/, ''),
        ...data,
        content,
      };
    });
  return allData;
}
