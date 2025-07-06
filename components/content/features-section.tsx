"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Clock, PenTool, CalendarCheck } from "lucide-react";

const features = [
  {
    title: "Desain Cepat",
    description:
      "Tersedia layanan Express 1 hari jadi. Siap bantu kamu yang dikejar deadline, tanpa mengorbankan kualitas desain.",
    icon: Clock,
  },
  {
    title: "File Master",
    description:
      "Anda akan kami berikan file master editable untuk mempermudah dalam mencetak dan memperbaiki file.",
    icon: PenTool,
  },
  {
    title: "Tepat Waktu",
    description:
      "Kami berkomitmen menyelesaikan desain sesuai jadwal, jadi anda bisa tenang saat butuh company profile untuk keperluan penting.",
    icon: CalendarCheck,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#0f172a]" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Kenapa Pilih Kami ?</h2>
        <div className="grid md:grid-cols-3 justify-center gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.2,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card className="w-[320px] min-h-[400px] mx-auto px-4 py-6 bg-slate-100">
                  <CardBody className="flex flex-col items-center text-center gap-4 pt-4">
                    <Icon className="h-20 w-20 text-emerald-400" />
                    <h2 className="text-3xl text-slate-700 font-semibold">{feature.title}</h2>
                    <p className="text-slate-600 text-md">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
