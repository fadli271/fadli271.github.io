"use client";

import React from "react";

import { ServiceItem, ServicesContent } from "../types";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";
interface ServicesListProps {
  t: ServicesContent;
  items: ServiceItem[];
}

export function ServicesList({ t, items }: ServicesListProps) {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.services.label}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.services.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.services.subtitle}
          </p>
        </SlideLeft>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((service: any, idx: number) => (
            <FadeUp key={service.title} delay={idx * 0.12}>
              <div
                className={`bg-white rounded-3xl p-8 ${
                  service.isPopular
                    ? "border-2 border-sky-500/20 relative overflow-hidden transform md:-translate-y-4 dark:bg-gray-900 dark:border-gray-700"
                    : "border border-gray-100 dark:bg-gray-900 dark:border-gray-700"
                } hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer dark:bg-gray-800 dark:border-gray-800 dark:hover:shadow-gray-900/50`}
              >
                {service.isPopular && (
                  <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                    {t.services.popularBadge}
                  </div>
                )}
                <div
                  className={`${service.iconBgClass} dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <MaterialIcon
                    className="text-sky-500 text-3xl"
                    name={service.iconName}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition-colors dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[60px] dark:text-gray-400">
                  {service.description}
                </p>
                <ul className="space-y-3 border-t border-gray-100 pt-6 dark:border-gray-800">
                  {service.features.map((feat: string, featIdx: number) => (
                    <li
                      key={`${feat}-${featIdx}`}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                    >
                      <MaterialIcon
                        className="text-green-500 text-lg mr-2"
                        name="check_circle"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
