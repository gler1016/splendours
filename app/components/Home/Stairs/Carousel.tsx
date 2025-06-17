import React, { useEffect, useState, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";

interface ImageCarouselProps {
    images: { src: string; alt: string; product_name: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
    
    // Sync Embla carousel with our current index state
    useEffect(() => {
        if (emblaApi) {
            // Update our index state when carousel scrolls
            const onSelect = () => {
                setCurrentIndex(emblaApi.selectedScrollSnap());
            };
            emblaApi.on('select', onSelect);
            
            // Setup autoplay
            const autoplayTimer = setInterval(() => {
                if (emblaApi.canScrollNext()) {
                    emblaApi.scrollNext();
                }
            }, 5000);
            
            return () => {
                emblaApi.off('select', onSelect);
                clearInterval(autoplayTimer);
            };
        }
    }, [emblaApi]);

    const handleNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    const handlePrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    }, [emblaApi]);

    return (
        <Box className="w-full flex flex-col
         aspect-[1/1] sm:aspect-[7/1] min-w-1 bg-[#DBC6BC] rounded-[20px] px-8 py-8" style={{ marginTop: '270px' }}>
            {/* Fixed height container with proper positioning */}
            <div className="relative h-52 w-full mb-4" ref={emblaRef}>
                <div className="flex h-full">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative flex-[0_0_100%] h-full flex items-center justify-center"
                        >
                            <div className="relative" style={{ marginTop: '-150px' }}>
                                <Image
                                    src={image.src}
                                    alt={image.alt || "carousel image"}
                                    width={230}
                                    height={230}
                                    className="object-contain"
                                    style={{ 
                                        width: 'auto',
                                        height: '230px'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Box className="flex flex-col w-full gap-y-4">
                <Box className="flex items-center justify-between w-full gap-x-2">
                    <Box className="h-full flex w-1/4 mr-2">
                        <Image
                            src="/images/Home/Interactive_part/card1.jpg"
                            alt="Plus"
                            width={75}
                            height={85}
                            className="h-full"
                        />
                    </Box>

                    <Box className='flex flex-col w-3/4 h-full justify-around'>
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                // fontFamily: 'Chronicle Display',
                                fontSize: '20px'
                            }}
                        >
                            CHARLOTTE
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#17181C"
                            sx={{
                                fontWeight: 300,
                                lineHeight: '1',
                                alignContent: 'flex-start',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '14px'
                            }}
                        >
                            Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                        </Typography>
                    </Box>
                </Box>
                <Box className="flex justify-between w-full">
                    <Typography color="#283C28" sx={{
                        fontWeight: 500,
                        alignContent: 'flex-start',
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: '12px'
                    }}>Category: Stairs</Typography>
                    <Typography color="#283C28" sx={{
                        fontWeight: 500,
                        alignContent: 'flex-start',
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: '12px'
                    }}>Tag:  Exclusive</Typography>
                </Box>
                <Box className="flex justify-between w-full">
                    <Box 
                        className="flex items-center ml-[-5px] cursor-pointer" 
                        onClick={handlePrev}
                    >
                        <ArrowBackIosNewIcon sx={{ color: '#283C28' }} />
                        <Typography
                            className="text-center"
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 500,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '15px',
                                letterSpacing: '0.2em'
                            }}
                        >
                            PREV
                        </Typography>
                    </Box>
                    <Typography
                        className="text-center animate-fadeIn"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            lineHeight: 0.8,
                            fontWeight: 500,
                            // fontFamily: 'Chronicle Display',
                            fontSize: '23px'
                        }}
                    >
                        {images[currentIndex]?.product_name || ''}
                    </Typography>
                    <Box 
                        className="flex items-center mr-[-5px] cursor-pointer" 
                        onClick={handleNext}
                    >
                        <Typography
                            className="text-center"
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 500,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '15px',
                                letterSpacing: '0.2em'
                            }}
                        >
                            NEXT
                        </Typography>
                        <ArrowForwardIosIcon sx={{ color: '#283C28' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ImageCarousel;