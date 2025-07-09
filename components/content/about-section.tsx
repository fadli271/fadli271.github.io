"use client";

import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";
import NextImage from "next/image";
import { Button, Divider, Accordion, AccordionItem } from "@heroui/react";
import { useState } from "react";

import { experienceData } from "@/lib/content";

interface AboutSectionProps {
  content: {
    title: string;
    subtitle: string;
    narrative: string;
    cta: string;
  };
}

export default function AboutSection({ content }: AboutSectionProps) {
  const [showMore, setShowMore] = useState(false);
  const latestJob = experienceData[0];
  const previousJobs = experienceData.slice(1);

  return (
    <section className="page-section max-w-4xl mx-auto py-24 px-4" id="about">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-sky-500 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {content.title}
      </motion.h1>

      <motion.div
        className="relative grid grid-cols-1 md:grid-cols-3 items-start gap-10 md:gap-14 bg-white border border-gray-200 shadow-sm p-8 rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Image */}
        <div className="flex flex-col items-center gap-6 md:col-span-1">
          <NextImage
            alt="Foto Profil Mohamad Fadli"
            className="object-cover w-48 h-48 md:w-60 md:h-60"
            height={240}
            src="/myProfile.png"
            width={240}
          />

          <Button
            className="text-sm py-3 inline-flex items-center gap-2 px-6 font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-md"
            endContent={<Download className="w-4 h-4" />}
            variant="shadow"
          >
            {content.cta}
          </Button>
        </div>

        {/* Text & Timeline */}
        <div className="md:col-span-2 space-y-6">
          {/* Narrative Text */}
          <p className="text-base md:text-sm text-justify text-gray-600 leading-relaxed">
            {content.narrative}
          </p>

          {/* Career Timeline */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Pengalaman Karir
            </h3>

            <motion.div
              className="relative pl-8 border-l-2 border-sky-500 mt-4"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </span>
              <div className="mb-2">
                <h4 className="font-semibold text-gray-800">
                  {latestJob.role}
                </h4>
                <p className="text-sm text-gray-600">{latestJob.company}</p>
                <time className="text-xs text-gray-500">
                  {latestJob.period}
                </time>
              </div>
            </motion.div>

            {previousJobs.length > 0 && (
              <>
                <Divider className="my-4" />
                <Accordion
                  isCompact
                  className="border-none"
                  selectedKeys={showMore ? ["more"] : []}
                  onSelectionChange={(keys: any) => {
                    setShowMore(keys.has("more"));
                  }}
                >
                  <AccordionItem
                    key="more"
                    aria-label="Riwayat Sebelumnya"
                    className="p-0"
                    title={
                      <div className="flex items-left justify-left text-sky-600 text-sm font-medium">
                        {showMore
                          ? "Sembunyikan Riwayat"
                          : "Lihat Selengkapnya"}
                      </div>
                    }
                  >
                    <div className="mt-4 space-y-4 pl-8 border-l-2 border-gray-200">
                      {previousJobs.map((exp, idx) => (
                        <motion.div
                          key={idx}
                          className="relative"
                          initial={{ opacity: 0, x: -10 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                          whileInView={{ opacity: 1, x: 0 }}
                        >
                          <span className="absolute -left-11 top-1 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
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
                  </AccordionItem>
                </Accordion>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
