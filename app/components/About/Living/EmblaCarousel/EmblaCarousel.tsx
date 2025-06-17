import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { LazyLoadImage } from './EmblaCarouselLazyLoadImage';
import data from "./EmblaData.json";
import './embla.css';
import {
  NextButton,
  PrevButton
} from './EmblaCarouselArrowButtons';

interface Resource {
  imageUrl?: string;
  name?: string;
  subname?: string;
}

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView);
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    updateSlidesInView(emblaApi);
    
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('slidesInView', updateSlidesInView);
    emblaApi.on('reInit', updateSlidesInView);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('slidesInView', updateSlidesInView);
      emblaApi.off('reInit', updateSlidesInView);
    };
  }, [emblaApi, onSelect, updateSlidesInView]);

  return (
    <div className="embla relative w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.resources
            .filter((resource: Resource) => resource.imageUrl)
            .map((resource: Resource, index: number) => (
              <LazyLoadImage
                key={index}
                index={index}
                imgSrc={resource.imageUrl!}
                name={resource.name || 'Unnamed'}
                subname={resource.subname || 'Unnamed'}
                inView={slidesInView.indexOf(index) > -1}
              />
            ))}
        </div>
      </div>

      <div className="embla__controls absolute w-full flex justify-between items-center px-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <div className="pointer-events-auto">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        </div>
        <div className="pointer-events-auto">
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;