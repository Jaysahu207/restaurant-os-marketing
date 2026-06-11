import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant Billing Software",
    description:
        "Fast and accurate restaurant billing software with GST invoices and order tracking.",
};


export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}