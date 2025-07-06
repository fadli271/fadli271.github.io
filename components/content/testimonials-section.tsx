"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { Card, CardBody, CardFooter, Avatar } from "@heroui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Testimonial data
const testimonials = [
  {
    name: "Galih",
    company: "Pengusaha",
    avatar: "",
    quote:
      "Pengerjaannya cepat, sesuai brief, desainnya modern, mewah dan sesuai dengan bisnis dan target marketnya. InsyaAllah langganan.",
  },
  {
    name: "Setiawan",
    company: "UMKM",
    avatar: "",
    quote: "Terimakasih Jago Compro. Kualitas dan pelayanan anda sangat baik. Recommended.",
  },
  {
    name: "Resti",
    company: "Startup",
    avatar: "",
    quote:
      "Terima kasih banyak atas bantuannya, semoga compro ini bisa bantu usaha saya sebagai jembatan informasi kepada calon konsumen kami.",
  },
  {
    name: "Kiki",
    company: "Online Shop",
    avatar: "",
    quote: "Sukses selalu juga buat Jago Compro. Terima kasih atas doanya.",
  },
  {
    name: "Afdal",
    company: "Kontraktor",
    avatar: "",
    quote: "Semoga pelanggannya makin banyak & berkah. Terima kasih banyak, Pak.",
  },
  {
    name: "Fikri",
    company: "Retail",
    avatar: "",
    quote: "Makin sukses n jaya juga ya. Terimakasih Jago Compro.",
  },
  {
    name: "Ilham",
    company: "Servis",
    avatar: "",
    quote: "Mantap, lain waktu saya bisa order lagi. Terima kasih.",
  },
  {
    name: "Karen",
    company: "Konsultan",
    avatar: "",
    quote: "Moga semua lancar ya pak, terima kasih.",
  },
  {
    name: "Siti",
    company: "Catering",
    avatar: "",
    quote: "Desainnya sangat membantu meningkatkan citra bisnis saya di mata pelanggan.",
  },
  {
    name: "Ahmad",
    company: "Event Organizer",
    avatar: "",
    quote:
      "Layanan yang responsif dan hasil yang memuaskan. Akan kembali lagi untuk proyek selanjutnya.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial="hidden"
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          viewport={{ once: true }}
          whileInView="show"
        >
          Apa Kata <span className="text-emerald-400">Klien Kami?</span>
        </motion.h2>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-4"
                  initial="hidden"
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  variants={fadeUp}
                  viewport={{ once: true }}
                  whileInView="show"
                >
                  <Card className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg flex flex-col justify-between">
                    <CardBody className="relative text-white p-3">
                      <FaQuoteLeft
                        aria-hidden="true"
                        className="absolute top-0 left-0 text-teal-500/20 text-7xl -z-10"
                      />
                      <p className="text-slate-200 italic z-10">
                        &rdquo;{testimonial.quote}&rdquo;
                      </p>
                    </CardBody>
                    <CardFooter className="border-t border-white/20 pt-4 mt-4">
                      <div className="flex items-center gap-4">
                        <Avatar
                          alt={`Foto ${testimonial.name}`}
                          fallback={<FaUserCircle className="w-10 h-10 text-slate-400" />}
                          size="lg"
                          src={testimonial.avatar || undefined}
                        />
                        <div>
                          <p className="font-bold text-white">{testimonial.name}</p>
                          <p className="text-sm text-slate-400">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
