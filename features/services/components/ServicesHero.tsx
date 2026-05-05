"use client";

import Link from "next/link";
import React from "react";

import { ServicesContent } from "../types";

import { MaterialIcon } from "./animations";

import { Language } from "@/types";
interface ServicesHeroProps {
  lang: Language;
  t: ServicesContent;
  heroTrustBadgesList: string[];
  waLink: string;
}

export function ServicesHero({
  lang,
  t,
  heroTrustBadgesList,
  waLink,
}: ServicesHeroProps) {
  return (
    <section
      className="relative pt-20 pb-32 overflow-hidden bg-pattern dark:bg-gray-950"
      id="intro"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-950 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-sky-500 text-xs font-semibold mb-6 border border-blue-100 dark:bg-slate-800 dark:text-sky-300 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-sky-500 mr-2 animate-pulse" />
              {t.hero.heroBadge}
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 dark:text-white">
              {t.hero.heroTitle1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600">
                {t.hero.heroTitle2}
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 dark:text-gray-300">
              {t.hero.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-sky-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                href="/services/calculator"
              >
                <MaterialIcon
                  className="text-lg group-hover:rotate-12 transition-transform"
                  name="calculate"
                />
                {lang === "id"
                  ? "Hitung Estimasi Biaya"
                  : "Calculate My Project"}
              </Link>
              <a
                className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 flex items-center justify-center gap-2"
                href={waLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MaterialIcon className="text-lg text-green-500" name="chat" />
                {t.hero.heroCta}
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm dark:text-gray-400">
              {heroTrustBadgesList.map((badgeText) => (
                <div key={badgeText} className="flex items-center gap-1">
                  <MaterialIcon
                    filled
                    className="text-green-500"
                    name="verified"
                  />
                  <span>{badgeText}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right mockup card */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-sky-200 dark:from-blue-900/40 dark:to-sky-900/40 rounded-full blur-3xl opacity-50 transform rotate-12 animate-pulse" />
            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
              <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden dark:bg-gray-800 dark:border-gray-800">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MaterialIcon className="text-9xl" name="rocket_launch" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl dark:bg-sky-900/30">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 dark:bg-sky-900/40">
                      <MaterialIcon className="text-sky-500" name="analytics" />
                    </div>
                    <div className="h-2 w-16 bg-blue-200 rounded mb-2" />
                    <div className="h-2 w-10 bg-blue-200 rounded" />
                  </div>
                  <div className="bg-green-50 p-4 rounded-2xl dark:bg-green-900/30">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3 dark:bg-green-900/50">
                      <MaterialIcon
                        className="text-green-600"
                        name="payments"
                      />
                    </div>
                    <div className="h-2 w-16 bg-green-200 rounded mb-2" />
                    <div className="h-2 w-10 bg-green-200 rounded" />
                  </div>
                  <div className="col-span-2 bg-gray-50 p-4 rounded-2xl flex items-center justify-between dark:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center dark:bg-orange-900/30">
                        <MaterialIcon
                          className="text-orange-500"
                          name="storefront"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Toko Online</div>
                        <div className="text-xs text-green-500 flex items-center mt-1">
                          <MaterialIcon
                            className="text-[10px] mr-0.5"
                            name="trending_up"
                          />
                          +125% Traffic
                        </div>
                      </div>
                    </div>
                    <div className="bg-sky-500 text-white text-xs px-3 py-1 rounded-full">
                      Active
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Monthly Growth
                    </span>
                    <span className="text-sm font-bold text-sky-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-800">
                    <div
                      className="bg-sky-500 h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 top-10 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-[float_4s_ease-in-out_infinite_1s] dark:bg-gray-800 dark:border-gray-800">
                <MaterialIcon
                  className="text-yellow-500 text-3xl"
                  name="emoji_events"
                />
              </div>
              <div className="absolute -left-6 bottom-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-[float_5s_ease-in-out_infinite_0.5s] dark:bg-gray-800 dark:border-gray-800">
                <MaterialIcon
                  className="text-purple-500 text-3xl"
                  name="query_stats"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
