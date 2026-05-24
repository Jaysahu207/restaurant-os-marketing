"use client";

import React from "react";
import { Check, Star, Sparkles, ArrowRight, BadgeCheck } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹299",
    oldPrice: "₹599",
    description:
      "Perfect for cafes, food stalls, and small restaurants starting digital ordering.",
    popular: false,

    features: [
      "QR Code Ordering",
      "Digital Menu",
      "Basic Billing System",
      "UPI Payment Support",
      "Order Management",
      "1 Admin Account",
      "Basic Analytics",
      "14 Days Free Trial",

    ],
  },

  {
    name: "Pro",
    price: "₹699",
    oldPrice: "₹1499",
    description:
      "Best for growing restaurants that need smart management and automation.",
    popular: true,

    features: [
      "Everything in Starter",
      "Advanced Billing & GST",
      "Kitchen Dashboard",
      "Inventory Management",
      "Customer CRM",
      "Marketing Tools",
      "Staff Management",
      "Advanced Analytics",
      "Multiple Roles & Permissions",
      "Priority Support",
    ],
  },
];
const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-24"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            <Sparkles className="h-4 w-4" />
            Flexible Pricing Plans
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Simple Pricing For Every Restaurant
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Choose the perfect plan for your restaurant business. Scale your
            operations with powerful tools designed for modern restaurants.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[32px] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular
                ? "border-orange-500 shadow-orange-100"
                : "border-orange-100"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div>
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${plan.popular
                    ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white"
                    : "bg-orange-100 text-orange-600"
                    }`}
                >
                  <Star className="h-8 w-8" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {plan.name}
                </h3>

                <p className="mt-3 text-gray-600">{plan.description}</p>

                <div className="mt-8 flex items-end gap-3">
                  {plan.oldPrice && (
                    <span className="text-2xl font-medium text-gray-400 line-through">
                      {plan.oldPrice}
                    </span>
                  )}

                  <span className="text-5xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-gray-500">/month</span>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                🚀 Limited Time Launch Offer
              </div>
              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Check className="h-4 w-4" />
                    </div>

                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className={`group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-lg font-semibold transition-all duration-300 ${plan.popular
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:scale-[1.02] hover:shadow-orange-300"
                  : "border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100"
                  }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Bottom Label */}
              {plan.popular && (
                <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-orange-600">
                  <BadgeCheck className="h-4 w-4" />
                  Recommended for most restaurants
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need custom solutions for your restaurant chain or franchise?
          </p>

          <button className="mt-4 text-lg font-semibold text-orange-600 transition hover:text-orange-700">
            Talk To Our Team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
