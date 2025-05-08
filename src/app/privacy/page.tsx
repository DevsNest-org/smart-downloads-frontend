import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          SmartDownloads Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: April 28, 2025</p>

          <p className="mb-6">
            We value your privacy and are committed to maintaining transparency
            about how we collect and use data. Please take a moment to read
            through this policy. If you have any questions, feel free to contact
            us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Personal Identification Information
          </h2>
          <p className="mb-6">
            We do <strong>not</strong> collect personal identification
            information from users in any way. You can use SmartDownloads
            anonymously without logging in or providing any personal data. If
            you voluntarily submit information (e.g., through support or
            feedback forms), you do so at your own discretion.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Non-Personal Identification Information
          </h2>
          <p className="mb-6">
            We may collect <strong>non-personal</strong> identification
            information when you interact with our website. This may include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Internet service provider</li>
            <li>
              General connection information (e.g., IP address, referral URLs)
            </li>
          </ul>
          <p className="mb-6">
            This data is used for analytics and service improvement only.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
          <p className="mb-6">
            SmartDownloads uses <strong>cookies</strong> to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Enhance user experience</li>
            <li>Identify return visits</li>
            <li>Support analytics platforms</li>
          </ul>
          <p className="mb-6">
            You can choose to disable cookies through your browser settings.
            Please note that disabling cookies may affect some features of the
            site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Analytics</h2>
          <p className="mb-6">
            We use Google Analytics to understand how users interact with our
            website. Google Analytics uses cookies to collect information about
            your use of our service. This information is used to improve our
            website and user experience.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update this policy at any time. Changes will be posted on
            this page with the updated review date. You are encouraged to review
            this page periodically to stay informed about how we protect your
            information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Acceptance of This Policy
          </h2>
          <p className="mb-6">
            By using SmartDownloads, you accept the terms outlined in this
            Privacy Policy. If you do not agree, please discontinue use of the
            site. Continued use after updates implies your acceptance of the
            revised policy.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              For any questions about this Privacy Policy, please contact us
              through our{" "}
              <Link href="/" className="text-blue-600 hover:underline">
                Contact Us
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
