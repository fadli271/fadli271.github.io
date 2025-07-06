"use client";

import React from "react";
import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import NextImage from "next/image";

import { trackEvent } from "@/lib/gtag";

const WHATSAPP_CTA =
  "https://api.whatsapp.com/send/?phone=6282253596399&text=Hallo+Jago+Compro%2C+saya+mau+pesan+desain+express&type=phone_number&app_absent=0";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export const HeroSection = () => {
  const ctaText = "Ready! Desain Express 1 Hari";

  return (
    <div className="relative bg-[#0f172a] overflow-hidden">
      <NextImage
        fill
        priority
        alt="Background pattern with abstract shapes"
        className="absolute inset-0 object-cover opacity-30"
        src="/background.webp"
      />

      <section className="relative z-10 text-white" id="hero">
        <div className="container  mx-auto px-6 lg:px-36 py-24 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          {/* Left Text Column */}
          <div className="lg:w-1/2">
            <motion.h1
              animate="show"
              className="text-4xl md:text-6xl font-bold mb-4"
              initial="hidden"
              transition={{ duration: 0.6 }}
              variants={fadeUp}
            >
              Jasa Desain <br />
              <span className="text-emerald-400">Company Profile</span> Profesional
            </motion.h1>

            <motion.p
              animate="show"
              className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-6"
              initial="hidden"
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeUp}
            >
              Company profile bukan sekadar formalitas, tapi alat penting untuk menunjukkan
              profesionalisme, membangun kepercayaan, dan menjelaskan bisnis Anda secara ringkas dan
              menarik.
            </motion.p>

            <motion.div
              animate="show"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial="hidden"
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeUp}
            >
              <Button
                as={Link}
                className="font-semibold text-slate-800 bg-yellow-400"
                endContent={<FaArrowRight />}
                href={WHATSAPP_CTA}
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
                variant="shadow"
                onPress={() =>
                  trackEvent("click_whatsapp", {
                    category: "engagement",
                    label: "footer_whatsapp_button",
                    fbEventName: "Lead",
                    fbParams: { source: "hero" },
                  })
                }
              >
                {ctaText}
              </Button>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              animate="show"
              initial="hidden"
              transition={{ duration: 0.8, type: "spring" }}
              variants={zoomIn}
            >
              <NextImage
                priority
                alt="Mockup desain company profile modern dan profesional"
                className="drop-shadow-[0_20px_50px_rgba(20,184,166,0.2)]"
                height={450}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/KV.webp"
                width={800}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
