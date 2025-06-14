
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
