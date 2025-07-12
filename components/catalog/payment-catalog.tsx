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
} from "lucide-react";
import Link from "next/link";

export default function FinalSection() {
  const payment = {
    title: "💳 Skema Pembayaran",
    description:
      "Berikut skema pembayaran standar untuk memastikan proses berjalan profesional dan aman:",
    steps: [
      {
        stage: "DP (Down Payment)",
        percentage: "50%",
        description: "Setelah kesepakatan awal & kick-off proyek.",
      },
      {
        stage: "Review & Uji Coba",
        percentage: "-",
        description: "Preview dan revisi desain, konten, serta fungsionalitas.",
      },
      {
        stage: "Pelunasan",
        percentage: "50%",
        description: "Setelah website selesai & sebelum go live.",
      },
    ],
    note: "💡 Skema fleksibel bisa didiskusikan sesuai kebutuhan proyek.",
  };

  const cta = {
    title: "💬 Ingin Mulai Proyek?",
    description: "Saya siap bantu kamu wujudkan ide jadi solusi digital:",
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
    <section
      className="py-24 bg-gradient-to-b from-sky-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      id="payment-cta"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-stretch">
        {/* === PAYMENT CARD === */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="flex-grow border border-sky-200 dark:border-sky-700 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center bg-sky-100/70 dark:bg-sky-900/40 py-8 px-6">
              <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
                {payment.title}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                {payment.description}
              </p>
            </CardHeader>

            <Divider />

            <CardBody className="px-6 py-10 space-y-8">
              {payment.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="pt-1">
                    {idx === 0 ? (
                      <Banknote className="w-6 h-6 text-sky-500" />
                    ) : idx === payment.steps.length - 1 ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-zinc-800 dark:text-white">
                      {step.stage}
                      {step.percentage !== "-" && (
                        <span className="ml-2 text-sky-600 dark:text-sky-400">
                          ({step.percentage})
                        </span>
                      )}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              <Chip className="mt-4 text-center" color="warning" variant="flat">
                {payment.note}
              </Chip>
            </CardBody>
          </Card>
        </motion.div>

        {/* === CTA CARD === */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="flex-grow bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center py-8 px-6">
              <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
                {cta.title}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {cta.description}
              </p>
            </CardHeader>

            <CardBody className="space-y-6 px-6 pb-10">
              {cta.contacts.map((contact, idx) => (
                <Link
                  key={idx}
                  className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:bg-sky-50 dark:hover:bg-zinc-800 transition-all"
                  href={contact.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    {contact.icon}
                    <span className="text-base font-medium text-zinc-800 dark:text-white">
                      {contact.method}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {contact.value}
                  </span>
                </Link>
              ))}

              <Divider />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {highlights.map((h, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {h.icon}
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {h.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <Button
                  as={Link}
                  className="font-semibold w-full sm:w-auto"
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
    </section>
  );
}
