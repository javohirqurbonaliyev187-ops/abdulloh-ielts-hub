import { AppLayout } from "@/components/layout/AppLayout";
import { HeroSection } from "@/components/landing/HeroSection";
import { SkillsSection } from "@/components/landing/SkillsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroSection />
        <SkillsSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </AppLayout>
  );
};

export default Index;
