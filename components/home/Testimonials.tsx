"use client";

import React from "react";
import { Star, Quote, CheckCircle2, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Restaurant Owner",
    company: "Spice Garden",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "Restaurant OS completely transformed our operations. QR ordering reduced waiter workload and increased customer satisfaction significantly.",
  },
  {
    name: "Priya Verma",
    role: "Cafe Manager",
    company: "Urban Brew Cafe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      "Billing, inventory, and kitchen management are now fully automated. We save hours every day and manage everything from one dashboard.",
  },
  {
    name: "Amit Patel",
    role: "Multi-Outlet Owner",
    company: "FoodHub Restaurants",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    review:
      "The analytics and customer insights helped us improve sales and track performance across all our restaurant branches easily.",
  },
];

const stats = [
  {
    value: "500+",
    label: "Restaurants Using Our Platform",
  },
  {
    value: "99.9%",
    label: "System Uptime",
  },
  {
    value: "50K+",
    label: "Orders Processed Daily",
  },
  {
    value: "4.9/5",
    label: "Customer Satisfaction",
  },
];

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            <CheckCircle2 className="h-4 w-4" />
            Trusted By Restaurants
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Loved By Restaurant Owners
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Thousands of restaurants are using Restaurant OS to automate
            operations, improve customer experience, and grow revenue faster.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-orange-100">
                <Quote className="h-16 w-16" />
              </div>

              {/* Stars */}
              <div className="relative z-10 mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative z-10 text-lg leading-relaxed text-gray-700">
                “{testimonial.review}”
              </p>

              {/* User */}
              <div className="relative z-10 mt-8 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-orange-100"
                />

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-500">{testimonial.role}</p>

                  <p className="text-sm font-medium text-orange-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-8 rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 shadow-2xl md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-extrabold text-white">
                {stat.value}
              </h3>

              <p className="mt-3 text-orange-50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            rel="noopener noreferrer"
            className="w-full sm:w-[320px]"
          >
            <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300">
              Join Growing Restaurants
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
