import type { Metadata } from "next";
import RootLayout from "./rootlayout"; // Import the Client Component

export const metadata: Metadata = {
  metadataBase: new URL("https://smartdownloads.online"),
  title: {
    default: "SmartDownloads - Instagram Video Downloader",
    template: "%s | SmartDownloads"
  },
  description: "Download Instagram videos, photos, reels, and IGTV content in HD quality. Fast, free, and no watermarks. Your trusted Instagram downloader.",
  keywords: [
    "Smart Downloads",
    "Instagram Downloader",
    "Instagram Video Downloader",
    "Instagram Photo Downloader",
    "Instagram Reels Downloader",
    "IGTV Downloader",
    "Free Instagram Downloader",
    "HD Instagram Downloader"
  ],
  authors: [{ name: "SmartDownloads Team" }],
  creator: "SmartDownloads",
  publisher: "SmartDownloads",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "SmartDownloads",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartdownloads.online",
    siteName: "SmartDownloads",
    title: "SmartDownloads - Instagram Video Downloader",
    description: "Download Instagram videos, photos, reels, and IGTV content in HD quality. Fast, free, and no watermarks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartDownloads - Instagram Video Downloader"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartDownloads - Instagram Video Downloader",
    description: "Download Instagram videos, photos, reels, and IGTV content in HD quality. Fast, free, and no watermarks.",
    images: ["/og-image.png"],
    creator: "@smartdownloads",
  },
  verification: {
    google: "G-7KSBKSJ41X",
  },
  alternates: {
    canonical: "https://smartdownloads.online",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
