
"use client"
// app/about/page.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
// import Header from '../components/Header';
import Header from '../components/Home/Header';
import Footer from '../components/Footer';
import './embla.css';
// import {motion} from 'framer-motion';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';


import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider';
import CustomPartDivider from '../components/CustomPartDivider';
import FullCustomBrownDivider from '../components/Divider/FullCustomBrownDivider';
import ProjectCarousel from '../components/Portfolio/ProjectCarousel';
import MaterialCarousel from '../components/Portfolio/MaterialCarousel';
import FooterMobile from '../components/FooterMobile';

import ProductsCarousel from '../components/Portfolio/ProductsCarousel/ProductsCarousel';
import ProjectTypeCarousel from '../components/Portfolio/ProjectTypeCarousel/ProjectTypeCarousel';
import MaterialMobileCarousel from '../components/Portfolio/MaterialMobileCarousel/MaterialMobileCarousel';
import PracticalityCarousel from '../components/Portfolio/PracticalityCarousel/PracticalityCarousel';
import PracticalityMobileCarousel from '../components/Portfolio/PracticalityMobileCarousel/PracticalityCarousel';
import JourneyCarousel from '../components/Portfolio/JourneyCarousel/JourneyCarousel';
import EnquiryForm from '../components/3dEffects/EnquireFormModal';
import GreenCustomButton from '../components/GreenCustomButton';
import OverlappingImageSlider from '../components/Portfolio/InspirationCarousel/InspirationCarousel';
import OverlappingImageSlider2 from '../components/Portfolio/InspirationCarousel/InspirastionCarousel2';
import Hover3DWrapper from './Hover3dWrapper';
// import { GreenAnimationBooking } from '../components/Home/Booking/GreenAnimationBooking';
// import { GreenBtnBooking } from '../components/Buttons/GreenBtnBooking';
import { GreenBtn } from './GreenBtn';




