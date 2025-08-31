import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface StatsCardProps {
  label: string; // Description of the stat (e.g., "Delivered Orders")
  value: string | number; // The stat value (e.g., "455K")
  unit?: string; // Optional unit (e.g., "by SAR")
  index?: number; // For animation delays
}

const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  unit,
  index = 0,
}) => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="group flex flex-col items-center p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4 relative"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <motion.span
        className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none tracking-tight relative z-10 group-hover:scale-110 transition-transform duration-300"
        whileHover={{
          textShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
          transition: { duration: 0.2 },
        }}
      >
        {value}
      </motion.span>

      <span className="font-medium text-xs sm:text-sm lg:text-base leading-tight tracking-tight text-center text-white/80 group-hover:text-white transition-colors duration-300 relative z-10 max-w-20 sm:max-w-24 lg:max-w-none">
        {label} {unit && <span className="text-primary/80">{unit}</span>}
      </span>
    </motion.div>
  );
};

interface StatsSectionProps {
  stats: Array<{
    label: string;
    value: string | number;
    unit?: string;
  }>;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      {/* Mobile: 2x3 grid for better mobile experience */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            unit={stat.unit}
            index={index}
          />
        ))}
      </div>

      {/* Desktop: Single row */}
      <div className="hidden lg:flex justify-around items-center w-full max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            unit={stat.unit}
            index={index}
          />
        ))}
      </div>

      {/* Tablet: 3+2 layout */}
      <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4 sm:gap-6">
        {stats.slice(0, 3).map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            unit={stat.unit}
            index={index}
          />
        ))}
        <div className="col-span-3 grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto">
          {stats.slice(3).map((stat, index) => (
            <StatsCard
              key={index + 3}
              label={stat.label}
              value={stat.value}
              unit={stat.unit}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { StatsCard, StatsSection };
