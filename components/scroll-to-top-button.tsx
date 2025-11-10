"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const getIsDesktop = () =>
  typeof window === "undefined"
    ? false
    : window.matchMedia("(min-width: 640px)").matches;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => getIsDesktop());
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleChange = (event: MediaQueryListEvent) =>
      setIsDesktop(event.matches);

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const body = document.body;
    const updateVisibility = () =>
      setIsFloatingNavVisible(body.dataset.floatingNavVisible === "true");

    updateVisibility();

    const observer = new MutationObserver(updateVisibility);

    observer.observe(body, {
      attributes: true,
      attributeFilter: ["data-floating-nav-visible"],
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bottomOffset = isDesktop ? "1.25rem" : "3.5rem";
  const shouldShowButton = isVisible && !isFloatingNavVisible;

  return (
    <motion.button
      animate={
        shouldShowButton ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
      }
      aria-label="Scroll to Top"
      className="fixed right-4 sm:right-6 z-40 p-3 rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition"
      initial={{ opacity: 0, scale: 0 }}
      style={{ bottom: bottomOffset }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
