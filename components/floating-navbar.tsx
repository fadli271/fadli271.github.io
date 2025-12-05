"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

import { type Language } from "@/app/content/portfolio";
import { useMediaQuery } from "@/hooks/use-media-query";

const MOBILE_SHOW_THRESHOLD = 60;

interface FloatingNavbarProps {
  content: {
    [key: string]: {
      label: string;
      icon: LucideIcon;
    };
  };
  onLangChange: (lang: Language) => void;
  currentLang: Language;
}

const EXTRA_MENU_ITEMS = [
  { label: "Jasa Dev", href: "/services", icon: Sparkles },
];

/**
 * Floating navbar with language switch and quick section menu.
 * Appears when scrolling up or on desktop viewports.
 */
export default function FloatingNavbar({
  content,
  onLangChange,
  currentLang,
}: FloatingNavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)", false);
  const [showNav, setShowNav] = useState(false);
  const [hasScrolledPastInitial, setHasScrolledPastInitial] = useState(false);
  const lastScrollY = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLangChange = (lang: Language) => {
    onLangChange(lang);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const isAtTop = current < 80;
      const isScrollingUp = current < lastScrollY.current;

      if (!hasScrolledPastInitial && current > MOBILE_SHOW_THRESHOLD) {
        setHasScrolledPastInitial(true);
      }

      const allowAutoShow = isDesktop || hasScrolledPastInitial;

      setShowNav(allowAutoShow && (isAtTop || isScrollingUp));
      lastScrollY.current = current;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledPastInitial, isDesktop]);

  useEffect(() => {
    if (isLangOpen || isMenuOpen) {
      setShowNav(true);
    }
  }, [isLangOpen, isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languageLabel = currentLang === "id" ? "Indonesia" : "English";
  const allowReveal =
    isDesktop || hasScrolledPastInitial || isLangOpen || isMenuOpen;
  const isNavVisible = allowReveal && showNav;

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.dataset.floatingNavVisible = isNavVisible ? "true" : "false";

    return () => {
      document.body.dataset.floatingNavVisible = "false";
    };
  }, [isNavVisible]);

  return (
    <AnimatePresence>
      {isNavVisible && (
        <motion.div
          ref={containerRef}
          animate={{ opacity: 1, y: 0 }}
          className={clsx(
            "fixed z-50 w-[calc(100%-2rem)] max-w-md left-1/2 -translate-x-1/2 bottom-5 sm:w-auto sm:max-w-none sm:left-auto sm:translate-x-0 sm:top-6 sm:right-6"
          )}
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Language Switcher */}
            <div className="relative flex-1 sm:flex-none">
              <button
                aria-expanded={isLangOpen}
                aria-haspopup="listbox"
                className="content-card flex w-full items-center justify-between rounded-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white"
                onClick={toggleLang}
              >
                <span>{languageLabel}</span>
                <ChevronDown
                  className={clsx(
                    "h-4 w-4 transition-transform",
                    isLangOpen && "rotate-180"
                  )}
                />
              </button>
              {isLangOpen && (
                <div
                  className={clsx(
                    "absolute inset-x-0 bottom-full mb-2 w-full rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl",
                    "sm:inset-auto sm:right-0 sm:top-full sm:mb-0 sm:mt-2 sm:w-48"
                  )}
                >
                  {(["id", "en"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      className={clsx(
                        "w-full rounded-xl px-4 py-2 text-left text-sm transition-colors",
                        lang === currentLang
                          ? "bg-sky-50 text-sky-600 font-semibold"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                      onClick={() => handleLangChange(lang)}
                    >
                      {lang === "id" ? "Indonesia" : "English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Menu Button */}
            <div className="relative flex-1 sm:flex-none">
              <button
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
                className="content-card flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white sm:min-w-[56px]"
                onClick={toggleMenu}
              >
                <Menu className="h-5 w-5 text-sky-600" />
                <span className="sm:hidden">Menu</span>
              </button>
              {isMenuOpen && (
                <nav
                  className={clsx(
                    "absolute inset-x-0 bottom-full mb-2 w-full rounded-3xl border border-gray-100 bg-white shadow-2xl",
                    "sm:inset-auto sm:right-0 sm:top-full sm:mb-0 sm:mt-2 sm:w-56",
                    "max-h-[60vh] overflow-y-auto"
                  )}
                >
                  <ul className="divide-y divide-gray-100 text-sm text-gray-700">
                    {Object.entries(content).map(
                      ([key, { label, icon: Icon }]) => (
                        <li key={key}>
                          <a
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                            href={`#${key}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Icon className="h-4 w-4 text-sky-500" />
                            {label}
                          </a>
                        </li>
                      )
                    )}
                    {EXTRA_MENU_ITEMS.map(({ label, href, icon: Icon }) => (
                      <li key={href}>
                        <a
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                          href={href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="h-4 w-4 text-sky-500" />
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
