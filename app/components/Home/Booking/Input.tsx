"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isTextarea?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  isTextarea = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      className="relative w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label className="block text-xs-custom leading-tight-custom font-medium text-gray-700 mb-1">
        {label}
      </label>
      <motion.div
        className="relative"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${isHovered ? "100px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.2),
              transparent 80%
            )
          `,
        }}
      >
        {isTextarea ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        ) : (
          <input
            {...props}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}
      </motion.div>
    </div>
  );
};