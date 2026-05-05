"use client";

import { useState, useEffect, useCallback } from "react";
import { useScroll, useSpring } from "framer-motion";

import { ServicesContent } from "../types";

import { Language } from "@/types";

export function useServicesState(initialData: {
  id: ServicesContent;
  en: ServicesContent;
}) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<Language>("id");

  // --- Scroll Progress ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // --- Intersection Observer for Active Section ---
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

  const t = initialData[lang] || initialData.id;

  return {
    activeCategory,
    setActiveCategory,
    activeSection,
    darkMode,
    lang,
    setLang,
    scaleX,
    toggleDarkMode,
    t,
  };
}
