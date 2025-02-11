import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import styles from "./Carousel.module.css";

interface TouchCarouselProps {
  images: { src: string; alt: string }[];
  options?: EmblaOptionsType;
}

const TouchCarousel: React.FC<TouchCarouselProps> = ({ images, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={`${styles.embla} overflow-hidden relative`}> 
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={`flex ${styles.emblaContainer} animate-marquee `}> 
          {images.concat(images).map((image, index) => (
            <div className={`${styles.emblaSlide} flex-shrink-0`} key={index}>
              <Image
                src={image.src}
                width={1136}
                height={461}
                alt={image.alt}
                className={styles.emblaImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouchCarousel;
