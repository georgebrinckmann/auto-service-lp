import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ValueStackSection from "@/components/landing/ValueStackSection";
import FAQSection from "@/components/landing/FAQSection";
import UrgencySection from "@/components/landing/UrgencySection";
import PreFormSection from "@/components/landing/PreFormSection";
import DiagnosticFormSection from "@/components/landing/DiagnosticFormSection";
import FinalReinforcementSection from "@/components/landing/FinalReinforcementSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
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
