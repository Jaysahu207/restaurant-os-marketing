import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description:
        "Learn how QRasoi uses cookies and similar technologies to improve website functionality and user experience.",
    alternates: {
        canonical: "https://qrasoi.in/cookies",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}