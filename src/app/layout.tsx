import type { Metadata } from "next";
import RootLayout from "./rootlayout"; // Import the Client Component

export const metadata: Metadata = {
  title: "Download from Instagram",
  description: "Download Instagram videos, pictures, reels, IGTV and carousel.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
