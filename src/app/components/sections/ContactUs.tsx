"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, LucideIcon } from "lucide-react";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";

// Type definitions
interface FormData {
  fullName: string;
  phoneNumber: string;
  message: string;
}

interface ContactInfo {
  icon: LucideIcon;
  text: string;
  href: string;
}

// Animation variants remain unchanged
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const leftContentVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const rightContentVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

const contactItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      fullName: "",
      phoneNumber: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      text: "+20150*******",
      href: "tel:+20150*******",
    },
    {
      icon: Mail,
      text: "info@example.com",
      href: "mailto:info@example.com",
    },
    {
      icon: MapPin,
      text: "Lorem ipsum dolor sit amet",
      href: "#",
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements - unchanged */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={leftContentVariants}
            className="space-y-6 text-center md:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-white"
                style={{
                  fontWeight: 700,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block text-3xl sm:text-4xl md:text-[48px]">
                  We are always ready
                </span>
                <span className="block text-3xl sm:text-4xl md:text-[48px]">
                  to help you and
                </span>
                <span className="block text-3xl sm:text-4xl md:text-[48px] text-primary">
                  answer your
                </span>
                <span className="block text-3xl sm:text-4xl md:text-[48px] text-primary">
                  questions
                </span>
              </motion.h1>
            </div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                Let's talk
              </h3>
              <motion.div variants={containerVariants} className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    variants={contactItemVariants}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-1.5 md:p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </motion.div>
                    <span className="text-sm md:text-base font-medium">
                      {item.text}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            variants={rightContentVariants}
            className="w-full max-w-md mx-auto md:max-w-none"
          >
            <Card
              className="backdrop-blur-lg border-0 shadow-2xl rounded-xl md:rounded-[18px]"
              style={{
                background: "linear-gradient(to bottom left, #6587EE, #03024F)",
              }}
            >
              <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    variants={formFieldVariants}
                    className="space-y-2"
                  >
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      variant="default"
                      size="lg"
                      fullWidth
                      label="Full Name"
                      placeholder="Enter your full name"
                      className="text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
                    />
                  </motion.div>

                  <motion.div
                    variants={formFieldVariants}
                    className="space-y-2"
                  >
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      variant="default"
                      size="lg"
                      label="Phone Number"
                      fullWidth
                      placeholder="Enter your phone number"
                      className="text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
                    />
                  </motion.div>

                  <motion.div
                    variants={formFieldVariants}
                    className="space-y-2"
                  >
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      variant="default"
                      label="Message"
                      size="md"
                      fullWidth
                      placeholder="Enter your message here..."
                      className="text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
                    />
                  </motion.div>

                  <motion.div
                    variants={formFieldVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      variant="default"
                      size="lg"
                      fullWidth
                      className="font-semibold"
                    >
                      Get Started Free
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
