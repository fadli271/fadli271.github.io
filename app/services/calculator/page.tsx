import { Metadata } from "next";

import { CalculatorView } from "@/features/services/components/CalculatorView";
import { getServicesData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "Kalkulator Estimasi Biaya Website & Landing Page",
  description:
    "Hitung perkiraan biaya pembuatan website Anda secara transparan. Sesuaikan fitur, jumlah halaman, dan layanan maintenance sesuai budget bisnis Anda.",
  keywords: [
    "kalkulator biaya website",
    "estimasi harga landing page",
    "biaya pembuatan web umkm",
    "jasa website murah",
  ],
  openGraph: {
    title: "Web Price Calculator | Fadli Dev Studio",
    description:
      "Dapatkan estimasi biaya transparan untuk proyek digital bisnis Anda dalam hitungan detik.",
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
