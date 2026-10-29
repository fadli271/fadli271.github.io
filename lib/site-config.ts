import { Metadata, Viewport } from "next";

import { CONTACT_INFO } from "@/lib/contact-info";

export const SITE_URL = "https://fadlidevstudio.my.id";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fadli Dev Studio | Jasa Pembuatan Website & Full-Stack Developer",
    template: "%s | Fadli Dev Studio",
  },
  description:
    "Jasa pembuatan website profesional, landing page konversi tinggi, toko online WhatsApp, dan sistem web kustom untuk UMKM & bisnis. Cepat, modern, bergaransi maintenance, dan teroptimasi SEO & AI Search.",
  authors: [{ name: "Mohamad Fadli", url: SITE_URL }],
  creator: "Mohamad Fadli",
  publisher: "Fadli Dev Studio",
  keywords: [
    "Jasa Pembuatan Website",
    "Jasa Pembuatan Landing Page",
    "Website UMKM Indonesia",
    "Website Toko Online WhatsApp",
    "Jasa Website Jakarta",
    "Jasa Website Jabodetabek",
    "Fullstack Developer Indonesia",
    "Next.js Developer Indonesia",
    "React Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Sistem Kasir POS Web",
    "Aplikasi Web Custom",
    "Web Developer Portfolio",
    "Mohamad Fadli",
    "Fadli Dev Studio",
    "SEO Optimization",
    "AI Search Optimization",
    "Generative Engine Optimization (GEO)",
    "Jasa Web Murah Berkualitas",
    "Digitalisasi UMKM",
    "Software Engineer Indonesia",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
      "en-US": `${SITE_URL}?lang=en`,
    },
  },
  category: "Business & Technology",
  openGraph: {
    title: "Fadli Dev Studio | Jasa Pembuatan Website & Digitalisasi UMKM",
    description:
      "Bangun kehadiran digital bisnis Anda dengan website modern, cepat, bergaransi maintenance, dan ramah SEO & AI Search. Mulai dari Rp 895rb.",
    url: SITE_URL,
    siteName: "Fadli Dev Studio",
    images: [
      {
        url: "/brand.webp",
        width: 1200,
        height: 630,
        alt: "Fadli Dev Studio - Solusi Website & Digitalisasi UMKM",
      },
    ],
    locale: "id_ID",
    alternateLocale: ["en_US"],
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
    icon: [{ rel: "icon", url: "/brand.webp", type: "image/webp" }],
    shortcut: [{ url: "/brand.webp", type: "image/webp" }],
    apple: [{ url: "/brand.webp", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadli_dev",
    title: "Fadli Dev Studio | Jasa Pembuatan Website & Solusi Digital",
    description:
      "Website modern untuk bisnis & UMKM. Landing page, toko online, dan sistem custom dengan performa tinggi.",
    images: ["/brand.webp"],
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
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Mohamad Fadli",
    alternateName: ["Fadli", "fadli271"],
    jobTitle: "Full-Stack Software Engineer & Web Consultant",
    description:
      "Full-stack software engineer dan pendiri Fadli Dev Studio, berspesialisasi dalam ekosistem Next.js, React, TypeScript, dan digitalisasi sistem bisnis UMKM.",
    url: SITE_URL,
    image: `${SITE_URL}/images/profile/my-profile.JPG`,
    email: CONTACT_INFO.email,
    telephone: `+${CONTACT_INFO.whatsapp.number}`,
    sameAs: [
      CONTACT_INFO.social.github,
      CONTACT_INFO.social.linkedin,
      CONTACT_INFO.social.instagram,
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Full-Stack Web Development",
      "RESTful API Architecture",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Point of Sale (POS) Software",
      "Enterprise Resource Planning (ERP)",
      "Business Automation",
      "UI/UX Design",
    ],
    knowsLanguage: ["id", "en"],
    worksFor: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Fadli Dev Studio",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: "Fadli Dev Studio",
    alternateName: "Fadli Dev",
    image: `${SITE_URL}/brand.webp`,
    logo: `${SITE_URL}/brand.webp`,
    url: SITE_URL,
    telephone: `+${CONTACT_INFO.whatsapp.number}`,
    email: CONTACT_INFO.email,
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
    },
    priceRange: "Rp895.000 - Rp7.900.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Bank Transfer, QRIS",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jakarta Barat, Jakarta",
      addressLocality: CONTACT_INFO.address.locality,
      addressRegion: CONTACT_INFO.address.region,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.1683,
      longitude: 106.7583,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    sameAs: [
      CONTACT_INFO.social.github,
      CONTACT_INFO.social.linkedin,
      CONTACT_INFO.social.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Pengembangan Website & Sistem",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Jasa Pembuatan Landing Page",
          description:
            "Landing page 1 halaman konversi tinggi, integrasi WhatsApp, responsive, dan SEO-ready.",
          price: "895000",
          priceCurrency: "IDR",
          url: `${SITE_URL}/services`,
        },
        {
          "@type": "Offer",
          name: "Jasa Pembuatan Website Profesional & Toko Online",
          description:
            "Website multi-halaman untuk company profile atau katalog produk dengan pemesanan langsung ke WhatsApp.",
          price: "1490000",
          priceCurrency: "IDR",
          url: `${SITE_URL}/services`,
        },
        {
          "@type": "Offer",
          name: "Pengembangan Sistem Operasional & Aplikasi Bisnis Custom",
          description:
            "Aplikasi web custom untuk operasional bisnis, inventory, kasir POS, dan pelaporan internal.",
          price: "3900000",
          priceCurrency: "IDR",
          url: `${SITE_URL}/services`,
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Fadli Dev Studio | Jasa Pembuatan Website & Portfolio",
    inLanguage: ["id-ID", "en-US"],
    description:
      "Website resmi Fadli Dev Studio dan portfolio rekayasa perangkat lunak Mohamad Fadli. Layanan pembuatan website modern, cepat, dan terjangkau untuk UMKM.",
    publisher: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
    },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
    },
  },
];
