import React from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, type LucideIcon } from "lucide-react";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";

// Card components for standard React (replacing shadcn/ui)
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = "", style }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// Type definitions
interface FormData {
  fullName: string;
  phoneNumber: string;
  message: string;
  dateTime: string;
}

interface ContactInfo {
  icon: LucideIcon;
  text: string;
  href: string;
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const leftContentVariants: Variants = {
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
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const rightContentVariants: Variants = {
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
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const formFieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 15,
    },
  },
};

const contactItemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 20,
    },
  },
};

// Illustration Component matching Figma design
// const MeetingIllustration: React.FC = () => (
//   <div className="relative w-40 h-32 mx-auto mb-6 md:mx-0">
//     {/* Main Computer/Monitor */}
//     <motion.div
//       className="relative w-32 h-24 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-2xl shadow-lg"
//       animate={{
//         y: [0, -4, 0],
//       }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       {/* Screen */}
//       <div className="absolute top-2 left-2 right-2 bottom-6 bg-gray-900 rounded-lg overflow-hidden">
//         <div className="h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center relative">
//           <Monitor className="w-6 h-6 text-white opacity-80" />
//         </div>
//       </div>

//       {/* Monitor Stand */}
//       <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-700 rounded-sm"></div>

//       {/* Small decorative dot */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
//     </motion.div>

//     {/* Person Avatar with Chat Bubble */}
//     <motion.div
//       className="absolute -right-4 -top-2 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
//       animate={{
//         y: [0, -6, 0],
//       }}
//       transition={{
//         duration: 2.5,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 0.5,
//       }}
//     >
//       <User className="w-7 h-7 text-white" />
//     </motion.div>

//     {/* Chat Bubble */}
//     <motion.div
//       className="absolute -right-1 top-6 w-10 h-8 bg-emerald-400 rounded-2xl flex items-center justify-center shadow-md"
//       style={{
//         borderBottomLeftRadius: "4px",
//       }}
//       animate={{
//         scale: [1, 1.1, 1],
//       }}
//       transition={{
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 1,
//       }}
//     >
//       {/* Chat dots */}
//       <div className="flex space-x-1">
//         <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//         <div
//           className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
//           style={{ animationDelay: "0.2s" }}
//         ></div>
//         <div
//           className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
//           style={{ animationDelay: "0.4s" }}
//         ></div>
//       </div>
//     </motion.div>
//   </div>
// );

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    message: "",
    dateTime: "",
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
      dateTime: "",
    });

    setIsSubmitting(false);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      text: "0955*******",
      href: "tel:0955*******",
    },
    {
      icon: Mail,
      text: "info@bveptec.com",
      href: "mailto:info@bveptec.com",
    },
    {
      icon: MapPin,
      text: "Lorem ipsum dolor sit amet",
      href: "#",
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
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
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto"
        >
          {/* Left Content */}
          <motion.div
            variants={leftContentVariants}
            className="space-y-8 text-center md:text-left"
          >
            <div className="flex items-start gap-6 flex-col md:flex-row md:items-center">
              <motion.img
                src="/public/icons/contact-icon.svg"
                alt="Schedule a meeting illustration"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mx-auto md:mx-0 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              />

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
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Schedule a
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    meeting
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl text-primary mt-2">
                    Talk to an expert
                  </span>
                </motion.h1>
              </div>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 text-center md:text-left">
                Contact Us
              </h3>
              <motion.div
                variants={containerVariants}
                className="flex flex-col items-center md:items-start space-y-3"
              >
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
            className="w-full max-w-sm sm:max-w-md mx-auto md:max-w-none"
          >
            <Card
              className="backdrop-blur-lg border-0 shadow-2xl rounded-xl md:rounded-[18px]"
              style={{
                background: "linear-gradient(135deg, #6B73FF 0%, #000C66 100%)",
              }}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <motion.div variants={formFieldVariants}>
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
                      label="Full name*"
                      placeholder="Enter your full name"
                      className="text-gray-900 placeholder:text-gray-500"
                    />
                  </motion.div>

                  <motion.div variants={formFieldVariants}>
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
                      className="text-gray-900 placeholder:text-gray-500"
                    />
                  </motion.div>

                  <motion.div variants={formFieldVariants}>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      variant="default"
                      label="Message"
                      size="sm"
                      fullWidth
                      placeholder="Enter your message here..."
                      className="text-gray-900 placeholder:text-gray-500"
                      rows={1}
                    />
                  </motion.div>

                  <motion.div variants={formFieldVariants}>
                    <Input
                      id="dateTime"
                      name="dateTime"
                      type="text"
                      value={formData.dateTime}
                      onChange={handleInputChange}
                      variant="default"
                      size="lg"
                      label="Select Date&Time"
                      fullWidth
                      placeholder="Select date and time"
                      className="text-gray-900 placeholder:text-gray-500"
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
                      className="font-semibold bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600"
                    >
                      Get Started Now
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
};

