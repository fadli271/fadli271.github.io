import "@/styles/globals.css";

import React from "react";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import clsx from "clsx";

import { Providers } from "./providers";

import LayoutShell from "@/components/layout/layout-shell";
import { siteMetadata, siteViewport, structuredData } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={inter.variable} lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
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
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
