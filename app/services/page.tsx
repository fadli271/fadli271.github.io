"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

import {
  waLinks,
  serviceNavLinks,
  trustBadges,
  whyChooseUs,
  processSteps,
  promoBanner,
  services,
  portfolioItems,
  portfolioCategories,
  testimonials,
  packages,
  standardFeatures,
  faqs,
  translations,
} from "@/app/content/services";

import FloatingWaButton from "@/components/floating-wa-button";

const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

function MaterialIcon({
  name,
  className = "",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

const viewportOnce = { once: true, amount: 0.2 };

function SlideLeft({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={viewportOnce}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={viewportOnce}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

function ScaleIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={viewportOnce}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default function ServiceLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"id" | "en">("id");
  const t = translations[lang];

  const navLabels: Record<string, string> = {
    "#intro": t.navIntro ?? "Intro",
    "#keunggulan": t.navWhyUs ?? "Kenapa Kami?",
    "#layanan": t.navServices ?? "Layanan",
    "#portfolio": t.navPortfolio ?? "Portofolio",
    "#testimoni": t.navClients ?? "Klien",
    "#harga": t.navPricing ?? "Harga",
    "#faq-section": t.navFaq ?? "FAQ",
  };

  const heroTrustBadgesList = [
    t.trustBadge1 ?? trustBadges[0],
    t.trustBadge2 ?? trustBadges[1],
    t.trustBadge3 ?? trustBadges[2],
  ];

  const portfolioCategoryOptions = portfolioCategories.map((cat, idx) => ({
    value: cat,
    label: t.portfolioCategories?.[idx] ?? cat,
  }));

  const portfolioWithIndex = portfolioItems.map((project, idx) => ({ project, idx }));
  const filteredPortfolio =
    activeCategory === "Semua"
      ? portfolioWithIndex
      : portfolioWithIndex.filter(({ project }) => project.category === activeCategory);

  const whyChooseUsTranslations = t.whyChooseUsItems ?? [];
  const processStepTranslations = t.processSteps ?? [];
  const serviceTranslations = t.servicesList ?? [];
  const portfolioTranslations = t.portfolioItems ?? [];
  const otherServicesTranslations = t.otherServicesList ?? [];
  const standardFeatureTranslations = t.standardFeaturesList ?? [];
  const faqTranslations = t.faqList ?? [];

  const translatedPackages = packages.map((pkg, idx) => {
    const translation = t.packagesList?.[idx];
    const includes = pkg.includes.map((item, includeIdx) => ({
      ...item,
      text: translation?.includes?.[includeIdx] ?? item.text,
    }));
    return {
      ...pkg,
      label: translation?.label ?? pkg.label,
      fit: translation?.fit ?? pkg.fit,
      includes,
    };
  });

  const otherServiceCards = [
    {
      iconName: "shopping_cart",
      iconBg: "bg-blue-50",
      translation: otherServicesTranslations[0],
      waLink: waLinks.tokoOnline,
    },
    {
      iconName: "inventory_2",
      iconBg: "bg-purple-50",
      translation: otherServicesTranslations[1],
      waLink: waLinks.sistemOperasional,
    },
    {
      iconName: "phone_android",
      iconBg: "bg-green-50",
      translation: otherServicesTranslations[2],
      waLink: waLinks.mobileApps,
    },
  ];

  const footerRightsText = (t.footerRights ?? "Fadli Dev Studio. All rights reserved.").replace(
    /^©\s*/,
    "",
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll spy: track which section is in view
  useEffect(() => {
    const sectionIds = serviceNavLinks.map((l) => l.href.replace("#", ""));
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

  // Dark mode toggle
  const toggleDarkMode = useCallback(() => {
    setDarkMode((v) => {
      document.documentElement.classList.toggle("dark", !v);
      return !v;
    });
  }, []);

  // Splash screen
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const [typedText, setTypedText] = useState("");
  const splashBrandName = "Fadli Dev Studio";

  useEffect(() => {
    if (!showSplash) return;
    let i = 0;
    const typeTimer = setInterval(() => {
      i++;
      setTypedText(splashBrandName.slice(0, i));
      if (i >= splashBrandName.length) {
        clearInterval(typeTimer);
        setTimeout(() => setSplashFading(true), 600);
        setTimeout(() => setShowSplash(false), 1200);
      }
    }, 80);
    return () => clearInterval(typeTimer);
  }, [showSplash]);

  return (
    <div className="bg-[#f8fafc] text-[#334155] relative dark:bg-gray-950 dark:text-gray-300">
      {/* ── Splash Screen ── */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950 transition-all duration-600 ${
            splashFading ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <Image
              alt="Fadli Dev Studio"
              className="w-20 h-20 rounded-2xl shadow-2xl shadow-sky-500/20 ring-1 ring-white/10 animate-[splash-logo_0.6s_ease-out_both]"
              height={80}
              src="/brand.png"
              width={80}
              priority
            />
            <div className="mt-6 h-8 flex items-center">
              <span className="text-2xl font-bold text-white tracking-tight">
                {typedText}
              </span>
              <span className="w-[2px] h-6 bg-sky-400 ml-0.5 animate-[cursor-blink_0.8s_steps(1)_infinite]" />
            </div>
            <div className="mt-4 w-12 h-0.5 rounded-full bg-sky-500/50 animate-[splash-bar_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      )}
      {/* ── Navbar ── */}
      <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg shadow-black/[0.04] transition-all duration-300 dark:bg-gray-900/95 dark:border-gray-800">
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 origin-left z-50"
          style={{ scaleX }}
        />
        <div className={containerClass}>
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link className="flex items-center gap-3 group" href="/">
                <Image
                  alt="Fadli Dev Studio"
                  className="h-12 w-12 rounded-xl object-contain shadow-md shadow-sky-500/20 ring-1 ring-gray-100"
                  height={48}
                  src="/brand.png"
                  width={48}
                />
                <span className="text-xl font-bold text-gray-900 tracking-tight dark:text-white">
                  Fadli Dev Studio
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {serviceNavLinks.map((link) => (
                <a
                  key={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    activeSection === link.href
                      ? "text-sky-500"
                      : "text-gray-600 hover:text-sky-500 dark:text-gray-300"
                  }`}
                  href={link.href}
                >
                  {navLabels[link.href] ?? link.label}
                  {activeSection === link.href && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              {/* Dark mode toggle */}
              <button
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                <MaterialIcon name={darkMode ? "light_mode" : "dark_mode"} className="text-lg" />
              </button>
              {/* Language toggle */}
              <button
                className="px-2.5 py-1 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-700 hover:border-sky-500 hover:text-sky-500 transition-colors text-gray-600 dark:text-gray-300"
                onClick={() => setLang((l) => (l === "id" ? "en" : "id"))}
                aria-label="Toggle language"
              >
                {lang === "id" ? "EN" : "ID"}
              </button>
              <a
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transform hover:-translate-y-0.5"
                href={waLinks.navbar}
                rel="noopener noreferrer"
                target="_blank"
              >
                Chat WA
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <MaterialIcon name={menuOpen ? "close" : "menu"} />
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white dark:bg-gray-900 px-4 py-4">
            <div className="flex flex-col gap-3">
              {serviceNavLinks.map((link) => (
                <a
                  key={link.href}
                  className={`text-sm font-medium py-2 ${
                    activeSection === link.href
                      ? "text-sky-500 font-bold"
                      : "text-gray-700 hover:text-sky-500 dark:text-gray-300"
                  }`}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {navLabels[link.href] ?? link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                <button
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 py-2"
                  onClick={toggleDarkMode}
                >
                  <MaterialIcon name={darkMode ? "light_mode" : "dark_mode"} className="text-lg" />
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <button
                  className="px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                  onClick={() => setLang((l) => (l === "id" ? "en" : "id"))}
                >
                  {lang === "id" ? "EN" : "ID"}
                </button>
              </div>
              <a
                className="bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
                href={waLinks.navbar}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                Chat WA
              </a>
            </div>
          </div>
        )}
      </nav>

      <main aria-label="Layanan Fadli Dev Studio">
      {/* ── Hero / Intro ── */}
      <section
        className="relative pt-20 pb-32 overflow-hidden bg-pattern dark:bg-gray-950"
        id="intro"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-950 pointer-events-none" />
        <div className={`${containerClass} relative z-10`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-sky-500 text-xs font-semibold mb-6 border border-blue-100 dark:bg-slate-800 dark:text-sky-300 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-sky-500 mr-2 animate-pulse" />
                {t.heroBadge ?? "Digital Partner Terpercaya untuk UMKM"}
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 dark:text-white">
                {t.heroTitle1 ?? "Grow Your Business"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600">
                  {t.heroTitle2 ?? "Go Digital Today."}
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 dark:text-gray-300">
                {t.heroSubtitle ??
                  "Bikin website & sistem operasional tanpa ribet. Kami bangun fondasi digital yang kuat agar bisnis Anda siap melesat."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-sky-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                  href={waLinks.hero}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t.heroCta ?? "Konsultasi via WhatsApp"}
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-lg group-hover:translate-x-1 transition-transform"
                  />
                </a>
                 <a
                   className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                   href="#portfolio"
                 >
                 {t.heroFormCta ?? "Lihat Portofolio"}
                </a>
              </div>
               <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm dark:text-gray-400">
                 {heroTrustBadgesList.map((badgeText) => (
                   <div key={badgeText} className="flex items-center gap-1">
                     <MaterialIcon
                       name="verified"
                       className="text-green-500"
                       filled
                     />
                     <span>{badgeText}</span>
                   </div>
                 ))}
              </div>
            </div>
            {/* Right mockup card */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-sky-200 dark:from-blue-900/40 dark:to-sky-900/40 rounded-full blur-3xl opacity-50 transform rotate-12 animate-pulse" />
              <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
                <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden dark:bg-gray-800 dark:border-gray-800">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <MaterialIcon
                      name="rocket_launch"
                      className="text-9xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-2xl dark:bg-sky-900/30">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 dark:bg-sky-900/40">
                        <MaterialIcon
                          name="analytics"
                          className="text-sky-500"
                        />
                      </div>
                      <div className="h-2 w-16 bg-blue-200 rounded mb-2" />
                      <div className="h-2 w-10 bg-blue-200 rounded" />
                    </div>
                    <div className="bg-green-50 p-4 rounded-2xl dark:bg-green-900/30">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3 dark:bg-green-900/50">
                        <MaterialIcon
                          name="payments"
                          className="text-green-600"
                        />
                      </div>
                      <div className="h-2 w-16 bg-green-200 rounded mb-2" />
                      <div className="h-2 w-10 bg-green-200 rounded" />
                    </div>
                     <div className="col-span-2 bg-gray-50 p-4 rounded-2xl flex items-center justify-between dark:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center dark:bg-orange-900/30">
                          <MaterialIcon
                            name="storefront"
                            className="text-orange-500"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Toko Online</div>
                          <div className="text-xs text-green-500 flex items-center mt-1">
                            <MaterialIcon
                              name="trending_up"
                              className="text-[10px] mr-0.5"
                            />
                            +125% Traffic
                          </div>
                        </div>
                      </div>
                      <div className="bg-sky-500 text-white text-xs px-3 py-1 rounded-full">
                        Active
                      </div>
                    </div>
                  </div>
                     <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Monthly Growth
                      </span>
                      <span className="text-sm font-bold text-sky-500">
                        85%
                      </span>
                    </div>
                     <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-800">
                      <div
                        className="bg-sky-500 h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 top-10 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-[float_4s_ease-in-out_infinite_1s] dark:bg-gray-800 dark:border-gray-800">
                  <MaterialIcon
                    name="emoji_events"
                    className="text-yellow-500 text-3xl"
                  />
                </div>
                <div className="absolute -left-6 bottom-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-[float_5s_ease-in-out_infinite_0.5s] dark:bg-gray-800 dark:border-gray-800">
                  <MaterialIcon
                    name="query_stats"
                    className="text-purple-500 text-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-white relative dark:bg-gray-900" id="keunggulan">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className={containerClass}>
          <SlideLeft className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.whyUsLabel ?? "Why Choose Us"}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              {t.whyUsTitle ?? "Lebih dari Sekadar Vendor Website"}
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              {t.whyUsSubtitle ??
                "Kami hadir sebagai partner strategis untuk pertumbuhan bisnis SME Anda."}
            </p>
          </SlideLeft>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <FadeUp key={item.title} delay={idx * 0.1}>
                <div
                  className="group bg-gray-50 p-8 rounded-3xl hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-sky-500/20 h-full dark:bg-gray-900 dark:hover:shadow-gray-900/50"
                >
                <div
                  className={`w-14 h-14 ${item.iconBgClass} dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 ${item.iconHoverBgClass} transition-colors ${item.iconTextClass}`}
                >
                  <MaterialIcon name={item.iconName} className="text-3xl" />
                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
                   {whyChooseUsTranslations[idx]?.title ?? item.title}
                 </h3>
                  <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-400">
                   {whyChooseUsTranslations[idx]?.description ?? item.description}
                 </p>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#f8fafc] relative dark:bg-gray-950" id="langkah-mudah">
        <div className={containerClass}>
          <SlideLeft className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.processLabel ?? "Proses Cepat"}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              {t.processTitle ?? "3 Langkah Mudah Punya Website"}
            </h2>
            <p className="text-gray-600 text-lg dark:text-gray-400">
              {t.processSubtitle ??
                "Gak perlu pusing teknis. Kami buat prosesnya sesimpel mungkin agar Anda bisa fokus bisnis."}
            </p>
          </SlideLeft>
          <div className="relative grid md:grid-cols-3 gap-12">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-200 via-sky-500 to-blue-200 rounded-full opacity-30 z-0" />
              {processSteps.map((step, idx) => (
                <FadeUp
                  key={step.title}
                delay={idx * 0.15}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                   <div className="w-24 h-24 rounded-3xl bg-white shadow-xl border-2 border-blue-50 flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-300 dark:bg-gray-800 dark:border-blue-900">
                    <MaterialIcon
                      name={step.iconName}
                      className={`text-4xl ${step.iconColor}`}
                    />
                  </div>
                  <div
                    className={`absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full ${step.numberBg} text-white font-bold text-lg flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    {idx + 1}
                  </div>
                  <div
                    className={`absolute inset-0 ${step.blurBg} rounded-3xl blur-xl transform scale-110 -z-10 opacity-50`}
                  />
                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
                   {processStepTranslations[idx]?.title ?? step.title}
                 </h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-4 dark:text-gray-400">
                   {processStepTranslations[idx]?.description ?? step.description}
                 </p>
              </FadeUp>
            ))}
          </div>
          <div className="mt-16 text-center">
             <a
               className="inline-flex items-center justify-center bg-white border border-gray-200 text-sky-500 font-semibold py-3 px-8 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-sm group dark:bg-gray-900 dark:border-gray-700 dark:text-sky-400 dark:hover:bg-gray-800"
              href="https://forms.gle/a1kGLvuSwCWBCamv6"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.processFormCta ?? "Isi Formulir Konsultasi"}
              <MaterialIcon
                name="assignment"
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ── Promo Banner ── */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className={containerClass}>
          <ScaleIn>
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0f172a] to-blue-900 rounded-[2rem] shadow-2xl border-2 border-amber-500/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px] -ml-16 -mb-16" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block bg-amber-500/20 text-amber-500 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6 border border-amber-500/30 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                  {t.promoBadge ?? promoBanner.badge}
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Bonus Spesial:{" "}
                  <span className="text-amber-500">
                    {t.promoHeadline ?? promoBanner.headline}
                  </span>
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t.promoSubtext ?? promoBanner.subtext}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                  <a
                    className="bg-amber-500 hover:bg-yellow-500 text-slate-900 px-8 py-3.5 rounded-full font-bold shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    href={waLinks.promo}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t.promoCta ?? promoBanner.ctaText}
                    <MaterialIcon name="arrow_forward" />
                  </a>
                  <span className="text-xs text-blue-200 bg-white/5 px-3 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                     {t.promoUrgency ?? promoBanner.urgencyText}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl transform scale-110" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-full border border-white/10 w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                  <MaterialIcon
                    name="security"
                    className="text-amber-500 text-[9rem] lg:text-[13rem] drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                    filled
                  />
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-bounce dark:bg-gray-800 dark:border-gray-700">
                    <MaterialIcon
                      name="verified_user"
                      className="text-green-500 text-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900" id="layanan">
        <div className={containerClass}>
          <SlideLeft className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.servicesLabel ?? "Pilihan Layanan"}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              {t.servicesTitle ?? "Paket Lengkap untuk Kebutuhan Anda"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.servicesSubtitle ?? "Teknologi modern (Next.js) yang cepat, aman, dan SEO Friendly."}
            </p>
          </SlideLeft>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeUp key={service.title} delay={idx * 0.12}>
              <div
                key={service.title}
                className={`bg-white rounded-3xl p-8 ${
                  service.isPopular
                    ? "border-2 border-sky-500/20 relative overflow-hidden transform md:-translate-y-4 dark:bg-gray-900 dark:border-gray-700"
                    : "border border-gray-100 dark:bg-gray-900 dark:border-gray-700"
                } hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer dark:bg-gray-800 dark:border-gray-800 dark:hover:shadow-gray-900/50 dark:bg-gray-900 dark:border-gray-700`}
              >
                 {service.isPopular && (
                   <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                     {t.popularBadge ?? "Popular"}
                   </div>
                 )}
                 <div
                  className={`${service.iconBgClass} dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <MaterialIcon
                    name={service.iconName}
                    className="text-sky-500 text-3xl"
                  />
                </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition-colors dark:text-white">
                   {serviceTranslations[idx]?.title ?? service.title}
                 </h3>
                 <p className="text-sm text-gray-600 mb-6 min-h-[60px] dark:text-gray-400">
                   {serviceTranslations[idx]?.description ?? service.description}
                 </p>
                 <ul className="space-y-3 border-t border-gray-100 pt-6 dark:border-gray-800">
                   {(serviceTranslations[idx]?.features ?? service.features).map((feat, featIdx) => (
                     <li
                       key={`${feat}-${featIdx}`}
                       className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                     >
                       <MaterialIcon
                         name="check_circle"
                         className="text-green-500 text-lg mr-2"
                       />
                       {feat}
                     </li>
                   ))}
                 </ul>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section className="py-24 bg-white relative dark:bg-gray-900" id="portfolio">
        <div className={containerClass}>
          <SlideLeft className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.portfolioLabel ?? "Studi Kasus"}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              {t.portfolioTitle ?? "Karya Kami yang Telah Membantu UMKM"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.portfolioSubtitle ?? "Lihat bagaimana kami membantu bisnis seperti Anda tumbuh digital."}
            </p>
          </SlideLeft>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategoryOptions.map((opt) => (
              <button
                key={opt.value}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-y-1 ${
                  activeCategory === opt.value
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-white border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveCategory(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map(({ project, idx }) => {
              const CardWrapper = project.link ? "a" : "div";
              const cardProps = project.link
                ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              const pt = portfolioTranslations[idx] ?? {};
              return (
              <FadeUp key={project.title} delay={idx * 0.1}>
              <CardWrapper
                {...cardProps}
                className="group portfolio-card bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full block dark:bg-gray-900 dark:border-gray-800 dark:hover:shadow-gray-900/50"
              >
                <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden dark:bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-center p-6 overlay translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-bold text-2xl mb-2">
                      {pt.stat ?? project.stat}
                    </span>
                    <p className="text-gray-200 text-sm mb-4">
                      {pt.statSub ?? project.statSub}
                    </p>
                    {project.link && (
                      <span className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                        {t.portfolioDemoLabel ?? "Lihat Demo"}
                      </span>
                    )}
                  </div>
                  <Image
                    alt={pt.title ?? project.title}
                    className="w-full h-full object-cover object-top"
                    fill
                    loading="lazy"
                    src={project.image}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span
                        className={`text-xs font-semibold ${project.categoryColor} ${project.categoryBg} px-2 py-1 rounded dark:bg-gray-800`}
                      >
                        {pt.category ?? project.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 dark:text-white">
                        {pt.title ?? project.title}
                      </h3>
                    </div>
                    <MaterialIcon
                      name={project.link ? "arrow_outward" : "image"}
                      className="text-gray-400 group-hover:text-sky-500 transition-colors dark:text-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{pt.description ?? project.description}</p>
                </div>
              </CardWrapper>
              </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white overflow-hidden dark:bg-gray-950" id="testimoni">
        <div className={containerClass}>
          <SlideLeft className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.testimonialsLabel ?? "Kisah Sukses"}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              {t.testimonialsTitle ?? "Dipercaya Berbagai UMKM"}
            </h2>
          </SlideLeft>
        </div>
        {/* Marquee auto-scroll */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-gray-900 dark:from-gray-950" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-gray-900 dark:from-gray-950" />
          <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] w-max gap-6 px-6">
            {[...testimonials, ...testimonials].map((t, idx) => (
                <div
                  key={`${t.authorName}-${idx}`}
                  className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-gray-100 flex flex-col w-[320px] flex-shrink-0 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-900 dark:hover:shadow-gray-900/50"
                >
                   <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-4 dark:border-gray-700">
                  <div className={`${t.iconBgClass} p-2 rounded-lg dark:bg-gray-800`}>
                    <MaterialIcon
                      name={t.iconName}
                      className={t.iconColorClass}
                    />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900 text-sm dark:text-white">
                      {t.businessName}
                    </h4>
                     <p className="text-xs text-gray-500 dark:text-gray-400">{t.businessType}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                    <MaterialIcon
                      key={i}
                      name="star"
                      className="text-sm"
                      filled
                    />
                  ))}
                  {t.rating % 1 !== 0 && (
                    <MaterialIcon
                      name="star_half"
                      className="text-sm"
                      filled
                    />
                  )}
                </div>
                 <p className="text-sm text-gray-600 italic mb-6 flex-grow dark:text-gray-400">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center mt-auto">
                   <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3 border-2 border-white shadow-sm text-sm font-bold text-sky-600 dark:bg-sky-900 dark:text-sky-300">
                    {t.authorInitials}
                  </div>
                  <div>
                     <p className="text-sm font-bold text-gray-900 dark:text-white">
                      {t.authorName}
                    </p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">{t.authorRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950" id="harga">
        <div className={containerClass}>
          <SlideLeft className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.pricingLabel ?? "Investasi"}
            </span>
             <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              {t.pricingTitle ?? "Pilihan Paket Sesuai Kebutuhan Anda"}
            </h2>
             <p className="text-gray-600 text-sm dark:text-gray-400">
              {t.pricingSubtitle ??
                "Harga transparan untuk landing page. Untuk layanan lain, mari diskusi kebutuhan Anda terlebih dahulu."}
            </p>
          </SlideLeft>

          {/* Landing Page Packages */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                <MaterialIcon name="web" className="text-sky-500 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.landingPageTitle ?? "Landing Page"}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.landingPageDescription ?? "Setup sekali bayar + Infra tahunan (server, domain, tools)"}</p>
              </div>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {translatedPackages.map((pkg, idx) => (
              <FadeUp key={pkg.label} delay={idx * 0.12} className="flex">
              <div
                className={`bg-white rounded-3xl p-6 lg:p-8 dark:bg-gray-900 ${
                  pkg.isPopular
                    ? "border-2 border-sky-500 shadow-xl hover:shadow-2xl transform xl:-translate-y-4 z-10 relative"
                    : "border border-gray-200 shadow-sm hover:shadow-xl dark:border-gray-700"
                } hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 left-0 -mt-5 flex justify-center">
                    <span className="bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {t.popularBadge ?? "Paling Populer"}
                    </span>
                  </div>
                )}
                <h3
                  className={`text-lg font-bold text-gray-900 dark:text-white ${pkg.isPopular ? "mt-2" : ""}`}
                >
                  {pkg.label}
                </h3>
                <div className="mt-3 mb-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{t.setupLabel ?? "Setup (sekali bayar)"}</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                      {pkg.price}
                    </span>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <MaterialIcon name="dns" className="text-sm text-sky-500" />
                  <span>Infra: {pkg.infra}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
                  {pkg.fit}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.includes.map((item) => (
                    <li
                      key={item.text}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                    >
                      <MaterialIcon
                        name={item.iconName}
                        className="text-sky-500 text-base mr-2 mt-0.5"
                      />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a
                  className={`block w-full text-center font-semibold py-3 rounded-full transition-all text-sm mt-auto ${
                    pkg.isPopular
                      ? "bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30"
                      : "border-2 border-gray-200 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white text-gray-900 dark:text-white dark:border-gray-700"
                    }`}
                  href={pkg.waLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t.packageButton ?? "Pesan Paket Ini"}
                </a>
              </div>
              </FadeUp>
            ))}
          </div>

          {/* Layanan Lain — Konsultasi */}
          <FadeUp delay={0.2}>
                <div className="flex items-center gap-3 mt-16 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <MaterialIcon name="dashboard_customize" className="text-purple-500 text-xl" />
              </div>
                 <div>
                   <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.otherServicesHeading ?? "Layanan Lainnya"}</h3>
                   <p className="text-xs text-gray-500 dark:text-gray-400">{t.otherServicesSubtitle ?? "Harga disesuaikan dengan fitur & kompleksitas kebutuhan Anda"}</p>
                 </div>
            </div>
          </FadeUp>
             <div className="grid md:grid-cols-3 gap-6">
            <FadeUp delay={0.25} className="flex">
               <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:shadow-gray-900/50">
                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform dark:bg-blue-900/30">
                  <MaterialIcon name="shopping_cart" className="text-blue-500 text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">{otherServicesTranslations[0]?.title ?? "Toko Online / Katalog"}</h3>
                 <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
                  {otherServicesTranslations[0]?.description ?? "Pelanggan lihat produk dan pesan via WhatsApp. Harga tergantung jumlah produk, fitur filter, dan integrasi pembayaran."}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                   <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                     <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[0]?.features?.[0] ?? "Katalog produk dengan kategori"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[0]?.features?.[1] ?? "Checkout via WhatsApp"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[0]?.features?.[2] ?? "Mobile-first responsive"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="tune" className="text-sky-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[0]?.features?.[3] ?? "Fitur custom sesuai kebutuhan"}
                  </li>
                </ul>
                <a
                  className="block w-full text-center font-semibold py-3 rounded-full transition-all text-sm mt-auto border-2 border-gray-200 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white text-gray-900 dark:text-white dark:border-gray-700"
                  href={waLinks.tokoOnline}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {otherServicesTranslations[0]?.cta ?? "Konsultasi Gratis"}
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.3} className="flex">
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:shadow-gray-900/50">
                <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform dark:bg-purple-900/30">
                  <MaterialIcon name="inventory_2" className="text-purple-500 text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">{otherServicesTranslations[1]?.title ?? "Sistem Operasional"}</h3>
                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
                  {otherServicesTranslations[1]?.description ?? "Aplikasi untuk merapikan data kantor. Harga tergantung modul yang dibutuhkan dan jumlah pengguna."}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[1]?.features?.[0] ?? "Manajemen stok & inventaris"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[1]?.features?.[1] ?? "Absensi & data karyawan"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[1]?.features?.[2] ?? "Laporan keuangan otomatis"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="tune" className="text-sky-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[1]?.features?.[3] ?? "Modul custom sesuai bisnis"}
                  </li>
                </ul>
                <a
                  className="block w-full text-center font-semibold py-3 rounded-full transition-all text-sm mt-auto border-2 border-gray-200 group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:text-white text-gray-900 dark:text-white dark:border-gray-700"
                  href={waLinks.sistemOperasional}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {otherServicesTranslations[1]?.cta ?? "Konsultasi Gratis"}
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.35} className="flex">
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:shadow-gray-900/50">
                <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform dark:bg-green-900/30">
                  <MaterialIcon name="phone_android" className="text-green-500 text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">{otherServicesTranslations[2]?.title ?? "Mobile Apps"}</h3>
                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
                  {otherServicesTranslations[2]?.description ?? "Aplikasi mobile untuk bisnis Anda. Harga tergantung platform (Android/iOS), fitur, dan kompleksitas."}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[2]?.features?.[0] ?? "Android & iOS (Cross-platform)"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[2]?.features?.[1] ?? "Push notification"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="check_circle" className="text-green-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[2]?.features?.[2] ?? "Offline mode support"}
                  </li>
                  <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <MaterialIcon name="tune" className="text-sky-500 text-base mr-2 mt-0.5" />
                    {otherServicesTranslations[2]?.features?.[3] ?? "Fitur custom sesuai kebutuhan"}
                  </li>
                </ul>
                <a
                  className="block w-full text-center font-semibold py-3 rounded-full transition-all text-sm mt-auto border-2 border-gray-200 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white text-gray-900 dark:text-white dark:border-gray-700"
                  href={waLinks.mobileApps}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {otherServicesTranslations[2]?.cta ?? "Konsultasi Gratis"}
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-12 max-w-2xl mx-auto bg-amber-50 rounded-2xl border border-amber-200/60 p-6 shadow-sm dark:bg-amber-900/20 dark:border-amber-700/40">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center dark:bg-amber-900/30">
                  <MaterialIcon name="info" className="text-amber-600 text-xl" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm text-amber-900 leading-relaxed dark:text-amber-200">
                    {t.pricingInfoSetup ?? "Setup = biaya pembuatan awal (sekali bayar). Infra = server, domain & tools (tahunan)."}
                  </p>
                  <p className="text-sm text-amber-700 leading-relaxed dark:text-amber-300">
                    {t.pricingInfoMaintenance ?? "Maintenance rutin bersifat opsional, bisa ditambah kapan saja sesuai kebutuhan."}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Standard Features ── */}
      <section className="py-16 bg-gray-100 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
        <div className={containerClass}>
          <SlideLeft className="text-center mb-12">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.standardFeaturesLabel ?? "Value Added"}
            </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              {t.standardFeaturesTitle ?? "Fitur Standar di Semua Paket"}
            </h2>
              <p className="text-gray-600 mt-2 text-sm dark:text-gray-400">
              {t.standardFeaturesSubtitle ?? "Tidak perlu bayar lebih. Fitur penting ini sudah otomatis Anda dapatkan."}
            </p>
          </SlideLeft>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardFeatures.map((feat, idx) => {
              const sf = standardFeatureTranslations[idx] ?? {};
              return (
              <FadeUp key={feat.title} delay={idx * 0.1}>
              <div
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start border border-gray-100 h-full dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-gray-900/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-500 dark:bg-sky-900/20">
                  <MaterialIcon name={feat.iconName} className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 dark:text-white">
                    {sf.title ?? feat.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed dark:text-gray-400">
                    {sf.description ?? feat.description}
                  </p>
                </div>
              </div>
              </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white dark:bg-gray-900" id="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideLeft className="text-center mb-16">
            <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
              {t.faqLabel ?? "Tanya Jawab"}
            </span>
             <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              {t.faqTitle ?? "Paling Sering Ditanyakan"}
            </h2>
             <p className="text-gray-600 dark:text-gray-400">
              {t.faqSubtitle ?? "Informasi lengkap seputar layanan, harga, dan purna jual."}
            </p>
          </SlideLeft>
               <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const fq = faqTranslations[idx] ?? {};
              return (
              <FadeUp key={faq.question} delay={idx * 0.08}>
                 <details
                    key={faq.question}
                   className="group bg-gray-50 border border-transparent hover:border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-700"
                  >
                   <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-900 dark:text-white">
                  <span className="text-lg">{fq.question ?? faq.question}</span>
                  <MaterialIcon
                    name="expand_more"
                    className="transform group-open:rotate-180 transition-transform duration-300 text-gray-400"
                  />
                </summary>
                   <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 dark:text-gray-400 dark:border-gray-700">
                  {fq.answer ?? faq.answer}
                </div>
              </details>
              </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-[#f8fafc] dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleIn>
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl border border-blue-800/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 font-bold tracking-wider text-xs uppercase mb-6 border border-blue-500/30">
                {t.finalCtaLabel ?? "Mulai Sekarang"}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t.finalCtaTitleLine1 ?? "Konsultasi Gratis,"}
                <br />
                {t.finalCtaTitleLine2 ?? "Tanpa Risiko."}
              </h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                {t.finalCtaSubtitle ??
                  "Ceritakan kebutuhan bisnis Anda lewat WhatsApp. Kami akan berikan solusi strategi digital dan estimasi biaya dalam 24 jam."}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  href={waLinks.ctaFinal}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MaterialIcon name="chat" />
                  {t.finalCtaPrimary ?? "Chat WhatsApp Sekarang"}
                </a>
                <a
                  className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  href="https://forms.gle/a1kGLvuSwCWBCamv6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MaterialIcon name="assignment" />
                  {t.finalCtaSecondary ?? "Isi Form Briefing"}
                </a>
              </div>
            </div>
          </div>
          </ScaleIn>
        </div>
      </section>
      </main>

      {/* ── Footer ── */}
      <footer aria-label="Footer" className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
        <div className={`${containerClass} relative z-10`}>
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Image
                  alt="Fadli Dev Studio"
                  className="h-10 w-10 rounded-lg object-contain"
                  height={40}
                  src="/brand.png"
                  width={40}
                />
                <span className="text-xl font-bold tracking-tight">
                  Fadli Dev Studio
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t.footerParagraph ??
                  "Mitra digital terpercaya yang membantu UMKM tumbuh pesat di era digital dengan solusi website profesional dan terjangkau."}
              </p>
              {/* Profile */}
              <div className="flex items-start gap-3 bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
                <Image
                  alt="Mohamad Fadli"
                  className="w-14 h-14 rounded-full object-cover border-2 border-sky-500/30 flex-shrink-0"
                  height={56}
                  src="/my-profile.JPG"
                  width={56}
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Mohamad Fadli</h4>
                  <p className="text-xs text-sky-400 mb-2">Founder & Developer</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.footerProfileRole ??
                      "Software engineer sejak 2016. Fokus membantu UMKM bertransformasi digital dengan solusi yang efisien dan scalable."}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-bold text-lg mb-6">{t.footerContactTitle ?? "Kontak Kami"}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MaterialIcon name="call" className="text-sky-500" />
                  <a
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                    href="https://wa.me/6282189642027"
                  >
                    +62 821-8964-2027
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MaterialIcon name="mail" className="text-sky-500" />
                  <a
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                    href="mailto:fadli.dev.studio27@gmail.com"
                  >
                    fadli.dev.studio27@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-6">{t.footerFollowTitle ?? "Ikuti Kami"}</h3>
              <div className="flex flex-col gap-4">
                <a
                  className="flex items-center gap-3 text-slate-400 hover:text-white group transition-colors"
                  href="https://github.com/fadli271"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    <MaterialIcon name="code" className="text-lg" />
                  </div>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  className="flex items-center gap-3 text-slate-400 hover:text-white group transition-colors"
                  href="https://linkedin.com/in/mfadli27a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors duration-300">
                    <MaterialIcon name="work" className="text-lg" />
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  className="flex items-center gap-3 text-slate-400 hover:text-white group transition-colors"
                  href="https://www.instagram.com/fadli.dev.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#E4405F] transition-colors duration-300">
                    <MaterialIcon name="photo_camera" className="text-lg" />
                  </div>
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {footerRightsText}
            </p>
          </div>
        </div>
      </footer>

      <FloatingWaButton />
    </div>
  );
}
