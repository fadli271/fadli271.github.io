"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      aria-label="Scroll to Top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition"
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
