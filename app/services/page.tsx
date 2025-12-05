"use client";

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
} from "@/app/content/services";
import { CONTACT_INFO } from "@/lib/contact-info";

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
          <Link className="text-lg font-semibold text-slate-900" href="/">
            Fadli Dev Studio
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
                    Bikin website & sistem langsung jadi, ga pake ribet.
                  </h1>
                  <p className="text-base text-slate-600">
                    Fokus ke solusi bisnis, bukan cuma kode. Saya bantu Anda
                    punya website yang profesional dan sistem yang bikin kerjaan
                    lebih enteng.
                  </p>
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a
                      className="w-full rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-xl transition hover:bg-sky-600 sm:w-auto"
                      href={whatsappCta}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Konsultasi via WhatsApp
                    </a>
                    <Link
                      className="w-full rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-500 sm:w-auto"
                      href="/#projects"
                    >
                      Lihat Portofolio
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-6 text-left text-slate-700 shadow-2xl backdrop-blur">
                  <p className="text-base font-semibold text-slate-800">
                    Dukungan penuh setelah website jadi. Tim Anda tinggal pakai,
                    gak perlu pusing urusan teknis.
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
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="page-section" id="capabilities">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Solusi Digital
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Dari website sederhana sampai sistem kantor yang kompleks.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Saya bantu bangun fondasi digital bisnis Anda. Bukan cuma soal
                tampilan, tapi gimana caranya bisnis jadi lebih efisien dan
                untung.
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
                Paket lengkap, terima beres, dan bergaransi.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Dibangun dengan teknologi modern (Next.js) biar website Anda
                cepat, aman, dan mudah ditemukan di Google (SEO Friendly).
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-slate-100 sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-inner"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow">
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
                Harga transparan, sesuaikan dengan budget.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Semua paket sudah termasuk hosting, domain, dan garansi support.
                Gak ada biaya tersembunyi.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.label}
                  className={`flex h-full flex-col rounded-3xl border p-5 shadow-xl sm:p-6 ${
                    pkg.highlighted
                      ? "border-sky-400 bg-white"
                      : "border-slate-200 bg-white"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {pkg.highlighted && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      Paling Laris
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
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-slate-900 px-4 py-2 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
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
                Masih bingung? Langsung chat WA aja, saya balas secepatnya.
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
              className="mx-auto max-w-4xl rounded-3xl bg-white px-8 py-12 text-center shadow-2xl ring-1 ring-slate-100"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Mulai Sekarang
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Konsultasi Gratis, Tanpa Risiko.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Ceritakan kebutuhan bisnis Anda lewat WhatsApp. Saya akan
                berikan solusi dan estimasi biaya dalam 24 jam.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                  href={whatsappCta}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Chat WhatsApp Sekarang
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-500"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  Kirim Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
