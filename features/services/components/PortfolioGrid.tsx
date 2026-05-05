"use client";

import Image from "next/image";
import React from "react";

import { PortfolioItem, ServicesContent } from "../types";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";

interface PortfolioGridProps {
  t: ServicesContent;
  portfolioCategoryOptions: { value: string; label: string }[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  filteredPortfolio: { project: PortfolioItem; idx: number }[];
}

export function PortfolioGrid({
  t,
  portfolioCategoryOptions,
  activeCategory,
  setActiveCategory,
  filteredPortfolio,
}: PortfolioGridProps) {
  return (
    <section
      className="py-24 bg-white relative dark:bg-gray-900"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.portfolio.label}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.portfolio.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.portfolio.subtitle}
          </p>
        </SlideLeft>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioCategoryOptions.map((opt) => (
            <button
              key={opt.value}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-y-1 ${
                activeCategory === opt.value
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-white border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map(({ project, idx }) => {
            const CardWrapper = project.link ? "a" : "div";
            const cardProps = project.link
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <FadeUp key={project.title} delay={idx * 0.1}>
                <CardWrapper
                  {...(cardProps as any)}
                  className="group portfolio-card bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full block dark:bg-gray-900 dark:border-gray-800 dark:hover:shadow-gray-900/50"
                >
                  <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden dark:bg-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-center p-6 overlay translate-y-4 group-hover:translate-y-0">
                      <span className="text-white font-bold text-2xl mb-2">
                        {project.stat}
                      </span>
                      <p className="text-gray-200 text-sm mb-4">
                        {project.statSub}
                      </p>
                      {project.link && (
                        <span className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                          {t.portfolio.demoLabel}
                        </span>
                      )}
                    </div>
                    <Image
                      fill
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      src={project.image}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span
                          className={`text-xs font-semibold ${project.categoryColor} ${project.categoryBg} px-2 py-1 rounded dark:bg-gray-800`}
                        >
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                      <MaterialIcon
                        className="text-gray-400 group-hover:text-sky-500 transition-colors dark:text-gray-500"
                        name={project.link ? "arrow_outward" : "image"}
                      />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </CardWrapper>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
