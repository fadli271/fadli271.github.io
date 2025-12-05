"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
interface HeroSectionProps {
  content: {
    line1: string;
    line2: string;
    tagline: string;
    scroll: string;
  };
}

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0] as const, // cubic-bezier for smooth easeOut
    },
  },
};

/**
 * Displays the primary hero introduction, supporting animated text and scroll CTA.
 */
export const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section
      className="page-section relative min-h-screen flex flex-col justify-center items-center px-4 text-center"
      id="home"
    >
      {/* Hero Title Section */}
      <motion.h1
        animate="show"
        className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight"
        initial="hidden"
        variants={containerVariant}
      >
        {/* First Line */}
        <motion.span
          className="block text-gray-800"
          transition={{ duration: 0.6, ease: "circOut" }}
          variants={fadeUpVariant}
        >
          {content.line1}
        </motion.span>

        {/* Second Line with Gradient */}
        <motion.span
          className="block gradient-text mt-2"
          transition={{ duration: 0.6, ease: "circOut", delay: 0.2 }}
          variants={fadeUpVariant}
        >
          {content.line2}
        </motion.span>
      </motion.h1>

      {/* Tagline with Typing Animation */}
      <div className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 italic h-10">
        <TypeAnimation
          cursor={false}
          sequence={[`"${content.tagline}"`]}
          speed={65}
          wrapper="span"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollLink
          className="animate-bounce flex flex-col items-center text-gray-500 hover:c transition-colors cursor-pointer"
          duration={800}
          offset={-50}
          smooth={true}
          to="experience"
        >
          <span className="text-sm">{content.scroll}</span>
          <ArrowDown className="w-6 h-6" />
        </ScrollLink>
      </div>
    </section>
  );
};
