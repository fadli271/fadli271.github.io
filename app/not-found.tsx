// File: app/not-found.tsx atau pages/404.tsx (tergantung struktur Next.js kamu)
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50 dark:bg-gray-900">
      {/* Ilustrasi SVG */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-64 h-64 text-gray-400 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.75 9.75h.008v.008H9.75V9.75zM14.25 9.75h.008v.008h-.008V9.75zM21 12a9 9 0 11-18 0 9 9 0 0118 0zM8.25 15c.375-.75 1.5-1.5 3.75-1.5s3.375.75 3.75 1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
          />
        </svg>
      </motion.div>

      {/* Headline */}
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.1 }}
      >
        404 – Halaman Tidak Ditemukan
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
      >
        Sepertinya kamu nyasar ke tempat yang tidak ada
      </motion.p>
    </div>
  );
}
