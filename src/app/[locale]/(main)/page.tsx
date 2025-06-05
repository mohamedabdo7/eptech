import AiToolsSection from "@/app/components/sections/AiToolsSection";
import ContactSection from "@/app/components/sections/ContactUs";
import Hero from "@/app/components/sections/Hero";
import OurServices from "@/app/components/sections/OurServices";
import { PortfolioSection } from "@/app/components/sections/Portfolio";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background pattern or image would go here */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content - Hero only, navbar is now in layout */}
        <div className="relative z-10 flex flex-col min-h-screen pt-20">
          <Hero />
        </div>
      </div>

      <OurServices />
      <PortfolioSection />
      <AiToolsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default page;
