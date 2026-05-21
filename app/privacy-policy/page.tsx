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
        "We collect information such as restaurant details, user accounts, billing data, device information, and usage analytics to provide and improve our services.",
    },
    {
      icon: Lock,
      title: "How We Protect Your Data",
      content:
        "We use secure servers, encryption, authentication systems, and industry-standard security practices to protect your personal and business information.",
    },
    {
      icon: Eye,
      title: "How We Use Information",
      content:
        "Your information is used to operate QRasoi features including QR ordering, billing, analytics, customer management, and support services.",
    },
    {
      icon: Globe,
      title: "Third-Party Services",
      content:
        "QRasoi may integrate with payment gateways, analytics tools, and communication providers to enhance platform functionality and restaurant operations.",
    },
    {
      icon: ShieldCheck,
      title: "Data Privacy Commitment",
      content:
        "We never sell your data. Your information is handled responsibly and only used for delivering and improving our services.",
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
