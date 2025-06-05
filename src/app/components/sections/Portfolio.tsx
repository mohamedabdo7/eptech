"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PortfolioCard } from "../common/PortfolioCard";
import SectionHeader from "../common/SectionHeader";

const categories = [
  { id: "all", label: "All Work" },
  { id: "social-media", label: "Social Media" },
  { id: "printing", label: "Printing" },
  { id: "ui-ux", label: "UI UX Design" },
  { id: "events", label: "Events" },
];

const portfolioItems = [
  {
    id: 1,
    title: "UI&UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    imageUrl: "/images/portfolio.png",
    category: "ui-ux",
    link: "#",
  },
  {
    id: 2,
    title: "UI&UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    imageUrl: "/images/portfolio.png",
    category: "ui-ux",
    link: "#",
  },
  {
    id: 3,
    title: "UI&UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    imageUrl: "/images/portfolio.png",
    category: "ui-ux",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    description:
      "Creative social media designs and campaigns that engage and convert audiences effectively.",
    imageUrl: "/images/portfolio.png",
    category: "social-media",
    link: "#",
  },
  {
    id: 5,
    title: "Print Design Project",
    description:
      "Professional print materials including brochures, business cards, and marketing collateral.",
    imageUrl: "/images/portfolio.png",
    category: "printing",
    link: "#",
  },
  {
    id: 6,
    title: "Event Branding",
    description:
      "Complete event branding package including logos, signage, and promotional materials.",
    imageUrl: "/images/portfolio.png",
    category: "events",
    link: "#",
  },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-section-y px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <SectionHeader baseTitle="Our latest" highlightTitle="work" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-4 py-2 text-sm lg:text-base font-medium bg-transparent border-none outline-none transition-colors duration-300
                        ${
                          activeCategory === category.id
                            ? "text-primary"
                            : "text-gray-300 hover:text-white"
                        }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <span className="relative inline-block">
                {category.label}
                <span
                  className={`
                      absolute left-0 right-0 bottom-0 h-0.5 w-[80%] bg-primary rounded
                      transition-all duration-300 origin-left
                      ${
                        activeCategory === category.id
                          ? "scale-x-100"
                          : "scale-x-0"
                      }
                  `}
                  style={{
                    transitionProperty: "transform, width, background-color",
                  }}
                />
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 justify-items-center lg:px-48"
        >
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { PortfolioCard } from "../common/PortfolioCard";
// import SectionHeader from "../common/SectionHeader";

// const categories = [
//   { id: "all", label: "All Work" },
//   { id: "social-media", label: "Social media" },
//   { id: "printing", label: "Printing" },
//   { id: "ui-ux", label: "UI UX Design" },
//   { id: "events", label: "Events" },
// ];

// const portfolioItems = [
//   {
//     id: 1,
//     title: "UI&UX Design",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
//     imageUrl: "/images/portfolio.png",
//     category: "ui-ux",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "UI&UX Design",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
//     imageUrl: "/images/portfolio.png",
//     category: "ui-ux",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "UI&UX Design",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
//     imageUrl: "/images/portfolio.png",
//     category: "ui-ux",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Social Media Campaign",
//     description:
//       "Creative social media designs and campaigns that engage and convert audiences effectively.",
//     imageUrl: "/images/portfolio.png",
//     category: "social-media",
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Print Design Project",
//     description:
//       "Professional print materials including brochures, business cards, and marketing collateral.",
//     imageUrl: "/images/portfolio.png",
//     category: "printing",
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "Event Branding",
//     description:
//       "Complete event branding package including logos, signage, and promotional materials.",
//     imageUrl: "/images/portfolio.png",
//     category: "events",
//     link: "#",
//   },
// ];

// export const PortfolioSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredItems =
//     activeCategory === "all"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === activeCategory);

//   return (
//     <section className="py-section-y px-section-x  relative overflow-hidden ">
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center"
//         >
//           <SectionHeader baseTitle="Our latest" highlightTitle="work" />
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-2 mb-12"
//         >
//           {categories.map((category, index) => (
//             <motion.button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`relative px-6 py-2 text-base font-medium bg-transparent border-none outline-none transition-colors duration-300
//                         ${
//                           activeCategory === category.id
//                             ? "text-primary"
//                             : "text-gray-300 hover:text-white"
//                         }
//               `}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//             >
//               <span className="relative inline-block">
//                 {category.label}
//                 <span
//                   className={`
//                       absolute left-0 right-0 bottom-0 h-0.5 w-[80%] bg-primary rounded
//                       transition-all duration-300 origin-left
//                       ${
//                         activeCategory === category.id
//                           ? "scale-x-100"
//                           : "scale-x-0"
//                       }
//                   `}
//                   style={{
//                     transitionProperty: "transform, width, background-color",
//                   }}
//                 />
//               </span>
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Portfolio Grid */}
//         {/* <motion.div layout className="flex flex-wrap justify-center gap-8"> */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center px-48"
//         >
//           {filteredItems.map((item, index) => (
//             <PortfolioCard
//               key={item.id}
//               title={item.title}
//               description={item.description}
//               imageUrl={item.imageUrl}
//               link={item.link}
//               index={index}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };
