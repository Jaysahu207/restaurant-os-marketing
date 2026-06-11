import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features",
    description:
        "Explore QR ordering, POS billing, inventory management, CRM, loyalty programs, analytics and restaurant automation features offered by QRasoi.",
    alternates: {
        canonical: "https://qrasoi.in/features",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}