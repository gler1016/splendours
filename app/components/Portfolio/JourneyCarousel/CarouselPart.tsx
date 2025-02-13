'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';

type CarouselProps = {
  items: { imageUrl: string; alt: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<CarouselProps> = ({ items, options }) => {
  const [emblaRef] = useEmblaCarousel(
    { 
      ...options,
      loop: true // Enable infinite loop
    }, 
    [
      Autoplay({
        delay: 2000, //2 seconds per slide
        stopOnInteraction: false, // Don't stop on user interaction
        stopOnMouseEnter: true, // Pause on mouse hover
        rootNode: (emblaRoot) => emblaRoot.parentElement // Necessary for proper autoplay functionality
      })
    ]
  );

  return (
    <div className="embla_journey">
      <div className="embla__viewport_journey" ref={emblaRef}>
        <div className="embla__container_journey">
          {items.map((item, index) => (
            <div className="embla__slide_journey" key={index}>
              <Image
                className="embla__slide__img_journey"
                src={item.imageUrl}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;