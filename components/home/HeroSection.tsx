"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  QrCode,
  BarChart3,
  Receipt,
  ChefHat,
  Star,
  CheckCircle2,
  Users,
} from "lucide-react";
import { APP_LINKS } from "../../app/constants/links";
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white min-h-screen flex items-center"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />

        {/* Mouse Glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-orange-300/20 blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />

        {/* Animated Blobs */}
        <div className="absolute top-10 -left-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-blob" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-orange-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731610_1px,transparent_1px),linear-gradient(to_bottom,#f9731610_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT ================= */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 backdrop-blur-md px-5 py-2 shadow-sm animate-fade-up">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />

              <span className="text-sm font-semibold text-orange-700">
                India’s Smart Restaurant Operating System
              </span>
            </div>

            {/* Heading */}
            <div className="mt-8 space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight animate-fade-up animation-delay-200">
                <span className="text-gray-900">
                  Run Your
                  <br />
                  Restaurant
                </span>

                <br />

                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Smarter & Faster
                </span>
              </h1>

              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-600 animate-fade-up animation-delay-400">
                Powerful QR ordering, billing, kitchen management, analytics,
                inventory tracking, and customer engagement — all in one modern
                platform built for restaurants.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4 animate-fade-up animation-delay-600">
              {[
                "QR Menu & Ordering",
                "Real-time Kitchen Panel",
                "Smart Billing & GST",
                "Restaurant Analytics",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur-md border border-orange-100 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />

                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-5 animate-fade-up animation-delay-800">
              {/* Primary CTA */}
              <a
                href={APP_LINKS.redirectToApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[320px]"
              >
                <button className="group relative flex h-[76px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 px-8 font-bold text-white shadow-[0_10px_40px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(249,115,22,0.45)]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/20 blur-xl"></div>
                  </div>

                  <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </button>
              </a>

              {/* Demo Button */}
              <button className="group relative flex h-[76px] w-full sm:w-[320px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-orange-200/80 bg-white/80 px-8 font-semibold text-gray-800 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-2xl">
                {/* Background Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Play Icon */}
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-5 w-5 fill-orange-600" />
                </div>

                <div className="relative z-10 flex flex-col items-start">
                  <span className="text-base font-bold">Watch Demo</span>
                  <span className="text-xs text-gray-500">
                    See how RestaurantOS works
                  </span>
                </div>
              </button>
            </div>
            {/* Trusted */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500 animate-fade-up animation-delay-1000">
              <div>
                <span className="font-black text-2xl text-orange-600">AI</span>{" "}
                Powered Automation
              </div>

              <div>
                <span className="font-black text-2xl text-orange-600">QR</span>{" "}
                Based Ordering
              </div>

              <div>
                <span className="font-black text-2xl text-orange-600">
                  24/7
                </span>{" "}
                Cloud Access
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main Dashboard */}
            <div className="relative w-full max-w-2xl">
              <div className="rounded-[36px] border border-orange-100 bg-white/70 backdrop-blur-2xl shadow-[0_30px_80px_rgba(249,115,22,0.15)] p-5">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold text-orange-700">
                    RestaurantOS Dashboard
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="mt-6 space-y-5">
                  {/* Top Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        icon: QrCode,
                        title: "QR Orders",
                        value: "856",
                      },
                      {
                        icon: ChefHat,
                        title: "Kitchen",
                        value: "Live",
                      },
                      {
                        icon: BarChart3,
                        title: "Revenue",
                        value: "₹48K",
                      },
                    ].map((card, index) => {
                      const Icon = card.icon;

                      return (
                        <div
                          key={index}
                          className="rounded-2xl bg-orange-50 p-4 border border-orange-100"
                        >
                          <Icon className="w-7 h-7 text-orange-600 mb-3" />

                          <p className="text-sm text-gray-500">{card.title}</p>

                          <h3 className="text-2xl font-black text-gray-900 mt-1">
                            {card.value}
                          </h3>
                        </div>
                      );
                    })}
                  </div>

                  {/* Graph */}
                  <div className="rounded-3xl border border-orange-100 bg-white p-6">
                    <div className="flex items-end gap-3 h-44">
                      {[45, 80, 55, 90, 70, 110, 95].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-2xl bg-gradient-to-t from-orange-500 to-orange-300 animate-grow"
                          style={{
                            height: `${height}px`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between text-xs text-gray-400">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          Live Restaurant Activity
                        </p>

                        <h3 className="mt-1 text-3xl font-black text-gray-900">
                          128 Active Orders
                        </h3>
                      </div>

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
                        <Users className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -z-10 inset-0 bg-orange-300/20 blur-3xl rounded-full scale-90" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-orange-600 uppercase">
            Scroll
          </span>

          <div className="w-6 h-10 rounded-full border-2 border-orange-400 flex justify-center">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes grow {
          from {
            height: 0;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-grow {
          animation: grow 1s ease forwards;
        }

        .animate-scroll {
          animation: scroll 1.5s infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
