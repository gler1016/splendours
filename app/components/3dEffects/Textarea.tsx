"use client";

import * as React from "react";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const { currentTarget, clientX, clientY } = event
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/textarea"
      >
        <textarea
          className={cn(
            `flex w-full border border-black bg-transparent dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-xs-custom leading-tight-custom 
             file:border-0 file:bg-transparent file:text-xs-custom  file:font-medium placeholder:text-color dark:placeholder-text-neutral-600 
             focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50 
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/textarea:shadow-none transition duration-400
             resize-y`, // Allow vertical resizing
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };


import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