export default ContactSection;

// import React from "react";
// import { motion, useInView } from "framer-motion";
// import type { Variants } from "framer-motion";
// import { useRef, useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Calendar,
//   Monitor,
//   User,
//   type LucideIcon,
// } from "lucide-react";
// import { Input } from "../common/Input";
// import { Textarea } from "../common/Textarea";
// import { Button } from "../common/Button";

// // Card components for standard React (replacing shadcn/ui)
// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
//   style?: React.CSSProperties;
// }

// const Card: React.FC<CardProps> = ({ children, className = "", style }) => (
//   <div className={className} style={style}>
//     {children}
//   </div>
// );

// const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
//   <div className={className}>{children}</div>
// );

// // Type definitions
// interface FormData {
//   fullName: string;
//   phoneNumber: string;
//   message: string;
//   dateTime: string;
// }

// interface ContactInfo {
//   icon: LucideIcon;
//   text: string;
//   href: string;
// }

// // Animation variants
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const leftContentVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: -60,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 100,
//       damping: 20,
//       duration: 0.8,
//     },
//   },
// };

// const rightContentVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: 60,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 100,
//       damping: 20,
//       duration: 0.8,
//     },
//   },
// };

// const formFieldVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 120,
//       damping: 15,
//     },
//   },
// };

// const contactItemVariants: Variants = {
//   hidden: { opacity: 0, x: -15 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 150,
//       damping: 20,
//     },
//   },
// };

// // Illustration Component matching Figma design
// const MeetingIllustration: React.FC = () => (
//   <div className="relative w-40 h-32 mx-auto mb-6 md:mx-0">
//     {/* Main Computer/Monitor */}
//     <motion.div
//       className="relative w-32 h-24 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-2xl shadow-lg"
//       animate={{
//         y: [0, -4, 0],
//       }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       {/* Screen */}
//       <div className="absolute top-2 left-2 right-2 bottom-6 bg-gray-900 rounded-lg overflow-hidden">
//         <div className="h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center relative">
//           <Monitor className="w-6 h-6 text-white opacity-80" />
//         </div>
//       </div>

//       {/* Monitor Stand */}
//       <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-700 rounded-sm"></div>

//       {/* Small decorative dot */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
//     </motion.div>

//     {/* Person Avatar with Chat Bubble */}
//     <motion.div
//       className="absolute -right-4 -top-2 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
//       animate={{
//         y: [0, -6, 0],
//       }}
//       transition={{
//         duration: 2.5,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 0.5,
//       }}
//     >
//       <User className="w-7 h-7 text-white" />
//     </motion.div>

//     {/* Chat Bubble */}
//     <motion.div
//       className="absolute -right-1 top-6 w-10 h-8 bg-emerald-400 rounded-2xl flex items-center justify-center shadow-md"
//       style={{
//         borderBottomLeftRadius: "4px",
//       }}
//       animate={{
//         scale: [1, 1.1, 1],
//       }}
//       transition={{
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 1,
//       }}
//     >
//       {/* Chat dots */}
//       <div className="flex space-x-1">
//         <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//         <div
//           className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
//           style={{ animationDelay: "0.2s" }}
//         ></div>
//         <div
//           className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
//           style={{ animationDelay: "0.4s" }}
//         ></div>
//       </div>
//     </motion.div>
//   </div>
// );

// const ContactSection: React.FC = () => {
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     phoneNumber: "",
//     message: "",
//     dateTime: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     // Reset form
//     setFormData({
//       fullName: "",
//       phoneNumber: "",
//       message: "",
//       dateTime: "",
//     });

