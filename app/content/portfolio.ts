import { Home, Briefcase, Folder, Mail } from "lucide-react";
import {
  FaPhp,
  FaLaravel,
  FaPython,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaJs,
} from "react-icons/fa";
import {
  SiGoland,
  SiDjango,
  SiNestjs,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiRuby,
  SiRubyonrails,
} from "react-icons/si";

import { CONTACT_INFO, buildWhatsAppLink } from "@/lib/contact-info";

export type Language = "id" | "en";

const buildSocialLinks = (whatsappMessage?: string) => ({
  github: CONTACT_INFO.social.github,
  linkedin: CONTACT_INFO.social.linkedin,
  whatsapp: buildWhatsAppLink(whatsappMessage),
});

export const content = {
  id: {
    nav: {
      home: { label: "Beranda", icon: Home },
      experience: { label: "Pengalaman", icon: Briefcase },
      projects: { label: "Proyek", icon: Folder },
      contact: { label: "Kontak", icon: Mail },
    },
    hero: {
      line1: "Mohamad Fadli",
      line2: "Software Engineer",
      tagline:
        "Hey, Let's talk about tech and make some magic for your business",
      scroll: "Scroll ke bawah",
    },
    experienceSection: {
      about: {
        title: "Pengalaman",
        content:
          "Sejak 2016, saya membantu bisnis bertransformasi lewat teknologi. Saya mengerti betapa pusingnya mengurus stok manual, kehilangan pelanggan karena website lemot, atau data kantor yang berantakan. Fokus saya adalah memberi solusi yang bikin bisnis Anda lebih efisien dan profitable.",
        link: "Lihat kisah lengkap",
      },
      experience: { title: "Pengalaman", subtitle: "Tahun di dunia tech" },
      projects: {
        title: "Solusi yang Terbukti Berhasil",
        subtitle: "Bukti nyata bagaimana kode saya membantu bisnis berkembang.",
      },
      partner: {
        title: "Pernah Kerja Sama Dengan",
        subtitle: "Brand & Perusahaan",
      },
      stack: { title: "Stack Andalan" },
      cta: { title: "Punya ide proyek seru?", button: "Diskusi bareng !" },
      download: { cv: "Unduh CV", link: "/cv-mohamad-fadli.pdf" },
      ui: {
        careerTitle: "Perjalanan karir",
        showMore: "Lihat Selengkapnya",
        showLess: "Sembunyikan Riwayat",
      },
    },
    skills: {
      title: "Keahlian & Teknologi",
      subtitle:
        "Teknologi yang sering kupakai buat bangun sistem — dari backend, frontend, sampai ke production.",
      ui: {
        seeAll: "Lihat Semua",
        seeLess: "Sembunyikan",
      },
    },
    projects: {
      title: "Bukti Nyata Membantu Bisnis",
      subtitle:
        "Bukan sekadar galeri, tapi kumpulan solusi untuk masalah operasional dan penjualan.",
      viewDetailButton: "Lihat Detail",
      modal: {
        noProjectSelected: "Tidak ada project yang dipilih.",
        previewTitle: "Preview Aplikasi",
        problem: "Masalah Bisnis",
        solution: "Solusi Teknis",
        impact: "Dampak (Hasil)",
        techStack: "Teknologi",
      },
    },
    about: {
      title: "Perjalanan Karier",
      subtitle: "Kisah gimana aku berkembang jadi developer seperti sekarang.",
      narrative:
        "Mulai ngoding sejak 2016 karena penasaran. Sekarang udah jadi rutinitas buat bikin sistem yang bener-bener berguna. Buatku, teknologi itu alat buat bikin hidup lebih gampang. Dari sistem kampus sampai microservices skala gede, aku terus belajar dan adaptasi biar bisa kasih solusi terbaik.",
      cta: "Download CV",
    },
    contact: {
      title: "Mari Terhubung!",
      subtitle:
        "Selalu terbuka buat ngobrol—baik soal proyek, kolaborasi, atau sekadar bahas teknologi.",
      emailPrompt: "Bisa kirim email ke:",
      socialPrompt: "Atau temukan aku di sini:",
      email: CONTACT_INFO.email,
      socialLinks: buildSocialLinks(
        "Halo Fadli, saya tertarik dengan portofoliomu!"
      ),
      cta: {
        label: "Lihat Paket Jasa",
        href: "/services",
      },
    },
    footer: { credit: "Dibuat dengan Semangat di Palu, Sulawesi Tengah." },
    projectsData: [
      {
        title: "Jago Compro",
        category: "Aplikasi Web & Profil",
        description:
          "Website profil untuk Penyedia jasa pembuatan company profile express dan profesional.",
        tags: ["Next.js", "Tailwind CSS", "JavaScript"],
        stack: ["Next.js", "Tailwind CSS", "JavaScript"],
        caseStudy: {
          problem:
            "Tidak memiliki representasi digital yang menarik untuk menarik pelanggan baru.",
          solution:
            "Membuat website profil menarik dengan layout profesional dan informasi bisnis lengkap. Memasimalkan SEO untuk meningkatkan visibilitas di mesin pencari. Ads untuk menjangkau audiens yang lebih luas.",
          impact:
            "Meningkatkan kredibilitas brand dan mempermudah akses pelanggan ke informasi produk dan layanan. Meningkatkan trafik website.",
        },
        images: [
          "/portfolio/project-jago-compro-1.png",
          "/portfolio/project-jago-compro-2.png",
          "/portfolio/project-jago-compro-3.png",
        ],
      },
      {
        title: "Point Of Sale - Percetakan Bakti Nusantara",
        category: "Sistem Manajemen Bisnis & Industri",
        description:
          "Sistem Point-of-Sale lengkap dengan manajemen gudang, kasir, dan modul akunting terintegrasi.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "Manajemen inventaris dan keuangan di percetakan dilakukan manual, menyebabkan stok tidak sesuai dan pelaporan lambat tiap bulannya.",
          solution:
            "Membangun sistem Point-of-Sale terintegrasi dengan modul Gudang, Kasir, dan Akunting otomatis, sehingga user bisa mengelola stok, transaksi, dan laporan keuangan dalam satu platform secara real-time",
          impact:
            "Sinkronisasi stok secara real-time, mengurangi kesalahan input 95%, dan mempercepat laporan keuangan dari hitungan hari menjadi menit.",
        },
        images: [
          "/portfolio/project-pos-2.png",
          "/portfolio/project-pos-1.png",
          "/portfolio/project-pos-3.png",
        ],
      },
      {
        title: "Sistem Pelacakan Truk Kelapa Sawit",
        category: "Sistem Manajemen Bisnis & Industri",
        description:
          "Sistem pelacakan pengiriman kelapa sawit dari perkebunan hingga pabrik.",
        tags: ["Laravel", "JavaScript", "MySQL", "Leaflet.js"],
        stack: ["Laravel", "JavaScript", "MySQL", "Leaflet.js"],
        caseStudy: {
          problem:
            "Kurangnya transparansi dan data real-time dalam rantai pasok kelapa sawit. Serta kesulitan dalam melaporkan posisi truk dan berat muatan.",
          solution:
            "Mengembangkan aplikasi web yang responsive untuk mobile untuk melacak posisi truk (GPS), mencatat berat muatan, dan estimasi waktu tiba. Pencatatan Ditiap titip pengiriman.",
          impact:
            "Meningkatkan kepercayaan, menekan potensi kehilangan, dan menyediakan data akurat untuk logistik.",
        },
        images: [
          "/portfolio/project-tracking-3.png",
          "/portfolio/project-tracking-1.png",
          "/portfolio/project-tracking-2.png",
        ],
      },
      {
        title: "Mutiara Company Profile",
        category: "Aplikasi Web & Profil",
        description:
          "Website profil untuk toko Mutiara Cantik yang menjual berbagai produk kecantikan.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "Toko kecantikan 'Mutiara Cantik' tidak memiliki kehadiran online, kehilangan potensi pelanggan yang mencari produk dan layanan secara digital.",
          solution:
            "Membangun website profil modern dan responsive menampilkan katalog produk, layanan, galeri, dan informasi kontak.",
          impact:
            "Menciptakan etalase digital 24/7, meningkatkan jangkauan pasar, dan memberi saluran komunikasi baru bagi pelanggan.",
        },
        images: [
          "/portfolio/project-mutiara-4.png",
          "/portfolio/project-mutiara-3.png",
          "/portfolio/project-mutiara-1.png",
          "/portfolio/project-mutiara-2.png",
        ],
      },
      {
        title: "Siketa",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Sistem informasi manajemen proses dan bimbingan tugas akhir mahasiswa.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "Proses administrasi tugas akhir yang lambat dan tidak transparan.",
          solution:
            "Membangun portal terpusat untuk pengajuan proposal, bimbingan online, dan pelacakan kemajuan digital.",
          impact:
            "Memangkas waktu administrasi 60%, transparansi penuh, dan mengurangi penggunaan kertas.",
        },
        images: [
          "/portfolio/project-siketa-2.png",
          "/portfolio/project-siketa-3.png",
          "/portfolio/project-siketa-1.png",
        ],
      },
      {
        title: "Sibema",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Sistem informasi untuk pendaftaran dan seleksi beasiswa mahasiswa.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Informasi beasiswa tersebar dan proses manual.",
          solution:
            "Membangun portal satu pintu untuk semua info dan seleksi beasiswa.",
          impact:
            "Partisipasi meningkat, seleksi efisien, dan administrasi ringan.",
        },
        images: [
          "/portfolio/project-sibema-1.png",
          "/portfolio/project-sibema-2.png",
          "/portfolio/project-sibema-3.png",
        ],
      },
      {
        title: "Sistem Monitoring Staf",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Aplikasi untuk memonitor status staf dan rekapitulasi jam kerja.",
        tags: ["Django", "JavaScript", "MySQL"],
        stack: ["Django", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "Pelacakan kehadiran staf manual dan rentan kesalahan. Manager ingin solusi yang lebih efisien dengan melihat siapa staf yang siap dideligasi tugas",
          solution:
            "Aplikasi dasbor untuk input status harian dan rekap otomatis. Serta fitur cuti yang mudah diajukan.",
          impact:
            "Visibilitas real-time, rekap otomatis, dan cuti mudah diajukan.",
        },
        images: [
          "/portfolio/project-monitoring-staf-1.png",
          "/portfolio/project-monitoring-staf-2.png",
          "/portfolio/project-monitoring-staf-3.png",
        ],
      },
      {
        title: "Siporat",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Sistem penomoran surat otomatis dan arsip digital yang mudah diakses.",
        tags: ["Django", "JavaScript", "MySQL"],
        stack: ["Django", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "Nomor surat tidak konsisten dan proses lambat. Manager ingin solusi yang lebih efisien.",
          solution:
            "Sistem yang mengenerate nomor otomatis sesuai format dan arsip digital. Serta fitur pencarian surat yang mudah. Pusat Data Surat",
          impact: "Nomor unik 100%, cepat, dan arsip rapi.",
        },
        images: [
          "/portfolio/project-siporat-2.png",
          "/portfolio/project-siporat-3.png",
          "/portfolio/project-siporat-1.png",
        ],
      },
      {
        title: "Sijaki",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Sistem informasi untuk penjadwalan dan pelaporan kinerja dosen.",
        tags: ["Django", "JavaScript", "MySQL"],
        stack: ["Django", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Data kinerja dosen tersebar dan sulit dievaluasi.",
          solution:
            "Platform input kegiatan dosen dan laporan kinerja otomatis.",
          impact:
            "Evaluasi mudah, akreditasi terbantu, dan keputusan pimpinan lebih akurat.",
        },
        images: [
          "/portfolio/project-sijaki-2.png",
          "/portfolio/project-sijaki-3.png",
          "/portfolio/project-sijaki-1.png",
        ],
      },
    ],
  },
  en: {
    nav: {
      home: { label: "Home", icon: Home },
      experience: { label: "Experience", icon: Briefcase },
      projects: { label: "Projects", icon: Folder },
      contact: { label: "Contact", icon: Mail },
    },
    hero: {
      line1: "Mohamad Fadli",
      line2: "Software Engineer",
      tagline: "Let's talk tech and build awesome stuff that actually works!",
      scroll: "Scroll down",
    },
    experienceSection: {
      about: {
        title: "Experience",
        content:
          "Since 2016, I’ve been building systems—not just writing code. With a product mindset and engineering soul, I help businesses grow with scalable and maintainable digital solutions.",
        link: "See full story",
      },
      experience: { title: "Experience", subtitle: "Years in tech" },
      projects: { title: "Projects Done", subtitle: "Across industries" },
      partner: { title: "Worked With", subtitle: "Brands & Companies" },
      stack: { title: "Tech Stack" },
      cta: {
        title: "Got a cool project idea?",
        button: "Let’s collaborate!",
      },
      download: {
        cv: "Download CV",
        link: "/cv-mohamad-fadli.pdf",
      },
      ui: {
        careerTitle: "Career Timeline",
        showMore: "Show More",
        showLess: "Show Less",
      },
    },
    skills: {
      title: "Skills & Tech",
      subtitle:
        "Technologies I frequently use to build systems — from backend and frontend to production.",
      ui: {
        seeAll: "See All",
        seeLess: "Show Less",
      },
    },
    projects: {
      title: "Project Gallery",
      subtitle:
        "Here’s how I solve real-world problems with code. Take a scroll and explore.",
      viewDetailButton: "View Details",
      modal: {
        noProjectSelected: "No project selected.",
        previewTitle: "App Preview",
        problem: "Problem",
        solution: "Solution",
        impact: "Impact",
        techStack: "Tech Stack",
      },
    },
    about: {
      title: "Career Journey",
      subtitle: "How I grew into the engineer I am today.",
      narrative:
        "I started coding in 2016 out of curiosity—now it’s a daily habit of crafting real, usable systems. For me, tech is a tool to make life easier. From academic systems to enterprise-scale microservices, I keep learning and adapting to bring out the best solutions.",
      cta: "Download CV",
    },
    contact: {
      title: "Let’s Connect!",
      subtitle:
        "Always open for a chat—whether it’s about a project, collaboration, or just talking tech.",
      emailPrompt: "You can email me at:",
      socialPrompt: "Or find me on:",
      email: CONTACT_INFO.email,
      socialLinks: buildSocialLinks(
        "Hi Fadli, I'm interested in your portfolio!"
      ),
      cta: {
        label: "View Services",
        href: "/services",
      },
    },
    footer: {
      credit: "Made with love in Palu, Indonesia.",
    },
    projectsData: [
      {
        title: "Jago Compro",
        category: "Web & Company Profile App",
        description:
          "A company profile website for a fast, professional profile-making service provider.",
        tags: ["Next.js", "Tailwind CSS", "JavaScript"],
        stack: ["Next.js", "Tailwind CSS", "JavaScript"],
        caseStudy: {
          problem: "No compelling digital presence to attract new customers.",
          solution:
            "Built a modern company profile website with professional layout and complete business information. SEO-optimized for search visibility. Ads campaign integration for broader outreach.",
          impact:
            "Increased brand credibility and easier customer access to services and products. Higher website traffic.",
        },
        images: [
          "/portfolio/project-jago-compro-1.png",
          "/portfolio/project-jago-compro-2.png",
          "/portfolio/project-jago-compro-3.png",
        ],
      },
      {
        title: "Point Of Sale - Bakti Nusantara Printing",
        category: "Business & Industrial Management System",
        description:
          "A complete Point-of-Sale system with warehouse, cashier, and integrated accounting modules.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "Manual inventory and finance processes caused stock mismatches and delayed reporting.",
          solution:
            "Built a centralized POS system with real-time Warehouse, Cashier, and Accounting modules to manage transactions and financials in one platform.",
          impact:
            "Real-time stock sync, 95% reduction in input errors, and monthly report generation accelerated from days to minutes.",
        },
        images: [
          "/portfolio/project-pos-2.png",
          "/portfolio/project-pos-1.png",
          "/portfolio/project-pos-3.png",
        ],
      },
      {
        title: "Palm Oil Truck Tracking System",
        category: "Business & Industrial Management System",
        description:
          "Tracking system for palm oil delivery from plantations to factories.",
        tags: ["Laravel", "JavaScript", "MySQL", "Leaflet.js"],
        stack: ["Laravel", "JavaScript", "MySQL", "Leaflet.js"],
        caseStudy: {
          problem:
            "Lack of transparency and real-time data in the palm oil supply chain.",
          solution:
            "Built a mobile-friendly web app to track truck GPS location, payload weight, and ETA. Recorded checkpoints during each delivery.",
          impact:
            "Improved trust, reduced potential loss, and provided accurate logistics data.",
        },
        images: [
          "/portfolio/project-tracking-3.png",
          "/portfolio/project-tracking-1.png",
          "/portfolio/project-tracking-2.png",
        ],
      },
      {
        title: "Mutiara Company Profile",
        category: "Web & Company Profile App",
        description:
          "Company profile website for 'Mutiara Cantik', a beauty product store.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "No online presence, missing out on potential customers searching digitally.",
          solution:
            "Built a modern responsive website with product catalog, services, gallery, and contact info.",
          impact:
            "24/7 digital storefront, expanded market reach, and a new communication channel for customers.",
        },
        images: [
          "/portfolio/project-mutiara-4.png",
          "/portfolio/project-mutiara-3.png",
          "/portfolio/project-mutiara-1.png",
          "/portfolio/project-mutiara-2.png",
        ],
      },
      {
        title: "Siketa",
        category: "Academic & HR Information System",
        description:
          "Management system for student thesis and supervision processes.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Slow and non-transparent thesis administration process.",
          solution:
            "Centralized portal for proposal submission, online supervision, and digital progress tracking.",
          impact:
            "Reduced admin time by 60%, full transparency, and less paper usage.",
        },
        images: [
          "/portfolio/project-siketa-2.png",
          "/portfolio/project-siketa-3.png",
          "/portfolio/project-siketa-1.png",
        ],
      },
      {
        title: "Sibema",
        category: "Academic & HR Information System",
        description:
          "Information system for student scholarship application and selection.",
        tags: ["Laravel", "JavaScript", "MySQL"],
        stack: ["Laravel", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Scattered scholarship info and manual selection process.",
          solution:
            "Built a unified portal for all scholarship info and application flow.",
          impact:
            "Increased participation, faster selection, and easier admin tasks.",
        },
        images: [
          "/portfolio/project-sibema-1.png",
          "/portfolio/project-sibema-2.png",
          "/portfolio/project-sibema-3.png",
        ],
      },
      {
        title: "Staff Monitoring System",
        category: "Academic & HR Information System",
        description: "Application to track staff presence and working hours.",
        tags: ["Django", "JavaScript", "MySQL"],
        stack: ["Django", "JavaScript", "MySQL"],
        caseStudy: {
          problem:
            "Manual presence tracking prone to errors. Managers needed clearer delegation visibility.",
          solution:
            "Dashboard app for daily status updates and automatic attendance summaries. Leave requests made easier.",
          impact:
            "Real-time visibility, auto-recap, and easy leave submission.",
        },
        images: [
          "/portfolio/project-monitoring-staf-1.png",
          "/portfolio/project-monitoring-staf-2.png",
          "/portfolio/project-monitoring-staf-3.png",
        ],
      },
      {
        title: "Siporat",
        category: "Academic & HR Information System",
        description:
          "Automatic document numbering and searchable digital archive system.",
        tags: ["Django", "JavaScript", "MySQL"],
        stack: ["Django", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Inconsistent document numbers and slow archiving process.",
          solution:
            "System to auto-generate numbers based on format and maintain searchable digital archive.",
          impact: "100% unique numbers, faster access, and neat archiving.",
        },
        images: [
          "/portfolio/project-siporat-2.png",
          "/portfolio/project-siporat-3.png",
          "/portfolio/project-siporat-1.png",
        ],
      },
      {
        title: "Sijaki",
        category: "Academic & HR Information System",
        description:
          "Scheduling and performance reporting system for lecturers.",
        tags: ["Django", "JavaScript", "MySQL"],
        stack: ["Django", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Scattered performance data made evaluation difficult.",
          solution:
            "Platform for logging activities and generating automatic performance reports.",
          impact:
            "Simplified evaluations, improved accreditation process, and more accurate leadership decisions.",
        },
        images: [
          "/portfolio/project-sijaki-2.png",
          "/portfolio/project-sijaki-3.png",
          "/portfolio/project-sijaki-1.png",
        ],
      },
    ],
  },
};

