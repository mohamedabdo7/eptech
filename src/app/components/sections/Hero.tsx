"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [screenSize, setScreenSize] = useState("lg");

  // Original logos array
  const logos = [
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/society.svg", alt: "Saudi Ministry" },
    { src: "/icons/dalil.svg", alt: "Guide" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/society.svg", alt: "Saudi Ministry" },
    { src: "/icons/dalil.svg", alt: "Guide" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/society.svg", alt: "Saudi Ministry" },
    { src: "/icons/dalil.svg", alt: "Guide" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/society.svg", alt: "Saudi Ministry" },
    { src: "/icons/dalil.svg", alt: "Guide" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
    { src: "/icons/society.svg", alt: "Saudi Ministry" },
    { src: "/icons/dalil.svg", alt: "Guide" },
    { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
  ];

  // Screen size detection and logos per page calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("sm");
      } else if (width < 768) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    setIsLoaded(true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate logos per page based on screen size
  const getLogosPerPage = () => {
    switch (screenSize) {
      case "sm":
        return 1; // Mobile: 1 logo per page
      case "md":
        return 2; // Tablet: 2 logos per page
      case "lg":
        return 4; // Desktop: 4 logos per page
      default:
        return 4;
    }
  };

  const logosPerPage = getLogosPerPage();
  const totalPages = Math.ceil(logos.length / logosPerPage);

  // Get current page logos
  const getCurrentPageLogos = () => {
    const startIndex = currentPage * logosPerPage;
    return logos.slice(startIndex, startIndex + logosPerPage);
  };

  // Remove auto-advance functionality

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
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Cinematic circle animations
  const cinematicCircleVariants = {
    initial: {
      x: "50vw",
      y: "50vh",
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1,
      },
    },
  };

  const topLeftCircleVariants = {
    ...cinematicCircleVariants,
    animate: {
      ...cinematicCircleVariants.animate,
      x: "5vw",
      y: "0vh",
    },
  };

  const bottomRightCircleVariants = {
    ...cinematicCircleVariants,
    animate: {
      ...cinematicCircleVariants.animate,
      x: "85vw",
      y: "70vh",
      transition: {
        ...cinematicCircleVariants.animate.transition,
        delay: 1.5,
      },
    },
  };

  // Star particles
  const createStarParticles = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomDuration = 2 + Math.random() * 3;

      return (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white/80 rounded-full"
          style={{
            left: `${randomX}%`,
            top: `${randomY}%`,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: randomDuration,
            delay: randomDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    });
  };

  // Meteor effects
  const createMeteorEffects = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 50;
      const endX = startX + 20 + Math.random() * 30;
      const endY = startY + 20 + Math.random() * 30;
      const randomDelay = Math.random() * 8 + 2;

      return (
        <motion.div
          key={`meteor-${i}`}
          className="absolute"
          style={{
            left: `${startX}%`,
            top: `${startY}%`,
          }}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [`0vw`, `${endX - startX}vw`],
            y: [`0vh`, `${endY - startY}vh`],
          }}
          transition={{
            duration: 1.5,
            delay: randomDelay,
            repeat: Infinity,
            repeatDelay: 8 + Math.random() * 4,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="w-1 h-8 bg-gradient-to-b from-white via-blue-200 to-transparent rounded-full"
            style={{
              transform: "rotate(45deg)",
              filter: "blur(0.5px)",
            }}
            animate={{
              scaleY: [0, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute -top-2 left-0 w-0.5 h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"
            style={{
              transform: "rotate(45deg)",
              filter: "blur(1px)",
            }}
            animate={{
              scaleY: [0, 1, 0.1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />
        </motion.div>
      );
    });
  };

  // Trail particle animations
  const createTopLeftTrailParticles = (count, delay) => {
    return Array.from({ length: count }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
        initial={{
          x: "50vw",
          y: "50vh",
          scale: 0,
          opacity: 0,
        }}
        animate={{
          x: "15vw",
          y: "15vh",
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          delay: delay + i * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    ));
  };

  const createBottomRightTrailParticles = (count, delay) => {
    return Array.from({ length: count }, (_, i) => (
      <motion.div
        key={`bottom-${i}`}
        className="absolute w-2 h-2 bg-green-400/60 rounded-full"
        initial={{
          x: "50vw",
          y: "50vh",
          scale: 0,
          opacity: 0,
        }}
        animate={{
          x: "85vw",
          y: "70vh",
          scale: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          delay: delay + i * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    ));
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

        {/* Star particles */}
        {isLoaded && createStarParticles(25)}

        {/* Meteor effects */}
        {isLoaded && createMeteorEffects(4)}

        {/* Trail particles for top left circle */}
        {isLoaded && createTopLeftTrailParticles(8, 0.8)}

        {/* Trail particles for bottom right circle */}
        {isLoaded && createBottomRightTrailParticles(8, 1.2)}

        {/* Main Cinematic Circles */}
        <motion.div
          className="absolute w-24 h-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0.3) 70%, transparent 100%)",
            filter: "blur(1px)",
          }}
          variants={topLeftCircleVariants}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
        >
          <motion.div
            className="absolute inset-2 rounded-full bg-blue-400/60"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.3) 70%, transparent 100%)",
            filter: "blur(1px)",
          }}
          variants={bottomRightCircleVariants}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
        >
          <motion.div
            className="absolute inset-3 rounded-full bg-green-400/60"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
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

          {/* Description */}
          <motion.div variants={itemVariants} className="flex justify-start">
            <motion.div
              // className="border border-green-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 bg-green-400/10 backdrop-blur-sm max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl"
              className=" max-w-sm sm:max-w-md lg:max-w-lg "
              whileHover={
                {
                  // scale: 1.02,
                  // boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
                }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.p
                className="text-white text-xs sm:text-sm lg:text-base leading-relaxed"
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

      {/* Enhanced Trust Section with Responsive Logo Slider */}
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
            Trusted by {logos.length}+ businesses worldwide
          </motion.p>

          {/* Logo Grid - Responsive with Slider */}
          <div className="relative min-h-[80px] sm:min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={`
                  w-full opacity-80
                  ${
                    screenSize === "sm"
                      ? "flex justify-center"
                      : screenSize === "md"
                      ? "grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 place-items-center"
                      : "flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12"
                  }
                `}
              >
                {getCurrentPageLogos().map((logo, index) => (
                  <motion.img
                    key={`${currentPage}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 lg:h-12 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 mx-auto sm:mx-0"
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Pagination Dots */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center space-x-2 pt-4 sm:pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400/50 ${
                    index === currentPage
                      ? "w-3 h-3 bg-green-400 shadow-lg shadow-green-400/50"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    index === currentPage
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
                    repeat: index === currentPage ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const floatingVariants = {
//     animate: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const logoVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (i: number) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     }),
//   };

//   return (
//     <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-40 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.5, 0.2],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
//       </div>

//       {/* Main Content Container */}
//       <motion.div
//         className="flex-1 flex items-center justify-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-12 w-[80%] max-w-7xl text-left">
//           {/* Hero Title */}
//           <motion.div variants={titleVariants} className="space-y-4">
//             <motion.h1
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-[700] text-white leading-tight"
//               variants={floatingVariants}
//               animate="animate"
//             >
//               <motion.span
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//               >
//                 Transforming your vision
//               </motion.span>
//               <br />
//               <motion.span
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//               >
//                 into a <span className="text-primary">stunning website</span>
//               </motion.span>
//               <br />
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9, duration: 0.8 }}
//               >
//                 that drives success!
//               </motion.span>
//             </motion.h1>
//           </motion.div>

//           {/* Description Card */}
//           <motion.div variants={itemVariants} className="flex justify-start">
//             <motion.div
//               className="border border-green-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 bg-green-400/10 backdrop-blur-sm max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl"
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <motion.p
//                 className="text-green-300 text-xs sm:text-sm lg:text-base leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//               >
//                 Crafting digital experiences that captivate audiences and drive
//                 measurable results. From concept to launch, we transform your
//                 brand vision into powerful web solutions that engage, convert,
//                 and scale with your business growth.
//               </motion.p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Trust Section - Enhanced Responsive */}
//       <motion.div
//         className="w-[80%] max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8 mt-8 sm:mt-12"
//         variants={itemVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="text-center space-y-4 sm:space-y-6">
//           <motion.p
//             className="text-white/80 text-xs sm:text-sm lg:text-base"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.4, duration: 0.6 }}
//           >
//             Trusted by 35+ businesses worldwide
//           </motion.p>

//           {/* Logo Grid - Mobile First Responsive */}
//           <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-80">
//             {[
//               { src: "/icons/tawuniya.svg", alt: "Tawuniya", delay: 0 },
//               { src: "/icons/society.svg", alt: "Saudi Ministry", delay: 0.1 },
//               { src: "/icons/dalil.svg", alt: "Guide", delay: 0.2 },
//               { src: "/icons/tawuniya.svg", alt: "Tawuniya", delay: 0.3 },
//             ].map((logo, index) => (
//               <motion.img
//                 key={index}
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="h-8 sm:h-10 lg:h-12 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300 mx-auto sm:mx-0"
//                 variants={logoVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={index}
//                 whileHover={{
//                   scale: 1.1,
//                   // brightness: 1.2,
//                 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               />
//             ))}
//           </div>

//           {/* Enhanced Pagination Dots */}
//           <motion.div
//             className="flex justify-center space-x-2 pt-4 sm:pt-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.8, duration: 0.6 }}
//           >
//             {[0, 1, 2, 3, 4].map((dot, index) => (
//               <motion.div
//                 key={index}
//                 className={`rounded-full transition-all duration-300 cursor-pointer ${
//                   index === 0
//                     ? "w-3 h-3 bg-green-400 shadow-lg shadow-green-400/50"
//                     : "w-2 h-2 bg-white/30 hover:bg-white/50"
//                 }`}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 animate={
//                   index === 0
//                     ? {
//                         boxShadow: [
//                           "0 0 20px rgba(34, 197, 94, 0.5)",
//                           "0 0 30px rgba(34, 197, 94, 0.8)",
//                           "0 0 20px rgba(34, 197, 94, 0.5)",
//                         ],
//                       }
//                     : {}
//                 }
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;
