import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant Management Blog",
    description:
        "Read restaurant management tips, QR ordering guides, POS insights and industry best practices from QRasoi.",
    alternates: {
        canonical: "https://qrasoi.in/blogs",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}