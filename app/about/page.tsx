import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { APP_LINKS } from "../../app/constants/links";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-orange-600 shadow-sm transition-all duration-300 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Home
          </Link>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
              Built For Modern Restaurants
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              About
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {" "}
                RestaurantOS
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              RestaurantOS is a modern restaurant operating platform designed to
              simplify ordering, billing, kitchen management, and customer
              experience using smart QR-based technology and automation.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Our Story
            </div>

            <h2 className="text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
              Helping Restaurants Go Digital Faster
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We created RestaurantOS to help restaurants manage daily
              operations more efficiently with modern technology. From QR code
              ordering to billing and real-time order tracking, our goal is to
              make restaurant management simpler, faster, and smarter.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Whether it is a small cafe, food truck, cloud kitchen, or a
              multi-outlet restaurant chain, RestaurantOS is built to scale with
              your business.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-black text-orange-600">24/7</h3>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  Customer Support
                </p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-black text-orange-600">100%</h3>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  Cloud Based Platform
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-orange-100 bg-white p-8 shadow-2xl">
              <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-10 text-white">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-orange-100">
                      RestaurantOS Mission
                    </p>

                    <h3 className="mt-3 text-3xl font-black leading-tight">
                      Make Restaurant Operations Simple & Automated
                    </h3>
                  </div>

                  <p className="text-lg leading-relaxed text-orange-50">
                    We believe restaurant owners should focus more on customer
                    experience and food quality — not operational complexity.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                      <h4 className="text-2xl font-black">QR</h4>
                      <p className="mt-1 text-sm text-orange-100">
                        Smart Ordering
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                      <h4 className="text-2xl font-black">AI</h4>
                      <p className="mt-1 text-sm text-orange-100">
                        Insights & Analytics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Our Core Values
            </div>

            <h2 className="text-4xl font-black text-gray-900 sm:text-5xl">
              What Drives Us
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We are focused on building reliable, scalable, and easy-to-use
              technology for restaurants of all sizes.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "Building modern solutions that simplify restaurant management.",
              },
              {
                title: "Reliability",
                description:
                  "Providing stable and secure infrastructure restaurants can trust.",
              },
              {
                title: "Customer First",
                description:
                  "Designing every feature with restaurant owners and customers in mind.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[30px] border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl font-black text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {item.title.charAt(0)}
                </div>

                <h3 className="mt-6 text-2xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-16 text-center text-white shadow-2xl sm:px-16">
            <h2 className="text-4xl font-black sm:text-5xl">
              Ready To Modernize Your Restaurant?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-orange-50">
              Start using RestaurantOS and simplify your restaurant operations
              with QR ordering, billing, analytics, and automation.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={APP_LINKS.redirectToApp}
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-orange-600 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