const PortfolioPage = () => {

    // const images = [
    //     "/images/Portfolio/mission.png",
    //     "/images/Portfolio/practicality/image1.jpg",
    //     "/images/Portfolio/practicality/image2.jpg",
    //     "/images/Portfolio/practicality/image3.jpg",

    //   ];


    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
    // State management for the EnquiryForm modal
    const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
    const handleOpenEnquiryForm = () => setIsEnquiryFormOpen(true);
    const handleCloseEnquiryForm = () => setIsEnquiryFormOpen(false);

    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const [emblaRef, emblaApi] = useEmblaCarousel({ 
    //   loop: true,
    //   align: 'start',
    //   skipSnaps: false,
    //   dragFree: false,
    //   duration: 2
    // });

    const slides = [
        "/images/Portfolio/Inspiration/CarouselImages/image1.png",
        "/images/Portfolio/Inspiration/CarouselImages/image2.png",
        "/images/Portfolio/Inspiration/CarouselImages/image3.png",
        "/images/Portfolio/Inspiration/CarouselImages/image4.png",
        "/images/Portfolio/Inspiration/CarouselImages/image5.png",
    ];

    //   const getSlideDirection = (currentIndex: number): number => {
    //     return currentIndex === 4 ? -1 : 1; // Reverse for last slide
    //   };

    //   useEffect(() => {
    //     if (!emblaApi) return;

    //     emblaApi.on('select', () => {
    //       setSelectedIndex(emblaApi.selectedScrollSnap());
    //     });
    //   }, [emblaApi]);

    //   const autoplay = useCallback(() => {
    //     if (!emblaApi) return;

    //     const intervalId = setInterval(() => {
    //       emblaApi.scrollNext();
    //     }, 3000); 

    //     return () => clearInterval(intervalId);
    //   }, [emblaApi]);

    //   useEffect(() => {
    //     autoplay();
    //   }, [autoplay]);

    return (
        <>
            <EnquiryForm open={isEnquiryFormOpen} handleClose={handleCloseEnquiryForm} />
            <Box>

                <Box className="flex items-center w-full px-3" sx={{ height: isMobile ? '15vh' : '40vh' }}>
                    <Header />
                </Box>

                <Box className="flex flex-col w-full gap-y-12">

                    {isMobile ? (
                        <Box className="px-3">
                            <ProductsCarousel />
                        </Box>
                    ) : isTablet ? (
                        <Box className="flex w-full px-10 space-x-4 justify-center">
                            <Box className="flex justify-center w-1/4">
                                <Image
                                    src="/images/Portfolio/products/product1.png"
                                    alt="Stone1"
                                    width={150} // Smaller image size for tablets
                                    height={150}
                                />
                            </Box>
                            <Box className="flex justify-center w-1/4">
                                <Image
                                    src="/images/Portfolio/products/product2.png"
                                    alt="Stone2"
                                    width={150}
                                    height={150}
                                />
                            </Box>
                            <Box className="flex justify-center w-1/4">
                                <Image
                                    src="/images/Portfolio/products/product3.png"
                                    alt="Stone3"
                                    width={150}
                                    height={150}
                                />
                            </Box>
                            <Box className="flex justify-center w-1/4">
                                <Image
                                    src="/images/Portfolio/products/product4.png"
                                    alt="Stone4"
                                    width={150}
                                    height={150}
                                />
                            </Box>
                        </Box>
                    ) : (
                        <Box className="flex w-full px-20">
                            <Box className="flex w-1/3"></Box>
                            <Box className="flex w-2/3 justify-between">

                                <Box className="flex justify-end w-1/4">
                                    <Hover3DWrapper>
                                        <Image
                                            src="/images/Portfolio/products/product1.png"
                                            alt="Stone1"
                                            width={200}
                                            height={200}
                                            style={{ borderRadius: "10px" }} // Optional: Add rounded corners
                                        />
                                    </Hover3DWrapper>

                                </Box>
                                <Box className="flex justify-end w-1/4">
                                    <Hover3DWrapper>
                                        <Image
                                            src="/images/Portfolio/products/product2.png"
                                            alt="Stone2"
                                            width={200}
                                            height={200}
                                        />
                                    </Hover3DWrapper>
                                </Box>
                                <Box className="flex justify-end w-1/4">
                                    <Hover3DWrapper>

                                        <Image
                                            src="/images/Portfolio/products/product3.png"
                                            alt="Stone3"
                                            width={200}
                                            height={200}
                                        />
                                    </Hover3DWrapper>
                                </Box>
                                <Box className="flex justify-end w-1/4">
                                    <Hover3DWrapper>

                                        <Image
                                            src="/images/Portfolio/products/product4.png"
                                            alt="Stone4"
                                            width={200}
                                            height={200}
                                        />
                                    </Hover3DWrapper>
                                </Box>
                            </Box>
                        </Box>
                    )}

                    {isMobile ? <Box className="px-3">
                        <Box className="flex flex-col w-full gap-y-5">
                            <Box className="w-full">
                                <Typography
                                    variant="h3"
                                    color="#DBC6BC"
                                    sx={{
                                        fontWeight: 400,
                                        textAlign: 'center',
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px'
                                    }}
                                >
                                    AT SPLENDOUR
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#DBC6BC"
                                    sx={{
                                        fontWeight: 400,
                                        textAlign: 'center',
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px'
                                    }}
                                >
                                    IN STONE,
                                </Typography>

                                <Typography
                                    variant="h3"
                                    color="#DBC6BC"
                                    sx={{
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px'
                                    }}
                                >
                                    WE DON'T JUST
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#DBC6BC"
                                    sx={{
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px'
                                    }}
                                >
                                    DEAL IN STONE
                                </Typography>
                            </Box>

                            <FullCustomBrownDivider />

                            <Box className="flex w-full gap-3 py-4">
                                <Box className="w-1/2">
                                    <Box>
                                        <Typography
                                            className="text-center"
                                            variant="h3"
                                            color="#FFFFFF"
                                            sx={{
                                                fontWeight: 300,
                                                fontFamily: 'var(--font-montserrat)',
                                                lineHeight: 1.4,
                                                fontSize: '13px'
                                            }}
                                        >
                                            we create experiences.<br /> Our portfolio showcases a<br /> captivating collection of<br /> projects where natural<br /> stone has breathed life<br /> into Melbourne homes<br /> and businesses.
                                        </Typography>
                                    </Box>

                                    <Box className="flex w-full justify-center items-end h-1/2">
                                        <Image
                                            src="/images/Portfolio/Vectors/Vector-bottom-left.svg"
                                            alt="Vector"
                                            width={130}
                                            height={130}
                                        />
                                    </Box>

                                </Box>
                                <Box className="flex w-1/2">
                                    <Typography
                                        variant="h3"
                                        className="text-center"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: 1.4,
                                            fontSize: '13px'
                                        }}
                                    >
                                        Explore a curated<br /> selection of projects, each<br /> a testament to natural<br /> stone's enduring beauty<br /> and versatility. From<br /> modern kitchen<br /> renovations featuring<br /> captivating stone<br /> splashbacks to stunning<br /> outdoor living spaces<br /> paved with timeless<br /> elegance, discover how<br /> we've collaborated with<br /> clients to translate their<br /> visions into reality.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Box> : <Box className="flex flex-col gap-y-6 px-20 py-2">
                        <Box className="flex w-full justify-between mb-6">
                            <Box className="w-2/3">
                                <Typography
                                    variant="h3"
                                    color="#DBC6BC"
                                    sx={{
                                        fontWeight: 400,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: {
                                            xs: "10px",
                                            sm: "20px",  // Small screens
                                            md: "30px",  // Medium screens
                                            lg: "45px"
                                        }
                                    }}
                                >
                                    AT SPLENDOUR IN STONE,
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="#DBC6BC"
                                    sx={{
                                        fontWeight: 600,
                                        alignContent: 'flex-start',
                                        lineHeight: '1',
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: "10px",
                                            sm: "20px",  // Small screens
                                            md: "30px",  // Medium screens
                                            lg: "45px"
                                        }
                                    }}
                                >
                                    WE DON'T JUST DEAL IN STONE
                                </Typography>
                            </Box>

                            <Image
                                className='hidden lg:flex'
                                src="/images/Portfolio/Vector.svg"
                                alt="Vector"
                                width={90}
                                height={90}
                            />
                        </Box>

                        <FullCustomBrownDivider />

                        <Box
                            className={`flex w-full ${isMobile ? 'flex-col space-y-4 px-4' : isTablet ? 'justify-between' : 'justify-between'
                                }`}
                            sx={{ gap: isTablet ? '12px' : '' }}
                        >
                            {/* Left Typography Box */}
                            <Box className={isMobile ? "w-full" : isTablet ? "w-2/5" : "w-1/4 mt-4"}>
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 100,
                                        lineHeight: '1.4',
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        textAlign: isMobile ? 'center' : 'left',
                                        fontSize: {
                                            xs: '10px', // Extra small screens
                                            sm: '12px', // Small screens
                                            md: isTablet ? '14px' : '15px', // Medium screens
                                            lg: '15px', // Large screens
                                        },
                                    }}
                                >
                                    We create experiences. Our portfolio showcases a captivating collection of projects where natural stone has breathed life into Melbourne homes and businesses.
                                </Typography>
                            </Box>

                            {/* Right Typography Box */}
                            <Box className={isMobile ? "w-full" : isTablet ? "w-3/5" : "flex w-2/5 mt-4"}>
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 100,
                                        lineHeight: '1.4',
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        textAlign: isMobile ? 'center' : 'left',
                                        fontSize: {
                                            xs: '10px', // Extra small screens
                                            sm: '12px', // Small screens
                                            md: isTablet ? '14px' : '15px', // Medium screens
                                            lg: '15px', // Large screens
                                        },
                                    }}
                                >
                                    Explore a curated selection of projects, each a testament to natural stone's enduring beauty and versatility. From modern kitchen renovations featuring captivating stone splashbacks to stunning outdoor living spaces paved with timeless elegance, discover how we've collaborated with clients to translate their visions into reality.
                                </Typography>
                            </Box>
                        </Box>

                    </Box>}

                    <CustomPartDivider />

                    {isMobile ?
                        <Box
                            className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                            sx={{
                                backgroundImage: 'url(images/Portfolio/Inspiration/Mobile/background-mobile.svg)', // Add your image path here
                                backgroundSize: 'cover', // Ensures the background image covers the entire area
                                backgroundPosition: 'center', // Centers the background image
                                backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                            }}
                        >
                            <Box className="flex w-full">
                                <Box className="flex flex-col w-full items-center justify-center">
                                    <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontStyle: 'italic',
                                        fontSize: '50px',
                                        fontWeight: 300,
                                    }}>
                                        FIND
                                    </Typography>
                                    <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontStyle: 'italic',
                                        fontSize: '50px',
                                        fontWeight: 300,
                                    }}>
                                        INSPIRATION
                                    </Typography>
                                    <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontStyle: 'italic',
                                        fontSize: '50px',
                                        fontWeight: 300,
                                    }}>
                                        FOR YOUR
                                    </Typography>
                                    <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontStyle: 'italic',
                                        fontSize: '50px',
                                        fontWeight: 300,
                                    }}>
                                        PROJECT
                                    </Typography>

                                    <Typography variant="h5" className="text-center" color='#283C28' sx={{
                                        width: '80%',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                    }}>
                                        Whether you&apos;re seeking classic<br /> sophistication or a burst of<br /> contemporary flair, our portfolio offers<br /> a wealth of inspiration.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="flex justify-center items-center">
                                {/* <Image
                                    src="/images/Portfolio/Inspiration/Mobile/background-mobile-image.jpg" // Ensure this image is in the public/images folder
                                    alt="Background"
                                    // layout="fill"
                                    objectFit="cover"
                                    className="w-full opacity-100 rounded-2xl"
                                    width={360}
                                    height={518}
                                /> */}
                                <OverlappingImageSlider />
                            </Box>

                        </Box>
                        :
                        <Box
                            className="relative flex-col w-full px-20 py-24 gap-x-12 rounded-[20px]"
                            sx={{
                                backgroundImage: 'url(images/About/legacy-background.jpg)', // Add your image path here
                                backgroundSize: 'cover', // Ensures the background image covers the entire area
                                backgroundPosition: 'center', // Centers the background image
                                backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                            }}
                        >
                            <Box className="flex w-full items-center justify-between mb-12">
                                <Box className="flex w-4/5 items-center">
                                    <Typography
                                        variant="h3"
                                        color="#283C28"
                                        sx={{
                                            fontWeight: 100,
                                            alignContent: 'flex-start',
                                            fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: '0.8',
                                            fontSize: {
                                                xs: "30px",
                                                sm: "45px",  // Small screens
                                                md: "65px",  // Medium screens
                                                lg: "70px"
                                            }
                                        }}
                                    >
                                        FIND INSPIRATION<br /> FOR YOUR PROJECT
                                    </Typography>
                                </Box>
                                <Box className="flex w-[25%] items-center mb-12">
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        className='font-start'
                                        sx={{
                                            fontWeight: 300,
                                            alignContent: 'flex-start',
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "8px",
                                                sm: "10px",  // Small screens
                                                md: "12px",  // Medium screens
                                                lg: "14px"
                                            }
                                        }}
                                    >
                                        Whether you're seeking classic sophistication or a burst of contemporary flair, our portfolio offers a wealth of inspiration.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                overflow: 'hidden',
                                position: 'relative',
                                width: '100%'
                            }}>
                                {/* <Box sx={{ 
                                    display: 'flex',
                                    transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
                                }}>
                                    {slides.map((slide, index) => (
                                    <Box
                                        key={index}
                                        className="flex w-full"
                                        sx={{
                                        position: 'relative',
                                        width: '100%',
                                        aspectRatio: '3 / 1',
                                        backgroundImage: `url("${slide}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        borderRadius: '25px',
                                        flexShrink: 0,
                                        minWidth: '100%',
                                        transform: 'translateX(0)',
                                        transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                                        opacity: 1,
                                        '&.embla__slide--prev': {
                                            transform: 'translateX(-100%)',
                                            opacity: 0,
                                        },
                                        '&.embla__slide--next': {
                                            transform: 'translateX(100%)',
                                            opacity: 0,
                                        }
                                        }}  
                                    />
                                    ))}
                                </Box> */}
                                <OverlappingImageSlider2 images={slides} className='w-full' scaleEffect={true} />
                            </Box>
                        </Box>}

                        <CustomPartDivider />

                    {isMobile ? (
                        <Box className="flex flex-col w-full gap-y-6 px-3">
                            {/* Mobile View */}
                            <Box className="flex flex-col items-center w-full gap-y-3">
                                <Box className="flex w-1/2 justify-center">
                                    <Typography
                                        variant="h3"
                                        color="#DCC5BD"
                                        sx={{
                                            fontWeight: 400,
                                            textAlign: "center",
                                            lineHeight: "1",
                                            // fontFamily: "Chronicle Display",
                                            fontSize: "44px", // Smaller font for mobile
                                        }}
                                    >
                                        PROJECT TYPE
                                    </Typography>
                                </Box>
                                <Box className="flex w-[60%] items-center text-center">
                                    <Typography
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 300,
                                            textAlign: "center",
                                            fontFamily: "var(--font-montserrat)",
                                            fontSize: "13px", // Smaller font for mobile
                                        }}
                                    >
                                        Narrow your search by exploring<br /> projects categorised by<br />
                                        application, such as kitchens,<br /> bathrooms, or outdoor spaces.
                                    </Typography>
                                </Box>
                            </Box>
                            <ProjectTypeCarousel />
                        </Box>
                    ) : (
                        <Box className={`${isTablet ? "px-12" : "px-20"}`}>
                            {/* Tablet and Desktop View */}
                            <Box
                                className={`flex ${isTablet ? "flex-col items-center gap-y-8" : "w-full justify-between"
                                    }`}
                            >
                                {/* Title Section */}
                                <Box
                                    className={`${isTablet ? "flex w-full justify-center" : "flex w-1/2 items-center"
                                        }`}
                                >
                                    <Typography
                                        variant="h3"
                                        color="#DCC5BD"
                                        sx={{
                                            fontWeight: 300,
                                            textAlign: isTablet ? "center" : "left",
                                            fontFamily: "Chronicle Display",
                                            fontSize: {
                                                xs: "20px",
                                                sm: "30px", // Small screens
                                                md: isTablet ? "35px" : "45px", // Adjusted for tablets
                                                lg: "80px",
                                            },
                                        }}
                                    >
                                        PROJECT TYPE
                                    </Typography>
                                </Box>

                                {/* Description Section */}
                                <Box
                                    className={`${isTablet
                                        ? "flex w-full justify-center px-6"
                                        : "flex w-1/3 items-center"
                                        }`}
                                >
                                    <Typography
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontWeight: 100,
                                            lineHeight: "1.4",
                                            textAlign: isTablet ? "center" : "left",
                                            fontFamily: "var(--font-montserrat)",
                                            fontSize: {
                                                xs: "8px",
                                                sm: "10px", // Small screens
                                                md: isTablet ? "14px" : "12px", // Adjusted for tablets
                                                lg: "15px",
                                            },
                                        }}
                                    >
                                        Narrow your search by exploring projects categorised by
                                        application, such as kitchens, bathrooms, or outdoor spaces.
                                    </Typography>
                                </Box>
                            </Box>

                            <ProjectCarousel />
                        </Box>
                    )}

                    <CustomPartDivider />

                    {isMobile ? (
                        <Box
                            className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                            sx={{
                                backgroundImage: 'url(images/Portfolio/Inspiration/Mobile/background-mobile.svg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <Box className="flex w-full">
                                <Box className="flex flex-col w-full items-center justify-center">
                                    <Typography
                                        variant="h2"
                                        className="mb-4 font-light text-center"
                                        color="#283C28"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '0.9',
                                            fontSize: '40px',
                                            fontWeight: 300,
                                        }}
                                    >
                                        EXPLORE <br /> THE <br /> MATERIALS
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        className="text-center"
                                        color="#283C28"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Delve deeper into the specific stones used in <br /> each project, allowing you to discover the <br /> unique textures and colours each natural<br /> stone offers.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="flex w-full justify-center">
                                <MaterialMobileCarousel />
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            className="relative flex flex-col w-full px-8 lg:px-20 py-16 lg:py-24 gap-x-12 rounded-[20px]"
                            sx={{
                                backgroundImage: 'url(images/Portfolio/materials/background.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <Box className="flex flex-col md:flex-row w-full justify-between">
                                {/* Left Section for Description */}
                                <Box className="flex w-[28%] items-start justify-center mt-5">
                                    <Typography
                                        variant="h5"
                                        color="#000000"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: 'var(--font-montserrat)',
                                            textAlign: 'start',
                                            fontSize: {
                                                xs: '12px', // Mobile
                                                sm: '13px', // Small screens
                                                md: '14px', // Tablets
                                                lg: '14px', // Large screens
                                            },
                                        }}
                                    >
                                        Delve deeper into the specific stones used in each project, allowing you to discover the unique textures and colours each natural stone offers.
                                    </Typography>
                                </Box>
                                {/* Right Section for Header */}
                                <Box className="flex w-full md:w-1/2 justify-center items-center">
                                    <Typography
                                        variant="h3"
                                        color="#283C28"
                                        sx={{
                                            fontWeight: 300,
                                            fontFamily: 'Chronicle Display',
                                            lineHeight: '0.8',
                                            fontSize: {
                                                xs: '24px', // Mobile
                                                sm: '32px', // Small screens
                                                md: '48px', // Tablets
                                                lg: '76px', // Large screens
                                            },
                                        }}
                                    >
                                        EXPLORE THE MATERIALS
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Carousel Section */}
                            <Box className="mt-10">
                                <MaterialCarousel />
                            </Box>
                        </Box>
                    )}


                    <CustomPartDivider />

                    {isMobile ? <Box className="px-3">
                        <Box className="flex flex-col items-center w-full gap-y-5">
                            <Box className="flex w-1/2 justify-center">
                                <Typography
                                    variant="h3"
                                    color="#DCC5BD"
                                    sx={{
                                        fontWeight: 300,
                                        textAlign: 'center',
                                        fontStyle: 'italic',
                                        lineHeight: '0.8',
                                        // fontFamily: 'Chronicle Display',
                                        fontSize: 'center'
                                    }}
                                >
                                    GIVING YOU
                                    PRACTICALITY
                                </Typography>
                            </Box>
                            <Box className="flex w-4/5 items-center">
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 300,
                                        lineHeight: '1.4',
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '12px'
                                    }}
                                >
                                    Beyond the visual appeal, each project<br /> description highlights the practical benefits<br /> of using natural stone. Discover how stone&apos;s<br /> durability enhances functionality, its timeless<br /> style adds lasting value, and its sustainable<br /> nature creates an eco-conscious space.
                                </Typography>
                            </Box>
                        </Box>
                    </Box> : <Box className="flex w-full justify-between px-20">
                        <Box className="flex w-1/2 items-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 100,
                                    alignContent: 'flex-start',
                                    fontStyle: 'italic',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: !isTablet ? {
                                        xs: "40px",
                                        sm: "60px",  // Small screens
                                        md: "75px",  // Medium screens
                                        lg: "80px"
                                    } : '60px',
                                    lineHeight: '0.8'
                                }}
                            >
                                GIVING YOU PRACTICALITY
                            </Typography>
                        </Box>
                        <Box className="flex w-[25%] items-center">
                            <Typography
                                variant="h3"
                                color="#ffffff"
                                sx={{
                                    fontWeight: 300,
                                    lineHeight: '1.4',
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "14px"
                                    }
                                }}
                            >
                                Beyond the visual appeal, each project description highlights the practical benefits of using natural stone. Discover how stone's durability enhances functionality, its timeless style adds lasting value, and its sustainable nature creates an eco-conscious space.
                            </Typography>
                        </Box>
                    </Box>}

                    {isMobile ? <Box className="px-3"><FullCustomBrownDivider /></Box> : <Box className="px-20"><FullCustomBrownDivider /></Box>}

                    {isMobile ? <PracticalityMobileCarousel /> : <PracticalityCarousel />}

                    {/* <PortfolioEmblaCarousel options={OPTIONS} /> */}

                    <CustomPartDivider />

                    {isMobile ? (
                        <Box
                            className="relative flex flex-col w-full px-4 py-10 gap-y-8 rounded-[20px]"
                            sx={{
                                backgroundImage: 'url(images/Portfolio/Inspiration/Mobile/background-mobile.svg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <JourneyCarousel />
                            <Box className="flex flex-col w-full gap-y-6">
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="#283C28"
                                        sx={{
                                            fontWeight: 300,
                                            textAlign: 'center',
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: 0.8,
                                            fontSize: '44px'
                                        }}
                                    >
                                        READY TO START YOUR STONE JOURNEY?
                                    </Typography></Box>
                                <Box className="flex w-full flex-col items-center justify-center ">
                                    <GreenBtn label={'Enquire Now!'} icon={'/images/icons/Vector.svg'} onClick={handleOpenEnquiryForm} />
                                    <Link href="/contact">
                                        <GreenBtn label={'Contact Us!'} icon={'/images/icons/Vector.svg'} onClick={() => { }} />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            className="relative flex flex-col w-full px-20 py-24 gap-y-12 rounded-[20px]"
                            sx={{
                                backgroundImage: 'url(images/Portfolio/Journey/background.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <Box className="flex w-full justify-between gap-6">
                                {['product1.png', 'product2.png', 'product3.png', 'product4.png'].map((product, index) => (
                                    <Box key={index} className="flex justify-center w-1/4">
                                        <Image
                                            src={`/images/Portfolio/products/${product}`}
                                            alt={`Stone${index + 1}`}
                                            width={250}
                                            height={250}
                                        />
                                    </Box>
                                ))}
                            </Box>

                            <FullCustomGreenDivider />

                            <Box className="flex w-full justify-between">
                                <Box className="flex w-2/3 items-center">
                                    <Typography
                                        variant="h3"
                                        color="#283C28"
                                        sx={{
                                            fontWeight: 300,
                                            alignContent: 'flex-start',
                                            fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: 0.8,
                                            fontSize: {
                                                xs: "30px",
                                                sm: "40px",  // Small screens
                                                md: "65px",  // Medium screens
                                                lg: "75px"
                                            }
                                        }}
                                    >
                                        READY TO START YOUR STONE JOURNEY?
                                    </Typography>
                                </Box>
                                <Box className="flex flex-col w-[30%] items-center gap-3">
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        sx={{
                                            fontWeight: 400,
                                            lineHeight: '1.4',
                                            alignContent: 'flex-start',
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "8px",
                                                sm: "10px",  // Small screens
                                                md: "12px",  // Medium screens
                                                lg: "14px"
                                            }
                                        }}
                                    >
                                        Beyond the visual appeal, each project description highlights the practical benefits of using natural stone. Discover how stone's durability enhances functionality, its timeless style adds lasting value, and its sustainable nature creates an eco-conscious space.
                                    </Typography>
                                    {isTablet ?
                                        <Box className="flex w-full justify-between gap-4">
                                            <Box className="flex w-1/2">
                                                <GreenCustomButton label={'Enquiry!'} iconSrc={'/images/icons/Vector.svg'} onClick={handleOpenEnquiryForm} />
                                            </Box>
                                            <Box className="flex w-1/2">
                                                <Link href="/contact">
                                                    <GreenCustomButton label={'Contact Us!'} iconSrc={'/images/icons/Vector.svg'} />
                                                </Link>
                                            </Box>
                                        </Box> :
                                        <Box className="flex w-full justify-between mr-14 ">
                                            <Box>

                                            </Box>
                                            <GreenBtn label={'Enquire Now!'} icon={'/images/icons/Vector.svg'} onClick={handleOpenEnquiryForm} />
                                            <Link href="/contact">
                                                <GreenBtn label={'Contact Us!'} icon={'/images/icons/Vector.svg'} onClick={() => { }} />
                                            </Link>
                                        </Box>}
                                </Box>
                            </Box>
                        </Box>
                    )}



                    {isMobile ? <CustomPartDivider /> : <></>}

                    {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white mb-9">
                        <Box className="flex justify-center items-center w-full">
                            <Image
                                src="/images/Portfolio/partner-mobile.png" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="w-[50%]"
                                width={260}
                                height={260}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center p-8 w-full">
                            <Typography variant="h2" className="font-normal" color='#DCC5BD' sx={{
                                // fontFamily: 'Chronicle Display',
                                fontSize: '34px',
                                lineHeight: 1,
                                fontWeight: 300,
                            }}>
                                LET SPLENDOUR <br /> IN STONE BE <br /> YOUR PARTNER
                            </Typography>
                            <CustomPartDivider />
                            <Box>
                                <Typography variant="h5" className="text-center" sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    fontWeight: 300,
                                }}>
                                    in crafting a masterpiece that
                                </Typography>
                                <Typography variant="h5" className="text-center" sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    fontWeight: 300,
                                }}>
                                    endures for generations.
                                </Typography>
                            </Box>
                        </Box>
                    </Box> : <Box className="flex w-full flex-col relative items-center justify-center text-white mb-16">
                        <Box className="flex justify-center items-center w-full">
                            <Image
                                src="/images/Portfolio/partner.png" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="w-1/4"
                                width={600}
                                height={600}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center p-8 w-full flex flex-col justify-center items-center">
                            <Typography variant="h2" className="mb-4 font-semibold" color='#DCC5BD' sx={{
                                fontFamily: 'Chronicle Display',
                                fontSize: !isTablet ? {
                                    xs: '45px', // Font size for extra small screens
                                    sm: '65px', // Font size for small screens
                                    md: '68px', // Font size for medium screens
                                    lg: '68px', // Font size for large screens
                                } : '70px',
                                fontWeight: 100,
                                width: '70%',
                                lineHeight: '0.8'
                            }}>
                                LET SPLENDOUR IN <br />STONE BE YOUR<br /> PARTNER
                            </Typography>

                            <Typography variant="h5" className="mb-8" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: '12px', // Font size for extra small screens
                                    sm: '12px', // Font size for small screens
                                    md: '12px', // Font size for medium screens
                                    lg: '12px', // Font size for large screens
                                },
                                fontWeight: 100,
                            }}>
                                in crafting a masterpiece that endures for generations.
                            </Typography>
                        </Box>
                    </Box>}

                </Box>

                {/* <CustomPartDivider /> */}

                {isMobile ? <FooterMobile /> : <Footer />}

            </Box>
        </>

    );
};
export default PortfolioPage;
