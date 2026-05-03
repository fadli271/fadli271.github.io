import { PortfolioExperience } from "./PortfolioExperience";
import { PortfolioContact } from "./PortfolioContact";
import { PortfolioHero } from "./PortfolioHero";
import { PortfolioProjects } from "./PortfolioProjects";
import { PortfolioSkills } from "./PortfolioSkills";

import ScrollToTopButton from "@/components/layout/scroll-to-top-button";
import FloatingNavbar from "@/components/layout/floating-navbar";
import {
  getProjects,
  getTranslation,
  getSkills,
  getExperience,
} from "@/lib/data-loader";

interface PortfolioViewProps {
  lang: "id" | "en";
}

export function PortfolioView({ lang }: PortfolioViewProps) {
  const content = getTranslation(lang);
  const projectsData = getProjects(lang);
  const skillsData = getSkills(lang);
  const experienceData = getExperience(lang);

  if (!content) return <div>Content not found</div>;

  return (
    <>
      <FloatingNavbar content={content.nav} currentLang={lang} />
      <PortfolioHero content={content.hero} />
      <PortfolioExperience
        content={content.experienceSection}
        experienceData={experienceData}
      />
      <PortfolioSkills content={content.skills} skillsData={skillsData} />
      <PortfolioProjects
        content={content.projects}
        projectsData={projectsData}
      />
      <PortfolioContact content={content.contact} />
      <ScrollToTopButton />
    </>
  );
}
