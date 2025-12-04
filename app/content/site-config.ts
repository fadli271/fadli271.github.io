import { Metadata, Viewport } from "next";

import { CONTACT_INFO } from "@/lib/contact-info";

export const SITE_URL = "https://fadli271.github.io";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohamad Fadli – Software Engineer",
    template: "%s | Mohamad Fadli",
  },
  description:
    "Portfolio & Projects of Mohamad Fadli — software engineer with experience in modern web and AI integration.",
  authors: [{ name: "Mohamad Fadli", url: "https://fadli271.github.io" }],
  keywords: ["Fadli", "Software Engineer", "Web Developer", "AI", "Portfolio"],
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  openGraph: {
    title: "Mohamad Fadli – Software Engineer",
    description:
      "Showcasing work in AI, logistics tech, and modern web development.",
    url: "https://fadli271.github.io",
    siteName: "Mohamad Fadli",
    images: [
      {
        url: "/my-profile.JPG",
        width: 1200,
        height: 630,
        alt: "Mohamad Fadli Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ rel: "icon", url: "/favicon.png", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadli_dev",
    title: "Mohamad Fadli – Software Engineer",
    description:
      "Discover Mohamad Fadli’s work in AI, logistics tech, and modern web development.",
    images: ["/my-profile.JPG"],
  },
  manifest: "/site.webmanifest",
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const footerConfig = {
  copyright: "© 2025 Mohamad Fadli. All rights reserved.",
};

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamad Fadli",
    url: SITE_URL,
    sameAs: [CONTACT_INFO.social.github, CONTACT_INFO.social.linkedin],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Fadli Dev Studio",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Mohamad Fadli – Software Engineer",
    inLanguage: "id",
    description:
      "Portfolio, project showcase, and web services by Mohamad Fadli.",
  },
];