//     setIsSubmitting(false);
//   };

//   const contactInfo: ContactInfo[] = [
//     {
//       icon: Phone,
//       text: "0955*******",
//       href: "tel:0955*******",
//     },
//     {
//       icon: Mail,
//       text: "info@bveptec.com",
//       href: "mailto:info@bveptec.com",
//     },
//     {
//       icon: MapPin,
//       text: "Lorem ipsum dolor sit amet",
//       href: "#",
//     },
//   ];

//   return (
//     <section ref={ref} className="relative min-h-screen overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0, 0.8, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto"
//         >
//           {/* Left Content */}
//           <motion.div
//             variants={leftContentVariants}
//             className="space-y-8 text-center md:text-left"
//           >
//             <div className="flex items-start gap-6 flex-col md:flex-row md:items-center">
//               <motion.img
//                 src="/public/icons/contact-icon.svg"
//                 alt="Schedule a meeting illustration"
//                 className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mx-auto md:mx-0 flex-shrink-0"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//               />

//               <div className="space-y-4">
//                 <motion.h1
//                   className="text-white"
//                   style={{
//                     fontWeight: 700,
//                   }}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                 >
//                   <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//                     Schedule a
//                   </span>
//                   <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//                     meeting
//                   </span>
//                   <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl text-primary mt-2">
//                     Talk to an expert
//                   </span>
//                 </motion.h1>
//               </div>
//             </div>

//             <motion.div
//               className="space-y-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4">
//                 Contact Us
//               </h3>
//               <motion.div variants={containerVariants} className="space-y-3">
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                     key={index}
//                     href={item.href}
//                     variants={contactItemVariants}
//                     className="flex items-center justify-center md:justify-start gap-3 text-white/90 hover:text-white transition-colors duration-300 group cursor-pointer"
//                     whileHover={{ x: 5 }}
//                   >
//                     <motion.div
//                       className="p-1.5 md:p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
//                     </motion.div>
//                     <span className="text-sm md:text-base font-medium">
//                       {item.text}
//                     </span>
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Contact Form */}
//           <motion.div
//             variants={rightContentVariants}
//             className="w-full max-w-sm sm:max-w-md mx-auto md:max-w-none"
//           >
//             <Card
//               className="backdrop-blur-lg border-0 shadow-2xl rounded-xl md:rounded-[18px]"
//               style={{
//                 background: "linear-gradient(135deg, #6B73FF 0%, #000C66 100%)",
//               }}
//             >
//               <CardContent className="p-4 sm:p-6 md:p-8">
//                 <form onSubmit={handleSubmit} className="space-y-3">
//                   <motion.div variants={formFieldVariants}>
//                     <Input
//                       id="fullName"
//                       name="fullName"
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       label="Full name*"
//                       placeholder="Enter your full name"
//                       className="text-gray-900 placeholder:text-gray-500"
//                     />
//                   </motion.div>

//                   <motion.div variants={formFieldVariants}>
//                     <Input
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       type="tel"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       label="Phone Number"
//                       fullWidth
//                       placeholder="Enter your phone number"
//                       className="text-gray-900 placeholder:text-gray-500"
//                     />
//                   </motion.div>

//                   <motion.div variants={formFieldVariants}>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       variant="default"
//                       label="Message"
//                       size="sm"
//                       fullWidth
//                       placeholder="Enter your message here..."
//                       className="text-gray-900 placeholder:text-gray-500"
//                       rows={1}
//                     />
//                   </motion.div>

//                   <motion.div variants={formFieldVariants}>
//                     <Input
//                       id="dateTime"
//                       name="dateTime"
//                       type="text"
//                       value={formData.dateTime}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       label="Select Date&Time"
//                       fullWidth
//                       placeholder="Select date and time"
//                       className="text-gray-900 placeholder:text-gray-500"
//                     />
//                   </motion.div>

//                   <motion.div
//                     variants={formFieldVariants}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       loading={isSubmitting}
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       className="font-semibold bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600"
//                     >
//                       Get Started Now
//                     </Button>
//                   </motion.div>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

