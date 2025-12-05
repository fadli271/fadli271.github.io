"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  Briefcase,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
} from "@heroui/react";
import NextImage from "next/image";

import { experienceData } from "@/app/content/portfolio";

// ======================
// Types
// ======================
interface ExperienceSectionProps {
  content: {
    about: { title: string; content: string; link: string };
    experience: { title: string; subtitle: string };
    projects: { title: string; subtitle: string };
    partner: { title: string; subtitle: string };
    stack: { title: string };
    cta: { title: string; button: string };
    download: { cv: string; link: string };
  };
}

interface MetricCardProps {
  title: string;
  value: number;
  suffix?: string;
  subtitle: string;
  delay?: number;
}

// ======================
// Components
// ======================
const MetricCard = ({
  title,
  value,
  suffix = "+",
  subtitle,
  delay = 0,
}: MetricCardProps) => (
  <motion.div
    className="w-full h-full"
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Card className="w-full h-full flex flex-col justify-between bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardBody className="flex flex-col justify-center text-center py-6 px-4 gap-2 h-full">
        <h2 className="text-xl font-bold text-sky-500">{title}</h2>
        <p className="text-5xl font-extrabold gradient-text text-sky-500">
          <CountUp enableScrollSpy duration={2} end={value} suffix={suffix} />
        </p>
        <p className="text-gray-600">{subtitle}</p>
      </CardBody>
    </Card>
  </motion.div>
);

// ======================
// Main Section
// ======================
/**
 * Career experience block with timeline, metrics, and CTA.
 */
export const ExperienceSection = ({ content }: ExperienceSectionProps) => {
  const [showMore, setShowMore] = useState(false);
  const latestJob = experienceData[0];
  const previousJobs = experienceData.slice(1);

  return (
    <section className="page-section py-24 px-4" id="experience">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* --- Left Column --- */}
        <motion.div
          className="lg:col-span-9"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="w-full h-full p-6 bg-white shadow-md hover:shadow-xl overflow-hidden">
            <CardBody className="flex flex-col gap-6 overflow-hidden relative">
              {/* --- About Title & Desc --- */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold gradient-text flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-sky-500 gradient-text" />
                  {content.about.title}
                </h2>
                <p className="text-base text-gray-600">
                  {content.about.content}
                </p>
              </div>

              {/* --- Profile & Experience --- */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 items-start gap-10 md:gap-14"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {/* --- Profile Image + CV --- */}
                <div className="flex flex-col items-center gap-6 md:col-span-1">
                  <NextImage
                    alt="Foto Profil Mohamad Fadli"
                    className="object-cover w-48 h-48 md:w-40 md:h-65 rounded-2xl shadow-xl"
                    height={240}
                    src="/my-profile.JPG"
                    width={240}
                  />
                  <Button
                    as="a"
                    className="text-sm py-3 inline-flex items-center gap-2 px-6 font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                    endContent={<FileText className="w-4 h-4" />}
                    href={content.download.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="shadow"
                  >
                    Lihat CV
                  </Button>
                </div>

                {/* --- Experience Timeline --- */}
                <div className="md:col-span-2 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Perjalanan karir
                  </h3>

                  <motion.div
                    className="relative pl-8 border-l-2 border-sky-500 mt-4"
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5 text-white" />
                    </span>
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {latestJob.role}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {latestJob.company}
                      </p>
                      <time className="text-xs text-gray-500">
                        {latestJob.period}
                      </time>
                    </div>
                  </motion.div>

                  {/* --- Previous Jobs Accordion --- */}
                  {previousJobs.length > 0 && (
                    <>
                      <Accordion
                        hideIndicator
                        isCompact
                        className="border-none"
                        selectedKeys={showMore ? ["more"] : []}
                        onSelectionChange={(keys: any) =>
                          setShowMore(keys.has("more"))
                        }
                      >
                        <AccordionItem
                          key="more"
                          aria-label="Riwayat Sebelumnya"
                          className="p-0"
                          title={
                            <div className="flex items-center gap-2 text-sky-600 text-sm font-medium">
                              {showMore ? (
                                <>
                                  <ChevronUp className="w-4 h-4" />
                                  Sembunyikan Riwayat
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4" />
                                  Lihat Selengkapnya
                                </>
                              )}
                            </div>
                          }
                        >
                          <AnimatePresence mode="wait">
                            {showMore && (
                              <motion.div
                                animate={{ opacity: 1, height: "auto" }}
                                className="overflow-visible"
                                exit={{ opacity: 0, height: 0 }}
                                initial={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.4,
                                  ease: "easeInOut",
                                }}
                              >
                                <div className="mt-4 space-y-4 pl-8 border-l-2 border-gray-200">
                                  {previousJobs.map((exp, idx) => (
                                    <motion.div
                                      key={idx}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="relative"
                                      initial={{ opacity: 0, x: -10 }}
                                      layout="position"
                                      transition={{ delay: 0.05 * idx }}
                                    >
                                      <span className="absolute -left-11 top-0 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                                        <Briefcase className="w-3.5 h-3.5 text-white" />
                                      </span>
                                      <div>
                                        <h4 className="font-semibold text-gray-800">
                                          {exp.role}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                          {exp.company}
                                        </p>
                                        <time className="text-xs text-gray-500">
                                          {exp.period}
                                        </time>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </AccordionItem>
                      </Accordion>
                    </>
                  )}
                </div>
              </motion.div>
            </CardBody>
          </Card>
        </motion.div>

        {/* --- Right Column (Metrics) --- */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-4 h-full">
          {[content.experience, content.projects, content.partner].map(
            (item, idx) => (
              <MetricCard
                key={item.title}
                delay={idx * 0.2}
                subtitle={item.subtitle}
                title={item.title}
                value={idx === 0 ? 8 : idx === 1 ? 15 : 10}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
