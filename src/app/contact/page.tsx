"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact Us",
    description:
      "Contact the team of you're having any issues.",
  };

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            SmartDownloads is a free tool designed to help you download your own Instagram content. Our platform allows you to save videos, photos, reels, and IGTV content from your Instagram account with ease and in high quality.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
              We are here to answer any questions or inquiries that you may have. Reach out to us and we will respond as soon as possible. In the meantime, please have a look at our <Link href="/terms" className="text-blue-600 hover:underline">terms of service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">privacy policy</Link>.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">
                For general inquiries: <a href="mailto:contact@smartdownloads.devsnest.site" className="text-blue-600 hover:underline">contact@smartdownloads.devsnest.site</a>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Common Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Is SmartDownloads free to use?</h3>
                <p className="text-gray-600">Yes, SmartDownloads is completely free to use. We don't charge for any of our services.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">What content can I download?</h3>
                <p className="text-gray-600">You can download videos, photos, reels, and IGTV content from your own Instagram account or content you have permission to access.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Is my data safe?</h3>
                <p className="text-gray-600">Yes, we take privacy seriously. We don't store your download history or personal information. Learn more in our <Link href="/privacy" className="text-blue-600 hover:underline">privacy policy</Link>.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              For any other questions or concerns, please don't hesitate to reach out to us via email. We typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 