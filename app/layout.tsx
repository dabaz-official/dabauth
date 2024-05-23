import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@dabaz/styles/globals.css";
import "@dabaz/styles/tailwind.css";

import { seo } from "@dabaz/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s - DabPython',
    default: seo.title,
  },
  description: seo.description,
  keywords: ["Python", "programming language", "编程语言", "programming language", "学习", "learning", "教程", "tutorial", "入门指南", "beginner's guide", "编程初学者", "programming beginners", "代码", "code", "算法", "algorithm", "数据结构", "data structures", "程序设计", "program design", "自学编程", "self-learning programming", "编程资源", "programming resources", "网络课程", "online courses", "编程实践", "programming practice", "编程项目", "programming projects", "编程技能", "programming skills"],
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
