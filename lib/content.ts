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

export type Language = "id" | "en";

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
          "Sejak 2016, aku nggak cuma nulis kode—tapi bikin sistem yang bantu selesaikan masalah nyata. Dengan mindset produk dan jiwa engineer, aku bantu bisnis berkembang lewat solusi digital yang scalable dan gampang dirawat.",
        link: "Lihat kisah lengkap",
      },
      experience: { title: "Pengalaman", subtitle: "Tahun di dunia tech" },
      projects: {
        title: "Proyek Diselesaikan",
        subtitle: "Dari berbagai industri",
      },
      stack: { title: "Stack Andalan" },
      cta: {
        title: "Punya ide proyek seru?",
        button: "Diskusi bareng !",
      },
      download: {
        cv: "Unduh CV",
        link: "/cv-mohamad-fadli.pdf",
      },
      partner: {
        title: "Pernah Kerja Sama Dengan",
        subtitle: "Brand & Perusahaan",
      },
    },
    skills: {
      title: "Keahlian & Teknologi",
      subtitle:
        "Teknologi yang sering kupakai buat bangun sistem — dari backend, frontend, sampai ke production.",
    },
    projects: {
      title: "Galeri Proyek",
      subtitle:
        "Intip gimana aku menyelesaikan masalah lewat kode. Scroll aja.",
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
      tagline: "Lets talk tech and build awesome stuff that actually works!",
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
      stack: { title: "Tech Stack" },
      cta: {
        title: "Got a cool project idea?",
        button: "Let’s collaborate!",
      },
      download: {
        cv: "Download CV",
        link: "/cv-mohamad-fadli.pdf",
      },
      partner: {
        title: "Worked With",
        subtitle: "Brands & Companies",
      },
    },
    skills: {
      title: "Skills & Tech",
      subtitle:
        "A collection of tools and technologies I use to build from backend to frontend to deployment.",
    },
    projects: {
      title: "Project Gallery",
      subtitle:
        "Here’s how I solve real-world problems with code. Take a scroll and explore.",
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
        "Always up for a chat—whether it's about a project, collaboration, or just geeking out about tech.",
      emailPrompt: "Drop me an email at:",
      socialPrompt: "Or find me here:",
    },
    footer: { credit: "Made with love in Palu, Indonesia." },
    projectsData: [
      {
        title: "Aplikasi POS Bakti Nusantara",
        category: "Sistem Manajemen Bisnis & Industri",
        description:
          "Sistem Point-of-Sale lengkap dengan manajemen gudang, kasir, dan modul akunting terintegrasi.",
        tags: ["Golang", "Python", "Flutter"],
        stack: ["Golang", "Python", "Flutter", "PostgreSQL"],
        caseStudy: {
          problem:
            "Manajemen inventaris dan keuangan di apotek dilakukan manual, menyebabkan stok tidak sesuai dan pelaporan lambat.",
          solution:
            "Membangun sistem POS terintegrasi dengan modul Gudang, Kasir, dan Akunting otomatis.",
          impact:
            "Sinkronisasi stok secara real-time, mengurangi kesalahan input 95%, dan mempercepat laporan keuangan dari hitungan hari menjadi menit.",
        },
        images: [],
      },
      {
        title: "KTJM-App",
        category: "Sistem Manajemen Bisnis & Industri",
        description:
          "Sistem pelacakan pengiriman kelapa sawit dari perkebunan hingga pabrik.",
        tags: ["PHP", "Laravel", "JavaScript"],
        stack: ["PHP", "Laravel", "JavaScript", "MySQL", "Leaflet.js"],
        caseStudy: {
          problem:
            "Kurangnya transparansi dan data real-time dalam rantai pasok kelapa sawit.",
          solution:
            "Mengembangkan aplikasi web & mobile untuk melacak posisi truk (GPS), mencatat berat muatan, dan estimasi waktu tiba.",
          impact:
            "Meningkatkan kepercayaan, menekan potensi kehilangan 20%, dan menyediakan data akurat untuk logistik.",
        },
        images: [],
      },
      {
        title: "MC-Profile",
        category: "Aplikasi Web & Profil",
        description:
          "Website profil untuk Mutiara Cantik, sebuah toko kecantikan.",
        tags: ["HTML", "CSS", "JavaScript"],
        stack: ["HTML", "CSS", "JavaScript"],
        caseStudy: {
          problem:
            "Toko kecantikan 'Mutiara Cantik' tidak memiliki kehadiran online, kehilangan potensi pelanggan yang mencari produk dan layanan secara digital.",
          solution:
            "Membangun website profil modern dan responsif menampilkan katalog produk, layanan, galeri, dan informasi kontak.",
          impact:
            "Menciptakan etalase digital 24/7, meningkatkan jangkauan pasar, dan memberi saluran komunikasi baru bagi pelanggan.",
        },
        images: [],
      },
      {
        title: "Jago Compro",
        category: "Aplikasi Web & Profil",
        description:
          "Website profil untuk Mutiara Cantik, sebuah toko kecantikan.",
        tags: ["HTML", "CSS", "JavaScript"],
        stack: ["HTML", "CSS", "JavaScript"],
        caseStudy: {
          problem:
            "Tidak memiliki representasi digital yang menarik untuk menarik pelanggan baru.",
          solution:
            "Membuat website profil menarik dengan layout profesional dan informasi bisnis lengkap.",
          impact:
            "Meningkatkan kredibilitas brand dan mempermudah akses pelanggan ke informasi produk dan layanan.",
        },
        images: [],
      },
      {
        title: "Siketa",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Sistem informasi manajemen proses dan bimbingan tugas akhir mahasiswa.",
        tags: ["PHP", "MySQL"],
        stack: ["PHP (Native)", "MySQL", "jQuery"],
        caseStudy: {
          problem:
            "Proses administrasi tugas akhir yang lambat dan tidak transparan.",
          solution:
            "Membangun portal terpusat untuk pengajuan proposal, bimbingan online, dan pelacakan kemajuan digital.",
          impact:
            "Memangkas waktu administrasi 60%, transparansi penuh, dan mengurangi penggunaan kertas.",
        },
        images: [],
      },
      {
        title: "Sibema",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Sistem informasi untuk pendaftaran dan seleksi beasiswa mahasiswa.",
        tags: ["PHP", "JavaScript"],
        stack: ["PHP", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Informasi beasiswa tersebar dan proses manual.",
          solution:
            "Membangun portal satu pintu untuk semua info dan seleksi beasiswa.",
          impact:
            "Partisipasi meningkat, seleksi efisien, dan administrasi ringan.",
        },
        images: [],
      },
      {
        title: "Monitoring Staf",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Aplikasi untuk memonitor status staf dan rekapitulasi jam kerja.",
        tags: ["PHP", "MySQL"],
        stack: ["PHP", "MySQL", "jQuery", "AJAX"],
        caseStudy: {
          problem: "Pelacakan kehadiran staf manual dan rentan kesalahan.",
          solution:
            "Aplikasi dasbor untuk input status harian dan rekap otomatis.",
          impact:
            "Visibilitas real-time, rekap otomatis, dan cuti mudah diajukan.",
        },
        images: [],
      },
      {
        title: "Siporat",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description: "Sistem penomoran surat otomatis dan arsip digital.",
        tags: ["PHP", "JavaScript"],
        stack: ["PHP", "JavaScript", "MySQL"],
        caseStudy: {
          problem: "Nomor surat tidak konsisten dan proses lambat.",
          solution:
            "Sistem yang mengenerate nomor otomatis sesuai format dan arsip digital.",
          impact: "Nomor unik 100%, cepat, dan arsip rapi.",
        },
        images: [],
      },
      {
        title: "Sijaki",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Sistem informasi untuk penjadwalan dan pelaporan kinerja dosen.",
        tags: ["PHP", "MySQL"],
        stack: ["PHP", "MySQL"],
        caseStudy: {
          problem: "Data kinerja dosen tersebar dan sulit dievaluasi.",
          solution:
            "Platform input kegiatan dosen dan laporan kinerja otomatis.",
          impact:
            "Evaluasi mudah, akreditasi terbantu, dan keputusan pimpinan lebih akurat.",
        },
        images: [],
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
