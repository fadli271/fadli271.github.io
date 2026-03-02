import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Script from "next/script";
import React from "react";

import { Providers } from "./providers";

import { siteMetadata, siteViewport, structuredData } from "@/app/content/site-config";
import LayoutShell from "@/components/layout-shell";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="id">
      <head>
        {/* Google Material Symbols for services page icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* Inter font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
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
