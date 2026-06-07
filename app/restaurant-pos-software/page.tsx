import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Restaurant POS Software | QRasoi",
    description:
        "Modern restaurant POS software with billing, KOT, QR ordering, inventory management, analytics, and customer management. Simplify restaurant operations with QRasoi.",
    keywords: [
        "Restaurant POS Software",
        "Restaurant Billing Software",
        "POS for Restaurants",
        "Restaurant Management Software",
        "QR Ordering System",
        "Restaurant Software India",
    ],
    openGraph: {
        title: "Restaurant POS Software | QRasoi",
        description:
            "Manage billing, orders, inventory, and analytics with QRasoi Restaurant POS Software.",
        url: "https://qrasoi.in/restaurant-pos-software",
        siteName: "QRasoi",
        type: "website",
    },
};

export default function RestaurantPOSSoftwarePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "QRasoi Restaurant POS Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
            "Restaurant POS software for billing, order management, KOT generation, inventory tracking, and analytics.",
        url: "https://qrasoi.in/restaurant-pos-software",
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
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-orange-50 to-white py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="max-w-4xl">
                            <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium mb-6">
                                Restaurant POS Software
                            </span>

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Restaurant POS Software for Modern Restaurants
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Manage billing, orders, kitchen operations, inventory,
                                analytics, and customer experience from a single platform.
                                QRasoi helps restaurants streamline operations and grow faster.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
                                >
                                    Book Free Demo
                                </Link>

                                <Link
                                    href="/pricing"
                                    className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
                                >
                                    View Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Powerful Features for Restaurant Operations
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Smart Billing",
                                    desc: "Generate invoices quickly with GST support and multiple payment options.",
                                },
                                {
                                    title: "Order Management",
                                    desc: "Track dine-in, takeaway, and online orders in real time.",
                                },
                                {
                                    title: "Kitchen Management",
                                    desc: "Instant KOT generation and faster kitchen communication.",
                                },
                                {
                                    title: "Analytics",
                                    desc: "Track sales, revenue, and restaurant performance.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="border rounded-2xl p-6 hover:shadow-lg transition"
                                >
                                    <h3 className="text-xl font-semibold mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Why Choose QRasoi Restaurant POS Software?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <ul className="space-y-4 text-gray-700">
                                    <li>✅ Faster billing and checkout process</li>
                                    <li>✅ Reduce manual errors</li>
                                    <li>✅ Real-time order tracking</li>
                                    <li>✅ Inventory management</li>
                                    <li>✅ Customer insights and reports</li>
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-4 text-gray-700">
                                    <li>✅ Cloud-based access anywhere</li>
                                    <li>✅ Multi-device compatibility</li>
                                    <li>✅ Staff role management</li>
                                    <li>✅ Secure data storage</li>
                                    <li>✅ Affordable pricing plans</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6">
                            Complete POS Solution for Restaurants
                        </h2>

                        <p className="text-gray-700 leading-8 mb-6">
                            QRasoi Restaurant POS Software is designed to simplify restaurant
                            operations. From taking customer orders to generating invoices and
                            managing kitchen workflows, everything can be handled from one
                            centralized dashboard.
                        </p>

                        <p className="text-gray-700 leading-8 mb-6">
                            Whether you operate a restaurant, cafe, cloud kitchen, food
                            court, or multi-outlet chain, QRasoi helps improve efficiency,
                            reduce operational costs, and deliver a better dining experience.
                        </p>

                        <p className="text-gray-700 leading-8">
                            The platform includes billing, QR ordering, KOT management,
                            inventory tracking, analytics, customer loyalty programs, and
                            reporting tools that help restaurant owners make data-driven
                            decisions.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    What is Restaurant POS Software?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Restaurant POS software helps manage billing, orders,
                                    inventory, payments, and customer operations from a single
                                    platform.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Is QRasoi suitable for small restaurants?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Yes. QRasoi is built for restaurants, cafes, cloud kitchens,
                                    and growing food businesses of all sizes.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Does QRasoi support GST billing?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Yes. QRasoi includes GST-compliant billing and invoice
                                    generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Modernize Your Restaurant?
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            Join restaurants using QRasoi to simplify operations and increase
                            efficiency.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition"
                        >
                            Schedule a Free Demo
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}