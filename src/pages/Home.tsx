import React from "react";
import AiToolsSection from "../components/sections/AiToolsSection";
import ContactSection from "../components/sections/ContactUs";
import HeroSection from "../components/sections/Hero";
import OurServices from "../components/sections/OurServices";
import { PortfolioSection } from "../components/sections/Portfolio";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import PartnersSection from "../components/sections/PartnersSection";
const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background pattern or image would go here */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content - Hero only, navbar is now in layout */}
        <div className="relative z-10 flex flex-col min-h-screen pt-20">
          <HeroSection />
        </div>
      </div>

      <PartnersSection />
      <OurServices />
      <PortfolioSection />
      <AiToolsSection />
      <TestimonialsSection />
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
