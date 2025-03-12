"use client"

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
// Data
import data from './PhaseData.json';
import PhaseCarouselButton from './PhaseCarouselButton';
import Image from "next/image";
import { GreenBtnBooking } from "./Buttons/GreenBtnBooking";
// Define TypeScript interface for the resource
interface Resource {
    phase: string
}

interface PhaseCarouselProps {
    onPhaseSelect: (phase: string) => void, // Prop to pass selected phase
    handleOpenDialog: (parameter: string) => void; // Prop to pass selected phase
}

// Carousel component

const PhaseCarousel: React.FC<PhaseCarouselProps> = ({ onPhaseSelect, handleOpenDialog }) => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
    const isStemp = useMediaQuery('(max-width: 1000px)'); // Define mobile breakpoint

    const [resources] = useState<Resource[]>(data.resources);
    const [maxScrollWidth, setMaxScrollWidth] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [initialized, setInitialized] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    // const [selectedPhase, setSelectedPhase] = useState<string | null>(null); 
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // State to store the index of the selected button

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const startPosition = useRef<number>(0);
    const scrollPosition = useRef<number>(0);

    const touchStartX = useRef<number | null>(null);

    // Calculate max scroll width after the DOM is fully rendered
    useLayoutEffect(() => {
        if (carouselRef.current) {
            setMaxScrollWidth(
                carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
            );
            setInitialized(true);
        }
    }, [resources]);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const moveNext = () => {
        if (carouselRef.current && currentIndex < maxScrollWidth / carouselRef.current.offsetWidth) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const isDisabled = (direction: "prev" | "next"): boolean => {
        if (!initialized) return true;
        if (direction === "prev") {
            return currentIndex <= 0;
        }
        if (direction === "next") {
            return carouselRef.current
                ? currentIndex >= maxScrollWidth / carouselRef.current.offsetWidth
                : true;
        }
        return false;
    };

    // Scroll to the current index
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    // Handle touch start
    const handleTouchStart = (event: React.TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
    };

    // Handle touch move
    const handleTouchMove = (event: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const touchEndX = event.touches[0].clientX;
        const deltaX = touchStartX.current - touchEndX;

        if (Math.abs(deltaX) > 50) { // Minimum swipe distance
            if (deltaX > 0) {
                moveNext(); // Swipe left
            } else {
                movePrev(); // Swipe right
            }
            touchStartX.current = null; // Reset
        }
    };

    // Handle mouse down
    const handleMouseDown = (event: React.MouseEvent) => {
        setIsDragging(true);
        startPosition.current = event.clientX;
        scrollPosition.current = carouselRef.current ? carouselRef.current.scrollLeft : 0;
    };

    // Handle mouse move
    const handleMouseMove = (event: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;

        const deltaX = event.clientX - startPosition.current;
        carouselRef.current.scrollLeft = scrollPosition.current - deltaX;
    };

    // Handle mouse up
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Handle button click
    const handlePhaseClick = (phase: string, index: number) => {
        // setSelectedPhase(phase);
        setSelectedIndex(index);
        onPhaseSelect(phase); // Notify parent component of the selected phase
    };

    return (
        <div className="carousel space-y-2">
            <Box className="flex w-full justify-between">
                <Typography
                    className="flex"
                    variant="h4"
                    color="#283C28"
                    sx={{
                        fontWeight: 500,
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: isMobile ? '15px' : '20px'
                    }}
                >
                    PHASE
                </Typography>

                {isMobile ? <div className="flex justify-between">
                    <button
                        onClick={movePrev}
                        className="text-[#283C28] w-5 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div> : <div className="flex justify-between">
                    <button
                        onClick={movePrev}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="text-[#283C28] w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>}
            </Box>
            <div className="relative overflow-hidden">

                <Box
                    ref={carouselRef}
                    className="carousel-container relative flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    sx={{ gap: isMobile ? 3 : 8 }}
                >
                    {resources.map((resource, index) => (
                        <PhaseCarouselButton key={index} phase={resource.phase} onClick={() => handlePhaseClick(resource.phase, index)}
                            isSelected={index === selectedIndex} />
                    ))}
                </Box>
            </div>
            {isStemp ? null : (
                <div style={{ marginLeft: "45vw", marginTop: "1vw" }}>
                    <GreenBtnBooking
                        onClick={() => handleOpenDialog("")} label="Book" icon="/images/icons/Vector.svg" className="px-2">
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#283C28", // Button background color
                                color: "#DCC5BD", // Text color
                                border: "none",
                                borderRadius: "50px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                position: "relative", // Required for absolute positioning of the icon
                                overflow: "hidden", // Ensure the icon doesn't overflow the button
                                transition: "all 0.3s ease", // Smooth transition for all properties
                            }}
                            className="lg:w-[260px] lg:h-[160px] lg:justify-between lg:text-[15px]"
                            onClick={() => handleOpenDialog("")}
                        >
                            {/* Text */}
                            <span
                                style={{
                                    transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth fade-out and slide-left
                                }}
                                className="hover:opacity-0 hover:-translate-x-2" // Fade out and slide left on hover
                            >
                                Book
                            </span>

                            {/* Icon */}
                            <Image
                                src="/images/icons/Vector.svg"
                                alt="Book"
                                height={32}
                                width={32}
                                style={{
                                    position: "absolute", // Position the icon absolutely within the button
                                    right: "20px", // Adjust position as needed
                                    opacity: 0, // Start with the icon hidden
                                    transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth fade-in and slide-in
                                }}
                                className="hover:opacity-100 hover:translate-x-0" // Fade in and slide in on hover
                            />
                        </button>
                    </GreenBtnBooking>
                </div>
            )}
        </div >
    );
};

export default PhaseCarousel;
