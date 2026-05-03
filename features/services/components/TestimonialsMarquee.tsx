"use client";

import React from "react";

import { MaterialIcon, SlideLeft } from "./animations";
interface TestimonialsMarqueeProps {
  t: any;
}

export function TestimonialsMarquee({ t }: TestimonialsMarqueeProps) {
  const items = t.testimonials.items;

  return (
    <section
      className="py-24 bg-white overflow-hidden dark:bg-gray-950"
      id="testimoni"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.testimonialsLabel ?? "Kisah Sukses"}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.testimonialsTitle ?? "Dipercaya Berbagai UMKM"}
          </h2>
        </SlideLeft>
      </div>
      {/* Marquee auto-scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-gray-950" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-gray-950" />
        <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] w-max gap-6 px-6">
          {[...items, ...items].map((testi: any, idx: number) => (
            <div
              key={`${testi.authorName}-${idx}`}
              className="bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-gray-100 flex flex-col w-[320px] flex-shrink-0 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-900 dark:hover:shadow-gray-900/50"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-4 dark:border-gray-700">
                <div
                  className={`${testi.iconBgClass} p-2 rounded-lg dark:bg-gray-800`}
                >
                  <MaterialIcon
                    className={testi.iconColorClass}
                    name={testi.iconName}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm dark:text-white">
                    {testi.businessName}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testi.businessType}
                  </p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {Array.from({ length: Math.floor(testi.rating) }).map(
                  (_, i) => (
                    <MaterialIcon
                      key={i}
                      filled
                      className="text-sm"
                      name="star"
                    />
                  ),
                )}
                {testi.rating % 1 !== 0 && (
                  <MaterialIcon filled className="text-sm" name="star_half" />
                )}
              </div>
              <p className="text-sm text-gray-600 italic mb-6 flex-grow dark:text-gray-400">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3 border-2 border-white shadow-sm text-sm font-bold text-sky-600 dark:bg-sky-900 dark:text-sky-300">
                  {testi.authorInitials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {testi.authorName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testi.authorRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
