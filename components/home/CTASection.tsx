"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  QrCode,
  Smartphone,
  ShoppingCart,
  ChefHat,
  CreditCard,
  BellRing,
} from "lucide-react";
import Link from "next/link";
import { APP_LINKS } from "../../app/constants/links";

const CTASection = () => {
  const flowSteps = [
    {
      icon: <QrCode className="h-6 w-6" />,
      title: "Scan QR",
      desc: "Customer scans table QR",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Browse Menu",
      desc: "View digital menu instantly",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Place Order",
      desc: "Add food & customize items",
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Kitchen Receives",
      desc: "Order goes to kitchen screen",
    },
    {
      icon: <BellRing className="h-6 w-6" />,
      title: "Serve Food",
      desc: "Staff gets real-time updates",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Pay Seamlessly",
      desc: "UPI, card, or cash payment",
    },
  ];

  return (
    <section id="cta" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"></div>

      {/* Glow Effects */}
      <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-white/20 bg-white/10 p-8 backdrop-blur-xl md:p-14">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4" />
                Smart QR Ordering Experience
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Transform Your Restaurant Into a
                <span className="block text-orange-100">
                  Modern Digital Experience
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-orange-50">
                Give customers a seamless QR-based food ordering experience
                while automating kitchen operations, billing, and restaurant
                management in one powerful platform.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Contactless QR Ordering",
                  "Kitchen Display System",
                  "Smart Billing & UPI Payments",
                  "Real-Time Restaurant Analytics",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-orange-600 shadow-md">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <span className="text-base font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href={APP_LINKS.redirectToApp}>
                  <button className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-orange-600 shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>

                <button className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* RIGHT VISUAL FLOW */}
            <div className="relative">
              {/* Main Card */}
              <div className="rounded-[32px] border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur-xl">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-500">
                      Restaurant OS
                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-gray-900">
                      QR Ordering Flow
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-orange-100 p-4 text-orange-600">
                    <QrCode className="h-8 w-8" />
                  </div>
                </div>

                {/* Flow Steps */}
                <div className="mt-10 space-y-5">
                  {flowSteps.map((step, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      {/* Step Number */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 font-bold text-white shadow-lg">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">
                          {step.title}
                        </h4>

                        <p className="text-sm text-gray-500">{step.desc}</p>
                      </div>

                      {/* Arrow */}
                      {index !== flowSteps.length - 1 && (
                        <ArrowRight className="h-5 w-5 text-orange-300" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { value: "50%", label: "Faster Orders" },
                    { value: "24/7", label: "Live Tracking" },
                    { value: "100%", label: "Contactless" },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-orange-50 p-4 text-center"
                    >
                      <h4 className="text-2xl font-extrabold text-orange-600">
                        {stat.value}
                      </h4>

                      <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
