import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import textures from './textures.json'; // Import the JSON file

const TextureCarousel = ({ handleTextureChange }: { handleTextureChange: (name: string, baseColor: string, arm: string, normal: string, height: string,newDescription: string) => void }) => {
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
          <SwiperSlide key={idx} className='flex'>
            <Image
              src={texture.thumbnail}
              alt={texture.name}
              width={100}
              height={100}
              className="cursor-pointer rounded-full mx-auto"
              onClick={() => handleTextureChange(
                texture.name, // Pass name to the parent
                texture.textureBaseColorPath,
                texture.textureArmPath,
                texture.textureNormalPath,
                texture.textureHeightPath,
                texture.textureDescription
              )}
            />
            <div className="text-white w-full text-xs overflow-hidden">
              {texture.name.toUpperCase()}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextureCarousel;
