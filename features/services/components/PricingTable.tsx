"use client";

import Link from "next/link";
import React from "react";

import { FadeUp, MaterialIcon, SlideLeft } from "./animations";
import { ServicesContent } from "../types";

interface PricingTableProps {
  t: ServicesContent;
}

export function PricingTable({ t }: PricingTableProps) {
  const translatedPackages = t.pricing.packages;
  const otherServices = t.pricing.otherServices;

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950" id="harga">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideLeft className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
            {t.pricing.label}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
            {t.pricing.title}
          </h2>
          <p className="text-gray-600 text-sm dark:text-gray-400">
            {t.pricing.subtitle}
          </p>
          <div className="mt-6">
            <Link
              className="inline-flex items-center gap-2 bg-white border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-sky-500/10"
              href="/services/calculator"
            >
              <MaterialIcon className="text-lg" name="calculate" />
              Hitung Estimasi Custom
            </Link>
          </div>
        </SlideLeft>

        {/* Landing Page Packages */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
              <MaterialIcon className="text-sky-500 text-xl" name="web" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Landing Page
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Setup sekali bayar + Infra tahunan (server, domain, tools)
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {translatedPackages.map((pkg: any, idx: number) => (
            <FadeUp key={pkg.label} className="flex" delay={idx * 0.12}>
              <div
                className={`bg-white rounded-3xl p-6 lg:p-8 dark:bg-gray-900 ${
                  pkg.isPopular
                    ? "border-2 border-sky-500 shadow-xl hover:shadow-2xl transform xl:-translate-y-4 z-10 relative"
                    : "border border-gray-200 shadow-sm hover:shadow-xl dark:border-gray-700"
                } hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 left-0 -mt-5 flex justify-center">
                    <span className="bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {t.services.popularBadge}
                    </span>
                  </div>
                )}
                <h3
                  className={`text-lg font-bold text-gray-900 dark:text-white ${pkg.isPopular ? "mt-2" : ""}`}
                >
                  {pkg.label}
                </h3>
                <div className="mt-3 mb-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Setup (sekali bayar)
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                      {pkg.price}
                    </span>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <MaterialIcon className="text-sm text-sky-500" name="dns" />
                  <span>Infra: {pkg.infra}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
                  {pkg.fit}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.includes.map((item: any) => (
                    <li
                      key={item.text}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                    >
                      <MaterialIcon
                        className="text-sky-500 text-base mr-2 mt-0.5"
                        name={item.iconName}
                      />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a
                  className={`block w-full text-center font-semibold py-3 rounded-full transition-all text-sm mt-auto ${
                    pkg.isPopular
                      ? "bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30"
                      : "border-2 border-gray-200 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white text-gray-900 dark:text-white dark:border-gray-700"
                  }`}
                  href={pkg.waLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Pesan Paket Ini
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Layanan Lain — Konsultasi */}
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-3 mt-16 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <MaterialIcon
                className="text-purple-500 text-xl"
                name="dashboard_customize"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t.pricing.otherServicesHeading}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t.pricing.otherServicesSubtitle}
              </p>
            </div>
          </div>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6">
          {otherServices.map((service: any, sIdx: number) => {
            return (
              <FadeUp
                key={service.title}
                className="flex"
                delay={0.25 + sIdx * 0.05}
              >
                <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:shadow-gray-900/50">
                  <div
                    className={`bg-${service.color}-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform dark:bg-${service.color}-900/30`}
                  >
                    <MaterialIcon
                      className={`text-${service.color}-500 text-3xl`}
                      name={service.icon}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feat: string, fIdx: number) => (
                      <li
                        key={fIdx}
                        className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                      >
                        <MaterialIcon
                          className="text-green-500 text-base mr-2 mt-0.5"
                          name="check_circle"
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`block w-full text-center font-semibold py-3 rounded-full transition-all text-sm mt-auto border-2 border-gray-200 group-hover:border-${service.color}-500 group-hover:bg-${service.color}-500 group-hover:text-white text-gray-900 dark:text-white dark:border-gray-700`}
                    href={`https://wa.me/6282189642027?text=${encodeURIComponent(service.waMessage)}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {service.cta ?? "Konsultasi Gratis"}
                  </a>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.4}>
          <div className="mt-12 max-w-2xl mx-auto bg-amber-50 rounded-2xl border border-amber-200/60 p-6 shadow-sm dark:bg-amber-900/20 dark:border-amber-700/40">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center dark:bg-amber-900/30">
                <MaterialIcon className="text-amber-600 text-xl" name="info" />
              </div>
              <div className="space-y-1.5">
                <p className="text-sm text-amber-900 leading-relaxed dark:text-amber-200">
                  {t.pricing.infoSetup}
                </p>
                <p className="text-sm text-amber-700 leading-relaxed dark:text-amber-300">
                  {t.pricing.infoMaintenance}
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
