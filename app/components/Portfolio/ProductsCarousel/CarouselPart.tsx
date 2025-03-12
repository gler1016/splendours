"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
// import Image from "next/image";

type CarouselProps = {
  items: { imageUrl: string; alt: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<CarouselProps> = ({ items, options }) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false, ...options });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;

    // Update selected index when slide changes
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };
    embla.on("select", onSelect);
    onSelect(); // Set initial state

    // Auto-scroll function
    const interval = setInterval(() => {
      if (selectedIndex < items.length-2) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0); // Reset to the first slide
      }
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
      embla.off("select", onSelect);
    };
  }, [embla, selectedIndex, items.length]);

  return (
    <div className="embla_deal">
      <div className="embla__viewport_deal" ref={emblaRef}>
        <div className="embla__container_deal">
          {items.map((item, index) => (

            <div className="embla__slide_deal" key={index}>
             <Image className="embla__slide__img_deal" src={item.imageUrl} alt={item.alt} width={130} height={120}/>
            </div>
           

          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
