const fs = require('fs');
const path = require('path');

// I will use a more robust way to extract. 
// Since I can't easily parse TS with regex perfectly for complex objects, 
// I'll just use the content I read from the file.

const services_data_raw = fs.readFileSync(path.join(process.cwd(), 'features/services/data/services-data.ts'), 'utf8');

// I'll use a trick: extract the translations object content
const id_match = services_data_raw.match(/id:\s*{([\s\S]*?)},\s*en:/);
const en_match = services_data_raw.match(/en:\s*{([\s\S]*?)}\s*};/);

// This is still risky. I'll just write the final JSONs directly using the content I have in my context.
// I have the full content of services-data.ts from previous tool calls.

// I will now construct the ID and EN JSONs based on the tool output I got earlier.
// I'll do it in segments.

const idData = {
    "nav": {
        "navIntro": "Intro",
        "navWhyUs": "Kenapa Kami?",
        "navServices": "Layanan",
        "navPortfolio": "Portofolio",
        "navClients": "Klien",
        "navPricing": "Harga",
        "navFaq": "FAQ",
        "navChat": "Chat WA"
    },
    "hero": {
        "heroBadge": "Digital Partner Terpercaya untuk UMKM",
        "heroTitle1": "Grow Your Business",
        "heroTitle2": "Go Digital Today.",
        "heroSubtitle": "Bikin website & sistem operasional tanpa ribet. Kami bangun fondasi digital yang kuat agar bisnis Anda siap melesat.",
        "heroCta": "Konsultasi via WhatsApp",
        "heroFormCta": "Lihat Portofolio"
    },
    "trustBadges": {
        "badge1": "Garansi Support",
        "badge2": "Transparan",
        "badge3": "Terpercaya"
    },
    "whyUs": {
        "label": "Why Choose Us",
        "title": "Lebih dari Sekadar Vendor Website",
        "subtitle": "Kami hadir sebagai partner strategis untuk pertumbuhan bisnis SME Anda.",
        "items": [
            {
                "title": "Partner Bisnis",
                "description": "Bukan cuma vendor lepas. Kami fokus pada konsultasi jangka panjang untuk pertumbuhan bisnis Anda.",
                "iconName": "handshake",
                "iconBgClass": "bg-blue-100",
                "iconHoverBgClass": "group-hover:bg-primary group-hover:text-white",
                "iconTextClass": "text-primary"
            },
            {
                "title": "Bebas Ribet Teknis",
                "description": "Kami urus semua teknis (server, domain, error). Anda cukup fokus jualan dan urus pelanggan.",
                "iconName": "settings_suggest",
                "iconBgClass": "bg-purple-100",
                "iconHoverBgClass": "group-hover:bg-purple-600 group-hover:text-white",
                "iconTextClass": "text-purple-600"
            },
            {
                "title": "Desain Menjual",
                "description": "Website didesain psikologis untuk mengubah pengunjung menjadi pembeli (High Conversion).",
                "iconName": "trending_up",
                "iconBgClass": "bg-orange-100",
                "iconHoverBgClass": "group-hover:bg-orange-500 group-hover:text-white",
                "iconTextClass": "text-orange-600"
            },
            {
                "title": "Support Prioritas",
                "description": "Dukungan WhatsApp fast response. Ada kendala? Langsung chat, langsung kami bantu.",
                "iconName": "support_agent",
                "iconBgClass": "bg-green-100",
                "iconHoverBgClass": "group-hover:bg-green-600 group-hover:text-white",
                "iconTextClass": "text-green-600"
            }
        ]
    },
    "process": {
        "label": "Proses Cepat",
        "title": "3 Langkah Mudah Punya Website",
        "subtitle": "Gak perlu pusing teknis. Kami buat prosesnya sesimpel mungkin agar Anda bisa fokus bisnis.",
        "formCta": "Isi Formulir Konsultasi",
        "steps": [
            {
                "title": "Konsultasi & Pesan",
                "description": "Cukup cerita target bisnis Anda dan pilih paket yang pas. Gak perlu paham coding, kami yang terjemahkan ide Anda.",
                "iconName": "chat_bubble",
                "iconColor": "text-primary",
                "numberBg": "bg-primary",
                "blurBg": "bg-blue-100"
            },
            {
                "title": "Proses Desain & Dev",
                "description": "Duduk manis sementara kami kerjakan teknisnya. Anda akan dapat update berkala dan revisi sampai cocok.",
                "iconName": "design_services",
                "iconColor": "text-purple-600",
                "numberBg": "bg-purple-600",
                "blurBg": "bg-purple-100"
            },
            {
                "title": "Launch & Training",
                "description": "Website live! Kami gak cuma lepas tangan, tapi ajari Anda cara pakainya sampai bisa kelola sendiri.",
                "iconName": "rocket_launch",
                "iconColor": "text-green-500",
                "numberBg": "bg-green-500",
                "blurBg": "bg-green-100"
            }
        ]
    },
    "promo": {
        "badge": "Penawaran Terbatas untuk UMKM!",
        "headline": "Gratis Maintenance 3 Bulan!",
        "subtext": "Kami tidak hanya membuatkan website, kami menjaganya tetap aman dan up-to-date sehingga Anda bisa fokus jualan.",
        "cta": "Ambil Promo Sekarang",
        "urgency": "Hanya untuk 5 pendaftar pertama bulan ini"
    },
    "services": {
        "label": "Pilihan Layanan",
        "title": "Paket Lengkap untuk Kebutuhan Anda",
        "subtitle": "Teknologi modern (Next.js) yang cepat, aman, dan SEO Friendly.",
        "popularBadge": "Popular",
        "items": [
            {
                "title": "Sistem Operasional",
                "description": "Aplikasi untuk merapikan data kantor. Stok barang, absen karyawan, laporan keuangan.",
                "features": ["User Friendly", "Akses HP & Laptop"],
                "isPopular": false,
                "iconName": "inventory_2",
                "iconBgClass": "bg-blue-50"
            },
            {
                "title": "Landing Page",
                "description": "Satu halaman khusus promosi. Fokus meyakinkan pengunjung untuk membeli atau menghubungi Anda.",
                "features": ["Copywriting Menjual", "Siap Iklan (Ads)", "High Conversion"],
                "isPopular": true,
                "iconName": "web",
                "iconBgClass": "bg-primary/10"
            },
            {
                "title": "Toko Online / Katalog",
                "description": "Pelanggan lihat produk dan pesan via WhatsApp otomatis tanpa install aplikasi.",
                "features": ["Mobile First Design", "Tombol 'Pesan WA'"],
                "isPopular": false,
                "iconName": "shopping_cart",
                "iconBgClass": "bg-blue-50"
            }
        ]
    },
    "portfolio": {
        "label": "Studi Kasus",
        "title": "Karya Kami yang Telah Membantu UMKM",
        "subtitle": "Lihat bagaimana kami membantu bisnis seperti Anda tumbuh digital.",
        "miniCaseStudiesLabel": "Mini Case Study",
        "miniCaseStudiesTitle": "Sebelum & Sesudah Go Digital",
        "miniCaseStudiesSubtitle": "Ringkas, langsung ke dampak bisnis yang paling terasa.",
        "miniCaseStudies": [
            {
                "problem": "Calon pelanggan sering tanya hal yang sama di chat, respon jadi lambat.",
                "solution": "Buat landing page dengan struktur FAQ + CTA WhatsApp yang jelas.",
                "result": "Chat lebih terarah, closing lebih cepat."
            },
            {
                "problem": "Katalog produk masih manual, sering salah kirim info harga/stok.",
                "solution": "Bangun katalog digital mobile-first dengan kategori & CTA pesan langsung.",
                "result": "Waktu admin lebih hemat, order online lebih konsisten."
            },
            {
                "problem": "Lead dari iklan masuk tapi sulit ditrack sumbernya.",
                "solution": "Tambahkan form lead capture + tracking event dasar untuk kampanye.",
                "result": "Follow-up lebih terukur, keputusan marketing lebih cepat."
            }
        ],
        "demoLabel": "Lihat Demo",
        "categories": ["Semua", "Kuliner", "Fashion", "Jasa", "Retail"],
        "items": [
            {
                "category": "Jasa",
                "title": "Bengkel Mobil Sejahtera",
                "description": "Landing page servis mobil dengan booking via WhatsApp & info layanan lengkap.",
                "stat": "Trust Meningkat",
                "statSub": "Booking WA Otomatis",
                "categoryColor": "text-blue-500",
                "categoryBg": "bg-blue-50",
                "image": "/images/projects/project-sibema-1.png",
                "link": "/landing-page-portfolion/landing-1/index.html"
            },
            {
                "category": "Kuliner",
                "title": "Kopi Senja Nusantara",
                "description": "Website kafe dengan menu digital, galeri, dan order via WhatsApp.",
                "stat": "+40% Order Online",
                "statSub": "150+ Pesanan / Bulan",
                "categoryColor": "text-orange-500",
                "categoryBg": "bg-orange-50",
                "image": "/images/projects/project-sijaki-1.png",
                "link": "/landing-page-portfolion/landing-2/index.html"
            },
            {
                "category": "Fashion",
                "title": "Butik Elegan Fashion",
                "description": "Katalog digital premium dengan checkout WhatsApp & sinkronisasi stok.",
                "stat": "Penjualan +120%",
                "statSub": "Branding Premium",
                "categoryColor": "text-pink-500",
                "categoryBg": "bg-pink-50",
                "image": "/images/projects/project-pos-1.png",
                "link": "/landing-page-portfolion/landing-3/index.html"
            },
            {
                "category": "Jasa",
                "title": "Bengkel Maju Jaya",
                "description": "Sistem booking online, galeri before-after, & review pelanggan.",
                "stat": "Tampil Profesional",
                "statSub": "Reservasi Online Aktif",
                "categoryColor": "text-purple-500",
                "categoryBg": "bg-purple-50",
                "image": "/images/projects/project-siketa-1.png",
                "link": "/landing-page-portfolion/landing-4/index.html"
            },
            {
                "category": "Jasa",
                "title": "JagoCompro",
                "description": "Studio desain company profile profesional dengan pengerjaan express 1 hari.",
                "stat": "Desain Premium",
                "statSub": "Express 1 Hari Jadi",
                "categoryColor": "text-cyan-500",
                "categoryBg": "bg-cyan-50",
                "image": "/images/projects/project-jago-compro-1.png",
                "link": "https://jagocompro.id"
            },
            {
                "category": "Retail",
                "title": "Toko Kelontong Berkah",
                "description": "Landing page POS modern dengan digitalisasi stok & kasir otomatis.",
                "stat": "Hemat 5 Jam/Minggu",
                "statSub": "Kasir & Stok Digital",
                "categoryColor": "text-green-500",
                "categoryBg": "bg-green-50",
                "image": "/images/projects/project-monitoring-staf-1.png",
                "link": "/landing-page-portfolion/landing-6/index.html"
            }
        ]
    },
    "testimonials": {
        "label": "Kisah Sukses",
        "title": "Dipercaya Berbagai UMKM",
        "items": [
            {
                "businessType": "F&B / Kuliner",
                "quote": "Omzet naik 30% karena pelanggan bisa lihat foto menu yang menggugah selera lewat QR code.",
                "authorRole": "Owner",
                "authorName": "Budi Santoso",
                "authorInitials": "BS",
                "iconName": "restaurant",
                "iconBgClass": "bg-orange-100",
                "iconColorClass": "text-orange-600",
                "businessName": "Kedai Kopi Nusantara",
                "rating": 5
            },
            {
                "businessType": "Fashion Retail",
                "quote": "Jualan di IG makin gampang. Customer tinggal klik link di bio, pilih, dan bayar.",
                "authorRole": "Founder",
                "authorName": "Siti Aminah",
                "authorInitials": "SA",
                "iconName": "checkroom",
                "iconBgClass": "bg-pink-100",
                "iconColorClass": "text-pink-600",
                "businessName": "Butik Elegan",
                "rating": 5
            },
            {
                "businessType": "Jasa Otomotif",
                "quote": "Website bikin bengkel kami kelihatan profesional. Klien korporat jadi percaya.",
                "authorRole": "Kepala Mekanik",
                "authorName": "Hendro Wijaya",
                "authorInitials": "HW",
                "iconName": "build",
                "iconBgClass": "bg-blue-100",
                "iconColorClass": "text-blue-600",
                "businessName": "Bengkel Maju Jaya",
                "rating": 4.5
            },
            {
                "businessType": "Katering & Event",
                "quote": "Sistem booking katering online sangat membantu atur jadwal. Gak ada lagi drama salah catat.",
                "authorRole": "Pemilik",
                "authorName": "Ibu Ratna",
                "authorInitials": "IR",
                "iconName": "soup_kitchen",
                "iconBgClass": "bg-green-100",
                "iconColorClass": "text-green-600",
                "businessName": "Dapur Mama",
                "rating": 5
            },
            {
                "businessType": "Toko Bangunan",
                "quote": "Sistem inventaris baru bikin saya tahu persis stok semen dan keramik, gak pernah kelebihan order lagi.",
                "authorRole": "Pemilik",
                "authorName": "Pak Darmawan",
                "authorInitials": "PD",
                "iconName": "hardware",
                "iconBgClass": "bg-purple-100",
                "iconColorClass": "text-purple-600",
                "businessName": "Toko Bangunan Berkah",
                "rating": 5
            },
            {
                "businessType": "Salon Kecantikan",
                "quote": "Booking online bikin jadwal treatment rapi, gak ada lagi pelanggan bolos karena lupa catat.",
                "authorRole": "Owner",
                "authorName": "Maya Putri",
                "authorInitials": "MP",
                "iconName": "spa",
                "iconBgClass": "bg-rose-100",
                "iconColorClass": "text-rose-600",
                "businessName": "Salon Cantik Ayu",
                "rating": 5
            },
            {
                "businessType": "Apotek",
                "quote": "Katalog digital bantu pelanggan cek obat tersedia duluan, jadi gak banyak telepon bolak-balik.",
                "authorRole": "Apoteker",
                "authorName": "Dr. Andi",
                "authorInitials": "DA",
                "iconName": "local_pharmacy",
                "iconBgClass": "bg-teal-100",
                "iconColorClass": "text-teal-600",
                "businessName": "Apotek Sehat Selalu",
                "rating": 4.5
            },
            {
                "businessType": "Percetakan & Desain",
                "quote": "Landing page baru menarik klien korporat karena mereka bisa lihat portofolio dan request cetak banyak langsung online.",
                "authorRole": "Manager",
                "authorName": "Rizky Pratama",
                "authorInitials": "RP",
                "iconName": "print",
                "iconBgClass": "bg-indigo-100",
                "iconColorClass": "text-indigo-600",
                "businessName": "Percetakan Jaya Print",
                "rating": 5
            }
        ]
    },
    "pricing": {
        "label": "Investasi",
        "title": "Pilihan Paket Sesuai Kebutuhan Anda",
        "subtitle": "Harga transparan untuk landing page. Untuk layanan lain, mari diskusi kebutuhan Anda terlebih dahulu.",
        "landingPageTitle": "Landing Page",
        "landingPageDescription": "Setup sekali bayar + Infra tahunan (server, domain, tools)",
        "setupLabel": "Setup (sekali bayar)",
        "infraLabel": "Infra: ",
        "packageButton": "Pesan Paket Ini",
        "packages": [
            {
                "label": "Paket Hemat",
                "price": "Rp 895.000",
                "infra": "Rp 300.000 / tahun",
                "fit": "Cocok untuk mulai dapat lead/chat WhatsApp harian dengan biaya paling efisien.",
                "waMessage": "Halo Fadli, saya tertarik dengan Paket Hemat (Rp 895.000). Bisa jelaskan detailnya?",
                "includes": [
                    { "iconName": "web", "text": "Halaman fokus jualan & CTA WhatsApp" },
                    { "iconName": "smartphone", "text": "Tampil meyakinkan di HP (mobile-first)" },
                    { "iconName": "chat", "text": "Lead langsung masuk ke WhatsApp" },
                    { "iconName": "timer", "text": "Go-live cepat dalam 5 hari" }
                ],
                "isPopular": false
            },
            {
                "label": "Starter",
                "price": "Rp 1.490.000",
                "infra": "Rp 1.200.000 / tahun",
                "fit": "Untuk UMKM/personal brand yang ingin trust naik dan konversi lebih stabil.",
                "waMessage": "Halo Fadli, saya mau tanya soal Paket Starter (Rp 1.490.000) untuk bisnis saya.",
                "includes": [
                    { "iconName": "web", "text": "Struktur 1–2 halaman untuk edukasi + closing" },
                    { "iconName": "dns", "text": "Domain & hosting siap pakai 1 tahun" },
                    { "iconName": "smartphone", "text": "Pengalaman mobile yang rapi & cepat" },
                    { "iconName": "chat", "text": "Alur CTA ke WhatsApp lebih jelas" },
                    { "iconName": "timer", "text": "Go-live 1–2 minggu" }
                ],
                "isPopular": false
            },
            {
                "label": "Growth",
                "price": "Rp 3.900.000",
                "infra": "Rp 2.000.000 / tahun",
                "fit": "Untuk bisnis yang mau scale iklan/channels dengan sistem lead yang lebih rapi.",
                "waMessage": "Halo Fadli, saya tertarik Paket Growth (Rp 3.900.000). Bisa diskusi kebutuhan saya?",
                "includes": [
                    { "iconName": "check_circle", "text": "Semua fondasi Starter" },
                    { "iconName": "layers", "text": "Multi halaman untuk funnel yang lebih lengkap" },
                    { "iconName": "contact_mail", "text": "Lead capture untuk follow-up lebih terukur" },
                    { "iconName": "search", "text": "SEO dasar untuk jangkauan organik" },
                    { "iconName": "photo_library", "text": "Showcase produk/jasa agar trust naik" },
                    { "iconName": "support_agent", "text": "Prioritas support saat campaign berjalan" },
                    { "iconName": "timer", "text": "Go-live 2–3 minggu" }
                ],
                "isPopular": true
            },
            {
                "label": "Scale",
                "price": "Rp 7.900.000",
                "infra": "Rp 3.000.000 / tahun",
                "fit": "Untuk brand yang butuh fleksibilitas tinggi, automasi, dan eksperimen growth berulang.",
                "waMessage": "Halo Fadli, saya butuh Paket Scale (Rp 7.900.000) untuk proyek saya. Kapan bisa mulai?",
                "includes": [
                    { "iconName": "check_circle", "text": "Semua fondasi Growth" },
                    { "iconName": "dashboard", "text": "Layout kompleks untuk kebutuhan multi funnel" },
                    { "iconName": "integration_instructions", "text": "Integrasi lanjutan sesuai workflow bisnis" },
                    { "iconName": "campaign", "text": "Siap campaign berulang lintas channel" },
                    { "iconName": "analytics", "text": "Tracking performa untuk keputusan cepat" },
                    { "iconName": "security", "text": "Lapisan keamanan ekstra" },
                    { "iconName": "timer", "text": "Go-live 3–4 minggu" }
                ],
                "isPopular": false
            }
        ],
        "otherServicesHeading": "Layanan Lainnya",
        "otherServicesSubtitle": "Harga disesuaikan dengan fitur & kompleksitas kebutuhan Anda",
        "otherServices": [
            {
                "title": "Toko Online / Katalog",
                "description": "Pelanggan lihat produk dan pesan via WhatsApp. Harga tergantung jumlah produk, fitur filter, dan integrasi pembayaran.",
                "features": ["Katalog produk dengan kategori", "Checkout via WhatsApp", "Mobile-first responsive", "Fitur custom sesuai kebutuhan"],
                "cta": "Konsultasi Gratis",
                "icon": "shopping_cart",
                "color": "blue",
                "waMessage": "Halo Fadli, saya butuh website toko online / katalog produk. Bisa konsultasi dulu?"
            },
            {
                "title": "Sistem Operasional",
                "description": "Aplikasi untuk merapikan data kantor. Harga tergantung modul yang dibutuhkan dan jumlah pengguna.",
                "features": ["Manajemen stok & inventaris", "Absensi & data karyawan", "Laporan keuangan otomatis", "Modul custom sesuai bisnis"],
                "cta": "Konsultasi Gratis",
                "icon": "inventory_2",
                "color": "purple",
                "waMessage": "Halo Fadli, saya butuh sistem operasional untuk bisnis saya (stok, absensi, dll). Bisa diskusi?"
            },
            {
                "title": "Mobile Apps",
                "description": "Aplikasi mobile untuk bisnis Anda. Harga tergantung platform (Android/iOS), fitur, dan kompleksitas.",
                "features": ["Android & iOS (Cross-platform)", "Push notification", "Offline mode support", "Fitur custom sesuai kebutuhan"],
                "cta": "Konsultasi Gratis",
                "icon": "phone_android",
                "color": "green",
                "waMessage": "Halo Fadli, saya tertarik bikin aplikasi mobile untuk bisnis saya. Bisa konsultasi?"
            }
        ],
        "infoSetup": "Setup = biaya pembuatan awal (sekali bayar). Infra = server, domain & tools (tahunan).",
        "infoMaintenance": "Maintenance rutin bersifat opsional, bisa ditambah kapan saja sesuai kebutuhan."
    },
    "valueAdded": {
        "label": "Value Added",
        "title": "Fitur Standar di Semua Paket",
        "subtitle": "Tidak perlu bayar lebih. Fitur penting ini sudah otomatis Anda dapatkan.",
        "items": [
            {
                "title": "Sertifikat SSL (Gembok Hijau)",
                "description": "Website aman dan dipercaya Google. Data pelanggan Anda terlindungi sepenuhnya.",
                "iconName": "lock"
            },
            {
                "title": "Hosting & Domain Gratis",
                "description": "Sudah termasuk biaya sewa server dan alamat website untuk 1 tahun pertama.",
                "iconName": "dns"
            },
            {
                "title": "Backup Data Rutin",
                "description": "Tidak perlu takut data hilang. Kami melakukan backup otomatis secara berkala.",
                "iconName": "cloud_sync"
            },
            {
                "title": "Mobile Responsive",
                "description": "Website tampil sempurna di HP, Tablet, maupun Laptop pelanggan Anda.",
                "iconName": "devices"
            },
            {
                "title": "Keamanan Anti-Hacker",
                "description": "Proteksi berlapis untuk menjaga website Anda dari serangan pihak tidak bertanggung jawab.",
                "iconName": "security"
            },
            {
                "title": "Integrasi Media Sosial",
                "description": "Hubungkan website langsung ke WhatsApp, Instagram, dan Facebook Anda.",
                "iconName": "share"
            }
        ]
    },
    "faq": {
        "label": "Tanya Jawab",
        "title": "Paling Sering Ditanyakan",
        "subtitle": "Informasi lengkap seputar layanan, harga, dan purna jual.",
        "items": [
            {
                "question": "Berapa lama proses pembuatannya?",
                "answer": "Rata-rata 7-14 hari kerja tergantung kompleksitas fitur yang Anda butuhkan. Untuk landing page sederhana bisa selesai dalam 3-5 hari."
            },
            {
                "question": "Berapa biaya perpanjangan domain & hosting?",
                "answer": "Sangat terjangkau. Mulai dari Rp 500rb/tahun, sudah termasuk dukungan teknis ringan dan pembaruan keamanan (Security Updates)."
            },
            {
                "question": "Apakah saya pemilik sah website saya?",
                "answer": "Ya, 100%. Data, domain, dan konten sepenuhnya milik Anda. Kami hanya membantu mengelolanya secara teknis. Anda akan mendapatkan akses penuh jika diinginkan."
            },
            {
                "question": "Bagaimana jika saya ingin mengubah isi website?",
                "answer": "Kami menyediakan video tutorial mudah (tanpa perlu coding) sehingga Anda bisa edit sendiri. Atau jika sibuk, Anda bisa menggunakan jasa update konten kami."
            },
            {
                "question": "Kalau ada error teknis gimana?",
                "answer": "Tenang, semua paket sudah termasuk garansi maintenance. Jika website down atau error sistem, kami perbaiki gratis selama masa garansi/langganan aktif."
            },
            {
                "question": "Pembayarannya bagaimana?",
                "answer": "DP 50% di awal untuk memulai pengerjaan. Pelunasan 50% sisanya dilakukan setelah website jadi dan Anda puas dengan hasilnya, sebelum serah terima akses penuh."
            }
        ]
    },
    "cta": {
        "label": "Mulai Sekarang",
        "titleLine1": "Konsultasi Gratis,",
        "titleLine2": "Tanpa Risiko.",
        "subtitle": "Ceritakan kebutuhan bisnis Anda lewat WhatsApp. Kami akan berikan solusi strategi digital dan estimasi biaya dalam 24 jam.",
        "primary": "Chat WhatsApp Sekarang",
        "secondary": "Isi Form Briefing"
    },
    "footer": {
        "paragraph": "Mitra digital terpercaya yang membantu UMKM tumbuh pesat di era digital dengan solusi website profesional dan terjangkau.",
        "profileRole": "Software engineer sejak 2016. Fokus membantu UMKM bertransformasi digital dengan solusi yang efisien dan scalable.",
        "contactTitle": "Kontak Kami",
        "followTitle": "Ikuti Kami",
        "rights": "© Fadli Dev Studio. All rights reserved."
    }
};

