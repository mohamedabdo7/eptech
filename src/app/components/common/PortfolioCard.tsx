import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  index: number;
}

export const PortfolioCard = ({
  title,
  description,
  imageUrl,
  link,
  index,
}: PortfolioCardProps) => {
  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer w-[273px] h-[401px]"
      onClick={handleCardClick}
    >
      <div className="w-full h-full">
        {/* Image Container with clipped corner */}
        <div className="relative w-[273px] h-[320px] mb-6">
          {/* Main image with rounded corners and clipped bottom-right */}
          <div
            className="relative w-full h-full overflow-hidden "
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0% 100%)",
            }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-2xl"
              sizes="273px"
            />
          </div>

          {/* Arrow Icon in the clipped corner */}
          <div className=" w-[35px] h-[35px] absolute bottom-0 right-0 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className=" text-secondary" />
          </div>
        </div>

        {/* Content */}
        <div className="px-0">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
