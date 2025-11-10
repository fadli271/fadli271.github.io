"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "@heroui/button";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-full px-3 mx-auto overflow-hidden bg-gray-200 shadow">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          alt={`Preview ${current + 1}`}
          animate={{ opacity: 1, x: 0 }}
          className="w-full object-contain max-h-[480px] "
          exit={{ opacity: 0, x: -50 }}
          initial={{ opacity: 0, x: 50 }}
          src={images[current]}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
        <Button isIconOnly size="sm" variant="flat" onPress={prev}>
          <FiChevronLeft size={20} />
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
        <Button isIconOnly size="sm" variant="flat" onPress={next}>
          <FiChevronRight size={20} />
        </Button>
      </div>

      {/* Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? "bg-gray-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
