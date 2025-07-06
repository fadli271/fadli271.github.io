"use client";

import React from "react";
import { Button, Link } from "@heroui/react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import { trackEvent } from "@/lib/gtag";

const CONTACT_PARAMS = {
  whatsapp: {
    href: "https://api.whatsapp.com/send/?phone=6282253596399&text=Hallo+Jago+Compro%2C+saya+mau+pesan+desain+company+profile&type=phone_number&app_absent=0",
    label: "Hubungi via WhatsApp",
  },
  socials: [
    {
      href: "https://web.facebook.com/people/Jago-Compro/61567172740267/?_rdc=1&_rdr",
      label: "Facebook JagoCompro",
      icon: <FaFacebook />,
    },
    {
      href: "https://www.instagram.com/jagocompro/",
      label: "Instagram JagoCompro",
      icon: <FaInstagram />,
    },
  ],
  links: {
    layanan: [
      { label: "Paket Harga", href: "#prices" },
      { label: "Portofolio", href: "#portfolio" },
      { label: "Desain Express", href: "#" },
    ],
    perusahaan: [
      { label: "Tentang Kami", href: "#features" },
      { label: "Testimoni", href: "#testimonials" },
    ],
  },
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm text-slate-300">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            aria-label={link.label}
            className="hover:text-emerald-400 transition-colors text-white"
            href={link.href}
            title={link.label}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <Link
    isExternal
    aria-label={label}
    className="text-slate-400 hover:text-emerald-400 transition-colors text-lg"
    href={href}
    rel="noopener noreferrer"
    title={label}
    onClick={() =>
      trackEvent("click_social_media", {
        category: "engagement",
        label: "footer_social_media_button",
        fbEventName: "Lead",
        fbParams: { source: "footer" },
      })
    }
  >
    {icon}
  </Link>
);

export const ContactSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* CTA Section */}
        <motion.div
          className="bg-slate-800/50 rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <h2 className="text-2xl font-bold text-emerald-400">Tertarik Bekerja Sama?</h2>
            <p className="mt-2 text-slate-300">
              Konsultasikan kebutuhan desain company profile Anda bersama tim profesional kami.
            </p>
          </div>
          <Button
            aria-label={CONTACT_PARAMS.whatsapp.label}
            as={Link}
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 transition-colors"
            color="primary"
            href={CONTACT_PARAMS.whatsapp.href}
            rel="noopener noreferrer"
            target="_blank"
            title={CONTACT_PARAMS.whatsapp.label}
            variant="bordered"
            onPress={() =>
              trackEvent("click_whatsapp", {
                category: "engagement",
                label: "footer_whatsapp_button",
                fbEventName: "Lead",
                fbParams: { source: "footer" },
              })
            }
          >
            <FaWhatsapp className="mr-2 animate-pulse" />
            {CONTACT_PARAMS.whatsapp.label}
          </Button>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo & Deskripsi */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold">
              Jago-<span className="text-emerald-400">COMPRO</span>
            </h3>
            <p className="mt-4 text-sm text-slate-400">CV. Langit Karya Tadulako</p>
            <p className="text-sm text-slate-400">Membantu bisnis Anda tampil lebih profesional.</p>
          </div>

          {/* Footer Sections (mapping) */}
          <FooterColumn links={CONTACT_PARAMS.links.layanan} title="Layanan" />
          <FooterColumn links={CONTACT_PARAMS.links.perusahaan} title="Perusahaan" />
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            &copy; {currentYear} <strong className="text-white">Jago-COMPRO</strong>. Semua Hak
            Cipta Dilindungi.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {CONTACT_PARAMS.socials.map((social) => (
              <SocialLink
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
