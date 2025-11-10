"use client";

import type { ComponentType } from "react";

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

import { buildWhatsAppLink } from "@/lib/contact-info";
import { HeroFeatureIcon, catalogContent } from "@/data/catalog-content";

const featureIconMap: Record<
  HeroFeatureIcon,
  ComponentType<{ size?: number }>
> = {
  shield: FiShield,
  zap: FiZap,
  smartphone: FiSmartphone,
  thumbsUp: FiThumbsUp,
  users: FiUsers,
  award: FiAward,
};

export default function HeroCatalog() {
  const hero = catalogContent.hero;

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
              className="px-6 py-3 text-white text-base sm:text-lg font-bold bg-gradient-to-r from-sky-500 to-blue-500 rounded-full shadow-md hover:scale-[1.03] transition-transform"
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
              href={buildWhatsAppLink(
                "Halo kak, saya tertarik dengan layanan website-nya",
              )}
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
            {hero.features.map((feature, index) => {
              const Icon = featureIconMap[feature.icon];

              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <CardBody className="p-5">
                    <div className="flex items-center gap-3 justify-center sm:justify-start">
                      <span className="text-sky-500">
                        <Icon size={22} />
                      </span>
                      <span className="text-sm sm:text-base text-gray-800 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
