"use client";

import React from "react";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";

import { ServicesContent, WhyChooseUsItem } from "../types";

interface WhyChooseUsProps {
  t: ServicesContent;
  items: WhyChooseUsItem[];
}

export function WhyChooseUs({ t, items }: WhyChooseUsProps) {
  return (
    <section
      className="py-24 bg-white relative dark:bg-gray-900"
      id="keunggulan"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.whyUs.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-600 text-lg dark:text-gray-400">
            {t.whyUs.subtitle}
          </p>
        </SlideLeft>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item: any, idx: number) => (
            <FadeUp key={item.title} delay={idx * 0.1}>
              <div className="group bg-gray-50 p-8 rounded-3xl hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-sky-500/20 h-full dark:bg-gray-900 dark:hover:shadow-gray-900/50">
                <div
                  className={`w-14 h-14 ${item.iconBgClass} dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 ${item.iconHoverBgClass} transition-colors ${item.iconTextClass}`}
                >
                  <MaterialIcon className="text-3xl" name={item.iconName} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
