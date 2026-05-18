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
        "By accessing or using RestaurantOS, you agree to comply with these Terms of Service and all applicable laws and regulations.",
    },
    {
      icon: ShieldCheck,
      title: "Account Responsibilities",
      content:
        "You are responsible for maintaining the security of your account credentials and ensuring all information provided is accurate and up to date.",
    },
    {
      icon: CreditCard,
      title: "Subscriptions & Payments",
      content:
        "Certain RestaurantOS features may require paid subscriptions. Subscription fees, billing cycles, and payment terms will be clearly communicated before purchase.",
    },
    {
      icon: Ban,
      title: "Prohibited Usage",
      content:
        "Users may not misuse the platform, attempt unauthorized access, disrupt services, or use RestaurantOS for unlawful activities.",
    },
    {
      icon: Scale,
      title: "Service Availability",
      content:
        "We strive to maintain reliable uptime and uninterrupted access, but occasional maintenance, updates, or technical issues may temporarily affect services.",
    },
    {
      icon: AlertTriangle,
      title: "Limitation Of Liability",
      content:
        "RestaurantOS is provided on an 'as-is' basis. We are not liable for indirect damages, business interruptions, or losses arising from platform usage.",
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