// import React from "react";
// import { motion, useInView } from "framer-motion";
// import type { Variants } from "framer-motion";
// import { useRef, useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Calendar,
//   Monitor,
//   User,
//   type LucideIcon,
// } from "lucide-react";
// import { Input } from "../common/Input";
// import { Textarea } from "../common/Textarea";
// import { Button } from "../common/Button";

// // Card components for standard React (replacing shadcn/ui)
// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
//   style?: React.CSSProperties;
// }

// const Card: React.FC<CardProps> = ({ children, className = "", style }) => (
//   <div className={className} style={style}>
//     {children}
//   </div>
// );

// const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
//   <div className={className}>{children}</div>
// );

// // Type definitions
// interface FormData {
//   fullName: string;
//   phoneNumber: string;
//   message: string;
//   dateTime: string;
// }

// interface ContactInfo {
//   icon: LucideIcon;
//   text: string;
//   href: string;
// }

// // Animation variants
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1,
//     },
//   },
// };

// const leftContentVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: -60,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 100,
//       damping: 20,
//       duration: 0.8,
//     },
//   },
// };

// const rightContentVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: 60,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 100,
//       damping: 20,
//       duration: 0.8,
//     },
//   },
// };

// const formFieldVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 120,
//       damping: 15,
//     },
//   },
// };

// const contactItemVariants: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 150,
//       damping: 20,
//     },
//   },
// };

// // Illustration Component matching Figma design
// const MeetingIllustration: React.FC = () => (
//   <div className="relative w-40 h-32 mx-auto mb-6 md:mx-0">
//     {/* Main Computer/Monitor */}
//     <motion.div
//       className="relative w-32 h-24 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-2xl shadow-lg"
//       animate={{
//         y: [0, -4, 0],
//       }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       {/* Screen */}
//       <div className="absolute top-2 left-2 right-2 bottom-6 bg-gray-900 rounded-lg overflow-hidden">
//         <div className="h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center relative">
//           <Monitor className="w-6 h-6 text-white opacity-80" />
//         </div>
//       </div>

//       {/* Monitor Stand */}
//       <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-700 rounded-sm"></div>

//       {/* Small decorative dot */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
//     </motion.div>

//     {/* Person Avatar with Chat Bubble */}
//     <motion.div
//       className="absolute -right-4 -top-2 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
//       animate={{
//         y: [0, -6, 0],
//       }}
//       transition={{
//         duration: 2.5,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 0.5,
//       }}
//     >
//       <User className="w-7 h-7 text-white" />
//     </motion.div>

//     {/* Chat Bubble */}
//     <motion.div
//       className="absolute -right-1 top-6 w-10 h-8 bg-emerald-400 rounded-2xl flex items-center justify-center shadow-md"
//       style={{
//         borderBottomLeftRadius: "4px",
//       }}
//       animate={{
//         scale: [1, 1.1, 1],
//       }}
//       transition={{
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 1,
//       }}
//     >
//       {/* Chat dots */}
//       <div className="flex space-x-1">
//         <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//         <div
//           className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
//           style={{ animationDelay: "0.2s" }}
//         ></div>
//         <div
//           className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
//           style={{ animationDelay: "0.4s" }}
//         ></div>
//       </div>
//     </motion.div>
//   </div>
// );

// const ContactSection: React.FC = () => {
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     phoneNumber: "",
//     message: "",
//     dateTime: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     // Reset form
//     setFormData({
//       fullName: "",
//       phoneNumber: "",
//       message: "",
//       dateTime: "",
//     });

//     setIsSubmitting(false);
//   };

//   const contactInfo: ContactInfo[] = [
//     {
//       icon: Phone,
//       text: "0955*******",
//       href: "tel:0955*******",
//     },
//     {
//       icon: Mail,
//       text: "info@bveptec.com",
//       href: "mailto:info@bveptec.com",
//     },
//     {
//       icon: MapPin,
//       text: "Lorem ipsum dolor sit amet",
//       href: "#",
//     },
//   ];

