"use client";

import React, { useState, useCallback } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { trackEvent } from "@/lib/gtag";

/* === Constants === */
const WHATSAPP_INFO = {
  label: "Konsultasi WhatsApp",
  href: "https://api.whatsapp.com/send/?phone=6282253596399&text=Hallo+Jago+Compro%2C+saya+mau+pesan+desain+company+profile&type=phone_number&app_absent=0",
};

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Paket Harga", href: "#prices" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Kontak", href: "#contact" },
];

/* === Main Component === */
export const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link aria-label="Beranda JagoCompro" href="/">
              <NextImage
                priority
                alt="Logo JagoCompro"
                height={40}
                src="/logo-jago-compro.svg"
                width={140}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <ul className="flex space-x-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    aria-label={item.label}
                    className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    href={item.href}
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center">
            {/* WhatsApp CTA (Desktop only) */}
            <div className="hidden lg:flex flex-shrink-0">
              <a
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                href={WHATSAPP_INFO.href}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() =>
                  trackEvent("click_whatsapp", {
                    category: "engagement",
                    label: "navbar_whatsapp_button",
                    fbEventName: "Lead",
                    fbParams: { source: "navbar" },
                  })
                }
              >
                {WHATSAPP_INFO.label}
              </a>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="flex sm:hidden ml-4">
              <button
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
                type="button"
                onClick={handleMenuToggle}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            animate={{ opacity: 1, y: 0 }}
            className="sm:hidden bg-slate-900 border-t border-slate-800"
            exit={{ opacity: 0, y: -10 }}
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.3,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <ul className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    aria-label={item.label}
                    className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                    href={item.href}
                    title={item.label}
                    onClick={handleCloseMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  aria-label={WHATSAPP_INFO.label}
                  className="mt-3 w-full block text-center bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-4 py-2 rounded-md transition-colors"
                  href={WHATSAPP_INFO.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={WHATSAPP_INFO.label}
                  onClick={() =>
                    trackEvent("click_whatsapp", {
                      category: "engagement",
                      label: "navbar_whatsapp_button",
                      fbEventName: "Lead",
                      fbParams: { source: "navbar" },
                    })
                  }
                >
                  {WHATSAPP_INFO.label}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
