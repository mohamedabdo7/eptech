import React from "react";
import { motion } from "framer-motion";

// Card components for standard React (replacing shadcn/ui)
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
  highlighted?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  text,
  highlighted = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="h-full"
  >
    <Card
      className={`
    h-full rounded-3xl border-0 
    ${highlighted ? "bg-[#2B54D0]/80" : "bg-[#6587EE59]/80"}
    px-6 py-5
  `}
    >
      <CardContent className="flex flex-col gap-2 p-0">
        <div className="flex flex-col items-start gap-2 w-full mb-2">
          <img
            src={image}
            alt={name}
            className="rounded-full object-cover w-16 h-16"
          />
          <div className="font-semibold text-white text-lg">{name}</div>
          <div className="text-sm text-white">{role}</div>
        </div>
        <div className="text-xs text-white/90 text-left">{text}</div>
      </CardContent>
    </Card>
  </motion.div>
);
