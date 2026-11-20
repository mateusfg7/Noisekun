import { Toaster } from "@noisekun/ui/components/sonner";
import { SerwistProvider } from "@serwist/turbopack/react";
import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "@noisekun/ui/globals.css";

const APP_NAME = "Noisekun";

const APP_DESCRIPTION =
  "Listen combinations of ambient sounds for relaxing or getting more productive on your task!";

const APP_URL = process.env.HOSTNAME
  ? `https://${process.env.HOSTNAME}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME,
  },
  applicationName: APP_NAME,
  authors: [
    {
      name: "Mateus Felipe Gonçalves",
      url: "https://github.com/mateusfg7",
    },
  ],
  description: APP_DESCRIPTION,
  formatDetection: {
    telephone: false,
  },

  keywords: [
    "noise",
    "sound",
    "ambience",
    "relaxing",
    "productive",
    "noisli",
    "noisekun",
  ],
  manifest: "/manifest.json",
  metadataBase: new URL(APP_URL),
  openGraph: {
    description: APP_DESCRIPTION,
    images: "/images/banner.png",
    title: APP_NAME,
    type: "website",
    url: "/",
  },
  title: `${APP_NAME} — ${APP_DESCRIPTION}`,
  twitter: {
    card: "summary_large_image",
    description: APP_DESCRIPTION,
    images: "/images/banner.png",
    site: "/",
    title: APP_NAME,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#04A2DC",
  viewportFit: "cover",
  width: "device-width",
};

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    // The theme is restored on the client, which rewrites `data-theme`.
    <html
      className={nunito.variable}
      data-theme="transition-theme"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <Script
          async
          data-website-id={process.env.UMAMI_WEBSITE_ID}
          src="https://analytics.mateusf.com/script.js"
        />
      </head>
      <body className="antialiased">
        <SerwistProvider swUrl="/serwist/sw.js">
          {children}
          <Toaster position="bottom-right" />
        </SerwistProvider>
      </body>
    </html>
  );
}
