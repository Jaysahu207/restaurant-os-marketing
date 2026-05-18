"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
  Headphones,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import API from "../config/axios";
import { indiaStatesAndCities } from "@/app/constants/indiaData";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    restaurantName: "",
    state: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post("/api/contact/create", formData);
      console.log(formData);
      toast.success("Message sent successfully!");

      console.log(response.data);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        restaurantName: "",
        state: "",
        city: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);

      toast.error(error?.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "state") {
      setFormData({
        ...formData,
        state: value,
        city: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                <MessageCircle className="h-4 w-4" />
                Contact RestaurantOS
              </div>

              <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl">
                Let’s Build The Future Of
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Restaurant Management
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
                Have questions about RestaurantOS? Want a demo or custom
                solution for your restaurant business? Our team is here to help
                you grow faster with modern restaurant technology.
              </p>

              {/* Contact Info */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    value: "support@restaurantos.com",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    value: "+91 98765 43210",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    value: "Madhya Pradesh, India",
                  },
                  {
                    icon: Clock3,
                    title: "Support Hours",
                    value: "24/7 Customer Assistance",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-4 rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.value}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                  required
                />
              </div>

              {/* Restaurant */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Restaurant Name
                </label>

                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder="Your Restaurant"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                  required
                />
              </div>

              {/* State + City */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* State */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    State
                  </label>

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                    required
                  >
                    <option value="">Select State</option>

                    {indiaStatesAndCities.map((item) => (
                      <option key={item.state} value={item.state}>
                        {item.state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    City
                  </label>

                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                    required
                  >
                    <option value="">Select City</option>

                    {indiaStatesAndCities
                      .find((item) => item.state === formData.state)
                      ?.cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your restaurant requirements..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                {loading ? "Sending..." : "Send Message"}

                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[40px] border border-orange-100 bg-white/80 p-10 shadow-xl backdrop-blur-xl md:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                <Globe className="h-4 w-4" />
                Why Choose RestaurantOS
              </div>

              <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
                Built For Modern Restaurants
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                From QR ordering and billing to kitchen management and
                analytics, RestaurantOS helps restaurants simplify operations
                and improve customer experience.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                "Fast QR Ordering Experience",
                "Real-Time Restaurant Analytics",
                "24/7 Dedicated Customer Support",
                "Cloud-Based Restaurant Dashboard",
                "Secure Online Payments",
                "Easy Staff & Kitchen Management",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50 p-5"
                >
                  <CheckCircle2 className="h-6 w-6 text-orange-600" />

                  <span className="font-semibold text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300"
              >
                Explore Pricing
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
