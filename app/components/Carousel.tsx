'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Card3DEffect from './3dEffects/Card3DEffect'

const Carousel = ({
    data,
    autoplayInterval = 3500,
}: {
    data: {
        image: string,
        product_name: string
    }[],
    autoplayInterval?: number
}) => {
    const [currentImg, setCurrentImg] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
    const [isClient, setIsClient] = useState(false)

    // Function to move to next slide
    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true)
            setCurrentImg(prev => (prev + 1) % data.length)
        }
    }, [data.length, isTransitioning])

    // Function to move to previous slide
    const prevSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true)
            setCurrentImg(prev => (prev - 1 + data.length) % data.length)
        }
    }, [data.length, isTransitioning])

    // Handle autoplay
    useEffect(() => {
        if (!isClient) return

        const startAutoplay = () => {
            autoplayTimerRef.current = setInterval(nextSlide, autoplayInterval)
        }

        startAutoplay()

        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current)
            }
        }
    }, [nextSlide, autoplayInterval, isClient])

    // Handle client-side rendering
    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleTransitionEnd = () => {
        setIsTransitioning(false)
    }

    if (!isClient) return null

    return (
        <div>
            <div className="relative flex aspect-[1/1] xl:w-[500px] lg:w-[320px] mt-[-44vh] overflow-hidden rounded-md xl:top-[-45px] md:top-[50px]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="absolute w-full h-full transition-opacity duration-500"
                        style={{
                            opacity: currentImg === index ? 1 : 0,
                            pointerEvents: currentImg === index ? 'auto' : 'none', // Enable pointer events only for the active slide
                            zIndex: currentImg === index ? 1 : 0
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {currentImg === index ? (
                            <Card3DEffect rotationIntensity={30} perspective={1000}>
                                <Image
                                    src={item.image}
                                    alt={`${item.product_name}`}
                                    fill
                                    className="object-cover"
                                    priority={index === currentImg}
                                />
                            </Card3DEffect>
                        ) : (
                            <Image
                                src={item.image}
                                alt={`${item.product_name}`}
                                fill
                                className="object-cover"
                                priority={index === currentImg}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-between w-full lg:mt-[70px] xl:mt-[0px]">
                <button
                    onClick={() => {
                        if (!isTransitioning) {
                            prevSlide()
                            if (autoplayTimerRef.current) {
                                clearInterval(autoplayTimerRef.current)
                                autoplayTimerRef.current = setInterval(nextSlide, autoplayInterval)
                            }
                        }
                    }}
                    className="px-4 py-2 font-normal flex items-center justify-center hover:opacity-75 transition-opacity"
                    disabled={isTransitioning}
                >
                    <ArrowBackIosNewIcon sx={{ color: '#283C28' }} />
                    <Typography
                        className="font-semibold"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '15px'
                        }}
                    >
                        P R E V
                    </Typography>
                </button>

                <Box>
                    <Typography
                        className="font-semibold transition-opacity duration-700"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
                            fontFamily: 'Chronicle Display',
                            fontSize: {
                                xs: "10px",
                                sm: "15px",
                                md: "25px",
                                lg: "40px",
                            },
                        }}
                    >
                        {data[currentImg]?.product_name}
                    </Typography>
                </Box>

                <button
                    onClick={() => {
                        if (!isTransitioning) {
                            nextSlide()
                            if (autoplayTimerRef.current) {
                                clearInterval(autoplayTimerRef.current)
                                autoplayTimerRef.current = setInterval(nextSlide, autoplayInterval)
                            }
                        }
                    }}
                    className="px-4 py-2 font-normal flex items-center justify-center hover:opacity-75 transition-opacity"
                    disabled={isTransitioning}
                >
                    <Typography
                        className="font-semibold"
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 400,
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

export default Carousel