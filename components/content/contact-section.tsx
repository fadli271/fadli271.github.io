"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Card, CardBody, Button } from "@heroui/react";

interface ContactSectionProps {
  content: {
    title: string;
    subtitle: string;
    emailPrompt: string;
    socialPrompt: string;
  };
}

export default function ContactSection({ content }: ContactSectionProps) {
  return (
    <section
      className="page-section max-w-3xl mx-auto py-24 px-4 text-center"
      id="contact"
    >
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-sky-500 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {content.title}
      </motion.h1>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="text-lg md:text-xl text-slate-600 mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {content.subtitle}
      </motion.p>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-md shadow-xl">
          <CardBody className="p-10 md:p-12 justify-center items-center text-center">
            <p className="text-base text-slate-600">{content.emailPrompt}</p>
            <a
              className="text-2xl md:text-3xl font-semibold text-sky-500 hover:text-sky-700 transition-colors mt-2 block"
              href="mailto:fadli.mohamad62@gmail.com"
            >
              fadli.mohamad62@gmail.com
            </a>

            <p className="mt-10 text-base text-slate-600">
              {content.socialPrompt}
            </p>
            <h6 className="text-base text-slate-600">
              {" "}
              Atau temukan saya di:{" "}
            </h6>
            <div className="flex justify-center gap-4 mt-5 ">
              <Button
                isIconOnly
                aria-label="GitHub"
                as="a"
                className="text-slate-600 hover:text-black transition bg-gray-200"
                href="https://github.com/fadli271"
                target="_blank"
                variant="flat"
              >
                <FaGithub className="w-5 h-5" />
              </Button>
              <Button
                isIconOnly
                aria-label="LinkedIn"
                as="a"
                className="text-slate-600 hover:text-sky-700 transition bg-gray-200"
                href="https://linkedin.com/in/mfadli27a"
                target="_blank"
                variant="flat"
              >
                <FaLinkedin className="w-5 h-5" />
              </Button>
              <Button
                isIconOnly
                aria-label="WhatsApp"
                as="a"
                className="text-slate-600 hover:text-green-600 transition bg-gray-200"
                href="https://wa.me/6281234567890?text=Halo%20Fadli%2C%20saya%20tertarik%20dengan%20portofoliomu!"
                target="_blank"
                variant="flat"
              >
                <FaWhatsapp className="w-5 h-5" />
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
}
