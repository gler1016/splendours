"use client";

import { motion } from "framer-motion";

interface Hover3DWrapperProps {
  children: React.ReactNode;
}

export default function Hover3DWrapper({ children }: Hover3DWrapperProps) {
  return (
    <motion.div
      whileHover={{
        rotateY: 15,
        rotateX: -10,
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{ perspective: 1000, display: "inline-block" }} // Ensures inline elements like images are wrapped properly
    >
      {children}
    </motion.div>
  );
}
