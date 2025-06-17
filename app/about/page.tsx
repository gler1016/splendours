// app/about/page.tsx
'use client'

import React, { useEffect, useMemo, useState } from 'react';
// import Header from '../components/Header';
import Header from '../components/Home/Header';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import CustomDivider from '../components/Divider';
import FullCustomBrownDivider from '../components/Divider/FullCustomBrownDivider';
import WhiteCustomButton from '../components/WhiteButton';
import StoneProductCard from '../components/About/Living/StoneProductCard';
import { useMediaQuery } from 'react-responsive';
import AgriculturalMobileCarousel from '../components/About/Agricultural/AgriculturalMobileCarousel';
import StonesMobileCarousel from '../components/About/Stones/StonesMobileCarousel';
import LivingMobileCarousel from '../components/About/Living/LivingMobileCarousel';
import FooterMobile from '../components/FooterMobile';
import ShortCustomBrownDivider from '../components/Divider/ShortCustomBrownDivider';
import EnquiryForm from '../components/3dEffects/EnquireFormModal';
// import { AnimatedModalDemo } from '../components/Buttons/AnimatedModalDemo';
import { AboutWhiteBtn } from './AboutwhiteBtn';

const AboutPage = () => {
    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
    // State management for the EnquiryForm modal
    const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
    const handleOpenEnquiryForm = () => setIsEnquiryFormOpen(true);
    const handleCloseEnquiryForm = () => setIsEnquiryFormOpen(false);
    const [isSwapped, setIsSwapped] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const bimages = useMemo(() => [
        "/images/About/Gallery/background.jpg",
        "/images/About/Living/image1.jpg",  // Add your additional images
        "/images/About/Living/image2.jpg",  // Add your additional images
        "/images/About/Products/product2.jpg"
    ], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bimages.length);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [bimages]);
    type Image = {
        src: string;
        originalHeight: number;
        swappedHeight: number;
        alt: string; // Add the alt property
    }
    const images = {
        firstBox: [
            {
                src: "/images/About/Products/product2.jpg",
                originalHeight: 457,
                swappedHeight: 276
            },
            {
                src: "/images/About/Products/product4.jpg",
                originalHeight: 327,
                swappedHeight: 508
            }
        ],
        secondBox: [
            {
                src: "/images/About/Products/product3.jpg",
                originalHeight: 327,
                swappedHeight: 457
            },
            {
                src: "/images/About/Products/product5.jpg",
                originalHeight: 276,
                swappedHeight: 276
            }
        ]
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setIsSwapped(prev => !prev);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <EnquiryForm open={isEnquiryFormOpen} handleClose={handleCloseEnquiryForm} />
            
            <Box className="flex items-center w-full top-0 " sx={{ backgroundColor: isMobile ? '#283C28' : '', position: isMobile ? 'fixed' : '', zIndex: 50, height: isMobile ? '15vh' : '28vh', paddingX: isMobile ? 2 : 0 }}>
                    <Header />
            </Box>
            <Box sx={{ marginTop: isMobile ? '15vh' : 0 }}>

                <Box
                    sx={{
                        width: '100%',
                        rowGap: isMobile ? '1rem' : '3rem', // Smaller gap for mobile
                        '& > *:not(:last-child)': {
                            marginBottom: isMobile ? '4rem' : '9rem', // Adjust spacing for mobile
                        },
                        marginBottom: isMobile ? '3rem' : '6rem', // Adjust bottom margin for mobile
                    }}
                >
                    {isMobile ? (
                        <Box className="flex w-full flex-col px-2 justify-center items-center gap-y-4">
                            <Box className="flex w-full justify-center ">
                                <Box className="flex flex-col w-1/3 gap-y-2 items-center">
                                    <Box>
                                        <Image
                                            src="/images/About/Products/Mobile/product1.jpg"
                                            alt="Logo"
                                            width={115}
                                            height={125}
                                            className="rounded-xl"
                                        />
                                    </Box>
                                    <Box>
                                        <Image
                                            src="/images/About/Products/Mobile/product2.jpg"
                                            alt="Logo"
                                            width={115}
                                            height={195}
                                            className="rounded-xl"
                                        />
                                    </Box>
                                </Box>
                                <Box className="flex flex-col w-1/3 items-center">
                                    <Image
                                        src="/images/About/Products/Mobile/product3.jpg"
                                        alt="Logo"
                                        width={114}
                                        height={330}
                                        className="rounded-xl"
                                    />
                                </Box>
                                <Box className="flex flex-col w-1/3 gap-y-2 items-center">
                                    <Box>
                                        <Image
                                            src="/images/About/Products/Mobile/product4.jpg"
                                            alt="Logo"
                                            width={114}
                                            height={116}
                                            className="rounded-xl"
                                        />
                                    </Box>
                                    <Box>
                                        <Image
                                            src="/images/About/Products/Mobile/product5.jpg"
                                            alt="Logo"
                                            width={114}
                                            height={205}
                                            className="rounded-xl"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="flex flex-col w-full gap-y-4 items-center">
                                <Typography
                                    variant="h3"
                                    color="#DBC6BC"
                                    className="text-center"
                                    sx={{
                                        // fontFamily: "Chronicle Display",
                                        fontStyle: "normal", 
                                        fontSize: "38px",
                                        lineHeight: 1.2,
                                        fontWeight: 300,
                                    }}
                                >
                                    Unearth the <br /> Enduring Beauty of <br /> Stone with Splendour <br /> in Stone,{" "}
                                    <span style={{ fontWeight: 600 }}>Australia’s</span>{" "} <br />
                                    <span style={{ fontWeight: 600 }}>No. 1 High-end <br />  Stone Supplier</span>
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="white"
                                    className="text-center"
                                    sx={{
                                        fontFamily: "var(--font-montserrat)",
                                        fontSize: "13px",
                                        lineHeight: 1.4,
                                        width: "90%",
                                        fontWeight: 400,
                                    }}
                                >
                                    At Splendour in Stone, we believe natural stone is <br /> an unparalleled
                                    design element, capable of <br /> injecting timeless beauty and undeniable <br />
                                    character into any space.
                                </Typography>
                            </Box>
                        </Box>
                    ) 
                    :
                     (
                        <Box className="flex w-full px-10 gap-x-4 py-4 relative scale-y-90 -mt-12">
                            <Box className="flex flex-col w-1/2 gap-y-4 justify-between">
                                <Box className="flex w-full">
                                    <Box className="w-1/2"></Box>
                                    <Box className="md:w-56 lg:w-1/2">
                                        <Image
                                            src="/images/About/Products/product1.jpg"
                                            alt="Logo"
                                            width={510}
                                            height={355}
                                            className="rounded-[20px] animate-scaleHeight animate-growFromBottom"
                                        />
                                    </Box>
                                </Box>
                                <Box className=" w-[41%] top-[23rem] absolute">
                                    <Typography
                                        variant="h4"
                                        color="#DBC6BC"
                                        sx={{
                                            fontFamily: "Raleway",
                                            lineHeight: "1.05",
                                            fontSize: {
                                                xs: "18px",
                                                sm: "24px",
                                                md: "36px",
                                                lg: "60px",
                                            },
                                            // fontWeight: 100,
                                        }}
                                    >
                                       <span style={{ fontWeight: 100}} >Unearth the Enduring Beauty of Stone with Splendour in Stone,{" "}</span> 
                                        <span style={{ fontWeight: 600 }}>Australia’s No. 1 High-end Stone Supplier</span>
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className="flex flex-col w-1/4 gap-y-4">
                                {images.firstBox.map((image) => (
                                    <motion.div
                                        key={image.src}
                                        animate={{
                                            height: isSwapped ? image.swappedHeight : image.originalHeight,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        style={{
                                            width: '100%', // Use relative width for responsiveness
                                            // maxWidth: 350, // Constrain maximum width
                                            height: isSwapped ? image.swappedHeight : image.originalHeight,
                                            overflow: 'hidden',
                                            borderRadius: '20px',
                                        }}
                                        className="w-full" // Tailwind CSS for responsive width
                                    >
                                        <Image
                                            src={image.src}
                                            alt={"Descriptive alt text"} // Use a meaningful alt text
                                            width={510}
                                            height={isSwapped ? image.swappedHeight : image.originalHeight}
                                            className="rounded-[20px] w-full h-full object-cover"
                                            priority // Add priority if these images are above the fold
                                        />
                                    </motion.div>
                                ))}
                            </Box>

                            <Box className="flex flex-col w-1/4 gap-y-4">
                                {images.secondBox.map((image) => (
                                    <motion.div
                                        key={image.src}
                                        animate={{
                                            height: isSwapped ? image.swappedHeight : image.originalHeight,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        style={{
                                            width: '100%', // Use relative width for responsiveness
                                            // maxWidth: 350, // Constrain maximum width
                                            height: isSwapped ? image.swappedHeight : image.originalHeight,
                                            overflow: 'hidden',
                                            borderRadius: '20px',
                                        }}
                                        className="w-full" // Tailwind CSS for responsive width
                                    >
                                        <Image
                                            src={image.src}
                                            alt={"Descriptive alt text"} // Use a meaningful alt text
                                            width={510}
                                            height={isSwapped ? image.swappedHeight : image.originalHeight}
                                            className="rounded-[20px] w-full h-full object-cover"
                                            priority // Add priority if these images are above the fold
                                        />
                                    </motion.div>
                                ))}
                                <Typography
                                className='pt-4'
                                    variant="h6"
                                    color="white"
                                    sx={{
                                        fontFamily: "var(--font-montserrat)",
                                        lineHeight: "1.4",
                                        fontSize: {
                                            xs: "10px",
                                            sm: "14px",
                                            md: "16px",
                                            lg: "18px",
                                        },
                                        fontWeight: 300,
                                    }}
                                >
                                    At Splendour in Stone, we believe natural stone is an unparalleled design element, capable of injecting timeless beauty and undeniable character into any space.
                                </Typography>
                            </Box>
                        </Box>
                    )}


                    {isMobile ? <Box
                        className="relative flex flex-col w-full px-2 py-1 gap-x-12 gap-y-6 -mt-4 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/About/Legacy/Mobile/legacy-background-mobile.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat',
                            paddingTop: "100px" // Prevents repeating the background image
                        }}
                    >
                        <Box className="flex w-full">
                            <Box className="flex flex-col w-full items-center ">
                                <Typography variant="h2" className="mb-8 -mt-4 font-light text-center" color='#283C28' sx={{
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontStyle: 'italic',
                                    fontSize: '42px',
                                    fontWeight: 400,
                                }}>
                                    A LEGACY BUILT <br /> ON QUALITY AND <br /> EXPERTISE
                                </Typography>
                                <Box className="flex justify-center">
                                    <Typography variant="h5" className="text-center mt-2" color='#000000' sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '14px',
                                        width: '70%',
                                        fontWeight: 400,
                                    }}>
                                        Splendour in Stone has carved its niche in Australia&apos;s stone industry thanks to the
                                        wanderlust of its founder, Jordan Hill.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="flex w-full justify-center">
                            <Image
                                src="/images/About/Legacy/Mobile/legacybuilt-mobile.jpg" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="opacity-100 rounded-2xl"
                                width={390}
                                height={844}
                            />

                        </Box>

                    </Box> : <Box
                        className="relative flex w-full py-36 px-20 gap-x-12 rounded-[20px] justify-between"
                        sx={{
                            backgroundImage: 'url(images/About/legacy-background.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >
                        <Box className="flex w-1/2 justify-center items-center">
                            <Image
                                src="/images/About/legacybuilt.jpg" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="opacity-100 rounded-2xl"
                                width={836}
                                height={736}
                            />

                        </Box>
                        <Box className="flex w-1/2">

                            <Box className="flex flex-col w-full justify-center gap-y-3">
                                <Typography variant="h2" className="mb-4" color='#283C28' sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: 0.8,
                                    fontStyle: 'italic',
                                    fontSize: {
                                        xs: '40px', // Font size for extra small screens
                                        sm: '60px', // Font size for small screens
                                        md: '70px', // Font size for medium screens
                                        lg: '75px', // Font size for large screens
                                    },
                                    fontWeight: 10,
                                }}>
                                    A LEGACY BUILT ON QUALITY AND EXPERTISE
                                </Typography>
                                <Box className="w-[65%]">
                                    <Typography variant="h5" color='#283C28' sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: {
                                            xs: '10px', // Font size for extra small screens
                                            sm: '12px', // Font size for small screens
                                            md: '12px', // Font size for medium screens
                                            lg: '12px', // Font size for large screens
                                        },
                                        fontWeight: 400,
                                    }}>
                                        Splendour in Stone has carved its niche in Australia&apos;s stone industry thanks to the
                                        wanderlust of its founder, Jordan Hill.
                                    </Typography>
                                </Box>


                            </Box>
                        </Box>
                    </Box>
                    }

                    {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white">
                        <Box className="flex justify-center items-center w-full">
                            <Image
                                src="/images/About/suppliers.png" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                width={275}
                                height={275}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center p-8 w-full flex flex-col gap-x-3 mb-24">
                            {isMobile ? <Box style={{ height: "5px", marginTop: "100px" }}></Box> : <></>}
                            <Typography variant="h2" className="font-normal" color="#DBC6BC" sx={{
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '40px',
                                fontWeight: 300,
                            }}>
                                WE&apos;RE MORE THAN JUST SUPPLIERS
                            </Typography>
                            <ShortCustomBrownDivider />
                            <Box className="flex w-full justify-center">
                                <Typography variant="h5" sx={{
                                    width: '70%',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                    lineHeight: '1.4',
                                    fontWeight: 300,
                                }}>
                                    We&apos;re stone enthusiasts dedicated <br /> to crafting exceptional experiences for our clients.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                        : <Box className="flex w-full flex-col relative items-center justify-center text-white">
                            <Box className="flex justify-center items-center w-[33%]">
                                <Image
                                    src="/images/About/suppliers.png" // Ensure this image is in the public/images folder
                                    alt="Background"
                                    // layout="fill"
                                    objectFit="cover"
                                    className="opacity-80"
                                    width={600}
                                    height={600}
                                />
                            </Box>
                            <Box className="absolute z-10 text-center p-8 w-3/4 flex flex-col gap-y-6">
                                <Typography variant="h4" className="font-semibold" color="#DBC6BC" sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: { lg: '0.8', xs: '0.95' },
                                    fontSize: {
                                        xs: '40px', // Font size for extra small screens
                                        sm: '60px', // Font size for small screens
                                        md: '80px', // Font size for medium screens
                                        lg: '80px', // Font size for large screens
                                    },
                                    fontWeight: 300,
                                }}>
                                    WE&apos;RE MORE THAN JUST SUPPLIERS
                                </Typography>
                                <ShortCustomBrownDivider />
                                <Typography variant="h6" color="white" sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: '12px', // Font size for extra small screens
                                        sm: '14px', // Font size for small screens
                                        md: '14px', // Font size for medium screens
                                        lg: '14px', // Font size for large screens
                                    },
                                    fontWeight: 100,
                                }}>
                                    We&apos;re stone enthusiasts dedicated to crafting exceptional experiences for our clients.
                                </Typography>
                            </Box>
                        </Box>
                    }

                    {isMobile ? <Box
                        className="relative flex flex-col w-full px-3 py-8 gap-x-12 gap-y-20 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/About/Explorations/Mobile/background-mobile.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >

                        <Box className="flex w-full flex-col gap-y-6">

                            <Box className="flex w-full flex-col justify-center gap-y-3">
                                <Typography
                                    variant="h3"
                                    color='#283C28'
                                    className=' text-center'
                                    sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontSize: '40px',
                                        fontWeight: 400,
                                    }}
                                >
                                    THROUGH HIS EXPLORATIONS ACROSS AFRICA&apos;S EAST COAST,<br /> ENDING IN <br /> EGYPT,
                                </Typography>
                                <Box className="flex justify-center">
                                    <Typography
                                        variant="h4"
                                        color='#000000'
                                        sx={{
                                            width: '85%',
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '13px',
                                            fontWeight: 400,
                                            lineHeight: '1.2',
                                            textAlign: 'center',
                                        }}
                                    >
                                        He came across the immense beauty of <br /> limestone as displayed in the Pyramids of Giza. <br /> But this was just the beginning of his discovery <br /> of natural stone’s beauty.
                                    </Typography>
                                </Box>


                            </Box>

                            <Box className="w-full relative">
                                <Box className="flex w-full justify-center">
                                    <Image
                                        src="/images/About/Explorations/Mobile/man1.svg"
                                        alt="Logo"
                                        width={358}
                                        height={422}
                                        className='rounded-xl'
                                    />
                                </Box>
                                <Box>
                                    <Image

                                        src="/images/About/Explorations/Mobile/Vector-bottom-right.svg"
                                        alt="Logo"
                                        width={114}
                                        height={113}
                                        className='absolute top-[309px] left-[10px]'
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box className="flex w-full flex-col gap-y-6">

                            <Box className="flex w-full flex-col justify-center items-center gap-y-3">
                                <Box className="flex flex-col w-full justify-center items-center">
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        HIS TRAVELS
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        TOOK HIM TO
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        SOUTH
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        AMERICA, TO
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        THE HIDDEN
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        CITY OF THE
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        INCAS IN MACHU
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color='#283C28'
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            lineHeight: '1',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                        }}
                                    >
                                        PICCHU.
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="h4"
                                    color='#000000'
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    In all its glory, it was a great discovery of <br /> unimaginable granite features built with <br /> precision despite the area being unconducive <br /> for building.
                                </Typography>

                            </Box>

                            <Box className="w-full relative">
                                <Box className="flex w-full justify-center">
                                    <Image
                                        src="/images/About/Explorations/Mobile/man2.svg"
                                        alt="Logo"
                                        width={358}
                                        height={422}
                                        className='rounded-xl'
                                    />
                                </Box>
                                <Box className='absolute top-[309px] right-[10px]'>
                                    <Image

                                        src="/images/About/Explorations/Mobile/Vector-bottom-right.svg"
                                        alt="Logo"
                                        width={114}
                                        height={113}
                                    />
                                </Box>
                            </Box>



                        </Box>

                    </Box> : <Box
                        className="relative flex flex-col w-full px-20 py-24 gap-x-12 gap-y-36 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/About/legacy-background.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >

                        <Box className="flex w-full justify-between gap-x-16">

                            <Box className="flex w-1/2">
                                <Image
                                    src="/images/About/man1.jpg"
                                    alt="Logo"
                                    width={840}
                                    height={830}
                                    className='rounded-[20px]'
                                />
                            </Box>

                            <Box className="flex w-2/5 flex-col justify-center gap-y-7">
                                <Typography
                                    variant="h4"
                                    color='#283C28'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: isTablet ? '1' : '0.9',
                                        fontSize: {
                                            xs: '15px', // Font size for extra small screens
                                            sm: '30px', // Font size for small screens
                                            md: '35px', // Font size for medium screens
                                            lg: '42px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    THROUGH HIS EXPLORATIONS ACROSS AFRICA&apos;S EAST COAST, ENDING IN EGYPT,
                                </Typography>
                                <Box className="w-5/6">
                                    <Typography
                                        variant="h4"
                                        color='#000000'
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: '10px', // Font size for extra small screens
                                                sm: '15px', // Font size for small screens
                                                md: '18px', // Font size for medium screens
                                                lg: '15px', // Font size for large screens
                                            },
                                            fontWeight: 400,
                                        }}
                                    >
                                        He came across the immense beauty of limestone as displayed in the Pyramids of Giza. But this was just the beginning of his discovery of natural stone’s beauty.
                                    </Typography>
                                </Box>

                                <Box>
                                    <Image
                                        src="images/About/Vector/Vector-bottom-right.svg"
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className='sm:w-[40px] md:w-[60px] lg:w-[80px]'
                                    />
                                </Box>
                            </Box>

                        </Box>

                        {/* <CustomDivider /> */}

                        <Box className="flex w-full justify-between gap-10">

                            <Box className="flex w-[44%] flex-col justify-center gap-y-7">
                                <Typography
                                    variant="h4"
                                    className='font-light'
                                    color='#283C28'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: isTablet ? '1' : '0.8',
                                        fontSize: {
                                            xs: '15px', // Font size for extra small screens
                                            sm: '30px', // Font size for small screens
                                            md: '35px', // Font size for medium screens
                                            lg: '45px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    HIS TRAVELS TOOK HIM TO SOUTH AMERICA, TO THE HIDDEN CITY OF THE INCAS IN MACHU PICCHU.
                                </Typography>
                                <Typography
                                    className='w-[54%]'
                                    variant="h4"
                                    color='#000000'
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: '10px', // Font size for extra small screens
                                            sm: '12px', // Font size for small screens
                                            md: '14px', // Font size for medium screens
                                            lg: '16px', // Font size for large screens
                                        },
                                        fontWeight: 400,
                                        textAlign: 'start',
                                    }}
                                >
                                    In all its glory, it was a great discovery of unimaginable granite features built with precision despite the area being unconducive for building.
                                </Typography>
                                <Box>
                                    <Image
                                        src="images/About/Vector/Vector-bottom-right.svg"
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className='sm:w-[40px] md:w-[60px] lg:w-[80px]'
                                    />
                                </Box>
                            </Box>

                            <Box className="flex w-1/2">
                                <Image
                                    src="/images/About/man2.jpg"
                                    alt="Logo"
                                    width={840}
                                    height={830}
                                    className='rounded-[20px]'
                                />
                            </Box>

                        </Box>

                    </Box>}

                    {isMobile ?
                        <Box className="flex w-full flex-col justify-center items-center px-3 gap-y-4 ">

                            <Box className="flex flex-col justify-center">
                                <Typography
                                    variant="h4"
                                    color='#DBC6BC'
                                    sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontStyle: 'italic',
                                        fontSize: '38px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    THESE WERE BUT
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#DBC6BC'
                                    sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontStyle: 'italic',
                                        fontSize: '38px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    A FEW OF THE
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#DBC6BC'
                                    sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontStyle: 'italic',
                                        fontSize: '38px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    ARCHITECTURAL
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color='#DBC6BC'
                                    sx={{
                                        // fontFamily: 'Chronicle Display',
                                        lineHeight: '1',
                                        fontStyle: 'italic',
                                        fontSize: '38px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    INSPIRATIONS
                                </Typography>

                            </Box>

                            <Box className="flex flex-col w-[75%]">
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        lineHeight: '1.4',
                                        textAlign: 'center',
                                    }}
                                >
                                    That pushed Jordan to explore the craftsmanship and assembly of natural stone. Other notable features included:
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        lineHeight: '1.4',
                                        textAlign: 'center',
                                    }}
                                >
                                    Rome&apos;s St. Peter&apos;s Basilica, St. Paul&apos;s Cathedral, and the Colosseum
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        lineHeight: '1.4',
                                        textAlign: 'center',
                                    }}
                                >
                                    Cambodia’s Angkor Wat.
                                </Typography>
                            </Box>

                        </Box> : 
                        <Box className="flex w-full justify-between items-start px-20 -my-20">
                            <Box className="flex w-[50%] flex-col justify-center">
                                <Typography
                                    variant="h6"
                                    color='#DBC6BC'
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        lineHeight: '0.9',
                                        fontStyle: 'italic',
                                        fontSize: {
                                            xs: '15px', // Font size for extra small screens
                                            sm: '30px', // Font size for small screens
                                            md: '35px', // Font size for medium screens
                                            lg: '45px', // Font size for large screens
                                        },
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    THESE WERE BUT A FEW OF THE ARCHITECTURAL INSPIRATIONS
                                </Typography>

                            </Box>

                            <Box className="flex flex-col w-1/4">
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: '10px', // Font size for extra small screens
                                            sm: '12px', // Font size for small screens
                                            md: '14px', // Font size for medium screens
                                            lg: '14px', // Font size for large screens
                                        },
                                        lineHeight: '1.2',
                                        fontWeight: 300,
                                        textAlign: 'start',
                                    }}
                                >
                                    That pushed Jordan to explore the craftsmanship and assembly of natural stone. Other notable features included:
                                </Typography>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                                    <li>
                                        <Typography
                                            variant="h4"
                                            color="white"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '10px',
                                                    sm: '15px',
                                                    md: '15px',
                                                    lg: '15px',
                                                },
                                                lineHeight: '1.2',
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            Rome&apos;s St. Peter&apos;s Basilica, St. Paul&apos;s Cathedral, and the Colosseum
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            variant="h4"
                                            color="white"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '10px',
                                                    sm: '15px',
                                                    md: '15px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                lineHeight: '1.2',
                                                textAlign: 'start',
                                            }}
                                        >
                                            Cambodia’s Angkor Wat.
                                        </Typography>
                                    </li>
                                </ul>

                            </Box>

                        </Box>}

                    {isMobile ? <Box className="-my-10"><FullCustomBrownDivider /></Box> : <Box className="px-20 py-0 -mt-20 opacity-40"><FullCustomBrownDivider /></Box>}

                    {isMobile ? <Box className="px-3"><AgriculturalMobileCarousel /></Box> : <Box className="flex w-full px-20 -mt-20 gap-x-6 ">
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Agricultural/image1.jpg"
                                alt="Logo"
                                width={408}
                                height={413}
                                className='rounded-[20px]'
                            />
                        </Box>
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Agricultural/image2.jpg"
                                alt="Logo"
                                width={408}
                                height={413}
                                className='rounded-[20px]'
                            />
                        </Box>
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Agricultural/image3.jpg"
                                alt="Logo"
                                width={408}
                                height={413}
                                className='rounded-[20px]'
                            />
                        </Box>
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Agricultural/image4.jpg"
                                alt="Logo"
                                width={408}
                                height={413}
                                className='rounded-[20px]'
                            />
                        </Box>
                    </Box>
                    }

                    {isMobile ? <Box
                        className="relative flex flex-col w-full -mt-4 px-3 py-12 gap-x-12 gap-y-6 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/About/Achievements/Mobile/backgrouond-mobile.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >
                        <Box className="flex w-full">
                            <Box className="flex flex-col w-full items-center justify-center">
                                <Typography variant="h2" className="mb-4 font-light text-center" color='#283C28' sx={{
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    fontWeight: 400,
                                }}>
                                    NOTABLE
                                    ACHIEVEMENTS
                                </Typography>

                                <Typography variant="h5" className="text-center mt-4" color='#000000' sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 400,
                                }}>
                                    Before his founding of Splendour in Stone include his <br /> apprenticeship in landscape construction and his <br /> work on fireplaces and feature walls using stone.<br />
                                    However, his passion remained in supplying stone <br /> after much-needed research, travel, and testing, <br /> leading to the birth of Slendour in Stone Pty Ltd.<br />
                                    Our journey was also fueled by a desire to bridge the <br /> gap between premium stone and accessible design <br /> solutions. Over the years, we've fostered a team of <br /> passionate professionals with a wealth of knowledge <br /> about natural stone and its applications.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="flex w-full justify-center">
                            <Image
                                src="/images/About/Achievements/Mobile/man-mobile.jpg" // Ensure this image is in the public/images folder
                                alt="Background"
                                objectFit="cover"
                                className="opacity-100 rounded-2xl"
                                width={356}
                                height={454}
                            />

                        </Box>

                    </Box> : <Box
                        className="relative flex w-full px-20 py-28 gap-x-4 rounded-[20px]"
                        sx={{
                            backgroundImage: 'url(images/About/Achievements/background.jpg)', // Add your image path here
                            backgroundSize: 'cover', // Ensures the background image covers the entire area
                            backgroundPosition: 'center', // Centers the background image
                            backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                        }}
                    >
                        <Box className="flex w-[70%] justify-center flex-col gap-y-4">
                            <Typography variant="h3" color="#283C28" className="mb-2" sx={{
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                lineHeight: isTablet ? '1' : '0.8',
                                fontSize: {
                                    xs: '30px', // Font size for extra small screens
                                    sm: '40px', // Font size for small screens
                                    md: '60px', // Font size for medium screens
                                    lg: '75px', // Font size for large screens
                                },
                                fontWeight: 20,
                            }}>
                                NOTABLE ACHIEVEMENTS
                            </Typography>
                            <Box className="w-[83%]">
                                <Typography variant="h5" className="mb-8" sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    color: '#000000',
                                    fontSize: {
                                        xs: '10px', // Font size for extra small screens
                                        sm: '12px', // Font size for small screens
                                        md: '14px', // Font size for medium screens
                                        lg: '14px', // Font size for large screens
                                    },
                                    lineHeight: '1.4',
                                    fontWeight: 400,
                                }}>
                                    Before his founding of Splendour in Stone include his apprenticeship in landscape construction and his work on fireplaces and feature walls using stone.<br />
                                    However, his passion remained in supplying stone after much-needed research, travel, and testing, leading to the birth of Slendour in Stone Pty Ltd.<br />
                                    Our journey was also fueled by a desire to bridge the gap between premium stone and accessible design solutions. Over the years, we&apos;ve fostered a team of passionate professionals with a wealth of knowledge about natural stone and its applications.
                                </Typography>
                            </Box>


                        </Box>
                        <Box className="w-[35%]" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src="/images/About/Achievements/man.jpg" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="opacity-100 rounded-2xl aspect-[1/1]"
                                width={672}
                                height={736}
                            />
                        </Box>

                    </Box>}

                    {isMobile ? <Box><CustomDivider /></Box> : <></>}

                    {isMobile ? <Box className="px-2">
                        <Box className="flex w-full flex-col items-center">
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                TODAY,
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                SPLENDOURS IN
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >

                                STONE SUPPLIES
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                A WIDE RANGE
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                OF NATURAL
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                STONES FROM
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                ALL OVER THE
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                WORLD,
                            </Typography>
                            <Typography
                                variant="h4"
                                color="#DBC6BC"
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    fontStyle: 'italic',
                                    fontSize: '44px',
                                    lineHeight: '1',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                INCLUDING:
                            </Typography>
                        </Box>
                    </Box>
                        : <Box className="px-20 -mt-20">
                            <Box className="flex w-full">
                                <Typography
                                    variant="h4"
                                    color="#DBC6BC"
                                    sx={{
                                        fontFamily: 'Chronicle Display',
                                        fontStyle: 'italic',
                                        lineHeight: '0.9',
                                        fontSize: {
                                            xs: '13px', // Font size for extra small screens
                                            sm: '30px', // Font size for small screens
                                            md: '35px', // Font size for medium screens
                                            lg: '50px', // Font size for large screens
                                        },
                                        fontWeight: 100,
                                        textAlign: 'start',
                                    }}
                                >
                                    TODAY, SPLENDOURS IN STONE SUPPLIES A WIDE RANGE OF NATURAL STONES FROM ALL OVER THE WORLD, INCLUDING:
                                </Typography>
                            </Box>
                        </Box>}


                    {isMobile ? <Box className="flex w-full flex-col gap-y-5 -mt-8">
                        <Box className="flex w-full flex-col mx-auto my-2 justify-center items-center">
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.2',
                                    fontSize: '15px',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                We also pride ourselves on an
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.2',
                                    fontSize: '15px',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                experienced team we have assembled
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.2',
                                    fontSize: '15px',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                over the years, creating a haven for all
                            </Typography>
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.2',
                                    fontSize: '15px',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                our customers and their inquiries.
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Box className="w-1/2 px-6 py-3" sx={{ borderTop: '1px solid #DCC5BD', borderBottom: '1px solid #DCC5BD', borderRight: '1px solid #DCC5BD' }}>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Bluestone
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Granite
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Limestone
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Marble
                                </Typography>
                            </Box>
                            <Box className="w-1/2 px-6 py-3" sx={{ borderTop: '1px solid #DCC5BD', borderBottom: '1px solid #DCC5BD' }}>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Porphyry
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Sandstone
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Slate
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="white"
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Travertine, etc
                                </Typography>
                            </Box>
                        </Box>
                    </Box> : <Box className="flex w-full justify-between px-20 -mt-24">
                        <Box className="w-1/5">
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '14px',
                                                md: '14px',
                                                lg: '14px',
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Bluestone
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '14px',
                                                md: '14px',
                                                lg: '14px',
                                            },

                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Granite
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '14px',
                                                md: '14px',
                                                lg: '16px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Limestone
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '15px',
                                                md: '16px',
                                                lg: '14px',
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Marble
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <Box className="w-1/5">
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '14px',
                                                md: '14px',
                                                lg: '14px',
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Porphyry
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '14px',
                                                md: '14px',
                                                lg: '14px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Sandstone
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '14px',
                                                md: '14px',
                                                lg: '14px',
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Slate
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '14px',
                                                md: '14px',
                                                lg: '14px',
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        Travertine, etc.
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <Box className="w-[30%]">
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.4',
                                    fontSize: {
                                        xs: '10px',
                                        sm: '14px',
                                        md: '14px',
                                        lg: '14px',
                                    },
                                    fontWeight: 100,
                                    textAlign: 'start',
                                    justifyContent: 'center',
                                }}
                            >
                                We also pride ourselves on an experienced team we have assembled over the years, creating a haven for all our customers and their inquiries.
                            </Typography>
                        </Box>
                        <Box className="1/5">
                            <Image
                                src="images/About/Vector/Vector-bottom-left.svg"
                                alt="Logo"
                                width={40}
                                height={40}
                                className='sm:w-[40px] md:w-[60px] lg:w-[90px]'
                            />
                        </Box>
                    </Box>}

                    {isMobile ? <StonesMobileCarousel /> : <Box className="flex w-full px-20 gap-x-20 -mt-24 ">
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Stones/stone1.png"
                                alt="Logo"
                                width={380}
                                height={380}
                            />
                        </Box>
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Stones/stone2.png"
                                alt="Logo"
                                width={380}
                                height={380}
                            />
                        </Box>
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Stones/stone3.png"
                                alt="Logo"
                                width={380}
                                height={380}
                            />
                        </Box>
                        <Box className="flex w-1/4">
                            <Image
                                src="/images/About/Stones/stone4.png"
                                alt="Logo"
                                width={380}
                                height={380}
                            />
                        </Box>
                    </Box>}

                    {isMobile ? <Box
                        className="pl-5 pb-7"
                        sx={{
                            position: 'relative',
                            height: '100vh',
                            width: '100%',
                            aspectRatio: '1 / 1.6', // Aspect ratio of 3:1 (width to height)
                            backgroundImage: 'url("/images/About/Requirements/house-mobile.jpg")',
                        
                            backgroundSize: 'cover', // Ensure the image covers the entire box
                            backgroundPosition: 'center', // Center the image
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderRadius: '20px',
                            overflow: 'hidden', // Ensures content stays within the rounded corners
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add a semi-transparent dark overlay
                                backdropFilter: 'blur(3px)', // Apply the blur effect
                                zIndex: 1, // Ensure it sits behind the content
                            },
                        }}
                    >
                        {/* <Box className="w-full border" sx={{ position: 'relative', zIndex: 2 }}>
                        </Box> */}
                        <Box
                            className="flex flex-col w-full gap-y-5 mt-[12rem] justify-end "
                            sx={{ position: 'relative', zIndex: 2 }}
                        >
                            <Box className="flex flex-col">
                                <Box className="flex flex-col w-full">
                                    <Typography
                                        variant="h3"
                                        color="white"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: '1.2',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'start',
                                        }}
                                    >
                                        MORE THAN
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="white"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: '1.2',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            textAlign: 'start',
                                        }}
                                    >
                                        JUST PRODUCTS:
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: '1.2',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        CRAFTED WITH
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            lineHeight: '1.2',
                                            fontSize: '40px',
                                            fontWeight: 400,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        YOU IN MIND
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    variant='h3'
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.3',
                                        width: '95%',
                                        fontSize: '12px',
                                        fontWeight: 300,
                                        color: 'white', // Set text color
                                        textAlign: 'start',
                                    }}
                                >
                                    At Splendour in Stone, we believe there&apos;s no one- <br />size-fits-all
                                    approach to stone design. Our <br /> extensive product range caters to a
                                    diverse set of <br /> needs, from the timeless elegance of marble to the<br />
                                    contemporary appeal of granite.<br /> We understand that selecting the
                                    perfect stone for <br /> your project can be daunting. That&apos;s why we go<br /> 
                                    beyond simply offering products.<br /> Our team delves into the specifics
                                    of your project – <br /> whether it&apos;s combating wear and tear in
                                    high- <br />traffic areas, achieving a specific aesthetic, or <br /> enhancing
                                    the natural light in your space.<br /> We offer a comprehensive range of
                                    stone cladding,<br /> walling, and paving solutions, meticulously chosen<br />
                                    for their durability, aesthetics, and suitability for <br /> various
                                    design challenges....
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                        : <Box
                            className="flex w-full px-12"
                            sx={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: '1.56 / 1', // Aspect ratio of 3:1 (width to height)
                                backgroundImage: 'url("/images/About/Requirements/house.jpg")',
                                backgroundSize: 'cover', // Ensure the image covers the entire box
                                backgroundPosition: 'center', // Center the image
                                display: 'flex',
                                alignItems: 'center', // Center align text vertically
                                justifyContent: 'flex-start', // Center align text horizontally
                                borderRadius: '25px',
                            }}
                        >
                            <Box className="flex flex-col w-full h-full justify-center">
                                {/* Left half with background opacity */}
                                <Box
                                    className="w-full lg:w-1/2 flex justify-center items-center"
                                    sx={{
                                        position: 'absolute', // Ensure it covers only the left side
                                        height: '100%', // Full height
                                        left: 0, // Align to the left side
                                        top: 0, // Ensure it spans the full height
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Apply background opacity
                                    }}
                                >
                                    <Box className="flex flex-col w-5/6 pl-12 gap-y-6">
                                        <Box>
                                            <Typography
                                                variant="h4"
                                                color="white"
                                                sx={{
                                                    fontFamily: 'Chronicle Display',
                                                    fontStyle: 'italic',
                                                    lineHeight: '0.9',
                                                    fontSize: {
                                                        xs: '20px', // Font size for extra small screens
                                                        sm: '25px', // Font size for small screens
                                                        md: '45px', // Font size for medium screens
                                                        lg: '58px', // Font size for large screens
                                                    },
                                                    fontWeight: 20,
                                                    textAlign: 'start',
                                                }}
                                            >
                                                MORE THAN JUST PRODUCTS:
                                            </Typography>
                                            <Typography
                                                component="span"
                                                sx={{
                                                    fontFamily: 'Chronicle Display',
                                                    fontStyle: 'italic',
                                                    lineHeight: '0.8',
                                                    fontSize: {
                                                        xs: '20px', // Font size for extra small screens
                                                        sm: '25px', // Font size for small screens
                                                        md: '45px', // Font size for medium screens
                                                        lg: '60px', // Font size for large screens
                                                    },
                                                    fontWeight: 20,
                                                    color: 'white', // Set text color
                                                    textAlign: 'start'
                                                }}
                                            >
                                                CRAFTED WITH YOU IN MIND
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                component="span"
                                                sx={{
                                                    fontFamily: 'var(--font-montserrat)',
                                                    lineHeight: '0.8',
                                                    fontSize: {
                                                        xs: '7px', // Font size for extra small screens
                                                        sm: '10px', // Font size for small screens
                                                        md: '15px', // Font size for medium screens
                                                        lg: '18px', // Font size for large screens
                                                    },
                                                    fontWeight: 100,
                                                    color: 'white', // Set text color
                                                    textAlign: 'start'
                                                }}
                                            >
                                                At Splendour in Stone, we believe there&apos;s no one-size-fits-all approach to stone design. Our extensive product range caters to a diverse set of needs, from the timeless elegance of marble to the contemporary appeal of granite.
                                                We understand that selecting the perfect stone for your project can be daunting. That&apos;s why we go beyond simply offering products.
                                                Our team delves into the specifics of your project – whether it&apos;s combating wear and tear in high-traffic areas, achieving a specific aesthetic, or enhancing the natural light in your space.
                                                We offer a comprehensive range of stone cladding, walling, and paving solutions, meticulously chosen for their durability, aesthetics, and suitability for various design challenges.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="w-1/2">
                                    {/* Empty right half */}
                                </Box>
                            </Box>
                        </Box>}

                    {isMobile ? <CustomDivider /> : <></>}

                    {isMobile ? <Box className="flex flex-col w-full px-3 gap-y-4 ">

                        <Box className="flex flex-col w-full px-2">
                            <Typography
                                variant="h4"
                                color='#DBC6BC'
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontStyle: 'italic',
                                    fontSize: '40px',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                BEYOND AESTHETICS:
                            </Typography>
                            <Typography
                                variant="h4"
                                color='#DBC6BC'
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontStyle: 'italic',
                                    fontSize: '40px',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                STONE FOR A
                            </Typography>
                            <Typography
                                variant="h4"
                                color='#DBC6BC'
                                sx={{
                                    // fontFamily: 'Chronicle Display',
                                    lineHeight: '1',
                                    fontStyle: 'italic',
                                    fontSize: '40px',
                                    fontWeight: 400,
                                    textAlign: 'center',
                                }}
                            >
                                BETTER
                                LIVING SPACE
                            </Typography>

                        </Box>

                        <Box className="flex flex-col items-center w-full -mb-8">
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                    fontWeight: 300,
                                    lineHeight: '1.4',
                                    width: '90%',
                                    textAlign: 'center',
                                }}
                            >
                                We understand that your home is more than just <br /> bricks and mortar. It&apos;s a sanctuary, a reflection of <br /> your style, and a place where comfort and <br /> functionality reign supreme. That&apos;s why we don&apos;t <br /> just offer stone products; we offer solutions.
                            </Typography>

                        </Box>

                    </Box> : 
                    <Box className="flex w-full justify-between items-start px-20 -mt-24">

                        <Box className="flex w-1/2 flex-col justify-center mt-4">
                            <Typography
                                variant="h4"
                                color='#DBC6BC'
                                sx={{
                                    fontFamily: 'Chronicle Display',
                                    lineHeight: '0.9',
                                    fontStyle: 'italic',
                                    fontSize: {
                                        xs: '10px', // Font size for extra small screens
                                        sm: '20px', // Font size for small screens
                                        md: '25px', // Font size for medium screens
                                        lg: '52px', // Font size for large screens
                                    },
                                    fontWeight: 100,
                                    textAlign: 'start',
                                }}
                            >
                                BEYOND AESTHETICS:
                                STONE FOR A BETTER
                                LIVING SPACE
                            </Typography>

                        </Box>

                        <Box className="flex flex-col w-1/4">
                            <Typography
                                variant="h4"
                                color="white"
                                sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: '10px', // Font size for extra small screens
                                        sm: '12px', // Font size for small screens
                                        md: '14px', // Font size for medium screens
                                        lg: '16px', // Font size for large screens
                                    },
                                    fontWeight: 300,
                                    lineHeight: 1.4,
                                    textAlign: 'start',
                                }}
                            >
                                We understand that your home is more than just bricks and mortar. It&apos;s a sanctuary, a reflection of your style, and a place where comfort and functionality reign supreme. That&apos;s why we don&apos;t just offer stone products; we offer solutions.
                            </Typography>

                        </Box>

                    </Box>}

                    {isMobile ? <></> : <Box className="px-16 -my-24"><FullCustomBrownDivider /></Box>}

                    {isMobile ? <LivingMobileCarousel /> : isTablet ? <Box className="w-full flex justify-between gap-x-8 px-16">
                        <Box className="w-1/3">
                            <StoneProductCard product_image_src='images/About/Living/image1.jpg' product_name='DURABILITY AND LONGEVITY' product_subname='' />
                        </Box>
                        <Box className="w-1/3">
                            <StoneProductCard product_image_src='images/About/Living/image2.jpg' product_name='EFFORTLESS ELEGANCE' product_subname='' />
                        </Box>
                        <Box className="w-1/3">
                            <StoneProductCard product_image_src='images/About/Living/image3.jpg' product_name='SUSTAINABLE CHOICE' product_subname='' />
                        </Box>
                    </Box> : <Box className="w-full flex justify-between gap-x-8 px-16 -mt-20">
                        <Box className="w-1/3">
                            <StoneProductCard product_image_src='images/About/Living/image1.jpg' product_name='DURABILITY AND LONGEVITY' product_subname='Are you tired of chipped floors or walls that show every mark? Stone offers unmatched resilience, built to endure daily wear and tear, saving you time and money on replacements.' />
                        </Box>
                        <Box className="w-1/3">
                            <StoneProductCard product_image_src='images/About/Living/image2.jpg' product_name='EFFORTLESS ELEGANCE' product_subname='Elevate your space with natural stone&apos;s timeless beauty. Our curated collection offers a variety of textures, colours, and finishes to complement any design style perfectly.' />
                        </Box>
                        <Box className="w-1/3">
                            <StoneProductCard product_image_src='images/About/Living/image3.jpg' product_name='SUSTAINABLE CHOICE' product_subname='Our commitment to responsible sourcing ensures you&apos;re making an environmentally conscious decision. Invest in the enduring beauty of natural stone with peace of mind.' />
                        </Box>
                    </Box>}


                    {isMobile ? <ShortCustomBrownDivider /> : <></>}

                    {isMobile ? <Box
                        className="px-3 py-6 overflow-hidden"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1 / 2.16', // Aspect ratio of 3:1 (width to height)
                            borderRadius: '15px',
                        }}
                    >
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={currentImageIndex}
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${bimages[currentImageIndex]})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        </AnimatePresence>
                        {/* Main content */}
                        <Box
                            className="flex h-full flex-col w-full justify-between px-3"
                            sx={{ position: 'relative', zIndex: 2, bottom: '20px' }} // Ensure content stays above the blurred background
                        >
                            <Box className="flex flex-col w-full gap-y-5">
                                <Box className="flex flex-col pt-9">
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            fontSize: '40px',
                                            lineHeight: '1',
                                            fontWeight: 300,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        A GALLERY OF
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            fontSize: '40px',
                                            lineHeight: '1',
                                            fontWeight: 300,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        SUCCESS: YOUR
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            fontSize: '42px',
                                            lineHeight: '1',
                                            fontWeight: 300,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        INSPIRATION
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        sx={{
                                            // fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            fontSize: '42px',
                                            lineHeight: '1',
                                            fontWeight: 300,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        AWAITS
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1',
                                            fontSize: '12px',
                                            fontWeight: 300,
                                            color: 'white', // Set text color
                                            textAlign: 'start',
                                        }}
                                    >
                                        We take immense pride in collaborating with our <br /> clients to turn
                                        their design dreams into reality.<br /> Explore our extensive gallery
                                        showcasing a variety of<br /> projects, from modern kitchen renovations
                                        to<br /> captivating outdoor living spaces. Let these success<br /> stories
                                        inspire your stone design journey.<br /> To make your exploration more
                                        realistic, visit our<br /> showroom and view captivating displays of
                                        different<br /> natural stones.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="flex justify-end">
                                <Image
                                    src="/images/About/Vector/Vector-top-right.svg" // Ensure this image is in the public/images folder
                                    alt="Vector"
                                    objectFit="cover"
                                    className="opacity-100"
                                    width={80}
                                    height={80}
                                    onClick={handleOpenEnquiryForm}
                                />
                            </Box>
                        </Box>
                    </Box>
                        : <Box
                            className="flex w-full px-20 pb-0  gap-x-12"
                            sx={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: '1.77 / 1',
                                borderRadius: '25px',
                                overflow: 'hidden'
                            }}
                        >
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-100%" }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="absolute top-0 left-0 w-full h-full"
                                >
                                    <Image
                                        src={bimages[currentImageIndex]}
                                        alt={`Image ${currentImageIndex}`}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100} // Ensures HD image
                                        className="rounded-[25px]"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Overlay */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    zIndex: 1,
                                }}
                            />

                            {/* Content */}
                            <Box className="flex flex-col w-1/2 h-full mt-20" sx={{ zIndex: 2 }}>
                                <Box className="flex w-full h-1/2"></Box>
                                <Box className="flex w-full flex-col h-1/2 justify-end gap-3">
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        lineHeight="0.9"
                                        sx={{
                                            fontFamily: 'Chronicle Display',
                                            fontStyle: 'italic',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '15px',
                                                md: '25px',
                                                lg: '58px',
                                            },
                                            fontWeight: 100,
                                            textAlign: 'start',
                                        }}
                                    >
                                        A GALLERY OF SUCCESS: YOUR INSPIRATION AWAITS
                                    </Typography>
                                    <Box className="mt-5" sx={{ paddingBottom: '50px', display: "flex", alignItem: "start" }}>
                                        <AboutWhiteBtn
                                            label={'Enquire Now!'}
                                            icon={'/images/Vectorn.svg'}
                                            onClick={handleOpenEnquiryForm}
                                        />
                                    </Box>
                                </Box>
                            </Box>

                            <Box className="flex flex-col w-1/2 h-full items-start mt-20" sx={{ zIndex: 2, paddingBottom: '50px' }}>
                                <Box className="flex w-full h-1/2"></Box>
                                <Box className="flex w-full flex-col h-1/2 justify-center items-center">
                                    <Typography
                                        variant="h4"
                                        color="white"
                                        sx={{
                                            fontFamily: 'var(--font-montserrat)',
                                            lineHeight: '1.2',
                                            fontSize: {
                                                xs: '10px',
                                                sm: '12px',
                                                md: '14px',
                                                lg: '17px',
                                            },
                                            fontWeight: 300,
                                            textAlign: 'start',
                                        }}
                                    >
                                        We take immense pride in collaborating with our clients to turn their design dreams into reality. Explore our extensive gallery showcasing a variety of projects, from modern kitchen renovations to captivating outdoor living spaces. Let these success stories inspire your stone design journey.
                                        To make your exploration more realistic, visit our showroom and view captivating displays of different natural stones.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>}




                    {/* <Box className="flex w-full flex-col relative items-center justify-center text-white">
        <Box className="flex justify-center items-center w-full">
            <Image
                src="/images/About/beauty.png" // Ensure this image is in the public/images folder
                alt="Background"
                // layout="fill"
                objectFit="cover"
                className="opacity-30"
                width={600}
                height={600}
            />
        </Box>
        <Box className="absolute z-10 text-center p-8 w-full">
            <Typography variant="h2" className="mb-4 font-bold" sx={{
                fontFamily: 'Raleway',
                fontSize: {
                    xs: '30px', // Font size for extra small screens
                    sm: '40px', // Font size for small screens
                    md: '60px', // Font size for medium screens
                    lg: '80px', // Font size for large screens
                },
                fontWeight: 300,
            }}>
                IF YOU FALL VICTIM TO THEIR BREATHTAKING BEAUTY
            </Typography>
            <Typography variant="h5" className="mb-8" sx={{
                fontFamily: 'Raleway',
                fontSize: {
                    xs: '12px', // Font size for extra small screens
                    sm: '14px', // Font size for small screens
                    md: '16px', // Font size for medium screens
                    lg: '20px', // Font size for large screens
                },
                fontWeight: 300,
            }}>
                as we do, we will be there to hold your hand as you make life-changing decisions about your living space.
            </Typography>
        </Box>
    </Box> */}

                    {isMobile ? <Box className="flex w-full flex-col relative items-center justify-center text-white">
                        <Box className="flex justify-center items-center w-full">
                            <Image
                                src="/images/About/Beauty/Mobile/background-mobile.svg" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="opacity-80"
                                width={275}
                                height={275}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center p-8 w-full flex flex-col">
                            <Typography variant="h2"  color="#DBC6BC" sx={{
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '36px',
                                fontWeight: 400,
                            }}>
                                IF YOU FALL
                            </Typography>
                            <Typography variant="h2"  color="#DBC6BC" sx={{
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '36px',
                                fontWeight: 400,
                            }}>
                                VICTIM TO THEIR
                            </Typography>
                            <Typography variant="h2"  color="#DBC6BC" sx={{
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '36px',
                                fontWeight: 400,
                            }}>
                                BREATHTAKING
                            </Typography>
                            <Typography variant="h2"  color="#DBC6BC" sx={{
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '36px',
                                fontWeight: 400,
                            }}>
                                BEAUTY
                            </Typography>
                            <CustomDivider />
                            <Typography variant="h5" className="mb-8" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '12px',
                                fontWeight: 400,
                            }}>
                                We will be there to hold your <br /> hand as you make life-changing decisions<br /> about your living space.                        
                            </Typography>
                        </Box>
                    </Box> : <Box className="flex w-full flex-col relative items-center justify-center text-white">
                        <Box className="flex justify-center items-center w-[33%]">
                            <Image
                                src="/images/About/Beauty/background.svg" // Ensure this image is in the public/images folder
                                alt="Background"
                                // layout="fill"
                                objectFit="cover"
                                className="opacity-100"
                                width={600}
                                height={600}
                            />
                        </Box>
                        <Box className="absolute z-10 text-center p-8 w-4/5 flex flex-col">
                            <Typography variant="h2" className="font-semibold" color="#DBC6BC" sx={{
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: {
                                    xs: '20px', // Font size for extra small screens
                                    sm: '40px', // Font size for small screens
                                    md: '60px', // Font size for medium screens
                                    lg: '75px', // Font size for large screens
                                },
                                fontWeight: 200,
                            }}>
                                IF YOU FALL VICTIM TO
                                THEIR BREATHTAKING
                                BEAUTY
                            </Typography>
                            <CustomDivider />
                            <Typography variant="h5" className="mb-8" sx={{
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: '12px', // Font size for extra small screens
                                    sm: '12px', // Font size for small screens
                                    md: '14px', // Font size for medium screens
                                    lg: '14px', // Font size for large screens
                                },
                                fontWeight: 100,
                            }}>
                                We will be there to hold your hand as you make life-changing decisions about your living space.
                            </Typography>
                        </Box>
                    </Box>
                    }


                    {isMobile ? <></> : <CustomDivider />}


                    {isMobile ? <Box className="flex w-full flex-col lg:flex-row justify-between">
                        <CustomDivider />
                        <Box className="flex flex-col w-full">
                            <Typography variant="h1" className="mb-8 font-normal text-center" sx={{
                                color: '#DBC6BC',
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '40px',
                                fontWeight: 400,
                            }}>
                                READY TO CRAFT YOUR <span style={{ fontWeight: 600 }}>STONE MASTERPIECE?</span>
                            </Typography>
                            <Box className="flex w-full justify-center px-3">
                                <Typography variant="h3" className="mb-12 text-center" sx={{
                                    fontFamily: 'var(--font-montserrat)',
                                    color: 'white',
                                    // width:'90%',
                                    textJustify: 'justify',
                                    lineHeight: '1.2',
                                    fontSize: '12px',
                                    fontWeight: 300,
                                }}>
                                    Our commitment to providing outstanding services,<br /> expert advice, and a range of natural stone for your<br /> needs is our top priority. Feel free to engage with our<br /> experts today and let us mould your ideas into reality.

                                </Typography>

                            </Box>
                        </Box>

                        <Box className="flex w-full justify-around mt-4">
                            <WhiteCustomButton label={'Enquire Now!'} iconSrc={'/images/icons/Vectorn.svg'} onClick={handleOpenEnquiryForm} />
                            <Link href="/contact"><WhiteCustomButton label={'Contact Us'} iconSrc={'/images/icons/Vectorn.svg'} /></Link>
                        </Box>

                        <CustomDivider />
                    </Box> : <Box className="flex w-full flex-col lg:flex-row justify-between px-20">
                        <Box className="flex flex-col lg:w-2/3 gap-y-8">
                            <Typography variant="h1" className="mb-4 font-normal" sx={{
                                color: '#DBC6BC',
                                fontFamily: 'Raleway',
                                lineHeight: '0.8',
                                fontSize: {
                                    xs: '30px', // Font size for extra small screens
                                    sm: '40px', // Font size for small screens
                                    md: '60px', // Font size for medium screens
                                    lg: '86px', // Font size for large screens
                                },
                                fontWeight: 300,
                            }}>
                                READY TO CRAFT YOUR <span style={{fontWeight:600}}>STONE MASTERPIECE?</span> 
                            </Typography>
                            <Box className="flex w-full justify-start  gap-6">
                                <AboutWhiteBtn label={'Enquire Now!'} icon={'/images/Vectorn.svg'} onClick={handleOpenEnquiryForm} />
                                <Link href="/contact"><AboutWhiteBtn label={'Contact Us'} icon={'/images/Vectorn.svg'} /></Link>
                            </Box>
                        </Box>

                        <Box className="flex lg:w-1/4 -mt-2 justify-start ">
                            <Typography variant="h1" className="mb-8 " sx={{
                                fontFamily: 'var(--font-montserrat)',
                                color: 'white',
                                lineHeight: '1.4',
                                fontSize: {
                                    xs: '10px', // Font size for extra small screens
                                    sm: '12px', // Font size for small screens
                                    md: '14px', // Font size for medium screens
                                    lg: '14px', // Font size for large screens
                                },
                                fontWeight: 100,
                            }}>
                                Our commitment to providing outstanding services, expert advice, and a range of natural stone for your needs is our top priority. Feel free to engage with our experts today and let us mould your ideas into reality.
                            </Typography>
                        </Box>
                    </Box>}



                </Box>

                {isMobile ? <FooterMobile /> : <Footer />}
            </Box >
        </>

    );
};

// Static values or pass dynamic props for the About Page
export default AboutPage;
