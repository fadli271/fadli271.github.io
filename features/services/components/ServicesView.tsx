"use client";

import Script from "next/script";

// Feature Components
import { ServicesContent } from "../types";
import { useServicesState } from "../hooks/use-services-state";

import dynamic from "next/dynamic";

// Feature Components
import { ServicesNavbar } from "./ServicesNavbar";
import { ServicesHero } from "./ServicesHero";

// Lazy Loaded Sections
const WhyChooseUs = dynamic(() =>
  import("./WhyChooseUs").then((mod) => mod.WhyChooseUs),
);
const ProcessSteps = dynamic(() =>
  import("./ProcessSteps").then((mod) => mod.ProcessSteps),
);
const PromoBanner = dynamic(() =>
  import("./PromoBanner").then((mod) => mod.PromoBanner),
);
const ServicesList = dynamic(() =>
  import("./ServicesList").then((mod) => mod.ServicesList),
);
const PortfolioGrid = dynamic(() =>
  import("./PortfolioGrid").then((mod) => mod.PortfolioGrid),
);
const TestimonialsMarquee = dynamic(() =>
  import("./TestimonialsMarquee").then((mod) => mod.TestimonialsMarquee),
);
const ImpactROI = dynamic(() =>
  import("./ImpactROI").then((mod) => mod.ImpactROI),
);
const PricingTable = dynamic(() =>
  import("./PricingTable").then((mod) => mod.PricingTable),
);
const StandardFeatures = dynamic(() =>
  import("./StandardFeatures").then((mod) => mod.StandardFeatures),
);
const FAQSection = dynamic(() =>
  import("./FAQSection").then((mod) => mod.FAQSection),
);
const FinalCTA = dynamic(() =>
  import("./FinalCTA").then((mod) => mod.FinalCTA),
);
const ServicesFooter = dynamic(() =>
  import("./ServicesFooter").then((mod) => mod.ServicesFooter),
);

import FloatingWaButton from "@/components/shared/floating-wa-button";

interface ServicesViewProps {
  initialData: {
    id: ServicesContent;
    en: ServicesContent;
  };
}

export function ServicesView({ initialData }: ServicesViewProps) {
  const {
    activeCategory,
    setActiveCategory,
    activeSection,
    darkMode,
    lang,
    setLang,
    scaleX,
    toggleDarkMode,
    t,
  } = useServicesState(initialData);

  const navLabels: Record<string, string> = {
    "#intro": t.nav.navIntro ?? "Intro",
    "#keunggulan": t.nav.navWhyUs ?? "Kenapa Kami?",
    "#layanan": t.nav.navServices ?? "Layanan",
    "#portfolio": t.nav.navPortfolio ?? "Portofolio",
    "#testimoni": t.nav.navClients ?? "Klien",
    "#harga": t.nav.navPricing ?? "Harga",
    "/services/calculator": "Kalkulator",
    "#faq-section": t.nav.navFaq ?? "FAQ",
  };

  const heroTrustBadgesList = (t.trustBadges || []).slice(0, 3);

  const portfolioCategoryOptions = Object.values(t.portfolio.categories).map(
    (label: string) => ({
      value: label,
      label: label,
    }),
  );

  const portfolioWithIndex = (t.portfolio?.items || []).map((project, idx) => ({
    project,
    idx,
  }));

  const filteredPortfolio =
    activeCategory === t.portfolio.categories.all
      ? portfolioWithIndex
      : portfolioWithIndex.filter(
          ({ project }) => project.category === activeCategory,
        );

  const footerRightsText = (
    t.footer.rights ?? "Fadli Dev Studio. All rights reserved."
  ).replace(/^©\s*/, "");

  // --- SEO Structured Data ---
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: (t.faq?.items || []).map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ProfessionalService",
        name: "Fadli Dev Studio",
        image: "https://fadlidevstudio.my.id/brand.webp",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: (t.testimonials?.items || []).length.toString(),
        },
        review: (t.testimonials?.items || []).slice(0, 5).map((testi) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: testi.authorName,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: testi.rating.toString(),
            bestRating: "5",
          },
          reviewBody: testi.quote,
        })),
      },
    ],
  };

  return (
    <div className="bg-[#f8fafc] text-[#334155] relative dark:bg-gray-950 dark:text-gray-300">
      <Script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        id="structured-data"
        type="application/ld+json"
      />

      <ServicesNavbar
        activeSection={activeSection}
        darkMode={darkMode}
        lang={lang}
        navLabels={navLabels}
        navLinks={[
          { href: "#intro", label: t.nav.navIntro },
          { href: "#keunggulan", label: t.nav.navWhyUs },
          { href: "#layanan", label: t.nav.navServices },
          { href: "#portfolio", label: t.nav.navPortfolio },
          { href: "#testimoni", label: t.nav.navClients },
          { href: "#harga", label: t.nav.navPricing },
          { href: "#faq-section", label: t.nav.navFaq },
        ]}
        scaleX={scaleX}
        setLang={setLang}
        toggleDarkMode={toggleDarkMode}
        waLink={`https://wa.me/6282189642027?text=${encodeURIComponent(t.hero.waMessage)}`}
      />

      <main aria-label="Layanan Fadli Dev Studio">
        <ServicesHero
          heroTrustBadgesList={heroTrustBadgesList}
          lang={lang}
          t={t}
          waLink={`https://wa.me/6282189642027?text=${encodeURIComponent(t.hero?.waMessage || "")}`}
        />
        <WhyChooseUs items={t.whyUs.items} t={t} />
        <ProcessSteps items={t.processSteps.steps} t={t} />
        <PromoBanner t={t} />
        <ServicesList items={t.services?.items || []} t={t} />
        <PortfolioGrid
          activeCategory={activeCategory}
          filteredPortfolio={filteredPortfolio}
          portfolioCategoryOptions={portfolioCategoryOptions}
          setActiveCategory={setActiveCategory}
          t={t}
        />
        <TestimonialsMarquee t={t} />
        <ImpactROI lang={lang} t={t} />
        <PricingTable t={t} />
        <StandardFeatures t={t} />
        <FAQSection t={t} />
        <FinalCTA t={t} />
      </main>

      <ServicesFooter footerRightsText={footerRightsText} t={t} />
      <FloatingWaButton />
    </div>
  );
}
