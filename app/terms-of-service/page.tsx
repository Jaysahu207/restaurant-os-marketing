"use client";

import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Scale,
  CreditCard,
  Ban,
  Mail,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance Of Terms",
      content:
        "By accessing or using QRasoi, you agree to be bound by these Terms of Service, our Privacy Policy, and all applicable laws and regulations. If you do not agree with these terms, you must discontinue use of the platform.",
    },

    {
      icon: ShieldCheck,
      title: "Account Responsibilities",
      content:
        "Users are responsible for maintaining the confidentiality of account credentials, safeguarding access to their accounts, and ensuring that all information provided to QRasoi is accurate, complete, and up to date.",
    },

    {
      icon: ShieldCheck,
      title: "Google Account & OAuth Services",
      content:
        "Certain QRasoi features may require users to authenticate through Google Sign-In or connect Google services. By authorizing access, users grant QRasoi permission to access only the Google account data and permissions explicitly approved during the authorization process. Users may revoke access at any time through their Google Account settings.",
    },

    {
      icon: Mail,
      title: "Email Sending Functionality",
      content:
        "When users connect Gmail functionality, QRasoi may use Google's Gmail API solely to send authorized transactional, onboarding, billing, operational, and customer support communications on behalf of the authenticated user. QRasoi does not access or read personal inbox content, email history, attachments, or contacts.",
    },

    {
      icon: CreditCard,
      title: "Subscriptions & Payments",
      content:
        "Certain QRasoi features may require paid subscriptions. Pricing, billing cycles, renewal terms, and payment obligations will be clearly disclosed before purchase. Failure to maintain active payments may result in limited access to premium services.",
    },

    {
      icon: Ban,
      title: "Acceptable Use Policy",
      content:
        "Users may not misuse the platform, attempt unauthorized access, interfere with platform security, distribute malicious software, violate applicable laws, send unlawful communications, or use QRasoi in a manner that harms other users or third parties.",
    },

    {
      icon: Scale,
      title: "Service Availability",
      content:
        "QRasoi strives to maintain reliable and uninterrupted service availability. However, maintenance activities, software updates, infrastructure issues, security incidents, or circumstances beyond our control may occasionally affect service availability.",
    },

    {
      icon: ShieldCheck,
      title: "Data Protection & Privacy",
      content:
        "QRasoi processes user information in accordance with its Privacy Policy. We implement reasonable technical and organizational safeguards to protect user information, account credentials, and authorized Google account integrations.",
    },

    {
      icon: Ban,
      title: "Suspension & Termination",
      content:
        "QRasoi reserves the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, abuse platform functionality, compromise system security, or violate applicable laws and regulations.",
    },

    {
      icon: Scale,
      title: "Intellectual Property",
      content:
        "All software, branding, content, designs, trademarks, and platform functionality provided by QRasoi remain the property of QRasoi or its licensors. Users may not copy, modify, distribute, reverse engineer, or exploit platform assets without prior written permission.",
    },

    {
      icon: AlertTriangle,
      title: "Limitation Of Liability",
      content:
        "QRasoi is provided on an 'as-is' and 'as-available' basis. To the maximum extent permitted by law, QRasoi shall not be liable for indirect, incidental, special, consequential, or business-related losses arising from the use of the platform.",
    },

    {
      icon: Scale,
      title: "Changes To These Terms",
      content:
        "QRasoi may update these Terms of Service periodically to reflect changes in legal requirements, platform functionality, or business operations. Continued use of the platform following updates constitutes acceptance of the revised Terms.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-orange-600 shadow-sm transition-all duration-300 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Home
          </Link>

          {/* Header */}
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
              <FileText className="h-4 w-4" />
              Legal & Service Agreement
            </div>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl">
              Terms Of
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Service
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              These Terms of Service outline the rules, responsibilities, and
              conditions for using RestaurantOS and its related services.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              Last Updated: May 2026
            </div>
          </div>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <div
                  key={index}
                  className="rounded-[28px] border border-orange-100 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex flex-col gap-6 md:flex-row">
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl font-black text-gray-900">
                        {section.title}
                      </h2>

                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Important Notice */}
            <div className="rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-white shadow-2xl">
              <h2 className="text-3xl font-black">Fair & Transparent Usage</h2>

              <p className="mt-5 text-lg leading-relaxed text-orange-50">
                RestaurantOS is designed to provide secure, reliable, and modern
                restaurant management solutions while maintaining transparency
                and fairness for all users.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  "Secure Platform Usage",
                  "Transparent Billing",
                  "Responsible Service Access",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-xl"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-[28px] border border-orange-100 bg-white p-8 shadow-lg">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Need Clarification?
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Contact our team if you have questions about these Terms of
                    Service or platform policies.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300"
                >
                  <Mail className="h-5 w-5" />
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
