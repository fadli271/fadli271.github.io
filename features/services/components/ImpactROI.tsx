"use client";

import React from "react";

import { ServicesContent } from "../types";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";

import { Language } from "@/types";

interface ImpactROIProps {
  t: ServicesContent;
  lang: Language;
}

export function ImpactROI({ t, lang }: ImpactROIProps) {
  const items = t.impactROI.items;

  return (
    <section className="py-24 bg-white relative dark:bg-gray-900" id="roi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.impactROI.label}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.impactROI.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.impactROI.subtitle}
          </p>
        </SlideLeft>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {items.map((item: any, idx: number) => (
            <FadeUp key={`roi-${idx}`} delay={idx * 0.15}>
              <div className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative z-10">
                  {/* Left: Problem (Before) */}
                  <div className="md:col-span-4 p-6 sm:p-8 bg-gray-50/50 dark:bg-gray-800/20 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute -top-10 -right-10 opacity-[0.03] transform group-hover:-rotate-12 transition-transform duration-700">
                      <MaterialIcon
                        className="text-9xl text-gray-900 dark:text-white"
                        name="hourglass_empty"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gray-200/50 dark:bg-gray-800 flex items-center justify-center">
                        <MaterialIcon
                          className="text-gray-500 dark:text-gray-400 text-sm"
                          name={item.icon}
                        />
                      </div>
                      <h4 className="text-[11px] font-bold tracking-widest text-red-500 uppercase">
                        {t.impactROI.labelProblem ??
                          (lang === "id" ? "Masalah" : "The Problem")}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative z-10">
                      {item.sebelum}
                    </p>
                  </div>

                  {/* Right: Solution & Impact (After) */}
                  <div className="md:col-span-8 p-8 flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-gray-900 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

                    <div className="flex-1">
                      <h4 className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-sky-500 uppercase mb-3">
                        {t.impactROI.labelSolution ??
                          (lang === "id" ? "Solusi Kami" : "Our Solution")}
                        <MaterialIcon
                          className="text-xs"
                          name="arrow_forward"
                        />
                      </h4>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.klien}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.sesudah}
                      </p>
                    </div>

                    {/* ROI Big Metric glowing card */}
                    <div className="w-full md:w-48 flex-shrink-0 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-2xl border border-sky-100/50 dark:border-gray-700 flex flex-col items-center justify-center text-center group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-sky-400/20 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40 mix-blend-overlay" />
                      <span className="relative z-10 text-3xl md:text-4xl font-black bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent mb-1">
                        {item.roi}
                      </span>
                      <span className="relative z-10 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">
                        {item.roiLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
