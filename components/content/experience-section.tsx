"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";

// Props type
interface ExperienceSectionProps {
  content: {
    about: { title: string; content: string; link: string };
    experience: { title: string; subtitle: string };
    projects: { title: string; subtitle: string };
    partner: { title: string; subtitle: string };
    stack: { title: string };
    cta: { title: string; button: string };
  };
}

// Reusable animated bento wrapper
const BentoItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className={`bento-item content-card ${className}`}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.5 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.div>
);

// Reusable metric card
const MetricCard = ({
  title,
  value,
  suffix = "+",
  subtitle,
  delay = 0,
}: {
  title: string;
  value: number;
  suffix?: string;
  subtitle: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.6 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Card className="w-[260px] md:w-[300px] h-full bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardBody className="flex flex-col items-center text-center py-6 gap-2">
        <h2 className="text-xl font-bold text-sky-500">{title}</h2>
        <p className="text-5xl font-extrabold gradient-text text-sky-500">
          <CountUp enableScrollSpy duration={2} end={value} suffix={suffix} />
        </p>
        <p className="text-gray-600">{subtitle}</p>
      </CardBody>
    </Card>
  </motion.div>
);

// Main Experience Section
export const ExperienceSection = ({ content }: ExperienceSectionProps) => {
  return (
    <section
      className="page-section relative mx-auto py-24 px-4 bg-white"
      id="bento"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="space-y-16"
          initial="hidden"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          {/* About Card */}
          <BentoItem className="w-full">
            <h2 className="text-4xl font-bold text-sky-500 mb-4 text-center">
              {content.about.title}
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-4">
              {content.about.content}
            </p>
            <Link
              className="block text-center font-semibold text-sky-600 hover:underline"
              href="#about"
            >
              {content.about.link}
            </Link>
          </BentoItem>

          {/* Metrics */}
          <div className="flex flex-wrap justify-center items-stretch gap-4">
            <MetricCard
              delay={0}
              subtitle={content.experience.subtitle}
              title={content.experience.title}
              value={8}
            />
            <MetricCard
              delay={0.1}
              subtitle={content.projects.subtitle}
              title={content.projects.title}
              value={15}
            />
            <MetricCard
              delay={0.2}
              subtitle={content.partner.subtitle}
              title={content.partner.title}
              value={10}
            />
          </div>

          {/* CTA Button */}
          <motion.div
            className="w-full flex justify-center mt-6"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-md"
              href="#contact"
            >
              {content.cta.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
