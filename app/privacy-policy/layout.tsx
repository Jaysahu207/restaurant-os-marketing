import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read the QRasoi Privacy Policy and understand how we collect, process and protect your data.",
    alternates: {
        canonical: "https://qrasoi.in/privacy-policy",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}