"use client";

import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import ScrollContext from "@/components/scrollcontext";
import MobileMenu from "@/components/mobilemenu";
import { useState } from "react";
import { Head } from "next/document";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <Head>
        {/* Preconnect to Google Analytics to speed up loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Google Analytics Script (Non-Blocking) */}
        <Script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-7KSBKSJ41X"
          strategy="lazyOnload" // Loads only after the page is interactive
        />
        <Script defer id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7KSBKSJ41X');
          `}
        </Script>
      </Head>
      <ScrollContext>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${
            inter.variable
          } antialiased ${isMobileMenuOpen && "fixed"} `}
        >
          <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
          {children}
          <Footer />{" "}
        </body>
      </ScrollContext>
    </html>
  );
}
