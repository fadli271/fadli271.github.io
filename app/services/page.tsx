import { ServicesView } from "@/features/services/components/ServicesView";
import { getServicesData } from "@/lib/data-loader";

export default function ServiceLandingPage() {
  const idData = getServicesData("id");
  const enData = getServicesData("en");

  return <ServicesView initialData={{ id: idData, en: enData }} />;
}