export const fullSkillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Go", url: "https://golang.org/", icon: SiGoland },
      { name: "PHP", url: "https://www.php.net/", icon: FaPhp },
      { name: "Laravel", url: "https://laravel.com/", icon: FaLaravel },
      { name: "Python", url: "https://www.python.org/", icon: FaPython },
      { name: "Django", url: "https://www.djangoproject.com/", icon: SiDjango },
      { name: "Node.js", url: "https://nodejs.org/", icon: FaNodeJs },
      { name: "NestJS", url: "https://nestjs.com/", icon: SiNestjs },
      { name: "Ruby", url: "https://www.ruby-lang.org/", icon: SiRuby },
      {
        name: "Ruby On Rails",
        url: "https://rubyonrails.org/",
        icon: SiRubyonrails,
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: FaJs,
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        icon: SiTypescript,
      },
      { name: "React", url: "https://react.dev/", icon: FaReact },
      { name: "Next.js", url: "https://nextjs.org/", icon: SiNextdotjs },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    category: "Database & Lainnya",
    skills: [
      { name: "MySQL", url: "https://www.mysql.com/", icon: SiMysql },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        icon: SiPostgresql,
      },
      { name: "Redis", url: "https://redis.io/", icon: SiRedis },
      { name: "Docker", url: "https://www.docker.com/", icon: FaDocker },
      { name: "AWS", url: "https://aws.amazon.com/", icon: FaAws },
      { name: "GCP", url: "https://cloud.google.com/", icon: SiGooglecloud },
      { name: "Git", url: "https://git-scm.com/", icon: FaGitAlt },
    ],
  },
];

export const experienceData = [
  {
    role: "Fullstack Engineer",
    company: "PT. Sinarmas LDA Maritime",
    period: "Mar 2024 - Present",
  },
  {
    role: "Backend Engineer",
    company: "PT. Pertamina Bina Medika IHC DTO",
    period: "Apr 2023 - Mar 2024",
  },
  {
    role: "Mid-Senior Backend Engineer",
    company: "PT. Otoraja Network Indonesia",
    period: "Jan 2021 - Mar 2023",
  },
  {
    role: "Fullstack Engineer",
    company: "PT. Raksasa Laju Lintang (ralali.com)",
    period: "Mar 2020 - Juni 2020",
  },
  {
    role: "Fullstack Engineer",
    company: "Universitas Tadulako",
    period: "Aug 2016 - Mar 2020",
  },
];
