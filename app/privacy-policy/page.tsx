"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
  ArrowLeft,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content:
        "We collect personal and business information such as restaurant details, user account credentials, billing data, device data, and usage analytics. When you connect your Google Account via OAuth 2.0, we securely collect and store encrypted Gmail OAuth access and refresh tokens solely to provide authorized email sending functionality within QRasoi.",
    },
    {
      icon: Eye,
      title: "How We Use Information",
      content:
        "Your information is used to operate QRasoi features including QR ordering, billing, analytics, customer management, support services, restaurant operations, and automation of restaurant marketing communications. QRasoi only uses Gmail API access to send emails on behalf of connected restaurant owners.",
    },
    {
      icon: ShieldCheck,
      title: "Google API Services User Data & Limited Use Disclosure",
      content:
        "QRasoi's use and transfer of information received from Google APIs to any other application will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We strictly use Gmail API access ('gmail.send' scope) solely to allow restaurant owners to send transactional, onboarding, billing, support, and promotional communications directly through their own Google accounts.",
    },
    {
      icon: Eye,
      title: "Gmail Data Access Restrictions",
      content:
        "QRasoi does not read, access, analyze, monitor, or store users' personal Gmail inbox messages, email history, attachments, or contact lists. Gmail API access is used exclusively for authenticated outbound email sending initiated by the restaurant owner.",
    },
    {
      icon: Globe,
      title: "Third-Party Services & Data Transfers",
      content:
        "QRasoi only transfers limited data to trusted third-party providers such as payment gateways, cloud hosting providers, infrastructure services, and essential operational tools necessary to run restaurant software features. We never transfer, sell, or share data obtained through Google API connections with advertising platforms, marketing networks, external analytics providers, or data brokers.",
    },
    {
      icon: Lock,
      title: "Data Protection, Retargeting, and Human Access",
      content:
        "We use secure servers, encryption at rest, HTTPS communication, access controls, and strict authentication measures to protect your information. QRasoi does not use Google API data for serving advertisements, retargeting, interest-based personalization, or user profiling. No human staff members are permitted to access Gmail-connected data unless explicit user consent is provided for support purposes or access is required for legal compliance or security investigations.",
    },
    {
      icon: ShieldCheck,
      title: "Google Account Access Revocation",
      content:
        "Users may revoke QRasoi's access to their Google account at any time through their QRasoi account settings or directly from their Google Account security settings. Once disconnected, Gmail API access tokens are disabled and email functionality is terminated.",
    },
    {
      icon: Eye,
      title: "AI & Machine Learning Restrictions",
      content:
        "QRasoi never sells personal, restaurant, or Google API-derived data. Information obtained through Google API integrations is never transferred, shared, or used to create, train, fine-tune, or improve generalized artificial intelligence or machine learning models.",
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
              <ShieldCheck className="h-4 w-4" />
              Privacy & Data Protection
            </div>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl">
              Privacy
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              Your privacy matters to us. This Privacy Policy explains how
              QRasoi collects, uses, protects, and manages your information when
              using our platform and services.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              Last Updated: May 2026
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
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

            {/* Additional Section */}
            <div className="rounded-[32px] border border-orange-100 bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-white shadow-2xl">
              <h2 className="text-3xl font-black">
                Your Trust Is Important To Us
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-orange-50">
                QRasoi is committed to maintaining transparency, protecting
                restaurant data, and ensuring secure digital operations for
                businesses of all sizes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-xl">
                  Secure Infrastructure
                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-xl">
                  Encrypted Data
                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-xl">
                  Responsible Data Usage
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-[28px] border border-orange-100 bg-white p-8 shadow-lg">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Questions About Privacy?
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Contact our support team for any questions regarding privacy
                    and data handling practices.
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
