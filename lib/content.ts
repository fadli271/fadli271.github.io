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

export const content = {
  id: {
    nav: {
      home: "Home",
      experience: "Pengalaman",
      projects: "Proyek",
      about: "Tentang",
      contact: "Kontak",
    },
    hero: {
      line1: "Mohamad Fadli",
      line2: "Software Engineer",
      tagline:
        "Hey, Let's talk about tech and make some magic for your business",
      scroll: "Scroll",
    },
    experienceSection: {
      about: {
        title: "Pengalaman",
        content:
          "Sejak 2016, saya membangun bukan hanya baris kode—tapi sistem yang menyelesaikan masalah nyata. Dengan pendekatan produk dan mindset engineering, saya bantu bisnis tumbuh lewat solusi digital yang scalable, maintainable, dan meaningful.",
        link: "Selengkapnya...",
      },
      experience: { title: "Pengalaman", subtitle: "Tahun di industri" },
      projects: { title: "Proyek Selesai", subtitle: "Dari berbagai domain" },
      stack: { title: "Teknologi Utama" },
      cta: {
        title: "Punya Ide Proyek?",
        button: "Diskusikan ide bisnismu",
      },
      download: {
        cv: "Unduh CV",
        link: "/cv-mohamad-fadli.pdf",
      },
      partner: {
        title: "Partner Kerja Sama",
        subtitle: "Dari Berbagai Perusahaan",
      },
    },
    skills: {
      title: "Keahlian & Teknologi",
      subtitle:
        "Kumpulan teknologi yang saya kuasai untuk merancang, membangun, dan menerapkan solusi perangkat lunak yang efektif dari hulu ke hilir.",
    },
    projects: {
      title: "Galeri Proyek",
      subtitle:
        "Kumpulan proyek yang menunjukkan bagaimana saya memecahkan masalah nyata. Gulir untuk menjelajah.",
    },
    about: {
      title: "Perjalanan Karier",
      subtitle:
        "Pengalaman yang membentuk saya menjadi engineer seperti sekarang.",
      narrative:
        "Sejak memulai perjalanan di dunia pemrograman pada 2016, saya selalu terpesona bukan hanya oleh teknologi itu sendiri, tetapi oleh kemampuannya memecahkan masalah manusia yang nyata. Bagi saya, coding adalah alat untuk menciptakan sistem yang efisien dan pengalaman yang lebih baik. Dengan pola pikir fleksibel dan etos kerja kuat, saya mendedikasikan diri untuk terus belajar dan beradaptasi, baik saat mengerjakan sistem akademik maupun arsitektur microservices berskala besar.",
      cta: "Download CV",
    },
    contact: {
      title: "Mari Terhubung",
      subtitle:
        "Saya selalu terbuka untuk diskusi mengenai proyek baru, peluang kolaborasi, atau sekadar bertukar pikiran tentang teknologi.",
      emailPrompt: "Anda dapat menghubungi saya melalui email di:",
      socialPrompt: "",
    },
    footer: { credit: "Didesain dengan penuh semangat di Palu." },
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
        images: [
          "/portfolio/1 (1).webp",
          "/portfolio/1 (1).webp",
          "/portfolio/1 (1).webp",
        ],
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
        images: [
          "Peta Pelacakan Truk secara Real-time",
          "Form Input Data Timbangan Digital",
        ],
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
        images: ["Tampilan Halaman Depan Website", "Galeri Produk dan Layanan"],
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
        images: ["Halaman Landing Page", "Profil Produk"],
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
        images: ["Dashboard Kemajuan Mahasiswa", "Fitur Chat Bimbingan"],
      },
      {
        title: "Sirupas",
        category: "Sistem Informasi Akademik & Kepegawaian",
        description:
          "Aplikasi sistem informasi arsip dan manajemen data untuk sebuah fakultas akademi besar.",
        tags: ["Ruby on Rails", "PHP"],
        stack: ["Ruby on Rails", "PostgreSQL", "Elasticsearch"],
        caseStudy: {
          problem:
            "Pencarian dokumen fisik yang lambat dan risiko kehilangan arsip.",
          solution:
            "Membangun sistem arsip digital dengan unggah dokumen dan pencarian full-text.",
          impact:
            "Pencarian jadi detik, data lebih aman, dan audit jadi lebih mudah.",
        },
        images: ["Pencarian Arsip", "Detail Dokumen"],
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
        images: ["Daftar Beasiswa", "Formulir Pendaftaran"],
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
        images: ["Dasbor Staf", "Laporan Jam Kerja"],
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
        images: ["Form Nomor Surat", "Tabel Arsip"],
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
        images: ["Rekap Kinerja", "Jadwal Mengajar"],
      },
    ],
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      line1: "Software Engineer &",
      line2: "Problem Solver",
      tagline:
        "I turn complex ideas into reliable, high-performance digital solutions ready to scale with your business.",
      scroll: "Scroll",
    },
    bento: {
      about: {
        title: "About Me",
        content:
          "Since 2016, I've been fascinated by technology's ability to solve real-world problems. For me, coding is a tool to create efficient systems.",
        link: "Read more...",
      },
      experience: { title: "Experience", subtitle: "Years in the industry" },
      projects: {
        title: "Projects Completed",
        subtitle: "Across various domains",
      },
      stack: { title: "Main Technologies" },
      cta: { title: "Have a Project Idea?", button: "Let's Talk" },
    },
    projects: {
      title: "Project Gallery",
      subtitle:
        "A collection of projects showcasing how I solve real problems. Scroll to explore.",
    },
    about: {
      title: "Career Journey",
      subtitle: "Experiences that shaped me into the engineer I am today.",
    },
    contact: {
      title: "Let's Connect",
      subtitle:
        "I'm always open to discussing new projects, collaboration opportunities, or just talking about technology.",
      emailPrompt: "You can reach me via email at:",
    },
    footer: { credit: "Designed with passion in Palu." },
    projectsData: [
      {
        title: "Bakti Nusantara POS Application",
        description:
          "A complete Point-of-Sale system with integrated warehouse management, cashier, and accounting modules.",
        tags: ["Golang", "Python", "Flutter"],
      },
      {
        title: "KTJM-App",
        description:
          "A tracking system for palm oil shipments from plantation to factory.",
        tags: ["PHP", "Laravel", "JavaScript"],
      },
      {
        title: "Siketa",
        description:
          "An information system to manage the final thesis process and supervision for students.",
        tags: ["PHP", "MySQL"],
      },
      {
        title: "Sirupas",
        description:
          "An archive and data management information system for a large university faculty.",
        tags: ["Ruby on Rails", "PHP"],
      },
    ],
  },
};

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
