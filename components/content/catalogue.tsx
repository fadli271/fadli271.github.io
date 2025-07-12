"use client";

import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Accordion,
  AccordionItem,
  Chip,
} from "@heroui/react";
import { motion } from "framer-motion";
import { Hand, CheckCircle, Zap, Handshake, Phone, Mail } from "lucide-react";

// Data untuk konten halaman, bisa dipisahkan ke file lib/catalogueContent.ts
const catalogueContent = {
  hero: {
    greeting: "🙌 Halo, saya Fadli — Software Engineer",
    tagline:
      "Siap bantu bisnis Anda Go Digital dengan pendekatan praktis & hasil nyata.",
    philosophy:
      "💡 Saya percaya website bukan cuma soal kode — tapi tentang membangun aset digital yang berdampak langsung bagi bisnis Anda.",
  },
  promo: {
    title: "🎉 Promo Pelanggan Pertama",
    subtitle: "💎 Khusus untuk 3 klien pertama di bulan ini!",
    benefits: [
      "Diskon Langsung Rp 500.000",
      "Free Upgrade 1 Halaman Tambahan",
      "Free Optimasi Kecepatan Website",
      "Prioritas Antrian Pengerjaan",
    ],
    cta: "🚀 Promo berlaku untuk semua paket dan hanya untuk klien baru. Klaim sekarang sebelum slot habis!",
  },
  packages: {
    title: "🚀 Paket Website UMKM",
    subtitle:
      "📦 Solusi praktis dan scalable untuk bisnis kecil hingga menengah yang ingin tampil profesional secara online.",
    items: [
      {
        name: "Paket Sat Set Online",
        price: "Rp 2.500.000",
        estimate: "7 – 14 Hari Kerja",
        idealFor: "UMKM/Personal butuh website cepat & profesional",
        features: [
          "3 Halaman Utama",
          "Desain Template Premium",
          "Mobile Friendly",
          "Tombol WhatsApp",
          "Integrasi Media Sosial",
        ],
        bonus: null,
      },
      {
        name: "Paket Tumbuh Profesional",
        price: "Mulai dari Rp 5.500.000",
        estimate: "3 – 5 Minggu",
        idealFor: "Bisnis berkembang yang butuh fitur lebih lengkap",
        features: [
          "Hingga 8 Halaman",
          "Desain Kustom",
          "Blog / Galeri",
          "Setup Awal SEO",
          "Semua fitur Paket Sat Set",
        ],
        bonus: "1 Jam Strategi Digital Gratis",
      },
    ],
    includes: [
      "Domain & Hosting Support",
      "Gratis Maintenance 1 Bulan",
      "Video Tutorial",
    ],
  },
  addons: {
    title: "✨ Add-on & Langganan",
    items: [
      {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "GARANSI KILAT — Tayang dalam 3 Hari",
        description:
          "Butuh cepat? Tambahan layanan ini untuk Paket Sat Set agar live dalam 72 jam (setelah semua materi lengkap).",
        price: "Tambah +30% dari harga paket",
      },
      {
        icon: <Handshake className="w-6 h-6 text-green-500" />,
        title: "Langganan Paket “Tenang Aja”",
        description:
          "Layanan bulanan untuk Anda yang ingin bebas dari urusan teknis & update konten.",
        price: "Rp 300.000 / bulan",
        features: [
          "Maintenance teknis",
          "Backup rutin",
          "Jatah 1 jam update konten minor",
        ],
      },
    ],
  },
  payment: {
    title: "💳 Skema Pembayaran",
    description:
      "Berikut skema pembayaran standar untuk memastikan proses berjalan profesional dan aman:",
    steps: [
      {
        stage: "DP (Down Payment)",
        percentage: "50%",
        description: "Setelah kesepakatan awal & kick-off proyek",
      },
      {
        stage: "Review & Uji Coba",
        percentage: "-",
        description: "Preview dan revisi desain, konten, serta fungsionalitas",
      },
      {
        stage: "Pelunasan",
        percentage: "50%",
        description: "Setelah website selesai & sebelum go live",
      },
    ],
    note: "💡 Skema fleksibel bisa didiskusikan sesuai kebutuhan proyek.",
  },
  custom: {
    title: "🛠️ Solusi Kustom — Aplikasi & Sistem Web",
    description:
      "Punya kebutuhan unik? Ayo diskusi dan bangun solusi kustom yang sesuai proses bisnis Anda.",
    price: "Harga Mulai Rp +10.000.000",
    examples: [
      "Sistem Informasi Akademik",
      "Platform E-Commerce",
      "CRM / Sistem Internal",
      "Sistem Booking Online",
    ],
    process: "Konsultasi → Proposal → Pengembangan → Go Live",
  },
  cta: {
    title: "💬 Ingin Mulai Proyek?",
    description: "Saya siap bantu kamu wujudkan ide jadi solusi digital:",
    contacts: [
      {
        method: "WhatsApp",
        value: "0822 1909 4081",
        icon: <Phone className="w-5 h-5" />,
      },
      {
        method: "Email",
        value: "fadli.mohamad62@gmail.com",
        icon: <Mail className="w-5 h-5" />,
      },
    ],
  },
  faq: {
    title: "❓ Pertanyaan Umum (FAQ)",
    items: [
      {
        q: "Apakah harga sudah termasuk domain & hosting?",
        a: "Belum. Klien akan membayar langsung ke penyedia layanan (misalnya: Niagahoster, Hostinger). Saya akan bantu setup domain dan hosting secara gratis, agar kepemilikan penuh tetap di tangan Anda.",
      },
      {
        q: "Siapa yang menyiapkan konten website?",
        a: "Konten dasar seperti teks dan gambar disediakan oleh klien. Tapi saya bantu dengan template konten siap pakai dan saran copywriting ringan agar lebih marketable.",
      },
      {
        q: "Berapa kali revisi yang bisa saya lakukan?",
        a: "Anda mendapatkan 2x revisi minor (teks, warna, gambar). Revisi dilakukan saat tahap desain, sebelum website dipublikasikan.",
      },
      {
        q: "Apakah saya bisa update konten sendiri?",
        a: "Bisa! Anda akan dapat panduan video singkat dan akses login ke dashboard. Atau, bisa pakai langganan “Tenang Aja” agar saya yang urus update rutin.",
      },
      {
        q: "Apakah ada garansi setelah website selesai?",
        a: "Tentu, ada garansi teknis 1 bulan untuk perbaikan bug atau error teknis (bukan konten).",
      },
      {
        q: "Bisa minta desain sesuai brand?",
        a: "Tentu! Khusus di Paket “Tumbuh Profesional”, saya akan sesuaikan warna, tone, dan nuansa brand Anda.",
      },
      {
        q: "Website-nya pakai apa? Bisa custom?",
        a: "Tergantung paket: WordPress (dengan builder premium) untuk kemudahan, atau Custom Tech (Next.js / Laravel) untuk solusi kompleks.",
      },
      {
        q: "Bisa minta fitur tambahan?",
        a: "Ya, fitur tambahan bisa lewat Add-on ke paket yang ada atau dibuat sebagai sistem custom. Yuk diskusikan dulu kebutuhan Anda secara gratis.",
      },
    ],
  },
};

