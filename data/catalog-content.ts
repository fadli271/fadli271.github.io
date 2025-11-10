import { CONTACT_INFO, buildWhatsAppLink } from "@/lib/contact-info";

export type HeroFeatureIcon =
  | "shield"
  | "zap"
  | "smartphone"
  | "thumbsUp"
  | "users"
  | "award";

export type AddonIcon = "zap" | "handshake";
export type CustomIcon =
  | "puzzle"
  | "school"
  | "shoppingCart"
  | "appWindow"
  | "calendarClock"
  | "expand"
  | "link"
  | "palette";
export type PaymentIcon =
  | "banknote"
  | "arrowRight"
  | "checkCircle"
  | "shieldCheck"
  | "flex"
  | "thumbsUp"
  | "phone"
  | "mail";

export const catalogContent = {
  hero: {
    greeting: "👋 Halo, saya Fadli  - Software Engineer",
    tagline: "Katalog Layanan Digital yang Dirancang untuk Tumbuh Bersama Anda",
    philosophy:
      "Saya seorang Software Engineer yang fokus membantu UMKM dan profesional membangun kehadiran digital yang berdampak. Melalui desain yang elegan dan performa yang optimal, saya percaya setiap website bisa menjadi aset bisnis yang sesungguhnya.",
    features: [
      {
        icon: "shield" as HeroFeatureIcon,
        text: "Jaminan Keamanan Data Sistem Anda",
      },
      { icon: "zap" as HeroFeatureIcon, text: "Performa & Kecepatan Optimal" },
      {
        icon: "smartphone" as HeroFeatureIcon,
        text: "Responsif di Semua Perangkat",
      },
      {
        icon: "thumbsUp" as HeroFeatureIcon,
        text: "100% Puas atau Uang Kembali",
      },
      {
        icon: "users" as HeroFeatureIcon,
        text: "Dipercaya oleh Klien Terverifikasi",
      },
      {
        icon: "award" as HeroFeatureIcon,
        text: "Tim Profesional & Berpengalaman",
      },
    ],
  },
  promo: {
    title: "Bangun Website Profesional untuk UMKM",
    subtitle:
      "Tampil lebih kredibel, tingkatkan omzet, dan jangkau lebih banyak pelanggan dengan website modern siap pakai.",
    benefits: [
      "Desain Mobile Friendly & Estetik",
      "Gratis Domain + Hosting 1 Tahun",
      "Fitur Katalog Produk & Checkout",
      "Integrasi WhatsApp & Sosial Media",
      "Dukungan Teknis & Panduan Admin",
    ],
    ctaText: "Klaim Sekarang",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    promoTagline: "Promo Khusus Bulan Ini 🎉",
    extraNote: "Bonus E-Course & Maintenance untuk 5 Pendaftar Pertama!",
    expiration: "Berlaku hingga 31 Juli 2025",
  },
  packages: {
    title: "Paket Website UMKM",
    subtitle:
      "Solusi praktis dan scalable untuk bisnis kecil hingga menengah yang ingin tampil profesional secara online.",
    includes: [
      "Domain & Hosting Support",
      "Gratis Maintenance 1 Bulan",
      "Video Tutorial",
    ],
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
        isPopular: false,
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
        isPopular: true,
      },
    ],
  },
  addons: {
    title: "Add-on & Langganan",
    items: [
      {
        icon: "zap" as AddonIcon,
        title: "Garansi Kilat - Tayang 3 Hari",
        description:
          "Butuh cepat? Aktifkan layanan ini untuk Paket Sat Set agar website tayang dalam 72 jam setelah semua materi lengkap.",
        additionalInfo: [
          "Prioritas pengerjaan tanpa antre",
          "Cocok untuk campaign, event, atau launching produk",
          "Materi lengkap wajib dikirim di awal",
          "Dukungan penuh via WhatsApp selama proses",
        ],
        price: "Tambah +30% dari harga paket",
      },
      {
        icon: "handshake" as AddonIcon,
        title: 'Langganan "Tenang Aja"',
        description:
          "Layanan bulanan bebas ribet untuk Anda yang ingin urusan teknis & update konten ditangani rutin.",
        price: "Rp 300.000 / bulan",
        features: [
          "Maintenance teknis & backup",
          "Jatah 1 jam update konten minor",
          "Pantauan uptime & kecepatan",
        ],
      },
    ],
  },
  custom: {
    icon: "puzzle" as CustomIcon,
    title: "Solusi Kustom — Aplikasi & Sistem Web",
    description:
      "Punya kebutuhan unik? Saya siap bantu bangun sistem digital yang benar-benar sesuai dengan proses bisnis Anda.",
    price: "Harga Mulai Rp 10.000.000",
    examples: [
      { name: "Sistem Informasi Akademik", icon: "school" as CustomIcon },
      { name: "Platform E-Commerce", icon: "shoppingCart" as CustomIcon },
      { name: "CRM / Sistem Internal", icon: "appWindow" as CustomIcon },
      { name: "Sistem Booking Online", icon: "calendarClock" as CustomIcon },
    ],
    processSteps: [
      "Konsultasi Kebutuhan",
      "Proposal & Timeline",
      "Desain UI/UX",
      "Pengembangan & Uji Coba",
      "Go Live & Support",
    ],
    badges: [
      { label: "Skalabel", icon: "expand" as CustomIcon },
      { label: "Integrasi API", icon: "link" as CustomIcon },
      { label: "UI/UX Kustom", icon: "palette" as CustomIcon },
      { label: "Brandable", icon: "puzzle" as CustomIcon },
    ],
    perk: "Gratis Konsultasi Awal",
  },
  payment: {
    title: "Skema Pembayaran",
    description:
      "Berikut skema pembayaran standar untuk memastikan proses berjalan profesional dan aman.",
    steps: [
      {
        icon: "banknote" as PaymentIcon,
        stage: "DP (Down Payment)",
        percentage: "50%",
        description: "Setelah kesepakatan awal & kick-off proyek.",
      },
      {
        icon: "arrowRight" as PaymentIcon,
        stage: "Review & Uji Coba",
        percentage: "-",
        description: "Preview dan revisi desain, konten, serta fungsionalitas.",
      },
      {
        icon: "checkCircle" as PaymentIcon,
        stage: "Pelunasan",
        percentage: "50%",
        description: "Setelah website selesai & sebelum go live.",
      },
    ],
    note: "Skema fleksibel bisa didiskusikan sesuai kebutuhan proyek.",
    highlights: [
      { icon: "shieldCheck" as PaymentIcon, title: "Garansi Teknis 1 Bulan" },
      { icon: "flex" as PaymentIcon, title: "Pendekatan Fleksibel" },
      { icon: "thumbsUp" as PaymentIcon, title: "Respons Cepat & Proaktif" },
    ],
  },
  contactCTA: {
    title: "Ingin Mulai Proyek?",
    description: "Saya siap bantu kamu wujudkan ide jadi solusi digital.",
    contacts: [
      {
        method: "WhatsApp",
        value: CONTACT_INFO.whatsapp.display,
        href: buildWhatsAppLink(),
        icon: "phone" as PaymentIcon,
      },
      {
        method: "Email",
        value: CONTACT_INFO.email,
        href: `mailto:${CONTACT_INFO.email}`,
        icon: "mail" as PaymentIcon,
      },
    ],
  },
  faq: {
    title: "Pertanyaan Umum (FAQ)",
    description:
      "Jawaban atas pertanyaan yang sering diajukan sebelum proyek dimulai.",
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
        q: "Apakah bisa integrasi WhatsApp atau Instagram?",
        a: "Bisa, bahkan saya bantu pasang CTA WhatsApp floating, embed Instagram Feed, dan tombol sosial media lainnya.",
      },
      {
        q: "Apakah bisa cicilan atau pembayaran bertahap?",
        a: "Ya, bisa. Kita bisa diskusikan skema pembayaran yang sesuai dan tidak memberatkan.",
      },
      {
        q: "Bisa redesign website lama?",
        a: "Tentu, saya bisa bantu evaluasi dan mendesain ulang agar tampil lebih modern dan fungsional.",
      },
    ],
  },
} as const;

export type CatalogContent = typeof catalogContent;
