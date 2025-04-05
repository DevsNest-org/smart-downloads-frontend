import type { Metadata } from "next";
import RootLayout from "./rootlayout"; // Import the Client Component

export const metadata: Metadata = {
  title: "Smart Downloads",
  description:
    "We’ve taken all the best attributes a downloader can have and placed them in ours.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
