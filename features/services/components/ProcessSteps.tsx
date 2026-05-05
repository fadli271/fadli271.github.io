"use client";

import React from "react";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";
import { ServicesContent, ProcessStep } from "../types";
interface ProcessStepsProps {
  t: ServicesContent;
  items: ProcessStep[];
}

export function ProcessSteps({ t, items }: ProcessStepsProps) {
  return (
    <section
      className="py-24 bg-[#f8fafc] relative dark:bg-gray-950"
      id="langkah-mudah"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.processSteps.label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.processSteps.title}
          </h2>
          <p className="text-gray-600 text-lg dark:text-gray-400">
            {t.processSteps.subtitle}
          </p>
        </SlideLeft>
        <div className="relative grid md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-200 via-sky-500 to-blue-200 rounded-full opacity-30 z-0" />
          {items.map((step: any, idx: number) => (
            <FadeUp
              key={step.title}
              className="relative z-10 flex flex-col items-center text-center group"
              delay={idx * 0.15}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl border-2 border-blue-50 flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-300 dark:bg-gray-800 dark:border-blue-900">
                  <MaterialIcon
                    className={`text-4xl ${step.iconColor}`}
                    name={step.iconName}
                  />
                </div>
                <div
                  className={`absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full ${step.numberBg} text-white font-bold text-lg flex items-center justify-center shadow-lg border-4 border-white`}
                >
                  {idx + 1}
                </div>
                <div
                  className={`absolute inset-0 ${step.blurBg} rounded-3xl blur-xl transform scale-110 -z-10 opacity-50`}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed px-4 dark:text-gray-400">
                {step.description}
              </p>
            </FadeUp>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            className="inline-flex items-center bg-white border-2 border-gray-100 text-gray-700 px-10 py-5 rounded-full font-bold hover:border-sky-500 hover:text-sky-500 transition-all shadow-sm hover:shadow-xl dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300 dark:hover:border-sky-500 group"
            href="https://forms.gle/a1kGLvuSwCWBCamv6"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t.processSteps.formCta}
            <MaterialIcon
              className="ml-2 group-hover:translate-x-1 transition-transform"
              name="assignment"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
