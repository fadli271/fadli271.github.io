"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {
  Card,
  CardBody,
  Button,
  RadioGroup,
  Radio,
  Slider,
  CheckboxGroup,
  Checkbox,
  Switch,
} from "@heroui/react";
import Link from "next/link";

import { packages } from "@/app/content/services";

// --- Design System Components (Replicated for Consistency) ---
function MaterialIcon({
  name,
  className = "",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

const viewportOnce = { once: true, amount: 0.2 };

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={viewportOnce}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

// --- Logic & Config ---
const parsePrice = (priceStr: string) => {
  return parseInt(priceStr.replace(/[^0-9]/g, "")) || 0;
};

const ADD_ONS = [
  {
    id: "seo_pro",
    name: "SEO Pro (Optimasi Keyword)",
    price: 750000,
    icon: "search_insights",
  },
  {
    id: "payment",
    name: "Integrasi Payment Gateway",
    price: 2000000,
    icon: "payments",
  },
  {
    id: "multilang",
    name: "Multi-Language (EN/ID)",
    price: 1500000,
    icon: "language",
  },
  {
    id: "maintenance_extra",
    name: "+6 Bulan Maintenance",
    price: 1200000,
    icon: "verified_user",
  },
];

export default function PricingCalculator() {
  const [selectedPackageLabel, setSelectedPackageLabel] = useState(
    packages[2].label,
  ); // Default to Growth (Popular)
  const [extraPages, setExtraPages] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isExpress, setIsExpress] = useState(false);

  const calculation = useMemo(() => {
    const pkg = packages.find((p) => p.label === selectedPackageLabel);
    const basePrice = parsePrice(pkg?.price || "0");
    const extraPagesPrice = extraPages * 350000;
    const addOnsPrice = selectedAddOns.reduce((acc, id) => {
      const item = ADD_ONS.find((a) => a.id === id);

      return acc + (item?.price || 0);
    }, 0);

    const subtotal = basePrice + extraPagesPrice + addOnsPrice;
    const expressFee = isExpress ? subtotal * 0.25 : 0;
    const total = subtotal + expressFee;

    return {
      packageName: pkg?.label,
      basePrice,
      extraPagesPrice,
      addOnsPrice,
      expressFee,
      total,
      infra: pkg?.infra,
    };
  }, [selectedPackageLabel, extraPages, selectedAddOns, isExpress]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-[#f8fafc] text-[#334155] min-h-screen dark:bg-gray-950 dark:text-gray-300">
      {/* Navbar Minimalist for Calculator */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg shadow-black/[0.04] dark:bg-gray-900/95 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link className="flex items-center gap-3 group" href="/">
            <span className="text-xl font-bold text-gray-900 tracking-tight dark:text-white">
              Fadli Dev Studio
            </span>
          </Link>
          <Link
            className="text-sm font-medium text-sky-500 flex items-center gap-1"
            href="/#harga"
          >
            <MaterialIcon className="text-lg" name="arrow_back" /> Kembali ke
            Harga
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Configuration */}
          <div className="lg:col-span-8 space-y-12">
            <header>
              <span className="text-sky-500 font-bold tracking-wider text-xs uppercase mb-2 block">
                Interactive Tool
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Build Your Custom Package
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Sesuaikan fitur dan kapasitas website sesuai target bisnis Anda.
              </p>
            </header>

            {/* Step 1: Base Package */}
            <FadeUp delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-sky-900/20 flex items-center justify-center text-sky-500">
                    <MaterialIcon name="inventory_2" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    1. Pilih Fondasi Paket
                  </h2>
                </div>
                <RadioGroup
                  className="gap-4"
                  value={selectedPackageLabel}
                  onValueChange={setSelectedPackageLabel}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    {packages.map((pkg) => (
                      <Radio
                        key={pkg.label}
                        className={`max-w-none border-2 p-6 rounded-3xl transition-all m-0 bg-white dark:bg-gray-900 ${
                          selectedPackageLabel === pkg.label
                            ? "border-sky-500 shadow-xl shadow-sky-500/10"
                            : "border-gray-100 dark:border-gray-800"
                        }`}
                        value={pkg.label}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 dark:text-white">
                            {pkg.label}
                          </span>
                          <span className="text-sky-500 font-bold text-sm mt-1">
                            {pkg.price}
                          </span>
                          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                            {pkg.fit}
                          </p>
                        </div>
                      </Radio>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </FadeUp>

            {/* Step 2: Content Scaling */}
            <FadeUp delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                    <MaterialIcon name="layers" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    2. Skalabilitas Halaman
                  </h2>
                </div>
                <Card className="p-8 border-gray-100 dark:border-gray-800 shadow-lg shadow-black/[0.02] dark:bg-gray-900 rounded-3xl">
                  <CardBody>
                    <Slider
                      classNames={{
                        label:
                          "font-bold text-gray-700 dark:text-gray-300 mb-4",
                      }}
                      color="primary"
                      label="Tambahan Halaman Konten"
                      maxValue={20}
                      minValue={0}
                      showValueLabel={true}
                      step={1}
                      value={extraPages}
                      onChange={(v) => setExtraPages(v as number)}
                    />
                    <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                      <MaterialIcon
                        className="text-sky-500 text-lg"
                        name="info"
                      />
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Setiap paket sudah memiliki kuota halaman dasar.
                        Tambahkan jika Anda butuh halaman Produk, Layanan, atau
                        Edukasi lebih banyak. (Estimasi{" "}
                        <strong>Rp 350.000</strong> / halaman).
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </FadeUp>

            {/* Step 3: Add-ons */}
            <FadeUp delay={0.3}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                    <MaterialIcon name="add_circle" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    3. Fitur Strategis
                  </h2>
                </div>
                <CheckboxGroup
                  className="gap-4"
                  value={selectedAddOns}
                  onValueChange={setSelectedAddOns}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    {ADD_ONS.map((item) => (
                      <Checkbox
                        key={item.id}
                        className="bg-white dark:bg-gray-900 p-6 rounded-3xl max-w-none m-0 border border-gray-100 dark:border-gray-800 hover:border-sky-500 transition-colors shadow-sm"
                        value={item.id}
                      >
                        <div className="flex items-center gap-4">
                          <MaterialIcon
                            className="text-gray-400"
                            name={item.icon}
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                              {item.name}
                            </span>
                            <span className="text-xs text-sky-500 font-bold">
                              +{formatPrice(item.price)}
                            </span>
                          </div>
                        </div>
                      </Checkbox>
                    ))}
                  </div>
                </CheckboxGroup>
              </div>
            </FadeUp>

            {/* Step 4: Express */}
            <FadeUp delay={0.4}>
              <div className="p-8 bg-gradient-to-r from-slate-900 to-blue-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <MaterialIcon
                      className="text-amber-400 text-3xl"
                      name="rocket_launch"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Layanan Ekspres (Prioritas)
                    </h3>
                    <p className="text-sm text-blue-200 opacity-80">
                      Selesaikan project dalam 3-5 hari kerja saja.
                    </p>
                  </div>
                </div>
                <Switch
                  color="warning"
                  isSelected={isExpress}
                  size="lg"
                  onValueChange={setIsExpress}
                />
              </div>
            </FadeUp>
          </div>

          {/* Right Side: Summary Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <FadeUp delay={0.5}>
              <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden">
                <div className="p-8 pb-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Proyek Anda
                  </h3>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">
                        Dasar: {calculation.packageName}
                      </span>
                      <span className="font-bold">
                        {formatPrice(calculation.basePrice)}
                      </span>
                    </div>
                    {extraPages > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">
                          Halaman Ekstra ({extraPages}x)
                        </span>
                        <span className="font-bold text-sky-500">
                          +{formatPrice(calculation.extraPagesPrice)}
                        </span>
                      </div>
                    )}
                    {selectedAddOns.length > 0 && (
                      <div className="flex justify-between items-center text-sm text-sky-500">
                        <span>Total Fitur</span>
                        <span className="font-bold">
                          +{formatPrice(calculation.addOnsPrice)}
                        </span>
                      </div>
                    )}
                    {isExpress && (
                      <div className="flex justify-between items-center text-sm text-amber-500">
                        <span>Layanan Ekspres (25%)</span>
                        <span className="font-bold">
                          +{formatPrice(calculation.expressFee)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-8 mt-8 bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Estimasi Total Investasi
                    </span>
                    <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                      {formatPrice(calculation.total)}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-500 font-bold mb-8">
                      <MaterialIcon
                        filled
                        className="text-sm"
                        name="verified"
                      />
                      Infra Tahun ke-1 Gratis
                    </div>

                    <Button
                      as="a"
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold h-16 rounded-2xl shadow-xl shadow-sky-500/30 text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
                      href={`https://wa.me/6282189642027?text=Halo Fadli! Saya tertarik meng-custom paket website.%0A%0A*Detail Paket:*%0A- Paket Dasar: ${calculation.packageName}%0A- Tambahan Halaman: ${extraPages}%0A- Layanan Ekspres: ${isExpress ? "Ya" : "Tidak"}%0A%0A*Estimasi Total:* ${formatPrice(calculation.total)}`}
                      target="_blank"
                    >
                      <MaterialIcon name="chat" />
                      Kirim Rincian ke WA
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <MaterialIcon
                        className="text-green-500 text-sm"
                        name="check_circle"
                      />
                      Garansi Support
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <MaterialIcon
                        className="text-green-500 text-sm"
                        name="check_circle"
                      />
                      Security SSL
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </main>
    </div>
  );
}
