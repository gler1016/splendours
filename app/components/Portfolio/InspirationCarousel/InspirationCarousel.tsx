"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/Portfolio/Inspiration/Mobile/background-mobile-image1.png",
  "/images/Portfolio/Inspiration/Mobile/background-mobile-image2.png",
  "/images/Portfolio/Inspiration/Mobile/background-mobile-image3.png",
  "/images/Portfolio/Inspiration/Mobile/background-mobile-image4.png",
  "/images/Portfolio/Inspiration/Mobile/background-mobile-image5.png",
];

const OverlappingImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[360px] h-[518px] flex justify-center items-center overflow-hidden rounded-2xl">
      {/* Previous Image with Fade Effect */}
      <motion.div
        key={`background-${index}`}
        initial={{ opacity: 1 }} // Full opacity initially
        animate={{ opacity: 0 }} // Fade out as new image slides in
        exit={{ opacity: 1 }} // Reset opacity when image exits
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute w-full h-full object-cover rounded-2xl"
      >
        <Image
          src={images[index]}
          alt="Previous Image"
          width={360}
          height={518}
          className="rounded-2xl object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {/* New Image Sliding In */}
        <motion.div
          key={`foreground-${index}`}
          initial={{ x: "-100%" }} // Start completely off-screen (left)
          animate={{ x: "0%" }} // Move to position (covering old image)
          exit={{ opacity: 0 }} // Once fully in place, old image disappears
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[(index + 1) % images.length]} // Get next image
            alt="New Image"
            width={360}
            height={518}
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OverlappingImageSlider;
