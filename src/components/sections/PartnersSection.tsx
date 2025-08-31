import React from "react";
import { motion, type Variants } from "framer-motion";
import TrustMarquee from "./Marquee";
import SectionHeader from "../common/SectionHeader";

interface ServiceCategory {
  icon: string;
  title: string;
  subtitle: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    icon: "/icons/service1.svg",
    title: "Digital",
    subtitle: "Health Care",
  },
  {
    icon: "/icons/service2.svg",
    title: "IOT",
    subtitle: "",
  },
  {
    icon: "/icons/service3.svg",
    title: "Tech",
    subtitle: "Solutions",
  },
  {
    icon: "/icons/service4.svg",
    title: "Marketing",
    subtitle: "",
  },
  {
    icon: "/icons/service5.svg",
    title: "Event",
    subtitle: "Planning",
  },
];

const PartnersSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div className="w-full ">
      {/* Services Categories Section */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              baseTitle="Clients"
              highlightTitle="Who Put Their Trust In Us"
            />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {SERVICE_CATEGORIES.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center group cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  filter: "brightness(1.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={service.icon}
                  alt={`${service.title} ${service.subtitle}`.trim()}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  //   style={{
                  //     filter:
                  //       "brightness(0.7) contrast(1.1) saturate(0.8) drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))",
                  //     opacity: 0.85,
                  //   }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Marquee Section */}
      <TrustMarquee />

      {/* CSS Styles */}
      <style>{`
        /* Smooth hover transitions */
        .group:hover img {
          filter: brightness(1.1) contrast(1.2) saturate(1.1) drop-shadow(0 0 15px rgba(255, 255, 255, 0.5)) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default PartnersSection;
