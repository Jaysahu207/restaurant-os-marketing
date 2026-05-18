"use client";

import Link from "next/link";
import {
  Briefcase,
  HeartHandshake,
  Rocket,
  Globe,
  Coffee,
  Laptop,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";

const openings = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote / India",
    experience: "1-3 Years",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote / India",
    experience: "1-3 Years",
  },
  {
    title: "UI/UX Designer",
    type: "Internship",
    location: "Remote",
    experience: "0-1 Year",
  },
  {
    title: "Customer Success Executive",
    type: "Full Time",
    location: "Bhopal, India",
    experience: "1+ Years",
  },
];

const perks = [
  {
    icon: Laptop,
    title: "Remote Friendly",
    description: "Work from anywhere with flexible schedules.",
  },
  {
    icon: Rocket,
    title: "Fast Growth",
    description: "Build products used by real businesses.",
  },
  {
    icon: Coffee,
    title: "Startup Culture",
    description: "Collaborative, innovative, and energetic team.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Team",
    description: "We grow together and help each other succeed.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-24 lg:py-32">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
              <Sparkles className="h-4 w-4" />
              Join The RestaurantOS Team
            </div>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-7xl">
              Build The Future Of{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Restaurant Technology
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              We are building modern tools that help restaurants simplify
              operations, automate workflows, and deliver amazing customer
              experiences.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#openings"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-300"
              >
                View Open Roles
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="rounded-2xl border border-orange-200 bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition-all duration-300 hover:border-orange-400 hover:bg-orange-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Why Work With Us?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              At RestaurantOS, you’ll work on meaningful products, collaborate
              with passionate people, and help shape the future of digital
              restaurant operations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {perks.map((perk, index) => {
              const Icon = perk.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {perk.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section
        id="openings"
        className="bg-gradient-to-b from-orange-50 to-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              <Briefcase className="h-4 w-4" />
              Current Openings
            </div>

            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Open Positions
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Explore opportunities and become part of a growing startup focused
              on innovation and restaurant automation.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {job.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-orange-500" />
                        {job.type}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        {job.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-orange-500" />
                        {job.experience}
                      </div>
                    </div>
                  </div>

                  <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-300">
                    Apply Now
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Our Hiring Process
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Simple, transparent, and focused on finding the right people.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              "Application Review",
              "Introductory Call",
              "Technical / Skill Round",
              "Final Offer",
            ].map((step, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-2xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">{step}</h3>

                <CheckCircle2 className="mx-auto mt-4 h-6 w-6 text-orange-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center text-white shadow-2xl">
            <Globe className="mx-auto h-16 w-16" />

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Ready To Build Something Amazing?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-100">
              Join our growing team and help restaurants embrace the future of
              technology and automation.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:careers@restaurantos.com"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-orange-600 transition-all duration-300 hover:scale-105"
              >
                careers@restaurantos.com
              </a>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Contact HR Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
