"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

import {
  whatsappCta,
  services,
  processSteps,
  packages,
  capabilities,
  faqs,
  heroHooks,
  serviceNavLinks,
  whyMePoints,
  testimonials,
  appSystemEstimate,
  consultationForm,
  scopeTerms,
} from "@/app/content/services";

const containerClass = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export default function ServiceLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-slate-50 text-slate-900">
      <div className="aurora-background pointer-events-none opacity-20" />
      <nav className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur">
        <div
          className={`${containerClass} flex items-center justify-between py-4`}
        >
          <Link className="flex items-center gap-2" href="/">
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
              <Image
                alt="Fadli Dev Studio"
                className="object-contain"
                fill
                priority
                src="/brand.png"
              />
            </div>
            <span className="text-lg font-semibold text-slate-900">
              Fadli Dev Studio
            </span>
          </Link>
          <div className="hidden items-center gap-2 text-sm font-semibold text-slate-600 md:flex">
            {serviceNavLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-sky-600"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="rounded-full bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-600"
              href={whatsappCta}
              rel="noopener noreferrer"
              target="_blank"
            >
              Chat WA
            </a>
          </div>
          <button
            aria-expanded={menuOpen}
            className="inline-flex items-center rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
        {menuOpen ? (
          <div className="border-t border-white/60 bg-white px-4 py-4 text-sm text-slate-700 md:hidden">
            <div className="flex flex-col gap-3">
              {serviceNavLinks.map((link) => (
                <a
                  key={link.href}
                  className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-400 hover:text-sky-600"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="rounded-full bg-sky-500 px-4 py-2 text-center font-semibold text-white transition hover:bg-sky-600"
                href={whatsappCta}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                Chat WA
              </a>
            </div>
          </div>
        ) : null}
      </nav>
      <main className="relative z-10">
        <section
          className="relative overflow-hidden px-4 py-28 sm:px-6 sm:py-32"
          id="hero"
        >
          <div className="absolute inset-0 bg-white" />
          <div className={`${containerClass} relative`}>
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-6 text-left text-slate-900">
                  <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                    Website, sistem aplikasi, dan mobile app yang siap bantu
                    bisnis dapat lebih banyak chat, lead, dan booking.
                  </h1>
                  <p className="text-base leading-relaxed text-slate-600">
                    Fokusnya bukan sekadar desain, tapi alur sederhana yang
                    memudahkan calon pelanggan untuk chat, tanya, atau booking,
                    termasuk bila Anda butuh sistem aplikasi atau mobile app
                    sederhana untuk operasional.
                  </p>
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-start sm:gap-4">
                    <a
                      className="w-full rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-xl transition hover:bg-sky-600 sm:w-auto"
                      href={whatsappCta}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Konsultasi WhatsApp (Gratis)
                    </a>
                    <Link
                      className="w-full rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-500 sm:w-auto"
                      href="/#projects"
                    >
                      Lihat Portofolio
                    </Link>
                  </div>
                  <p className="mt-3 text-xs text-slate-500 sm:mt-4 sm:text-sm">
                    WhatsApp tetap jalur cepat (balasan di jam kerja biasanya di
                    bawah 2 jam).
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-6 text-left text-slate-700 shadow-2xl backdrop-blur sm:p-8">
                  <p className="text-base font-semibold text-slate-800">
                    Struktur biaya dan proses dibuat jelas dari awal supaya
                    proyek cepat jalan, revisi terkontrol, dan semua pihak tahu
                    apa yang dikerjakan.
                  </p>
                  <div className="space-y-3 text-sm sm:text-base">
                    {heroHooks.map((item, idx) => (
                      <motion.div
                        key={item}
                        className="flex gap-3"
                        initial={{ opacity: 0, scale: 0.9, y: 6 }}
                        transition={{
                          duration: 0.35,
                          delay: idx * 0.12,
                          type: "spring",
                          stiffness: 180,
                          damping: 18,
                        }}
                        viewport={{ once: true, amount: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-sky-500" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Preview Hasil
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr,0.8fr]">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Leads Mingguan</span>
                          <span className="font-semibold text-emerald-600">
                            +34%
                          </span>
                        </div>
                        <div className="flex h-16 items-end gap-1.5">
                          {[24, 30, 28, 36, 42, 48, 56].map((h) => (
                            <span
                              key={h}
                              className="w-full rounded-t bg-sky-500/80"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                        <p className="rounded-lg bg-white px-2 py-1">
                          Chat masuk:{" "}
                          <strong className="text-slate-900">72</strong>
                        </p>
                        <p className="rounded-lg bg-white px-2 py-1">
                          Booking call:{" "}
                          <strong className="text-slate-900">18</strong>
                        </p>
                        <p className="rounded-lg bg-white px-2 py-1">
                          Close rate:{" "}
                          <strong className="text-slate-900">25%</strong>
                        </p>
                      </div>
                    </div>

                    <figure className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                      <Image
                        alt="Contoh tampilan dashboard klien"
                        className="h-28 w-full object-cover"
                        height={2124}
                        loading="lazy"
                        src="/portfolio/project-monitoring-staf-1.png"
                        width={3740}
                      />
                      <figcaption className="px-3 py-2 text-[11px] text-slate-500">
                        Cuplikan UI proyek klien (disederhanakan)
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className={`${containerClass} py-4 sm:py-5`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium text-slate-600 sm:text-sm">
                Dipercaya owner UMKM dari berbagai kategori bisnis:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500 sm:text-xs">
                {["F&B", "Retail", "Jasa", "Edukasi", "Distribusi"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-white" id="scope-terms">
          <div className={containerClass}>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Ketentuan
                </p>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  {scopeTerms.heading}
                </h2>
                <p className="mt-4 text-base text-slate-600">
                  {scopeTerms.subheading}
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <article className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Yang termasuk / tidak termasuk
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {scopeTerms.includedBullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {scopeTerms.excludedBullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Skema pembayaran
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {scopeTerms.paymentBullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="capabilities">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Solusi Digital
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Paket layanan website, plus opsi sistem aplikasi & mobile app.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Mulai dari website yang cepat live sampai mini-site siap scale.
                Untuk sistem aplikasi atau mobile app, kita mulai dari sesi
                discovery dulu sebelum menyusun estimasi yang sesuai budget.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={cap.title}
                  className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xl sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <cap.icon className="h-8 w-8 text-sky-500" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className={containerClass}>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Pilihan Layanan
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Scope jelas, timeline jelas, dan bisa dieksekusi cepat.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Cocok untuk UMKM yang ingin hasil nyata tanpa pusing urusan
                teknis. Semua paket sudah dipetakan sesuai kebutuhan bisnis.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xl ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-2xl sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
                    Layanan {idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid items-center gap-6 md:grid-cols-[0.95fr,1.05fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Mini Case Study
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    Flow inquiry yang lebih rapi bantu tim respon lebih cepat.
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Fokus perbaikan: struktur konten lebih jelas, CTA lebih
                    terlihat, dan alur kontak dipersingkat agar calon pelanggan
                    tidak bingung saat mau tanya/booking.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>Rata-rata chat masuk jadi lebih terstruktur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>Tim admin lebih cepat tindak lanjuti lead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        Copy & layout lebih mudah dipahami user mobile
                      </span>
                    </li>
                  </ul>
                </div>

                <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                  <Image
                    alt="Contoh project landing page klien"
                    className="h-full w-full object-cover"
                    height={2150}
                    loading="lazy"
                    src="/portfolio/project-pos-1.png"
                    width={3772}
                  />
                  <figcaption className="px-4 py-2 text-xs text-slate-500">
                    Tampilan contoh proyek klien (gambar asli dari portofolio)
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-white" id="process">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Cara Kerja
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Simpel, transparan, dan gak pake ribet.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow">
                      {index + 1}
                    </span>
                    <step.icon className="h-5 w-5 text-sky-500" />
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Langkah {index + 1}
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section" id="pricing">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Investasi
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Harga transparan, khusus disusun untuk UMKM.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Untuk website, biaya dibagi 3: Setup (sekali bayar), Infra
                tahunan (domain + hosting), dan maintenance opsional. Untuk
                sistem aplikasi atau mobile app, estimasi dibuat terpisah
                setelah sesi discovery singkat.
              </p>
              <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/80 p-5 text-left text-sm text-slate-700 sm:text-base">
                <ul className="space-y-2">
                  <li>
                    <strong>Setup Website:</strong> perencanaan, desain, dan
                    implementasi sampai siap online (sekali bayar).
                  </li>
                  <li>
                    <strong>Infra Tahunan (Domain + Hosting):</strong> biaya
                    operasional tahunan agar website tetap aktif dan stabil.
                  </li>
                  <li>
                    <strong>Support & Maintenance:</strong> bantuan teknis awal;
                    maintenance rutin bersifat opsional sesuai kebutuhan.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.label}
                  className={`relative flex h-full flex-col rounded-3xl border p-5 shadow-xl sm:p-6 transition ${
                    pkg.highlighted
                      ? "border-sky-500 bg-white shadow-2xl ring-2 ring-sky-100"
                      : "border-slate-200 bg-white"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {pkg.highlighted && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-sky-600/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      Rekomendasi
                    </span>
                  )}
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    {pkg.label}
                  </h3>
                  <p className="mt-2 text-lg font-bold text-slate-800">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{pkg.fit}</p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-600">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                      pkg.highlighted
                        ? "bg-sky-600 text-white shadow-lg hover:bg-sky-700"
                        : "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                    }`}
                    href={whatsappCta}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pilih Paket Ini
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section bg-white" id="app-system-estimate">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                {appSystemEstimate.title}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Sistem aplikasi dan mobile app dihitung sesuai kebutuhan.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                {appSystemEstimate.subtitle}
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-slate-700 sm:text-base">
                {appSystemEstimate.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-slate-600">
                {appSystemEstimate.note}
              </p>
              <a
                className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                href={whatsappCta}
                rel="noopener noreferrer"
                target="_blank"
              >
                Konsultasi App/System
              </a>
            </div>
          </div>
        </section>

        <section className="page-section" id="consultation-form">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Registrasi Konsultasi
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                {consultationForm.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                {consultationForm.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
                  href={consultationForm.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {consultationForm.submitLabel}
                </a>
                <a
                  className="inline-flex items-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600"
                  href={whatsappCta}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tanya Cepat via WhatsApp
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                {consultationForm.hint}
              </p>
            </div>
          </div>
        </section>

        <section className="page-section" id="faq">
          <div className={`${containerClass} max-w-5xl`}>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Tanya Jawab
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Hal yang sering ditanyakan.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Masih bingung? Langsung chat WhatsApp saja, saya balas
                secepatnya di jam kerja.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition duration-200 hover:border-slate-300 open:border-sky-300"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 transition duration-200 group-open:text-sky-600">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section bg-white" id="why-me">
          <div className={`${containerClass} grid gap-10 md:grid-cols-2`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
                Kenapa Saya?
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Partner Digital yang Mengerti Bisnis Anda.
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-600">
                {whyMePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <point.icon className="h-5 w-5 text-sky-500" />
                    <p>{point.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p className="text-lg font-semibold text-slate-800">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-4 text-sm text-slate-500">
                    — {testimonial.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section" id="cta">
          <div className={`${containerClass}`}>
            <motion.div
              className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-10 sm:px-8 sm:py-12 text-center shadow-2xl ring-1 ring-slate-100"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Mulai Sekarang
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Pilih paket yang paling pas, lalu kita mulai.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Kirim kebutuhan Anda via WhatsApp, saya bantu pilih paket
                Starter/Growth/Scale dan estimasi pengerjaan yang realistis.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm sm:gap-6">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-sky-600"
                  href={whatsappCta}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Chat WhatsApp Sekarang
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-500"
                  href={consultationForm.actionUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Isi Google Form
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
