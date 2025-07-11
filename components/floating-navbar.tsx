"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Check, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavigationItem = { label: string; icon: LucideIcon };

interface FloatingNavbarProps {
  content: Record<string, NavigationItem>;
  setLang: (lang: string) => void;
  currentLang: string;
}

export default function FloatingNavbar({
  content,
  setLang,
  currentLang,
}: FloatingNavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langRef.current &&
        !langRef.current.contains(e.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsLangOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangChange = (lang: string) => {
    setLang(lang);
    setIsLangOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      {/* Lang Switch */}
      <div ref={langRef} className="relative">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full shadow-md text-sm font-medium hover:bg-gray-100 transition-all"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <span>{currentLang === "id" ? "Indonesia" : "English"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isLangOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isLangOpen && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-44 rounded-lg bg-white shadow-lg ring-1 ring-gray-200"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                onClick={() => handleLangChange("id")}
              >
                Indonesia{" "}
                {currentLang === "id" && (
                  <Check className="w-4 h-4 text-green-500" />
                )}
              </button>
              <button
                className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                onClick={() => handleLangChange("en")}
              >
                English{" "}
                {currentLang === "en" && (
                  <Check className="w-4 h-4 text-green-500" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Menu */}
      <div ref={menuRef} className="relative">
        <button
          aria-label="Navigation Menu"
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all shadow-lg ${
            isMenuOpen
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-gray-200"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {Object.entries(content).map(([key, { label, icon: Icon }]) => (
                <a
                  key={key}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                  href={`#${key}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-4 h-4 text-sky-500" />
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
