"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  Landmark,
  Smartphone,
  Sparkles,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { APP_LINKS } from "@/app/constants/links";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "FAQ", href: "/#faq" },
    ],

    resources: [
      { label: "Blogs", href: "/blogs" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "/support" },
    ],

    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },

      { label: "Privacy", href: "/privacy-policy" },
    ],
  };

  const socials = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-orange-100 bg-gradient-to-b from-white via-orange-50/60 to-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      {/* Scroll Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-orange-300"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* TOP CTA */}
        <div className="mb-16 overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-r from-orange-500 to-orange-600 p-8 shadow-2xl lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Restaurant Growth Platform
              </div>

              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Ready To Modernize Your Restaurant?
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-orange-50">
                Simplify ordering, billing, analytics, and restaurant operations
                with one powerful system built for modern food businesses.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href={APP_LINKS.redirectToApp}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl">
                <svg
                  className="h-7 w-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </div>

              <div>
                <h3 className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-2xl font-black text-transparent">
                  RestaurantOS
                </h3>

                <p className="text-sm font-semibold text-orange-600">
                  Smart Restaurant Platform
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-gray-600">
              RestaurantOS helps restaurants manage QR ordering, billing,
              kitchen workflows, payments, analytics, and customer experiences
              from one modern dashboard.
            </p>

            {/* CONTACT */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Mail className="h-4 w-4" />
                </div>
                support@restaurantos.com
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Phone className="h-4 w-4" />
                </div>
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <MapPin className="h-4 w-4" />
                </div>
                India 🇮🇳
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-wider text-gray-900">
              Product
            </h4>

            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-orange-600"
                  >
                    <span>{link.label}</span>

                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-wider text-gray-900">
              Resources
            </h4>

            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-orange-600"
                  >
                    <span>{link.label}</span>

                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-wider text-gray-900">
              Company
            </h4>

            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-orange-600"
                  >
                    <span>{link.label}</span>

                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* TRUST */}
            <div className="mt-10">
              <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-gray-900">
                Trusted & Secure
              </h4>

              <div className="space-y-3">
                {[
                  {
                    icon: ShieldCheck,
                    label: "Enterprise Security",
                  },
                  {
                    icon: BadgeCheck,
                    label: "Secure Payments",
                  },
                  {
                    icon: CreditCard,
                    label: "UPI & Card Support",
                  },
                  {
                    icon: Smartphone,
                    label: "Mobile Optimized",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT */}
          <div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-300 hover:text-orange-600"
              >
                Privacy Policy
              </Link>

              <span>•</span>

              <Link
                href="/terms-of-service"
                className="transition-colors duration-300 hover:text-orange-600"
              >
                Terms of Service
              </Link>

              <span>•</span>

              <Link
                href="/cookies"
                className="transition-colors duration-300 hover:text-orange-600"
              >
                Cookie Policy
              </Link>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              © {currentYear}{" "}
              <span className="font-bold text-gray-700">RestaurantOS</span>. All
              rights reserved. Built with ❤️ for modern restaurants worldwide.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:shadow-xl"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
