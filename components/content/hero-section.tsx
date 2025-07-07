"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

interface HeroSectionProps {
  content: {
    line1: string;
    line2: string;
    tagline: string;
    scroll: string;
  };
}

// Animation variants for staggered fade-in effect
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section
      className="page-section relative min-h-screen flex flex-col justify-center items-center px-4 text-center"
      id="hero"
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
          className="block gradient-text mt-2 text-sky-500"
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
          wrapper="p"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          className="animate-bounce flex flex-col items-center text-gray-500 hover:text-sky-500 transition-colors"
          href="#bento"
        >
          <span className="text-sm">{content.scroll}</span>
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
