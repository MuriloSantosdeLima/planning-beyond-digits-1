import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import PurposeSection from "@/components/PurposeSection";
import TimelineSection from "@/components/TimelineSection";
import CredibilitySection from "@/components/CredibilitySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <PurposeSection />
        <TimelineSection />
        <CredibilitySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
