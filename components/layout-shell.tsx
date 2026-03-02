"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { footerConfig } from "@/app/content/site-config";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isServices = pathname.startsWith("/services");

  if (isServices) {
    // Services page has its own full layout (navbar, footer, bg)
    return <>{children}</>;
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="aurora-background" />
      <main className="mx-auto w-full flex-grow bg-slate-50">{children}</main>
      <footer className="w-full flex items-center justify-center py-4 text-sm text-black bg-white">
        <p>{footerConfig.copyright}</p>
      </footer>
    </div>
  );
}
