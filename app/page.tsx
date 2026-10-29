import { Metadata } from "next";

import { PortfolioView } from "@/features/portfolio/components/PortfolioView";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await searchParams;
  const isEn = langParam === "en";

  const title = isEn
    ? "Mohamad Fadli | Full-Stack Software Engineer & Web Developer Portfolio"
    : "Mohamad Fadli | Full-Stack Software Engineer & Portfolio Web Developer";

  const description = isEn
    ? "Portfolio of Mohamad Fadli, a full-stack software engineer specializing in Next.js, React, TypeScript, and modern web applications for business operations."
    : "Portfolio resmi Mohamad Fadli, full-stack software engineer berspesialisasi dalam Next.js, React, TypeScript, dan digitalisasi sistem web bisnis.";

  return {
    title,
    description,
    alternates: {
      canonical: isEn ? `${SITE_URL}?lang=en` : SITE_URL,
      languages: {
        "id-ID": SITE_URL,
        "en-US": `${SITE_URL}?lang=en`,
      },
    },
    openGraph: {
      title,
      description,
      url: isEn ? `${SITE_URL}?lang=en` : SITE_URL,
      siteName: "Fadli Dev Studio",
      locale: isEn ? "en_US" : "id_ID",
      type: "profile",
      images: [
        {
          url: "/brand.png",
          width: 1200,
          height: 630,
          alt: "Mohamad Fadli — Full-Stack Software Engineer",
        },
      ],
    },
  };
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang: langParam } = await searchParams;
  const lang = langParam === "en" ? "en" : "id";

  return (
    <main>
      <PortfolioView lang={lang} />
    </main>
  );
}
