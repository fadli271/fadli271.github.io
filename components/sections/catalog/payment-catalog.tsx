"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
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

import { catalogContent, PaymentIcon } from "@/data/catalog-content";

const paymentIconMap: Record<
  PaymentIcon,
  React.ComponentType<{ className?: string }>
> = {
  banknote: Banknote,
  arrowRight: ArrowRight,
  checkCircle: CheckCircle,
  shieldCheck: ShieldCheck,
  flex: ArrowRight,
  thumbsUp: ThumbsUp,
  phone: Phone,
  mail: Mail,
};

const paymentIconColor: Partial<Record<PaymentIcon, string>> = {
  banknote: "text-sky-500",
  arrowRight: "text-yellow-500",
  checkCircle: "text-green-500",
  shieldCheck: "text-emerald-600",
  flex: "text-yellow-500",
  thumbsUp: "text-blue-600",
  phone: "text-green-500",
  mail: "text-sky-500",
};

export default function FinalSection() {
  const payment = catalogContent.payment;
  const cta = catalogContent.contactCTA;

  return (
    <section className="py-16 sm:py-24 bg-white" id="payment-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          {/* === Skema Pembayaran === */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full flex flex-col bg-white shadow-md border border-gray-200 rounded-2xl">
              <CardHeader className="text-center px-6 pt-6 pb-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-sky-100 text-sky-500 p-2 rounded-full shadow-sm">
                    <Banknote className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-800">
                    {payment.title}
                  </h2>
                </div>
              </CardHeader>

              <CardBody className="py-4 px-6 space-y-4 flex-grow">
                <p className="text-gray-600 text-base">{payment.description}</p>
                {payment.steps.map((step, i) => {
                  const Icon = paymentIconMap[step.icon];
                  const iconClass =
                    paymentIconColor[step.icon] ?? "text-sky-500";

                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="pt-1">
                        <Icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${iconClass}`}
                        />
                      </div>
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
                  );
                })}
                <p className="mt-4 px-3 py-2 bg-yellow-100 text-yellow-700 text-sm rounded-md text-center">
                  {payment.note}
                </p>
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
            <Card className="h-full flex flex-col bg-white shadow-md border border-gray-200 rounded-2xl">
              <CardHeader className="text-center px-6 pt-6 pb-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full shadow-sm">
                    <Handshake className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-800">
                    {cta.title}
                  </h2>
                </div>
              </CardHeader>

              <CardBody className="py-4 px-6 space-y-4 flex-grow">
                <p className="text-gray-600 text-base">{cta.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cta.contacts.map((c, i) => {
                    const Icon = paymentIconMap[c.icon];
                    const iconClass =
                      paymentIconColor[c.icon] ?? "text-slate-600";

                    return (
                      <Link
                        key={i}
                        className="flex flex-col items-center justify-center px-4 py-3 border rounded-xl border-gray-200 hover:bg-sky-50 transition text-sm sm:text-base text-center"
                        href={c.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-5 h-5 ${iconClass}`} />
                          <span className="font-medium text-zinc-800">
                            {c.method}
                          </span>
                        </div>
                        {c.value && (
                          <span className="text-xs text-gray-600 mt-1">
                            {c.value}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                <Divider />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  {payment.highlights.map((h, i) => {
                    const Icon = paymentIconMap[h.icon];
                    const iconClass =
                      paymentIconColor[h.icon] ?? "text-slate-600";

                    return (
                      <div key={i} className="flex flex-col items-center">
                        <Icon className={`w-6 h-6 ${iconClass}`} />
                        <p className="mt-2 text-sm font-medium text-gray-700">
                          {h.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
