"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface OverlappingImageSliderProps {
  images: string[];
  className?: string;
  scaleEffect: boolean;
}

const OverlappingImageSlider2: React.FC<OverlappingImageSliderProps> = ({ 
  images,
  className = "",
  scaleEffect 
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Fix dependency issue

  // Determine slide direction based on current index
  const getSlideDirection = (currentIndex: number): number => {
    return currentIndex === images.length - 1 ? 1 : -1;
  };

  return (
    <div 
      className={`relative w-[360px] h-[518px] flex justify-center items-center overflow-hidden rounded-2xl ${className}`}
    >
      {/* Previous Image with Fade Effect */}
      <motion.div
        key={`background-${index}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="absolute w-full h-full object-cover rounded-2xl"
      >
        <Image
          src={images[index]}
          alt={`Slider image ${index + 1}`}
          width={1920}  
          height={1080} 
          className="rounded-2xl object-cover w-full h-full"
          priority={index === 0}
        />
      </motion.div>

      <AnimatePresence>
        {/* New Image Sliding In */}
        <motion.div
          key={`foreground-${index}`}
          initial={scaleEffect ? { x: `${getSlideDirection(index) * 100}%`, opacity: 0, scale: 0 } : { x: `${getSlideDirection(index) * 100}%` }}
          animate={scaleEffect ? { x: "0%", opacity: 1, scale: 1 } : { x: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`Slider image ${index + 1}`}
            width={1920}  
            height={1080} 
            className="rounded-2xl object-cover w-full h-full"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OverlappingImageSlider2;
