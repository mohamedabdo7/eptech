import React from "react";

interface Logo {
  src: string;
  alt: string;
}

const TRUSTED_LOGOS: Logo[] = [
  { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
  { src: "/icons/society.svg", alt: "Saudi Ministry" },
  { src: "/icons/dalil.svg", alt: "Guide" },
  { src: "/icons/meena.svg", alt: "Meena" },
  { src: "/icons/geriatrics.svg", alt: "Geriatrics" },
  { src: "/icons/norah.svg", alt: "Norah" },
  { src: "/icons/kafd.svg", alt: "KAFD" },
  { src: "/icons/andorra.svg", alt: "Andorra" },
  { src: "/icons/ksp.svg", alt: "KSP" },
  { src: "/icons/family-med.svg", alt: "Family Medicine" },
  { src: "/icons/khubarani.svg", alt: "Khubarani" },
  { src: "/icons/faisal.svg", alt: "Faisal" },
];

interface TrustMarqueeProps {
  className?: string;
  speed?: number;
}

const TrustMarquee: React.FC<TrustMarqueeProps> = ({
  className = "",
  speed = 30,
}) => {
  return (
    <>
      <section className={`w-full py-6 ${className}`}>
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden relative w-full h-16 md:h-20">
            <div
              className="absolute flex animate-marquee-smooth hover:pause-marquee"
              style={{
                width: "500%",
                willChange: "transform",
              }}
            >
              {Array.from({ length: 5 }).flatMap((_, setIndex) =>
                TRUSTED_LOGOS.map((logo, logoIndex) => (
                  <div
                    key={`${setIndex}-${logoIndex}`}
                    className="flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center"
                    style={{ width: "120px" }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 sm:h-12 md:h-14 w-full object-contain transition-all duration-300"
                      //   style={{
                      //     filter:
                      //       "brightness(0.7) contrast(1.1) saturate(0.8) drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))",
                      //     opacity: 0.85,
                      //   }}
                      loading="lazy"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style>{`
        @keyframes marquee-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        .animate-marquee-smooth {
          animation: marquee-smooth ${speed}s linear infinite;
        }

        .pause-marquee:hover .animate-marquee-smooth {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default TrustMarquee;

// import React from "react";

// interface Logo {
//   src: string;
//   alt: string;
// }

// const TRUSTED_LOGOS: Logo[] = [
//   { src: "/icons/tawuniya.svg", alt: "Tawuniya" },
//   { src: "/icons/society.svg", alt: "Saudi Ministry" },
//   { src: "/icons/dalil.svg", alt: "Guide" },
//   { src: "/icons/meena.svg", alt: "Meena" },
//   { src: "/icons/geriatrics.svg", alt: "Geriatrics" },
//   { src: "/icons/norah.svg", alt: "Norah" },
//   { src: "/icons/kafd.svg", alt: "KAFD" },
//   { src: "/icons/andorra.svg", alt: "Andorra" },
//   { src: "/icons/ksp.svg", alt: "KSP" },
//   { src: "/icons/family-med.svg", alt: "Family Medicine" },
//   { src: "/icons/khubarani.svg", alt: "Khubarani" },
//   { src: "/icons/faisal.svg", alt: "Faisal" },
// ];

// interface TrustMarqueeProps {
//   className?: string;
//   speed?: number;
// }

// const TrustMarquee: React.FC<TrustMarqueeProps> = ({
//   className = "",
//   speed = 30,
// }) => {
//   return (
//     <>
//       <section className={`w-full py-6 ${className}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="overflow-hidden relative w-full h-12 md:h-14">
//             <div
//               className="absolute flex animate-marquee-smooth hover:pause-marquee"
//               style={{
//                 width: "500%",
//                 willChange: "transform",
//               }}
//             >
//               {Array.from({ length: 5 }).flatMap((_, setIndex) =>
//                 TRUSTED_LOGOS.map((logo, logoIndex) => (
//                   <div
//                     key={`${setIndex}-${logoIndex}`}
//                     className="flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center"
//                     style={{ width: "100px" }}
//                   >
//                     <img
//                       src={logo.src}
//                       alt={logo.alt}
//                       className="sm:h-7 md:h-8 w-full object-contain transition-all duration-300"
//                       //   style={{
//                       //     filter:
//                       //       "brightness(0.7) contrast(1.1) saturate(0.8) drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))",
//                       //     opacity: 0.85,
//                       //   }}
//                       loading="lazy"
//                     />
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CSS Styles */}
//       <style>{`
//         @keyframes marquee-smooth {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-20%);
//           }
//         }

//         .animate-marquee-smooth {
//           animation: marquee-smooth ${speed}s linear infinite;
//         }

//         .pause-marquee:hover .animate-marquee-smooth {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </>
//   );
// };

// export default TrustMarquee;
