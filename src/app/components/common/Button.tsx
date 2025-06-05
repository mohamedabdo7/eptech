"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Styling variants
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";

  // States
  loading?: boolean;
  disabled?: boolean;

  // Label and icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Layout
  fullWidth?: boolean;

  // Container class for additional styling
  containerClassName?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      containerClassName,
      variant = "default",
      size = "md",
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    };

    const variantClasses = {
      default:
        "bg-primary text-[#1D4671] hover:bg-primary/90 focus:ring-2 focus:ring-primary/30",
      outline:
        "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 focus:ring-2 focus:ring-primary/30",
      ghost:
        "bg-transparent text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary/30",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500/30",
    };

    const buttonClasses = cn(
      // Base styles
      "relative flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-in-out",
      "focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",

      // Size variants
      sizeClasses[size],

      // Style variants
      variantClasses[variant],

      // Icon padding adjustments
      leftIcon && "pl-10",
      rightIcon && "pr-10",

      // Width
      fullWidth ? "w-full" : "inline-flex",

      // Shadow
      "shadow-md hover:shadow-lg",

      className
    );

    const containerClasses = cn(
      fullWidth ? "w-full" : "inline-block",
      containerClassName
    );

    return (
      <div className={containerClasses}>
        <button
          ref={ref}
          className={buttonClasses}
          disabled={disabled || loading}
          {...props}
        >
          {loading && (
            <Loader2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 animate-spin" />
          )}
          <span
            className={cn("flex items-center gap-2", loading && "opacity-0")}
          >
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </span>
        </button>
      </div>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
