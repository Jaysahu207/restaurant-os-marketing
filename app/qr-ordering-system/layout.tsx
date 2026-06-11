import { Metadata } from "next";

export const metadata: Metadata = {
    title: "QR Ordering System for Restaurants",
    description:
        "Enable contactless ordering with QR codes and improve restaurant efficiency using QRasoi.",
};

export default function Layout({
    children,
}: { children: React.ReactNode; }) {
    return children;
}