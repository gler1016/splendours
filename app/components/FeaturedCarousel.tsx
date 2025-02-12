import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type PositionStyle = {
  width: string;
  height: string;
  position: 'absolute';
  borderRadius: string;
  overflow: 'hidden';
} & (
  | { top: string; left: string }
  | { bottom: string; left: string }
  | { bottom: string; right: string }
);

const FeaturedCarousel = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "/images/Service/advertisement/main1.png", 
    "/images/Service/advertisement/image1_1.png", 
    "/images/Service/advertisement/image2_1.png",
    "/images/Service/advertisement/main2.png", 
    "/images/Service/advertisement/image1_2.png", 
    "/images/Service/advertisement/image2_2.png",
    "/images/Service/advertisement/main3.png", 
    "/images/Service/advertisement/image1_3.png", 
    "/images/Service/advertisement/image2_3.png"
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getPositionStyles = (position: 'top' | 'bottomLeft' | 'bottomRight'): PositionStyle => {
    const baseStyles = {
      position: 'absolute' as const,
      borderRadius: '12px',
      overflow: 'hidden' as const,
    };

    switch (position) {
      case 'top':
        return {
          ...baseStyles,
          width: '100%',
          height: '60%',
          top: '0',
          left: '0',
        };
      case 'bottomLeft':
        return {
          ...baseStyles,
          width: '48%',
          height: '35%',
          bottom: '0',
          left: '0',
        };
      case 'bottomRight':
        return {
          ...baseStyles,
          width: '48%',
          height: '35%',
          bottom: '0',
          right: '0',
        };
    }
  };

  const variants: Record<'top' | 'bottomLeft' | 'bottomRight', Variants> = {
    top: {
      enter: { y: '100%', opacity: 0 },
      center: { y: 0, opacity: 1 },
      exit: { x: '100%', y: '100%', opacity: 0 }
    },
    bottomLeft: {
      enter: { x: '100%', opacity: 0 },
      center: { x: 0, opacity: 1 },
      exit: { y: '-100%', opacity: 0 }
    },
    bottomRight: {
      enter: { y: '100%', opacity: 0 },
      center: { y: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 }
    }
  };

  const getImageIndices = () => {
    return {
      top: currentIndex % images.length,
      bottomLeft: (currentIndex + 1) % images.length,
      bottomRight: (currentIndex + 2) % images.length
    };
  };

  const indices = getImageIndices();

  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh',
        maxHeight: '800px',
        position: 'relative',
        backgroundColor: 'transparent', // Changed this line to make background transparent
        overflow: 'hidden',
        gap: '16px',
        padding: '16px'
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`top-${indices.top}`}
          style={getPositionStyles('top')}
          variants={variants.top}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          onClick={nextSlide}
        >
          <img
            src={images[indices.top]}
            alt="Top"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </motion.div>
        <motion.div
          key={`bottom-left-${indices.bottomLeft}`}
          style={getPositionStyles('bottomLeft')}
          variants={variants.bottomLeft}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img
            src={images[indices.bottomLeft]}
            alt="Bottom Left"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </motion.div>
        <motion.div
          key={`bottom-right-${indices.bottomRight}`}
          style={getPositionStyles('bottomRight')}
          variants={variants.bottomRight}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img
            src={images[indices.bottomRight]}
            alt="Bottom Right"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default FeaturedCarousel;