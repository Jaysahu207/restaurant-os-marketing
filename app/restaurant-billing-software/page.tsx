import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Restaurant Billing Software | QRasoi",
    description:
        "Restaurant billing software with GST billing, invoice generation, payment tracking, KOT integration and detailed sales reports. Simplify restaurant billing with QRasoi.",
    keywords: [
        "Restaurant Billing Software",
        "GST Billing Software",
        "Restaurant Invoice Software",
        "Restaurant POS Billing",
        "Billing Software for Restaurants",
        "Restaurant Management Software",
    ],
    openGraph: {
        title: "Restaurant Billing Software | QRasoi",
        description:
            "Fast and accurate restaurant billing software with GST support, invoices, reports and payment management.",
        url: "https://qrasoi.in/restaurant-billing-software",
        siteName: "QRasoi",
        type: "website",
    },
};

export default function RestaurantBillingSoftwarePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "QRasoi Restaurant Billing Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
            "Restaurant billing software with GST billing, invoice generation, payment tracking and reporting.",
        url: "https://qrasoi.in/restaurant-billing-software",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />

            <main className="bg-white">
                {/* Hero */}
                <section className="bg-gradient-to-br from-orange-50 to-white py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium mb-6">
                            Restaurant Billing Software
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Restaurant Billing Software with GST Support
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-4xl leading-relaxed">
                            Generate invoices in seconds, manage payments, track sales,
                            and simplify restaurant billing operations with QRasoi.
                            Built for restaurants, cafes, cloud kitchens, and food courts.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700"
                            >
                                Book Free Demo
                            </Link>

                            <Link
                                href="/pricing"
                                className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Powerful Billing Features
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "GST Billing",
                                    desc: "Generate GST compliant invoices instantly.",
                                },
                                {
                                    title: "Invoice Generation",
                                    desc: "Create professional invoices within seconds.",
                                },
                                {
                                    title: "Payment Tracking",
                                    desc: "Track cash, UPI, cards and digital payments.",
                                },
                                {
                                    title: "Sales Reports",
                                    desc: "View daily, weekly and monthly sales reports.",
                                },
                            ].map((feature) => (
                                <div
                                    key={feature.title}
                                    className="border rounded-2xl p-6 hover:shadow-lg transition"
                                >
                                    <h3 className="text-xl font-semibold mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-8">
                            Simplify Restaurant Billing Operations
                        </h2>

                        <p className="text-gray-700 leading-8 mb-6">
                            Restaurant billing is one of the most critical parts of
                            restaurant operations. Delays, manual calculations and billing
                            mistakes can negatively impact customer experience and revenue.
                        </p>

                        <p className="text-gray-700 leading-8 mb-6">
                            QRasoi Restaurant Billing Software automates invoice generation,
                            tax calculations, payment tracking and reporting. Staff can
                            create bills quickly while customers enjoy a faster checkout
                            experience.
                        </p>

                        <p className="text-gray-700 leading-8">
                            Whether you operate a small cafe or a multi-outlet restaurant
                            chain, QRasoi helps maintain billing accuracy while providing
                            detailed financial insights.
                        </p>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Benefits of QRasoi Billing Software
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Faster Checkout
                                </h3>
                                <p className="text-gray-600">
                                    Reduce customer waiting times with quick invoice generation.
                                </p>
                            </div>

                            <div className="border rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Accurate Billing
                                </h3>
                                <p className="text-gray-600">
                                    Eliminate manual billing errors and improve accuracy.
                                </p>
                            </div>

                            <div className="border rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Better Reporting
                                </h3>
                                <p className="text-gray-600">
                                    Track sales, revenue and payment data in real time.
                                </p>
                            </div>

                            <div className="border rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    GST Compliance
                                </h3>
                                <p className="text-gray-600">
                                    Generate tax-ready invoices for smoother operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payment Modes */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Multiple Payment Methods
                        </h2>

                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                "Cash",
                                "UPI",
                                "Credit Card",
                                "Debit Card",
                                "Digital Wallets",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="bg-white rounded-xl p-5 text-center shadow-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Does QRasoi support GST billing?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Yes. QRasoi supports GST compliant billing and invoices.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Can I print invoices?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Yes. QRasoi supports invoice printing for restaurants.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Can I track payment methods?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Yes. Track cash, UPI, card and digital wallet payments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Upgrade Your Restaurant Billing Process
                        </h2>

                        <p className="text-lg text-gray-600 mb-8">
                            Manage invoices, payments and sales reports with one simple
                            platform.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700"
                        >
                            Schedule a Free Demo
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}