"use client";

import { useScroll, useSpring } from "framer-motion";
import Script from "next/script";
import { useState, useEffect, useCallback } from "react";

interface ServicesViewProps {
  initialData: {
    id: any;
    en: any;
  };
}

// Shared Components

// Feature Components
import { ServicesNavbar } from "./ServicesNavbar";
import { ServicesHero } from "./ServicesHero";
import { WhyChooseUs } from "./WhyChooseUs";
import { ProcessSteps } from "./ProcessSteps";
import { PromoBanner } from "./PromoBanner";
import { ServicesList } from "./ServicesList";
import { PortfolioGrid } from "./PortfolioGrid";
import { TestimonialsMarquee } from "./TestimonialsMarquee";
import { ImpactROI } from "./ImpactROI";
import { PricingTable } from "./PricingTable";
import { StandardFeatures } from "./StandardFeatures";
import { FAQSection } from "./FAQSection";
import { FinalCTA } from "./FinalCTA";
import { ServicesFooter } from "./ServicesFooter";

import FloatingWaButton from "@/components/shared/floating-wa-button";

export function ServicesView({ initialData }: ServicesViewProps) {
  // --- States ---
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"id" | "en">("id");

  // --- Scroll Progress ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // --- Effects ---
  useEffect(() => {
    const navLinks = [
      { href: "#intro" },
      { href: "#keunggulan" },
      { href: "#layanan" },
      { href: "#portfolio" },
      { href: "#testimoni" },
      { href: "#harga" },
      { href: "#faq-section" },
    ];
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((v) => {
      document.documentElement.classList.toggle("dark", !v);

      return !v;
    });
  }, []);

  // --- Calculations & Translations ---
  const t = initialData[lang] || {};

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

  const portfolioCategoryOptions = (t.portfolio?.categories || []).map(
    (cat: string) => ({
      value: cat,
      label: cat,
    }),
  );

  const portfolioWithIndex = (t.portfolio?.items || []).map(
    (project: any, idx: number) => ({
      project,
      idx,
    }),
  );
  const filteredPortfolio =
    activeCategory === "Semua"
      ? portfolioWithIndex
      : portfolioWithIndex.filter(
          ({ project }: any) => project.category === activeCategory,
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
        mainEntity: (t.faq?.items || []).map((faq: any) => ({
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
        image: "https://fadlidevstudio.my.id/brand.png",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: (t.testimonials?.items || []).length.toString(),
        },
        review: (t.testimonials?.items || []).slice(0, 5).map((testi: any) => ({
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
        <WhyChooseUs items={t.whyChooseUs?.items || []} t={t} />
        <ProcessSteps items={t.processSteps?.items || []} t={t} />
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
        <ImpactROI t={t} />
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
