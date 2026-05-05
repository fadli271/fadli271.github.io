import { Home, Briefcase, FolderCode, Mail } from "lucide-react";

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
import { CONTACT_INFO } from "@/lib/contact-info";
import { Language } from "@/types";

interface PortfolioViewProps {
  lang: Language;
}

export function PortfolioView({ lang }: PortfolioViewProps) {
  const content = getTranslation(lang);
  const projectsData = getProjects(lang);
  const skillsData = getSkills(lang);
  const experienceData = getExperience(lang);

  if (!content) return <div>Content not found</div>;

  const navItems = {
    home: { label: content.nav.home, icon: Home },
    experience: { label: content.nav.experience, icon: Briefcase },
    projects: { label: content.nav.projects, icon: FolderCode },
    contact: { label: content.nav.contact, icon: Mail },
  };

  return (
    <>
      <FloatingNavbar content={navItems} currentLang={lang} />
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
      <PortfolioContact
        content={{
          ...content.contact,
          email: CONTACT_INFO.email,
          socialLinks: {
            github: CONTACT_INFO.social.github,
            linkedin: CONTACT_INFO.social.linkedin,
            whatsapp: `https://wa.me/${CONTACT_INFO.whatsapp.number}`,
          },
        }}
      />
      <ScrollToTopButton />
    </>
  );
}
