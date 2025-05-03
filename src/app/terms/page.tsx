"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description:
      "Terms and conditions of use",
  };

  
export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: April 28, 2025</p>

          <p className="mb-6">
            Welcome to <strong>SmartDownloads</strong>, a service designed to help you download videos and images from <strong>your own Instagram account</strong>. We take privacy, legality, and user responsibility seriously. By using SmartDownloads, you agree to abide by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. General Information</h2>
          <p className="mb-6">
            SmartDownloads is an independently developed tool focused on helping users download and manage <strong>their own</strong> Instagram content in a convenient and high-quality format. While we plan to support additional platforms in the future, currently our primary focus is on Instagram downloads. Please check the update date above regularly to stay informed about any changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using SmartDownloads, you confirm that you agree to all terms outlined in this agreement. If you do not accept any part of these terms, you must not use our service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Who May Use This Service</h2>
          <p className="mb-6">
            This service is for individuals who want to <strong>download Instagram content they own or have the rights to access</strong>. Misuse of SmartDownloads to infringe on others' privacy or rights is strictly prohibited and may result in service denial or legal action.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Permitted Use</h2>
          <p className="mb-6">
            SmartDownloads is to be used <strong>only for personal use</strong>—to download media from Instagram accounts you control or have authorization for. <strong>You are solely responsible</strong> for ensuring your use complies with local laws and Instagram's terms. We do not support bulk downloads or automated downloading of content.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Do not attempt to download media from accounts that are not yours or that you are not authorized to access.</li>
            <li>Do not use SmartDownloads to distribute, resell, or republish content unlawfully.</li>
            <li>Respect all applicable laws regarding copyright, privacy, and content ownership.</li>
            <li>Do not attempt to bypass any rate limits or use automated tools to access our service.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Copyright and Trademark</h2>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>SmartDownloads</strong> is a trademark of our team and is not affiliated with Instagram, Meta, or any third-party service.</li>
            <li>You must not use SmartDownloads branding for unauthorized promotions or materials.</li>
            <li>You are responsible for ensuring you have the right to download any content via SmartDownloads.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy and Data Handling</h2>
          <p className="mb-6">
            We respect user privacy. We do not collect personal data unless it is explicitly and voluntarily provided by the user. We do not store or back up user download history. Any analytics data collected is used solely for improving our service and is handled in accordance with our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Service Limitations</h2>
          <p className="mb-6">
            SmartDownloads is provided "as is." We make no warranties, expressed or implied, about the functionality, reliability, or suitability of our service. Use it at your own risk. We are not responsible for broken links, Instagram API changes, or service downtime. We reserve the right to modify or discontinue the service at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to These Terms</h2>
          <p className="mb-6">
            We may update these Terms and Conditions at any time. Changes will be posted here, and continued use of the service means you accept the updated terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Instagram Disclaimer</h2>
          <p className="mb-6">
            <strong>SmartDownloads is not affiliated with or endorsed by Instagram or Meta Platforms Inc.</strong> We are an independent service that helps users download their own content in compliance with Instagram's terms of service.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              For any questions about these Terms and Conditions, please contact us through our <Link href="/" className="text-blue-600 hover:underline">Contact Us</Link> page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 