//   return (
//     <section ref={ref} className="relative min-h-screen overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto"
//         >
//           {/* Left Content */}
//           <motion.div
//             variants={leftContentVariants}
//             className="space-y-8 text-center md:text-left"
//           >
//             <div className="flex items-start gap-6 flex-col md:flex-row md:items-center">
//               <motion.img
//                 src="/public/icons/contact-icon.svg"
//                 alt="Schedule a meeting illustration"
//                 className="w-48 h-48 object-contain mx-auto md:mx-0 flex-shrink-0"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//               />

//               <div className="space-y-4">
//                 <motion.h1
//                   className="text-white"
//                   style={{
//                     fontWeight: 700,
//                   }}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                 >
//                   <span className="block text-3xl sm:text-4xl md:text-5xl">
//                     Schedule a
//                   </span>
//                   <span className="block text-3xl sm:text-4xl md:text-5xl">
//                     meeting
//                   </span>
//                   <span className="block text-3xl sm:text-3xl md:text-5xl text-primary mt-2">
//                     Talk to an expert
//                   </span>
//                 </motion.h1>
//               </div>
//             </div>

//             <motion.div
//               className="space-y-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
//                 Contact Us
//               </h3>
//               <motion.div variants={containerVariants} className="space-y-3">
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                     key={index}
//                     href={item.href}
//                     variants={contactItemVariants}
//                     className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300 group cursor-pointer"
//                     whileHover={{ x: 5 }}
//                   >
//                     <motion.div
//                       className="p-1.5 md:p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
//                     </motion.div>
//                     <span className="text-sm md:text-base font-medium">
//                       {item.text}
//                     </span>
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Contact Form */}
//           <motion.div
//             variants={rightContentVariants}
//             className="w-full max-w-md mx-auto md:max-w-none"
//           >
//             <Card
//               className="backdrop-blur-lg border-0 shadow-2xl rounded-xl md:rounded-[18px]"
//               style={{
//                 background: "linear-gradient(135deg, #6B73FF 0%, #000C66 100%)",
//               }}
//             >
//               <CardContent className="p-6 sm:p-8">
//                 <form onSubmit={handleSubmit} className="space-y-3">
//                   <motion.div variants={formFieldVariants}>
//                     <Input
//                       id="fullName"
//                       name="fullName"
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       label="Full name*"
//                       placeholder="Enter your full name"
//                       className="text-gray-900 placeholder:text-gray-500"
//                     />
//                   </motion.div>

//                   <motion.div variants={formFieldVariants}>
//                     <Input
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       type="tel"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       label="Phone Number"
//                       fullWidth
//                       placeholder="Enter your phone number"
//                       className="text-gray-900 placeholder:text-gray-500"
//                     />
//                   </motion.div>

//                   <motion.div variants={formFieldVariants}>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       variant="default"
//                       label="Message"
//                       size="sm"
//                       fullWidth
//                       placeholder="Enter your message here..."
//                       className="text-gray-900 placeholder:text-gray-500"
//                       rows={1}
//                     />
//                   </motion.div>

//                   <motion.div variants={formFieldVariants}>
//                     <Input
//                       id="dateTime"
//                       name="dateTime"
//                       type="text"
//                       value={formData.dateTime}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       label="Select Date&Time"
//                       fullWidth
//                       placeholder="Select date and time"
//                       className="text-gray-900 placeholder:text-gray-500"
//                     />
//                   </motion.div>

//                   <motion.div
//                     variants={formFieldVariants}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       loading={isSubmitting}
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       className="font-semibold bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600"
//                     >
//                       Get Started Now
//                     </Button>
//                   </motion.div>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

// import React from "react";
// import { motion, useInView } from "framer-motion";
// import type { Variants } from "framer-motion";
// import { useRef, useState } from "react";
// import { Phone, Mail, MapPin, type LucideIcon } from "lucide-react";
// import { Input } from "../common/Input";
// import { Textarea } from "../common/Textarea";
// import { Button } from "../common/Button";

// // Card components for standard React (replacing shadcn/ui)
// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
//   style?: React.CSSProperties;
// }

// const Card: React.FC<CardProps> = ({ children, className = "", style }) => (
//   <div className={className} style={style}>
//     {children}
//   </div>
// );

// const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
//   <div className={className}>{children}</div>
// );

// // Type definitions
// interface FormData {
//   fullName: string;
//   phoneNumber: string;
//   message: string;
// }

