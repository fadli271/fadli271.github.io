import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"Fira Code"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.8s ease-out forwards",
      },
      transitionDelay: {
        300: "300ms",
      },
      colors: {
        smk: {
          primary: "#0F172A", // Navy Blue
          secondary: "#D97706", // Gold
          accent: "#16A34A", // Green
          neutral: "#F8FAFC", // White/Light Gray
          tkj: "#DC2626", // Red
          otomotif: "#2563EB", // Blue
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
