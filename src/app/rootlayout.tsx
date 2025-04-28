"use client";

import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import ScrollContext from "@/components/scrollcontext";
import MobileMenu from "@/components/mobilemenu";
import { useState } from "react";
import { DownloadProvider } from "@/context/DownloadContext";
import Script from "next/script";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "900"],
  variable: "--font-inter",
});

const title = "Smart Downloads";

export const metadata: Metadata = {
  metadataBase: new URL("https://smartdownloads.devsnest.site"),
  keywords: [
    "Smart Downloads",
    "Video Downloader",
    "Youtube Video Downloader",
    "Tiktok Video Downloader",
    "Instagram Video Downloader",
  ],
  title,
  applicationName: title,
  manifest: "/site.webmanifest",
  description: "Sunday Ochuko's official Website.",
  openGraph: {
    title,
    description: "Sunday Ochuko's official Website.",
    type: "website",
    // images: [{ url: ogImage, alt: title }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      <Script
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-7KSBKSJ41X"
        strategy="lazyOnload"
      />
      <Script defer id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7KSBKSJ41X');
          `}
      </Script>
      <ScrollContext>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${
            inter.variable
          } antialiased ${isMobileMenuOpen && "fixed"} `}
        >
          <DownloadProvider>
            <Navbar
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
            {children}
            <Footer />
          </DownloadProvider>
        </body>
      </ScrollContext>
    </html>
  );
}
