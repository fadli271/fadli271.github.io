"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Divider,
  Chip,
} from "@heroui/react";
import { motion } from "framer-motion";
import {
  Banknote,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  ThumbsUp,
  Handshake,
} from "lucide-react";
import Link from "next/link";

export default function FinalSection() {
  const payment = {
    title: "Skema Pembayaran",
    description:
      "Berikut skema pembayaran standar untuk memastikan proses berjalan profesional dan aman.",
    steps: [
      {
        icon: <Banknote className="w-6 h-6 text-sky-500" />,
        stage: "DP (Down Payment)",
        percentage: "50%",
        description: "Setelah kesepakatan awal & kick-off proyek.",
      },
      {
        icon: <ArrowRight className="w-6 h-6 text-yellow-500" />,
        stage: "Review & Uji Coba",
        percentage: "-",
        description: "Preview dan revisi desain, konten, serta fungsionalitas.",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        stage: "Pelunasan",
        percentage: "50%",
        description: "Setelah website selesai & sebelum go live.",
      },
    ],
    note: "Skema fleksibel bisa didiskusikan sesuai kebutuhan proyek.",
  };

  const cta = {
    title: "Ingin Mulai Proyek?",
    description: "Saya siap bantu kamu wujudkan ide jadi solusi digital.",
    contacts: [
      {
        method: "WhatsApp",
        value: "0822 1909 4081",
        href: "https://wa.me/6282219094081?text=Halo%20Fadli,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website.",
        icon: <Phone className="w-5 h-5 text-green-500" />,
      },
      {
        method: "Email",
        value: "fadli.mohamad62@gmail.com",
        href: "mailto:fadli.mohamad62@gmail.com",
        icon: <Mail className="w-5 h-5 text-sky-500" />,
      },
    ],
  };

  const highlights = [
    {
      title: "Garansi Teknis 1 Bulan",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Pendekatan Fleksibel",
      icon: <ArrowRight className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Respons Cepat & Proaktif",
      icon: <ThumbsUp className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section className="py-24 bg-white" id="payment-cta">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* === Skema Pembayaran === */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full flex flex-col bg-white shadow-md border border-gray-200">
              <CardHeader className="text-center p-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-sky-100 text-sky-500 p-2 rounded-full shadow-sm">
                    <Banknote className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">
                    {payment.title}
                  </h2>
                </div>
              </CardHeader>

              <CardBody className="py-4 px-8 space-y-4 flex-grow">
                <p className="mt-3 text-gray-600 text-base">
                  {payment.description}
                </p>
                {payment.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="pt-1">{step.icon}</div>
                    <div>
                      <p className="font-semibold text-base text-zinc-800">
                        {step.stage}
                        {step.percentage !== "-" && (
                          <span className="ml-2 text-sky-600">
                            ({step.percentage})
                          </span>
                        )}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
                <Chip className="bg-yellow-100 text-yellow-600" variant="flat">
                  {payment.note}
                </Chip>
              </CardBody>
            </Card>
          </motion.div>

          {/* === CTA Proyek === */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full flex flex-col bg-white shadow-md border border-gray-200">
              <CardHeader className="text-center p-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full shadow-sm">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">
                    {cta.title}
                  </h2>
                </div>
              </CardHeader>

              <CardBody className="py-4 px-6 space-y-4 flex-grow">
                <p className="mt-3 text-gray-600 text-base">
                  {cta.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {cta.contacts.map((c, i) => (
                    <Link
                      key={i}
                      className="flex items-center justify-center px-5 py-4 border rounded-xl border-gray-200 hover:bg-sky-50 transition"
                      href={c.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex items-center gap-2">
                        {c.icon}
                        <span className="font-medium text-zinc-800">
                          {c.method}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Divider />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {h.icon}
                      <p className="mt-2 text-sm font-medium text-gray-700">
                        {h.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <Button
                    as={Link}
                    className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                    color="primary"
                    href={cta.contacts[0].href}
                    size="lg"
                  >
                    Konsultasi Sekarang
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
