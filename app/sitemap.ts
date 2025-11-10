import { MetadataRoute } from "next";

const SITE_URL = "https://fadli.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries = ["", "/catalog"];
  const lastModified = new Date();

  return baseEntries.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
