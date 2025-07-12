"use client";

import { useState } from "react";

import FloatingNavbar from "@/components/floating-navbar";
import { content } from "@/lib/content";
import { HeroSection } from "@/components/content/hero-section";
import { ExperienceSection } from "@/components/content/experience-section";
import SkillsSection from "@/components/content/skills-section";
import ProjectsSection from "@/components/content/project-section";
import ContactSection from "@/components/content/contact-section";
import ScrollToTopButton from "@/components/scroll-to-top-button";

type Language = keyof typeof content;
type ContentType = (typeof content)[Language];

export default function HomePage() {
  const [lang, setLang] = useState<Language>("id");
  const currentContent: ContentType = content[lang];

  return (
    <>
      <FloatingNavbar
        content={currentContent.nav}
        currentLang={lang}
        setLang={setLang}
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
