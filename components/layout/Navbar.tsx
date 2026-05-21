"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { APP_LINKS } from "../../app/constants/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* LOGO */}

            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="Qrasoi Logo"
                width={110}
                height={110}
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                    isActive(link.href)
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <div className="absolute bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
                  )}
                  {!isActive(link.href) && (
                    <div className="absolute bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              ))}
            </nav>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">
              {/* Desktop Buttons */}
              <a
                href={APP_LINKS.redirectToApp}
                className="hidden sm:block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors duration-300"
              >
                Login
              </a>

              <a
                href={APP_LINKS.redirectToApp}
                className="hidden sm:block group relative px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Start Free Trial
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors duration-300"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-105" : "max-h-0"
          }`}
        >
          <nav className="px-4 py-4 space-y-2 bg-white border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <a
                href={APP_LINKS.redirectToApp}
                className="block px-4 py-3 text-center text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Login
              </a>
              <a
                href={APP_LINKS.redirectToApp}
                className="block px-4 py-3 text-center text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
