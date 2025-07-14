"use client";

import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import {
  FiArrowRight,
  FiGlobe,
  FiPhone,
  FiAward,
  FiShield,
  FiSmartphone,
  FiThumbsUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const hero = {
  greeting: "👋 Halo, saya Fadli  - Software Engineer",
  tagline: "Katalog Layanan Digital yang Dirancang untuk Tumbuh Bersama Anda",
  philosophy:
    "Saya seorang Software Engineer yang fokus membantu UMKM dan profesional membangun kehadiran digital yang berdampak. Melalui desain yang elegan dan performa yang optimal, saya percaya setiap website bisa menjadi aset bisnis yang sesungguhnya.",
};

const features = [
  { icon: <FiShield size={22} />, text: "Jaminan Keamanan Data Sistem Anda" },
  { icon: <FiZap size={22} />, text: "Performa & Kecepatan Optimal" },
  { icon: <FiSmartphone size={22} />, text: "Responsif di Semua Perangkat" },
  { icon: <FiThumbsUp size={22} />, text: "100% Puas atau Uang Kembali" },
  { icon: <FiUsers size={22} />, text: "Dipercaya oleh Klien Terverifikasi" },
  { icon: <FiAward size={22} />, text: "Tim Profesional & Berpengalaman" },
];

export default function HeroCatalog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white" id="hero-catalogue">
      <div className="container mx-auto px-6 py-24 sm:py-32 text-center">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto"
          initial="hidden"
          variants={containerVariants}
        >
          {/* Tagline */}
          <motion.p
            className="mt-2 text-3xl sm:text-4xl font-semibold gradient-text leading-tight"
            variants={itemVariants}
          >
            {hero.tagline}
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-lg sm:text-xl font-semibold text-gray-500 mt-10"
            variants={itemVariants}
          >
            {hero.greeting}
          </motion.h1>

          {/* Filosofi */}
          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {hero.philosophy}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Button
              as="a"
              className="px-6 py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-sky-500 to-blue-500 rounded-full shadow-md hover:scale-[1.03] transition-transform"
              endContent={<FiArrowRight />}
              href="/"
              size="lg"
              startContent={<FiGlobe />}
            >
              Kunjungi Web Profile
            </Button>

            <Button
              as="a"
              className="px-6 py-3 text-base sm:text-lg font-bold text-gray-800 border-gray-300 rounded-full"
              href="https://wa.me/082219094081?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20layanan%20website-nya"
              rel="noopener noreferrer"
              size="lg"
              startContent={<FiPhone />}
              target="_blank"
              variant="bordered"
            >
              Hubungi Saya Langsung
            </Button>
          </motion.div>

          {/* Fitur Unggulan */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <CardBody className="p-5">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <span className="text-sky-500">{feature.icon}</span>
                    <span className="text-sm sm:text-base text-gray-800 font-medium">
                      {feature.text}
                    </span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
