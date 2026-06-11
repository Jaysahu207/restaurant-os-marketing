import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant POS Software",
    description:
        "Cloud-based restaurant POS software for billing, order management and reporting.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}