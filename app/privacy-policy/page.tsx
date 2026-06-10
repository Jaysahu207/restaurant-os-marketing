"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
  ArrowRight,
  CheckCircle2,
  Settings2,
  ShieldAlert,
  ShieldQuestion,

  ArrowLeft,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content:
        "QRasoi collects information necessary to provide restaurant management services, including restaurant details, business information, user account details, billing information, device information, and usage analytics. When users connect Google services, QRasoi may collect Google account profile information and OAuth credentials required to enable authorized Google integrations.",
    },

    {
      icon: Database,
      title: "Google User Data We Access",
      content:
        "When a restaurant owner signs in with Google or connects a Google Account, QRasoi may access the user's name, email address, profile picture, unique Google Account identifier, and OAuth credentials required for authentication and authorized Gmail functionality. QRasoi does not access Gmail inbox messages, email history, attachments, contacts, Google Calendar data, Google Drive files, or any other Google user data beyond the permissions explicitly granted by the user.",
    },

    {
      icon: Eye,
      title: "How We Use Information",
      content:
        "Information collected by QRasoi is used to provide and improve restaurant operations, including QR ordering, billing, customer management, analytics, support services, account authentication, and platform functionality. Google user data is used solely for user authentication, account management, secure login, and enabling restaurant owners to send authorized customer communications through their connected Google account.",
    },

    {
      icon: ShieldCheck,
      title: "Google API Services User Data & Limited Use Disclosure",
      content:
        "QRasoi's use and transfer of information received from Google APIs complies with the Google API Services User Data Policy, including the Limited Use requirements. Information obtained through Google APIs is only used to provide user-requested functionality and is never used for advertising, user profiling, creditworthiness determination, data brokerage, or any purpose unrelated to the operation of QRasoi services.",
    },

    {
      icon: Eye,
      title: "Gmail Functionality & Data Access Restrictions",
      content:
        "QRasoi uses Google's Gmail API exclusively to allow restaurant owners to send customer communications directly from their own connected Google account. These communications may include invoices, receipts, order confirmations, billing notifications, customer support messages, operational notifications, and promotional offers initiated by the restaurant owner. QRasoi does not read, monitor, analyze, process, store, or access Gmail inbox messages, drafts, email history, attachments, or contact lists.",
    },

    {
      icon: Globe,
      title: "Data Sharing Practices",
      content:
        "QRasoi does not sell, rent, trade, or share Google user data with advertisers, marketing platforms, data brokers, or unrelated third parties. Information may only be shared with trusted service providers such as cloud hosting providers, infrastructure providers, payment processors, and technical service providers strictly required to operate QRasoi services. These providers are contractually obligated to protect user data and may only process information on our behalf.",
    },

    {
      icon: Lock,
      title: "Data Storage & Protection",
      content:
        "QRasoi protects user information using industry-standard security measures including HTTPS encryption, encrypted storage, secure access controls, authentication safeguards, server monitoring, and restricted personnel access. Google OAuth credentials are stored securely and are accessible only to authorized systems required to provide approved functionality.",
    },

    {
      icon: ShieldCheck,
      title: "Data Retention & Deletion",
      content:
        "QRasoi retains user information and Google OAuth credentials only for as long as necessary to provide services, maintain account functionality, comply with legal obligations, resolve disputes, and enforce agreements. Users may request deletion of their account and associated data by contacting support@qrasoi.in. Upon verification, applicable user data and stored OAuth credentials will be permanently removed unless retention is required by law.",
    },

    {
      icon: ShieldCheck,
      title: "Google Account Access Revocation",
      content:
        "Users may revoke QRasoi's access to their Google Account at any time through their QRasoi account settings or directly through Google Account Security settings. Once access is revoked, associated OAuth credentials become invalid and Google-connected functionality, including email sending, will no longer be available.",
    },

    {
      icon: Eye,
      title: "AI & Machine Learning Restrictions",
      content:
        "QRasoi never sells personal information or Google API-derived data. Information obtained through Google APIs is never transferred, shared, or used to train, fine-tune, develop, or improve generalized artificial intelligence models, machine learning models, or automated decision-making systems.",
    },

    {
      icon: Mail,
      title: "Contact & Privacy Requests",
      content:
        "If you have questions regarding privacy, data protection, Google Account permissions, or wish to request deletion of your account or data, please contact us at support@qrasoi.in. We will respond to privacy-related requests within a reasonable timeframe and in accordance with applicable laws.",
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
