"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Divider,
} from "@heroui/react";
import { CheckCircle, Timer, Info, Rocket } from "lucide-react";
import { circOut, motion } from "framer-motion";

import { buildWhatsAppLink } from "@/lib/contact-info";
import { catalogContent } from "@/data/catalog-content";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: circOut,
    },
  },
};

/**
 * Pricing packages section with feature lists and CTAs.
 */
export default function PackageCatalogue() {
  const packages = catalogContent.packages;

  return (
    <section className="py-20 sm:py-24 bg-white" id="packages">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
        >
          <motion.h2
            className="font-bold text-[clamp(1.75rem,5vw,2.25rem)] gradient-text inline-flex items-center justify-center gap-2"
            variants={fadeInUp}
          >
            <Rocket className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-sky-500 gradient-text" />
            {packages.title}
          </motion.h2>

          <motion.p
            className="mt-3 text-base sm:text-lg text-gray-600"
            transition={{ delay: 0.2 }}
            variants={fadeInUp}
          >
            {packages.subtitle}
          </motion.p>
        </motion.div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {packages.items.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                className={`relative flex flex-col bg-white h-full rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-transform hover:scale-[1.02] p-5 sm:p-6 ${
                  pkg.isPopular ? "border-sky-500 shadow-lg" : ""
                }`}
              >
                {pkg.isPopular && (
                  <Chip
                    className="absolute top-1 right-1 text-xs sm:text-sm font-medium"
                    color="primary"
                    variant="shadow"
                  >
                    🌟 Paling Populer
                  </Chip>
                )}

                <CardHeader className="pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {pkg.name}
                  </h3>
                </CardHeader>

                <CardBody className="flex flex-col gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sky-600">
                    <span className="text-2xl sm:text-3xl font-extrabold">
                      {pkg.price}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Timer className="w-4 h-4 mr-1" />
                      {pkg.estimate}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                      Ideal Untuk
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pkg.idealFor}
                    </p>
                  </div>

                  <Divider />

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                      Fitur Utama
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 text-sky-500" />
                          <span className="text-gray-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.bonus && (
                    <div className="pt-2">
                      <p className="inline-flex items-center gap-1 rounded-md bg-yellow-50 text-yellow-700 text-xs sm:text-sm font-medium px-2 py-1">
                        🎁 <span>Bonus: {pkg.bonus}</span>
                      </p>
                    </div>
                  )}
                </CardBody>

                <CardFooter className="pt-6 mt-auto">
                  <Button
                    fullWidth
                    as="a"
                    className="font-bold bg-gradient-to-r from-sky-500 to-blue-600 !text-white"
                    href={buildWhatsAppLink(
                      `Halo kak, saya tertarik dengan ${pkg.name}. Boleh minta informasi lebih lanjut?`,
                    )}
                    rel="noopener noreferrer"
                    size="lg"
                    target="_blank"
                  >
                    Pilih Paket Ini
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-14 text-center text-sm text-gray-500 mx-auto"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
        >
          <div className="inline-flex flex-wrap items-center gap-2 justify-center text-center">
            <Info className="w-4 h-4 text-gray-400" />
            <span>
              Semua paket termasuk:{" "}
              <strong>{packages.includes.join(", ")}</strong>.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
