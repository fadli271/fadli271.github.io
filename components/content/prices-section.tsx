"use client";

import React from "react";
import { BadgeCheck } from "lucide-react";
import NextImage from "next/image";
import { motion } from "framer-motion";

export const PricesSection = () => {
  const packages = [
    {
      name: "On Point",
      imageSrc: "/prices/ON POINT.png",
    },
    {
      name: "Exclusive",
      imageSrc: "/prices/EXCLUSIVE.png",
    },
    {
      name: "Advance",
      imageSrc: "/prices/ADVANCE-2.png",
    },
    {
      name: "Expert",
      imageSrc: "/prices/EXPERT.png",
    },
    {
      name: "Ultimate",
      imageSrc: "/prices/ULTIMATE.png",
    },
    {
      name: "Custom",
      imageSrc: "/prices/CUSTOM.png",
    },
  ];

  return (
    <section className="py-20 bg-[#0f172a]" id="prices">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Paket Harga <span className="text-emerald-400">Company Profile</span>
        </motion.h2>
        <motion.p
          className="text-center text-md mb-12 text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Kami menawarkan layanan paket pembuatan company profile untuk membantu usaha Anda terlihat
          profesional di mata klien dan partner bisnis Anda.
        </motion.p>

        {/* Grid untuk menampilkan kartu gambar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              className={`
                w-full mx-auto flex justify-center
                cursor-pointer
              `}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <NextImage
                alt={`Paket ${pkg.name}`}
                className="object-contain"
                height={600}
                src={pkg.imageSrc}
                width={400}
              />
            </motion.div>
          ))}
        </div>

        {/* Bagian info tambahan di bawah */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16 text-md text-cyan-200 text-center">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-emerald-400" />
            <span>Gratis Materi/Pengembangan Narasi</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-emerald-400" />
            <span>Gratis Konsultasi</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-emerald-400" />
            <span>Layanan Express 1 Hari </span>
            <span className="text-emerald-400 font-bold">(Extra 140K)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
