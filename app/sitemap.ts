import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400; // Update daily

const SITE_URL = "https://fadlidevstudio.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const routes = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap;

  return routes;
}
