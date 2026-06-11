import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant Management Software",
    description:
        "Complete restaurant management software with QR ordering, POS billing, inventory management, CRM and analytics.",
};

export default function Layout({
    children,
}: { children: React.ReactNode; }) {
    return children;
}