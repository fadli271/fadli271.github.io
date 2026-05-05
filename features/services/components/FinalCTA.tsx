"use client";

import React from "react";

import { ServicesContent } from "../types";

import { MaterialIcon, ScaleIn } from "./animations";

import { buildWhatsAppLink } from "@/lib/contact-info";

interface FinalCTAProps {
  t: ServicesContent;
}

export function FinalCTA({ t }: FinalCTAProps) {
  return (
    <section className="py-20 bg-[#f8fafc] dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleIn>
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl border border-blue-800/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 font-bold tracking-wider text-xs uppercase mb-6 border border-blue-500/30">
                {t.cta.label}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t.cta.titleLine1}
                <br />
                {t.cta.titleLine2}
              </h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                {t.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  href={buildWhatsAppLink(
                    "Halo Fadli, saya ingin konsultasi gratis untuk bisnis saya.",
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MaterialIcon name="chat" />
                  {t.cta.primary}
                </a>
                <a
                  className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  href="https://forms.gle/a1kGLvuSwCWBCamv6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MaterialIcon name="assignment" />
                  {t.cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
