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
  "Halo Fadli, saya mau konsultasi kebutuhan website (Starter/Growth/Scale) dan kemungkinan sistem aplikasi atau mobile app untuk bisnis saya.",
);

export const whyMePoints = [
  {
    icon: ShieldCheck,
    text: "Pakai bahasa awam, bukan istilah teknis. Setiap keputusan dijelaskan dengan dampak ke bisnis: chat, order, dan efisiensi kerja.",
  },
  {
    icon: LaptopMinimal,
    text: "Scope jelas sejak awal. Ada batas revisi, alur kerja rapi, dan update progres rutin biar proyek tidak molor.",
  },
  {
    icon: LineChart,
    text: "Fokus hasil, bukan hanya tampilan. Website disusun untuk mempermudah calon pelanggan chat/booking.",
  },
  {
    icon: Clock4,
    text: "Model biaya transparan: Setup (sekali), Infra tahunan, Maintenance opsional. Tidak ada biaya tersembunyi.",
  },
];

export const testimonials = [
  {
    quote:
      "Awalnya bingung mulai dari mana. Setelah dibikinin landing page yang jelas, chat WA jadi lebih terarah dan closing lebih cepat.",
    author: "Nadya, Owner Bisnis Edukasi",
  },
  {
    quote:
      "Yang paling membantu itu prosesnya rapi dan gak ribet. Tim kami tinggal pakai, tanpa pusing urusan teknis.",
    author: "Raka, Distributor Logistik",
  },
  {
    quote:
      "Biaya dijelasin dari awal: mana setup, mana biaya tahunan. Jadi enak buat ngatur cashflow usaha.",
    author: "Dina, Owner UMKM Kuliner",
  },
];

export const services = [
  {
    title: "Landing Page Penjualan",
    description:
      "Satu halaman penjualan yang fokus mendorong calon pelanggan chat/booking dengan alur jelas dari atas sampai bawah.",
    deliverables: [
      "Struktur konten yang mudah dipahami",
      "CTA WhatsApp/Form yang jelas",
      "Mobile-first dan loading cepat",
    ],
  },
  {
    title: "Website Profil Bisnis",
    description:
      "Website profil yang rapi untuk membangun kepercayaan, menjelaskan layanan, dan memudahkan pelanggan menemukan serta menghubungi bisnis Anda.",
    deliverables: [
      "Halaman profil, layanan, FAQ, kontak",
      "Siap dibuka nyaman di HP",
      "Siap jadi aset jangka panjang",
    ],
  },
  {
    title: "Sistem Aplikasi & Mobile App",
    description:
      "Pengembangan sistem aplikasi sederhana (web atau mobile) untuk operasional internal atau interaksi pelanggan, disesuaikan dengan alur kerja bisnis Anda.",
    deliverables: [
      "Sesi discovery untuk memetakan kebutuhan dan alur kerja",
      "Rancangan modul/fungsi prioritas yang realistis",
      "Estimasi biaya dan timeline terpisah sebelum eksekusi pembangunan",
    ],
  },
];

export const processSteps = [
  {
    title: "Kualifikasi Kebutuhan",
    description:
      "Kita petakan target bisnis, budget, dan timeline. Tujuannya biar paket yang dipilih benar-benar pas.",
    icon: MessagesSquare,
  },
  {
    title: "Perencanaan & Scope Lock",
    description:
      "Setelah kebutuhan jelas, saya kirim outline kerja + deliverables + jadwal. Scope dikunci agar pengerjaan efisien.",
    icon: PenSquare,
  },
  {
    title: "Pembuatan",
    description:
      "Implementasi dilakukan sesuai paket. Update progres rutin via WhatsApp, revisi mengikuti ketentuan paket.",
    icon: Code2,
  },
  {
    title: "Go-live & Support",
    description:
      "Setelah live, Anda dapat panduan pakai dan support sesuai paket. Maintenance bulanan bisa ditambahkan bila diperlukan.",
    icon: Rocket,
  },
];

