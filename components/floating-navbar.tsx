"use client";

import type { Language } from "@/lib/content";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ElementType;
}

interface FloatingNavbarProps {
  content: Record<string, NavItem>;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
  currentLang: Language;
}

export default function FloatingNavbar({
  content,
  setLang,
  currentLang,
}: FloatingNavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLangChange = (lang: Language) => {
    setLang(lang);
    setIsLangOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 mt-10">
      {/* Language Switcher */}
      <div className="relative">
        <button
          className="flex items-center gap-2 content-card px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={toggleLang}
        >
          <span>{currentLang === "id" ? "Indonesia" : "English"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isLangOpen && (
          <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleLangChange("id")}
            >
              Indonesia
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleLangChange("en")}
            >
              English
            </button>
          </div>
        )}
      </div>

      {/* Menu Button */}
      <div className="relative">
        <button
          className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition-all transform hover:scale-110"
          onClick={toggleMenu}
        >
          <Menu className="w-6 h-6" />
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1">
              {Object.entries(content).map(([key, { label, icon: Icon }]) => (
                <a
                  key={key}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href={`#${key}`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
