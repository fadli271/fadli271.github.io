import { Metadata } from "next";
import Script from "next/script";
import React from "react";

import { SITE_URL } from "@/app/content/site-config";

const SERVICES_URL = `${SITE_URL}/services`;

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website UMKM — Landing Page, Toko Online & Sistem Operasional",
  description:
    "Jasa pembuatan website profesional untuk UMKM. Landing page, toko online, sistem operasional mulai Rp 895rb. Teknologi Next.js, SEO friendly, gratis maintenance 3 bulan. Konsultasi gratis via WhatsApp.",
  keywords: [
    "jasa pembuatan website",
    "jasa buat website UMKM",
    "landing page murah",
    "website UMKM",
    "toko online",
    "katalog digital",
    "sistem operasional",
    "web developer Indonesia",
    "jasa website profesional",
    "landing page UMKM",
    "website murah berkualitas",
    "Fadli Dev Studio",
    "Next.js developer",
    "website bisnis",
    "pembuatan website Sulawesi",
    "jasa web Palu",
    "website company profile",
  ],
  alternates: {
    canonical: SERVICES_URL,
    languages: {
      "id-ID": SERVICES_URL,
      "en-US": SERVICES_URL,
    },
  },
  openGraph: {
    title: "Jasa Pembuatan Website UMKM — Mulai Rp 895rb | Fadli Dev Studio",
    description:
      "Website profesional untuk UMKM: landing page, toko online, sistem operasional. Teknologi Next.js, SEO friendly, gratis maintenance 3 bulan.",
    url: SERVICES_URL,
    siteName: "Fadli Dev Studio",
    images: [
      {
        url: "/services/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fadli Dev Studio — Jasa Pembuatan Website UMKM",
      },
    ],
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadli_dev",
    title: "Jasa Pembuatan Website UMKM — Mulai Rp 895rb",
    description:
      "Landing page, toko online, sistem operasional. Next.js, SEO friendly, gratis maintenance 3 bulan.",
    images: ["/services/opengraph-image"],
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
  category: "technology",
};

// --- JSON-LD Structured Data ---

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fadli Dev Studio",
  description:
    "Jasa pembuatan website profesional untuk UMKM. Landing page, toko online, sistem operasional dengan teknologi modern.",
  url: SERVICES_URL,
  logo: `${SITE_URL}/brand.png`,
  image: `${SITE_URL}/services/opengraph-image`,
  telephone: "+6282189642027",
  email: "fadli.dev.studio27@gmail.com",
  founder: {
    "@type": "Person",
    name: "Mohamad Fadli",
    jobTitle: "Founder & Developer",
  },
  sameAs: [
    "https://github.com/fadli271",
    "https://linkedin.com/in/mfadli27a",
    "https://www.instagram.com/fadli.dev.studio/",
  ],
  priceRange: "Rp 895.000 - Rp 7.900.000",
  paymentAccepted: "Bank Transfer",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Layanan Website",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Paket Hemat — Landing Page",
        description:
          "Landing page 1 halaman, desain responsive, integrasi WhatsApp. Selesai dalam 5 hari.",
        price: "895000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: SERVICES_URL,
      },
      {
        "@type": "Offer",
        name: "Paket Starter — Website Profesional",
        description:
          "Website 1-2 halaman, domain & hosting 1 tahun, desain mobile-friendly, integrasi WhatsApp.",
        price: "1490000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: SERVICES_URL,
      },
      {
        "@type": "Offer",
        name: "Paket Growth — Website Bisnis",
        description:
          "Multi halaman, form lead capture, SEO dasar, galeri produk/jasa, prioritas support.",
        price: "3900000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: SERVICES_URL,
      },
      {
        "@type": "Offer",
        name: "Paket Scale — Website Enterprise",
        description:
          "Layout kompleks & custom, integrasi advance, analytics & tracking, keamanan extra.",
        price: "7900000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: SERVICES_URL,
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  name: "Jasa Pembuatan Website UMKM",
  description:
    "Layanan pembuatan website profesional untuk UMKM meliputi landing page, toko online, katalog digital, dan sistem operasional bisnis.",
  provider: {
    "@type": "ProfessionalService",
    name: "Fadli Dev Studio",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "895000",
    highPrice: "7900000",
    priceCurrency: "IDR",
    offerCount: 4,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Digital",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Landing Page",
        description:
          "Satu halaman khusus promosi. Fokus meyakinkan pengunjung untuk membeli atau menghubungi Anda.",
      },
      {
        "@type": "OfferCatalog",
        name: "Toko Online / Katalog",
        description:
          "Pelanggan lihat produk dan pesan via WhatsApp otomatis tanpa install aplikasi.",
      },
      {
        "@type": "OfferCatalog",
        name: "Sistem Operasional",
        description:
          "Aplikasi untuk merapikan data kantor. Stok barang, absen karyawan, laporan keuangan.",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama proses pembuatan website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rata-rata 7-14 hari kerja tergantung kompleksitas fitur yang Anda butuhkan. Untuk landing page sederhana bisa selesai dalam 3-5 hari.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa biaya perpanjangan domain & hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sangat terjangkau. Mulai dari Rp 500rb/tahun, sudah termasuk dukungan teknis ringan dan pembaruan keamanan (Security Updates).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah saya pemilik sah website saya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, 100%. Data, domain, dan konten sepenuhnya milik Anda. Kami hanya membantu mengelolanya secara teknis. Anda akan mendapatkan akses penuh jika diinginkan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika saya ingin mengubah isi website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami menyediakan video tutorial mudah (tanpa perlu coding) sehingga Anda bisa edit sendiri. Atau jika sibuk, Anda bisa menggunakan jasa update konten kami.",
      },
    },
    {
      "@type": "Question",
      name: "Kalau ada error teknis gimana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tenang, semua paket sudah termasuk garansi maintenance. Jika website down atau error sistem, kami perbaiki gratis selama masa garansi/langganan aktif.",
      },
    },
    {
      "@type": "Question",
      name: "Pembayarannya bagaimana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DP 50% di awal untuk memulai pengerjaan. Pelunasan 50% sisanya dilakukan setelah website jadi dan Anda puas dengan hasilnya, sebelum serah terima akses penuh.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan & Harga",
      item: SERVICES_URL,
    },
  ],
};

const structuredDataServices = [
  localBusiness,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataServices),
        }}
        id="json-ld-services"
        type="application/ld+json"
      />
      {children}
    </>
  );
}
