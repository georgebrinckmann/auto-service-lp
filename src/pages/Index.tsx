import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import StatsSection from "@/components/landing/StatsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ValueStackSection from "@/components/landing/ValueStackSection";
import FAQSection from "@/components/landing/FAQSection";
import UrgencySection from "@/components/landing/UrgencySection";
import PreFormSection from "@/components/landing/PreFormSection";
import DiagnosticFormSection from "@/components/landing/DiagnosticFormSection";
import FinalReinforcementSection from "@/components/landing/FinalReinforcementSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  useEffect(() => {
    // Handle direct access with hash (e.g., #diagnostico)
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <PainPointsSection />
      <StatsSection />
      <ServicesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <ValueStackSection />
      <FAQSection />
      <UrgencySection />
      <PreFormSection />
      <DiagnosticFormSection />
      <FinalReinforcementSection />
      <FooterSection />
    </div>
  );
};

export default Index;
