"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
  Divider,
} from "@heroui/react";
import {
  Zap,
  Handshake,
  School,
  ShoppingCart,
  AppWindow,
  CalendarClock,
  Sparkles,
  Wand2,
  Expand,
  Link2,
  Palette,
  Puzzle,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function AddonsCustomSection() {
  const addons = {
    title: "Add-on & Langganan",
    items: [
      {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "Garansi Kilat - Tayang 3 Hari",
        description:
          "Butuh cepat? Aktifkan layanan ini untuk Paket Sat Set agar website tayang dalam 72 jam setelah semua materi lengkap.",
        additionalInfo: [
          "Prioritas pengerjaan tanpa antre",
          "Cocok untuk campaign, event, atau launching produk",
          "Materi lengkap wajib dikirim di awal",
          "Dukungan penuh via WhatsApp selama proses",
        ],
        price: "Tambah +30% dari harga paket",
      },
      {
        icon: <Handshake className="w-6 h-6 text-green-500" />,
        title: 'Langganan "Tenang Aja"',
        description:
          "Layanan bulanan bebas ribet untuk Anda yang ingin urusan teknis & update konten ditangani rutin.",
        price: "Rp 300.000 / bulan",
        features: [
          "Maintenance teknis & backup",
          "Jatah 1 jam update konten minor",
          "Pantauan uptime & kecepatan",
        ],
      },
    ],
  };

  const custom = {
    icon: <Puzzle className="w-6 h-6 text-sky-500" />,
    title: "Solusi Kustom — Aplikasi & Sistem Web",
    description:
      "Punya kebutuhan unik? Saya siap bantu bangun sistem digital yang benar-benar sesuai dengan proses bisnis Anda.",
    price: "Harga Mulai Rp 10.000.000",
    examples: [
      {
        name: "Sistem Informasi Akademik",
        icon: <School className="w-5 h-5 text-sky-600" />,
      },
      {
        name: "Platform E-Commerce",
        icon: <ShoppingCart className="w-5 h-5 text-sky-600" />,
      },
      {
        name: "CRM / Sistem Internal",
        icon: <AppWindow className="w-5 h-5 text-sky-600" />,
      },
      {
        name: "Sistem Booking Online",
        icon: <CalendarClock className="w-5 h-5 text-sky-600" />,
      },
    ],
    processSteps: [
      "Konsultasi Kebutuhan",
      "Proposal & Timeline",
      "Desain UI/UX",
      "Pengembangan & Uji Coba",
      "Go Live & Support",
    ],
    badges: [
      { label: "Skalabel", icon: <Expand className="w-3.5 h-3.5" /> },
      { label: "Integrasi API", icon: <Link2 className="w-3.5 h-3.5" /> },
      { label: "UI/UX Kustom", icon: <Palette className="w-3.5 h-3.5" /> },
      { label: "Brandable", icon: <Puzzle className="w-3.5 h-3.5" /> },
    ],
  };

  return (
    <section className="py-24 bg-white" id="addons-custom">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold gradient-text inline-flex items-center justify-center gap-3">
            <Wand2 className="text-sky-500 w-9 h-9 gradient-text" />
            {addons.title}
          </h2>
        </motion.div>

        {/* Grid konten */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="space-y-6">
              {addons.items.map((item) => (
                <Card
                  key={item.title}
                  className="flex flex-col justify-between h-full border bg-white border-gray-200 shadow-md rounded-2xl transition hover:shadow-md"
                >
                  <CardBody className="flex gap-4 p-6 flex-grow">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                      {item.features && (
                        <ul className="mt-2 text-sm text-gray-700 space-y-1">
                          {item.features.map((feat) => (
                            <li key={feat}>• {feat}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {item.additionalInfo && (
                      <ul className="mt-2 text-sm text-gray-700 space-y-1">
                        {item.additionalInfo.map((info) => (
                          <li key={info}>• {info}</li>
                        ))}
                      </ul>
                    )}
                  </CardBody>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <p className="font-semibold text-sky-600">{item.price}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Custom Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="rounded-3xl overflow-hidden border-1 border-sky-500 bg-white shadow-lg h-full flex flex-col">
              <CardHeader className="px-8 pt-8 pb-2 text-left">
                <h2 className="text-2xl font-bold text-zinc-800 flex items-center gap-2">
                  {custom.icon}
                  {custom.title}
                </h2>
              </CardHeader>

              <CardBody className="px-8 pt-2 text-gray-600 text-base">
                <p>{custom.description}</p>
                <p className="mt-4 text-xl font-bold text-sky-600">
                  {custom.price}
                </p>

                <Divider className="my-3 text-gray-400" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-700 mb-4">
                      Contoh Proyek
                    </h4>
                    <ul className="space-y-3">
                      {custom.examples.map((ex) => (
                        <li
                          key={ex.name}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          {ex.icon}
                          <span>{ex.name}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {custom.badges.map((badge) => (
                        <Chip
                          key={badge.label}
                          classNames={{
                            base: "bg-sky-100 text-sky-700 rounded-full px-3 py-1 text-sm",
                            content: "font-medium flex items-center gap-1.5",
                          }}
                          color="primary"
                          variant="flat"
                        >
                          <span className="flex items-center gap-1.5">
                            {React.cloneElement(badge.icon, {
                              className: "w-4 h-4 text-sky-600",
                            })}
                            {badge.label}
                          </span>
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-zinc-700 mb-4">
                      Alur Proyek
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {custom.processSteps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                    <div className="mt-6">
                      <Chip
                        color="primary"
                        startContent={<Sparkles className="w-4 h-4" />}
                        variant="shadow"
                      >
                        Gratis Konsultasi Awal
                      </Chip>
                    </div>
                  </div>
                </div>
              </CardBody>

              <CardFooter className="px-8 pb-8 pt-4 mt-auto">
                <Button
                  fullWidth
                  as="a"
                  className="font-bold bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  href={`https://wa.me/6282219094081?text=${encodeURIComponent(
                    "Halo kak, saya tertarik dengan layanan Solusi Kustom — Aplikasi & Sistem Web. Boleh minta info lebih lanjut?",
                  )}`}
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  Pilih Paket Ini
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
