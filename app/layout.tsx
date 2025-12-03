import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Script from "next/script";
import React from "react";

import { Providers } from "./providers";

import {
  siteMetadata,
  siteViewport,
  footerConfig,
  structuredData,
} from "@/app/content/site-config";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="id">
      <head />
      <body className={clsx("min-h-screen font-sans antialiased")}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />

            <Script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
              id="google-analytics"
              strategy="afterInteractive"
            />
          </>
        ) : null}

        {process.env.NEXT_PUBLIC_META_PIXEL_ID ? (
          <Script
            dangerouslySetInnerHTML={{
              __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
        fbq('track', 'PageView');
      `,
            }}
            id="meta-pixel"
            strategy="afterInteractive"
          />
        ) : null}

        <Script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          id="json-ld-schema"
          type="application/ld+json"
        />

        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <div className="aurora-background" />
            <main className="mx-auto w-full flex-grow bg-slate-50">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-4 text-sm text-black bg-white">
              <p>{footerConfig.copyright}</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
