"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  Badge,
  Divider,
} from "@heroui/react";
import { Zap, Handshake, School, ShoppingCart, AppWindow, CalendarClock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AddonsCustomSection() {
  const addons = {
    title: "✨ Add-on & Langganan",
    items: [
      {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "GARANSI KILAT — Tayang dalam 3 Hari",
        description:
          "Butuh cepat? Tambahan layanan ini untuk Paket Sat Set agar live dalam 72 jam (setelah semua materi lengkap).",
        price: "Tambah +30% dari harga paket",
      },
      {
        icon: <Handshake className="w-6 h-6 text-green-500" />,
        title: "Langganan Paket “Tenang Aja”",
        description:
          "Layanan bulanan untuk Anda yang ingin bebas dari urusan teknis & update konten.",
        price: "Rp 300.000 / bulan",
        features: [
          "Maintenance teknis",
          "Backup rutin",
          "Jatah 1 jam update konten minor",
        ],
      },
    ],
  };

  const custom = {
    title: "🛠️ Solusi Kustom — Aplikasi & Sistem Web",
    description:
      "Punya kebutuhan unik? Saya siap bantu bangun sistem digital yang benar-benar sesuai dengan proses bisnis Anda.",
    price: "Harga Mulai Rp 10.000.000",
    examples: [
      { name: "Sistem Informasi Akademik", icon: <School className="w-5 h-5 text-sky-600" /> },
      { name: "Platform E-Commerce", icon: <ShoppingCart className="w-5 h-5 text-sky-600" /> },
      { name: "CRM / Sistem Internal", icon: <AppWindow className="w-5 h-5 text-sky-600" /> },
      { name: "Sistem Booking Online", icon: <CalendarClock className="w-5 h-5 text-sky-600" /> },
    ],
    processSteps: [
      "Konsultasi Kebutuhan",
      "Pembuatan Proposal & Timeline",
      "Desain UI/UX & Approval",
      "Pengembangan & Uji Coba",
      "Go Live & Support Awal",
    ],
    badges: ["Skalabel", "Brandable", "Bisa Integrasi API", "UI/UX Kustom"],
  };

  return (
    <section
      id="addons-custom"
      className="py-24 bg-[#f9fafb] dark:bg-zinc-900"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* === Add-ons Section === */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
              {addons.title}
            </h2>
            <div className="mt-8 space-y-8">
              {addons.items.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl transition-all hover:shadow-md hover:bg-white/60 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                    {item.features && (
                      <ul className="text-sm mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        {item.features.map((f) => (
                          <li key={f}>✅ {f}</li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-2 font-semibold text-sky-600 dark:text-sky-400">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* === Custom Solutions Section === */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="relative overflow-hidden border-2 border-sky-500 bg-gradient-to-br from-sky-50 via-white to-white dark:from-zinc-800 dark:to-zinc-900 shadow-xl rounded-3xl">
            <CardHeader className="text-center py-8 px-6">
              <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
                {custom.title}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto">
                {custom.description}
              </p>
              <p className="mt-4 text-2xl font-extrabold text-sky-600 dark:text-sky-400">
                {custom.price}
              </p>
            </CardHeader>

            <Divider />

            <CardBody className="grid md:grid-cols-2 gap-8 px-8 pb-10 pt-6">
              <div>
                <h4 className="text-lg font-semibold text-zinc-700 dark:text-white mb-4">
                  Contoh Proyek:
                </h4>
                <ul className="space-y-3">
                  {custom.examples.map((ex) => (
                    <li
                      key={ex.name}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      {ex.icon}
                      <span>{ex.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {custom.badges.map((b) => (
                    <Badge
                      key={b}
                      className="bg-sky-100 text-sky-700 dark:bg-sky-800/40 dark:text-sky-300"
                    >
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-zinc-700 dark:text-white mb-4">
                  Alur Proyek:
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {custom.processSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
                <div className="mt-6">
                  <Chip
                    color="primary"
                    startContent={<Sparkles className="w-4 h-4" />}
                    variant="shadow"
                  >
                    Gratis Konsultasi Awal 🎯
                  </Chip>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
