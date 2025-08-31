import React, { useState, useEffect, type JSX } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type ScreenSize = "sm" | "md" | "lg";

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [_, setScreenSize] = useState<ScreenSize>("lg");

  // Screen size detection
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

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
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

  const titleVariants: Variants = {
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

  const topLeftCircleVariants: Variants = {
    initial: {
      x: "50vw",
      y: "50vh",
      scale: 0,
      opacity: 0,
      rotate: 0,
    },
    animate: {
      x: "5vw",
      y: "0vh",
      scale: 1,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        duration: 3,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1,
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  const bottomRightCircleVariants: Variants = {
    initial: {
      x: "50vw",
      y: "50vh",
      scale: 0,
      opacity: 0,
      rotate: 0,
    },
    animate: {
      x: "85vw",
      y: "70vh",
      scale: 1,
      opacity: 1,
      rotate: [0, -360],
      transition: {
        duration: 3,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 1.5,
        rotate: {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  // Enhanced star particles with shimmer effect
  const createStarParticles = (count: number): JSX.Element[] => {
    return Array.from({ length: count }, (_, i) => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomDuration = 2 + Math.random() * 3;

      return (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${randomX}%`,
            top: `${randomY}%`,
            background: "linear-gradient(45deg, #ffffff, #60a5fa, #34d399)",
            boxShadow:
              "0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(96, 165, 250, 0.6)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            filter: [
              "brightness(1) saturate(1)",
              "brightness(2) saturate(1.5)",
              "brightness(1) saturate(1)",
            ],
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

  // Enhanced meteor effects with realistic trails
  const createMeteorEffects = (count: number): JSX.Element[] => {
    return Array.from({ length: count }, (_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 50;
      const angle = 45 + Math.random() * 30; // Random angle between 45-75 degrees
      const distance = 40 + Math.random() * 60;
      const endX = startX + Math.cos((angle * Math.PI) / 180) * distance;
      const endY = startY + Math.sin((angle * Math.PI) / 180) * distance;
      const randomDelay = Math.random() * 8 + 2;
      const speed = 1.2 + Math.random() * 0.8; // Varying speeds

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
            opacity: [0, 1, 1, 0],
            x: [`0vw`, `${endX - startX}vw`],
            y: [`0vh`, `${endY - startY}vh`],
          }}
          transition={{
            duration: speed,
            delay: randomDelay,
            repeat: Infinity,
            repeatDelay: 6 + Math.random() * 8,
            ease: "easeIn",
          }}
        >
          {/* Main meteor head */}
          <motion.div
            className="absolute w-2 h-2 rounded-full z-10"
            style={{
              background: "radial-gradient(circle, #ffffff, #60a5fa, #3b82f6)",
              boxShadow:
                "0 0 15px rgba(255, 255, 255, 1), 0 0 25px rgba(96, 165, 250, 0.8)",
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              filter: [
                "brightness(2) saturate(1.5)",
                "brightness(3) saturate(2)",
                "brightness(2) saturate(1.5)",
              ],
            }}
            transition={{
              duration: speed,
              ease: "easeOut",
            }}
          />

          {/* Primary trail line */}
          <motion.div
            className="absolute w-1 rounded-full origin-left"
            style={{
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(96, 165, 250, 0.7), transparent)",
              transform: `rotate(${angle + 180}deg)`,
              transformOrigin: "0 50%",
              filter: "blur(0.5px)",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
            }}
            initial={{
              height: "2px",
              scaleX: 0,
            }}
            animate={{
              height: ["2px", "4px", "2px"],
              scaleX: [0, 1, 0.3],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: speed,
              ease: "easeOut",
            }}
          />

          {/* Secondary trail line (longer, more diffuse) */}
          <motion.div
            className="absolute w-0.5 rounded-full origin-left"
            style={{
              background:
                "linear-gradient(to right, rgba(96, 165, 250, 0.6), rgba(59, 130, 246, 0.4), transparent)",
              transform: `rotate(${angle + 180}deg)`,
              transformOrigin: "0 50%",
              filter: "blur(1px)",
              boxShadow: "0 0 12px rgba(96, 165, 250, 0.4)",
            }}
            initial={{
              height: "1px",
              scaleX: 0,
            }}
            animate={{
              height: ["1px", "3px", "1px"],
              scaleX: [0, 1.5, 0.2],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: speed,
              ease: "easeOut",
              delay: 0.1,
            }}
          />

          {/* Tertiary trail (longest, most diffuse) */}
          <motion.div
            className="absolute w-0.5 rounded-full origin-left"
            style={{
              background:
                "linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.2), transparent)",
              transform: `rotate(${angle + 180}deg)`,
              transformOrigin: "0 50%",
              filter: "blur(2px)",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
            initial={{
              height: "0.5px",
              scaleX: 0,
            }}
            animate={{
              height: ["0.5px", "2px", "0.5px"],
              scaleX: [0, 2, 0.1],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: speed,
              ease: "easeOut",
              delay: 0.2,
            }}
          />

          {/* Spark particles trailing behind */}
          {Array.from({ length: 3 }, (_, sparkIndex) => (
            <motion.div
              key={`spark-${sparkIndex}`}
              className="absolute w-0.5 h-0.5 rounded-full"
              style={{
                background: "radial-gradient(circle, #ffffff, #60a5fa)",
                boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
                transform: `rotate(${angle + 180}deg)`,
              }}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: [0, -10 - sparkIndex * 5, -20 - sparkIndex * 8],
                y: [0, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 8],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: speed,
                delay: sparkIndex * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      );
    });
  };

  // Enhanced trail particles with glossy effect
  const createTopLeftTrailParticles = (
    count: number,
    delay: number
  ): JSX.Element[] => {
    return Array.from({ length: count }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: "radial-gradient(circle, #60a5fa, #3b82f6)",
          boxShadow:
            "0 0 10px rgba(96, 165, 250, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
        }}
        initial={{
          x: "50vw",
          y: "50vh",
          scale: 0,
          opacity: 0,
        }}
        animate={{
          x: "15vw",
          y: "15vh",
          scale: [0, 1.2, 0],
          opacity: [0, 0.9, 0],
          filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
        }}
        transition={{
          duration: 3,
          delay: delay + i * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    ));
  };

  const createBottomRightTrailParticles = (
    count: number,
    delay: number
  ): JSX.Element[] => {
    return Array.from({ length: count }, (_, i) => (
      <motion.div
        key={`bottom-${i}`}
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: "radial-gradient(circle, #34d399, #10b981)",
          boxShadow:
            "0 0 10px rgba(52, 211, 153, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
        }}
        initial={{
          x: "50vw",
          y: "50vh",
          scale: 0,
          opacity: 0,
        }}
        animate={{
          x: "85vw",
          y: "70vh",
          scale: [0, 1.2, 0],
          opacity: [0, 0.9, 0],
          filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
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
      {/* Enhanced Animated Background Elements with Glossy Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced star particles */}
        {isLoaded && createStarParticles(30)}

        {/* Enhanced meteor effects */}
        {isLoaded && createMeteorEffects(5)}

        {/* Enhanced trail particles */}
        {isLoaded && createTopLeftTrailParticles(10, 0.8)}
        {isLoaded && createBottomRightTrailParticles(10, 1.2)}

        {/* Advanced Cinematic Circles with Complex Animations */}
        <motion.div
          className="absolute w-24 h-24 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(99, 102, 241, 0.9), rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.9))",
            boxShadow:
              "0 0 60px rgba(99, 102, 241, 0.6), inset 0 4px 20px rgba(255, 255, 255, 0.3), 0 0 100px rgba(147, 51, 234, 0.4)",
            filter: "blur(1px)",
          }}
          variants={topLeftCircleVariants}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
        >
          <motion.div
            className="absolute inset-2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 25% 25%, rgba(96, 165, 250, 0.9), rgba(59, 130, 246, 0.6))",
              boxShadow:
                "inset 0 2px 8px rgba(255, 255, 255, 0.4), 0 0 30px rgba(96, 165, 250, 0.5)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
              rotate: [0, -180, -360],
              filter: ["brightness(1)", "brightness(1.8)", "brightness(1)"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          {/* Inner glow core */}
          <motion.div
            className="absolute inset-4 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%)",
              filter: "blur(2px)",
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg, rgba(34, 197, 94, 0.9), rgba(16, 185, 129, 0.8), rgba(52, 211, 153, 0.9), rgba(34, 197, 94, 0.9))",
            boxShadow:
              "0 0 80px rgba(34, 197, 94, 0.6), inset 0 4px 25px rgba(255, 255, 255, 0.3), 0 0 120px rgba(16, 185, 129, 0.4)",
            filter: "blur(1px)",
          }}
          variants={bottomRightCircleVariants}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
        >
          <motion.div
            className="absolute inset-3 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.6))",
              boxShadow:
                "inset 0 2px 12px rgba(255, 255, 255, 0.4), 0 0 40px rgba(52, 211, 153, 0.5)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 180, 360],
              filter: ["brightness(1)", "brightness(1.8)", "brightness(1)"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
              rotate: {
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          {/* Inner glow core */}
          <motion.div
            className="absolute inset-6 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%)",
              filter: "blur(3px)",
            }}
            animate={{
              scale: [0.7, 1.3, 0.7],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          {/* Orbiting particles */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: "radial-gradient(circle, #ffffff, #34d399)",
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
              }}
              animate={{
                rotate: [0, 360],
                x: [0, 40, 0, -40, 0],
                y: [0, -20, 0, 20, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          ))}
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
          {/* Enhanced Hero Title with Glossy Text Effect */}
          <motion.div variants={titleVariants} className="space-y-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-[700] leading-tight"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #ffffff 50%, #e2e8f0 75%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                initial={{ letterSpacing: "-0.5em", opacity: 0 }}
                animate={{ letterSpacing: "0em", opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mb-2"
              >
                Transforming your vision
              </motion.div>

              <motion.div
                initial={{ letterSpacing: "-0.3em", opacity: 0 }}
                animate={{ letterSpacing: "0em", opacity: 1 }}
                transition={{
                  duration: 1.0,
                  delay: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mb-2"
              >
                into a{" "}
                <motion.span
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #06b6d4 50%, #10b981 75%, #f59e0b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "300% 300%",
                    filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))",
                  }}
                  initial={{ letterSpacing: "-0.2em", opacity: 0 }}
                  animate={{
                    letterSpacing: "0em",
                    opacity: 1,
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    backgroundPosition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  stunning website
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ letterSpacing: "-0.4em", opacity: 0 }}
                animate={{ letterSpacing: "0em", opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 2.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                that drives success!
              </motion.div>
            </motion.h1>
          </motion.div>

          {/* Enhanced Description with Glossy Container */}
          <motion.div variants={itemVariants} className="flex justify-start">
            <motion.div
              className="max-w-sm sm:max-w-md lg:max-w-lg"
              whileHover={{
                filter: "brightness(1.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.p
                className="leading-relaxed text-xs sm:text-sm lg:text-base"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                }}
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
    </div>
  );
};

export default HeroSection;

// import React, { useState, useEffect, type JSX } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import type { Variants } from "framer-motion";

// // Define types
// interface Logo {
//   src: string;
//   alt: string;
// }

// type ScreenSize = "sm" | "md" | "lg";

// const HeroSection: React.FC = () => {
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [screenSize, setScreenSize] = useState<ScreenSize>("lg");

//   // Original logos array
//   const logos: Logo[] = [
//     { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
//     { src: "/icons/society.svg", alt: "Saudi Ministry" },
//     { src: "/icons/dalil.svg", alt: "Guide" },
//     { src: "/icons/meena.svg", alt: "Meena" },
//     { src: "/icons/geriatrics.svg", alt: "Geriatrics" },
//     { src: "/icons/norah.svg", alt: "Norah" },
//     { src: "/icons/kafd.svg", alt: "KAFD" },
//     { src: "/icons/andorra.svg", alt: "Andorra" },
//     { src: "/icons/ksp.svg", alt: "KSP" },
//     { src: "/icons/family-med.svg", alt: "Family Medicine" },
//     { src: "/icons/khubarani.svg", alt: "Khubarani" },
//     { src: "/icons/faisal.svg", alt: "Faisal" },
//   ];

//   // Screen size detection and logos per page calculation
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setScreenSize("sm");
//       } else if (width < 768) {
//         setScreenSize("md");
//       } else {
//         setScreenSize("lg");
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     setIsLoaded(true);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Calculate logos per page based on screen size
//   const getLogosPerPage = (): number => {
//     switch (screenSize) {
//       case "sm":
//         return 1; // Mobile: 1 logo per page
//       case "md":
//         return 2; // Tablet: 2 logos per page
//       case "lg":
//         return 4; // Desktop: 4 logos per page
//       default:
//         return 4;
//     }
//   };

//   const logosPerPage = getLogosPerPage();
//   const totalPages = Math.ceil(logos.length / logosPerPage);

//   // Get current page logos
//   const getCurrentPageLogos = (): Logo[] => {
//     const startIndex = currentPage * logosPerPage;
//     return logos.slice(startIndex, startIndex + logosPerPage);
//   };

//   // Animation variants
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
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

//   const titleVariants: Variants = {
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

//   const logoVariants: Variants = {
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

//   // Advanced cinematic circle animations with complex patterns
//   // const cinematicCircleVariants: Variants = {
//   //   initial: {
//   //     x: "50vw",
//   //     y: "50vh",
//   //     scale: 0,
//   //     opacity: 0,
//   //     rotate: 0,
//   //   },
//   //   animate: {
//   //     scale: 1,
//   //     opacity: 1,
//   //     transition: {
//   //       duration: 3,
//   //       ease: [0.25, 0.46, 0.45, 0.94],
//   //       delay: 1,
//   //     },
//   //   },
//   // };

//   const topLeftCircleVariants: Variants = {
//     initial: {
//       x: "50vw",
//       y: "50vh",
//       scale: 0,
//       opacity: 0,
//       rotate: 0,
//     },
//     animate: {
//       x: "5vw",
//       y: "0vh",
//       scale: 1,
//       opacity: 1,
//       rotate: [0, 360],
//       transition: {
//         duration: 3,
//         ease: [0.25, 0.46, 0.45, 0.94],
//         delay: 1,
//         rotate: {
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         },
//       },
//     },
//   };

//   const bottomRightCircleVariants: Variants = {
//     initial: {
//       x: "50vw",
//       y: "50vh",
//       scale: 0,
//       opacity: 0,
//       rotate: 0,
//     },
//     animate: {
//       x: "85vw",
//       y: "70vh",
//       scale: 1,
//       opacity: 1,
//       rotate: [0, -360],
//       transition: {
//         duration: 3,
//         ease: [0.25, 0.46, 0.45, 0.94],
//         delay: 1.5,
//         rotate: {
//           duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//         },
//       },
//     },
//   };

//   // Enhanced star particles with shimmer effect
//   const createStarParticles = (count: number): JSX.Element[] => {
//     return Array.from({ length: count }, (_, i) => {
//       const randomX = Math.random() * 100;
//       const randomY = Math.random() * 100;
//       const randomDelay = Math.random() * 5;
//       const randomDuration = 2 + Math.random() * 3;

//       return (
//         <motion.div
//           key={`star-${i}`}
//           className="absolute w-1 h-1 rounded-full"
//           style={{
//             left: `${randomX}%`,
//             top: `${randomY}%`,
//             background: "linear-gradient(45deg, #ffffff, #60a5fa, #34d399)",
//             boxShadow:
//               "0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(96, 165, 250, 0.6)",
//           }}
//           animate={{
//             opacity: [0, 1, 0],
//             scale: [0.5, 1.5, 0.5],
//             filter: [
//               "brightness(1) saturate(1)",
//               "brightness(2) saturate(1.5)",
//               "brightness(1) saturate(1)",
//             ],
//           }}
//           transition={{
//             duration: randomDuration,
//             delay: randomDelay,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       );
//     });
//   };

//   // Enhanced meteor effects with realistic trails
//   const createMeteorEffects = (count: number): JSX.Element[] => {
//     return Array.from({ length: count }, (_, i) => {
//       const startX = Math.random() * 100;
//       const startY = Math.random() * 50;
//       const angle = 45 + Math.random() * 30; // Random angle between 45-75 degrees
//       const distance = 40 + Math.random() * 60;
//       const endX = startX + Math.cos((angle * Math.PI) / 180) * distance;
//       const endY = startY + Math.sin((angle * Math.PI) / 180) * distance;
//       const randomDelay = Math.random() * 8 + 2;
//       const speed = 1.2 + Math.random() * 0.8; // Varying speeds

//       return (
//         <motion.div
//           key={`meteor-${i}`}
//           className="absolute"
//           style={{
//             left: `${startX}%`,
//             top: `${startY}%`,
//           }}
//           initial={{
//             opacity: 0,
//             x: 0,
//             y: 0,
//           }}
//           animate={{
//             opacity: [0, 1, 1, 0],
//             x: [`0vw`, `${endX - startX}vw`],
//             y: [`0vh`, `${endY - startY}vh`],
//           }}
//           transition={{
//             duration: speed,
//             delay: randomDelay,
//             repeat: Infinity,
//             repeatDelay: 6 + Math.random() * 8,
//             ease: "easeIn",
//           }}
//         >
//           {/* Main meteor head */}
//           <motion.div
//             className="absolute w-2 h-2 rounded-full z-10"
//             style={{
//               background: "radial-gradient(circle, #ffffff, #60a5fa, #3b82f6)",
//               boxShadow:
//                 "0 0 15px rgba(255, 255, 255, 1), 0 0 25px rgba(96, 165, 250, 0.8)",
//               transform: `rotate(${angle}deg)`,
//             }}
//             animate={{
//               scale: [0.8, 1.2, 0.8],
//               filter: [
//                 "brightness(2) saturate(1.5)",
//                 "brightness(3) saturate(2)",
//                 "brightness(2) saturate(1.5)",
//               ],
//             }}
//             transition={{
//               duration: speed,
//               ease: "easeOut",
//             }}
//           />

//           {/* Primary trail line */}
//           <motion.div
//             className="absolute w-1 rounded-full origin-left"
//             style={{
//               background:
//                 "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(96, 165, 250, 0.7), transparent)",
//               transform: `rotate(${angle + 180}deg)`,
//               transformOrigin: "0 50%",
//               filter: "blur(0.5px)",
//               boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
//             }}
//             initial={{
//               height: "2px",
//               scaleX: 0,
//             }}
//             animate={{
//               height: ["2px", "4px", "2px"],
//               scaleX: [0, 1, 0.3],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: speed,
//               ease: "easeOut",
//             }}
//           />

//           {/* Secondary trail line (longer, more diffuse) */}
//           <motion.div
//             className="absolute w-0.5 rounded-full origin-left"
//             style={{
//               background:
//                 "linear-gradient(to right, rgba(96, 165, 250, 0.6), rgba(59, 130, 246, 0.4), transparent)",
//               transform: `rotate(${angle + 180}deg)`,
//               transformOrigin: "0 50%",
//               filter: "blur(1px)",
//               boxShadow: "0 0 12px rgba(96, 165, 250, 0.4)",
//             }}
//             initial={{
//               height: "1px",
//               scaleX: 0,
//             }}
//             animate={{
//               height: ["1px", "3px", "1px"],
//               scaleX: [0, 1.5, 0.2],
//               opacity: [0, 0.8, 0],
//             }}
//             transition={{
//               duration: speed,
//               ease: "easeOut",
//               delay: 0.1,
//             }}
//           />

//           {/* Tertiary trail (longest, most diffuse) */}
//           <motion.div
//             className="absolute w-0.5 rounded-full origin-left"
//             style={{
//               background:
//                 "linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.2), transparent)",
//               transform: `rotate(${angle + 180}deg)`,
//               transformOrigin: "0 50%",
//               filter: "blur(2px)",
//               boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
//             }}
//             initial={{
//               height: "0.5px",
//               scaleX: 0,
//             }}
//             animate={{
//               height: ["0.5px", "2px", "0.5px"],
//               scaleX: [0, 2, 0.1],
//               opacity: [0, 0.6, 0],
//             }}
//             transition={{
//               duration: speed,
//               ease: "easeOut",
//               delay: 0.2,
//             }}
//           />

//           {/* Spark particles trailing behind */}
//           {Array.from({ length: 3 }, (_, sparkIndex) => (
//             <motion.div
//               key={`spark-${sparkIndex}`}
//               className="absolute w-0.5 h-0.5 rounded-full"
//               style={{
//                 background: "radial-gradient(circle, #ffffff, #60a5fa)",
//                 boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
//                 transform: `rotate(${angle + 180}deg)`,
//               }}
//               initial={{
//                 x: 0,
//                 y: 0,
//                 scale: 0,
//                 opacity: 0,
//               }}
//               animate={{
//                 x: [0, -10 - sparkIndex * 5, -20 - sparkIndex * 8],
//                 y: [0, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 8],
//                 scale: [0, 1, 0],
//                 opacity: [0, 0.8, 0],
//               }}
//               transition={{
//                 duration: speed,
//                 delay: sparkIndex * 0.1,
//                 ease: "easeOut",
//               }}
//             />
//           ))}
//         </motion.div>
//       );
//     });
//   };

//   // Enhanced trail particles with glossy effect
//   const createTopLeftTrailParticles = (
//     count: number,
//     delay: number
//   ): JSX.Element[] => {
//     return Array.from({ length: count }, (_, i) => (
//       <motion.div
//         key={i}
//         className="absolute w-2 h-2 rounded-full"
//         style={{
//           background: "radial-gradient(circle, #60a5fa, #3b82f6)",
//           boxShadow:
//             "0 0 10px rgba(96, 165, 250, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
//         }}
//         initial={{
//           x: "50vw",
//           y: "50vh",
//           scale: 0,
//           opacity: 0,
//         }}
//         animate={{
//           x: "15vw",
//           y: "15vh",
//           scale: [0, 1.2, 0],
//           opacity: [0, 0.9, 0],
//           filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
//         }}
//         transition={{
//           duration: 3,
//           delay: delay + i * 0.2,
//           ease: [0.25, 0.46, 0.45, 0.94],
//         }}
//       />
//     ));
//   };

//   const createBottomRightTrailParticles = (
//     count: number,
//     delay: number
//   ): JSX.Element[] => {
//     return Array.from({ length: count }, (_, i) => (
//       <motion.div
//         key={`bottom-${i}`}
//         className="absolute w-2 h-2 rounded-full"
//         style={{
//           background: "radial-gradient(circle, #34d399, #10b981)",
//           boxShadow:
//             "0 0 10px rgba(52, 211, 153, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
//         }}
//         initial={{
//           x: "50vw",
//           y: "50vh",
//           scale: 0,
//           opacity: 0,
//         }}
//         animate={{
//           x: "85vw",
//           y: "70vh",
//           scale: [0, 1.2, 0],
//           opacity: [0, 0.9, 0],
//           filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
//         }}
//         transition={{
//           duration: 3,
//           delay: delay + i * 0.2,
//           ease: [0.25, 0.46, 0.45, 0.94],
//         }}
//       />
//     ));
//   };

//   return (
//     <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
//       {/* Enhanced Animated Background Elements with Glossy Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Enhanced star particles */}
//         {isLoaded && createStarParticles(30)}

//         {/* Enhanced meteor effects */}
//         {isLoaded && createMeteorEffects(5)}

//         {/* Enhanced trail particles */}
//         {isLoaded && createTopLeftTrailParticles(10, 0.8)}
//         {isLoaded && createBottomRightTrailParticles(10, 1.2)}

//         {/* Advanced Cinematic Circles with Complex Animations */}
//         <motion.div
//           className="absolute w-24 h-24 rounded-full"
//           style={{
//             background:
//               "conic-gradient(from 0deg, rgba(99, 102, 241, 0.9), rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.9))",
//             boxShadow:
//               "0 0 60px rgba(99, 102, 241, 0.6), inset 0 4px 20px rgba(255, 255, 255, 0.3), 0 0 100px rgba(147, 51, 234, 0.4)",
//             filter: "blur(1px)",
//           }}
//           variants={topLeftCircleVariants}
//           initial="initial"
//           animate={isLoaded ? "animate" : "initial"}
//         >
//           <motion.div
//             className="absolute inset-2 rounded-full"
//             style={{
//               background:
//                 "radial-gradient(circle at 25% 25%, rgba(96, 165, 250, 0.9), rgba(59, 130, 246, 0.6))",
//               boxShadow:
//                 "inset 0 2px 8px rgba(255, 255, 255, 0.4), 0 0 30px rgba(96, 165, 250, 0.5)",
//             }}
//             animate={{
//               scale: [1, 1.15, 1],
//               opacity: [0.7, 1, 0.7],
//               rotate: [0, -180, -360],
//               filter: ["brightness(1)", "brightness(1.8)", "brightness(1)"],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//               rotate: {
//                 duration: 15,
//                 repeat: Infinity,
//                 ease: "linear",
//               },
//             }}
//           />
//           {/* Inner glow core */}
//           <motion.div
//             className="absolute inset-4 rounded-full"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%)",
//               filter: "blur(2px)",
//             }}
//             animate={{
//               scale: [0.8, 1.2, 0.8],
//               opacity: [0.6, 1, 0.6],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>

//         <motion.div
//           className="absolute w-32 h-32 rounded-full"
//           style={{
//             background:
//               "conic-gradient(from 180deg, rgba(34, 197, 94, 0.9), rgba(16, 185, 129, 0.8), rgba(52, 211, 153, 0.9), rgba(34, 197, 94, 0.9))",
//             boxShadow:
//               "0 0 80px rgba(34, 197, 94, 0.6), inset 0 4px 25px rgba(255, 255, 255, 0.3), 0 0 120px rgba(16, 185, 129, 0.4)",
//             filter: "blur(1px)",
//           }}
//           variants={bottomRightCircleVariants}
//           initial="initial"
//           animate={isLoaded ? "animate" : "initial"}
//         >
//           <motion.div
//             className="absolute inset-3 rounded-full"
//             style={{
//               background:
//                 "radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.6))",
//               boxShadow:
//                 "inset 0 2px 12px rgba(255, 255, 255, 0.4), 0 0 40px rgba(52, 211, 153, 0.5)",
//             }}
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.7, 1, 0.7],
//               rotate: [0, 180, 360],
//               filter: ["brightness(1)", "brightness(1.8)", "brightness(1)"],
//             }}
//             transition={{
//               duration: 3.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.5,
//               rotate: {
//                 duration: 18,
//                 repeat: Infinity,
//                 ease: "linear",
//               },
//             }}
//           />
//           {/* Inner glow core */}
//           <motion.div
//             className="absolute inset-6 rounded-full"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%)",
//               filter: "blur(3px)",
//             }}
//             animate={{
//               scale: [0.7, 1.3, 0.7],
//               opacity: [0.5, 1, 0.5],
//             }}
//             transition={{
//               duration: 2.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.3,
//             }}
//           />
//           {/* Orbiting particles */}
//           {Array.from({ length: 6 }, (_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 rounded-full"
//               style={{
//                 background: "radial-gradient(circle, #ffffff, #34d399)",
//                 boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
//                 top: "50%",
//                 left: "50%",
//                 transformOrigin: "0 0",
//               }}
//               animate={{
//                 rotate: [0, 360],
//                 x: [0, 40, 0, -40, 0],
//                 y: [0, -20, 0, 20, 0],
//                 scale: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 4 + i * 0.5,
//                 repeat: Infinity,
//                 ease: "linear",
//                 delay: i * 0.3,
//               }}
//             />
//           ))}
//         </motion.div>
//       </div>

//       {/* Main Content Container */}
//       <motion.div
//         className="flex-1 flex items-center justify-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-12 w-[80%] max-w-7xl text-left">
//           {/* Enhanced Hero Title with Glossy Text Effect */}
//           <motion.div variants={titleVariants} className="space-y-4">
//             <motion.h1
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-[700] leading-tight"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #ffffff 50%, #e2e8f0 75%, #ffffff 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundSize: "200% 200%",
//                 textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
//               }}
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: 1,
//                 backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
//               }}
//               transition={{
//                 delay: 0.3,
//                 duration: 0.8,
//                 backgroundPosition: {
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "linear",
//                 },
//               }}
//             >
//               <motion.div
//                 initial={{ letterSpacing: "-0.5em", opacity: 0 }}
//                 animate={{ letterSpacing: "0em", opacity: 1 }}
//                 transition={{
//                   duration: 1.2,
//                   delay: 0.5,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//                 className="mb-2"
//               >
//                 Transforming your vision
//               </motion.div>

//               <motion.div
//                 initial={{ letterSpacing: "-0.3em", opacity: 0 }}
//                 animate={{ letterSpacing: "0em", opacity: 1 }}
//                 transition={{
//                   duration: 1.0,
//                   delay: 1.2,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//                 className="mb-2"
//               >
//                 into a{" "}
//                 <motion.span
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #06b6d4 50%, #10b981 75%, #f59e0b 100%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundSize: "300% 300%",
//                     filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))",
//                   }}
//                   initial={{ letterSpacing: "-0.2em", opacity: 0 }}
//                   animate={{
//                     letterSpacing: "0em",
//                     opacity: 1,
//                     backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
//                   }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 1.8,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                     backgroundPosition: {
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: "linear",
//                     },
//                   }}
//                 >
//                   stunning website
//                 </motion.span>
//               </motion.div>

//               <motion.div
//                 initial={{ letterSpacing: "-0.4em", opacity: 0 }}
//                 animate={{ letterSpacing: "0em", opacity: 1 }}
//                 transition={{
//                   duration: 1.1,
//                   delay: 2.3,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//               >
//                 that drives success!
//               </motion.div>
//             </motion.h1>
//           </motion.div>

//           {/* Enhanced Description with Glossy Container */}
//           <motion.div variants={itemVariants} className="flex justify-start">
//             <motion.div
//               className="max-w-sm sm:max-w-md lg:max-w-lg"
//               whileHover={{
//                 filter: "brightness(1.1)",
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <motion.p
//                 className="leading-relaxed text-xs sm:text-sm lg:text-base"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #ffffff 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   textShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
//                 }}
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

//       {/* Enhanced Trust Section with Glossy Logo Effects */}
//       <motion.div
//         className="w-[80%] max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8 mt-8 sm:mt-12"
//         variants={itemVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="text-center space-y-4 sm:space-y-6">
//           <motion.p
//             className="text-xs sm:text-sm lg:text-base"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
//             }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.4, duration: 0.6 }}
//           >
//             Trusted by {logos.length}+ businesses worldwide
//           </motion.p>

//           {/* Enhanced Logo Grid with Glossy Effects */}
//           <div className="relative min-h-[80px] sm:min-h-[120px] flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentPage}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{
//                   duration: 0.3,
//                   ease: "easeInOut",
//                 }}
//                 className={`
//                   w-full opacity-80
//                   ${
//                     screenSize === "sm"
//                       ? "flex justify-center"
//                       : screenSize === "md"
//                       ? "grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 place-items-center"
//                       : "flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12"
//                   }
//                 `}
//               >
//                 {getCurrentPageLogos().map((logo, index) => (
//                   <motion.img
//                     key={`${currentPage}-${index}`}
//                     src={logo.src}
//                     alt={logo.alt}
//                     className="h-8 sm:h-10 lg:h-12 w-auto object-contain mx-auto sm:mx-0"
//                     style={{
//                       filter:
//                         "brightness(0.8) contrast(1.1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
//                     }}
//                     variants={logoVariants}
//                     initial="hidden"
//                     animate="visible"
//                     custom={index}
//                     whileHover={{
//                       scale: 1.15,
//                       filter:
//                         "brightness(1.2) contrast(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))",
//                     }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   />
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Enhanced Pagination Dots with Glossy Effects */}
//           {totalPages > 1 && (
//             <motion.div
//               className="flex justify-center space-x-2 pt-4 sm:pt-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.8, duration: 0.6 }}
//             >
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentPage(index)}
//                   className={`rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400/50 ${
//                     index === currentPage ? "w-3 h-3" : "w-2 h-2"
//                   }`}
//                   style={{
//                     background:
//                       index === currentPage
//                         ? "radial-gradient(circle at 30% 30%, #34d399, #10b981)"
//                         : "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2))",
//                     boxShadow:
//                       index === currentPage
//                         ? "0 0 20px rgba(52, 211, 153, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.3)"
//                         : "0 0 8px rgba(255, 255, 255, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
//                   }}
//                   whileHover={{
//                     scale: 1.3,
//                     filter: "brightness(1.3)",
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   animate={
//                     index === currentPage
//                       ? {
//                           boxShadow: [
//                             "0 0 20px rgba(52, 211, 153, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.3)",
//                             "0 0 30px rgba(52, 211, 153, 0.9), inset 0 1px 3px rgba(255, 255, 255, 0.5)",
//                             "0 0 20px rgba(52, 211, 153, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.3)",
//                           ],
//                           filter: [
//                             "brightness(1)",
//                             "brightness(1.5)",
//                             "brightness(1)",
//                           ],
//                         }
//                       : {}
//                   }
//                   transition={{
//                     duration: 2,
//                     repeat: index === currentPage ? Infinity : 0,
//                     ease: "easeInOut",
//                   }}
//                   aria-label={`Go to page ${index + 1}`}
//                 />
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;
