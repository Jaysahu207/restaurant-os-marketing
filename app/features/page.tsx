"use client";

import React from "react";
import {
  QrCode,
  Wallet,
  BarChart3,
  Users,
  ClipboardList,
  BellRing,
  ShieldCheck,
  Smartphone,
  ChefHat,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Ordering",
    description:
      "Customers scan table QR codes to browse menus and place orders instantly without waiting for staff.",
  },
  {
    icon: Wallet,
    title: "Smart Billing & Payments",
    description:
      "Accept UPI, cash, QR codes, and online payments with fast invoice generation and payment tracking.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track sales, profits, popular items, customer trends, and restaurant performance from one dashboard.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Build loyalty programs, manage customer history, and increase repeat orders with CRM features.",
  },
  {
    icon: ClipboardList,
    title: "Inventory Management",
    description:
      "Monitor stock levels, ingredient usage, wastage, and supplier management with automation tools.",
  },
  {
    icon: BellRing,
    title: "Kitchen Order Alerts",
    description:
      "Orders instantly appear in the kitchen dashboard with live preparation status updates.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Control staff permissions securely for admins, managers, cashiers, and kitchen teams.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Use your QRasoi seamlessly on mobile, tablet, desktop, and POS devices.",
  },
  {
    icon: ChefHat,
    title: "Complete Restaurant Automation",
    description:
      "Manage your entire restaurant operation from ordering and billing to analytics and staff management.",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-24">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200 blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Powerful Features
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Everything You Need To Run Your Restaurant
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            A complete Restaurant Operating System designed to automate
            operations, improve customer experience, and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-500 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
