
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Explore career opportunities at QRasoi and help build the future of restaurant technology.",
    alternates: {
        canonical: "https://qrasoi.in/careers",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}