const enData = {
    "nav": {
        "navIntro": "Intro",
        "navWhyUs": "Why Us?",
        "navServices": "Services",
        "navPortfolio": "Portfolio",
        "navClients": "Clients",
        "navPricing": "Pricing",
        "navFaq": "FAQ",
        "navChat": "Chat on WhatsApp"
    },
    "hero": {
        "heroBadge": "Trusted Digital Partner for SMEs",
        "heroTitle1": "Grow Your Business",
        "heroTitle2": "Go Digital Today.",
        "heroSubtitle": "Build a website & operations system without the hassle. We create a strong digital foundation so your business is ready to accelerate.",
        "heroCta": "Consult via WhatsApp",
        "heroFormCta": "View Our Portfolio"
    },
    "trustBadges": {
        "badge1": "Support Guarantee",
        "badge2": "Transparent",
        "badge3": "Trustworthy"
    },
    "whyUs": {
        "label": "Why Choose Us",
        "title": "More Than a Website Vendor",
        "subtitle": "We appear as a strategic partner for your SME's growth trajectory.",
        "items": [
            {
                "title": "Business Partner",
                "description": "More than a freelance vendor. We focus on long-term consultation to support your business growth.",
                "iconName": "handshake",
                "iconBgClass": "bg-blue-100",
                "iconHoverBgClass": "group-hover:bg-primary group-hover:text-white",
                "iconTextClass": "text-primary"
            },
            {
                "title": "No Technical Hassle",
                "description": "We handle all technical aspects (servers, domains, errors). You just focus on selling and supporting customers.",
                "iconName": "settings_suggest",
                "iconBgClass": "bg-purple-100",
                "iconHoverBgClass": "group-hover:bg-purple-600 group-hover:text-white",
                "iconTextClass": "text-purple-600"
            },
            {
                "title": "Sales-Driven Design",
                "description": "Websites are designed with psychology in mind to turn visitors into buyers (High Conversion).",
                "iconName": "trending_up",
                "iconBgClass": "bg-orange-100",
                "iconHoverBgClass": "group-hover:bg-orange-500 group-hover:text-white",
                "iconTextClass": "text-orange-600"
            },
            {
                "title": "Priority Support",
                "description": "Fast-response WhatsApp support. Have an issue? Chat us and we will help immediately.",
                "iconName": "support_agent",
                "iconBgClass": "bg-green-100",
                "iconHoverBgClass": "group-hover:bg-green-600 group-hover:text-white",
                "iconTextClass": "text-green-600"
            }
        ]
    },
    "process": {
        "label": "Quick Process",
        "title": "3 Easy Steps to Own a Website",
        "subtitle": "No need to stress over the tech. We keep the process as simple as possible so you can focus on running your business.",
        "formCta": "Fill the Consultation Form",
        "steps": [
            {
                "title": "Consult & Order",
                "description": "Just tell us your business goals and choose the right package. No coding knowledge needed; we translate your ideas.",
                "iconName": "chat_bubble",
                "iconColor": "text-primary",
                "numberBg": "bg-primary",
                "blurBg": "bg-blue-100"
            },
            {
                "title": "Design & Dev",
                "description": "Sit back while we handle the technical work. You will receive regular updates and revisions until it's perfect.",
                "iconName": "design_services",
                "iconColor": "text-purple-600",
                "numberBg": "bg-purple-600",
                "blurBg": "bg-purple-100"
            },
            {
                "title": "Launch & Training",
                "description": "Website goes live! We don’t just hand it over; we teach you how to use it until you feel confident managing it yourself.",
                "iconName": "rocket_launch",
                "iconColor": "text-green-500",
                "numberBg": "bg-green-500",
                "blurBg": "bg-green-100"
            }
        ]
    },
    "promo": {
        "badge": "Limited Offer for SMEs!",
        "headline": "Free Maintenance for 3 Months!",
        "subtext": "We not only build your website but keep it secure and up-to-date so you can focus on selling.",
        "cta": "Claim This Offer Now",
        "urgency": "Only for the first 5 signups this month"
    },
    "services": {
        "label": "Service Options",
        "title": "Complete Packages for Your Needs",
        "subtitle": "Modern tech (Next.js) that is fast, secure, and SEO friendly.",
        "popularBadge": "Popular",
        "items": [
            {
                "title": "Operational System",
                "description": "Apps that tidy up office data. Stock items, employee attendance, financial reports.",
                "features": ["User Friendly", "Access from Mobile & Laptop"],
                "isPopular": false,
                "iconName": "inventory_2",
                "iconBgClass": "bg-blue-50"
            },
            {
                "title": "Landing Page",
                "description": "A single promotional page focused on convincing visitors to buy or contact you.",
                "features": ["Persuasive Copywriting", "Ad-ready", "High Conversion"],
                "isPopular": true,
                "iconName": "web",
                "iconBgClass": "bg-primary/10"
            },
            {
                "title": "Online Store / Catalog",
                "description": "Customers browse products and order via automated WhatsApp without installing apps.",
                "features": ["Mobile-First Design", "Auto 'Order via WA' Button"],
                "isPopular": false,
                "iconName": "shopping_cart",
                "iconBgClass": "bg-blue-50"
            }
        ]
    },
    "portfolio": {
        "label": "Case Studies",
        "title": "Our Work That Helps SMEs Grow",
        "subtitle": "See how we help businesses like yours thrive in the digital space.",
        "miniCaseStudiesLabel": "Mini Case Study",
        "miniCaseStudiesTitle": "Before & After Going Digital",
        "miniCaseStudiesSubtitle": "Short and practical—focused on business impact.",
        "miniCaseStudies": [
            {
                "problem": "Prospects kept asking the same questions in chat, slowing response time.",
                "solution": "Built a landing page with clear FAQ structure and WhatsApp CTA.",
                "result": "More focused chats and faster closing."
            },
            {
                "problem": "Product catalog was still manual, causing price/stock miscommunication.",
                "solution": "Created a mobile-first digital catalog with categories and direct order CTA.",
                "result": "Less admin time and more consistent online orders."
            },
            {
                "problem": "Ad leads were coming in but source tracking was unclear.",
                "solution": "Added lead capture form and basic campaign event tracking.",
                "result": "More measurable follow-up and faster marketing decisions."
            }
        ],
        "demoLabel": "View Demo",
        "categories": ["All", "Culinary", "Fashion", "Services", "Retail"],
        "items": [
            {
                "category": "Services",
                "title": "Bengkel Mobil Sejahtera",
                "description": "Auto shop landing page with WhatsApp booking & full service information.",
                "stat": "Trust Increased",
                "statSub": "Automated WhatsApp Bookings",
                "categoryColor": "text-blue-500",
                "categoryBg": "bg-blue-50",
                "image": "/images/projects/project-sibema-1.png",
                "link": "/landing-page-portfolion/landing-1/index.html"
            },
            {
                "category": "Culinary",
                "title": "Kopi Senja Nusantara",
                "description": "Cafe website featuring a digital menu, gallery, and WhatsApp ordering.",
                "stat": "+40% Online Orders",
                "statSub": "150+ Orders / Month",
                "categoryColor": "text-orange-500",
                "categoryBg": "bg-orange-50",
                "image": "/images/projects/project-sijaki-1.png",
                "link": "/landing-page-portfolion/landing-2/index.html"
            },
            {
                "category": "Fashion",
                "title": "Butik Elegan Fashion",
                "description": "Premium digital catalog with WhatsApp checkout & stock synchronization.",
                "stat": "Sales +120%",
                "statSub": "Premium Branding",
                "categoryColor": "text-pink-500",
                "categoryBg": "bg-pink-50",
                "image": "/images/projects/project-pos-1.png",
                "link": "/landing-page-portfolion/landing-3/index.html"
            },
            {
                "category": "Services",
                "title": "Bengkel Maju Jaya",
                "description": "Online booking system, before-after gallery, & customer reviews.",
                "stat": "Professional Image",
                "statSub": "Active Online Reservations",
                "categoryColor": "text-purple-500",
                "categoryBg": "bg-purple-50",
                "image": "/images/projects/project-siketa-1.png",
                "link": "/landing-page-portfolion/landing-4/index.html"
            },
            {
                "category": "Services",
                "title": "JagoCompro",
                "description": "Professional company profile design studio with express 1-day delivery.",
                "stat": "Premium Design",
                "statSub": "Express 1-Day Delivery",
                "categoryColor": "text-cyan-500",
                "categoryBg": "bg-cyan-50",
                "image": "/images/projects/project-jago-compro-1.png",
                "link": "https://jagocompro.id"
            },
            {
                "category": "Retail",
                "title": "Toko Kelontong Berkah",
                "description": "Modern POS landing page with digital inventory & automated cashier.",
                "stat": "Save 5 Hours/Week",
                "statSub": "Digital Cashier & Stock",
                "categoryColor": "text-green-500",
                "categoryBg": "bg-green-50",
                "image": "/images/projects/project-monitoring-staf-1.png",
                "link": "/landing-page-portfolion/landing-6/index.html"
            }
        ]
    },
    "testimonials": {
        "label": "Success Stories",
        "title": "Trusted by Various SMEs",
        "items": [
            {
                "businessType": "F&B / Culinary",
                "quote": "Revenue rose 30% because customers can view mouthwatering menu photos via QR code.",
                "authorRole": "Owner",
                "authorName": "Budi Santoso",
                "authorInitials": "BS",
                "iconName": "restaurant",
                "iconBgClass": "bg-orange-100",
                "iconColorClass": "text-orange-600",
                "businessName": "Kedai Kopi Nusantara",
                "rating": 5
            },
            {
                "businessType": "Fashion Retail",
                "quote": "Selling on IG became easier. Customers just tap the link in the bio, choose, and pay.",
                "authorRole": "Founder",
                "authorName": "Siti Aminah",
                "authorInitials": "SA",
                "iconName": "checkroom",
                "iconBgClass": "bg-pink-100",
                "iconColorClass": "text-pink-600",
                "businessName": "Butik Elegan",
                "rating": 5
            },
            {
                "businessType": "Automotive Services",
                "quote": "The website made our shop look professional. Corporate clients now trust us.",
                "authorRole": "Head Mechanic",
                "authorName": "Hendro Wijaya",
                "authorInitials": "HW",
                "iconName": "build",
                "iconBgClass": "bg-blue-100",
                "iconColorClass": "text-blue-600",
                "businessName": "Bengkel Maju Jaya",
                "rating": 4.5
            },
            {
                "businessType": "Catering & Events",
                "quote": "The online catering booking system keeps schedules organized. No more mistakes from missed notes.",
                "authorRole": "Owner",
                "authorName": "Ibu Ratna",
                "authorInitials": "IR",
                "iconName": "soup_kitchen",
                "iconBgClass": "bg-green-100",
                "iconColorClass": "text-green-600",
                "businessName": "Dapur Mama",
                "rating": 5
            },
            {
                "businessType": "Building Materials Store",
                "quote": "The new inventory system lets me know exactly how much cement and tile we have, so we stop over-ordering.",
                "authorRole": "Owner",
                "authorName": "Pak Darmawan",
                "authorInitials": "PD",
                "iconName": "hardware",
                "iconBgClass": "bg-purple-100",
                "iconColorClass": "text-purple-600",
                "businessName": "Toko Bangunan Berkah",
                "rating": 5
            },
            {
                "businessType": "Beauty Salon",
                "quote": "Online booking keeps treatment schedules tidy, no more no-shows from forgotten appointments.",
                "authorRole": "Owner",
                "authorName": "Maya Putri",
                "authorInitials": "MP",
                "iconName": "spa",
                "iconBgClass": "bg-rose-100",
                "iconColorClass": "text-rose-600",
                "businessName": "Salon Cantik Ayu",
                "rating": 5
            },
            {
                "businessType": "Pharmacy",
                "quote": "The digital catalog lets customers check medicine availability first, so there are fewer back-and-forth calls.",
                "authorRole": "Pharmacist",
                "authorName": "Dr. Andi",
                "authorInitials": "DA",
                "iconName": "local_pharmacy",
                "iconBgClass": "bg-teal-100",
                "iconColorClass": "text-teal-600",
                "businessName": "Apotek Sehat Selalu",
                "rating": 4.5
            },
            {
                "businessType": "Printing & Design",
                "quote": "The new landing page attracts corporate clients because they can review the portfolio and request large print jobs entirely online.",
                "authorRole": "Manager",
                "authorName": "Rizky Pratama",
                "authorInitials": "RP",
                "iconName": "print",
                "iconBgClass": "bg-indigo-100",
                "iconColorClass": "text-indigo-600",
                "businessName": "Percetakan Jaya Print",
                "rating": 5
            }
        ]
    },
    "pricing": {
        "label": "Investment",
        "title": "Package Options that Match Your Needs",
        "subtitle": "Transparent pricing for landing pages. For other services, let’s talk about your requirements first.",
        "landingPageTitle": "Landing Page",
        "landingPageDescription": "One-time setup + annual infrastructure (server, domain, tools)",
        "setupLabel": "Setup (one-time payment)",
        "infraLabel": "Infra: ",
        "packageButton": "Order This Package",
        "packages": [
            {
                "label": "Economy Package",
                "price": "Rp 895.000",
                "infra": "Rp 300.000 / year",
                "fit": "Best for getting daily WhatsApp leads quickly with the most efficient budget.",
                "waMessage": "Halo Fadli, saya tertarik dengan Paket Hemat (Rp 895.000). Bisa jelaskan detailnya?",
                "includes": [
                    { "iconName": "web", "text": "Conversion-focused page with WhatsApp CTA" },
                    { "iconName": "smartphone", "text": "Mobile-first, trustworthy presentation" },
                    { "iconName": "chat", "text": "Leads flow directly to WhatsApp" },
                    { "iconName": "timer", "text": "Go live in 5 days" }
                ],
                "isPopular": false
            },
            {
                "label": "Starter",
                "price": "Rp 1.490.000",
                "infra": "Rp 1.200.000 / year",
                "fit": "For SMEs/personal brands that want stronger trust and steadier conversion.",
                "waMessage": "Halo Fadli, saya mau tanya soal Paket Starter (Rp 1.490.000) untuk bisnis saya.",
                "includes": [
                    { "iconName": "web", "text": "1–2 page structure for education + closing" },
                    { "iconName": "dns", "text": "Ready-to-use domain & hosting (1 year)" },
                    { "iconName": "smartphone", "text": "Fast and polished mobile experience" },
                    { "iconName": "chat", "text": "Clear WhatsApp CTA flow" },
                    { "iconName": "timer", "text": "Go live in 1–2 weeks" }
                ],
                "isPopular": false
            },
            {
                "label": "Growth",
                "price": "Rp 3.900.000",
                "infra": "Rp 2.000.000 / year",
                "fit": "For businesses scaling ads/channels with a cleaner lead system.",
                "waMessage": "Halo Fadli, saya tertarik Paket Growth (Rp 3.900.000). Bisa diskusi kebutuhan saya?",
                "includes": [
                    { "iconName": "check_circle", "text": "All Starter foundations" },
                    { "iconName": "layers", "text": "Multi-page flow for fuller funnel journeys" },
                    { "iconName": "contact_mail", "text": "Lead capture for measurable follow-up" },
                    { "iconName": "search", "text": "Basic SEO for organic reach" },
                    { "iconName": "photo_library", "text": "Showcase product/service to boost trust" },
                    { "iconName": "support_agent", "text": "Priority support during campaigns" },
                    { "iconName": "timer", "text": "Go live in 2–3 weeks" }
                ],
                "isPopular": true
            },
            {
                "label": "Scale",
                "price": "Rp 7.900.000",
                "infra": "Rp 3.000.000 / year",
                "fit": "For brands needing high flexibility, automation, and repeatable growth experiments.",
                "waMessage": "Halo Fadli, saya butuh Paket Scale (Rp 7.900.000) untuk proyek saya. Kapan bisa mulai?",
                "includes": [
                    { "iconName": "check_circle", "text": "All Growth foundations" },
                    { "iconName": "dashboard", "text": "Complex layouts for multi-funnel needs" },
                    { "iconName": "integration_instructions", "text": "Advanced integrations for business workflows" },
                    { "iconName": "campaign", "text": "Recurring campaign-ready setup" },
                    { "iconName": "analytics", "text": "Performance tracking for faster decisions" },
                    { "iconName": "security", "text": "Enhanced security layers" },
                    { "iconName": "timer", "text": "Go live in 3–4 weeks" }
                ],
                "isPopular": false
            }
        ],
        "otherServicesHeading": "Additional Services",
        "otherServicesSubtitle": "Pricing adjusted based on features and your complexity needs",
        "otherServices": [
            {
                "title": "Online Store / Catalog",
                "description": "Customers browse products and order via WhatsApp. Pricing depends on the number of products, filtering features, and payment integrations.",
                "features": ["Categorized product catalog", "WhatsApp checkout", "Mobile-first responsive", "Custom features tailored to your needs"],
                "cta": "Free Consultation",
                "icon": "shopping_cart",
                "color": "blue",
                "waMessage": "Halo Fadli, saya butuh website toko online / katalog produk. Bisa konsultasi dulu?"
            },
            {
                "title": "Operational Systems",
                "description": "Apps to organize office data. Pricing depends on required modules and user count.",
                "features": ["Stock & inventory management", "Attendance & employee data", "Automated financial reports", "Custom modules per business"],
                "cta": "Free Consultation",
                "icon": "inventory_2",
                "color": "purple",
                "waMessage": "Halo Fadli, saya butuh sistem operasional untuk bisnis saya (stok, absensi, dll). Bisa diskusi?"
            },
            {
                "title": "Mobile Apps",
                "description": "Mobile apps for your business. Pricing varies by platform (Android/iOS), features, and complexity.",
                "features": ["Android & iOS (Cross-platform)", "Push notification", "Offline mode support", "Custom features tailored to your needs"],
                "cta": "Free Consultation",
                "icon": "phone_android",
                "color": "green",
                "waMessage": "Halo Fadli, saya tertarik bikin aplikasi mobile untuk bisnis saya. Bisa konsultasi?"
            }
        ],
        "infoSetup": "Setup = initial creation fee (one-time payment). Infra = server, domain & tools (annual).",
        "infoMaintenance": "Routine maintenance is optional and can be added anytime as needed."
    },
    "valueAdded": {
        "label": "Value Added",
        "title": "Standard Features in All Packages",
        "subtitle": "No need to pay extra. You automatically get these essential features.",
        "items": [
            {
                "title": "SSL Certificate (Green Padlock)",
                "description": "Secure website trusted by Google. Your customer data is fully protected.",
                "iconName": "lock"
            },
            {
                "title": "Free Hosting & Domain",
                "description": "Includes server rental and website address for the first year.",
                "iconName": "dns"
            },
            {
                "title": "Routine Data Backup",
                "description": "No need to fear data loss. We perform automatic backups periodically.",
                "iconName": "cloud_sync"
            },
            {
                "title": "Mobile Responsive",
                "description": "Website looks perfect on mobile, tablet, and laptop.",
                "iconName": "devices"
            },
            {
                "title": "Anti-Hacker Security",
                "description": "Layered protection to keep your website safe from malicious attacks.",
                "iconName": "security"
            },
            {
                "title": "Social Media Integration",
                "description": "Connect your website directly to your WhatsApp, Instagram, and Facebook.",
                "iconName": "share"
            }
        ]
    },
    "faq": {
        "label": "FAQ",
        "title": "Frequently Asked Questions",
        "subtitle": "Full information on services, pricing, and after-sales.",
        "items": [
            {
                "question": "How long does the creation process take?",
                "answer": "Average 7-14 working days depending on complexity. Simple landing pages can be done in 3-5 days."
            },
            {
                "question": "How much for domain & hosting renewal?",
                "answer": "Very affordable. Starting from Rp 500k/year, includes light technical support and security updates."
            },
            {
                "question": "Am I the legal owner of my website?",
                "answer": "Yes, 100%. Data, domain, and content belong entirely to you. We only help manage it technically."
            },
            {
                "question": "What if I want to change the content?",
                "answer": "We provide easy video tutorials (no coding needed) so you can edit it yourself. Or we can do it for you."
            },
            {
                "question": "What if there's a technical error?",
                "answer": "Don't worry, all packages include maintenance warranty. We fix system errors for free during active subscription."
            },
            {
                "question": "How about the payment?",
                "answer": "50% DP to start. Remaining 50% after the website is finished and you are satisfied, before full access handover."
            }
        ]
    },
    "cta": {
        "label": "Start Now",
        "titleLine1": "Free Consultation,",
        "titleLine2": "Risk-Free.",
        "subtitle": "Tell us your business needs via WhatsApp. We will provide a digital strategy solution and cost estimate within 24 hours.",
        "primary": "Chat via WhatsApp Now",
        "secondary": "Fill Briefing Form"
    },
    "footer": {
        "paragraph": "Trusted digital partner helping SMEs grow rapidly with professional and affordable website solutions.",
        "profileRole": "Software engineer since 2016. Focused on helping SMEs transform digitally with efficient and scalable solutions.",
        "contactTitle": "Contact Us",
        "followTitle": "Follow Us",
        "rights": "© Fadli Dev Studio. All rights reserved."
    }
};

fs.writeFileSync(path.join(process.cwd(), 'content/services/id.json'), JSON.stringify(idData, null, 2));
fs.writeFileSync(path.join(process.cwd(), 'content/services/en.json'), JSON.stringify(enData, null, 2));

console.log('Successfully updated services data to JSON with both languages');
