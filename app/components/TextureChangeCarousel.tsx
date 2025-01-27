import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import textures from './textures.json'; // Import the JSON file

const TextureCarousel = ({ handleTextureChange }: { handleTextureChange: (baseColor: string, arm: string, normal: string, height: string) => void }) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={4} // Number of slides visible at once
        spaceBetween={10} // Space between slides
        navigation // Enable navigation buttons
        modules={[Navigation]}
        className="mySwiper"
      >
        {textures.map((texture, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={texture.thumbnail}
              alt={texture.name}
              width={100}
              height={100}
              className="cursor-pointer rounded-full"
              onClick={() => handleTextureChange(
                texture.textureBaseColorPath,
                texture.textureArmPath,
                texture.textureNormalPath,
                texture.textureHeightPath
              )}
            />
            <div className="absolute bottom-0 left-0 right-0 text-white text-center text-xs py-1">
              {texture.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextureCarousel;
