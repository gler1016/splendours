
"use client"
// app/about/page.tsx

import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
// import Header from '../components/Header';
import Header from '../components/Home/Header';
import Footer from '../components/Footer';
import { Box, Typography, Rating } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel'
import FullCustomYellowDivider from '../components/Divider/FullCustomYellowDivider';
import CustomPartDivider from '../components/CustomPartDivider';
import FullCustomBlackDivider from '../components/Divider/FullCustomBlackDivider';
import ServicesEmblaCarousel from '../components/Services/EmblaCarousel/EmblaCarousel';
import ServiceMobileCarousel from '../components/Services/ServiceMobileCarousel/ServiceMobileCarousel';
import WhiteCustomButton from '../components/WhiteButton';
// import GreenCustomButton from '../components/Buttons/GreenCustomButton';
import GreenCustomButton from '../components/GreenCustomButton';
import './embla.css';
import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider';
import FooterMobile from '../components/FooterMobile';
import EnquiryForm from '../components/3dEffects/EnquireFormModal';
import "./page.module.css"
import FeaturedCarousel from '../components/FeaturedCarousel';
import Card3DEffect from '../components/3dEffects/Card3DEffect';
import { GreenServiceBtn } from './GreenServiceBtn';
// import { AnimatedModalDemo } from '../components/Buttons/AnimatedModalDemo';
import { WhiteBtn } from './whiteBtn';


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const imageSets = [
    ["/images/Service/House/Mobile/main1.png", "/images/Service/House/Mobile/image1_1.png", "/images/Service/House/Mobile/image2_1.png"],
    ["/images/Service/House/Mobile/main2.png", "/images/Service/House/Mobile/image1_2.png", "/images/Service/House/Mobile/image2_2.png"],
    ["/images/Service/House/Mobile/main3.png", "/images/Service/House/Mobile/image1_3.png", "/images/Service/House/Mobile/image2_3.png"],
];
const imageSetsDeskTop = [
    ["/images/Service/advertisement/main1.png", "/images/Service/advertisement/image1_1.png", "/images/Service/advertisement/image2_1.png"],
    ["/images/Service/advertisement/main2.png", "/images/Service/advertisement/image1_2.png", "/images/Service/advertisement/image2_2.png"],
    ["/images/Service/advertisement/main3.png", "/images/Service/advertisement/image1_3.png", "/images/Service/advertisement/image2_3.png"],
];

