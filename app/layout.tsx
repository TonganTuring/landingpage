import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah's Assisted Living",
  description: "We empower seniors with 24/7 support to live life on their terms!",
  openGraph: {
    title: "Sarah's Assisted Living",
    description: "We empower seniors with 24/7 support to live life on their terms!",
    images: [
      {
        url: "/images/location1.jpg",
        width: 1200,
        height: 630,
        alt: "Sarah's Assisted Living Location",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah's Assisted Living",
    description: "We empower seniors with 24/7 support to live life on their terms!",
    images: ["/images/location1.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