// interface ContactInfo {
//   icon: LucideIcon;
//   text: string;
//   href: string;
// }

// // Animation variants with proper typing
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1,
//     },
//   },
// };

// const leftContentVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: -60,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 100,
//       damping: 20,
//       duration: 0.8,
//     },
//   },
// };

// const rightContentVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: 60,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 100,
//       damping: 20,
//       duration: 0.8,
//     },
//   },
// };

// const formFieldVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 120,
//       damping: 15,
//     },
//   },
// };

// const contactItemVariants: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 150,
//       damping: 20,
//     },
//   },
// };

// const ContactSection: React.FC = () => {
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     // Reset form
//     setFormData({
//       fullName: "",
//       phoneNumber: "",
//       message: "",
//     });

//     setIsSubmitting(false);
//   };

//   const contactInfo: ContactInfo[] = [
//     {
//       icon: Phone,
//       text: "+20150*******",
//       href: "tel:+20150*******",
//     },
//     {
//       icon: Mail,
//       text: "info@example.com",
//       href: "mailto:info@example.com",
//     },
//     {
//       icon: MapPin,
//       text: "Lorem ipsum dolor sit amet",
//       href: "#",
//     },
//   ];

//   return (
//     <section ref={ref} className="relative min-h-screen overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center"
//         >
//           {/* Left Content */}
//           <motion.div
//             variants={leftContentVariants}
//             className="space-y-6 text-center md:text-left"
//           >
//             <div className="space-y-4">
//               <motion.h1
//                 className="text-white"
//                 style={{
//                   fontWeight: 700,
//                 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//               >
//                 <span className="block text-3xl sm:text-4xl md:text-[48px]">
//                   We are always ready
//                 </span>
//                 <span className="block text-3xl sm:text-4xl md:text-[48px]">
//                   to help you and
//                 </span>
//                 <span className="block text-3xl sm:text-4xl md:text-[48px] text-primary">
//                   answer you are
//                 </span>
//                 <span className="block text-3xl sm:text-4xl md:text-[48px] text-primary">
//                   questions
//                 </span>
//               </motion.h1>
//             </div>
//             <motion.div
//               className="space-y-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
//                 Let's talk{" "}
//               </h3>
//               <motion.div variants={containerVariants} className="space-y-3">
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                     key={index}
//                     href={item.href}
//                     variants={contactItemVariants}
//                     className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300 group cursor-pointer"
//                     whileHover={{ x: 5 }}
//                   >
//                     <motion.div
//                       className="p-1.5 md:p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
//                     </motion.div>
//                     <span className="text-sm md:text-base font-medium">
//                       {item.text}
//                     </span>
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Contact Form */}
//           <motion.div
//             variants={rightContentVariants}
//             className="w-full max-w-md mx-auto md:max-w-none"
//           >
//             <Card
//               className="backdrop-blur-lg border-0 shadow-2xl rounded-xl md:rounded-[18px]"
//               style={{
//                 background: "linear-gradient(to bottom left, #6587EE, #03024F)",
//               }}
//             >
//               <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-auto">
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <motion.div
//                     variants={formFieldVariants}
//                     className="space-y-2"
//                   >
//                     <Input
//                       id="fullName"
//                       name="fullName"
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       label="Full Name"
//                       placeholder="Enter your full name"
//                       className="text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
//                     />
//                   </motion.div>

//                   <motion.div
//                     variants={formFieldVariants}
//                     className="space-y-2"
//                   >
//                     <Input
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       type="tel"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                       variant="default"
//                       size="lg"
//                       label="Phone Number"
//                       fullWidth
//                       placeholder="Enter your phone number"
//                       className="text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
//                     />
//                   </motion.div>

//                   <motion.div
//                     variants={formFieldVariants}
//                     className="space-y-2"
//                   >
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       variant="default"
//                       label="Message"
//                       size="md"
//                       fullWidth
//                       placeholder="Enter your message here..."
//                       className="text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-400"
//                     />
//                   </motion.div>

//                   <motion.div
//                     variants={formFieldVariants}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       loading={isSubmitting}
//                       variant="default"
//                       size="lg"
//                       fullWidth
//                       className="font-semibold"
//                     >
//                       Get Started Free
//                     </Button>
//                   </motion.div>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
