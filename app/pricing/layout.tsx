import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Affordable pricing plans for restaurants, cafes and food businesses using QRasoi restaurant management software.",
    alternates: {
        canonical: "https://qrasoi.in/pricing",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}