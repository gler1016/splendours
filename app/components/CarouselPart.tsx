'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Typography } from '@mui/material'
import Card3DEffect from './3dEffects/Card3DEffect'
import Image from 'next/image'
import { Box } from '@mui/system'
const CarouselPart = ({
    data,
    autoplayInterval = 3000, // Default 3 seconds
}: {
    data: {
        image: string;
        product_name: string;
        descr: string;
    }[],
    autoplayInterval?: number
}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)
    const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

    // Function to move to next slide
    const nextSlide = useCallback(() => {
        setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    }, [data.length])

    // Function to move to previous slide
    const prevSlide = useCallback(() => {
        setCurrentImg((prev) => (prev === 0 ? data.length - 1 : prev - 1))
    }, [data.length])

    // Autoplay effect
    useEffect(() => {
        // Start autoplay
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
        // setIsTransitioning(false)
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
            <div className="flex justify-between gap-x-2">
                {/* Carousel container */}
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-md" style={{ marginBottom: "0px" }}>
                    {/* Image container */}
                    <div
                        ref={carouselRef}
                        style={{
                            left: -currentImg * carouselSize.width,
                        }}
                        className="absolute flex h-full w-full transition-all duration-300"
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {/* Map through data to render images */}
                        {data.map((v, i) => (
                            <div
                                key={i}
                                className={`
                                    relative h-full w-full shrink-0
                                    transition-opacity duration-500 
                                    ${currentImg === i ? 'opacity-100' : 'opacity-0'}
                                `}
                                style={{
                                    pointerEvents: currentImg === i ? 'auto' : 'none', // Enable pointer events only for the active slide
                                }}
                            >
                                {currentImg === i ? (
                                    <Card3DEffect rotationIntensity={30} perspective={1000}>
                                        <Image
                                            className="rounded-lg object-cover"
                                            alt={`carousel-image-${i}`}
                                            src={v.image || '/images/carousel_interactive_part/card1.png'}
                                            width={200}
                                            height={300}
                                            style={{
                                                transition: 'opacity 0.5s ease-in-out',
                                                opacity: currentImg === i ? 1 : 0,
                                            
                                            }}
                                        />
                                    </Card3DEffect>
                                ) : (
                                    <>
                                        <Image
                                            className="rounded-lg object-cover"
                                            alt={`carousel-image-${i}`}
                                            src={v.image || '/images/carousel_interactive_part/card1.png'}
                                            width={500}
                                            height={300}
                                            style={{
                                                transition: 'opacity 0.5s ease-in-out',
                                                opacity: currentImg === i ? 1 : 0,
                                                width: '100%', // Ensure the image takes full width
                                                height: '100%', // Ensure the image takes full height
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Box className='flex flex-col w-[60%] h-[120px] justify-around'>
                    <Card3DEffect>
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "10px",
                                    sm: "15px",  // Small screens
                                    md: "25px",  // Medium screens
                                    lg: "25px"
                                }
                            }}
                        >
                            {data[currentImg]?.product_name}
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#17181C"
                            sx={{
                                // width: '90%',
                                fontWeight: 500,
                                alignContent: 'flex-start',
                                lineHeight: '1.2',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "7px",
                                    sm: "8px",  // Small screens
                                    md: "10px",  // Medium screens
                                    lg: "12px"
                                }
                            }}
                        >
                            {/* Available in our freeform style, the <span className='lowercase'>{data[currentImg]?.product_name}</span> sandstone is made up of beautiful soft hues such as cream, yellow and pink. */}
                            {data[currentImg]?.descr}
                        </Typography>
                    </Card3DEffect>
                </Box>
            </div>
            {/* Navigation buttons */}
            <div className="mt-6 flex justify-between" style={{ width: '100%' }}>
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
                    className={` font-bold flex justify-center items-center ${currentImg === 0 && 'opacity-50'}`}
                >
                    <ArrowBackIosNewIcon sx={{ color: '#283C28' }} />
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
                    className={` font-bold flex justify-center items-center ${currentImg === data.length - 1 && 'opacity-50'}`}
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
                    <ArrowForwardIosIcon sx={{ color: '#283C28' }} />
                </button>
            </div>
        </div>
    )
}

export default CarouselPart