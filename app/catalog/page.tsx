import type { Metadata } from "next";

import AddonsCatalog from "@/components/sections/catalog/add-on-catalog";
import FAQCatalog from "@/components/sections/catalog/faq-catalog";
import HeroCatalog from "@/components/sections/catalog/hero-catalog";
import PackageCatalogue from "@/components/sections/catalog/package-catalog";
import PaymentCatalog from "@/components/sections/catalog/payment-catalog";
import PromoCatalog from "@/components/sections/catalog/promo-catalog";

export const metadata: Metadata = {
  title: "Katalog Layanan Digital | Mohamad Fadli",
  description:
    "Paket website UMKM, add-on, skema pembayaran, dan FAQ untuk berkolaborasi dengan Mohamad Fadli.",
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: "Katalog Layanan Digital | Mohamad Fadli",
    description:
      "Pilih paket website, add-on, hingga solusi kustom yang sesuai kebutuhan bisnismu.",
    url: "https://fadli.github.io/catalog",
    images: [
      {
        url: "/myProfile.png",
        width: 1200,
        height: 630,
        alt: "Katalog layanan Mohamad Fadli",
      },
    ],
  },
};

export default function CatalogPage() {
  return (
    <>
      <HeroCatalog />
      <PromoCatalog />
      <PackageCatalogue />
      <AddonsCatalog />
      <PaymentCatalog />
      <FAQCatalog />
    </>
  );
}
