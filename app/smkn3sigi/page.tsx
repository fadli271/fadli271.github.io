import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function SMKN3SigiPage() {
  return (
    <div className="min-h-screen bg-smk-neutral font-sans text-slate-800">
      {/* Navbar */}
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-smk-primary/90 backdrop-blur-md text-white shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                fill
                alt="SMKN 3 Sigi Logo"
                className="object-contain"
                src="/smkn3/smkn-3-sigi-logo.png"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              SMKN 3 SIGI
            </span>
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            <Link
              className="hover:text-smk-secondary transition-colors"
              href="#"
            >
              Beranda
            </Link>
            <Link
              className="hover:text-smk-secondary transition-colors"
              href="#profil"
            >
              Profil
            </Link>
            <Link
              className="hover:text-smk-secondary transition-colors"
              href="#jurusan"
            >
              Jurusan
            </Link>
            <Link
              className="hover:text-smk-secondary transition-colors"
              href="#ppdb"
            >
              PPDB Online
            </Link>
            <Link
              className="hover:text-smk-secondary transition-colors"
              href="#galeri"
            >
              Galeri
            </Link>
            <Link
              className="hover:text-smk-secondary transition-colors"
              href="#kontak"
            >
              Kontak
            </Link>
          </div>

          <Link
            className="hidden md:block bg-smk-secondary hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
            href="#ppdb"
          >
            Daftar Sekarang
          </Link>

          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden text-2xl ml-auto">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            priority
            alt="SMKN 3 Sigi Students"
            className="object-cover"
            src="/smkn3/hero-bg.png"
          />
          <div className="absolute inset-0 bg-smk-primary/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-down">
            Cetak Lulusan <span className="text-smk-secondary">Kompeten</span>,{" "}
            <br />
            Berkarakter, dan Siap Kerja.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-slate-200">
            SMK Negeri 3 Sigi menggabungkan kurikulum industri modern dengan
            pendidikan karakter untuk masa depan gemilang di bidang Teknologi,
            Otomotif, dan Agribisnis.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              className="bg-smk-secondary hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              href="#jurusan"
            >
              Jelajahi Jurusan
            </Link>
            <Link
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              href="#profil"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white" id="profil">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-smk-primary mb-6">
            Selamat Datang di SMKN 3 SIGI
          </h2>
          <div className="w-24 h-1 bg-smk-secondary mx-auto mb-8" />
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            &quot;Berlokasi di Porame, Kab. Sigi, kami berkomitmen mencetak SDM
            unggul yang tidak hanya pandai teori, tapi mahir di lapangan. Dengan
            fasilitas bengkel dan lab standar industri, siswa kami dilatih untuk
            langsung &apos;Link &amp; Match&apos; dengan dunia kerja.&quot;
          </p>
        </div>
      </section>

      {/* Jurusan Section */}
      <section className="py-20 bg-slate-50" id="jurusan">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-smk-primary mb-4">
              Konsentrasi Keahlian
            </h2>
            <p className="text-slate-600">
              Pilih masa depanmu dengan program keahlian unggulan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* TKJ Card */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group border-b-4 border-smk-primary flex flex-col h-full">
              <div className="h-48 bg-slate-100 relative flex items-center justify-center p-6 flex-shrink-0">
                <div className="relative w-40 h-40 transition-transform group-hover:scale-110 duration-500">
                  <Image
                    fill
                    alt="TKJ Icon"
                    className="object-contain drop-shadow-xl"
                    src="/smkn3/icon-tkj-transparent.png"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-smk-primary mb-2">
                  Teknik Komputer & Jaringan
                </h3>
                <p className="text-smk-secondary font-semibold mb-4">
                  Kuasai Dunia Digital & Konektivitas
                </p>
                <p className="text-slate-600 mb-6">
                  Mempelajari instalasi jaringan (LAN/WAN), administrasi server,
                  mikrotik, hingga keamanan siber. Lulusan siap menjadi Network
                  Engineer dan IT Support handal.
                </p>
                <Link
                  className="text-smk-primary font-bold hover:text-smk-secondary flex items-center gap-2 before:absolute before:inset-0 mt-auto"
                  href="/smkn3sigi/jurusan/tkj"
                >
                  Selengkapnya <span>→</span>
                </Link>
              </div>
            </div>

            {/* Otomotif Card */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group border-b-4 border-smk-primary flex flex-col h-full">
              <div className="h-48 bg-slate-100 relative flex items-center justify-center p-6 flex-shrink-0">
                <div className="relative w-40 h-40 transition-transform group-hover:scale-110 duration-500">
                  <Image
                    fill
                    alt="Otomotif Icon"
                    className="object-contain drop-shadow-xl"
                    src="/smkn3/icon-otomotif-transparent.png"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-smk-primary mb-2">
                  Teknik Kendaraan Ringan
                </h3>
                <p className="text-smk-secondary font-semibold mb-4">
                  Ahli Mesin Standar Industri
                </p>
                <p className="text-slate-600 mb-6">
                  Fokus pada perbaikan kendaraan bensin & diesel, kelistrikan
                  bodi, dan servis berkala. Didukung bengkel praktek yang
                  memadai untuk simulasi standar bengkel resmi.
                </p>
                <Link
                  className="text-smk-primary font-bold hover:text-smk-secondary flex items-center gap-2 before:absolute before:inset-0 mt-auto"
                  href="/smkn3sigi/jurusan/otomotif"
                >
                  Selengkapnya <span>→</span>
                </Link>
              </div>
            </div>

            {/* ATPH Card */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group border-b-4 border-smk-primary flex flex-col h-full">
              <div className="h-48 bg-slate-100 relative flex items-center justify-center p-6 flex-shrink-0">
                <div className="relative w-40 h-40 transition-transform group-hover:scale-110 duration-500">
                  <Image
                    fill
                    alt="Agribisnis Icon"
                    className="object-contain drop-shadow-xl"
                    src="/smkn3/icon-atph-transparent.png"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-smk-primary mb-2">
                  Agribisnis Tanaman Pangan
                </h3>
                <p className="text-smk-secondary font-semibold mb-4">
                  Petani Milenial Berbasis Teknologi
                </p>
                <p className="text-slate-600 mb-6">
                  Mengelola lahan pertanian modern, pembibitan, hingga pasca
                  panen. Mencetak wirausahawan muda yang mampu meningkatkan
                  ketahanan pangan daerah Sigi.
                </p>
                <Link
                  className="text-smk-primary font-bold hover:text-smk-secondary flex items-center gap-2 before:absolute before:inset-0 mt-auto"
                  href="/smkn3sigi/jurusan/atph"
                >
                  Selengkapnya <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-smk-primary text-white relative overflow-hidden">
        {/* Decorative background elements could go here */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Kenapa Memilih Kami?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-smk-secondary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Kurikulum Merdeka
                    </h3>
                    <p className="text-slate-300">
                      Pembelajaran fleksibel dan fokus pada project riil yang
                      relevan dengan kebutuhan industri.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-smk-secondary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Guru Bersertifikat
                    </h3>
                    <p className="text-slate-300">
                      Pengajar berpengalaman dan tersertifikasi asesor
                      kompetensi nasional.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-smk-secondary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lokasi Strategis</h3>
                    <p className="text-slate-300">
                      Lingkungan belajar yang asri, sejuk, dan kondusif di Jalan
                      Bukit Indah Tabingga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              {/* Use the hero bg again or another image if available, for now reusing hero bg but zoomed/cropped differently */}
              <Image
                fill
                alt="School Environment"
                className="object-cover"
                src="/smkn3/hero-bg.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50" id="galeri">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-smk-primary mb-4">
              Galeri Kegiatan
            </h2>
            <p className="text-slate-600">
              Dokumentasi aktivitas siswa dan prestasi sekolah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/smkn3/gallery/tkj.png", title: "Praktek Lab TKJ" },
              { src: "/smkn3/gallery/auto.png", title: "Bengkel Otomotif" },
              { src: "/smkn3/gallery/agri.png", title: "Greenhouse ATPH" },
              { src: "/smkn3/gallery/scouts.png", title: "Kegiatan Pramuka" },
              {
                src: "/smkn3/gallery/achievement.png",
                title: "Prestasi Siswa",
              },
              { src: "/smkn3/gallery/classroom.png", title: "Suasana Kelas" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.src}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8" id="kontak">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image
                    fill
                    alt="SMKN 3 Sigi Logo"
                    className="object-contain"
                    src="/smkn3/smkn-3-sigi-logo.png"
                  />
                </div>
                <span className="text-xl font-bold">SMKN 3 SIGI</span>
              </div>
              <p className="text-slate-400 mb-6">
                Mewujudkan generasi muda yang kompeten, berakhlak mulia, dan
                siap bersaing di dunia kerja global.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-smk-secondary transition-colors"
                  href="/"
                >
                  <FaFacebook />
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-smk-secondary transition-colors"
                  href="/"
                >
                  <FaInstagram />
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-smk-secondary transition-colors"
                  href="/"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
                Kontak Kami
              </h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3 items-start">
                  <FaMapMarkerAlt className="mt-1 text-smk-secondary" />
                  <span>
                    Jl. Bukit Indah Tabingga No. 1, Desa Porame, Kec. Kinovaro,
                    Kab. Sigi, Sulawesi Tengah, 94362.
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <FaPhone className="text-smk-secondary" />
                  <span>(0451) xxxxx</span>
                </li>
                <li className="flex gap-3 items-center">
                  <FaEnvelope className="text-smk-secondary" />
                  <span>smkntiga.sigi@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
                Tautan Cepat
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link
                    className="hover:text-smk-secondary transition-colors"
                    href="/"
                  >
                    PPDB Online
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-smk-secondary transition-colors"
                    href="/"
                  >
                    E-Learning
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-smk-secondary transition-colors"
                    href="#"
                  >
                    Info Kelulusan
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-smk-secondary transition-colors"
                    href="#"
                  >
                    Galeri Kegiatan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} SMK Negeri 3 Sigi. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
