import { Metadata, Viewport } from "next";
import { CONTACT_INFO } from "@/lib/contact-info";

export const SITE_URL = "https://fadlidevstudio.my.id";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fadli Dev Studio | Jasa Pembuatan Website & Landing Page UMKM",
    template: "%s | Fadli Dev Studio",
  },
  description:
    "Jasa pembuatan website profesional, landing page konversi tinggi, dan sistem operasional bisnis untuk UMKM. Murah, cepat, dan modern dengan Next.js.",
  authors: [{ name: "Mohamad Fadli", url: SITE_URL }],
  keywords: [
    "Jasa Pembuatan Website",
    "Landing Page UMKM",
    "Website Toko Online",
    "Fadli Dev Studio",
    "Web Developer Indonesia",
    "Jasa Web Murah",
    "Next.js Developer",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  category: "Business & Technology",
  openGraph: {
    title: "Fadli Dev Studio | Solusi Website & Digitalisasi UMKM",
    description:
      "Bangun kehadiran digital bisnis Anda dengan website modern, cepat, dan ramah SEO. Mulai dari Rp 895rb.",
    url: SITE_URL,
    siteName: "Fadli Dev Studio",
    images: [
      {
        url: "/brand.png",
        width: 1200,
        height: 630,
        alt: "Fadli Dev Studio - Solusi Website UMKM",
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
    icon: [{ rel: "icon", url: "/brand.png", type: "image/png" }],
    shortcut: [{ url: "/brand.png", type: "image/png" }],
    apple: [{ url: "/brand.png", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadli_dev",
    title: "Fadli Dev Studio | Website Modern untuk Bisnis Anda",
    description:
      "Jasa pembuatan landing page & sistem web profesional untuk UMKM. Cek estimasi biaya sekarang!",
    images: ["/brand.png"],
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
  copyright: `© ${new Date().getFullYear()} Fadli Dev Studio. All rights reserved.`,
};

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fadli Dev Studio",
    "image": `${SITE_URL}/brand.png`,
    "@id": `${SITE_URL}/#business`,
    "url": SITE_URL,
    "telephone": "+6282189642027",
    "priceRange": "Rp895.000 - Rp7.900.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sigi, Sulawesi Tengah",
      "addressLocality": "Sigi",
      "addressRegion": "Sulawesi Tengah",
      "postalCode": "94364",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.0333,
      "longitude": 119.9333
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      CONTACT_INFO.social.github,
      CONTACT_INFO.social.linkedin
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": SITE_URL,
    "name": "Fadli Dev Studio – Jasa Pembuatan Website UMKM",
    "inLanguage": "id",
    "description": "Portfolio, project showcase, and web services by Mohamad Fadli."
  }
];
