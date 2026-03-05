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
  { label: "Kalkulator", href: "/services/calculator" },
  { label: "FAQ", href: "#faq-section" },
];

export const trustBadges = ["Garansi Support", "Transparan", "Terpercaya"];

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
    description:
      "Landing page servis mobil dengan booking via WhatsApp & info layanan lengkap.",
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
    description:
      "Website kafe dengan menu digital, galeri, dan order via WhatsApp.",
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
    description:
      "Katalog digital premium dengan checkout WhatsApp & sinkronisasi stok.",
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
    description:
      "Sistem booking online, galeri before-after, & review pelanggan.",
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
    description:
      "Studio desain company profile profesional dengan pengerjaan express 1 hari.",
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
    description:
      "Landing page POS modern dengan digitalisasi stok & kasir otomatis.",
    stat: "Hemat 5 Jam/Minggu",
    statSub: "Kasir & Stok Digital",
    image: "/landing-page-portfolion/landing-6/image.png",
    link: "/landing-page-portfolion/landing-6/index.html",
  },
];

export const portfolioCategories = [
  "Semua",
  "Kuliner",
  "Fashion",
  "Jasa",
  "Retail",
];

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
    fit: "Cocok untuk mulai dapat lead/chat WhatsApp harian dengan biaya paling efisien.",
    isPopular: false,
    waLink: waLinks.paketHemat,
    includes: [
      { iconName: "web", text: "Halaman fokus jualan & CTA WhatsApp" },
      {
        iconName: "smartphone",
        text: "Tampil meyakinkan di HP (mobile-first)",
      },
      { iconName: "chat", text: "Lead langsung masuk ke WhatsApp" },
      { iconName: "timer", text: "Go-live cepat dalam 5 hari" },
    ],
  },
  {
    label: "Starter",
    price: "Rp 1.490.000",
    infra: "Rp 1.200.000 / tahun",
    fit: "Untuk UMKM/personal brand yang ingin trust naik dan konversi lebih stabil.",
    isPopular: false,
    waLink: waLinks.paketStarter,
    includes: [
      { iconName: "web", text: "Struktur 1–2 halaman untuk edukasi + closing" },
      { iconName: "dns", text: "Domain & hosting siap pakai 1 tahun" },
      { iconName: "smartphone", text: "Pengalaman mobile yang rapi & cepat" },
      { iconName: "chat", text: "Alur CTA ke WhatsApp lebih jelas" },
      { iconName: "timer", text: "Go-live 1–2 minggu" },
    ],
  },
  {
    label: "Growth",
    price: "Rp 3.900.000",
    infra: "Rp 2.000.000 / tahun",
    fit: "Untuk bisnis yang mau scale iklan/channels dengan sistem lead yang lebih rapi.",
    isPopular: true,
    waLink: waLinks.paketGrowth,
    includes: [
      { iconName: "check_circle", text: "Semua fondasi Starter" },
      {
        iconName: "layers",
        text: "Multi halaman untuk funnel yang lebih lengkap",
      },
      {
        iconName: "contact_mail",
        text: "Lead capture untuk follow-up lebih terukur",
      },
      { iconName: "search", text: "SEO dasar untuk jangkauan organik" },
      {
        iconName: "photo_library",
        text: "Showcase produk/jasa agar trust naik",
      },
      {
        iconName: "support_agent",
        text: "Prioritas support saat campaign berjalan",
      },
      { iconName: "timer", text: "Go-live 2–3 minggu" },
    ],
  },
  {
    label: "Scale",
    price: "Rp 7.900.000",
    infra: "Rp 3.000.000 / tahun",
    fit: "Untuk brand yang butuh fleksibilitas tinggi, automasi, dan eksperimen growth berulang.",
    isPopular: false,
    waLink: waLinks.paketScale,
    includes: [
      { iconName: "check_circle", text: "Semua fondasi Growth" },
      {
        iconName: "dashboard",
        text: "Layout kompleks untuk kebutuhan multi funnel",
      },
      {
        iconName: "integration_instructions",
        text: "Integrasi lanjutan sesuai workflow bisnis",
      },
      { iconName: "campaign", text: "Siap campaign berulang lintas channel" },
      {
        iconName: "analytics",
        text: "Tracking performa untuk keputusan cepat",
      },
      { iconName: "security", text: "Lapisan keamanan ekstra" },
      { iconName: "timer", text: "Go-live 3–4 minggu" },
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

export const translations = {
  id: {
    // Nav
    navIntro: "Intro",
    navWhyUs: "Kenapa Kami?",
    navServices: "Layanan",
    navPortfolio: "Portofolio",
    navClients: "Klien",
    navPricing: "Harga",
    navFaq: "FAQ",
    navChat: "Chat WA",

    // Hero
    heroBadge: "Digital Partner Terpercaya untuk UMKM",
    heroTitle1: "Grow Your Business",
    heroTitle2: "Go Digital Today.",
    heroSubtitle:
      "Bikin website & sistem operasional tanpa ribet. Kami bangun fondasi digital yang kuat agar bisnis Anda siap melesat.",
    heroCta: "Konsultasi via WhatsApp",
    heroFormCta: "Lihat Portofolio",

    // Trust badges
    trustBadge1: "Garansi Support",
    trustBadge2: "Transparan",
    trustBadge3: "Terpercaya",

    // Why Choose Us
    whyUsLabel: "Why Choose Us",
    whyUsTitle: "Lebih dari Sekadar Vendor Website",
    whyUsSubtitle:
      "Kami hadir sebagai partner strategis untuk pertumbuhan bisnis SME Anda.",
    whyChooseUsItems: [
      {
        title: "Partner Bisnis",
        description:
          "Bukan cuma vendor lepas. Kami fokus pada konsultasi jangka panjang untuk pertumbuhan bisnis Anda.",
      },
      {
        title: "Bebas Ribet Teknis",
        description:
          "Kami urus semua teknis (server, domain, error). Anda cukup fokus jualan dan urus pelanggan.",
      },
      {
        title: "Desain Menjual",
        description:
          "Website didesain psikologis untuk mengubah pengunjung menjadi pembeli (High Conversion).",
      },
      {
        title: "Support Prioritas",
        description:
          "Dukungan WhatsApp fast response. Ada kendala? Langsung chat, langsung kami bantu.",
      },
    ],

    // Process Steps
    processLabel: "Proses Cepat",
    processTitle: "3 Langkah Mudah Punya Website",
    processSubtitle:
      "Gak perlu pusing teknis. Kami buat prosesnya sesimpel mungkin agar Anda bisa fokus bisnis.",
    processFormCta: "Isi Formulir Konsultasi",
    processSteps: [
      {
        title: "Konsultasi & Pesan",
        description:
          "Cukup cerita target bisnis Anda dan pilih paket yang pas. Gak perlu paham coding, kami yang terjemahkan ide Anda.",
      },
      {
        title: "Proses Desain & Dev",
        description:
          "Duduk manis sementara kami kerjakan teknisnya. Anda akan dapat update berkala dan revisi sampai cocok.",
      },
      {
        title: "Launch & Training",
        description:
          "Website live! Kami gak cuma lepas tangan, tapi ajari Anda cara pakainya sampai bisa kelola sendiri.",
      },
    ],

    // Promo Banner
    promoBadge: "Penawaran Terbatas untuk UMKM!",
    promoHeadline: "Gratis Maintenance 3 Bulan!",
    promoSubtext:
      "Kami tidak hanya membuatkan website, kami menjaganya tetap aman dan up-to-date sehingga Anda bisa fokus jualan.",
    promoCta: "Ambil Promo Sekarang",
    promoUrgency: "Hanya untuk 5 pendaftar pertama bulan ini",

    // Services
    servicesLabel: "Pilihan Layanan",
    servicesTitle: "Paket Lengkap untuk Kebutuhan Anda",
    servicesSubtitle:
      "Teknologi modern (Next.js) yang cepat, aman, dan SEO Friendly.",
    popularBadge: "Popular",
    servicesList: [
      {
        title: "Sistem Operasional",
        description:
          "Aplikasi untuk merapikan data kantor. Stok barang, absen karyawan, laporan keuangan.",
        features: ["User Friendly", "Akses HP & Laptop"],
        isPopular: false,
      },
      {
        title: "Landing Page",
        description:
          "Satu halaman khusus promosi. Fokus meyakinkan pengunjung untuk membeli atau menghubungi Anda.",
        features: [
          "Copywriting Menjual",
          "Siap Iklan (Ads)",
          "High Conversion",
        ],
        isPopular: true,
      },
      {
        title: "Toko Online / Katalog",
        description:
          "Pelanggan lihat produk dan pesan via WhatsApp otomatis tanpa install aplikasi.",
        features: ["Mobile First Design", "Tombol 'Pesan WA'"],
        isPopular: false,
      },
    ],

    // Portfolio
    portfolioLabel: "Studi Kasus",
    portfolioTitle: "Karya Kami yang Telah Membantu UMKM",
    portfolioSubtitle:
      "Lihat bagaimana kami membantu bisnis seperti Anda tumbuh digital.",
    miniCaseStudiesLabel: "Mini Case Study",
    miniCaseStudiesTitle: "Sebelum & Sesudah Go Digital",
    miniCaseStudiesSubtitle:
      "Ringkas, langsung ke dampak bisnis yang paling terasa.",
    miniCaseStudies: [
      {
        problem:
          "Calon pelanggan sering tanya hal yang sama di chat, respon jadi lambat.",
        solution:
          "Buat landing page dengan struktur FAQ + CTA WhatsApp yang jelas.",
        result: "Chat lebih terarah, closing lebih cepat.",
      },
      {
        problem:
          "Katalog produk masih manual, sering salah kirim info harga/stok.",
        solution:
          "Bangun katalog digital mobile-first dengan kategori & CTA pesan langsung.",
        result: "Waktu admin lebih hemat, order online lebih konsisten.",
      },
      {
        problem: "Lead dari iklan masuk tapi sulit ditrack sumbernya.",
        solution:
          "Tambahkan form lead capture + tracking event dasar untuk kampanye.",
        result: "Follow-up lebih terukur, keputusan marketing lebih cepat.",
      },
    ],
    portfolioDemoLabel: "Lihat Demo",
    portfolioItems: [
      {
        category: "Jasa",
        title: "Bengkel Mobil Sejahtera",
        description:
          "Landing page servis mobil dengan booking via WhatsApp & info layanan lengkap.",
        stat: "Trust Meningkat",
        statSub: "Booking WA Otomatis",
      },
      {
        category: "Kuliner",
        title: "Kopi Senja Nusantara",
        description:
          "Website kafe dengan menu digital, galeri, dan order via WhatsApp.",
        stat: "+40% Order Online",
        statSub: "150+ Pesanan / Bulan",
      },
      {
        category: "Fashion",
        title: "Butik Elegan Fashion",
        description:
          "Katalog digital premium dengan checkout WhatsApp & sinkronisasi stok.",
        stat: "Penjualan +120%",
        statSub: "Branding Premium",
      },
      {
        category: "Jasa",
        title: "Bengkel Maju Jaya",
        description:
          "Sistem booking online, galeri before-after, & review pelanggan.",
        stat: "Tampil Profesional",
        statSub: "Reservasi Online Aktif",
      },
      {
        category: "Jasa",
        title: "JagoCompro",
        description:
          "Studio desain company profile profesional dengan pengerjaan express 1 hari.",
        stat: "Desain Premium",
        statSub: "Express 1 Hari Jadi",
      },
      {
        category: "Retail",
        title: "Toko Kelontong Berkah",
        description:
          "Landing page POS modern dengan digitalisasi stok & kasir otomatis.",
        stat: "Hemat 5 Jam/Minggu",
        statSub: "Kasir & Stok Digital",
      },
    ],
    portfolioCategories: ["Semua", "Kuliner", "Fashion", "Jasa", "Retail"],

    // Testimonials
    testimonialsLabel: "Kisah Sukses",
    testimonialsTitle: "Dipercaya Berbagai UMKM",
    testimonialsList: [
      {
        businessType: "F&B / Kuliner",
        quote:
          "Omzet naik 30% karena pelanggan bisa lihat foto menu yang menggugah selera lewat QR code.",
        authorRole: "Owner",
      },
      {
        businessType: "Fashion Retail",
        quote:
          "Jualan di IG makin gampang. Customer tinggal klik link di bio, pilih, dan bayar.",
        authorRole: "Founder",
      },
      {
        businessType: "Jasa Otomotif",
        quote:
          "Website bikin bengkel kami kelihatan profesional. Klien korporat jadi percaya.",
        authorRole: "Kepala Mekanik",
      },
      {
        businessType: "Katering & Event",
        quote:
          "Sistem booking katering online sangat membantu atur jadwal. Gak ada lagi drama salah catat.",
        authorRole: "Pemilik",
      },
      {
        businessType: "Toko Bangunan",
        quote:
          "Sistem inventaris baru bikin saya tahu persis stok semen dan keramik, gak pernah kelebihan order lagi.",
        authorRole: "Pemilik",
      },
      {
        businessType: "Salon Kecantikan",
        quote:
          "Booking online bikin jadwal treatment rapi, gak ada lagi pelanggan bolos karena lupa catat.",
        authorRole: "Owner",
      },
      {
        businessType: "Apotek",
        quote:
          "Katalog digital bantu pelanggan cek obat tersedia duluan, jadi gak banyak telepon bolak-balik.",
        authorRole: "Apoteker",
      },
      {
        businessType: "Percetakan & Desain",
        quote:
          "Landing page baru menarik klien korporat karena mereka bisa lihat portofolio dan request cetak banyak langsung online.",
        authorRole: "Manager",
      },
    ],

    // Pricing
    pricingLabel: "Investasi",
    pricingTitle: "Pilihan Paket Sesuai Kebutuhan Anda",
    pricingSubtitle:
      "Harga transparan untuk landing page. Untuk layanan lain, mari diskusi kebutuhan Anda terlebih dahulu.",
    landingPageTitle: "Landing Page",
    landingPageDescription:
      "Setup sekali bayar + Infra tahunan (server, domain, tools)",
    setupLabel: "Setup (sekali bayar)",
    infraLabel: "Infra: ",
    packageButton: "Pesan Paket Ini",
    packagesList: [
      {
        label: "Paket Hemat",
        fit: "Cocok untuk mulai dapat lead/chat WhatsApp harian dengan biaya paling efisien.",
        includes: [
          "Halaman fokus jualan & CTA WhatsApp",
          "Tampil meyakinkan di HP (mobile-first)",
          "Lead langsung masuk ke WhatsApp",
          "Go-live cepat dalam 5 hari",
        ],
      },
      {
        label: "Starter",
        fit: "Untuk UMKM/personal brand yang ingin trust naik dan konversi lebih stabil.",
        includes: [
          "Struktur 1–2 halaman untuk edukasi + closing",
          "Domain & hosting siap pakai 1 tahun",
          "Pengalaman mobile yang rapi & cepat",
          "Alur CTA ke WhatsApp lebih jelas",
          "Go-live 1–2 minggu",
        ],
      },
      {
        label: "Growth",
        fit: "Untuk bisnis yang mau scale iklan/channels dengan sistem lead yang lebih rapi.",
        includes: [
          "Semua fondasi Starter",
          "Multi halaman untuk funnel yang lebih lengkap",
          "Lead capture untuk follow-up lebih terukur",
          "SEO dasar untuk jangkauan organik",
          "Showcase produk/jasa agar trust naik",
          "Prioritas support saat campaign berjalan",
          "Go-live 2–3 minggu",
        ],
      },
      {
        label: "Scale",
        fit: "Untuk brand yang butuh fleksibilitas tinggi, automasi, dan eksperimen growth berulang.",
        includes: [
          "Semua fondasi Growth",
          "Layout kompleks untuk kebutuhan multi funnel",
          "Integrasi lanjutan sesuai workflow bisnis",
          "Siap campaign berulang lintas channel",
          "Tracking performa untuk keputusan cepat",
          "Lapisan keamanan ekstra",
          "Go-live 3–4 minggu",
        ],
      },
    ],
    otherServicesHeading: "Layanan Lainnya",
    otherServicesSubtitle:
      "Harga disesuaikan dengan fitur & kompleksitas kebutuhan Anda",
    otherServicesList: [
      {
        title: "Toko Online / Katalog",
        description:
          "Pelanggan lihat produk dan pesan via WhatsApp. Harga tergantung jumlah produk, fitur filter, dan integrasi pembayaran.",
        features: [
          "Katalog produk dengan kategori",
          "Checkout via WhatsApp",
          "Mobile-first responsive",
          "Fitur custom sesuai kebutuhan",
        ],
        cta: "Konsultasi Gratis",
      },
      {
        title: "Sistem Operasional",
        description:
          "Aplikasi untuk merapikan data kantor. Harga tergantung modul yang dibutuhkan dan jumlah pengguna.",
        features: [
          "Manajemen stok & inventaris",
          "Absensi & data karyawan",
          "Laporan keuangan otomatis",
          "Modul custom sesuai bisnis",
        ],
        cta: "Konsultasi Gratis",
      },
      {
        title: "Mobile Apps",
        description:
          "Aplikasi mobile untuk bisnis Anda. Harga tergantung platform (Android/iOS), fitur, dan kompleksitas.",
        features: [
          "Android & iOS (Cross-platform)",
          "Push notification",
          "Offline mode support",
          "Fitur custom sesuai kebutuhan",
        ],
        cta: "Konsultasi Gratis",
      },
    ],
    pricingInfoSetup:
      "Setup = biaya pembuatan awal (sekali bayar). Infra = server, domain & tools (tahunan).",
    pricingInfoMaintenance:
      "Maintenance rutin bersifat opsional, bisa ditambah kapan saja sesuai kebutuhan.",

    // Standard Features
    standardFeaturesLabel: "Value Added",
    standardFeaturesTitle: "Fitur Standar di Semua Paket",
    standardFeaturesSubtitle:
      "Tidak perlu bayar lebih. Fitur penting ini sudah otomatis Anda dapatkan.",
    standardFeaturesList: [
      {
        title: "Sertifikat SSL (Gembok Hijau)",
        description:
          "Website aman dan dipercaya Google. Data pelanggan Anda terlindungi sepenuhnya.",
      },
      {
        title: "Hosting & Domain Gratis",
        description:
          "Sudah termasuk biaya sewa server dan alamat website untuk 1 tahun pertama.",
      },
      {
        title: "Backup Data Rutin",
        description:
          "Tidak perlu takut data hilang. Kami melakukan backup otomatis secara berkala.",
      },
      {
        title: "Mobile Responsive",
        description:
          "Website tampil sempurna di HP, Tablet, maupun Laptop pelanggan Anda.",
      },
      {
        title: "Keamanan Anti-Hacker",
        description:
          "Proteksi berlapis untuk menjaga website Anda dari serangan pihak tidak bertanggung jawab.",
      },
      {
        title: "Integrasi Media Sosial",
        description:
          "Hubungkan website langsung ke WhatsApp, Instagram, dan Facebook Anda.",
      },
    ],

    // FAQ
    faqLabel: "Tanya Jawab",
    faqTitle: "Paling Sering Ditanyakan",
    faqSubtitle: "Informasi lengkap seputar layanan, harga, dan purna jual.",
    faqList: [
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
    ],

    // Final CTA
    finalCtaLabel: "Mulai Sekarang",
    finalCtaTitleLine1: "Konsultasi Gratis,",
    finalCtaTitleLine2: "Tanpa Risiko.",
    finalCtaSubtitle:
      "Ceritakan kebutuhan bisnis Anda lewat WhatsApp. Kami akan berikan solusi strategi digital dan estimasi biaya dalam 24 jam.",
    finalCtaPrimary: "Chat WhatsApp Sekarang",
    finalCtaSecondary: "Isi Form Briefing",

    // Footer
    footerParagraph:
      "Mitra digital terpercaya yang membantu UMKM tumbuh pesat di era digital dengan solusi website profesional dan terjangkau.",
    footerProfileRole:
      "Software engineer sejak 2016. Fokus membantu UMKM bertransformasi digital dengan solusi yang efisien dan scalable.",
    footerContactTitle: "Kontak Kami",
    footerFollowTitle: "Ikuti Kami",
    footerRights: "© Fadli Dev Studio. All rights reserved.",
  },
  en: {
    // Nav
    navIntro: "Intro",
    navWhyUs: "Why Us?",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navClients: "Clients",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navChat: "Chat on WhatsApp",

    // Hero
    heroBadge: "Trusted Digital Partner for SMEs",
    heroTitle1: "Grow Your Business",
    heroTitle2: "Go Digital Today.",
    heroSubtitle:
      "Build a website & operations system without the hassle. We create a strong digital foundation so your business is ready to accelerate.",
    heroCta: "Consult via WhatsApp",
    heroFormCta: "View Our Portfolio",

    // Trust badges
    trustBadge1: "Support Guarantee",
    trustBadge2: "Transparent",
    trustBadge3: "Trustworthy",

    // Why Choose Us
    whyUsLabel: "Why Choose Us",
    whyUsTitle: "More Than a Website Vendor",
    whyUsSubtitle:
      "We appear as a strategic partner for your SME's growth trajectory.",
    whyChooseUsItems: [
      {
        title: "Business Partner",
        description:
          "More than a freelance vendor. We focus on long-term consultation to support your business growth.",
      },
      {
        title: "No Technical Hassle",
        description:
          "We handle all technical aspects (servers, domains, errors). You just focus on selling and supporting customers.",
      },
      {
        title: "Sales-Driven Design",
        description:
          "Websites are designed with psychology in mind to turn visitors into buyers (High Conversion).",
      },
      {
        title: "Priority Support",
        description:
          "Fast-response WhatsApp support. Have an issue? Chat us and we will help immediately.",
      },
    ],

    // Process Steps
    processLabel: "Quick Process",
    processTitle: "3 Easy Steps to Own a Website",
    processSubtitle:
      "No need to stress over the tech. We keep the process as simple as possible so you can focus on running your business.",
    processFormCta: "Fill the Consultation Form",
    processSteps: [
      {
        title: "Consult & Order",
        description:
          "Just tell us your business goals and choose the right package. No coding knowledge needed; we translate your ideas.",
      },
      {
        title: "Design & Dev",
        description:
          "Sit back while we handle the technical work. You will receive regular updates and revisions until it's perfect.",
      },
      {
        title: "Launch & Training",
        description:
          "Website goes live! We don’t just hand it over; we teach you how to use it until you feel confident managing it yourself.",
      },
    ],

    // Promo Banner
    promoBadge: "Limited Offer for SMEs!",
    promoHeadline: "Free Maintenance for 3 Months!",
    promoSubtext:
      "We not only build your website but keep it secure and up-to-date so you can focus on selling.",
    promoCta: "Claim This Offer Now",
    promoUrgency: "Only for the first 5 signups this month",

    // Services
    servicesLabel: "Service Options",
    servicesTitle: "Complete Packages for Your Needs",
    servicesSubtitle:
      "Modern tech (Next.js) that is fast, secure, and SEO friendly.",
    popularBadge: "Popular",
    servicesList: [
      {
        title: "Operational System",
        description:
          "Apps that tidy up office data. Stock items, employee attendance, financial reports.",
        features: ["User Friendly", "Access from Mobile & Laptop"],
        isPopular: false,
      },
      {
        title: "Landing Page",
        description:
          "A single promotional page focused on convincing visitors to buy or contact you.",
        features: ["Persuasive Copywriting", "Ad-ready", "High Conversion"],
        isPopular: true,
      },
      {
        title: "Online Store / Catalog",
        description:
          "Customers browse products and order via automated WhatsApp without installing apps.",
        features: ["Mobile-First Design", "Auto 'Order via WA' Button"],
        isPopular: false,
      },
    ],

    // Portfolio
    portfolioLabel: "Case Studies",
    portfolioTitle: "Our Work That Helps SMEs Grow",
    portfolioSubtitle:
      "See how we help businesses like yours thrive in the digital space.",
    miniCaseStudiesLabel: "Mini Case Study",
    miniCaseStudiesTitle: "Before & After Going Digital",
    miniCaseStudiesSubtitle: "Short and practical—focused on business impact.",
    miniCaseStudies: [
      {
        problem:
          "Prospects kept asking the same questions in chat, slowing response time.",
        solution:
          "Built a landing page with clear FAQ structure and WhatsApp CTA.",
        result: "More focused chats and faster closing.",
      },
      {
        problem:
          "Product catalog was still manual, causing price/stock miscommunication.",
        solution:
          "Created a mobile-first digital catalog with categories and direct order CTA.",
        result: "Less admin time and more consistent online orders.",
      },
      {
        problem: "Ad leads were coming in but source tracking was unclear.",
        solution: "Added lead capture form and basic campaign event tracking.",
        result: "More measurable follow-up and faster marketing decisions.",
      },
    ],
    portfolioDemoLabel: "View Demo",
    portfolioItems: [
      {
        category: "Services",
        title: "Bengkel Mobil Sejahtera",
        description:
          "Auto shop landing page with WhatsApp booking & full service information.",
        stat: "Trust Increased",
        statSub: "Automated WhatsApp Bookings",
      },
      {
        category: "Culinary",
        title: "Kopi Senja Nusantara",
        description:
          "Cafe website featuring a digital menu, gallery, and WhatsApp ordering.",
        stat: "+40% Online Orders",
        statSub: "150+ Orders / Month",
      },
      {
        category: "Fashion",
        title: "Butik Elegan Fashion",
        description:
          "Premium digital catalog with WhatsApp checkout & stock synchronization.",
        stat: "Sales +120%",
        statSub: "Premium Branding",
      },
      {
        category: "Services",
        title: "Bengkel Maju Jaya",
        description:
          "Online booking system, before-after gallery, & customer reviews.",
        stat: "Professional Image",
        statSub: "Active Online Reservations",
      },
      {
        category: "Services",
        title: "JagoCompro",
        description:
          "Professional company profile design studio with express 1-day delivery.",
        stat: "Premium Design",
        statSub: "Express 1-Day Delivery",
      },
      {
        category: "Retail",
        title: "Toko Kelontong Berkah",
        description:
          "Modern POS landing page with digital inventory & automated cashier.",
        stat: "Save 5 Hours/Week",
        statSub: "Digital Cashier & Stock",
      },
    ],
    portfolioCategories: ["All", "Culinary", "Fashion", "Services", "Retail"],

    // Testimonials
    testimonialsLabel: "Success Stories",
    testimonialsTitle: "Trusted by Various SMEs",
    testimonialsList: [
      {
        businessType: "F&B / Culinary",
        quote:
          "Revenue rose 30% because customers can view mouthwatering menu photos via QR code.",
        authorRole: "Owner",
      },
      {
        businessType: "Fashion Retail",
        quote:
          "Selling on IG became easier. Customers just tap the link in the bio, choose, and pay.",
        authorRole: "Founder",
      },
      {
        businessType: "Automotive Services",
        quote:
          "The website made our shop look professional. Corporate clients now trust us.",
        authorRole: "Head Mechanic",
      },
      {
        businessType: "Catering & Events",
        quote:
          "The online catering booking system keeps schedules organized. No more mistakes from missed notes.",
        authorRole: "Owner",
      },
      {
        businessType: "Building Materials Store",
        quote:
          "The new inventory system lets me know exactly how much cement and tile we have, so we stop over-ordering.",
        authorRole: "Owner",
      },
      {
        businessType: "Beauty Salon",
        quote:
          "Online booking keeps treatment schedules tidy, no more no-shows from forgotten appointments.",
        authorRole: "Owner",
      },
      {
        businessType: "Pharmacy",
        quote:
          "The digital catalog lets customers check medicine availability first, so there are fewer back-and-forth calls.",
        authorRole: "Pharmacist",
      },
      {
        businessType: "Printing & Design",
        quote:
          "The new landing page attracts corporate clients because they can review the portfolio and request large print jobs entirely online.",
        authorRole: "Manager",
      },
    ],

    // Pricing
    pricingLabel: "Investment",
    pricingTitle: "Package Options that Match Your Needs",
    pricingSubtitle:
      "Transparent pricing for landing pages. For other services, let’s talk about your requirements first.",
    landingPageTitle: "Landing Page",
    landingPageDescription:
      "One-time setup + annual infrastructure (server, domain, tools)",
    setupLabel: "Setup (one-time payment)",
    infraLabel: "Infra: ",
    packageButton: "Order This Package",
    packagesList: [
      {
        label: "Economy Package",
        fit: "Best for getting daily WhatsApp leads quickly with the most efficient budget.",
        includes: [
          "Conversion-focused page with WhatsApp CTA",
          "Mobile-first, trustworthy presentation",
          "Leads flow directly to WhatsApp",
          "Go live in 5 days",
        ],
      },
      {
        label: "Starter",
        fit: "For SMEs/personal brands that want stronger trust and steadier conversion.",
        includes: [
          "1–2 page structure for education + closing",
          "Ready-to-use domain & hosting (1 year)",
          "Fast and polished mobile experience",
          "Clear WhatsApp CTA flow",
          "Go live in 1–2 weeks",
        ],
      },
      {
        label: "Growth",
        fit: "For businesses scaling ads/channels with a cleaner lead system.",
        includes: [
          "All Starter foundations",
          "Multi-page flow for fuller funnel journeys",
          "Lead capture for measurable follow-up",
          "Basic SEO for organic reach",
          "Product/service showcase to boost trust",
          "Priority support during campaigns",
          "Go live in 2–3 weeks",
        ],
      },
      {
        label: "Scale",
        fit: "For brands needing high flexibility, automation, and repeatable growth experiments.",
        includes: [
          "All Growth foundations",
          "Complex layouts for multi-funnel needs",
          "Advanced integrations for business workflows",
          "Recurring campaign-ready setup",
          "Performance tracking for faster decisions",
          "Enhanced security layers",
          "Go live in 3–4 weeks",
        ],
      },
    ],
    otherServicesHeading: "Additional Services",
    otherServicesSubtitle:
      "Pricing adjusted based on features and your complexity needs",
    otherServicesList: [
      {
        title: "Online Store / Catalog",
        description:
          "Customers browse products and order via WhatsApp. Pricing depends on the number of products, filtering features, and payment integrations.",
        features: [
          "Categorized product catalog",
          "WhatsApp checkout",
          "Mobile-first responsive",
          "Custom features tailored to your needs",
        ],
        cta: "Free Consultation",
      },
      {
        title: "Operational Systems",
        description:
          "Apps to organize office data. Pricing depends on required modules and user count.",
        features: [
          "Stock & inventory management",
          "Attendance & employee data",
          "Automated financial reports",
          "Custom modules per business",
        ],
        cta: "Free Consultation",
      },
      {
        title: "Mobile Apps",
        description:
          "Mobile apps for your business. Pricing varies by platform (Android/iOS), features, and complexity.",
        features: [
          "Android & iOS (Cross-platform)",
          "Push notifications",
          "Offline mode support",
          "Custom features tailored to your needs",
        ],
        cta: "Free Consultation",
      },
    ],
    pricingInfoSetup:
      "Setup = initial build cost (one-time payment). Infra = server, domain & tools (annual).",
    pricingInfoMaintenance:
      "Routine maintenance is optional and can be added anytime based on your needs.",

    // Standard Features
    standardFeaturesLabel: "Value Added",
    standardFeaturesTitle: "Standard Features in All Packages",
    standardFeaturesSubtitle:
      "No need to pay extra. These essential features are automatically included.",
    standardFeaturesList: [
      {
        title: "SSL Certificate (Secure Lock)",
        description:
          "Secure website trusted by Google. Your customer data stays fully protected.",
      },
      {
        title: "Free Hosting & Domain",
        description:
          "Includes server rental and web address for the first year",
      },
      {
        title: "Routine Data Backups",
        description:
          "No need to fear data loss. We perform automatic backups regularly.",
      },
      {
        title: "Mobile Responsive",
        description: "Website looks perfect on phones, tablets, and laptops.",
      },
      {
        title: "Anti-Hacker Security",
        description:
          "Multi-layer protection to guard your site from irresponsible attacks.",
      },
      {
        title: "Social Media Integration",
        description:
          "Connect your website directly to WhatsApp, Instagram, and Facebook.",
      },
    ],

    // FAQ
    faqLabel: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle:
      "Complete information about our services, pricing, and aftersales support.",
    faqList: [
      {
        question: "How long does the build process take?",
        answer:
          "Typically 7-14 business days depending on feature complexity. Simple landing pages can finish in 3-5 days.",
      },
      {
        question: "How much is the domain & hosting renewal?",
        answer:
          "Very affordable. Starts from Rp 500k/year, including light technical support and security updates.",
      },
      {
        question: "Will I fully own my website?",
        answer:
          "Yes, 100%. Data, domain, and content belong entirely to you. We only manage it technically. Full access is available if desired.",
      },
      {
        question: "What if I want to change the website content?",
        answer:
          "We provide easy video tutorials (no coding) so you can edit yourself. Or if you're busy, take advantage of our content update service.",
      },
      {
        question: "What happens if there's a technical error?",
        answer:
          "Relax, all packages include maintenance warranty. If your site goes down or has errors, we fix it for free while the warranty/subscription is active.",
      },
      {
        question: "How does payment work?",
        answer:
          "50% down payment to start the work. The remaining 50% is paid once you're happy with the result and before handing over full access.",
      },
    ],

    // Final CTA
    finalCtaLabel: "Get Started",
    finalCtaTitleLine1: "Free Consultation,",
    finalCtaTitleLine2: "Risk-Free.",
    finalCtaSubtitle:
      "Share your business needs via WhatsApp. We’ll provide a digital strategy and cost estimate within 24 hours.",
    finalCtaPrimary: "Chat on WhatsApp Now",
    finalCtaSecondary: "Fill the Briefing Form",

    // Footer
    footerParagraph:
      "A trusted digital partner helping SMEs grow rapidly in the digital era with professional and affordable website solutions.",
    footerProfileRole:
      "Software engineer since 2016. Focused on helping SMEs transform digitally with efficient and scalable solutions.",
    footerContactTitle: "Contact Us",
    footerFollowTitle: "Follow Us",
    footerRights: "© Fadli Dev Studio. All rights reserved.",
  },
};
