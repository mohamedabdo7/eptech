"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

// Define the service data type
interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "/icons/code.svg",
    title: "Web & Mobile Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "/icons/computer.svg",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "/icons/leader-speech.svg",
    title: "Event Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "/icons/chatbot.svg",
    title: "AI Agents & Chatbot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const OurServices: React.FC = () => {
  return (
    <section className="py-section-y px-section-x sm:py-16 lg:py-20 sm:px-6 lg:px-8 relative overflow-hidden ">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          isInline={false}
          baseTitle="What we do for"
          highlightTitle="your business?"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-3 mx-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group h-full"
              >
                <div className="relative p-6 sm:p-8 rounded-2xl border-0 hover:border hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.05,
                        rotate: 3,
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                    }}
                    whileHover="hover"
                    className="mb-6 inline-flex"
                  >
                    <div className="p-3 rounded-xl">
                      <img
                        src={service.icon}
                        alt={`${service.title} icon`}
                        className="h-8 w-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
