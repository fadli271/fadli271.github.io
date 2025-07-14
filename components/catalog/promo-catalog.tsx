"use client";

import React from "react";
import { Button, Card, CardBody, Chip, Image } from "@heroui/react";
import { circOut, motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight, FiGift, FiClock } from "react-icons/fi";

// Data konten (bisa dipisah ke file lain)
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
  cta_text: "Klaim Sekarang",
  image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  promo_tagline: "Promo Khusus Bulan Ini 🎉",
  extra_note: "Bonus E-Course & Maintenance untuk 5 Pendaftar Pertama!",
  expiration: "Berlaku hingga 31 Juli 2025",
};

// Varian animasi untuk container utama
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Varian animasi untuk item yang muncul dari bawah
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: circOut,
    },
  },
};

// Varian animasi untuk item list
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function PromoCatalog() {
  return (
    <section className="bg-white" id="promo">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <Card className="overflow-hidden border-1 rounded-3xl bg-white h-full shadow-2xl shadow-sky-100">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[460px]">
              {/* LEFT: Gambar Promo */}
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-[4/3] md:aspect-auto h-full overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    alt="Promo Website UMKM"
                    className="w-full h-full object-cover"
                    src={promo.image_url}
                  />
                </motion.div>
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
              </motion.div>

              {/* RIGHT: Konten */}
              <CardBody className="p-8 sm:p-12 flex flex-col justify-center">
                {/* Note */}
                <motion.div
                  className="flex items-center gap-3 mb-4 bg-yellow-100 px-4 py-2 rounded-md border-l-4 border-yellow-400"
                  variants={itemVariants}
                >
                  <FiGift className="text-yellow-600" />
                  <p className="text-sm text-yellow-700 font-medium">
                    {promo.extra_note}
                  </p>
                </motion.div>

                {/* Judul */}
                <motion.h2
                  className="text-2xl sm:text-3xl font-extrabold text-zinc-800 leading-tight"
                  variants={itemVariants}
                >
                  {promo.title}
                </motion.h2>

                <motion.p
                  className="mt-3 text-gray-600 text-base sm:text-md leading-relaxed"
                  variants={itemVariants}
                >
                  {promo.subtitle}
                </motion.p>

                {/* Expiration Info */}
                <motion.div
                  className="mt-3 flex items-center gap-2 text-rose-600 font-semibold text-sm"
                  variants={itemVariants}
                >
                  <FiClock className="w-4 h-4" />
                  {promo.expiration}
                </motion.div>

                {/* Benefit List */}
                <motion.ul
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {promo.benefits.map((benefit) => (
                    <motion.li
                      key={benefit}
                      className="flex items-start gap-3 text-gray-700"
                      variants={listItemVariants}
                    >
                      <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.div className="mt-8" variants={itemVariants}>
                  <Button
                    as={motion.button}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-full px-8 py-4 shadow-lg"
                    endContent={<FiArrowRight />}
                    size="lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onPress={() => console.log("Promo CTA clicked")}
                  >
                    {promo.cta_text}
                  </Button>
                </motion.div>
              </CardBody>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
