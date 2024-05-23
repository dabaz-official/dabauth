import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@dabaz/styles/tailwind.css";
import "@dabaz/styles/globals.css";

import { seo } from "@dabaz/lib/seo";

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auth.dabaz.me"),
  title: {
    template: '%s - DabAuth',
    default: seo.title,
  },
  description: seo.description,
  keywords: ["User system", "Login system", "登录系统"],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  referrer: "origin-when-cross-origin",
  authors: [{ name: "DabAZ", url: "https://dabaz.me" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 15,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://auth.dabaz.me",
    siteName: seo.siteName,
    images: [
      {
        url: seo.imageSrc,
        width: 1920,
        height: 1080,
        alt: seo.imageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@dabaz_official",
    title: seo.title,
    description: seo.description,
    images: seo.imageSrc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
