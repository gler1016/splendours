'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({
    data,
    autoplayInterval = 3500, // Default 3 seconds
}: {
    data: {
        image: string,
        product_name: string
    }[],
    autoplayInterval?: number
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const [isTransitioning, setIsTransitioning] = useState(false)
    const carouselRef = useRef(null)
    const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

    // Function to move to next slide
    const nextSlide = useCallback(() => {
        setIsTransitioning(true)
        setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    }, [data.length])

    // Function to move to previous slide
    const prevSlide = useCallback(() => {
        setIsTransitioning(true)
        setCurrentImg((prev) => (prev === 0 ? data.length - 1 : prev - 1))
    }, [data.length])

    // Autoplay effect
    useEffect(() => {
        // Stop autoplay if user manually navigates
        const startAutoplay = () => {
            autoplayTimerRef.current = setInterval(nextSlide, autoplayInterval)
        }

        const stopAutoplay = () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current)
            }
        }

        startAutoplay()

        // Clean up interval on component unmount
        return () => stopAutoplay()
    }, [nextSlide, autoplayInterval])

    // Transition complete handler
    const handleTransitionEnd = () => {
        setIsTransitioning(false)
    }

    // useEffect to get the initial carousel size
    useEffect(() => {
        const elem = carouselRef.current as unknown as HTMLDivElement
        const { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <div>
            {/* Carousel container */}
            <div className="relative flex aspect-[1/1] xl:w-[500px] lg:w-[320px] mt-[-44vh] overflow-hidden rounded-md xl:top-[-45px] md:top-[50px]">
                {/* Image container with fade transition */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width,
                    }}
                    className="absolute flex w-full h-full transition-all duration-300"
                    onTransitionEnd={handleTransitionEnd}
                >
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div 
                            key={i} 
                            className={`
                                relative w-full h-full shrink-0 
                                transition-opacity duration-500 
                                ${currentImg === i ? 'opacity-100' : 'opacity-0'}
                            `}
                        >
                            <Image
                                className="pointer-events-none object-cover"
                                alt={`carousel-image-${i}`}
                                fill
                                src={v.image || '/images/carousel_interactive/image1.png'}
                                style={{
                                    transition: 'opacity 0.5s ease-in-out',
                                    opacity: currentImg === i ? 1 : 0
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation buttons */}
            <div className="flex justify-between w-full lg:mt-[70px] xl:mt-[0px]">
                <button
                    disabled={currentImg === 0}
                    onClick={() => {
                        prevSlide()
                        // Reset autoplay timer when manually navigating
                        if (autoplayTimerRef.current) {
                            clearInterval(autoplayTimerRef.current)
                            autoplayTimerRef.current = setInterval(nextSlide, autoplayInterval)
                        }
                    }}
                    className={`px-4 py-2 font-normal flex items-center justify-center ${currentImg === 0 && 'opacity-50'}`}
                >
                    <ArrowBackIosNewIcon /> 
                    <Typography
                        className="font-semibold"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '15px'
                        }}
                    >
                        P R E V
                    </Typography>
                </button>
                <Box>
                    <Typography
                        className="font-semibold"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'Chronicle Display',
                            fontSize: {
                                xs: "10px",
                                sm: "15px",
                                md: "25px",
                                lg: "40px",
                            },
                        }}
                    >
                        {data[currentImg]?.product_name || 'Default Name'}
                    </Typography>
                </Box>

                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => {
                        nextSlide()
                        // Reset autoplay timer when manually navigating
                        if (autoplayTimerRef.current) {
                            clearInterval(autoplayTimerRef.current)
                            autoplayTimerRef.current = setInterval(nextSlide, autoplayInterval)
                        }
                    }}
                    className={`px-4 py-2 font-normal flex items-center justify-center ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    <Typography
                        className="font-semibold"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '15px'
                        }}
                    >
                        N E X T
                    </Typography>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    )
}

export default Carousel