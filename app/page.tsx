import FloatingNavbar from "@/components/floating-navbar";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { ExperienceSection } from "@/components/sections/portfolio/experience-section";
import ContactSection from "@/components/sections/portfolio/contact-section";
import { HeroSection } from "@/components/sections/portfolio/hero-section";
import ProjectsSection from "@/components/sections/portfolio/project-section";
import SkillsSection from "@/components/sections/portfolio/skills-section";
import {
  getProjects,
  getTranslation,
  getSkills,
  getExperience,
} from "@/lib/markdown";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang: langParam } = await searchParams;
  const lang = langParam === "en" ? "en" : "id";

  const content = getTranslation(lang);
  const projectsData = getProjects(lang);
  const skillsData = getSkills();
  const experienceData = getExperience();

  if (!content) return <div>Content not found</div>;

  return (
    <main>
      <FloatingNavbar content={content.nav} currentLang={lang} />
      <HeroSection content={content.hero} />
      <ExperienceSection
        content={content.experienceSection}
        experienceData={experienceData}
      />
      <SkillsSection content={content.skills} skillsData={skillsData} />
      <ProjectsSection content={content.projects} projectsData={projectsData} />
      <ContactSection content={content.contact} />
      <ScrollToTopButton />
    </main>
  );
}