export const packages = [
  {
    label: "Hemat UMKM",
    price: "Rp899.000 (Setup)",
    fit: "Untuk usaha baru/rumahan yang budget-nya sangat ketat, tapi ingin punya landing page rapi dan bisa dipakai iklan.",
    includes: [
      "1 landing page template (maks. 5 section)",
      "Copywriting dasar dari materi yang Anda kirim",
      "Revisi 1x (minor: teks & gambar)",
      "Estimasi selesai 3–5 hari kerja",
      "Infra tahunan (domain + hosting): Rp1.200.000/tahun",
    ],
  },
  {
    label: "Starter",
    price: "Rp1.490.000 (Setup)",
    fit: "Untuk UMKM yang mau mulai cepat dengan scope jelas dan tampilan lebih custom.",
    includes: [
      "1 landing page custom (maks. 5 section)",
      "Struktur konten disusun ulang supaya alur baca lebih jelas",
      "Revisi 1x (layout & konten)",
      "Estimasi selesai 2–4 hari kerja",
      "Infra tahunan (domain + hosting): Rp1.200.000/tahun",
    ],
  },
  {
    label: "Growth",
    price: "Rp3.900.000 (Setup)",
    fit: "Untuk bisnis yang ingin dorong konversi lebih serius dan butuh presentasi brand yang lebih kuat.",
    includes: [
      "1 landing page komprehensif (maks. 9 section)",
      "Copywriting dioptimasi bersama (focus: manfaat & CTA)",
      "1 integrasi sederhana (mis. form WhatsApp, formulir online, atau tool lain yang sejenis)",
      "Revisi 2x (layout, teks, dan komponen)",
      "Estimasi selesai 5–8 hari kerja",
      "Infra tahunan (domain + hosting): Rp2.000.000/tahun",
    ],
    highlighted: true,
  },
  {
    label: "Scale",
    price: "Rp7.900.000 (Setup)",
    fit: "Untuk bisnis yang butuh mini-site (beberapa halaman) dan integrasi lebih advance.",
    includes: [
      "Mini website hingga 5 halaman (mis. Home, Tentang, Layanan, Testimoni, Kontak)",
      "Hingga 2 integrasi sederhana sesuai kebutuhan (mis. WA, formulir, atau embed kalender/booking)",
      "Revisi 3x (layout, konten, dan penyesuaian kecil fitur)",
      "Estimasi selesai 10–15 hari kerja",
      "Infra tahunan (domain + hosting): Rp3.000.000/tahun",
    ],
  },
];

export const capabilities = [
  {
    title: "Fokus Konversi",
    description:
      "Setiap halaman disusun untuk mendorong action yang jelas: chat, booking, atau inquiry.",
    icon: ServerCog,
  },
  {
    title: "Mobile-First",
    description:
      "Mayoritas pengunjung datang dari HP, jadi performa mobile jadi prioritas utama.",
    icon: Smartphone,
  },
  {
    title: "Siap Dikembangkan",
    description:
      "Struktur dibuat rapi supaya website, sistem aplikasi, atau mobile app mudah ditambah fitur saat bisnis tumbuh.",
    icon: LayoutTemplate,
  },
];

export const faqs = [
  {
    question:
      "Kenapa biayanya dipisah jadi setup, infra tahunan, dan maintenance?",
    answer:
      "Supaya transparan dan mudah dipahami. Setup adalah biaya pembuatan awal (sekali bayar), infra tahunan adalah biaya operasional website tetap online, maintenance sifatnya opsional.",
  },
  {
    question: "Berapa lama pengerjaan tiap paket?",
    answer:
      "Starter 2–4 hari kerja, Growth 5–8 hari kerja, Scale 10–15 hari kerja. Timeline mulai dihitung setelah DP masuk dan materi inti lengkap.",
  },
  {
    question: "Apakah saya harus bayar maintenance bulanan?",
    answer:
      "Tidak wajib. Maintenance bulanan bersifat opsional jika Anda ingin update rutin dan support operasional lebih cepat.",
  },
  {
    question: "Kalau minta perubahan tambahan di luar paket gimana?",
    answer:
      "Perubahan di luar paket akan dicatat sebagai permintaan tambahan. Saya kirim estimasi biaya dan waktu dulu, dan hanya dikerjakan setelah disetujui.",
  },
  {
    question: "Skema pembayarannya seperti apa?",
    answer:
      "Starter/Growth: DP 50% lalu pelunasan 50% sebelum handover final. Scale: 40% awal, 40% saat progres utama, 20% sebelum handover.",
  },
  {
    question: "Kalau budget saya terbatas, mulai dari mana?",
    answer:
      "Mulai dari paket Starter dulu agar website cepat live dengan biaya terkontrol. Setelah hasilnya terlihat, bisa upgrade ke Growth/Scale.",
  },
  {
    question:
      "Apakah Anda juga bisa bantu buat sistem aplikasi atau mobile app?",
    answer:
      "Bisa. Untuk sistem aplikasi atau mobile app, kita mulai dari sesi discovery singkat dulu untuk memetakan kebutuhan dan alur kerja. Setelah itu saya kirim estimasi biaya dan timeline terpisah di luar paket website.",
  },
];

