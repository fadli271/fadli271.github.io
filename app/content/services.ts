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
  "Halo Fadli, saya mau konsultasi pembuatan website/sistem untuk bisnis saya."
);

export const whyMePoints = [
  {
    icon: ShieldCheck,
    text: "Bahasa Manusia, Bukan Robot. Saya jelaskan teknis dengan bahasa bisnis yang mudah dimengerti awam.",
  },
  {
    icon: LaptopMinimal,
    text: "Solusi Hemat Waktu. Anda fokus urus bisnis, urusan website & sistem biar saya yang bereskan sampai tuntas.",
  },
  {
    icon: LineChart,
    text: "Fokus Hasil (Cuan). Website bukan cuma pajangan, tapi alat bantu jualan dan operasional yang terukur.",
  },
  {
    icon: Clock4,
    text: "Update Rutin & Transparan. Gak ada istilah 'developer ngilang'. Progres dilaporkan rutin via WhatsApp.",
  },
];

export const testimonials = [
  {
    quote:
      "Awalnya bingung mau bikin web kayak gimana. Mas Fadli bantu arahin dari nol, sekarang leads masuk terus dari web.",
    author: "Nadya, Owner Bisnis Edukasi",
  },
  {
    quote:
      "Sistem pencatatan stok yang dibikin simpel banget, karyawan gudang langsung ngerti cara pakenya. Sangat membantu!",
    author: "Raka, Distributor Logistik",
  },
];

export const services = [
  {
    title: "Sistem Operasional Kantor",
    description:
      "Aplikasi untuk merapikan data kantor. Mulai dari stok barang, absen karyawan, sampai laporan keuangan sederhana.",
    deliverables: [
      "Mudah dipakai (User Friendly)",
      "Bisa diakses dari HP & Laptop",
      "Data aman & ter-backup otomatis",
    ],
  },
  {
    title: "Website Toko Online / Katalog",
    description:
      "Bikin pelanggan mudah lihat produk dan pesan langsung lewat WhatsApp tanpa ribet install aplikasi.",
    deliverables: [
      "Tampil bagus di HP (Mobile First)",
      "Tombol 'Pesan via WA' otomatis",
      "Loading cepat, gak bikin kabur",
    ],
  },
  {
    title: "Landing Page Penjualan",
    description:
      "Satu halaman khusus untuk promosi produk/jasa. Fokus meyakinkan pengunjung buat beli atau kontak Anda.",
    deliverables: [
      "Copywriting yang menjual",
      "Desain profesional & terpercaya",
      "Siap untuk Iklan (FB/IG/Google Ads)",
    ],
  },
];

export const processSteps = [
  {
    title: "Ngobrol Santai (Gratis)",
    description:
      "Ceritakan masalah bisnis Anda. Kita cari solusi bareng-bareng. Gak harus langsung deal, tanya-tanya dulu boleh.",
    icon: MessagesSquare,
  },
  {
    title: "Perencanaan",
    description:
      "Saya buatkan gambaran kasar (wireframe) dan kata-katanya. Anda tinggal koreksi kalau ada yang kurang pas.",
    icon: PenSquare,
  },
  {
    title: "Pembuatan",
    description:
      "Setelah oke, saya mulai kerjakan. Anda bisa pantau progresnya kapan saja. Revisi minor aman.",
    icon: Code2,
  },
  {
    title: "Serah Terima & Ajari",
    description:
      "Website jadi, saya ajari cara pakainya sampai bisa. Garansi support jika ada kendala teknis.",
    icon: Rocket,
  },
];

export const packages = [
  {
    label: "Paket Hemat (Starter)",
    price: "Mulai 1 Juta",
    fit: "Cocok untuk UMKM yang baru mau go-online.",
    includes: [
      "Landing page simpel (1 Halaman)",
      "Gratis Hosting Dasar",
      "Tombol Chat WhatsApp",
      "Pengerjaan Cepat (3-5 Hari)",
    ],
  },
  {
    label: "Paket Bisnis (Growth)",
    price: "Mulai 3 Juta",
    fit: "Untuk bisnis yang butuh citra lebih profesional.",
    includes: [
      "Web Profil Lengkap (3-5 Halaman)",
      "Desain Premium & Kustom",
      "Bantuan Penulisan Konten",
      "Optimasi agar mudah dicari Google",
    ],
    highlighted: true,
  },
  {
    label: "Sistem Custom",
    price: "Diskusi Dulu",
    fit: "Solusi khusus untuk masalah operasional yang unik.",
    includes: [
      "Sesuai alur kerja bisnis Anda",
      "Fitur Login & Hak Akses",
      "Database & Laporan",
      "Training penggunaan sistem",
    ],
  },
];

export const capabilities = [
  {
    title: "Aplikasi Kantor",
    description:
      "Gantikan Excel yang ribet dengan aplikasi yang rapi. Cek stok, input data, semua jadi mudah.",
    icon: ServerCog,
  },
  {
    title: "Website di HP",
    description:
      "Pastikan website Anda enak dibuka di HP. Karena 90% pelanggan Anda buka dari HP.",
    icon: Smartphone,
  },
  {
    title: "Halaman Promo",
    description:
      "Halaman khusus buat promosi yang bikin orang 'gatal' pengen beli produk Anda.",
    icon: LayoutTemplate,
  },
];

export const faqs = [
  {
    question: "Berapa lama bikinnya?",
    answer:
      "Untuk Landing Page biasanya 3-7 hari. Kalau Sistem Custom tergantung kerumitannya, nanti kita estimasi di awal biar jelas.",
  },
  {
    question: "Saya gaptek, nanti diajarin gak?",
    answer:
      "Pasti! Saya buatkan video panduan dan saya ajari langsung sampai bisa. Bahasanya gak pake istilah teknis yang njelimet.",
  },
  {
    question: "Kalau ada error gimana?",
    answer:
      "Tenang, ada garansi support. Kalau ada error teknis dari saya, saya perbaiki gratis. Saya juga siap bantu maintenance jangka panjang.",
  },
  {
    question: "Konten/Foto dari siapa?",
    answer:
      "Sebaiknya dari Anda biar otentik. Tapi kalau bingung nulisnya, saya bantu rapikan kata-katanya biar lebih menjual.",
  },
  {
    question: "Bayarnya gimana?",
    answer:
      "DP 50% di awal untuk tanda jadi, sisanya 50% setelah website selesai dan Anda puas. Aman dan fair.",
  },
];

export const heroHooks = [
  "Konsultasi gratis, gak maksa beli. Kita cari solusi terbaik buat bisnis Anda.",
  "Desain modern & terpercaya, bikin calon pembeli makin yakin transfer.",
  "Terima beres. Teknis, server, domain, semua saya yang urus.",
];

export const serviceNavLinks = [
  { label: "Intro", href: "#hero" },
  { label: "Keahlian", href: "#capabilities" },
  { label: "Layanan", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
