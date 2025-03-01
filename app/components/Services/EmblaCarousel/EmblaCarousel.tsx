import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { LazyLoadImage } from './EmblaCarouselLazyLoadImage';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Card3dEffect from '../../3dEffects/Card3DEffect'; // Import your Card3dEffect component
import { Box } from '@mui/material'; // Import Box from MUI

import data from './EmblaData.json';

interface Resource {
  imageUrl?: string;
}

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2000 }),
  ]);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

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

    updateSlidesInView(emblaApi);
    emblaApi.on('slidesInView', updateSlidesInView);
    emblaApi.on('reInit', updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <Box className="embla">
      <Box className="embla__viewport" ref={emblaRef}>
        <Box className="embla__container">
          {data.resources
            .filter((resource: Resource) => resource.imageUrl)
            .map((resource: Resource, index: number) => (
              <Box key={index} className="embla__slide">
                {/* Wrap LazyLoadImage with Card3dEffect */}
                <Card3dEffect>
                  <LazyLoadImage
                    index={index}
                    imgSrc={resource.imageUrl!}
                    inView={slidesInView.indexOf(index) > -1}
                  />
                </Card3dEffect>
              </Box>
            ))}
        </Box>
      </Box>

      <Box className="embla__controls absolute">
        <Box className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>

        <Box className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EmblaCarousel;