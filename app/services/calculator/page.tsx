import { Metadata } from "next";

import { CalculatorView } from "@/features/services/components/CalculatorView";
import { getServicesData } from "@/lib/data-loader";
import { SITE_URL } from "@/lib/site-config";

const CALCULATOR_URL = `${SITE_URL}/services/calculator`;

export const metadata: Metadata = {
  title: "Kalkulator Estimasi Biaya Pembuatan Website & Landing Page UMKM",
  description:
    "Hitung perkiraan biaya pembuatan website dan landing page bisnis secara transparan. Sesuaikan paket, fitur kustom, halaman, dan maintenance gratis sesuai budget Anda.",
  keywords: [
    "kalkulator biaya website",
    "estimasi harga landing page",
    "biaya pembuatan web umkm",
    "kalkulator harga website indonesia",
    "jasa website murah transparan",
    "simulasi harga web development",
    "biaya pembuatan toko online whatsapp",
    "Fadli Dev Studio kalkulator",
  ],
  alternates: {
    canonical: CALCULATOR_URL,
  },
  openGraph: {
    title: "Kalkulator Estimasi Biaya Website | Fadli Dev Studio",
    description:
      "Dapatkan estimasi biaya transparan untuk proyek digital bisnis Anda dalam hitungan detik. Tanpa biaya tersembunyi.",
    url: CALCULATOR_URL,
    siteName: "Fadli Dev Studio",
    images: [
      {
        url: "/brand.webp",
        width: 1200,
        height: 630,
        alt: "Kalkulator Estimasi Biaya Website Fadli Dev Studio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadli_dev",
    title: "Kalkulator Estimasi Biaya Website & Landing Page",
    description:
      "Hitung estimasi biaya pembuatan website UMKM Anda sekarang secara transparan.",
    images: ["/brand.webp"],
  },
};

export default function PricingCalculatorPage() {
  const t = getServicesData("id");

  if (!t) {
    throw new Error("Required services data not found");
  }

  const packages = t.pricing.packages;

  return <CalculatorView packages={packages} />;
}
