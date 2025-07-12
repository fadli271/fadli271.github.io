"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link, Mail } from "lucide-react";
import { Card, CardBody, Button, Tooltip } from "@heroui/react";

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
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-3xl font-bold gradient-text mb-4 flex justify-center items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Link className="w-10 h-10 text-sky-500 gradient-text" />
        {content.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base text-slate-600 mt-4 leading-relaxed max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {content.subtitle}
      </motion.p>

      {/* Card */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Card className="rounded-3xl bg-white/60 border border-slate-100 ring-1 ring-slate-200/50 shadow-xl backdrop-blur-md">
          <CardBody className="p-10 md:p-12 space-y-6 text-center">
            {/* Email */}
            <div>
              <p className="text-base text-slate-600">{content.emailPrompt}</p>
              <a
                className="mt-2 inline-flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-sky-500 hover:text-sky-700 transition-colors"
                href="mailto:fadli.mohamad62@gmail.com"
              >
                <Mail className="w-5 h-5" />
                fadli.mohamad62@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-base text-slate-600">{content.socialPrompt}</p>

              <div className="flex justify-center gap-4 mt-4">
                <Tooltip content="GitHub">
                  <Button
                    isIconOnly
                    aria-label="GitHub"
                    as="a"
                    className="bg-gray-200 text-slate-600 hover:text-black shadow-md hover:scale-110 transition"
                    href="https://github.com/fadli271"
                    target="_blank"
                    variant="flat"
                  >
                    <FaGithub className="w-6 h-6" />
                  </Button>
                </Tooltip>
                <Tooltip content="LinkedIn">
                  <Button
                    isIconOnly
                    aria-label="LinkedIn"
                    as="a"
                    className="bg-gray-200 text-slate-600 hover:text-sky-700 shadow-md hover:scale-110 transition"
                    href="https://linkedin.com/in/mfadli27a"
                    target="_blank"
                    variant="flat"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </Button>
                </Tooltip>
                <Tooltip content="WhatsApp">
                  <Button
                    isIconOnly
                    aria-label="WhatsApp"
                    as="a"
                    className="bg-gray-200 text-slate-600 hover:text-green-600 shadow-md hover:scale-110 transition"
                    href="https://wa.me/6281234567890?text=Halo%20Fadli%2C%20saya%20tertarik%20dengan%20portofoliomu!"
                    target="_blank"
                    variant="flat"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
}
