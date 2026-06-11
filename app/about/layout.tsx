import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about QRasoi and our mission to simplify restaurant operations with QR ordering and restaurant management software.",
    alternates: {
        canonical: "https://qrasoi.in/about",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}