export const heroHooks = [
  "Chat awal via WhatsApp gratis, tanpa paksaan deal.",
  "Untuk website: harga transparan (setup, infra tahunan, maintenance opsional). Untuk sistem aplikasi/mobile app: estimasi dibuat terpisah setelah sesi discovery.",
  "Fokus hasil bisnis: website, sistem aplikasi, dan mobile app yang bantu tambah chat, lead, dan efisiensi kerja.",
];

export const serviceNavLinks = [
  { label: "Intro", href: "#hero" },
  { label: "Keahlian", href: "#capabilities" },
  { label: "Layanan", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Harga", href: "#pricing" },
  { label: "App/System", href: "#app-system-estimate" },
  { label: "FAQ", href: "#faq" },
];

export const appSystemEstimate = {
  title: "Estimasi Proyek App/System",
  subtitle:
    "Untuk sistem aplikasi dan mobile app, estimasi dibuat terpisah setelah sesi discovery.",
  points: [
    "Sesi discovery 30–60 menit untuk mapping kebutuhan dan alur kerja",
    "Output berupa rekomendasi scope MVP + estimasi timeline",
    "Estimasi biaya disesuaikan kompleksitas fitur dan integrasi",
  ],
  note: "Agar aman budget, proyek app/system disarankan dimulai dari MVP lalu dikembangkan bertahap.",
};

export const consultationForm = {
  title: "Daftar Konsultasi Website UMKM",
  subtitle:
    "Langsung lanjut ke Google Form untuk kirim detail kebutuhan website atau sistem Anda.",
  labels: {
    name: "Nama lengkap",
    business: "Nama usaha / brand",
    whatsapp: "No. WhatsApp aktif",
    status: "Status website saat ini",
    notes: "Catatan kebutuhan (opsional)",
  },
  submitLabel: "Lanjut ke Google Form Konsultasi",
  actionUrl: "https://forms.gle/ZcqYfozG3c3chtsZA",
  hint: "Siapkan informasi singkat (nama usaha, kontak, kebutuhan) lalu klik tombol untuk membuka Google Form. Semua respons terkirim langsung ke saya.",
};

export const scopeTerms = {
  heading: "Scope & Ketentuan",
  subheading: "Biar ekspektasi jelas dari awal, tanpa kejutan di belakang.",
  includedBullets: [
    "Desain & pengembangan website sesuai paket: Hemat UMKM, Starter, Growth, Scale.",
    "Jumlah revisi sesuai paket: 1x/1x/2x/3x pada desain & konten utama.",
    "Implementasi layout responsif (mobile & desktop) dan struktur SEO dasar.",
    "Integrasi formulir kontak dasar & koneksi ke WhatsApp atau email bisnis.",
    "Onboarding singkat: panduan penggunaan dasar dan serah-terima aset digital.",
  ],
  excludedBullets: [
    "Biaya domain, hosting, dan infrastruktur website tahunan (ditagih terpisah).",
    "Pengembangan aplikasi/sistem kustom (estimasi & kontrak terpisah).",
    "Manajemen konten berkelanjutan: update rutin, upload produk, dan admin harian.",
    "Jasa iklan berbayar (Ads) dan pengelolaan media sosial.",
    "Produksi konten khusus seperti foto/video profesional di luar materi yang Anda sediakan.",
  ],
  paymentBullets: [
    "Pekerjaan dimulai setelah DP diterima (umumnya 50%), sisanya saat project selesai.",
    "Biaya domain/hosting & infrastruktur website ditagih tahunan sebelum masa aktif berakhir.",
    "Estimasi dan pembayaran untuk app/sistem kustom dibuat pada perjanjian terpisah.",
    "Perubahan di luar scope & jatah revisi dibuatkan penawaran tambahan terlebih dahulu.",
    "Pembayaran melalui transfer bank/QRIS resmi atas nama perusahaan.",
  ],
};
