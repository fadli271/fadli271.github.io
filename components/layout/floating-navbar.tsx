"use client";

import { useEffect, useRef, useState } from "react";
import {
  LucideIcon,
  Home,
  Briefcase,
  FolderCode,
  Mail,
  Sparkles,
  ChevronDown,
  Menu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Language } from "@/types";

const MOBILE_SHOW_THRESHOLD = 60;

interface FloatingNavbarProps {
  content: {
    [key: string]: {
      label: string;
      icon: string | LucideIcon;
    };
  };
  currentLang: Language;
}

const ICON_MAP: Record<string, LucideIcon> = {
  home: Home,
  experience: Briefcase,
  projects: FolderCode,
  contact: Mail,
  sparkles: Sparkles,
};

const EXTRA_MENU_ITEMS = [
  { label: "Jasa Dev", href: "/services", icon: Sparkles },
];

/**
 * Floating navbar with language switch and quick section menu.
 * Appears when scrolling up or on desktop viewports.
 */
export default function FloatingNavbar({
  content,
  currentLang,
}: FloatingNavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)", false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [showNav, setShowNav] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hasScrolledPastInitial, setHasScrolledPastInitial] = useState(false);
  const lastScrollY = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const isAtTop = current < 50;
      const isScrollingUp = current < lastScrollY.current;

      setAtTop(isAtTop);

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

  const getLangPath = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (lang === "id") {
      params.delete("lang");
    } else {
      params.set("lang", lang);
    }

    const queryString = params.toString();

    return `${pathname}${queryString ? `?${queryString}` : ""}`;
  };

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
            "fixed z-50 left-0 top-0 w-full transition-all duration-300",
            atTop
              ? "bg-transparent border-transparent py-5"
              : "bg-white/80 backdrop-blur-md border-b border-white/20 py-3 shadow-sm",
          )}
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={clsx(
              "max-w-7xl mx-auto flex items-center",
              pathname === "/" ? "justify-end" : "justify-between",
            )}
          >
            {/* Logo/Brand (Hidden on root) */}
            {pathname !== "/" && (
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">
                  F
                </div>
                <span className="font-bold text-slate-800 hidden sm:block">
                  Fadli Dev
                </span>
              </div>
            )}

            <div className="flex items-center gap-3">
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
                      isLangOpen && "rotate-180",
                    )}
                  />
                </button>
                {isLangOpen && (
                  <div
                    className={clsx(
                      "absolute right-0 top-full mt-2 w-48 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl",
                    )}
                  >
                    {(["id", "en"] as Language[]).map((lang) => (
                      <Link
                        key={lang}
                        className={clsx(
                          "block w-full rounded-xl px-4 py-2 text-left text-sm transition-colors",
                          lang === currentLang
                            ? "bg-sky-50 text-sky-600 font-semibold"
                            : "text-gray-600 hover:bg-gray-100",
                        )}
                        href={getLangPath(lang)}
                        onClick={() => setIsLangOpen(false)}
                      >
                        {lang === "id" ? "Indonesia" : "English"}
                      </Link>
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
                      "absolute right-0 top-full mt-2 w-56 rounded-3xl border border-gray-100 bg-white shadow-2xl",
                      "max-h-[80vh] overflow-y-auto",
                    )}
                  >
                    <ul className="divide-y divide-gray-100 text-sm text-gray-700">
                      {Object.entries(content).map(([key, { label, icon }]) => {
                        const Icon =
                          typeof icon === "string"
                            ? ICON_MAP[icon] || Sparkles
                            : icon;

                        return (
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
                        );
                      })}
                      {EXTRA_MENU_ITEMS.map(({ label, href, icon: Icon }) => (
                        <li key={href}>
                          <Link
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                            href={href}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Icon className="h-4 w-4 text-sky-500" />
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
