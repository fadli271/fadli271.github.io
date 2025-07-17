import AddonsCatalog from "@/components/catalog/add-on-catalog";
import FAQCatalog from "@/components/catalog/faq-catalog";
import HeroCatalog from "@/components/catalog/hero-catalog";
import PackageCatalogue from "@/components/catalog/package-catalog";
import PaymentCatalog from "@/components/catalog/payment-catalog";
import PromoCatalog from "@/components/catalog/promo-catalog";

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
