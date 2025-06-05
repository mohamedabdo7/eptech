import React from "react";

interface SectionHeaderProps {
  baseTitle: string; // Initial part of the title (white)
  highlightTitle: string; // Emphasized part of the title (primary color)
  subtitle?: string;
  isInline?: boolean; // Optional prop to control inline vs. stacked layout
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  baseTitle,
  highlightTitle,
  subtitle,
  isInline = true,
}) => {
  return (
    <div className="py-6 space-y-10 text-center">
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ textShadow: "0 0 10px rgba(0, 255, 170, 0.5)" }}
      >
        {isInline ? (
          <>
            <span className="text-white">{baseTitle}</span>{" "}
            <span className="text-primary">{highlightTitle}</span>
          </>
        ) : (
          <>
            <span className="text-white block">{baseTitle}</span>
            <span className="text-primary block">{highlightTitle}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-white/70 text-sm mt-2 max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
