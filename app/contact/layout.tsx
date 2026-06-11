import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Contact QRasoi for demos, onboarding, partnerships, support and restaurant software inquiries.",
    alternates: {
        canonical: "https://qrasoi.in/contact",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}