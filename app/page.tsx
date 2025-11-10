"use client";

import { useCallback, useEffect, useState } from "react";

import FloatingNavbar from "@/components/floating-navbar";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { ExperienceSection } from "@/components/sections/portfolio/experience-section";
import ContactSection from "@/components/sections/portfolio/contact-section";
import { HeroSection } from "@/components/sections/portfolio/hero-section";
import ProjectsSection from "@/components/sections/portfolio/project-section";
import SkillsSection from "@/components/sections/portfolio/skills-section";
import { content } from "@/data/portfolio-content";

type Language = keyof typeof content;
type ContentType = (typeof content)[Language];

const DEFAULT_LANG: Language = "id";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const param = new URLSearchParams(window.location.search).get("lang");

  return param === "en" ? "en" : DEFAULT_LANG;
};

export default function HomePage() {
  const [lang, setLang] = useState<Language>(() => getInitialLanguage());

  useEffect(() => {
    const handlePopState = () => {
      setLang(getInitialLanguage());
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleLangChange = useCallback((nextLang: Language) => {
    setLang(nextLang);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);

      if (nextLang === DEFAULT_LANG) {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", nextLang);
      }

      window.history.replaceState(null, "", url.toString());
    }
  }, []);

  const currentContent: ContentType = content[lang];

  return (
    <>
      <FloatingNavbar
        content={currentContent.nav}
        currentLang={lang}
        onLangChange={handleLangChange}
      />
      <HeroSection content={currentContent.hero} />
      <ExperienceSection content={currentContent.experienceSection} />
      <SkillsSection content={currentContent.skills} />
      <ProjectsSection
        content={currentContent.projects}
        projectsData={currentContent.projectsData}
      />
      <ContactSection content={currentContent.contact} />
      <ScrollToTopButton />
    </>
  );
}
