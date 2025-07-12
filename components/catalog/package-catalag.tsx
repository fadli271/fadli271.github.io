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
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PackageCatalogue() {
  const packages = {
    title: "🚀 Paket Website UMKM",
    subtitle:
      "📦 Solusi praktis dan scalable untuk bisnis kecil hingga menengah yang ingin tampil profesional secara online.",
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

  return (
    <section className="py-24 bg-white dark:bg-zinc-900" id="packages">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-zinc-800 dark:text-white">
            {packages.title}
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            {packages.subtitle}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {packages.items.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                className={`relative group p-8 h-full flex flex-col transition-all duration-300 rounded-3xl bg-gradient-to-br from-white via-sky-50 to-sky-100 dark:from-zinc-800 dark:to-zinc-700 hover:shadow-xl hover:scale-[1.02] ${
                  pkg.isPopular
                    ? "border-2 border-sky-500 shadow-2xl scale-105"
                    : "border border-gray-200 dark:border-zinc-700"
                }`}
              >
                {pkg.isPopular && (
                  <Chip
                    className="absolute top-4 right-4 z-10 text-sm"
                    color="primary"
                    variant="shadow"
                  >
                    🌟 Paling Populer
                  </Chip>
                )}

                <CardHeader className="pb-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-sky-800 dark:text-white">
                    {pkg.name}
                  </h3>
                </CardHeader>

                <CardBody className="flex-grow pt-6">
                  <div className="text-4xl font-extrabold text-sky-600 dark:text-sky-400">
                    {pkg.price}
                  </div>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 italic">
                    Estimasi pengerjaan: {pkg.estimate}
                  </div>

                  <div className="mt-5 font-medium text-gray-700 dark:text-gray-300">
                    Ideal untuk:
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {pkg.idealFor}
                  </p>

                  <Divider className="my-6" />

                  <div className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Fitur Utama:
                  </div>
                  <ul className="space-y-3 text-sm">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 text-sky-500" />
                        <span className="text-gray-700 dark:text-gray-200">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {pkg.bonus && (
                    <div className="mt-6">
                      <Chip color="secondary" variant="flat">
                        🎁 Bonus: {pkg.bonus}
                      </Chip>
                    </div>
                  )}
                </CardBody>

                <CardFooter className="mt-8">
                  <Button
                    fullWidth
                    className="font-bold"
                    color={pkg.isPopular ? "primary" : "default"}
                    size="lg"
                    variant={pkg.isPopular ? "shadow" : "solid"}
                  >
                    Pilih Paket Ini
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          <p>✅ Semua paket termasuk: {packages.includes.join(", ")}.</p>
        </div>
      </div>
    </section>
  );
}
