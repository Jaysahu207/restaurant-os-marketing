import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Review the terms and conditions for using QRasoi restaurant management software.",
    alternates: {
        canonical: "https://qrasoi.in/terms-of-service",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}