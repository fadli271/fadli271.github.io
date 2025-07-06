"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDisclosure, Card, CardFooter, Modal, ModalContent, ModalBody } from "@heroui/react";
import NextImage from "next/image";

const portfolioItems = [
  {
    id: 1,
    src: "/portfolio/1 (1).webp",
    title: "Konstruksi & Rental",
    category: "CV. Eka Dwi Kencana",
  },
  { id: 2, src: "/portfolio/1 (2).webp", title: "Konstruksi", category: "CV. Ilham Mulia" },
  {
    id: 3,
    src: "/portfolio/1 (3).webp",
    title: "Perdagangan Umum",
    category: "PT. Amripar Sukses Alam Lestari",
  },
  {
    id: 4,
    src: "/portfolio/1 (4).webp",
    title: "Perdagangan Umum",
    category: "PT. Alfa Eka Sapta",
  },
  {
    id: 5,
    src: "/portfolio/1 (5).webp",
    title: "Supplier Industri",
    category: "PT. Berkah Pratama Steel",
  },
  {
    id: 6,
    src: "/portfolio/1 (6).webp",
    title: "Supplier Solar",
    category: "PT. Bima Ndai Bersama",
  },
  {
    id: 7,
    src: "/portfolio/1 (7).webp",
    title: "Perdagangan Umum",
    category: "PT. Berliana Intan Fast",
  },
  {
    id: 8,
    src: "/portfolio/1 (8).webp",
    title: "Supplier Industri",
    category: "PT. Frotuna Jaya Selaras",
  },
  {
    id: 9,
    src: "/portfolio/1 (9).webp",
    title: "Fabrikasi",
    category: "CV. Qaishar Indo Teknik",
  },
];

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export const PortfolioSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const handleOpenModal = (src: string, altText: string) => {
    setSelectedImage(src);
    setSelectedAlt(altText);
    onOpen();
  };

  return (
    <section className="py-20 bg-[#0f172a]" id="portfolio">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Portofolio <span className="text-emerald-400">Desain Kami</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial="hidden"
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.42, 0, 0.58, 1] }}
              variants={fadeZoom}
              viewport={{ once: true }}
              whileInView="show"
            >
              <Card
                isFooterBlurred
                isPressable
                className="w-full h-[300px] overflow-hidden group"
                onPress={() => handleOpenModal(item.src, `${item.title} - ${item.category}`)}
              >
                <NextImage
                  fill
                  alt={`${item.title} - ${item.category}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={item.src}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t border-white/20 justify-between">
                  <div className="text-left">
                    <p className="text-tiny text-white/80 font-bold">{item.title}</p>
                    <p className="text-tiny text-white/60">{item.category}</p>
                  </div>
                  <div className="bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        aria-label="Pratinjau Portofolio"
        isOpen={isOpen}
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <ModalBody className="p-2">
              {selectedImage && (
                <NextImage
                  alt={selectedAlt}
                  className="w-full h-full object-contain"
                  height={800}
                  loading="eager"
                  src={selectedImage}
                  width={1200}
                />
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};
