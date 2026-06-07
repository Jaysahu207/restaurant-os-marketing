import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "QR Ordering System for Restaurants | QRasoi",
    description:
        "Allow customers to scan, browse menus, and place orders instantly using QRasoi's QR Ordering System. Improve restaurant efficiency and customer experience.",
    keywords: [
        "QR Ordering System",
        "Restaurant QR Ordering",
        "Digital Menu Software",
        "Contactless Ordering",
        "QR Menu Ordering",
        "Restaurant Technology",
    ],
    openGraph: {
        title: "QR Ordering System for Restaurants | QRasoi",
        description:
            "Modern QR ordering system for restaurants, cafes, cloud kitchens, and food courts.",
        url: "https://qrasoi.in/qr-ordering-system",
        siteName: "QRasoi",
        type: "website",
    },
};

export default function QROrderingSystemPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "QRasoi QR Ordering System",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
            "QR ordering solution that allows customers to browse menus and place orders using their smartphones.",
        url: "https://qrasoi.in/qr-ordering-system",
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
                            QR Ordering System
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            QR Ordering System for Modern Restaurants
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
                            Let customers scan a QR code, browse your digital menu, and place
                            orders instantly without waiting for staff. QRasoi's QR Ordering
                            System improves service speed, customer satisfaction, and order
                            accuracy.
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

                {/* How It Works */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            How QR Ordering Works
                        </h2>

                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                "Customer scans QR code",
                                "Digital menu opens",
                                "Select food items",
                                "Order reaches kitchen",
                                "Food served faster",
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="border rounded-2xl p-6 text-center"
                                >
                                    <div className="text-3xl font-bold text-orange-600 mb-4">
                                        {index + 1}
                                    </div>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Benefits of QR Ordering System
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Faster Service",
                                    desc: "Reduce customer wait times significantly.",
                                },
                                {
                                    title: "Higher Accuracy",
                                    desc: "Orders are placed directly by customers.",
                                },
                                {
                                    title: "Increase Sales",
                                    desc: "Digital menus help upsell products.",
                                },
                                {
                                    title: "Reduce Staff Load",
                                    desc: "Less manual order taking required.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-2xl p-6 shadow-sm"
                                >
                                    <h3 className="font-semibold text-xl mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-8">
                            Features Included in QRasoi QR Ordering
                        </h2>

                        <div className="space-y-5 text-gray-700 leading-8">
                            <p>
                                QRasoi allows restaurants to create digital menus accessible
                                through unique QR codes placed on tables.
                            </p>

                            <p>
                                Customers can browse categories, customize orders, add special
                                instructions, and place orders directly from their smartphones.
                            </p>

                            <p>
                                Orders are instantly sent to the kitchen dashboard, reducing
                                delays and eliminating communication errors.
                            </p>

                            <p>
                                Restaurant owners can update menu items, prices, availability,
                                and offers in real time without reprinting menus.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ideal For */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Perfect For
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                "Restaurants",
                                "Cafes",
                                "Cloud Kitchens",
                                "Food Courts",
                                "Hotels",
                                "Quick Service Restaurants",
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
                                    Do customers need an app?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    No. Customers simply scan the QR code and order directly
                                    through their mobile browser.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Can menu items be updated instantly?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Yes. Menu changes are reflected immediately across all QR
                                    menus.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Does it support special instructions?
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Yes. Customers can add notes and customization requests.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Start Accepting QR Orders Today
                        </h2>

                        <p className="text-lg text-gray-600 mb-8">
                            Give customers a faster and smarter ordering experience with
                            QRasoi.
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