"use client";

import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import FeatureSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import HowitWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialSection from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Social Proof / Trust */}
      <StatsSection />

      {/* Features */}
      <FeatureSection />

      {/* Process */}
      <HowitWorks />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Pricing */}
      <PricingSection />

      {/* Final Conversion CTA */}
      <CTASection />

      {/* FAQ */}
      <FAQSection />
    </main>
  );
}
