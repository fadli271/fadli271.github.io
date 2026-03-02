import { buildWhatsAppLink } from "@/lib/contact-info";

// Context-specific WhatsApp prefill messages
export const waLinks = {
  navbar: buildWhatsAppLink(
    "Halo Fadli, saya baru lihat website FadliDevStudio dan tertarik untuk konsultasi.",
  ),
  hero: buildWhatsAppLink(
    "Halo Fadli, saya ingin konsultasi gratis soal kebutuhan website untuk bisnis saya.",
  ),
  promo: buildWhatsAppLink(
    "Halo Fadli, saya tertarik dengan promo Gratis Maintenance 3 Bulan. Bisa info lebih lanjut?",
  ),
  paketHemat: buildWhatsAppLink(
    "Halo Fadli, saya tertarik dengan Paket Hemat (Rp 895.000). Bisa jelaskan detailnya?",
  ),
  paketStarter: buildWhatsAppLink(
    "Halo Fadli, saya mau tanya soal Paket Starter (Rp 1.490.000) untuk bisnis saya.",
  ),
  paketGrowth: buildWhatsAppLink(
    "Halo Fadli, saya tertarik Paket Growth (Rp 3.900.000). Bisa diskusi kebutuhan saya?",
  ),
  paketScale: buildWhatsAppLink(
    "Halo Fadli, saya butuh Paket Scale (Rp 7.900.000) untuk proyek saya. Kapan bisa mulai?",
  ),
  tokoOnline: buildWhatsAppLink(
    "Halo Fadli, saya butuh website toko online / katalog produk. Bisa konsultasi dulu?",
  ),
  sistemOperasional: buildWhatsAppLink(
    "Halo Fadli, saya butuh sistem operasional untuk bisnis saya (stok, absensi, dll). Bisa diskusi?",
  ),
  mobileApps: buildWhatsAppLink(
    "Halo Fadli, saya tertarik bikin aplikasi mobile untuk bisnis saya. Bisa konsultasi?",
  ),
  ctaFinal: buildWhatsAppLink(
    "Halo Fadli, saya sudah lihat layanan FadliDevStudio dan ingin mulai project. Kapan bisa diskusi?",
  ),
  floating: buildWhatsAppLink(
    "Halo Fadli, saya mau tanya-tanya dulu soal jasa pembuatan website.",
  ),
};

// Keep backward compat
export const whatsappCta = waLinks.hero;

