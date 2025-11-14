"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Rocket,
  PenSquare,
  Code2,
  LineChart,
  ShieldCheck,
  Clock4,
  LaptopMinimal,
  MessagesSquare,
  Smartphone,
  ServerCog,
  LayoutTemplate,
} from "lucide-react";

import { CONTACT_INFO, buildWhatsAppLink } from "@/lib/contact-info";

const whatsappCta = buildWhatsAppLink(
  "Halo Fadli, saya tertarik memesan landing page / web.",
);

const services = [
  {
    title: "Sistem & Dashboard Operasional",
    description:
      "Web app kustom untuk katalog internal, modul approval, atau dashboard monitoring yang terhubung ke API/DB existing.",
    deliverables: [
      "Rancangan arsitektur modul & roles",
      "Integrasi API / DB (REST, Supabase, Sheet, dsb.)",
      "Monitoring + dokumentasi hand-off",
    ],
  },
  {
    title: "Mobile Web / PWA Product",
    description:
      "Mobile-first experience (PWA) untuk validasi ide, booking, atau customer portal tanpa harus bikin native app dulu.",
    deliverables: [
      "Flow mobile, state, dan offline caching ringan",
      "Notifikasi email/WA + tracking event",
      "Optimasi lighthouse & deploy ke store web",
    ],
  },
  {
    title: "Landing Page Konversi",
    description:
      "Halaman kampanye/produk yang diselaraskan dengan funnel marketing dan siap tracking.",
    deliverables: [
      "Riset singkat persona & USP",
      "Desain responsif + komponen reusable",
      "Integrasi formulir/CRM/WhatsApp + analytics",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "Bahas tujuan bisnis, target user, dan konten yang sudah tersedia. 30–45 menit via Zoom/WA Call.",
    icon: MessagesSquare,
  },
  {
    title: "Blueprint & Copy",
    description:
      "Susun struktur halaman + copy primer agar pesan jelas. Kamu review sebelum eksekusi.",
    icon: PenSquare,
  },
  {
    title: "Design & Build",
    description:
      "Proses desain langsung diterjemahkan ke kode (Next.js + Tailwind). Update progress 2x seminggu.",
    icon: Code2,
  },
  {
    title: "Launch & Hand-off",
    description:
      "Optimasi kecepatan, setup domain, analytics, lalu serah terima + video walkthrough.",
    icon: Rocket,
  },
];

const packages = [
  {
    label: "Starter Launch",
    price: "Mulai 3,5 Juta",
    fit: "Landing page 1 section panjang atau microsite promosi.",
    includes: [
      "Riset ringan + wireframe",
      "1 halaman responsif",
      "Integrasi CTA (WhatsApp/Form)",
      "Go-live 5–7 hari kerja",
    ],
  },
  {
    label: "Growth Presence",
    price: "Mulai 6,5 Juta",
    fit: "Company profile 3–5 section + katalog layanan/produk.",
    includes: [
      "Copywriting kolaboratif",
      "3–5 section dinamis",
      "Integrasi CMS ringan / data JSON",
      "Optimasi SEO dasar",
    ],
    highlighted: true,
  },
  {
    label: "Product Sprint",
    price: "Mulai 12 Juta",
    fit: "MVP mini app atau dashboard internal.",
    includes: [
      "Desain alur + prototipe",
      "Fitur autentikasi dasar",
      "Integrasi API/DB ringan",
      "Support pasca launch 2 minggu",
    ],
  },
];

const capabilities = [
  {
    title: "Sistem web operasional",
    description:
      "Dashboard internal, katalog, portal karyawan, hingga workflow approval yang aman berbasis Next.js/Laravel.",
    icon: ServerCog,
  },
  {
    title: "Mobile responsive / PWA",
    description:
      "Pengalaman mobile-first atau PWA ringan untuk validasi ide, booking, maupun customer portal tanpa native app.",
    icon: Smartphone,
  },
  {
    title: "Landing marketing & kampanye",
    description:
      "Sales page, waitlist, dan pre-order dengan copywriting, CTA, serta integrasi tracking yang nyambung ke sistem.",
    icon: LayoutTemplate,
  },
];

const faqs = [
  {
    question: "Berapa lama pengerjaan sistem atau landing page?",
    answer:
      "Landing page biasanya 5–7 hari kerja. Sistem internal / mobile web ringan rata-rata 2–4 minggu tergantung jumlah modul. Timeline lengkap akan dibagikan setelah sesi discovery.",
  },
  {
    question: "Teknologi apa yang digunakan?",
    answer:
      "Stack utama: Next.js/Tailwind untuk frontend, Node/Laravel untuk backend, database Supabase/Postgres/MySQL sesuai kebutuhan. Integrasi ke API yang sudah ada atau sheet juga bisa.",
  },
  {
    question: "Apakah dapat bantuan maintenance setelah go-live?",
    answer:
      "Setiap paket sudah termasuk support pasca rilis (7–14 hari). Untuk maintenance lanjutan bisa dibuat retainer atau paket jam kerja sesuai kebutuhan tim kamu.",
  },
  {
    question: "Bagaimana jika konten/copy belum siap?",
    answer:
      "Saya akan bantu menyusun struktur copy dasar (headline, USP, CTA). Kamu cukup memberi poin penting, sisanya akan saya rapikan dan minta persetujuan sebelum implementasi.",
  },
  {
    question: "Metode pembayaran dan kontrak seperti apa?",
    answer:
      "Umumnya 50% DP, 50% setelah hand-off. Untuk proyek perusahaan bisa menggunakan PO/invoice resmi dengan termin sesuai kebijakanmu.",
  },
];

const heroHooks = [
  "Blueprint + copy rapih < 48 jam, jadi tim marketing langsung punya bahan buat gas funnel.",
  "Next.js/Tailwind build + integrasi API/DB bikin modul operasional & landing funnel tinggal plug ke stack kamu.",
  "Deploy, monitoring, dan support pasca launch di-handle, kamu fokus ke closing leads.",
];

const containerClass = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const serviceNavLinks = [
  { label: "Fokus", href: "#hero" },
  { label: "Capability", href: "#capabilities" },
  { label: "Layanan", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

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
                    Fokus ke storytelling, integrasi, dan experience industrial,
                    biar klien kamu ngerasa pegang produk startup tier-A.
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
                    Support pasca rilis bikin tim kamu tinggal lanjut eksekusi
                    tanpa mikirin teknis.
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
                Apa yang bisa dibangun
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Dari landing ringan sampai sistem internal—semuanya
                mobile-first.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Fokusku bukan cuma tampilannya, tapi alur bisnisnya: konten,
                data, sampai cara tim kamu memeliharanya.
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
                Layanan utama
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Semua paket fokus ke storytelling, kecepatan, dan hasil terukur.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Framework Next.js + Tailwind + best practice SEO untuk performa
                tinggi dan mudah di-scale.
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
                Cara kerja
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Kolaborasi rapih, transparan, dan bergerak cepat.
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
                      Tahap {index + 1}
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
                Paket & estimasi
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Investasi fleksibel sesuai kebutuhan.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Semua paket sudah termasuk deployment (Vercel/Cloud), optimasi
                performa, dan dukungan pasca rilis 7 hari.
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
                      Terpopuler
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
                    Diskusi paket ini
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
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Pertanyaan yang paling sering muncul.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Kalau masih ada yang kurang jelas, tinggal hubungi lewat WA atau
                email—aku jawab maksimal 24 jam.
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
                Kenapa partner?
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Bukan sekadar coder—aku bantu pikirin strategi konten &
                konversi.
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-sky-500" />
                  <p>
                    Pengalaman bantu UMKM, SaaS, hingga tim marketing—paham
                    kebutuhan go-to-market dan keterbatasan resource.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <LaptopMinimal className="h-5 w-5 text-sky-500" />
                  <p>
                    Stack modern (Next.js, Tailwind, HeroUI) dengan pipeline
                    deploy otomatis, sehingga iterasi jadi cepat.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <LineChart className="h-5 w-5 text-sky-500" />
                  <p>
                    Obses terhadap metrik: CTR, leads, engagement. Setiap proyek
                    disertai setup analytics dasar.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Clock4 className="h-5 w-5 text-sky-500" />
                  <p>
                    Timeline transparan via Notion/WhatsApp dengan update
                    minimal 2x seminggu.
                  </p>
                </li>
              </ul>
            </div>
            <div className="grid gap-6 rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
              <motion.div
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="text-lg font-semibold text-slate-800">
                  “Landing page kampanye kita kelar 6 hari dan langsung bawa
                  300+ leads. Copywriting-nya relate, dev-nya rapi.”
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  — Nadya, Growth Lead komunitas edukasi
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="text-lg font-semibold text-slate-800">
                  “Fadli bantu translate ide bisnis jadi prototipe dashboard
                  buat investor. Presentasi jadi jauh lebih meyakinkan.”
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  — Raka, Founder logistik B2B
                </p>
              </motion.div>
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
                Siap beraksi
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Kirim ide, dapatkan blueprint + estimasi dalam 24 jam.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Hubungi langsung via WA/Email. Ceritakan tujuan, deadline, dan
                link referensi jika ada. Aku balas maksimal sehari dengan opsi
                solusi + timeline.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                  href={whatsappCta}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Konsultasi via WhatsApp
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-500"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  Kirim Brief via Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
