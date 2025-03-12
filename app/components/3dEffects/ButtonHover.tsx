"use client";

import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const ButtonHover = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const radius = 120; // Increased for a smoother effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.2),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[1px] rounded-lg transition-all duration-300"
      >
        <button
          ref={ref}
          className={cn(
            `relative ml-1 w-full mt-2 px-2 py-2 text-white font-medium text-xs-custom leading-tight-custom rounded-md 
             bg-gradient-to-b from-[#d3b8aa] to-[#b89a8b] hover:from-[#c4a996] hover:to-[#a88a79]
             shadow-md transition-all duration-300
             focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600
             disabled:opacity-50 disabled:cursor-not-allowed`,
            className
          )}
          {...props}
        >
          {children}
        </button>
      </motion.div>
    );
  }
);

ButtonHover.displayName = "ButtonHover";

export { ButtonHover };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}