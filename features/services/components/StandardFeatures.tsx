"use client";

import React from "react";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";
interface StandardFeaturesProps {
  t: any;
}

export function StandardFeatures({ t }: StandardFeaturesProps) {
  const items = t.valueAdded.items;

  return (
    <section className="py-16 bg-gray-100 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-12">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.standardFeaturesLabel ?? "Value Added"}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            {t.standardFeaturesTitle ?? "Fitur Standar di Semua Paket"}
          </h2>
          <p className="text-gray-600 mt-2 text-sm dark:text-gray-400">
            {t.standardFeaturesSubtitle ??
              "Tidak perlu bayar lebih. Fitur penting ini sudah otomatis Anda dapatkan."}
          </p>
        </SlideLeft>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feat: any, idx: number) => {
            return (
              <FadeUp key={feat.title} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start border border-gray-100 h-full dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-gray-900/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-sky-500 dark:bg-sky-900/20">
                    <MaterialIcon className="text-2xl" name={feat.iconName} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 dark:text-white">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed dark:text-gray-400">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
