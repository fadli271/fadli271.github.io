import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

export default function OtomotifPage() {
  return (
    <div className="min-h-screen bg-smk-neutral font-sans text-slate-800">
      {/* Navbar (Simplified) */}
      <nav className="fixed w-full z-50 bg-smk-primary/95 backdrop-blur-sm text-white shadow-lg h-20">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <Link href="/smkn3sigi" className="flex items-center gap-3 group">
            <FaArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Kembali ke Beranda</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                fill
                alt="SMKN 3 Sigi Logo"
                className="object-contain"
                src="/smkn3/smkn-3-sigi-logo.png"
              />
            </div>
            <span className="font-bold hidden md:block">SMKN 3 SIGI</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-smk-primary text-white pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/smkn3/hero-bg.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="w-32 h-32 mx-auto mb-6 relative animate-bounce-slow">
            <Image
              fill
              alt="Otomotif Icon"
              className="object-contain drop-shadow-2xl"
              src="/smkn3/icon-otomotif-transparent.png"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Teknik Kendaraan Ringan
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Mencetak mekanik handal dengan standar industri otomotif modern.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-smk-primary mb-6">
                Tentang Program Keahlian
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Teknik Kendaraan Ringan (TKR) Otomotif membekali siswa dengan
                kompetensi dalam pemeliharaan dan perbaikan kendaraan bermotor
                roda empat. Kurikulum disesuaikan dengan perkembangan teknologi
                otomotif terkini, termasuk sistem injeksi elektronik dan
                diagnostik komputer.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Siswa dilatih di bengkel praktik yang lengkap untuk memastikan
                mereka siap kerja di bengkel resmi maupun membuka usaha bengkel
                mandiri.
              </p>

              <h3 className="text-2xl font-bold text-smk-primary mb-4 mt-8">
                Apa yang Dipelajari?
              </h3>
              <ul className="space-y-3">
                {[
                  "Pemeliharaan Mesin Kendaraan Ringan (Engine Tune-up)",
                  "Sistem Kelistrikan Bodi & Mesin",
                  "Sistem Sasis & Pemindah Tenaga (Rem, Suspensi, Transmisi)",
                  "Teknologi Hybrid & EFI (Electronic Fuel Injection)",
                  "Service Berkala Standar Bengkel Resmi",
                  "Kewirausahaan Bengkel Otomotif",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <FaCheckCircle className="text-smk-secondary mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-smk-secondary">
                <h3 className="text-xl font-bold text-smk-primary mb-4">
                  Prospek Karir
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Mekanik / Teknisi Otomotif</li>
                  <li>• Service Advisor</li>
                  <li>• Operator Alat Berat</li>
                  <li>• Wirausaha Bengkel / Toko Sparepart</li>
                  <li>• Teknisi Perakitan Mobil</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-smk-primary">
                <h3 className="text-xl font-bold text-smk-primary mb-4">
                  Fasilitas Bengkel
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src="/smkn3/gallery/auto.png"
                      fill
                      alt="Bengkel Otomotif"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">
                      Trainer Engine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
