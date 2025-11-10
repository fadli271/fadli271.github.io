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

import { buildWhatsAppLink } from "@/lib/contact-info";
import { AddonIcon, CustomIcon, catalogContent } from "@/data/catalog-content";

const addonIconMap: Record<
  AddonIcon,
  React.ComponentType<{ className?: string }>
> = {
  zap: Zap,
  handshake: Handshake,
};

const addonIconColor: Record<AddonIcon, string> = {
  zap: "text-yellow-500",
  handshake: "text-green-500",
};

const customIconMap: Record<
  CustomIcon,
  React.ComponentType<{ className?: string }>
> = {
  puzzle: Puzzle,
  school: School,
  shoppingCart: ShoppingCart,
  appWindow: AppWindow,
  calendarClock: CalendarClock,
  expand: Expand,
  link: Link2,
  palette: Palette,
};

export default function AddonsCustomSection() {
  const addons = catalogContent.addons;
  const custom = catalogContent.custom;

  return (
    <section className="py-20 sm:py-24 bg-white" id="addons-custom">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-bold text-[clamp(1.5rem,4vw,2.25rem)] gradient-text inline-flex items-center justify-center gap-2 sm:gap-3">
            <Wand2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-sky-500 gradient-text" />
            {addons.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="space-y-6">
              {addons.items.map((item) => {
                const Icon = addonIconMap[item.icon];
                const iconColor = addonIconColor[item.icon];

                return (
                  <Card
                    key={item.title}
                    className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-md"
                  >
                    <CardBody className="flex flex-grow gap-4 p-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-lg">
                          <Icon
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`}
                          />
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600 sm:text-base">
                          {item.description}
                        </p>
                        {"features" in item && item.features && (
                          <ul className="mt-2 space-y-1 text-sm text-gray-700">
                            {item.features.map((feat) => (
                              <li key={feat}>• {feat}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {"additionalInfo" in item && item.additionalInfo && (
                        <ul className="mt-2 space-y-1 text-sm text-gray-700">
                          {item.additionalInfo.map((info) => (
                            <li key={info}>• {info}</li>
                          ))}
                        </ul>
                      )}
                    </CardBody>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <p className="text-sm font-semibold text-sky-600 sm:text-base">
                        {item.price}
                      </p>
                    </CardFooter>
                  </Card>
                );
              })}
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
              <CardHeader className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-2 text-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-800 flex items-center gap-2">
                  {React.createElement(customIconMap[custom.icon], {
                    className:
                      "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-sky-500",
                  })}
                  {custom.title}
                </h2>
              </CardHeader>

              <CardBody className="px-4 sm:px-6 md:px-8 pt-2 text-gray-600 text-sm sm:text-base">
                <p>{custom.description}</p>
                <p className="mt-4 text-lg sm:text-xl font-bold text-sky-600">
                  {custom.price}
                </p>

                <Divider className="my-3 text-gray-400" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-zinc-700 mb-3 sm:mb-4">
                      Contoh Proyek
                    </h4>
                    <ul className="space-y-3">
                      {custom.examples.map((ex) => {
                        const ExampleIcon = customIconMap[ex.icon];

                        return (
                          <li
                            key={ex.name}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <ExampleIcon className="w-5 h-5 text-sky-600" />
                            <span>{ex.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {custom.badges.map((badge) => {
                        const BadgeIcon = customIconMap[badge.icon];

                        return (
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
                              <BadgeIcon className="w-4 h-4 text-sky-600" />
                              {badge.label}
                            </span>
                          </Chip>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-zinc-700 mb-3 sm:mb-4">
                      Alur Proyek
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
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
                        {custom.perk}
                      </Chip>
                    </div>
                  </div>
                </div>
              </CardBody>

              <CardFooter className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-4 mt-auto">
                <Button
                  fullWidth
                  as="a"
                  className="font-bold bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  href={buildWhatsAppLink(
                    "Halo kak, saya tertarik dengan layanan Solusi Kustom — Aplikasi & Sistem Web. Boleh minta info lebih lanjut?",
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
        </div>
      </div>
    </section>
  );
}
