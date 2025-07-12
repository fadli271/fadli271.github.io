"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { HelpCircle, ChevronDownCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQCatalog() {
  const faq = {
    title: "❓ Pertanyaan Umum (FAQ)",
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
    ],
  };

  return (
    <section className="py-24 bg-white dark:bg-zinc-950" id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-sky-500" />
            {faq.title}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base">
            Jawaban atas pertanyaan yang sering diajukan sebelum proyek dimulai.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Accordion
            itemClasses={{
              base: "border border-gray-200 dark:border-zinc-700 rounded-xl mb-4",
              title: "font-semibold text-left text-gray-800 dark:text-white",
              trigger:
                "py-5 px-6 hover:bg-sky-50 dark:hover:bg-zinc-900 transition-colors",
              content: "px-6 pb-6 text-gray-700 dark:text-gray-300 text-sm",
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
            {faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={item.q}
                indicator={
                  <ChevronDownCircle className="w-5 h-5 text-sky-500" />
                }
                title={
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-sky-500" />
                    {item.q}
                  </span>
                }
              >
                {item.a}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
