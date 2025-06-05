"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  MonitorSmartphone,
  PenTool,
  Video,
  BarChart2,
  Sparkles,
  Palette,
  PieChart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

const tools = [
  {
    title: "Smart Website Development",
    description:
      "We use AI to build fast, user-friendly, and visually appealing websites optimized for performance.",
    icon: <MonitorSmartphone size={75} className="text-primary mb-4" />,
  },
  {
    title: "AI-Powered Content Creation",
    description:
      "Generate high-quality, engaging content for your brand using advanced AI models.",
    icon: <Sparkles size={75} className="text-primary mb-4" />,
  },
  {
    title: "Creative Design & Video Editing",
    description:
      "Leverage AI tools for stunning designs and seamless video editing workflows.",
    icon: <Video size={75} className="text-primary mb-4" />,
  },
  {
    title: "Performance Analytics",
    description:
      "Analyze your website and content performance with real-time AI-powered analytics.",
    icon: <BarChart2 size={75} className="text-primary mb-4" />,
  },
  {
    title: "Branding & Illustration",
    description:
      "Create unique branding and illustrations tailored to your business needs.",
    icon: <Palette size={75} className="text-primary mb-4" />,
  },
  {
    title: "Data Visualization",
    description:
      "Transform complex data into clear, interactive visualizations using AI.",
    icon: <PieChart size={75} className="text-primary mb-4" />,
  },
  {
    title: "Custom AI Solutions",
    description:
      "We build custom AI solutions to automate and optimize your business processes.",
    icon: <PenTool size={75} className="text-primary mb-4" />,
  },
];

export default function AiToolsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 px-2 sm:px-4 ">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeader
          baseTitle="AI Tools"
          highlightTitle="we use"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        />

        {/* Responsive: vertical accordion on mobile, horizontal row on desktop */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center items-stretch">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className={
                i === active
                  ? "w-full sm:flex-1 sm:min-w-[270px] sm:max-w-[320px] min-h-[90px] sm:min-h-[320px] max-h-[320px]"
                  : "w-full sm:min-w-[80px] sm:max-w-[80px] min-h-[56px] sm:min-h-[320px] max-h-[90px] sm:max-h-[320px]"
              }
              onClick={() => setActive(i)}
              style={{ cursor: "pointer" }}
            >
              <Card
                className={`h-full flex flex-col items-center justify-center border-2 transition-all duration-300 rounded-xl
        ${
          i === active
            ? "border-primary bg-[#0a0a6a]/40 shadow-lg"
            : "border-emerald-900/40 bg-transparent hover:border-primary"
        }
      `}
              >
                <CardContent className="flex flex-col items-center justify-center h-full p-0">
                  <AnimatePresence mode="wait">
                    {i === active ? (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-around h-full w-full p-4 sm:p-6 "
                      >
                        <div className="w-full">{tool.icon}</div>
                        <div className="w-full font-bold text-left text-primary text-base">
                          {tool.title}
                        </div>
                        <p className="text-primary text-xs sm:text-sm text-left">
                          {tool.description}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-center w-full h-full"
                      >
                        <span className="block w-full py-3 text-xs sm:text-xs text-emerald-200 font-medium whitespace-nowrap text-center sm:rotate-[-90deg] select-none">
                          {tool.title}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
