"use client";

import { useMemo } from "react";
import { Accordion, AccordionItem, Card, CardBody } from "@heroui/react";
import { HelpCircle, ChevronDownCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqContent = {
  title: "Pertanyaan Umum (FAQ)",
  description:
    "Jawaban atas pertanyaan yang sering diajukan sebelum proyek dimulai.",
  items: [
    {
      q: "Apakah harga sudah termasuk domain & hosting?",
      a: "Belum. Klien akan membayar langsung ke penyedia layanan (misalnya: Niagahoster, Hostinger). Saya akan bantu setup domain dan hosting secara gratis, agar kepemilikan penuh tetap di tangan Anda.",
    },
    {
      q: "Siapa yang menyiapkan konten website?",
      a: "Konten dasar seperti teks dan gambar disediakan oleh klien. Tapi saya bantu dengan template konten siap pakai dan saran copywriting ringan agar lebih marketable.",
    },
    {
      q: "Berapa kali revisi yang bisa saya lakukan?",
      a: "Anda mendapatkan 2x revisi minor (teks, warna, gambar). Revisi dilakukan saat tahap desain, sebelum website dipublikasikan.",
    },
    {
      q: "Apakah saya bisa update konten sendiri?",
      a: "Bisa! Anda akan dapat panduan video singkat dan akses login ke dashboard. Atau, bisa pakai langganan “Tenang Aja” agar saya yang urus update rutin.",
    },
    {
      q: "Apakah ada garansi setelah website selesai?",
      a: "Tentu, ada garansi teknis 1 bulan untuk perbaikan bug atau error teknis (bukan konten).",
    },
    {
      q: "Bisa minta desain sesuai brand?",
      a: "Tentu! Khusus di Paket “Tumbuh Profesional”, saya akan sesuaikan warna, tone, dan nuansa brand Anda.",
    },
    {
      q: "Apakah bisa integrasi WhatsApp atau Instagram?",
      a: "Bisa, bahkan saya bantu pasang CTA WhatsApp floating, embed Instagram Feed, dan tombol sosial media lainnya.",
    },
    {
      q: "Apakah bisa cicilan atau pembayaran bertahap?",
      a: "Ya, bisa. Kita bisa diskusikan skema pembayaran yang sesuai dan tidak memberatkan.",
    },
    {
      q: "Bisa redesign website lama?",
      a: "Tentu, saya bisa bantu evaluasi dan mendesain ulang agar tampil lebih modern dan fungsional.",
    },
  ],
};

export default function FAQCatalog() {
  const faqSchema = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqContent.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }),
    [],
  );

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-bold text-[clamp(1.5rem,4vw,2.25rem)] gradient-text inline-flex items-center justify-center gap-2 sm:gap-3">
            <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 gradient-text text-sky-500 shrink-0" />
            {faqContent.title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-4">
            {faqContent.description}
          </p>
        </motion.div>

        {/* FAQ Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-white border border-gray-200 shadow-sm rounded-xl w-full sm:max-w-4xl mx-auto px-3 py-4 sm:px-6 sm:py-6">
            <CardBody className="p-0">
              <Accordion
                itemClasses={{
                  base: "bg-white border border-gray-100 shadow-md rounded-lg my-1 sm:my-2",
                  title:
                    "font-medium text-left text-gray-800 text-sm sm:text-base",
                  trigger: "py-4 px-2 sm:px-3 cursor-pointer transition-colors",
                  content:
                    "pb-4 px-2 sm:px-3 text-gray-700 text-sm leading-relaxed",
                }}
                motionProps={{
                  variants: {
                    enter: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                  },
                  transition: { duration: 0.25 },
                }}
                selectionMode="multiple"
                variant="splitted"
              >
                {faqContent.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    aria-label={item.q}
                    indicator={
                      <ChevronDownCircle className="w-5 h-5 text-sky-500 shrink-0" />
                    }
                    title={
                      <div className="flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                        <span className="flex-1">{item.q}</span>
                      </div>
                    }
                  >
                    {item.a}
                  </AccordionItem>
                ))}
              </Accordion>
            </CardBody>
          </Card>
        </motion.div>
      </div>
      <script
        dangerouslySetInnerHTML={{ __html: faqSchema }}
        type="application/ld+json"
      />
    </section>
  );
}
