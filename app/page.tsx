"use client"

import { useState, useEffect } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useMediaQuery } from '@mui/material';
import axios from "axios";
import Home from "./components/Home";
import Splendours_header_level from "./components/Splendours_header_level";
import SplenderoursProductsCarousel from "./components/SplenderoursProductsCarousel";
import ShortCustomBrownDivider from "./components/Divider/ShortCustomBrownDivider";
import CustomWallCard from "./components/WallCard";
import Carousel from "./components/Carousel";
import CarouselPart from "./components/CarouselPart";
import WhiteCustomButton from "./components/WhiteButton";
import GreenCustomButton from "./components/GreenCustomButton";
import { AnimatedModalDemo } from './components/Buttons/AnimatedModalDemo'
import CustomTextField from "./components/CustomTextField";
import Booking from "./components/Home/Booking/Booking";
import MeasurementAccordion from "./components/MeasurementAccordion";
import MeasurementAccordionMobile from "./components/Home/Services/MeasurementAccordion";
import TechnicalAccordion from "./components/Home/Accordion/TechnicalAccordion";
import ProductionAccordion from "./components/Home/Accordion/ProductionAccordion";
import InstallationAccordion from "./components/Home/Accordion/InstallationAccordion";
import TechnicalAccordionMobile from "./components/Home/Services/TechnicalAccordion";
import ProductionAccordionMobile from "./components/Home/Services/ProductionAccordion";
import InstallationAccordionMobile from "./components/Home/Services/InstallationAccordion";
import StairsCarousel from "./components/Home/Stairs/Carousel";
import { EmblaOptionsType } from 'embla-carousel'
import WallingRangeEmblaCarousel from "./components/Home/WallingRange/EmblaCarousel/EmblaCarousel";
import PavingRangeEmblaCarousel from "./components/Home/PavingRange/EmblaCarousel/EmblaCarousel";
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";
import './embla.css';
import { GreenAnimationButton } from "./components/Buttons/GreenAnimationButton";
// import { WhiteBtn } from "./services/whiteBtn";
import { AboutWhiteBtn } from "./about/AboutwhiteBtn";
// import SplendoursOldHeader from "./components/Home/SplendoursOldHeader";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const PARTDATA = [
    { image: '/images/Home/Interactive_part/card1.jpg',
        product_name: 'SHOREHAM',
        descr: 'Shoreham Quartz ensures that elegance and functionality coexist, enhancing any space with its vibrant patterns and resilient nature.'
     },
    { image: '/images/Home/Interactive_part/card2.jpg',
        product_name: 'CHARLOTTE',
        descr: 'Charlotte Sandstone, a premium sandstone that combines the warmth and character of nature with unparalleled strength and longevity.'
     },
    { image: '/images/Home/Interactive_part/card3.jpg',
        product_name: 'JAMIESON',
        descr: 'Jamieson Limestone, a premium limestone that offers unparalleled elegance and strength, ensuring your construction stands the test of time.'
     },
    { image: '/images/Home/Interactive_part/card4.jpg',
        product_name: 'BEACHPORT',
        descr: 'Beachport stone, as presented by Splendour in Stone, showcases a refined elegance with its natural quartz formation in a freeform style.'
     }
]
const DATA = [
    {
        image: '/images/Home/Interactive_main/slide1.png',
        product_name: 'STAIRS'
    },
    {
        image: '/images/Home/Interactive_main/slide2.png',
        product_name: 'CHIMNEY'
    },
    {
        image: '/images/Home/Interactive_main/slide3.png',
        product_name: 'FIREPLACE'
    },
];

const images = [
    {
        src: '/images/Home/Interactive_main/slide1.png',
        alt: 'Image 1',
        product_name: 'STAIRS'
    },
    {
        src: '/images/Home/Interactive_main/slide2.png',
        alt: 'Image 2',
        product_name: 'CHIMNEY'
    },
    {
        src: '/images/Home/Interactive_main/slide3.png',
        alt: 'Image 3',
        product_name: 'FIREPLACE'
    },
];


