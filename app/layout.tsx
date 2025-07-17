import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Script from "next/script";
import React from "react";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://fadli.github.io"),
  title: {
    default: "Mohamad Fadli – Software Engineer",
    template: "%s | Mohamad Fadli",
  },
  description:
    "Portfolio & Projects of Mohamad Fadli — software engineer with experience in modern web and AI integration.",
  authors: [{ name: "Mohamad Fadli", url: "https://fadli.github.io" }],
  keywords: ["Fadli", "Software Engineer", "Web Developer", "AI", "Portfolio"],
  openGraph: {
    title: "Mohamad Fadli – Software Engineer",
    description:
      "Showcasing work in AI, logistics tech, and modern web development.",
    url: "https://fadli.github.io",
    siteName: "Mohamad Fadli",
    images: [
      {
        url: "/myProfile.png",
        width: 1200,
        height: 630,
        alt: "Mohamad Fadli Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamad Fadli",
    url: "https://fadli.github.io",
    sameAs: [
      "https://github.com/fadli271",
      "https://www.linkedin.com/in/mfadli27a",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Paerte Code",
    },
  };

  return (
    <html suppressHydrationWarning lang="id">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
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

        <Script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          id="json-ld-schema"
          type="application/ld+json"
        />

        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <div className="aurora-background" />
            <main className="mx-auto w-full flex-grow bg-white">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-4 text-sm text-black bg-white">
              <p>© 2025 Mohamad Fadli. All rights reserved.</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
