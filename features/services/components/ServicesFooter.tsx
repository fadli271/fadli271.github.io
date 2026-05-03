"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MaterialIcon } from "./animations";

interface ServicesFooterProps {
  footerRightsText: string;
  t: any;
}

export function ServicesFooter({ footerRightsText, t }: ServicesFooterProps) {
  return (
    <footer
      aria-label="Footer"
      className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                alt="Fadli Dev Studio"
                className="h-10 w-10 rounded-lg object-contain"
                height={40}
                src="/brand.png"
                width={40}
              />
              <span className="text-xl font-bold tracking-tight">
                Fadli Dev Studio
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {t.footer.paragraph}
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: "facebook",
                  link: "https://www.facebook.com/fadli.dev.studio/",
                },
                {
                  icon: "instagram",
                  link: "https://www.instagram.com/fadli.dev.studio/",
                },
                { icon: "linkedin", link: "https://linkedin.com/in/mfadli27a" },
                { icon: "github", link: "https://github.com/fadli271" },
              ].map((social) => (
                <a
                  key={social.icon}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-all group"
                  href={social.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className={`fab fa-${social.icon} text-slate-400 group-hover:text-white`}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-sky-500">
              {t.nav.navServices}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-sky-500 transition-colors"
                  href="/services"
                >
                  Landing Page UMKM
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-sky-500 transition-colors"
                  href="/services"
                >
                  Website Company Profile
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-sky-500 transition-colors"
                  href="/services"
                >
                  Toko Online / Katalog Digital
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-sky-500 transition-colors"
                  href="/services"
                >
                  Sistem Operasional Custom
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-sky-500">
              Tautan Cepat
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link className="hover:text-sky-500 transition-colors" href="/">
                  Home / Portofolio
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-sky-500 transition-colors"
                  href="/services/calculator"
                >
                  Kalkulator Biaya Website
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-sky-500 transition-colors"
                  href="#faq-section"
                >
                  Paling Sering Ditanyakan
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-sky-500 transition-colors"
                  href="/services/services-data.ts"
                >
                  Layanan & Harga
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-sky-500">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MaterialIcon className="text-sky-500" name="mail" />
                <span>fadli.dev.studio27@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <MaterialIcon className="text-sky-500" name="phone" />
                <span>+62 821-8964-2027</span>
              </li>
              <li className="flex gap-3">
                <MaterialIcon className="text-sky-500" name="location_on" />
                <span>Palu, Sulawesi Tengah, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {footerRightsText}
          </p>
          <div className="flex gap-6">
            <Link
              className="hover:text-white transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
