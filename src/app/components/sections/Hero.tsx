"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-12 w-[80%] max-w-7xl text-left">
          {/* Hero Title */}
          <motion.div variants={titleVariants} className="space-y-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-[700] text-white leading-tight"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Transforming your vision
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                into a <span className="text-primary">stunning website</span>
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                that drives success!
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description Card */}
          <motion.div variants={itemVariants} className="flex justify-start">
            <motion.div
              className="border border-green-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 bg-green-400/10 backdrop-blur-sm max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.p
                className="text-green-300 text-xs sm:text-sm lg:text-base leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Crafting digital experiences that captivate audiences and drive
                measurable results. From concept to launch, we transform your
                brand vision into powerful web solutions that engage, convert,
                and scale with your business growth.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust Section - Enhanced Responsive */}
      <motion.div
        className="w-[80%] max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8 mt-8 sm:mt-12"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.p
            className="text-white/80 text-xs sm:text-sm lg:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Trusted by 35+ businesses worldwide
          </motion.p>

          {/* Logo Grid - Mobile First Responsive */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-80">
            {[
              { src: "/icons/tawuniya.svg", alt: "Tawuniya", delay: 0 },
              { src: "/icons/society.svg", alt: "Saudi Ministry", delay: 0.1 },
              { src: "/icons/dalil.svg", alt: "Guide", delay: 0.2 },
              { src: "/icons/tawuniya.svg", alt: "Tawuniya", delay: 0.3 },
            ].map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 mx-auto sm:mx-0"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{
                  scale: 1.1,
                  // brightness: 1.2,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            ))}
          </div>

          {/* Enhanced Pagination Dots */}
          <motion.div
            className="flex justify-center space-x-2 pt-4 sm:pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <motion.div
                key={index}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  index === 0
                    ? "w-3 h-3 bg-green-400 shadow-lg shadow-green-400/50"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={
                  index === 0
                    ? {
                        boxShadow: [
                          "0 0 20px rgba(34, 197, 94, 0.5)",
                          "0 0 30px rgba(34, 197, 94, 0.8)",
                          "0 0 20px rgba(34, 197, 94, 0.5)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="min-h-screen flex flex-col px-4 py-16">
//       {/* Main Content Container */}
//       <div className="flex-1 flex items-center justify-center">
//         <div className="flex flex-col space-y-8 w-[80%] text-left">
//           {/* Hero Title */}
//           <div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[700]  text-white leading-tight">
//               Transforming your vision
//               <br />
//               into a <span className="text-primary">stunning website</span>
//               <br />
//               that drives success!
//             </h1>
//           </div>

//           {/* Description */}
//           <div className="flex justify-start">
//             <div className="border border-green-400/30 rounded-lg p-6 bg-green-400/10 backdrop-blur-sm max-w-md">
//               <p className="text-green-300 text-sm leading-relaxed">
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco"
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Section - Fixed at bottom */}
//       <div className="w-[80%] mx-auto px-4 pb-8 mt-6">
//         <div className="text-center space-y-6">
//           <p className="text-white/80 text-sm">Trusted by 35+ businesses</p>

//           {/* Logo Grid */}
//           <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12 opacity-80">
//             <img
//               src="/icons/tawuniya.svg"
//               alt="Tawrunia"
//               className="h-10 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
//             />
//             <img
//               src="/icons/society.svg"
//               alt="Saudi Ministry"
//               className="h-10 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
//             />
//             <img
//               src="/icons/dalil.svg"
//               alt="Guide"
//               className="h-10 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
//             />
//             <img
//               src="/icons/tawuniya.svg"
//               alt="Tawrunia"
//               className="h-10 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
//             />
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center space-x-2 pt-4">
//             <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//             <div className="w-2 h-2 bg-white/30 rounded-full"></div>
//             <div className="w-2 h-2 bg-white/30 rounded-full"></div>
//             <div className="w-2 h-2 bg-white/30 rounded-full"></div>
//             <div className="w-2 h-2 bg-white/30 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
