import type { Metadata } from "next";
import RootLayout from "./rootlayout"; // Import the Client Component

export const metadata: Metadata = {
  title: "Smart Downloads",
  description:
    "Download your Instagram videos fast, in HD quality, no watermarks.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
