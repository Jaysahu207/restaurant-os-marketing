"use client";
import PricingSection from "../../components/home/PricingSection";
import React from "react";
import { Check, Star, Sparkles, ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
const plans = [
  {
    name: "Starter",
    price: "₹299",
    oldPrice: "₹599",
    description:
      "Perfect for cafes, food stalls, and small restaurants starting digital ordering.",
    popular: false,

    features: [
      "QR Code Ordering",
      "Digital Menu",
      "Basic Billing System",
      "UPI Payment Support",
      "Order Management",
      "1 Admin Account",
      "Basic Analytics",
      "14 Days Free Trial",
      "Free QR Setup",
    ],
  },

  {
    name: "Pro",
    price: "₹699",
    oldPrice: "₹1499",
    description:
      "Best for growing restaurants that need smart management and automation.",
    popular: true,

    features: [
      "Everything in Starter",
      "Advanced Billing & GST",
      "Kitchen Dashboard",
      "Inventory Management",
      "Customer CRM",
      "Marketing Tools",
      "Staff Management",
      "Advanced Analytics",
      "Multiple Roles & Permissions",
      "Priority Support",
    ],
  },
];

const pricing = () => {
  return (
    <PricingSection />
  );
};

export default pricing;
