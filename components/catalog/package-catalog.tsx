"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Divider,
} from "@heroui/react";
import { CheckCircle, Timer, Info, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const packages = {
  title: "Paket Website UMKM",
  subtitle:
    "Solusi praktis dan scalable untuk bisnis kecil hingga menengah yang ingin tampil profesional secara online.",
  includes: [
    "Domain & Hosting Support",
    "Gratis Maintenance 1 Bulan",
    "Video Tutorial",
  ],
  items: [
    {
      name: "Paket Sat Set Online",
      price: "Rp 2.500.000",
      estimate: "7 – 14 Hari Kerja",
      idealFor: "UMKM/Personal butuh website cepat & profesional",
      features: [
        "3 Halaman Utama",
        "Desain Template Premium",
        "Mobile Friendly",
        "Tombol WhatsApp",
        "Integrasi Media Sosial",
      ],
      bonus: null,
      isPopular: false,
    },
    {
      name: "Paket Tumbuh Profesional",
      price: "Mulai dari Rp 5.500.000",
      estimate: "3 – 5 Minggu",
      idealFor: "Bisnis berkembang yang butuh fitur lebih lengkap",
      features: [
        "Hingga 8 Halaman",
        "Desain Kustom",
        "Blog / Galeri",
        "Setup Awal SEO",
        "Semua fitur Paket Sat Set",
      ],
      bonus: "1 Jam Strategi Digital Gratis",
      isPopular: true,
    },
  ],
};

export default function PackageCatalogue() {
  return (
    <section className="py-24 bg-white" id="packages">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold gradient-text inline-flex items-center justify-center gap-2">
            <Rocket className="w-10 h-10 text-sky-500 gradient-text" />
            {packages.title}
          </h2>
          <p className="mt-3 text-lg text-gray-600">{packages.subtitle}</p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {packages.items.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                className={`relative flex flex-col bg-white h-full rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-transform hover:scale-[1.02] p-6 ${
                  pkg.isPopular ? "border-sky-500 shadow-lg" : ""
                }`}
              >
                {pkg.isPopular && (
                  <Chip
                    className="absolute top-4 right-4 text-sm font-medium"
                    color="primary"
                    variant="shadow"
                  >
                    \ud83c\udf1f Paling Populer
                  </Chip>
                )}

                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {pkg.name}
                  </h3>
                </CardHeader>

                <CardBody className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 text-sky-600">
                    <span className="text-3xl font-extrabold">{pkg.price}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Timer className="w-4 h-4 mr-1" />
                      {pkg.estimate}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                      Ideal Untuk
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pkg.idealFor}
                    </p>
                  </div>

                  <Divider />

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                      Fitur Utama
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 text-sky-500" />
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.bonus && (
                    <div className="pt-2 text-white">
                      <Chip
                        className="bg-yellow-100 text-yellow-600"
                        variant="flat"
                      >
                        \ud83c\udff1 Bonus: {pkg.bonus}
                      </Chip>
                    </div>
                  )}
                </CardBody>

                <CardFooter className="pt-6 mt-auto">
                  <Button
                    fullWidth
                    className="font-bold bg-gradient-to-r from-sky-500 to-blue-600"
                    size="lg"
                    variant="solid"
                  >
                    Pilih Paket Ini
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center text-sm text-gray-500 mx-auto">
          <div className="inline-flex items-center gap-2 justify-center">
            <Info className="w-5 h-5 text-gray-400" />
            <span> Semua paket termasuk: {packages.includes.join(", ")}.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