const HomePage = () => {

    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
    const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)'); // Tablet breakpoint

    const [showFullText, setShowFullText] = useState(false); // State to toggle text display
    const [email, setEmail] = useState("");
    const [successAlert, setSuccessAlert] = useState(false);

    const [errorAlert, setErrorAlert] = useState(false);


    const [activeIndex, setActiveIndex] = useState(1);

    const texts = [
        {
            text: "SAME DAY QUOTES",
            color: "#DBC6BC ",
            align: "left",
            initialOpacity: 0.15
        },
        {
            text: "STATE OF THE ART SHOWROOM",
            color: "#DBC6BC",
            align: "center",
            initialOpacity: 1
        },
        {
            text: "SUPPLY & INSTALL PACKAGES",
            color: "#DBC6BC ",
            align: "right",
            initialOpacity: 0.15
        }
    ];

    const commonSx = {
        fontFamily: "Chronicle Display",
        fontSize: { xs: '20px', sm: '5vw', lg: '75px' },
        fontWeight: 700,
        lineHeight: 1.1
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [texts.length]);

    const handleToggle = () => {
        setShowFullText(!showFullText);
    };
    const shortText = `We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery, and assembly.`;
    const fullText = `We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery, and assembly. Our team of experts use state-of-the-art technology and equipment to ensure that every project is built to the highest quality standards. The client's experience is at the heart of our motivation. We provide support throughout the entire project. Our products are unique and adapted to the specifics of each client, and our clients can choose from a wide range of materials and colors. Also, our clients can rely on our support and advice throughout the process to ensure that their projects are successfully implemented. Our goal is to create products that will not only meet, but also exceed the expectations of our customers.`;

    const handleSubmit = async () => {
        if (!email) {
            setErrorAlert(true);
            return;
        }

        try {
            await axios.post("/api/send-email", { email });
            setSuccessAlert(true); // Show success alert
            setEmail(""); // Clear the email field
        } catch (error) {
            console.error("Error sending email:", error);
            setErrorAlert(true); // Show error alert
        }
    };

    const handleAlertClose = () => {
        setSuccessAlert(false);
        setErrorAlert(false);
    };

    return (
        <Box
            sx={{
                width: "100%", // equivalent to "w-full"
                display: "flex", // equivalent to "flex"
                flexDirection: "column", // equivalent to "flex-col"
                gap: isMobile ? "2rem" : "6rem", // equivalent to "gap-y-24" (6 * 4px = 24px per unit in Tailwind)
            }}
            className='max-sm:overflow-x-hidden overflow-x-hidden max-sm:max-w-'
        >
            <Home />

            <Box><Splendours_header_level /></Box>

            <Box className="px-3 "
                sx={{
                    px: isMobile ? 2 : 2, // equivalent to "px-20" (20 units in Tailwind = 20 * 0.25rem = 5rem)
                    "& > *:not(:last-child)": {
                        marginBottom: "2rem", // equivalent to "space-y-24" (24 units in Tailwind = 24 * 0.25rem = 6rem)
                    },
                }}
            >
                <Box sx={{ width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: isMobile ? 'center' : 'flex-end' }} style={{ marginBottom: isMobile ? "10px" : "80px" }}>
                    <Box sx={{ width: isMobile ? "100%" : "40%" }}>
                        <Typography
                            // className="text-center"
                            variant="h3"
                            color="#DBC6BC"
                            sx={{
                                lineHeight: 0.8,
                                fontWeight: isMobile ? 700 : 500,
                                // fontFamily: isMobile ? '' : 'Chronicle Display',
                                // fontStyle: isMobile ? 'italic' : '',
                                textAlign: isMobile ? 'center' : 'start',
                                fontSize: isMobile ? '40px' : {
                                    xs: "30px",
                                    sm: "50px",
                                    md: "65px",
                                    lg: "120px"
                                }
                            }}
                        >
                            SPLENDORS PROJECTS
                        </Typography>
                    </Box>
                    <Box sx={{ bottom: 0, left: "0", marginTop: isMobile ? '10px' : '0px', marginBottom: isMobile ? '1px' : '', marginleft: "20px", }}>
                        <Link href={'/allProjectViews'} >
                            <AnimatedModalDemo label="View All" isMobile={isMobile} icon={"images/Vectorn.svg"} ></AnimatedModalDemo>
                        </Link>
                    </Box>
                </Box>

                <Box><SplenderoursProductsCarousel /></Box>
            </Box>

            <ShortCustomBrownDivider />

            {isMobile ?
                <Box className="flex flex-col w-full items-center justify-center">
                    <Typography variant="h3" color="#DBC6BC" className="text-center" sx={{ width: "70%",  fontSize: '30px', fontWeight: 700, lineHeight: 0.9 }}>STATE OF</Typography>
                    <Typography variant="h3" color="#DBC6BC" className="text-center" sx={{ width: "70%",  fontSize: '30px', fontWeight: 700, lineHeight: 0.9 }}>THE ART</Typography>
                    <Typography variant="h3" color="#DBC6BC" className="text-center" sx={{ width: "70%",  fontSize: '30px', fontWeight: 700, lineHeight: 0.9 }}>SHOWROOM</Typography>
                </Box> :
                <Box className="flex flex-col px-2">
                    <AnimatePresence>
                        {texts.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: item.initialOpacity }}
                                animate={{
                                    opacity: index === activeIndex ? 1 : 0.15,
                                    transition: { duration: 0.6 }
                                }}
                                style={{ width: '100%' }}
                            >
                                <Typography
                                    variant="body1"
                                    color={item.color}
                                    sx={{
                                        ...commonSx,
                                        textAlign: item.align,
                                        opacity: index === activeIndex ? 1 : 0.15
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </Box>
            }

            {isMobile ? <ShortCustomBrownDivider /> : <></>}

            {isMobile ? (
                <Box
                    id="walling-mb"
                    className="flex flex-col items-center w-full py-7 gap-y-10 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Home/WallingRange/background-mobile.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    style={{ paddingBottom: "25px" }}
                >
                    <Box className="flex flex-col w-full items-center px-16 space-y-4">
                        <Box className="flex justify-center items-center w-3/5">
                            <Typography
                                className="font-semibold text-center"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 400,
                                    lineHeight: 1,
                                    // fontFamily: 'Chronicle Display',
                                    fontSize: '40px',
                                }}
                            >
                                WALLING RANGE
                            </Typography>
                        </Box>
                        <Box className="flex w-[80%] text-center">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '12px',
                                }}
                            >
                                We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                            </Typography>
                        </Box>
                        <Box className="flex justify-center items-center ml-8">
                            <Link href={'https://www.splendourinstone.com.au/walling/'}>
                                <GreenAnimationButton label={'View All'} className="" icon="/images/icons/Vector.svg"></GreenAnimationButton>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="flex w-full">
                        <WallingRangeEmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </Box>
                </Box>
            ) : 
            isTablet ? (
                <Box
                    id="walling-tablet"
                    className="relative flex flex-col w-full px-14 py-14 gap-y-16 rounded-[30px]"
                    sx={{
                        backgroundImage: 'url(images/Home/WallingRange/background-mobile.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Box className="flex flex-col items-center w-full">
                        <Typography
                            className="font-semibold text-center"
                            variant="h1"
                            color="#283C28"
                            sx={{
                                lineHeight: '1',
                                textAlign: 'center',
                                fontWeight: 600,
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "30px",
                                    sm: "40px",
                                    md: "100px",
                                },
                            }}
                        >
                            WALLING RANGE
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#000000"
                            sx={{
                                fontWeight: 400,
                                textAlign: 'center',
                                lineHeight: 1.4,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '18px',
                                mt: 2,
                            }}
                        >
                            We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                        </Typography>
                        <Box className="flex justify-center mt-6">
                            <Link href={'https://www.splendourinstone.com.au/walling/'} passHref>
                                <GreenCustomButton label={'View All'} iconSrc={'/images/icons/Vectorn.svg'} />
                            </Link>
                        </Box>
                    </Box>

                    <Box className="flex justify-between gap-7 w-full mt-10 flex-wrap">
                        <Link href={`https://www.splendourinstone.com.au/product/charlotte/`} className="w-full" passHref>
                            <CustomWallCard product_image_src="images/Home/WallingRange/product1.png" product_subname="CHARLOTTE" />
                        </Link>
                        <Link href={`https://www.splendourinstone.com.au/product/jamieson/`} className="w-full" passHref>
                            <CustomWallCard product_image_src="images/Home/WallingRange/product2.png" product_subname="JAMIESON" />
                        </Link>
                        <Link href={`https://www.splendourinstone.com.au/product/buffalo/ `} className="w-full" passHref>
                            <CustomWallCard product_image_src="images/Home/WallingRange/product3.png" product_subname="BUFFALO" />
                        </Link>
                    </Box>
                    <Box className="flex justify-between gap-7 w-full mt-6 flex-wrap">
                        <Link href={`https://www.splendourinstone.com.au/product/beloka/`} className="w-full" passHref>
                            <CustomWallCard product_image_src="images/Home/WallingRange/product4.png" product_subname="BELOKA" />
                        </Link>
                        <Link href={`https://www.splendourinstone.com.au/product/shoreham/`} className="w-full" passHref>
                            <CustomWallCard product_image_src="images/Home/WallingRange/product5.png" product_subname="SHOREHAM" />
                        </Link>
                        <Link href={`https://www.splendourinstone.com.au/product/beachport/`} className="w-full" passHref>
                            <CustomWallCard product_image_src="images/Home/WallingRange/product6.png" product_subname="BEACHPORT" />
                        </Link>
                    </Box>
                </Box>
            ) : (
                <Box
                    id="walling"
                    className="relative flex flex-col w-full px-20 py-20 gap-y-24 rounded-[40px]"
                    sx={{
                        backgroundImage: 'url(images/Home/WallingRange/background.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >


                    <Box className="flex items-start justify-between w-full">
                        <Box className="flex items-center w-2/3">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    lineHeight: '0.8',
                                    textAlign: 'start',
                                    fontWeight: 500,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "25px",
                                        sm: "45px",
                                        md: "55px",
                                        lg: "80px",
                                    },
                                }}
                            >
                                WALLING RANGE
                            </Typography>
                        </Box>
                        <Box className="flex flex-col w-[20%] gap-y-6 mt-4">
                            <Box>
                                <Typography
                                    color="#000000"
                                    sx={{
                                        fontWeight: 200,
                                        lineHeight: '1.2',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: "8px",
                                            sm: "10px",
                                            md: "12px",
                                            lg: "14px",
                                        },
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                                </Typography>
                            </Box>
                            <Box className="flex justify-center ml-5 mr-8 mb-5">
                                <Link href={'https://www.splendourinstone.com.au/walling/'} passHref>

                                    <GreenAnimationButton label={'View All'} icon={'/images/icons/Vector.svg'} className="" />
                                </Link>
                            </Box>
                        </Box>

                    </Box>

                    <Box className="flex flex-col w-full gap-y-7">
                        <Box className="flex justify-between w-full gap-7">
                            <Link href={`https://www.splendourinstone.com.au/product/charlotte/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="images/Home/WallingRange/product1.png" product_subname="CHARLOTTE" />
                            </Link>
                            <Link href={`https://www.splendourinstone.com.au/product/jamieson/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="images/Home/WallingRange/product2.png" product_subname="JAMIESON" />
                            </Link>
                            <Link href={`https://www.splendourinstone.com.au/product/buffalo/ `} className="w-full" passHref>
                                <CustomWallCard product_image_src="images/Home/WallingRange/product3.png" product_subname="BUFFALO" />
                            </Link>
                        </Box>
                        <Box className="flex justify-between w-full gap-7">
                            <Link href={`https://www.splendourinstone.com.au/product/beloka/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="images/Home/WallingRange/product4.png" product_subname="BELOKA" />
                            </Link>
                            <Link href={`https://www.splendourinstone.com.au/product/shoreham/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="images/Home/WallingRange/product5.png" product_subname="SHOREHAM" />
                            </Link>
                            <Link href={`https://www.splendourinstone.com.au/product/beachport/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="images/Home/WallingRange/product6.png" product_subname="BEACHPORT" />
                            </Link>
                        </Box>
                    </Box>

                </Box>

            )}

            {isMobile ?
                <Box className="py-8">
                    <ShortCustomBrownDivider />

                </Box> : <></>
            }

            <Box className="space-y-24 w-full" sx={{ paddingX: isMobile || isTablet ? 2 : 8 }}>
                <Box
                    className="w-full"
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile || isTablet ? 'column' : 'row',
                        justifyContent: isMobile || isTablet ? 'center' : 'space-between',
                        alignItems: isMobile || isTablet ? 'center' : 'flex-start',
                        paddingX: isMobile || isTablet ? 0 : 2,
                    }}
                >

                    {/* Dynamic Heading Section */}

                    <Box
                        className="py-4"
                        sx={{
                            width: isMobile || isTablet ? (isMobile ? '80%' : '70%') : 'auto',
                            display: 'flex',
                            flexDirection: isMobile || isTablet ? 'column' : 'row',
                            alignItems: isMobile || isTablet ? 'center' : 'flex-start',
                            gap: '20px',
                        }}
                    >
                        <Box sx={{ flex: 1, position: 'relative' }}>
                            {isMobile || isTablet ? (
                                <>
                                    {['3D', 'INTERACTIVE', 'VIEWER'].map((text, index) => (
                                        <Typography
                                            key={index}
                                            variant="h3"
                                            color="#DBC6BC"
                                            className="text-center"
                                            sx={{
                                                textAlign: 'center',
                                                fontWeight: 560,
                                                // fontFamily: 'Chronicle Display',
                                                fontSize: isMobile ? '45px' : '70px',
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <Typography
                                        variant="h2"
                                        color="#DBC6BC"
                                        className="flex gap-2 w-3/4"
                                        sx={{
                                            textAlign: 'start',
                                            lineHeight: '0.8', // Adjust line height to match the image exactly
                                            fontWeight: 500,
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "25px",
                                                sm: "45px",
                                                md: "55px",
                                                lg: "62px",
                                            },
                                        }}
                                    >
                                        <span>3D</span> <span> INTERACTIVE</span>
                                    </Typography>
                                    <Typography
                                        variant="h2"
                                        color="#DBC6BC"
                                        sx={{
                                            textAlign: 'start',
                                            lineHeight: '0.8',
                                            fontWeight: 500,
                                            fontFamily: 'Chronicle Display',
                                            fontSize: {
                                                xs: "25px",
                                                sm: "45px",
                                                md: "55px",
                                                lg: "65px",
                                            },

                                        }}
                                    >
                                        VIEWER
                                    </Typography>
                                </>
                            )}
                        </Box>
                        <Box
                            sx={{
                                flex: 1,

                                display: 'flex',
                                justifyContent: isMobile || isTablet ? 'center' : 'flex-end',
                            }}
                        >

                        </Box>
                    </Box>

                    {/* Dynamic Content Section */}
                    {isMobile || isTablet ? (
                        <Box className="flex flex-col items-center w-full pt-3 space-y-7">
                            <Box className="flex w-[80%] justify-normal">
                                <Typography
                                    variant="h3"
                                    color="#ffffff"
                                    sx={{
                                        fontWeight: 300,
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '14px',
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect and
                                    connect with something pure
                                </Typography>
                            </Box>
                            <Box className="flex w-full justify-center items-center gap-2">
                                {[
                                    { label: 'View All', href: '/allvisualizers' },
                                    { label: 'Try Now!', href: '/visualizer/Chimney' },
                                ].map(({ label, href }, index) => (
                                    <Box key={index} className="flex">
                                        <Link href={href}>
                                            <WhiteCustomButton isMobile={isMobile} label={label} iconSrc={'/images/icons/Vectorn.svg'} />
                                        </Link>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ) : (
                        <Box className="flex flex-col justify-center text-start w-[25%] gap-y-6 mt-5">
                            <Typography
                                variant="h3"
                                color="#ffffff"
                                sx={{
                                    fontWeight: 200,
                                    lineHeight: 1.4,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: '8px',
                                        sm: '10px',
                                        md: '12px',
                                        lg: '14px',
                                    },
                                }}
                            >
                                We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect and
                                connect with something pure
                            <Box className="flex w-full justify-start ml-48 mt-4">
                                <Link href={'/allvisualizers'}>
                                    <AnimatedModalDemo label={'View All'} icon={'/images/Vectorn.svg'} ></AnimatedModalDemo>
                                </Link>
                            </Box>
                            </Typography>
                        </Box>
                    )}
                </Box>

                {isMobile || isTablet ?
                    <StairsCarousel images={images} />
                    :
                    <Box className="w-full flex flex-col aspect-[3.77/1] min-w-1 bg-[#DBC6BC] rounded-[40px] p-8 px-12" style={{ marginTop: '230px' }}>
                        <Box className="flex justify-between w-1/4 gap-x-4" >
                            <CarouselPart data={PARTDATA} /> {/* small carousel */}
                            {/* <Box className='flex flex-col h-[100px] justify-around'>
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
                                        CHARLOTTE
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="#17181C"
                                        sx={{
                                            // width: '90%',
                                            fontWeight: 500,
                                            alignContent: 'flex-start',
                                            lineHeight: '1.6',
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: {
                                                xs: "8px",
                                                sm: "10px",  // Small screens
                                                md: "12px",  // Medium screens
                                                lg: "15px"
                                            }
                                        }}
                                    >
                                        Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                                    </Typography>
                                </Card3DEffect>
                            </Box> */}
                        </Box>
                        <Box className="flex justify-center w-full">
                            <Carousel data={DATA} /> {/* big carousel */}
                        </Box>
                        <Box className="flex justify-between w-full mt-[-3.5vh] lg:mt-[40px]">
                            <Box>
                                <Typography color="#283C28" sx={{
                                    fontWeight: 500,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.6',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}>Category: Stairs</Typography>
                                <Typography color="#283C28" sx={{
                                    fontWeight: 500,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    lineHeight: '1.6',
                                    fontSize: {
                                        xs: "8px",
                                        sm: "10px",  // Small screens
                                        md: "12px",  // Medium screens
                                        lg: "15px"
                                    }
                                }}>Tag:  Exclusive</Typography>
                            </Box>
                            <Box>
                                <Link href={'/visualizer/Chimney'}><GreenAnimationButton label={'Try Now!'} className="mr-4" icon={'/images/icons/Vector.svg'} ></GreenAnimationButton></Link>
                            </Box>
                        </Box>
                        <></>
                    </Box>
                }
            </Box>



            {isMobile ?
                <Box className="py-8">
                    <ShortCustomBrownDivider />

                </Box> : <></>
            }

            {isMobile || isTablet ? (
                <Box
                    id="paving-mb"
                    className="flex flex-col items-center w-full py-8 gap-y-10 rounded-[20px]"
                    sx={{
                        backgroundImage: 'url(images/Home/PavingRange/background-mobile.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        paddingBottom: "30px",
                    }}
                >
                    <Box className="flex flex-col w-full px-8 md:px-16 space-y-4">
                        <Box className="flex justify-center items-center">
                            <Typography
                                className="font-bold text-center"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 400,
                                    lineHeight: 0.9,
                                    // fontFamily: 'Chronicle Display',
                                    fontSize: isTablet ? '50px' : '40px', // Adjust for tablets
                                }}
                            >
                                PAVING <br /> RANGE
                            </Typography>
                        </Box>
                        <Box className="flex w-[80%] ml-8 items-center justify-center">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    fontSize: isTablet ? '20x' : '14px', // Adjust for tablets
                                    fontFamily: 'var(--font-montserrat)',
                                }}
                            >
                                We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect, and connect with something pure.
                            </Typography>
                        </Box>
                        <Box className="flex justify-center w-full">
                            <Link href={'https://www.splendourinstone.com.au/paving/'} passHref>
                                <GreenCustomButton label={'View All'} iconSrc={'/images/icons/Vector.svg'} />
                            </Link>
                        </Box>
                    </Box>

                    <Box className="flex w-full">
                        <PavingRangeEmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </Box>
                </Box>
            ) : (
                <Box
                    id="paving"
                    className="relative flex flex-col w-full px-10 md:px-20 py-10 md:py-20 gap-y-16 md:gap-y-24 rounded-[40px]"
                    sx={{
                        backgroundImage: 'url(/images/Home/PavingRange/background.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Box className="flex flex-col md:flex-row justify-between w-full">
                        <Box className="flex flex-col justify-center w-full md:w-[28%] gap-3">
                            <Box className="flex w-full flex-col gap-y-6 mt-4">
                                <Typography
                                    variant="h3"
                                    color="#000000"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                            md: '14px',
                                            lg: '16px',
                                        },
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect, and connect with something pure.
                                </Typography>
                            </Box>
                            <Box className=" ml-20 flex items-start justify-start">
                                <Link href={'https://www.splendourinstone.com.au/paving/'} passHref>

                                    <GreenAnimationButton label={'View All'} className="px-2" icon={'/images/icons/Vector.svg'} />

                                </Link>
                            </Box>
                        </Box>

                        <Box className="flex items-start justify-end w-full md:w-[45%]">
                            <Typography
                                className="font-semibold"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    textAlign: 'start',
                                    fontWeight: 200,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '30px',
                                        sm: '45px',
                                        md: '50px',
                                        lg: '60px',
                                    },
                                }}
                            >
                                PAVING RANGE
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="flex flex-col w-full gap-y-7">
                        <Box className="flex flex-col md:flex-row justify-between w-full gap-y-7 md:gap-x-7">
                            <Link href={`https://staging.splendourinstone.com.au/product/porphyry-cobble/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="/images/Home/PavingRange/product1.png" product_subname="PORPHYRY" />
                            </Link>
                            <Link href={`https://www.splendourinstone.com.au/product/ocean-grey-marble/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="/images/Home/PavingRange/product2.png" product_subname="QUARTZITE" />
                            </Link>
                            <Link href={`https://www.splendourinstone.com.au/product/ocean-grey-marble/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="/images/Home/PavingRange/product3.png" product_subname="MARBLE" />
                            </Link>

                        </Box>
                        <Box className="flex flex-col md:flex-row justify-between w-full gap-y-7 md:gap-x-7">

                            <Link href={`https://staging.splendourinstone.com.au/product/limestone-sienna/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="/images/Home/PavingRange/product4.png" product_subname="LIMESTONE" />
                            </Link>
                            <Link href={`https://www.splendourinstone.com.au/product/granite-charcoal/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="/images/Home/PavingRange/product5.png" product_subname="GRANITE" />
                            </Link>
                            <Link href={`https://staging.splendourinstone.com.au/product/bluestone-sawn/`} className="w-full" passHref>
                                <CustomWallCard product_image_src="/images/Home/PavingRange/product6.png" product_subname="BLUESTONE" />
                            </Link>

                        </Box>
                    </Box>
                </Box>
            )}


            {isMobile ?
                <Box className="py-4">
                    <ShortCustomBrownDivider />
                </Box> : <></>
            }

            {isMobile ? (
                <Box className="px-3 space-y-6">
                    <Box className="flex flex-col w-full">
                        <Box className="w-full">
                            <Typography
                                variant="h3"
                                color="#DCC5BD"
                                className="text-center"
                                sx={{
                                    fontWeight: 300,
                                    // fontFamily: 'Chronicle Display',

                                    fontSize: {
                                        xs: '50px', // Extra small screens
                                        sm: '50px', // Small screens
                                        md: '50px', // Medium screens (tablets)
                                    },
                                }}
                            >
                                SERVICES
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Box className="w-full sm:w-full md:w-full lg:w-4/5">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    className="text-center"
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: {
                                            xs: '14px',
                                            sm: '14px',
                                            md: '14px', // Adjusted for tablets
                                        },
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {showFullText ? fullText : shortText}
                                </Typography>
                                <Box className="flex justify-center">
                                    <Button
                                        onClick={handleToggle}
                                        variant="text"
                                        className="font-bold"
                                        sx={{
                                            marginTop: '10px',
                                            fontSize: {
                                                xs: '16px',
                                                sm: '16px',
                                                md: '16px', // Adjusted for tablets
                                            },
                                            color: '#FFFFFF',
                                            fontWeight: 500,
                                            '&:hover': {
                                                color: '#FFFFFF',
                                            },
                                        }}
                                    >
                                        {showFullText ? 'Read Less!' : 'Read More!'}
                                    </Button>
                                </Box>
                            </Box>
                            <Box className="w-0 lg:w-1/5"></Box>
                        </Box>
                    </Box>
                    <Box className="flex flex-col w-full space-y-12">
                        <MeasurementAccordionMobile />
                        <TechnicalAccordionMobile />
                        <ProductionAccordionMobile />
                        <InstallationAccordionMobile />
                    </Box>
                </Box>
            ) : (
                <Box className="px-10 space-y-10">
                    <Box className="flex flex-col w-full">
                        <Box className="w-1/3">
                            <Typography
                                variant="h3"
                                className="font-semibold"
                                color="#DCC5BD"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '30px',
                                        sm: '40px', // Small screens
                                        md: '50px', // Medium screens (tablets)
                                        lg: '70px', // Larger screens
                                    },
                                }}
                            >
                                SERVICES
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Box className="w-full sm:w-full md:w-full lg:w-4/5">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: 1.4,
                                        fontSize: {
                                            xs: '16px',
                                            sm: '16px', // Small screens
                                            md: '11px', // Medium screens (tablets)
                                            lg: '12px', // Larger screens
                                        },
                                    }}
                                >
                                    We offer a wide range of services that focus on the use of stone materials. Our clients can expect top-notch service that includes design, manufacturing, delivery, and assembly. Our team of experts uses state-of-the-art technology and equipment to ensure that every project is built to the highest quality standards. The client's experience is at the heart of our motivation. We provide support throughout the entire project. Our products are unique and adapted to the specifics of each client, and our clients can choose from a wide range of materials and colors. Also, our clients can rely on our support and advice throughout the process to ensure that their projects are successfully implemented. Our goal is to create products that will not only meet but also exceed the expectations of our customers.
                                </Typography>
                            </Box>
                            <Box className="w-0 lg:w-1/5"></Box>
                        </Box>
                    </Box>

                    <MeasurementAccordion />
                    <TechnicalAccordion />
                    <ProductionAccordion />
                    <InstallationAccordion />
                </Box>
            )}


            {isMobile ? <ShortCustomBrownDivider /> : <></>}

            <Booking />

            {isMobile ? <ShortCustomBrownDivider /> : <></>}

            {isMobile ? <Box className="flex flex-col w-full px-3 space-y-6">
                <Box className="flex flex-col items-center justify-center w-full space-y-3">
                    <Typography
                        variant="h3"
                        color="white"
                        className="text-center"
                        sx={{
                            fontWeight: 400,
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '20px'
                        }}
                    >
                        NEWSLETTER
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#DBC6BC"
                        className="text-center w-[70%]"
                        sx={{
                            fontWeight: 400,
                            justifyContent: 'flex-end',
                            // fontFamily: 'Chronicle Display',
                            lineHeight: 0.8,
                            fontSize: '50px'
                        }}
                    >
                        STAY TUNED
                    </Typography>
                </Box>
                <Box className="flex w-full">
                    <CustomTextField value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box className="flex w-full justify-center">
                    <WhiteCustomButton isMobile={isMobile} label={'Send'} iconSrc={'/images/icons/Vectorn.svg'} onClick={handleSubmit} />
                </Box>
                {/* Success Alert */}
                <Snackbar open={successAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="success" sx={{ width: "100%" }}>
                        Email sent successfully!
                    </Alert>
                </Snackbar>

                {/* Error Alert */}
                <Snackbar open={errorAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="error" sx={{ width: "100%" }}>
                        Failed to send email. Please try again.
                    </Alert>
                </Snackbar>
            </Box> : <Box className="flex items-end justify-between w-full px-16">
                <Box className="flex flex-col justify-end w-1/4 ">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 400,
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
                        NEWSLETTER
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#DBC6BC"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            justifyContent: 'flex-end',
                            fontFamily: 'Chronicle Display',
                            lineHeight: 0.8,
                            fontSize: {
                                xs: "20px",
                                sm: "30px",  // Small screens
                                md: "50px",  // Medium screens
                                lg: "70px"
                            }
                        }}
                    >
                        STAY TUNED
                    </Typography>
                </Box>
                <Box className="w-1/2 ">
                    <CustomTextField value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box className="flex justify-center -mb-10 w-1/4">
                    <AboutWhiteBtn label={'Send'} icon={'/images/Vectorn.svg'} onClick={handleSubmit} />
                </Box>
                {/* Success Alert */}
                <Snackbar open={successAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="success" sx={{ width: "100%" }}>
                        Email sent successfully!
                    </Alert>
                </Snackbar>

                {/* Error Alert */}
                <Snackbar open={errorAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="error" sx={{ width: "100%" }}>
                        Failed to send email. Please try again.
                    </Alert>
                </Snackbar>
            </Box>}

            <ShortCustomBrownDivider />

            {isMobile ? <FooterMobile /> : <Footer />}
        </Box>
    );
}


export default HomePage;