"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is QRasoi and how does it work?",
    answer:
      "QRasoi is an all-in-one restaurant management platform that helps restaurants manage QR ordering, billing, kitchen operations, payments, analytics, inventory, and customer management from a single dashboard.",
  },
  {
    question: "Do customers need to install an app?",
    answer:
      "No. Customers simply scan the QR code placed on the table and instantly access the digital menu directly in their browser.",
  },
  {
    question: "Can I accept UPI and online payments?",
    answer:
      "Yes. Our platform supports UPI,  cash, QR codes, and online payment gateway integrations for smooth billing and payment processing.",
  },
  {
    question: "Is the system suitable for small restaurants and cafes?",
    answer:
      "Absolutely. Our platform is designed for cafes, food stalls, cloud kitchens, restaurants, and even multi-outlet restaurant chains.",
  },
  {
    question: "Can I manage multiple restaurant branches?",
    answer:
      "Yes. Our Professional and Enterprise plans support multi-outlet management with centralized analytics and reporting.",
  },
  {
    question: "Does QRasoi support inventory management?",
    answer:
      "Yes. You can track stock levels, ingredient usage, wastage, vendors, and inventory reports in real-time.",
  },
  {
    question: "Is onboarding and support included?",
    answer:
      "Yes. We provide onboarding assistance, setup support, and customer support to help you launch your restaurant operations smoothly.",
  },
  {
    question: "Can I customize the menu and branding?",
    answer:
      "Yes. You can customize menus, categories, restaurant branding, themes, banners, and much more according to your business needs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            <Sparkles className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Find answers to common questions about QRasoi, pricing, onboarding,
            features, and restaurant management automation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen ? "border-orange-300 shadow-lg" : "border-orange-100"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full relative z-10 items-center justify-between gap-5 p-6 text-left md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isOpen
                          ? "bg-orange-500 text-white"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      <HelpCircle className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-orange-500 text-white"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="ml-16 border-l-2 border-orange-100 pl-6">
                      <p className="leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-2xl rounded-[32px] border border-orange-100 bg-white p-10 shadow-lg">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
              <MessageCircle className="h-10 w-10" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              Still Have Questions?
            </h3>

            <p className="mt-4 text-lg text-gray-600">
              Our team is here to help you understand how QRasoi can transform
              your restaurant operations.
            </p>
            <Link href={"/contact"}>
              <button className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
