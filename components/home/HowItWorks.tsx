"use client";

import React from "react";
import {
  QrCode,
  ShoppingCart,
  ChefHat,
  CreditCard,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import { APP_LINKS } from "../../app/constants/links";

const steps = [
  {
    id: "01",
    title: "Customer Scans QR",
    description:
      "Customers scan the table QR code to instantly open your digital menu without downloading any app.",
    icon: QrCode,
  },
  {
    id: "02",
    title: "Place Orders Easily",
    description:
      "Customers browse categories, customize items, and place orders directly from their phones.",
    icon: ShoppingCart,
  },
  {
    id: "03",
    title: "Kitchen Receives Order",
    description:
      "Orders are sent instantly to the kitchen dashboard for faster preparation and smooth workflow.",
    icon: ChefHat,
  },
  {
    id: "04",
    title: "Accept Payments",
    description:
      "Customers can pay using UPI, cash, or QR code-based payments, all integrated seamlessly into your system.",
    icon: CreditCard,
  },
  {
    id: "05",
    title: "Track Everything",
    description:
      "Monitor sales, orders, inventory, staff performance, and customer insights from one dashboard.",
    icon: BarChart3,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            <CheckCircle2 className="h-4 w-4" />
            Simple & Powerful Workflow
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            How Our QRasoi Works to Transform Your Restaurant Operations
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            QRasoi is the all-in-one restaurant management platform that helps
            you run your business more efficiently and profitably. With our
            suite of tools for QR ordering, billing, analytics, and inventory
            management, you can streamline operations, boost sales, and create
            an unforgettable dining experience for your customers.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Step Number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>

                  <span className="text-3xl font-extrabold text-orange-100">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-20 -right-5 hidden h-1 w-10 bg-gradient-to-r from-orange-300 to-orange-100 lg:block"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href={APP_LINKS.redirectToApp}
            rel="noopener noreferrer"
            className="w-full sm:w-[320px]"
          >
            <button className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300">
              Start Managing Your Restaurant
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
