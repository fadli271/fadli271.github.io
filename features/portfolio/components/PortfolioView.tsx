import dynamic from "next/dynamic";

import { PortfolioHero } from "./PortfolioHero";

import FloatingNavbar from "@/components/layout/floating-navbar";

// Lazy Loaded Sections
const PortfolioExperience = dynamic(() =>
  import("./PortfolioExperience").then((mod) => mod.PortfolioExperience),
);
const PortfolioSkills = dynamic(() =>
  import("./PortfolioSkills").then((mod) => mod.PortfolioSkills),
);
const PortfolioProjects = dynamic(() =>
  import("./PortfolioProjects").then((mod) => mod.PortfolioProjects),
);
const PortfolioContact = dynamic(() =>
  import("./PortfolioContact").then((mod) => mod.PortfolioContact),
);
const ScrollToTopButton = dynamic(
  () => import("@/components/layout/scroll-to-top-button"),
);

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
    home: { label: content.nav.home, icon: "home" },
    experience: { label: content.nav.experience, icon: "experience" },
    projects: { label: content.nav.projects, icon: "projects" },
    contact: { label: content.nav.contact, icon: "contact" },
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
