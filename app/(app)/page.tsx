import LandingHeader from "@/components/ui/landing/LandingHeader";
import { HeroSection } from "@/components/ui/landing/hero-section";
import { FeaturesSection } from "@/components/ui/landing/features-section";
import { HowItWorksSection } from "@/components/ui/landing/how-it-works-section";
import { IntegrationSection } from "@/components/ui/landing/integration-section";
import { CTASection } from "@/components/ui/landing/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <LandingHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationSection />
        <CTASection />
      </main>
    </div>
  );
}
