import { PortfolioView } from "@/features/portfolio/components/PortfolioView";

export const runtime = "edge";

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
