"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  Server,
  Eye,
  KeyRound,
  Cloud,
  Fingerprint,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All sensitive restaurant and customer data is encrypted during transmission and storage.",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    description:
      "Your restaurant data is securely stored using industry-standard cloud infrastructure.",
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description:
      "Our servers are monitored 24/7 with automatic backups and uptime monitoring.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access",
    description:
      "Control who can access billing, kitchen operations, analytics, and admin settings.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description:
      "We continuously monitor systems to detect suspicious activity and security threats.",
  },
  {
    icon: Fingerprint,
    title: "Authentication Protection",
    description:
      "Secure authentication systems help protect restaurant accounts and sensitive operations.",
  },
];

const complianceItems = [
  "Secure Payment Processing",
  "Encrypted API Communication",
  "Protected Customer Information",
  "Cloud Infrastructure Security",
  "Automated Data Backups",
  "Access Control Management",
];

export default function SecurityPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-24 lg:py-32">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
              <Sparkles className="h-4 w-4" />
              Enterprise-Grade Security
            </div>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-7xl">
              Your Restaurant Data{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Protected
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Security and reliability are built into every part of RestaurantOS
              to help restaurants operate confidently and securely.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-300"
              >
                Contact Security Team
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/privacy"
                className="rounded-2xl border border-orange-200 bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition-all duration-300 hover:border-orange-400 hover:bg-orange-50"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Security First Architecture
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We use modern security practices and infrastructure to protect
              your business operations and customer information.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                <BadgeCheck className="h-4 w-4" />
                Security Standards
              </div>

              <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
                Built With Modern Security Practices
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                RestaurantOS is designed with secure infrastructure, encrypted
                communication, protected authentication systems, and reliable
                operational monitoring.
              </p>

              <div className="mt-10 space-y-4">
                {complianceItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-5 py-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-6 w-6 text-orange-500" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-orange-100 bg-white p-10 shadow-2xl">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                  <ShieldCheck className="h-12 w-12" />
                </div>

                <h3 className="mt-8 text-3xl font-black text-gray-900">
                  Trusted Infrastructure
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  We continuously improve our infrastructure and security
                  systems to provide restaurants with a safe, stable, and
                  reliable platform experience.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-orange-50 p-5">
                    <Cloud className="h-8 w-8 text-orange-500" />

                    <h4 className="mt-4 text-lg font-bold text-gray-900">
                      Cloud Security
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">
                      Secure cloud-based deployment and infrastructure
                      monitoring.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-5">
                    <Lock className="h-8 w-8 text-orange-500" />

                    <h4 className="mt-4 text-lg font-bold text-gray-900">
                      Encrypted Access
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">
                      Protected admin access and secure account authentication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Glow */}
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center text-white shadow-2xl">
            <ShieldCheck className="mx-auto h-16 w-16" />

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Security You Can Trust
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-100">
              Protect your restaurant operations, customer data, and business
              workflows with RestaurantOS.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-orange-600 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>

              <Link
                href="/pricing"
                className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
