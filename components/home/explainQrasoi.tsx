"use client";

import {
    QrCode,
    Mail,
    ShieldCheck,
    BarChart3,
    ChefHat,
    Users,
    CheckCircle2,
} from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "What is QRasoi?",
    description:
        "Learn about QRasoi, the all-in-one restaurant operating system that digitizes and automates restaurant operations including QR ordering, billing, kitchen management, inventory control, customer engagement, loyalty programs, analytics, and marketing.",
};
export default function ExplainQRasoi() {
    const features = [
        "QR Code Ordering",
        "Smart Billing & GST Invoicing",
        "Kitchen Order Management",
        "Inventory Tracking",
        "Customer Loyalty Programs",
        "Restaurant Analytics",
        "Marketing Automation",
        "Multi-Device Cloud Access",
    ];

    return (
        <section
            id="about-qrasoi"
            className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50 py-24"
        >
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
                        <QrCode className="h-4 w-4" />
                        About QRasoi
                    </div>

                    <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
                        What Is QRasoi?
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        QRasoi is a cloud-based Restaurant Operating System (Restaurant OS)
                        built for restaurants, cafes, hotels, food courts, and cloud
                        kitchens. It helps businesses digitize and automate restaurant
                        operations including ordering, billing, kitchen management,
                        inventory control, customer engagement, loyalty programs,
                        analytics, and marketing from a single dashboard.
                    </p>
                </div>

                {/* Main Content */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Left */}
                    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
                        <div className="flex items-center gap-4">
                            <ChefHat className="h-10 w-10 text-orange-600" />
                            <h3 className="text-2xl font-black text-gray-900">
                                Restaurant Operations Simplified
                            </h3>
                        </div>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            QRasoi allows restaurant owners and staff to manage daily
                            operations efficiently. Customers can scan QR codes to browse
                            menus and place orders, while restaurant teams can manage kitchen
                            workflows, billing, reporting, customer relationships, and
                            business performance in real time.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3 rounded-xl bg-orange-50 p-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-orange-500" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
                        <div className="flex items-center gap-4">
                            <Mail className="h-10 w-10 text-orange-600" />
                            <h3 className="text-2xl font-black text-gray-900">
                                Gmail Integration & Google User Data
                            </h3>
                        </div>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            QRasoi allows restaurant owners to securely connect their Google
                            Gmail account to send business communications directly from their
                            own email address.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                                <h4 className="font-bold text-gray-900">
                                    Why Gmail Permission Is Required
                                </h4>

                                <p className="mt-2 text-sm text-gray-600">
                                    Gmail access is used solely to send transactional emails,
                                    onboarding emails, loyalty notifications, promotional
                                    campaigns, invoices, and customer communications on behalf of
                                    the restaurant owner.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                                <h4 className="font-bold text-gray-900">
                                    What QRasoi Can Access
                                </h4>

                                <p className="mt-2 text-sm text-gray-600">
                                    QRasoi only requests the Gmail Send permission
                                    (gmail.send). The application does not read, modify,
                                    delete, organize, search, or analyze Gmail messages.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                                <h4 className="font-bold text-gray-900">
                                    Google API Limited Use Compliance
                                </h4>

                                <p className="mt-2 text-sm text-gray-600">
                                    QRasoi's use and transfer of information received from Google
                                    APIs adheres to the Google API Services User Data Policy,
                                    including the Limited Use requirements. Data obtained through
                                    Google APIs is never sold, shared with advertising networks,
                                    used for personalized advertising, or used to train
                                    generalized AI or machine learning models.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Section */}
                <div className="mt-12 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white shadow-xl">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        <ShieldCheck className="h-16 w-16 flex-shrink-0" />

                        <div>
                            <h3 className="text-2xl font-black">
                                Security & Privacy Commitment
                            </h3>

                            <p className="mt-3 leading-relaxed text-orange-50">
                                QRasoi protects restaurant and customer information using secure
                                authentication, encrypted data storage, access controls, and
                                industry-standard security practices. Google user data is only
                                used for approved application functionality and remains under
                                the control of the restaurant owner.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
                        <QrCode className="mx-auto h-10 w-10 text-orange-600" />
                        <h4 className="mt-4 text-xl font-black">QR Ordering</h4>
                        <p className="mt-2 text-gray-600">
                            Contactless digital ordering experience.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
                        <BarChart3 className="mx-auto h-10 w-10 text-orange-600" />
                        <h4 className="mt-4 text-xl font-black">Analytics</h4>
                        <p className="mt-2 text-gray-600">
                            Real-time business insights and reporting.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
                        <Users className="mx-auto h-10 w-10 text-orange-600" />
                        <h4 className="mt-4 text-xl font-black">Customer Engagement</h4>
                        <p className="mt-2 text-gray-600">
                            Loyalty programs and marketing automation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}