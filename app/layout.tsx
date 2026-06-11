import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  metadataBase: new URL("https://qrasoi.in"),

  title: {
    default:
      "QRasoi - QR Ordering & POS System for Restaurants, Cafes & Food Businesses",
    template: "%s | QRasoi",
  },

  description:
    "QRasoi is an all-in-one restaurant management software for restaurants, cafes and food businesses. Manage QR ordering, POS billing, KOT, inventory, CRM, loyalty programs, analytics and operations from a single platform.",

  keywords: [
    "QRasoi",
    "restaurant management software",
    "restaurant software india",
    "restaurant POS software",
    "restaurant billing software",
    "QR ordering system",
    "QR menu software",
    "digital menu for restaurants",
    "restaurant inventory management",
    "restaurant CRM software",
    "restaurant analytics software",
    "contactless ordering system",
    "restaurant SaaS platform",
    "KOT management software",
    "cafe management software",
    "food business software",
  ],

  authors: [
    {
      name: "QRasoi",
      url: "https://qrasoi.in",
    },
  ],

  creator: "QRasoi",
  publisher: "QRasoi",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://qrasoi.in",
  },

  openGraph: {
    title:
      "QRasoi - Restaurant Management Software, QR Ordering & POS System",
    description:
      "Streamline restaurant operations with QR ordering, billing, inventory management, CRM, loyalty programs and advanced analytics.",
    url: "https://qrasoi.in",
    siteName: "QRasoi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QRasoi Restaurant Management Software",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "QRasoi - Restaurant Management Software, QR Ordering & POS System",
    description:
      "All-in-one software for restaurants with QR ordering, POS billing, inventory management and analytics.",
    images: ["/og-image.png"],
  },

  category: "Restaurant Management Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-gray-900">
        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* Toast Container */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#fff",
              color: "#111827",
              borderRadius: "18px",
              padding: "16px",
              fontWeight: "600",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            },

            success: {
              iconTheme: {
                primary: "#f97316",
                secondary: "#fff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
