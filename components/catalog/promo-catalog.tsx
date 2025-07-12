"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Button, Image, Chip } from "@heroui/react";
import { FiCheckCircle, FiArrowRight, FiGift, FiClock } from "react-icons/fi";

const promo = {
  title: "Bangun Website Profesional untuk UMKM",
  subtitle:
    "Tampil lebih kredibel, tingkatkan omzet, dan jangkau lebih banyak pelanggan dengan website modern siap pakai.",
  benefits: [
    "Desain Mobile Friendly & Estetik",
    "Gratis Domain + Hosting 1 Tahun",
    "Fitur Katalog Produk & Checkout",
    "Integrasi WhatsApp & Sosial Media",
    "Dukungan Teknis & Panduan Admin",
  ],
  cta_text: "Klaim Sekarang 🔥",
  image_url:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  promo_tagline: "Promo Khusus Bulan Ini 🎉",
  extra_note: "Bonus E-Course & Maintenance untuk 5 Pendaftar Pertama!",
  expiration: "Berlaku hingga 31 Juli 2025",
};

export default function PromoCatalog() {
  return (
    <section className="bg-white" id="promo">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
        >
          <Card className="overflow-hidden border-none rounded-3xl bg-white h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[460px]">
              {/* LEFT: Gambar Promo */}
              <div className="relative aspect-[4/3] md:aspect-auto h-full">
                <Image
                  alt="Promo Website UMKM"
                  className="w-full h-full object-cover"
                  src={promo.image_url}
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                <div className="absolute top-5 left-5">
                  <Chip
                    className="font-semibold text-white animate-pulse"
                    color="warning"
                    variant="shadow"
                  >
                    {promo.promo_tagline}
                  </Chip>
                </div>
              </div>

              {/* RIGHT: Konten */}
              <CardBody className="p-8 sm:p-12 flex flex-col justify-center">
                {/* Note */}
                <div className="flex items-center gap-3 mb-4 bg-yellow-100 px-4 py-2 rounded-md border-l-4 border-yellow-400">
                  <FiGift className="text-yellow-600" />
                  <p className="text-sm text-yellow-700 font-medium">
                    {promo.extra_note}
                  </p>
                </div>

                {/* Judul */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-800 leading-tight">
                  {promo.title}
                </h2>

                <p className="mt-3 text-gray-600 text-base sm:text-md leading-relaxed">
                  {promo.subtitle}
                </p>

                {/* Expiration Info */}
                <div className="mt-3 flex items-center gap-2 text-rose-600 font-semibold text-sm">
                  <FiClock className="w-4 h-4" />
                  {promo.expiration}
                </div>

                {/* Benefit List */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {promo.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <FiCheckCircle className="text-emerald-500 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <Button
                    className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:scale-[1.03] transition-transform"
                    endContent={<FiArrowRight />}
                    size="lg"
                    onPress={() => console.log("Promo CTA clicked")}
                  >
                    {promo.cta_text}
                  </Button>
                </div>
              </CardBody>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