export const serviceNavLinks = [
  { label: "Intro", href: "#intro" },
  { label: "Kenapa Kami?", href: "#keunggulan" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Klien", href: "#testimoni" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq-section" },
];

export const trustBadges = [
  "Garansi Support",
  "Transparan",
  "Terpercaya",
];

export const whyChooseUs = [
  {
    iconName: "handshake",
    iconBgClass: "bg-blue-100",
    iconHoverBgClass: "group-hover:bg-primary group-hover:text-white",
    iconTextClass: "text-primary",
    title: "Partner Bisnis",
    description:
      "Bukan cuma vendor lepas. Kami fokus pada konsultasi jangka panjang untuk pertumbuhan bisnis Anda.",
  },
  {
    iconName: "settings_suggest",
    iconBgClass: "bg-purple-100",
    iconHoverBgClass: "group-hover:bg-purple-600 group-hover:text-white",
    iconTextClass: "text-purple-600",
    title: "Bebas Ribet Teknis",
    description:
      "Kami urus semua teknis (server, domain, error). Anda cukup fokus jualan dan urus pelanggan.",
  },
  {
    iconName: "trending_up",
    iconBgClass: "bg-orange-100",
    iconHoverBgClass: "group-hover:bg-orange-500 group-hover:text-white",
    iconTextClass: "text-orange-600",
    title: "Desain Menjual",
    description:
      "Website didesain psikologis untuk mengubah pengunjung menjadi pembeli (High Conversion).",
  },
  {
    iconName: "support_agent",
    iconBgClass: "bg-green-100",
    iconHoverBgClass: "group-hover:bg-green-600 group-hover:text-white",
    iconTextClass: "text-green-600",
    title: "Support Prioritas",
    description:
      "Dukungan WhatsApp fast response. Ada kendala? Langsung chat, langsung kami bantu.",
  },
];

export const processSteps = [
  {
    iconName: "chat_bubble",
    iconColor: "text-primary",
    numberBg: "bg-primary",
    blurBg: "bg-blue-100",
    title: "Konsultasi & Pesan",
    description:
      "Cukup cerita target bisnis Anda dan pilih paket yang pas. Gak perlu paham coding, kami yang terjemahkan ide Anda.",
  },
  {
    iconName: "design_services",
    iconColor: "text-purple-600",
    numberBg: "bg-purple-600",
    blurBg: "bg-purple-100",
    title: "Proses Desain & Dev",
    description:
      "Duduk manis sementara kami kerjakan teknisnya. Anda akan dapat update berkala dan revisi sampai cocok.",
  },
  {
    iconName: "rocket_launch",
    iconColor: "text-green-500",
    numberBg: "bg-green-500",
    blurBg: "bg-green-100",
    title: "Launch & Training",
    description:
      "Website live! Kami gak cuma lepas tangan, tapi ajari Anda cara pakainya sampai bisa kelola sendiri.",
  },
];

export const promoBanner = {
  badge: "Penawaran Terbatas untuk UMKM!",
  headline: "Gratis Maintenance 3 Bulan!",
  subtext:
    "Kami tidak hanya membuatkan website, kami menjaganya tetap aman dan up-to-date sehingga Anda bisa fokus jualan.",
  ctaText: "Ambil Promo Sekarang",
  urgencyText: "Hanya untuk 5 pendaftar pertama bulan ini",
};

export const services = [
  {
    iconName: "inventory_2",
    iconBgClass: "bg-blue-50",
    title: "Sistem Operasional",
    description:
      "Aplikasi untuk merapikan data kantor. Stok barang, absen karyawan, laporan keuangan.",
    features: ["User Friendly", "Akses HP & Laptop"],
    isPopular: false,
  },
  {
    iconName: "web",
    iconBgClass: "bg-primary/10",
    title: "Landing Page",
    description:
      "Satu halaman khusus promosi. Fokus meyakinkan pengunjung untuk membeli atau menghubungi Anda.",
    features: ["Copywriting Menjual", "Siap Iklan (Ads)", "High Conversion"],
    isPopular: true,
  },
  {
    iconName: "shopping_cart",
    iconBgClass: "bg-blue-50",
    title: "Toko Online / Katalog",
    description:
      "Pelanggan lihat produk dan pesan via WhatsApp otomatis tanpa install aplikasi.",
    features: ["Mobile First Design", "Tombol 'Pesan WA'"],
    isPopular: false,
  },
];

export const portfolioItems = [
  {
    category: "Jasa",
    categoryColor: "text-blue-500",
    categoryBg: "bg-blue-50",
    title: "Bengkel Mobil Sejahtera",
    description: "Landing page servis mobil dengan booking via WhatsApp & info layanan lengkap.",
    stat: "Trust Meningkat",
    statSub: "Booking WA Otomatis",
    image: "/landing-page-portfolion/landing-1/image.png",
    link: "/landing-page-portfolion/landing-1/index.html",
  },
  {
    category: "Kuliner",
    categoryColor: "text-orange-500",
    categoryBg: "bg-orange-50",
    title: "Kopi Senja Nusantara",
    description: "Website kafe dengan menu digital, galeri, dan order via WhatsApp.",
    stat: "+40% Order Online",
    statSub: "150+ Pesanan / Bulan",
    image: "/landing-page-portfolion/landing-2/image.png",
    link: "/landing-page-portfolion/landing-2/index.html",
  },
  {
    category: "Fashion",
    categoryColor: "text-pink-500",
    categoryBg: "bg-pink-50",
    title: "Butik Elegan Fashion",
    description: "Katalog digital premium dengan checkout WhatsApp & sinkronisasi stok.",
    stat: "Penjualan +120%",
    statSub: "Branding Premium",
    image: "/landing-page-portfolion/landing-3/image.png",
    link: "/landing-page-portfolion/landing-3/index.html",
  },
  {
    category: "Jasa",
    categoryColor: "text-purple-500",
    categoryBg: "bg-purple-50",
    title: "Bengkel Maju Jaya",
    description: "Sistem booking online, galeri before-after, & review pelanggan.",
    stat: "Tampil Profesional",
    statSub: "Reservasi Online Aktif",
    image: "/landing-page-portfolion/landing-4/image.png",
    link: "/landing-page-portfolion/landing-4/index.html",
  },
  {
    category: "Jasa",
    categoryColor: "text-cyan-500",
    categoryBg: "bg-cyan-50",
    title: "JagoCompro",
    description: "Studio desain company profile profesional dengan pengerjaan express 1 hari.",
    stat: "Desain Premium",
    statSub: "Express 1 Hari Jadi",
    image: "/portfolio/project-jago-compro-1.png",
    link: "https://jagocompro.id",
  },
  {
    category: "Retail",
    categoryColor: "text-green-500",
    categoryBg: "bg-green-50",
    title: "Toko Kelontong Berkah",
    description: "Landing page POS modern dengan digitalisasi stok & kasir otomatis.",
    stat: "Hemat 5 Jam/Minggu",
    statSub: "Kasir & Stok Digital",
    image: "/landing-page-portfolion/landing-6/image.png",
    link: "/landing-page-portfolion/landing-6/index.html",
  },
];

export const portfolioCategories = ["Semua", "Kuliner", "Fashion", "Jasa", "Retail"];

export const testimonials = [
  {
    iconName: "restaurant",
    iconBgClass: "bg-orange-100",
    iconColorClass: "text-orange-600",
    businessName: "Kedai Kopi Nusantara",
    businessType: "F&B / Kuliner",
    rating: 5,
    quote:
      "Omzet naik 30% karena pelanggan bisa lihat foto menu yang menggugah selera lewat QR code.",
    authorName: "Budi Santoso",
    authorRole: "Owner",
    authorInitials: "BS",
  },
  {
    iconName: "checkroom",
    iconBgClass: "bg-pink-100",
    iconColorClass: "text-pink-600",
    businessName: "Butik Elegan",
    businessType: "Fashion Retail",
    rating: 5,
    quote:
      "Jualan di IG makin gampang. Customer tinggal klik link di bio, pilih, dan bayar.",
    authorName: "Siti Aminah",
    authorRole: "Founder",
    authorInitials: "SA",
  },
  {
    iconName: "build",
    iconBgClass: "bg-blue-100",
    iconColorClass: "text-blue-600",
    businessName: "Bengkel Maju Jaya",
    businessType: "Jasa Otomotif",
    rating: 4.5,
    quote:
      "Website bikin bengkel kami kelihatan profesional. Klien korporat jadi percaya.",
    authorName: "Hendro Wijaya",
    authorRole: "Kepala Mekanik",
    authorInitials: "HW",
  },
  {
    iconName: "soup_kitchen",
    iconBgClass: "bg-green-100",
    iconColorClass: "text-green-600",
    businessName: "Dapur Mama",
    businessType: "Katering & Event",
    rating: 5,
    quote:
      "Sistem booking katering online sangat membantu atur jadwal. Gak ada lagi drama salah catat.",
    authorName: "Ibu Ratna",
    authorRole: "Pemilik",
    authorInitials: "IR",
  },
  {
    iconName: "hardware",
    iconBgClass: "bg-purple-100",
    iconColorClass: "text-purple-600",
    businessName: "Toko Bangunan Berkah",
    businessType: "Toko Bangunan",
    rating: 5,
    quote:
      "Sistem inventaris baru bikin saya tahu persis stok semen dan keramik, gak pernah kelebihan order lagi.",
    authorName: "Pak Darmawan",
    authorRole: "Pemilik",
    authorInitials: "PD",
  },
  {
    iconName: "spa",
    iconBgClass: "bg-rose-100",
    iconColorClass: "text-rose-600",
    businessName: "Salon Cantik Ayu",
    businessType: "Salon Kecantikan",
    rating: 5,
    quote:
      "Booking online bikin jadwal treatment rapi, gak ada lagi pelanggan bolos karena lupa catat.",
    authorName: "Maya Putri",
    authorRole: "Owner",
    authorInitials: "MP",
  },
  {
    iconName: "local_pharmacy",
    iconBgClass: "bg-teal-100",
    iconColorClass: "text-teal-600",
    businessName: "Apotek Sehat Selalu",
    businessType: "Apotek",
    rating: 4.5,
    quote:
      "Katalog digital bantu pelanggan cek obat tersedia duluan, jadi gak banyak telepon bolak-balik.",
    authorName: "Dr. Andi",
    authorRole: "Apoteker",
    authorInitials: "DA",
  },
  {
    iconName: "print",
    iconBgClass: "bg-indigo-100",
    iconColorClass: "text-indigo-600",
    businessName: "Percetakan Jaya Print",
    businessType: "Percetakan & Desain",
    rating: 5,
    quote:
      "Landing page baru menarik klien korporat karena mereka bisa lihat portofolio dan request cetak banyak langsung online.",
    authorName: "Rizky Pratama",
    authorRole: "Manager",
    authorInitials: "RP",
  },
];

export const packages = [
  {
    label: "Paket Hemat",
    price: "Rp 895.000",
    infra: "Rp 300.000 / tahun",
    fit: "Butuh tampil online cepat dengan budget minimal? Ini jawabannya.",
    isPopular: false,
    waLink: waLinks.paketHemat,
    includes: [
      { iconName: "web", text: "Landing Page 1 Halaman" },
      { iconName: "smartphone", text: "Desain Responsive (Mobile Friendly)" },
      { iconName: "chat", text: "Integrasi WhatsApp" },
      { iconName: "timer", text: "Selesai dalam 5 Hari" },
    ],
  },
  {
    label: "Starter",
    price: "Rp 1.490.000",
    infra: "Rp 1.200.000 / tahun",
    fit: "Cocok untuk UMKM / personal brand yang butuh landing page rapi & profesional.",
    isPopular: false,
    waLink: waLinks.paketStarter,
    includes: [
      { iconName: "web", text: "Website 1–2 Halaman Utama" },
      { iconName: "dns", text: "Domain & Hosting (1 tahun)" },
      { iconName: "smartphone", text: "Desain Mobile-Friendly" },
      { iconName: "chat", text: "Integrasi WhatsApp" },
      { iconName: "timer", text: "Selesai dalam 1–2 Minggu" },
    ],
  },
  {
    label: "Growth",
    price: "Rp 3.900.000",
    infra: "Rp 2.000.000 / tahun",
    fit: "Untuk bisnis yang mulai serius scale dan butuh lebih banyak fitur.",
    isPopular: true,
    waLink: waLinks.paketGrowth,
    includes: [
      { iconName: "check_circle", text: "Semua Fitur Starter" },
      { iconName: "layers", text: "Multi Halaman & Section Lengkap" },
      { iconName: "contact_mail", text: "Form Lead Capture" },
      { iconName: "search", text: "Optimalisasi SEO Dasar" },
      { iconName: "photo_library", text: "Galeri Produk/Jasa" },
      { iconName: "support_agent", text: "Prioritas Support" },
      { iconName: "timer", text: "Selesai dalam 2–3 Minggu" },
    ],
  },
  {
    label: "Scale",
    price: "Rp 7.900.000",
    infra: "Rp 3.000.000 / tahun",
    fit: "Brand yang butuh fleksibilitas tinggi, siap scale & eksperimen.",
    isPopular: false,
    waLink: waLinks.paketScale,
    includes: [
      { iconName: "check_circle", text: "Semua Fitur Growth" },
      { iconName: "dashboard", text: "Layout Kompleks & Custom" },
      { iconName: "integration_instructions", text: "Integrasi Advance" },
      { iconName: "campaign", text: "Siap Campaign Berulang" },
      { iconName: "analytics", text: "Analytics & Tracking" },
      { iconName: "security", text: "Keamanan Extra" },
      { iconName: "timer", text: "Selesai dalam 3–4 Minggu" },
    ],
  },
];

export const standardFeatures = [
  {
    iconName: "lock",
    title: "Sertifikat SSL (Gembok Hijau)",
    description:
      "Website aman dan dipercaya Google. Data pelanggan Anda terlindungi sepenuhnya.",
  },
  {
    iconName: "dns",
    title: "Hosting & Domain Gratis",
    description:
      "Sudah termasuk biaya sewa server dan alamat website untuk 1 tahun pertama.",
  },
  {
    iconName: "cloud_sync",
    title: "Backup Data Rutin",
    description:
      "Tidak perlu takut data hilang. Kami melakukan backup otomatis secara berkala.",
  },
  {
    iconName: "devices",
    title: "Mobile Responsive",
    description:
      "Website tampil sempurna di HP, Tablet, maupun Laptop pelanggan Anda.",
  },
  {
    iconName: "security",
    title: "Keamanan Anti-Hacker",
    description:
      "Proteksi berlapis untuk menjaga website Anda dari serangan pihak tidak bertanggung jawab.",
  },
  {
    iconName: "share",
    title: "Integrasi Media Sosial",
    description:
      "Hubungkan website langsung ke WhatsApp, Instagram, dan Facebook Anda.",
  },
];

export const faqs = [
  {
    question: "Berapa lama proses pembuatannya?",
    answer:
      "Rata-rata 7-14 hari kerja tergantung kompleksitas fitur yang Anda butuhkan. Untuk landing page sederhana bisa selesai dalam 3-5 hari.",
  },
  {
    question: "Berapa biaya perpanjangan domain & hosting?",
    answer:
      "Sangat terjangkau. Mulai dari Rp 500rb/tahun, sudah termasuk dukungan teknis ringan dan pembaruan keamanan (Security Updates).",
  },
  {
    question: "Apakah saya pemilik sah website saya?",
    answer:
      "Ya, 100%. Data, domain, dan konten sepenuhnya milik Anda. Kami hanya membantu mengelolanya secara teknis. Anda akan mendapatkan akses penuh jika diinginkan.",
  },
  {
    question: "Bagaimana jika saya ingin mengubah isi website?",
    answer:
      "Kami menyediakan video tutorial mudah (tanpa perlu coding) sehingga Anda bisa edit sendiri. Atau jika sibuk, Anda bisa menggunakan jasa update konten kami.",
  },
  {
    question: "Kalau ada error teknis gimana?",
    answer:
      "Tenang, semua paket sudah termasuk garansi maintenance. Jika website down atau error sistem, kami perbaiki gratis selama masa garansi/langganan aktif.",
  },
  {
    question: "Pembayarannya bagaimana?",
    answer:
      "DP 50% di awal untuk memulai pengerjaan. Pelunasan 50% sisanya dilakukan setelah website jadi dan Anda puas dengan hasilnya, sebelum serah terima akses penuh.",
  },
];
