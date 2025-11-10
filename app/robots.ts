import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const SITE_URL = "https://fadli.github.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
