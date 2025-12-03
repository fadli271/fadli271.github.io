import {
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

import { buildWhatsAppLink } from "@/lib/contact-info";

export const whatsappCta = buildWhatsAppLink(
  "Halo Fadli, saya tertarik memesan landing page / web.",
);

export const whyMePoints = [
  {
    icon: ShieldCheck,
    text: "Pengalaman bantu UMKM, SaaS, hingga tim marketing—paham kebutuhan go-to-market dan keterbatasan resource.",
  },
  {
    icon: LaptopMinimal,
    text: "Stack modern (Next.js, Tailwind, HeroUI) dengan pipeline deploy otomatis, sehingga iterasi jadi cepat.",
  },
  {
    icon: LineChart,
    text: "Obses terhadap metrik: CTR, leads, engagement. Setiap proyek disertai setup analytics dasar.",
  },
  {
    icon: Clock4,
    text: "Timeline transparan via Notion/WhatsApp dengan update minimal 2x seminggu.",
  },
];

export const testimonials = [
  {
    quote:
      "Landing page kampanye kita kelar 6 hari dan langsung bawa 300+ leads. Copywriting-nya relate, dev-nya rapi.",
    author: "Nadya, Growth Lead komunitas edukasi",
  },
  {
    quote:
      "Fadli bantu translate ide bisnis jadi prototipe dashboard buat investor. Presentasi jadi jauh lebih meyakinkan.",
    author: "Raka, Founder logistik B2B",
  },
];

export const services = [
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

export const processSteps = [
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

export const packages = [
  {
    label: "Starter Launch",
    price: "Mulai 1 Juta",
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
    price: "Mulai 3 Juta",
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
    price: "Mulai 10 Juta",
    fit: "MVP mini app atau dashboard internal.",
    includes: [
      "Desain alur + prototipe",
      "Fitur autentikasi dasar",
      "Integrasi API/DB ringan",
      "Support pasca launch 2 minggu",
    ],
  },
];

export const capabilities = [
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

export const faqs = [
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

export const heroHooks = [
  "Blueprint + copy rapih < 48 jam, jadi tim marketing langsung punya bahan buat gas funnel.",
  "Next.js/Tailwind build + integrasi API/DB bikin modul operasional & landing funnel tinggal plug ke stack kamu.",
  "Deploy, monitoring, dan support pasca launch di-handle, kamu fokus ke closing leads.",
];

export const serviceNavLinks = [
  { label: "Fokus", href: "#hero" },
  { label: "Capability", href: "#capabilities" },
  { label: "Layanan", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
