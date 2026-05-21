"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
  HelpCircle,
  FileText,
  Shield,
  ChevronRight,
  Headphones,
  LifeBuoy,
  Sparkles,
} from "lucide-react";

export default function SupportPage() {
  const supportCards = [
    {
      title: "Help Center",
      description:
        "Browse guides, tutorials, setup instructions, and FAQs for RestaurantOS.",
      icon: HelpCircle,
      action: "Browse Articles",
      href: "#",
    },
    {
      title: "Live Chat Support",
      description:
        "Chat with our support team for instant help with your restaurant operations.",
      icon: MessageCircle,
      action: "Start Chat",
      href: "#",
    },
    {
      title: "Technical Support",
      description:
        "Facing technical issues? Our technical team is available to assist you.",
      icon: Headphones,
      action: "Get Technical Help",
      href: "#",
    },
    {
      title: "Billing & Payments",
      description:
        "Need help with subscriptions, invoices, or payment issues? We’re here.",
      icon: Shield,
      action: "Manage Billing",
      href: "#",
    },
  ];

  const faqs = [
    "How do I set up QR ordering?",
    "How can I add restaurant tables?",
    "Can I manage multiple branches?",
    "How do I connect Razorpay payments?",
    "How can I print thermal invoices?",
    "How do I manage staff accounts?",
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

      {/* HERO */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
              <Sparkles className="h-4 w-4" />
              QRasoi Support Center
            </div>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-7xl">
              We’re Here To
              <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Help Your Restaurant
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              Get support for setup, billing, QR ordering, payments, inventory,
              analytics, and restaurant management. Our team is ready to help
              you succeed.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Support
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {supportCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[30px] border border-orange-100 bg-white/90 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-gray-900">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {card.description}
                  </p>

                  <a
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 hover:gap-3"
                  >
                    {card.action}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK FAQ */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] border border-orange-100 bg-white/90 p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl">
                <FileText className="h-10 w-10" />
              </div>

              <h2 className="mt-6 text-4xl font-black text-gray-900">
                Popular Support Topics
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                Quick access to the most common questions and setup guides.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  className="group flex items-center justify-between rounded-2xl border border-orange-100 bg-orange-50/50 px-6 py-5 text-left transition-all duration-300 hover:border-orange-200 hover:bg-orange-100/50"
                >
                  <span className="font-semibold text-gray-800">{faq}</span>

                  <ChevronRight className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-support" className="relative z-10 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <div className="rounded-[36px] border border-orange-100 bg-white/90 p-8 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                <LifeBuoy className="h-4 w-4" />
                Contact Our Team
              </div>

              <h2 className="mt-6 text-4xl font-black text-gray-900">
                Need Personalized Help?
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reach out to our support specialists for assistance with setup,
                onboarding, billing, integrations, and technical issues.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Mail className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email Support</p>
                    <h4 className="text-lg font-bold text-gray-900">
                      support@qrasoi.com
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Phone className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Phone Support</p>
                    <h4 className="text-lg font-bold text-gray-900">
                      +91 98765 43210
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Clock className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Support Hours</p>
                    <h4 className="text-lg font-bold text-gray-900">
                      24/7 Customer Assistance
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT */}
            {/* <div className="rounded-[36px] border border-orange-100 bg-white/90 p-8 shadow-2xl backdrop-blur-xl md:p-10">
              <h3 className="text-3xl font-black text-gray-900">
                Send Us A Message
              </h3>

              <p className="mt-3 text-gray-600">
                Fill out the form below and our team will get back to you soon.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 rounded-2xl border border-gray-200 px-5 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-14 rounded-2xl border border-gray-200 px-5 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Restaurant Name"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />

                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Submit Request
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
