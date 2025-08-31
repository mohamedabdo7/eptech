import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import { Button } from "../components/common/Button";
// import { StatsSection } from "../components/common/Stats";
import VentureCapitalForm from "../components/sections/VentureCapitalForm";

// Types
interface Screenshot {
  id: number;
  src: string;
  alt: string;
}

interface CarouselSlide {
  id: number;
  screenshots: Screenshot[];
}

interface FormData {
  projectName: string;
  email: string;
  whyInvest: string;
  hasWorkingApp: string;
  workingFrom: string;
  totalUsers: string;
  activeUsersPerDay: string;
  totalOrders: string;
  totalRevenue: string;
  pitchDeck: File | null;
  screenshots: FileList | null;
}

const VentureCapitals: React.FC = () => {
  // State management
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mockup data for carousel slides
  const carouselSlides: CarouselSlide[] = [
    {
      id: 1,
      screenshots: [
        { id: 1, src: "/images/screen1.png", alt: "McDonald's Menu" },
        { id: 2, src: "/images/screen2.png", alt: "Big Tasty Deal" },
        { id: 3, src: "/images/screen3.png", alt: "Food Ordering" },
        { id: 4, src: "/images/screen4.png", alt: "Restaurant Selection" },
      ],
    },
    {
      id: 2,
      screenshots: [
        {
          id: 1,
          src: "/images/mjrb-screenshot-2-1.jpg",
          alt: "Food Categories",
        },
        { id: 2, src: "/images/mjrb-screenshot-2-2.jpg", alt: "Pizza Menu" },
        { id: 3, src: "/images/mjrb-screenshot-2-3.jpg", alt: "Order Summary" },
        {
          id: 4,
          src: "/images/mjrb-screenshot-2-4.jpg",
          alt: "Payment Screen",
        },
      ],
    },
    {
      id: 3,
      screenshots: [
        {
          id: 1,
          src: "/images/mjrb-screenshot-3-1.jpg",
          alt: "Profile Screen",
        },
        { id: 2, src: "/images/mjrb-screenshot-3-2.jpg", alt: "Settings" },
        { id: 3, src: "/images/mjrb-screenshot-3-3.jpg", alt: "Order History" },
        { id: 4, src: "/images/mjrb-screenshot-3-4.jpg", alt: "Favorites" },
      ],
    },
    {
      id: 4,
      screenshots: [
        {
          id: 1,
          src: "/images/mjrb-screenshot-4-1.jpg",
          alt: "Search Results",
        },
        {
          id: 2,
          src: "/images/mjrb-screenshot-4-2.jpg",
          alt: "Restaurant Details",
        },
        { id: 3, src: "/images/mjrb-screenshot-4-3.jpg", alt: "Reviews" },
        { id: 4, src: "/images/mjrb-screenshot-4-4.jpg", alt: "Map View" },
      ],
    },
    {
      id: 5,
      screenshots: [
        { id: 1, src: "/images/mjrb-screenshot-5-1.jpg", alt: "Notifications" },
        { id: 2, src: "/images/mjrb-screenshot-5-2.jpg", alt: "Offers" },
        {
          id: 3,
          src: "/images/mjrb-screenshot-5-3.jpg",
          alt: "Loyalty Points",
        },
        { id: 4, src: "/images/mjrb-screenshot-5-4.jpg", alt: "Help Center" },
      ],
    },
  ];

  // const statsData = [
  //   { label: "Years of MRB", value: "3" },
  //   { label: "Delivered Orders", value: "455K" },
  //   { label: "Total Users", value: "144K" },
  //   { label: "Active users per day", value: "45.5K" },
  //   { label: "Total revenue", value: "3.6M", unit: "by SAR" },
  // ];

  // Event handlers
  const handleApplyNowClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (formData: FormData) => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // You can add API calls, validation, etc. here
    // Example:
    // try {
    //   await submitVentureCapitalApplication(formData);
    //   showSuccessMessage();
    // } catch (error) {
    //   showErrorMessage(error.message);
    // }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const screenshotVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Venture Capitals Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.div variants={fadeInUpVariants}>
            <SectionHeader
              isInline
              baseTitle="Venture"
              highlightTitle="Capitals"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            />
          </motion.div>

          <motion.p
            variants={fadeInUpVariants}
            className="text-white/70 text-sm sm:text-base max-w-3xl mx-auto font-medium leading-7 px-4"
          >
            Got a mobile app or SaaS project? Apply now for a chance to secure
            investment and boost your growth!
          </motion.p>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="default"
                size="lg"
                className="w-full max-w-[300px] mx-4 sm:mx-0 flex items-center gap-2"
                onClick={handleApplyNowClick}
                aria-expanded={isFormOpen}
                aria-controls="venture-capital-form"
              >
                {isFormOpen ? "Hide Application" : "Apply Now"}
                {isFormOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Collapsible Application Form */}
        <VentureCapitalForm
          isOpen={isFormOpen}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />

        {/* MJRB App Screenshots Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 sm:mt-20"
        >
          {/* Left-aligned title and subtitle */}
          <motion.div
            variants={fadeInUpVariants}
            className="text-left max-w-6xl mx-auto mb-8 space-y-4 sm:space-y-6 px-4 sm:px-8"
          >
            <h2 className="text-primary font-semibold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight">
              MJRB App
            </h2>
            <p className="text-PrimaryBlue font-semibold text-sm sm:text-base leading-tight tracking-tight mx-10">
              Screenshots
            </p>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            variants={fadeInUpVariants}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="relative">
              {/* Mobile: Single screenshot with horizontal scroll */}
              <div className="block sm:hidden">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                  {carouselSlides[currentSlide].screenshots.map(
                    (screenshot, index) => (
                      <motion.div
                        key={screenshot.id}
                        variants={screenshotVariants}
                        custom={index}
                        className="flex-shrink-0 snap-center"
                      >
                        <div className="w-40 h-72 bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `/api/placeholder/160/288`;
                            }}
                          />
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Desktop: Show all screenshots */}
              <div className="hidden sm:block">
                <motion.div
                  key={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={1}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex justify-center items-center gap-4 sm:gap-6 overflow-hidden"
                >
                  {carouselSlides[currentSlide].screenshots.map(
                    (screenshot, index) => (
                      <motion.div
                        key={screenshot.id}
                        variants={screenshotVariants}
                        custom={index}
                        whileHover={{
                          scale: 1.05,
                          y: -10,
                          transition: { duration: 0.3 },
                        }}
                        className="flex-shrink-0 cursor-pointer"
                      >
                        <div className="w-40 sm:w-48 lg:w-52 h-72 sm:h-80 lg:h-96 bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden hover:shadow-primary/20 transition-all duration-300">
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `/api/placeholder/208/384`;
                            }}
                          />
                        </div>
                      </motion.div>
                    )
                  )}
                </motion.div>
              </div>

              {/* Interactive Dots Indicator */}
              <motion.div
                variants={fadeInUpVariants}
                className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3"
              >
                {carouselSlides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary shadow-lg shadow-primary/30 scale-125"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* About MJRB Section */}
          {/* <motion.div
            variants={fadeInUpVariants}
            className="text-left max-w-6xl mx-auto mb-6 sm:mb-8 mt-12 sm:mt-16 px-4 sm:px-8"
          >
            <p className="text-PrimaryBlue font-semibold text-sm sm:text-base leading-tight tracking-tight mb-6 mx-10">
              About Mjrb
            </p>

            <div className="relative">
              <motion.div variants={fadeInUpVariants}>
                <StatsSection stats={statsData} />
              </motion.div>
            </div>
          </motion.div> */}

          {/* Why Invest Section */}
          <motion.div
            variants={fadeInUpVariants}
            className="text-left max-w-6xl mx-auto mb-8 mt-12 sm:mt-16 px-4 sm:px-8"
          >
            <p className="text-PrimaryBlue font-semibold text-sm sm:text-base leading-tight tracking-tight mb-4 sm:mb-6 mx-10">
              Why to invest at MJRB
            </p>

            <div>
              <p className="text-white/80 font-normal text-sm sm:text-base leading-relaxed sm:leading-7 tracking-tight mx-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            className="flex justify-center mt-8 sm:mt-12 px-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="default"
                size="lg"
                className="w-full max-w-[300px]"
              >
                Contact MJRB
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VentureCapitals;
