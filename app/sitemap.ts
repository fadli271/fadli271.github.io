import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site-config";

export const dynamic = "force-static";
export const revalidate = 86400; // Update daily

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          id: SITE_URL,
          en: `${SITE_URL}?lang=en`,
        },
      },
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          id: `${SITE_URL}/services`,
          en: `${SITE_URL}/services`,
        },
      },
    },
    {
      url: `${SITE_URL}/services/calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return routes;
}
