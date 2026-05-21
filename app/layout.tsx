import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "QRasoi",
  description: "Modern QR Ordering & Restaurant Management Software",
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