const ServicesPage = () => {
    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery("(max-width: 768px)"); // Mobile breakpoint
    // const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [currentSetIndexDeskTop, setCurrentSetIndexDeskTop] = useState(0);

    // const [images, setImages] = useState([
    //     { id: 1, url: '/images/Service/advertisement/main1.png', position: 'large', transitioning: false },
    //     { id: 2, url: '/images/Service/advertisement/main2.png', position: 'small-right', transitioning: false },
    //     { id: 3, url: '/images/Service/advertisement/main3.png', position: 'small-left', transitioning: false }
    //   ]);

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       setImages(prevImages => {
    //         // First mark all images as transitioning
    //         const transitioning = prevImages.map(img => ({ ...img, transitioning: true }));

    //         // After marking transition, rotate positions
    //         return transitioning.map((img, i) => {
    //           const positions = ['large', 'small-right', 'small-left'];
    //           const currentIndex = positions.indexOf(img.position);
    //           const nextIndex = (currentIndex + 1) % positions.length;
    //           return { ...img, position: positions[nextIndex] };
    //         });
    //       });

    //       // Reset transitioning flag after animation completes
    //       setTimeout(() => {
    //         setImages(prev => prev.map(img => ({ ...img, transitioning: false })));
    //       }, 500);
    //     }, 3000);

    //     return () => clearInterval(interval);
    //   }, []);

    const [value] = React.useState<number | null>(5);
    // State management for the EnquiryForm modal
    const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
    const handleOpenEnquiryForm = () => setIsEnquiryFormOpen(true);
    const handleCloseEnquiryForm = () => setIsEnquiryFormOpen(false);
    const [isResizing, setIsResizing] = useState(false);
    // const [isResizingDeskTop, setIsResizingDeskTop] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setIsResizing(true); // Trigger resizing effect
            // setIsResizingDeskTop(true); // Trigger resizing effect
            setTimeout(() => {
                // setCurrentSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
                setCurrentSetIndexDeskTop((prevIndex) => (prevIndex + 1) % imageSetsDeskTop.length);
                setIsResizing(false); // Reset resizing after image update
                // setIsResizingDeskTop(false); // Reset resizing after image update
            }, 500); // Match transition duration
        }, 3000);

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <EnquiryForm open={isEnquiryFormOpen} handleClose={handleCloseEnquiryForm} />
            <Box >

                <Box className="flex items-center w-full px-2" sx={{ height: isMobile ? '15vh' : '40vh' }}>
                    <Header />
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: isMobile ? '1rem' : '4rem',
                    marginTop: isMobile ? '0px' : ' 20px'
                }}>

                    {isMobile ? <Box className="flex w-full flex-col px-3 justify-center items-center gap-y-3">
                        <Box
                            className="w-full"
                            style={{
                                transform: isResizing ? "scale(0.95)" : "scale(1)", // Dynamic width
                                transition: "transform 1s ease-in-out", // Smooth transition
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={imageSets[currentSetIndexDeskTop][0]} // First image in the current set
                                alt="main"
                                width={356}
                                height={189}
                                className='w-full h-[189px] rounded-[20px] zoom-image'
                            />
                        </Box>
                        <Box className="flex w-full justify-between gap-x-3">
                            <Box className="w-1/2 zoom-effect">
                                <Box
                                    className="w-full h-[51px] rounded-[20px] zoom-image"
                                    style={{
                                        transform: isResizing ? "scale(0.95)" : "scale(1)", // Dynamic width
                                        transition: "transform 1s ease-in-out", // Smooth transition
                                        overflow: "hidden",
                                    }}
                                    sx={{
                                        backgroundImage: `url(${imageSets[currentSetIndexDeskTop][1]})`,
                                        backgroundSize: "cover", // Ensures the image covers the box entirely
                                        backgroundPosition: "center", // Centers the image within the box
                                    }}
                                >
                                    {/* Additional content inside the Box, if needed */}
                                </Box>
                            </Box>
                            <Box className="w-1/2 zoom-effect">
                                <Box
                                    className="w-full h-[51px] rounded-[20px] zoom-image"
                                    style={{
                                        transform: isResizing ? "scale(0.95)" : "scale(1)", // Dynamic width
                                        transition: "transform 1s ease-in-out", // Smooth transition
                                        overflow: "hidden",
                                    }}
                                    sx={{
                                        backgroundImage: `url(${imageSets[currentSetIndexDeskTop][2]})`,
                                        backgroundSize: "cover", // Ensures the image covers the box entirely
                                        backgroundPosition: "center", // Centers the image within the box
                                    }}
                                >
                                    {/* Additional content inside the Box, if needed */}
                                </Box>
                            </Box>
                        </Box>
                        <Box className="w-full flex flex-col mt-3">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                AT SPLENDOUR
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                IN STONE,
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                WE&apos;RE
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                PASSIONATE
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                ABOUT
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                ELEVATING
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                AUSTRALIAN
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '40px'
                                }}
                            >
                                HOMES
                            </Typography>
                        </Box>

                        <FullCustomYellowDivider />

                        <Box className="w-4/5">
                            <Typography
                                className="text-center"
                                variant="h3"
                                color="#ffffff"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    lineHeight: '1.4'
                                }}
                            >
                                with natural stone&apos;s timeless beauty and enduring qualities. We offer a comprehensive suite of services to transform your vision into reality, from selecting the perfect stone to flawless installation.
                            </Typography>
                        </Box>
                    </Box> : <Box className="flex flex-col w-full px-12 gap-y-6">
                        <Box className="flex w-full justify-between gap-2">
                            <Box className="flex flex-col w-7/12">
                                <Box className="flex h-1/3">
                                </Box>
                                <Box className="flex flex-col h-2/3">
                                    <Typography
                                        variant="h3"
                                        color="#DCC5BD"
                                        sx={{
                                            fontWeight: 400,
                                            alignContent: 'flex-start',
                                            fontFamily: 'Chronicle Display',
                                            lineHeight: '0.9',
                                            fontSize: {
                                                xs: "15px",
                                                sm: "30px",  // Small screens
                                                md: "40px",  // Medium screens
                                                lg: "54px"
                                            }
                                        }}
                                    >
                                        AT SPLENDOUR IN STONE
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="#DCC5BD"
                                        sx={{
                                            fontWeight: 600,
                                            alignContent: 'flex-start',
                                            fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: {
                                                xs: "15px",
                                                sm: "30px",  // Small screens
                                                md: "40px",  // Medium screens
                                                lg: "57px"
                                            }
                                        }}
                                    >
                                        WE&apos;RE PASSIONATE
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="#DCC5BD"
                                        sx={{
                                            fontWeight: 600,
                                            alignContent: 'flex-start',
                                            fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: {
                                                xs: "15px",
                                                sm: "30px",  // Small screens
                                                md: "40px",  // Medium screens
                                                lg: "57px"
                                            }
                                        }}
                                    >
                                        ABOUT ELEVATING
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="#DCC5BD"
                                        sx={{
                                            fontWeight: 600,
                                            alignContent: 'flex-start',
                                            fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: {
                                                xs: "15px",
                                                sm: "30px",  // Small screens
                                                md: "40px",  // Medium screens
                                                lg: "57px"
                                            }
                                        }}
                                    >
                                        AUSTRALIAN HOMES
                                    </Typography>
                                </Box>
                                <Box className="w-11/12 -mt-40 mb-10">
                                    <FullCustomYellowDivider />
                                </Box>
                                <Box className="flex w-[50%]">
                                    <Typography
                                        variant="h3"
                                        color="#ffffff"
                                        sx={{
                                            fontWeight: 100,
                                            lineHeight: '1.4',
                                            alignContent: 'flex-start',
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "8px",
                                                sm: "10px",  // Small screens
                                                md: "12px",  // Medium screens
                                                lg: "15px"
                                            }
                                        }}
                                    >
                                        with natural stone&apos;s timeless beauty and enduring qualities. We offer a comprehensive suite of services to transform your vision into reality, from selecting the perfect stone to flawless installation.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className="flex flex-col w-5/12">
                                <FeaturedCarousel />
                            </Box>
                        </Box>

                        <Box className="flex w-full justify-between">
                        </Box>
                    </Box>}

                    {isMobile ? <Box className="py-12">
                        <CustomPartDivider />
                    </Box> : <></>}


                    {isMobile ? <Box
                        className="relative flex flex-col w-full px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/Service/products/background-mobile.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >
                        <Box className="flex w-full justify-center">
                            <Box className="flex w-2/3 justify-center">
                                <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontSize: '48px',
                                    fontWeight: 300,
                                }}>
                                    OUR SERVICES
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex w-full justify-center">
                            <ServiceMobileCarousel />
                        </Box>

                    </Box> : <Box
                        className="relative flex-col w-full px-14 py-24 gap-x-12 rounded-[20px] space-y-12"
                        sx={{
                            backgroundImage: 'url(images/Service/products/background.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating th e background  image
                        }}
                    ><Box className="flex w-full justify-between items-end">
                            <Box className="flex w-1/3">
                                <Typography
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        fontWeight: 400,
                                        alignContent: 'flex-start',
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '0.8',
                                        fontSize: {
                                            xs: "25px",
                                            sm: "35px",  // Small screens
                                            md: "70px",  // Medium screens
                                            lg: "80px"
                                        }
                                    }}
                                >
                                    OUR SERVICES
                                </Typography>
                            </Box>
                            <Box className="flex w-1/12">
                                <Image
                                    src="/images/Service/products/Vector-bottom-right.svg"
                                    alt="main"
                                    width={100}
                                    height={100}
                                />
                            </Box>
                        </Box>

                        <ServicesEmblaCarousel slides={SLIDES} options={OPTIONS} /></Box>}

                    {isMobile ? <Box className="py-12">
                        <CustomPartDivider />
                    </Box> : <></>}


                    {isMobile ? <Box className="flex w-full flex-col items-center px-3 gap-y-3">
                        <Box className="flex w-2/3 justify-center items-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '34px',
                                    lineHeight: '0.9'
                                }}
                            >
                                YOUR STONE <br /> DESIGN <br /> JOURNEY AT <br /> SPLENDOUR IN STONE
                            </Typography>
                        </Box>
                        <Box className="flex w-full justify-center" style={{ paddingLeft: '10px', paddingRight: "10px" }}>
                            <Typography
                                variant="h3"
                                color="#ffffff"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: '12px',
                                }}
                            >
                                At Splendour in Stone, the journey towards your <br /> dream stone design should be seamless and<br /> enjoyable.<br />
                                We understand that embarking on a stone design<br /> project can involve questions. Our team is here to<br /> guide you through every step, ensuring a smooth<br /> and stress-free experience.<br />
                                Here&apos;s a glimpse into the collaborative process,<br /> from your initial inquiry to the final installation:
                            </Typography>
                        </Box>
                    </Box> : <Box className="flex w-full justify-between px-12">
                        <Box className="flex w-1/2 items-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 100,
                                    fontStyle: 'italic',
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontSize: {
                                        xs: "20px",
                                        sm: "30px",  // Small screens
                                        md: "45px",  // Medium screens
                                        lg: "50px"
                                    }
                                }}
                            >
                                YOUR STONE DESIGN JOURNEY AT SPLENDOUR IN STONE
                            </Typography>
                        </Box>
                        <Box className="flex w-1/3 items-start">
                            <Typography
                                variant="h3"
                                color="#ffffff"
                                sx={{
                                    fontWeight: 100,
                                    lineHeight: '1.4',
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "13px"
                                    }
                                }}
                            >
                                At Splendour in Stone, the journey towards your dream stone design should be seamless and enjoyable. <br />
                                We understand that embarking on a stone design project can involve questions. Our team is here to guide you through every step, ensuring a smooth and stress-free experience. <br />
                                Here&apos;s a glimpse into the collaborative process, from your initial inquiry to the final installation:
                            </Typography>
                        </Box>
                    </Box>}

                    {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                    {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                        <Box className="flex w-full justify-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >01</Typography>
                        </Box>
                        <Box className="flex w-full flex-col justify-center items-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 400,
                                    // fontFamily: 'Chronicle Display',
                                    letterSpacing: '0.1em',
                                    fontSize: '28px'
                                }}
                            >
                                CONSULTATION CALL
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                className="text-center mb-2"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    lineHeight: 1.4,
                                }}
                            >
                                Our conversation begins with a friendly call. We&apos;ll<br /> discuss your vision, understand your project scope,<br /> and answer any questions you may have about<br /> natural stone.
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Image
                                src="/images/Service/journey/Mobile/consultation.png"
                                alt="main"
                                width={358}
                                height={215}
                                className='rounded-lg w-full h-full'
                            />
                        </Box>
                    </Box></Box> : <Box className="flex w-full justify-between gap-6 px-12">
                        <Box className="flex w-1/5 items-start">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "15px",  // Medium screens
                                        lg: "20px"
                                    }
                                }}
                            >01</Typography>
                        </Box>
                        <Box className="flex w-2/5 flex-col justify-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "20px",  // Small screens
                                        md: "24px",  // Medium screens
                                        lg: "24px"
                                    }
                                }}
                            >
                                CONSULTATION CALL
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 100,
                                    lineHeight: '1.4',
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "14px",  // Medium screens
                                        lg: "14px"
                                    }
                                }}
                            >
                                Our conversation begins with a friendly call. We&apos;ll discuss your vision, understand your project scope, and answer any questions you may have about natural stone.
                            </Typography>
                        </Box>
                        <Box className="flex w-[38%] justify-end">
                            <Card3DEffect>
                                <Image
                                    src="/images/Service/journey/consultation.png"
                                    alt="main"
                                    width={471}
                                    height={221}
                                    className='float-end rounded-lg'
                                />
                            </Card3DEffect>
                        </Box>
                    </Box>}

                    {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                    {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                        <Box className="flex w-full justify-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >02</Typography>
                        </Box>
                        <Box className="flex w-full flex-col justify-center items-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 400,
                                    // fontFamily: 'Chronicle Display',
                                    letterSpacing: '0.1em',
                                    fontSize: '30px'
                                }}
                            >
                                PROJECT <br /> DISCUSSIONS
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                className="text-center mb-2"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    lineHeight: 1.4,
                                    // width:'95%',
                                }}
                            >
                                Following the call, we&apos;ll delve deeper. We&apos;ll<br /> explore design options, recommend suitable<br /> stone types based on your preferences and<br /> space, and provide initial estimates to ensure<br /> transparency. Additionally, this is the perfect<br /> opportunity to visit our showroom for a more<br /> realistic feel of what to expect.
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Image
                                src="/images/Service/journey/Mobile/discussion.png"
                                alt="main"
                                width={358}
                                height={215}
                                className='rounded-lg w-full h-full'
                            />
                        </Box>
                    </Box></Box> : <Box className="flex w-full justify-between gap-8 px-12">
                        <Box className="flex w-1/5 items-start">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "15px",  // Medium screens
                                        lg: "20px"
                                    }
                                }}
                            >02</Typography>
                        </Box>
                        <Box className="flex w-2/5 flex-col justify-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "20px",  // Small screens
                                        md: "24px",  // Medium screens
                                        lg: "24px"
                                    }
                                }}
                            >
                                PROJECT DISCUSSIONS
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 100,
                                    lineHeight: '1.4',
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "14px",  // Medium screens
                                        lg: "14px"
                                    }
                                }}
                            >
                                Following the call, we&apos;ll delve deeper. We&apos;ll explore design options, recommend suitable stone types based on your preferences and space, and provide initial estimates to ensure transparency. Additionally, this is the perfect opportunity to visit our showroom for a more realistic feel of what to expect.
                            </Typography>
                        </Box>
                        <Box className="flex w-[38%] justify-end">
                            <Card3DEffect >

                                <Image
                                    src="/images/Service/journey/discussion.png"
                                    alt="main"
                                    width={471}
                                    height={221}
                                    className='float-end rounded-lg'
                                />
                            </Card3DEffect>
                        </Box>


                    </Box>}

                    {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                    {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                        <Box className="flex w-full justify-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >03</Typography>
                        </Box>
                        <Box className="flex w-full flex-col justify-center items-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 400,
                                    // fontFamily: 'Chronicle Display',
                                    letterSpacing: '0.1em',
                                    fontSize: '30px'
                                }}
                            >
                                ON-SITE MEASUREMENTS
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                className="text-center mb-2"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    lineHeight: 1.4
                                }}
                            >
                                Once we&apos;ve established a plan, our team<br /> members will visit your site to take precise<br /> measurements. This ensures a flawless fit and<br /> avoids any unwanted surprises during<br /> installation.
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Image
                                src="/images/Service/journey/Mobile/measurement.png"
                                alt="main"
                                width={358}
                                height={215}
                                className="rounded-lg w-full h-full"
                            />
                        </Box>
                    </Box></Box> : <Box className="flex w-full justify-between gap-8 px-12">
                        <Box className="flex w-1/5 items-start">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >03</Typography>
                        </Box>
                        <Box className="flex w-2/5 flex-col justify-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "20px",  // Small screens
                                        md: "24px",  // Medium screens
                                        lg: "24px"
                                    }
                                }}
                            >
                                ON-SITE MEASUREMENTS
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 100,
                                    lineHeight: '1.4',
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "14px",  // Medium screens
                                        lg: "14px"
                                    }
                                }}
                            >
                                Once we&apos;ve established a plan, our team members will visit your site to take precise measurements. This ensures a flawless fit and avoids any unwanted surprises during installation.
                            </Typography>
                        </Box>
                        <Box className="flex w-[38%] justify-end">
                            <Card3DEffect rotationIntensity={30} perspective={1000}>
                                <Image
                                    src="/images/Service/journey/measurement.png"
                                    alt="main"
                                    width={471}
                                    height={221}
                                    className='float-end rounded-lg'
                                />
                            </Card3DEffect>
                        </Box>
                    </Box>}

                    {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                    {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                        <Box className="flex w-full justify-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px',
                                    lineHeight: '0.8'
                                }}
                            >04</Typography>
                        </Box>
                        <Box className="flex w-full flex-col justify-center items-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 400,
                                    // fontFamily: 'Chronicle Display',
                                    letterSpacing: '0.1em',
                                    fontSize: '30px'
                                }}
                            >
                                ARRANGING FOR<br /> STOCK<br /> AND STONE MASON
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                className="text-center mb-2"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    lineHeight: 1.4,
                                }}
                            >
                                With your project details finalised, we&apos;ll secure<br /> the perfect stone selection and collaborate with<br /> a trusted and highly skilled stone mason for<br /> installation.
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Image
                                src="/images/Service/journey/Mobile/arranging.png"
                                alt="main"
                                width={358}
                                height={215}
                                className='rounded-lg w-full h-full'
                            />
                        </Box>
                    </Box></Box> : <Box className="flex w-full justify-between gap-8 px-12">
                        <Box className="flex w-1/5 items-start">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "14px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}
                            >04</Typography>
                        </Box>
                        <Box className="flex w-2/5 flex-col justify-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "20px",  // Small screens
                                        md: "24px",  // Medium screens
                                        lg: "24px"
                                    }
                                }}
                            >
                                ARRANGING FOR STOCK AND STONE MASON
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 100,
                                    lineHeight: '1.4',
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "14px",  // Medium screens
                                        lg: "14px"
                                    }
                                }}
                            >
                                With your project details finalised, we&apos;ll secure the perfect stone selection and collaborate with a trusted and highly skilled stone mason for installation.
                            </Typography>
                        </Box>
                        <Box className="flex w-[38%] justify-end">
                            <Card3DEffect rotationIntensity={30} perspective={1000}>
                                <Image
                                    src="/images/Service/journey/arranging.png"
                                    alt="main"
                                    width={471}
                                    height={221}
                                    className='rounded-lg float-end'
                                />
                            </Card3DEffect>
                        </Box>
                    </Box>}

                    {isMobile ? <Box className="px-3"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                    {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full items-center gap-2" >
                        <Box className="flex w-full justify-center">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '20px'
                                }}
                            >05</Typography>
                        </Box>
                        <Box className="flex w-full flex-col justify-center items-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 400,
                                    // fontFamily: 'Chronicle Display',
                                    letterSpacing: '0.1em',
                                    fontSize: '30px'
                                }}
                            >
                                INSTALLATION DAY
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                className="text-center mb-2"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    lineHeight: 1.4,
                                }}
                            >
                                The big day arrives! Our recommended stone <br /> mason will meticulously install your chosen<br /> stone, transforming your space with the<br /> enduring beauty of natural stone.
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Image
                                src="/images/Service/journey/Mobile/installation.png"
                                alt="main"
                                width={358}
                                height={215}
                                className='rounded-lg w-full h-full'
                            />
                        </Box>
                    </Box></Box> : <Box className="flex w-full justify-between gap-8 px-12">
                        <Box className="flex w-1/5 items-start">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "15px",  // Medium screens
                                        lg: "20px"
                                    }
                                }}
                            >05</Typography>
                        </Box>
                        <Box className="flex w-2/5 flex-col justify-center gap-5">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 600,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "15px",
                                        sm: "20px",  // Small screens
                                        md: "24px",  // Medium screens
                                        lg: "24px"
                                    }
                                }}
                            >
                                INSTALLATION DAY
                            </Typography>
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 100,
                                    lineHeight:'1.4',
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",  // Small screens
                                        md: "14px",  // Medium screens
                                        lg: "14px"
                                    }
                                }}
                            >
                                The big day arrives! Our recommended stone mason will meticulously install your chosen stone, transforming your space with the enduring beauty of natural stone.
                            </Typography>
                        </Box>
                        <Box className="flex w-[38%] justify-end">
                            <Card3DEffect>
                                <Image
                                    src="/images/Service/journey/installation.png"
                                    alt="main"
                                    width={471}
                                    height={221}
                                    className='float-end rounded-lg'
                                />
                            </Card3DEffect>
                        </Box>
                    </Box>}

                    {isMobile ? <Box className="px-44 py-12"><FullCustomYellowDivider /></Box> : <Box className="px-12"><FullCustomYellowDivider /></Box>}

                    {isMobile ? <Box><Box
                        className="flex w-full p-3"
                        sx={{
                            position: 'relative',
                            // width: '80%',
                            aspectRatio: '1 / 2.16', // Aspect ratio of 3:1 (width to height)
                            backgroundImage: 'url("/images/Service/transparency-mobile.jpg")',
                            backgroundSize: 'cover', // Ensure the image covers the entire box
                            backgroundPosition: 'center', // Center the image
                            display: 'flex',
                            alignItems: 'center', // Center align text vertically
                            justifyContent: 'space-around', // Center align text horizontally
                            borderTopRightRadius: "25px",
                            // Adding the overlay pseudo-element
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',

                                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity here
                                zIndex: 1, // Ensure it&apos;s on top of the background image but behind the content
                            },
                        }}
                    >
                        <Box className="flex w-full flex-col h-full items-center justify-between" sx={{ zIndex: 2 }}>
                            <Box className="flex w-full flex-col gap-y-5 mt-7">
                                <Box>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontSize: '40px',
                                            fontStyle: 'italic',
                                            lineHeight: '1',
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        TRANSPARENCY
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontSize: '40px',
                                            fontStyle: 'italic',
                                            lineHeight: '1',
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        YOU CAN TRUST:
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontSize: '40px',
                                            lineHeight: '1',
                                            fontStyle: 'italic',
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        EXPLORING OUR
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontSize: '40px',
                                            lineHeight: '1',
                                            fontStyle: 'italic',
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        PRICING
                                    </Typography>
                                </Box>
                                <Box className="flex w-4/5">
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '12px',
                                            fontWeight: 100,
                                            lineHeight: '1.4',
                                            textAlign: 'start',
                                        }}
                                    >
                                        At Splendour in Stone, we believe in open communication. We invite you to visit our <span style={{ fontWeight: 500 }}>Pricing Page</span> to explore a breakdown of our services and associated costs. This ensures you can make informed decisions while embarking on your stone design journey.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="flex w-full justify-end">
                                <Image
                                    src="/images/Service/Vector-top-right.svg"
                                    alt="check"
                                    width={80}
                                    height={80}
                                    onClick={handleOpenEnquiryForm}
                                />
                            </Box>
                        </Box>


                    </Box><Box
                        className="relative flex-col w-full px-6 py-4 gap-x-12 space-y-5"
                        sx={{
                            backgroundImage: 'url(images/Service/Satisfiction//Mobile/background-mobile.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                            borderBottomLeftRadius: "25px",
                            borderBottomRightRadius: "25px"
                        }}>
                            <Box className="flex flex-col w-full items-center py-4">
                                <Typography
                                    className="text-center"
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        fontWeight: 300,
                                        fontStyle: 'italic',
                                        lineHeight: '0.8',
                                        // fontFamily: 'Chronicle Display',
                                        fontSize: '40px'
                                    }}
                                >
                                    HEAR FROM OUR SATISFIED CLIENTS:
                                </Typography>
                                <Typography
                                    className="text-center"
                                    variant="h3"
                                    color="#283C28"
                                    sx={{
                                        fontWeight: 300,
                                        fontStyle: 'italic',
                                        lineHeight: '0.8',
                                        // fontFamily: 'Chronicle Display',
                                        fontSize: '40px'
                                    }}
                                >
                                    UNVEILING THE SPLENDOUR
                                </Typography>
                            </Box>
                            <FullCustomBlackDivider />
                            <Box className="flex w-full justify-center items-center">
                                <Typography
                                    variant="h3"
                                    color="#000000"
                                    className='text-center'
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '13px'
                                    }}
                                >
                                    Are you curious to hear how we&apos;ve transformed<br /> spaces with natural stone? Dive into our<br /> Testimonials Page to hear from our delighted<br /> clients and discover how natural stone has<br /> added a touch of magic to their homes and<br /> businesses. You can also view our portfolio to<br /> get a clear picture of the transformations we<br /> have achieved with our clients.
                                </Typography>
                            </Box>
                            <Box className="flex flex-col w-full justify-center items-center space-y-3">
                                <Box className="flex w-1/3">
                                    <Image alt='Remy Sharp' src="/images/Service/avatar.svg" width={200} height={200} />
                                </Box>
                                <Box className="flex items-center">
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            color="#000000"
                                            sx={{
                                                fontWeight: 600,
                                                alignContent: 'flex-start',
                                                fontFamily: 'Chronicle Display',
                                                fontSize: {
                                                    xs: "20px",
                                                    sm: "30px",  // Small screens
                                                    md: "40px",  // Medium screens
                                                    lg: "50px"
                                                }
                                            }}
                                        >
                                            Sarah M.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Image
                                            src="/images/Service/check.svg"
                                            alt="check"
                                            width={25}
                                            height={25}
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        color="#000000"
                                        className="text-center"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '12px',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        "I&apos;m blown away by the quality and style of the clothes<br /> I received from Shop.co. From casual wear to elegant<br /> dresses, every piece I&apos;ve bought has exceeded my<br /> expectations.”
                                    </Typography>
                                </Box>

                                <Box className="py-8">
                                    <GreenCustomButton label={'Read more'} iconSrc={'/images/icons/Vector.svg'} />
                                </Box>

                            </Box>
                        </Box>
                    </Box> : <Box><Box
                        className="flex w-full p-3"
                        sx={{
                            position: 'relative',
                            // width: '80%',
                            aspectRatio: '1.77 / 1', // Aspect ratio of 3:1 (width to height)
                            backgroundImage: 'url("/images/Service/transparency.jpg")',
                            backgroundSize: 'cover', // Ensure the image covers the entire box
                            backgroundPosition: 'center', // Center the image
                            display: 'flex',
                            alignItems: 'center', // Center align text vertically
                            justifyContent: 'space-around', // Center align text horizontally
                            borderRadius: '25px',
                            // Adding the overlay pseudo-element
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity here
                                zIndex: 1, // Ensure it&apos;s on top of the background image but behind the content
                            },
                        }}
                    >
                        <Box className="flex w-1/2 h-full items-center" sx={{ zIndex: 2 }}>
                            <Box className="flex w-full flex-col h-1/2 justify-center gap-6">
                                <Box>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            fontSize: {
                                                xs: '20px', // Font size for extra small screens
                                                sm: '25px', // Font size for small screens
                                                md: '35px', // Font size for medium screens
                                                lg: '50px', // Font size for large screens
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        TRANSPARENCY<br /> YOU CAN TRUST:
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            fontSize: {
                                                xs: '20px', // Font size for extra small screens
                                                sm: '25px', // Font size for small screens
                                                md: '35px', // Font size for medium screens
                                                lg: '50px', // Font size for large screens
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        EXPLORING OUR PRICING
                                    </Typography>
                                </Box>
                                {/* <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/icons/Vector.svg'} /> */}
                                <Box className={"flex items-start"}>
                                    <GreenServiceBtn label={'Enquire Now!'} icon={'/images/icons/Vector.svg'} onClick={handleOpenEnquiryForm} />
                                </Box>
                            </Box>
                        </Box>

                        <Box className="flex w-2/5 items-center" sx={{ zIndex: 2 }}>
                            <Box className="flex w-full -mt-6">
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontSize: {
                                            xs: '10px', // Font size for extra small screens
                                            sm: '12px', // Font size for small screens
                                            md: '14px', // Font size for medium screens
                                            lg: '16px', // Font size for large screens
                                        },
                                        fontWeight: 100,
                                        textAlign: 'start',
                                    }}
                                >
                                    <span className='opacity-60'>At Splendour in Stone, we believe in open communication. We invite you to visit our</span> Pricing Page <span className='opacity-60'>to explore a breakdown of our services and associated costs. This ensures you can make informed decisions while embarking on your stone design journey.</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Box><Box
                        className="relative flex-col w-full px-12 py-24 gap-x-12 gap-y-12 space-y-12"
                        sx={{
                            backgroundImage: 'url(images/Service/Satisfiction/background.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                            borderBottomLeftRadius: "25x",
                            borderBottomRightRadius: "25x",
                        }}>
                            <Box className="flex w-full">
                                <Box className="flex flex-col w-4/5 items-start">
                                    <Typography
                                        className='w-2/3'
                                        variant="h3"
                                        color="#283C28"
                                        sx={{
                                            fontWeight: 300,
                                            alignContent: 'flex-start',
                                            fontStyle: 'italic',
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "20px",
                                                sm: "30px",  // Small screens
                                                md: "45px",  // Medium screens
                                                lg: "50px"
                                            }
                                        }}
                                    >
                                        HEAR FROM OUR <br /> SATISFIED CLIENTS:
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="#283C28"
                                        sx={{
                                            fontWeight: 300,
                                            alignContent: 'flex-start',
                                            fontStyle: 'italic',
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "20px",
                                                sm: "30px",  // Small screens
                                                md: "45px",  // Medium screens
                                                lg: "50px"
                                            }
                                        }}
                                    >
                                        UNVEILING THE SPLENDOUR
                                    </Typography>
                                </Box>
                                <Box className="flex w-1/3 items-center">
                                    <Typography
                                        variant="h3"
                                        color="#000000"
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
                                        Are you curious to hear how we&apos;ve transformed spaces with natural stone? Dive into our Testimonials Page to hear from our delighted clients and discover how natural stone has added a touch of magic to their homes and businesses. You can also view our portfolio to get a clear picture of the transformations we have achieved with our clients.
                                    </Typography>
                                </Box>
                            </Box>

                            <FullCustomGreenDivider />

                            <Box className="flex w-full justify-between gap-x-16">
                                <Box className="flex flex-col w-1/3 justify-center items-center space-y-3">
                                    <Box className="flex w-1/3">
                                        <Image alt='Remy Sharp' src="/images/Service/avatar.png" width={200} height={200} />
                                    </Box>
                                    <Box className="flex items-center">
                                        <Box>
                                            <Typography
                                                variant="h3"
                                                color="#000000"
                                                sx={{
                                                    fontWeight: 600,
                                                    alignContent: 'flex-start',
                                                    fontFamily: 'Chronicle Display',
                                                    fontSize: {
                                                        xs: "15px",
                                                        sm: "25px",  // Small screens
                                                        md: "30px",  // Medium screens
                                                        lg: "30px"
                                                    }
                                                }}
                                            >
                                                Sarah M.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Image
                                                src="/images/Service/check.svg"
                                                alt="check"
                                                width={25}
                                                height={25}
                                            />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            color="#000000"
                                            className="flex text-start items-center justify-center"
                                            sx={{
                                                fontWeight: 400,
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "12px",  // Small screens
                                                    md: "13px",  // Medium screens
                                                    lg: "14px"
                                                }
                                            }}
                                        >
                                            "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                                        </Typography>
                                    </Box>

                                    <Box className={""}>
                                        <GreenServiceBtn label={'Read more'} icon={'/images/icons/Vector.svg'} />
                                    </Box>

                                </Box>
                                <Box className="flex flex-col w-1/3 justify-center items-center space-y-3">
                                    <Box className="flex w-1/3">
                                        <Image alt='Remy Sharp' src="/images/Service/avatar.png" width={200} height={200} />
                                    </Box>
                                    <Box className="flex items-center">
                                        <Box>
                                            <Typography
                                                variant="h3"
                                                color="#000000"
                                                sx={{
                                                    fontWeight: 600,
                                                    alignContent: 'flex-start',
                                                    fontFamily: 'Chronicle Display',
                                                    fontSize: {
                                                        xs: "15px",
                                                        sm: "25px",  // Small screens
                                                        md: "30px",  // Medium screens
                                                        lg: "30px"
                                                    }
                                                }}
                                            >
                                                Sarah M.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Image
                                                src="/images/Service/check.svg"
                                                alt="check"
                                                width={25}
                                                height={25}
                                            />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            color="#000000"
                                            className="flex text-start items-center justify-center"
                                            sx={{
                                                fontWeight: 400,
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "12px",  // Small screens
                                                    md: "13px",  // Medium screens
                                                    lg: "14px"
                                                }
                                            }}
                                        >
                                            "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                                        </Typography>
                                    </Box>

                                    <Box className={""}>
                                        <GreenServiceBtn label={'Read more'} icon={'/images/icons/Vector.svg'} />
                                    </Box>

                                </Box>
                                <Box className="flex flex-col w-1/3 justify-center items-center space-y-3">
                                    <Box className="flex w-1/3">
                                        <Image alt='Remy Sharp' src="/images/Service/avatar.png" width={200} height={200} />
                                    </Box>
                                    <Box className="flex items-center">
                                        <Box>
                                            <Typography
                                                variant="h3"
                                                color="#000000"
                                                sx={{
                                                    fontWeight: 600,
                                                    alignContent: 'flex-start',
                                                    fontFamily: 'Chronicle Display',
                                                    fontSize: {
                                                        xs: "15px",
                                                        sm: "25px",  // Small screens
                                                        md: "30px",  // Medium screens
                                                        lg: "30px"
                                                    }
                                                }}
                                            >
                                                Sarah M.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Image
                                                src="/images/Service/check.svg"
                                                alt="check"
                                                width={25}
                                                height={25}
                                            />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Rating name="read-only" value={value} readOnly sx={{ color: "#283C28" }} />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            color="#000000"
                                            className="flex text-start items-center justify-center"
                                            sx={{
                                                fontWeight: 400,
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "12px",  // Small screens
                                                    md: "13px",  // Medium screens
                                                    lg: "14px"
                                                }
                                            }}
                                        >
                                            "I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.”
                                        </Typography>
                                    </Box>

                                    <Box className={""}>
                                        <GreenServiceBtn onClick={() => { }} label={'Read more'} icon={'/images/icons/Vector.svg'} />
                                    </Box>

                                </Box>
                            </Box>

                        </Box></Box>}

                    {isMobile ? <></> : <></>}



                    {isMobile ? <Box className="px-3 py-7"><CustomPartDivider /></Box> : <></>}


                    {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white gap-y-6 mb-12">
                        <Box className="flex justify-center items-center w-full">
                            <Image
                                src="/images/Service/partner.png" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="w-[75%]"
                                width={200}
                                height={200}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center w-full flex flex-col items-center justify-center gap-y-8 mt-[-100px]">
                            <Box className="w-full">
                                <Typography variant="h2"  color='#DCC5BD' sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontSize: '40px',
                                    lineHeight: 0.9,
                                    fontWeight: 400,
                                }}>
                                    READY TO CRAFT
                                </Typography>
                                <Typography variant="h2" color='#DCC5BD' sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontSize: '40px',
                                    lineHeight: 0.9,
                                    fontWeight: 400,
                                }}>
                                    YOUR STONE
                                </Typography>
                                <Typography variant="h2" color='#DCC5BD' sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontSize: '40px',
                                    lineHeight: 0.9,
                                    fontWeight: 400,
                                }}>
                                    MASTERPIECE?
                                </Typography>
                            </Box>
                            <Box className="px-3">
                                <Typography variant="h5" className="text-center" sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}>
                                    Contact our friendly and knowledgeable team today. We're here to answer your questions, discuss your project, and guide you towards the perfect stone solution. Let Splendour in Stone be your partner in creating a space that reflects your unique style and endures for generations to come.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex w-full justify-center py-4">
                            <Link href="/contact">
                                <WhiteCustomButton label={'Contact us'} iconSrc={'/images/icons/Vector.svg'} />
                            </Link>
                        </Box>
                    </Box> : <Box className="flex w-full flex-col relative items-center justify-center gap-y-12 text-white py-12">
                        <Box className="flex justify-center items-center w-full">
                            <Image
                                src="/images/Service/partner.svg" // Ensure this image is in the public/images folder
                                alt="Background"
                                objectFit="cover"
                                className="opacity-100"
                                width={800}
                                height={800}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center p-8 w-5/6 flex flex-col">
                            <Typography variant="h2" className="mb-4 font-normal" color="#DBC6BC" sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: {
                                    xs: '40px', // Font size for extra small screens
                                    sm: '60px', // Font size for small screens
                                    md: '70px', // Font size for medium screens
                                    lg: '80px', // Font size for large screens
                                },
                                fontWeight: 300,
                            }}>
                                READY TO CRAFT YOUR STONE MASTERPIECE?
                            </Typography>
                            <Typography variant="h5" className="mb-8 mt-1" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: '12px', // Font size for extra small screens
                                    sm: '12px', // Font size for small screens
                                    md: '14px', // Font size for medium screens
                                    lg: '14px', // Font size for large screens
                                },
                                fontWeight: 100,
                            }}>
                                Contact our friendly and knowledgeable team today. We're here to answer your <br /> questions, discuss your project, and guide you towards the perfect stone solution. Let <br /> Splendour in Stone be your partner in creating a space that reflects your unique style <br /> and endures for generations to come.

                            </Typography>
                        </Box>
                        <Link href={'/contact'} className="relative flex items-center justify-center pt-4">
                            <WhiteBtn label={'Contact Us'} icon={'/images/Vectorn.svg'} />
                        </Link>
                    </Box>
                    }

                </Box>
                {isMobile ? <FooterMobile /> : <Footer />}
            </Box>
        </>

    );
};

export default ServicesPage;
