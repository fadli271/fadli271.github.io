import { Suspense } from "react";
import { Metadata } from "next";

import { PortfolioView } from "@/features/portfolio/components/PortfolioView";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Mohamad Fadli | Full-Stack Software Engineer & Portfolio Web Developer",
  description:
    "Portfolio resmi Mohamad Fadli, full-stack software engineer berspesialisasi dalam Next.js, React, TypeScript, dan digitalisasi sistem web bisnis.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
      "en-US": `${SITE_URL}?lang=en`,
    },
  },
  openGraph: {
    title: "Mohamad Fadli | Full-Stack Software Engineer & Portfolio",
    description:
      "Portfolio resmi Mohamad Fadli, full-stack software engineer berspesialisasi dalam Next.js, React, TypeScript, dan digitalisasi sistem web bisnis.",
    url: SITE_URL,
    siteName: "Fadli Dev Studio",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "profile",
    images: [
      {
        url: "/brand.webp",
        width: 1200,
        height: 630,
        alt: "Mohamad Fadli — Full-Stack Software Engineer",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={null}>
        <PortfolioView />
      </Suspense>
    </main>
  );
}
