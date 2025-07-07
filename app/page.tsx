"use client";

import { useEffect, useState } from "react";

import FloatingNavbar from "@/components/floating-navbar";
import { content } from "@/lib/content";
import { HeroSection } from "@/components/content/hero-section";
import { ExperienceSection } from "@/components/content/experience-section";

type ContentType = typeof content.id;

export default function HomePage() {
  const [lang, setLang] = useState("id");
  const [currentContent, setCurrentContent] = useState<ContentType>(content.id);

  useEffect(() => {
    setCurrentContent(content[lang as keyof typeof content] as ContentType);
  }, [lang]);

  return (
    <>
      <FloatingNavbar
        content={currentContent.nav}
        currentLang={lang}
        setLang={setLang}
      />
      <HeroSection content={currentContent.hero} />
      <ExperienceSection content={currentContent.experienceSection} />
    </>
  );
}
