"use client";

import React from "react";

import { ServicesContent } from "../types";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";
interface FAQSectionProps {
  t: ServicesContent;
}

export function FAQSection({ t }: FAQSectionProps) {
  const items = t.faq.items;

  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-16">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.faq.label}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.faq.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.faq.subtitle}
          </p>
        </SlideLeft>
        <div className="space-y-4">
          {items.map((faq: any, idx: number) => {
            return (
              <FadeUp key={faq.question} delay={idx * 0.08}>
                <details className="group bg-gray-50 border border-transparent hover:border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-700">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-900 dark:text-white">
                    <span className="text-lg">{faq.question}</span>
                    <MaterialIcon
                      className="transform group-open:rotate-180 transition-transform duration-300 text-gray-400"
                      name="expand_more"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 dark:text-gray-400 dark:border-gray-700">
                    {faq.answer}
                  </div>
                </details>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
