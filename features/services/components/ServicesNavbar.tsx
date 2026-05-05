"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { MaterialIcon } from "./animations";

import { Language } from "@/types";
interface ServicesNavbarProps {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  navLabels: Record<string, string>;
  scaleX: MotionValue<number>;
  navLinks: { href: string; label: string }[];
  waLink: string;
}

export function ServicesNavbar({
  lang,
  setLang,
  darkMode,
  toggleDarkMode,
  activeSection,
  navLabels,
  scaleX,
  navLinks,
  waLink,
}: ServicesNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg shadow-black/[0.04] transition-all duration-300 dark:bg-gray-900/95 dark:border-gray-800"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link className="flex items-center gap-3 group" href="/">
              <Image
                alt="Fadli Dev Studio"
                className="h-12 w-12 rounded-xl object-contain shadow-md shadow-sky-500/20 ring-1 ring-gray-100"
                height={48}
                src="/brand.png"
                width={48}
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight dark:text-white">
                Fadli Dev Studio
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === link.href
                    ? "text-sky-500"
                    : "text-gray-600 hover:text-sky-500 dark:text-gray-300"
                }`}
                href={link.href}
              >
                {navLabels[link.href] ?? link.label}
                {activeSection === link.href && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                    layoutId="activeNav"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}
            {/* Dark mode toggle */}
            <button
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleDarkMode}
            >
              <MaterialIcon
                className="text-lg"
                name={darkMode ? "light_mode" : "dark_mode"}
              />
            </button>
            {/* Language toggle */}
            <button
              aria-label="Toggle language"
              className="px-2.5 py-1 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-700 hover:border-sky-500 hover:text-sky-500 transition-colors text-gray-600 dark:text-gray-300"
              onClick={() => setLang((l) => (l === "id" ? "en" : "id"))}
            >
              {lang === "id" ? "EN" : "ID"}
            </button>
            <a
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transform hover:-translate-y-0.5"
              href={waLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {navLabels["#chat"] ?? "Chat WA"}
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MaterialIcon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white dark:bg-gray-900 px-4 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`text-sm font-medium py-2 ${
                  activeSection === link.href
                    ? "text-sky-500 font-bold"
                    : "text-gray-700 hover:text-sky-500 dark:text-gray-300"
                }`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {navLabels[link.href] ?? link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
              <button
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 py-2"
                onClick={toggleDarkMode}
              >
                <MaterialIcon
                  className="text-lg"
                  name={darkMode ? "light_mode" : "dark_mode"}
                />
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <button
                className="px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                onClick={() => setLang((l) => (l === "id" ? "en" : "id"))}
              >
                {lang === "id" ? "EN" : "ID"}
              </button>
            </div>
            <a
              className="bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
              href={waLink}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setMenuOpen(false)}
            >
              {navLabels["#chat"] ?? "Chat WA"}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
