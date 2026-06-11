import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Support",
    description:
        "Get help with QRasoi setup, billing, QR ordering, payments, inventory, analytics, and restaurant management.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}