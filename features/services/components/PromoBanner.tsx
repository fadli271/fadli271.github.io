"use client";

import React from "react";

import { MaterialIcon, ScaleIn } from "./animations";

import { buildWhatsAppLink } from "@/lib/contact-info";

interface PromoBannerProps {
  t: any;
}

export function PromoBanner({ t }: PromoBannerProps) {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleIn>
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0f172a] to-blue-900 rounded-[2rem] shadow-2xl border-2 border-amber-500/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px] -ml-16 -mb-16" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block bg-amber-500/20 text-amber-500 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6 border border-amber-500/30 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                  {t.promo.badge}
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Bonus Spesial:{" "}
                  <span className="text-amber-500">{t.promo.headline}</span>
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t.promo.subtext}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                  <a
                    className="bg-amber-500 hover:bg-yellow-500 text-slate-900 px-8 py-3.5 rounded-full font-bold shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    href={buildWhatsAppLink(
                      "Halo Fadli, saya ingin klaim promo Gratis Maintenance 3 Bulan!",
                    )}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t.promo.cta}
                    <MaterialIcon name="arrow_forward" />
                  </a>
                  <span className="text-xs text-blue-200 bg-white/5 px-3 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    {t.promo.urgency}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl transform scale-110" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-full border border-white/10 w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                  <MaterialIcon
                    filled
                    className="text-amber-500 text-[9rem] lg:text-[13rem] drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                    name="security"
                  />
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-bounce dark:bg-gray-800 dark:border-gray-700">
                    <MaterialIcon
                      className="text-green-500 text-3xl"
                      name="verified_user"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
