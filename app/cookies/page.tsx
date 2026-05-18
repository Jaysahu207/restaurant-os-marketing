"use client";

import Link from "next/link";
import {
  Cookie,
  ShieldCheck,
  Eye,
  Settings2,
  Database,
  Globe,
  Mail,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function CookiesPolicyPage() {
  const sections = [
    {
      icon: Cookie,
      title: "What Are Cookies?",
      content:
        "Cookies are small text files stored on your device that help websites remember information about your visit, preferences, and activity.",
    },
    {
      icon: Settings2,
      title: "How We Use Cookies",
      content:
        "RestaurantOS uses cookies to improve user experience, maintain secure sessions, analyze platform performance, and personalize website interactions.",
    },
    {
      icon: Database,
      title: "Types Of Cookies We Use",
      content:
        "We may use essential cookies, analytics cookies, security cookies, and functionality cookies to ensure smooth platform operations.",
    },
    {
      icon: Eye,
      title: "Analytics & Performance",
      content:
        "Cookies help us understand how visitors interact with RestaurantOS so we can optimize performance, improve features, and enhance usability.",
    },
    {
      icon: ShieldCheck,
      title: "Your Cookie Choices",
      content:
        "You can manage, disable, or delete cookies through your browser settings. Some features may not work properly if essential cookies are disabled.",
    },
    {
      icon: Globe,
      title: "Third-Party Cookies",
      content:
        "Some third-party services integrated with RestaurantOS, such as analytics or payment providers, may also place cookies on your device.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">
      {/* Background Effects */}
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
              <Cookie className="h-4 w-4" />
              Website Cookies & Tracking
            </div>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl">
              Cookies
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
              This Cookies Policy explains how RestaurantOS uses cookies and
              similar technologies to improve your browsing experience and
              platform performance.
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

            {/* Highlight Section */}
            <div className="rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-white shadow-2xl">
              <h2 className="text-3xl font-black">
                Transparency & User Control
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-orange-50">
                RestaurantOS values transparency and user privacy. We aim to use
                cookies responsibly to improve security, functionality, and user
                experience.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  "Secure Browsing",
                  "Better User Experience",
                  "Performance Optimization",
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
                    Questions About Cookies?
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Reach out to our support team if you need more information
                    regarding cookies or tracking technologies.
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
