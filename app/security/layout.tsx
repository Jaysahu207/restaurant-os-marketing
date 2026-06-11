import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security",
    description:
        "Learn how QRasoi protects restaurant and customer data with secure infrastructure and best security practices.",
    alternates: {
        canonical: "https://qrasoi.in/security",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}