const Section = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) => (
  <motion.section
    className={`max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ${className}`}
    id={id}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
    {children}
  </p>
);

export default function CataloguePage() {
  const { hero, promo, packages, addons, payment, custom, cta, faq } =
    catalogueContent;

  return (
    <div>
      {/* Hero Section */}
      <Section className="text-center bg-white" id="hero-catalogue">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          {hero.greeting}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-sky-600 font-semibold">
          {hero.tagline}
        </p>
        <p className="mt-6 text-md text-gray-500 max-w-2xl mx-auto">
          {hero.philosophy}
        </p>
      </Section>

      {/* Promo Section */}
      <Section className="bg-sky-50" id="promo">
        <div className="content-card p-8 rounded-2xl text-center border-sky-200">
          <h2 className="text-3xl font-bold text-sky-700">{promo.title}</h2>
          <p className="mt-2 text-lg font-medium text-gray-600">
            {promo.subtitle}
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            {promo.benefits.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold text-gray-500">
            {promo.cta}
          </p>
        </div>
      </Section>

      {/* Packages Section */}
      <Section id="packages">
        <SectionTitle>{packages.title}</SectionTitle>
        <SectionSubtitle>{packages.subtitle}</SectionSubtitle>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {packages.items.map((pkg) => (
            <Card key={pkg.name} className="p-6 h-full flex flex-col">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
              </CardHeader>
              <CardBody className="flex-grow">
                <p className="text-4xl font-bold gradient-text">{pkg.price}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Estimasi: {pkg.estimate}
                </p>
                <p className="mt-4 font-semibold text-gray-700">Ideal Untuk:</p>
                <p className="text-gray-600">{pkg.idealFor}</p>
                <Divider className="my-6" />
                <p className="font-semibold text-gray-700 mb-4">Fitur Utama:</p>
                <ul className="space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                      <span className="text-gray-700">{feat}</span>
                    </li>
                  ))}
                </ul>
                {pkg.bonus && (
                  <div className="mt-4">
                    <Chip color="primary" variant="flat">
                      Bonus: {pkg.bonus}
                    </Chip>
                  </div>
                )}
              </CardBody>
              <CardFooter>
                <Button fullWidth color="primary">
                  Pilih Paket Ini
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Semua paket termasuk: {packages.includes.join(", ")}.</p>
        </div>
      </Section>

      {/* Add-ons & Custom Solutions */}
      <div className="bg-white">
        <Section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          id="addons-custom"
        >
          {/* Add-ons */}
          <div>
            <SectionTitle>{addons.title}</SectionTitle>
            <div className="mt-8 space-y-8">
              {addons.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    {item.features && (
                      <ul className="text-sm mt-2 space-y-1">
                        {item.features.map((f) => (
                          <li key={f}>✅ {f}</li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-2 font-semibold text-sky-600">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Custom Solutions */}
          <div>
            <SectionTitle>{custom.title}</SectionTitle>
            <SectionSubtitle>{custom.description}</SectionSubtitle>
            <Card className="mt-8 text-center p-6">
              <p className="font-bold text-2xl text-gray-800">{custom.price}</p>
              <p className="mt-4 text-gray-600">
                Contoh Proyek: {custom.examples.join(", ")}.
              </p>
              <p className="mt-4 font-semibold text-sm text-gray-500">
                Proses: {custom.process}
              </p>
            </Card>
          </div>
        </Section>
      </div>

      {/* Payment & CTA */}
      <Section
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        id="payment-cta"
      >
        {/* Payment */}
        <div>
          <SectionTitle>{payment.title}</SectionTitle>
          <SectionSubtitle>{payment.description}</SectionSubtitle>
          <div className="mt-8 space-y-4">
            {payment.steps.map((step) => (
              <Card key={step.stage} className="bg-gray-100 p-4" shadow="none">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800">{step.stage}</p>
                  <Chip color="secondary" variant="flat">
                    {step.percentage}
                  </Chip>
                </div>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500 text-center">
            {payment.note}
          </p>
        </div>
        {/* CTA */}
        <div className="lg:mt-12">
          <Card className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{cta.title}</h3>
            <p className="mt-2 text-gray-600">{cta.description}</p>
            <div className="mt-6 space-y-4">
              {cta.contacts.map((c) => (
                <Button
                  key={c.method}
                  fullWidth
                  as="a"
                  href={
                    c.method === "Email"
                      ? `mailto:${c.value}`
                      : `https://wa.me/6282219094081`
                  }
                  startContent={c.icon}
                  variant="bordered"
                >
                  {c.method}: {c.value}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white" id="faq">
        <SectionTitle>{faq.title}</SectionTitle>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion selectionMode="multiple">
            {faq.items.map((item, index) => (
              <AccordionItem key={index} aria-label={item.q} title={item.q}>
                {item.a}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </div>
  );
}
