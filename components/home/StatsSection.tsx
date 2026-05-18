"use client";

import React from "react";
import {
  TrendingUp,
  Users,
  ShoppingBag,
  Star,
  Clock3,
  Wallet,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Restaurants Using Our Platform",
    description:
      "Trusted by cafes, restaurants, cloud kitchens, and food chains.",
  },
  {
    icon: ShoppingBag,
    value: "50K+",
    label: "Orders Processed Daily",
    description: "Handle thousands of customer orders seamlessly every day.",
  },

  {
    icon: Clock3,
    value: "70%",
    label: "Faster Order Processing",
    description: "Reduce waiting time with smart kitchen and order automation.",
  },
  {
    icon: TrendingUp,
    value: "35%",
    label: "Average Revenue Growth",
    description:
      "Restaurants see better efficiency and increased customer retention.",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Satisfaction",
    description: "Highly rated by restaurant owners and customers alike.",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200 blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Platform Statistics
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Powering Modern Restaurants At Scale
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Restaurant OS helps restaurants automate operations, improve
            customer experience, and grow faster with powerful technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Value */}
                <div className="relative z-10">
                  <h3 className="text-5xl font-extrabold text-gray-900">
                    {stat.value}
                  </h3>

                  <p className="mt-4 text-xl font-semibold text-gray-800">
                    {stat.label}
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-500 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 shadow-2xl">
          <div className="grid items-center gap-10 p-10 md:p-14 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <h3 className="text-4xl font-extrabold leading-tight text-white">
                Transform Your Restaurant With Smart Automation
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-orange-50">
                From QR ordering and billing to analytics and inventory
                management, Restaurant OS helps you run your business more
                efficiently and profitably.
              </p>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <h4 className="text-4xl font-extrabold text-white">24/7</h4>

                <p className="mt-2 text-orange-50">
                  Real-Time Restaurant Monitoring
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <h4 className="text-4xl font-extrabold text-white">100%</h4>

                <p className="mt-2 text-orange-50">
                  Cloud-Based Secure Platform
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <h4 className="text-4xl font-extrabold text-white">5 Min</h4>

                <p className="mt-2 text-orange-50">Quick Restaurant Setup</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <h4 className="text-4xl font-extrabold text-white">99.9%</h4>

                <p className="mt-2 text-orange-50">Reliable System Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
