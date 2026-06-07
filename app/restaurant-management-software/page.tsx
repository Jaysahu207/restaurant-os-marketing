import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Restaurant Management Software | QRasoi",
    description:
        "Complete restaurant management software with POS, QR ordering, billing, KOT, inventory, customer management and analytics. Grow your restaurant with QRasoi.",
    keywords: [
        "Restaurant Management Software",
        "Restaurant Software",
        "Restaurant Operating System",
        "Restaurant POS Software",
        "Restaurant Billing Software",
        "QR Ordering System",
        "Restaurant Inventory Management",
    ],
};

export default function RestaurantManagementSoftwarePage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-50 to-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium mb-6">
                        Restaurant Management Software
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Complete Restaurant Management Software for Modern Businesses
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-4xl leading-relaxed">
                        QRasoi helps restaurants manage billing, QR ordering,
                        inventory, kitchen operations, customer engagement,
                        reporting and analytics from a single platform.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
                        >
                            Book Free Demo
                        </Link>

                        <Link
                            href="/pricing"
                            className="border border-gray-300 px-6 py-3 rounded-xl font-semibold"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">
                        All-In-One Restaurant Operating System
                    </h2>

                    <p className="text-gray-700 leading-8 mb-6">
                        Running a restaurant involves much more than taking orders.
                        Restaurant owners must manage staff, billing, inventory,
                        customer satisfaction, kitchen operations and reporting.
                    </p>

                    <p className="text-gray-700 leading-8 mb-6">
                        QRasoi brings all restaurant operations together into one
                        easy-to-use platform. Whether you run a restaurant, cafe,
                        cloud kitchen, food court or multi-location chain,
                        QRasoi helps improve efficiency and reduce operational costs.
                    </p>

                    <p className="text-gray-700 leading-8">
                        Our cloud-based solution allows restaurant owners to manage
                        operations from anywhere while providing staff with tools
                        to serve customers faster and more accurately.
                    </p>
                </div>
            </section>

            {/* Modules */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Everything Your Restaurant Needs
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Restaurant POS",
                            "QR Ordering",
                            "Billing Software",
                            "KOT Management",
                            "Inventory Tracking",
                            "Analytics Dashboard",
                            "Customer Loyalty",
                            "Table Management",
                            "Staff Management",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-white p-6 rounded-2xl shadow-sm"
                            >
                                <h3 className="font-semibold text-lg">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Benefits of QRasoi
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border rounded-2xl p-6">
                            <h3 className="font-semibold text-xl mb-4">
                                Increase Revenue
                            </h3>
                            <p className="text-gray-600">
                                Faster service and better customer experience help
                                restaurants increase repeat orders and sales.
                            </p>
                        </div>

                        <div className="border rounded-2xl p-6">
                            <h3 className="font-semibold text-xl mb-4">
                                Reduce Operational Costs
                            </h3>
                            <p className="text-gray-600">
                                Automate repetitive tasks and reduce manual work.
                            </p>
                        </div>

                        <div className="border rounded-2xl p-6">
                            <h3 className="font-semibold text-xl mb-4">
                                Better Customer Experience
                            </h3>
                            <p className="text-gray-600">
                                QR ordering and faster service improve customer
                                satisfaction.
                            </p>
                        </div>

                        <div className="border rounded-2xl p-6">
                            <h3 className="font-semibold text-xl mb-4">
                                Data Driven Decisions
                            </h3>
                            <p className="text-gray-600">
                                Track sales, menu performance and business growth with
                                real-time analytics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Can Use */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Perfect For
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Restaurants",
                            "Cafes",
                            "Cloud Kitchens",
                            "Hotels",
                            "Food Courts",
                            "Restaurant Chains",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-white p-5 rounded-xl text-center shadow-sm"
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
                                What is Restaurant Management Software?
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Restaurant management software helps manage billing,
                                orders, inventory, staff and customer operations in one system.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                Is QRasoi suitable for small restaurants?
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Yes, QRasoi is designed for both small restaurants and
                                large restaurant chains.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">
                                Can QRasoi manage multiple outlets?
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Yes, QRasoi supports multi-location restaurant management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Manage Your Entire Restaurant From One Platform
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">
                        Join restaurants using QRasoi to simplify operations,
                        increase efficiency and grow revenue.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold"
                    >
                        Schedule a Free Demo
                    </Link>
                </div>
            </section>
        </main>
    );
}