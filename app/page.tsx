"use client"

import { useState } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
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


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const PARTDATA = [
    { image: '/images/Home/Interactive_part/card1.jpg' },
    { image: '/images/Home/Interactive_part/card2.jpg' },
    { image: '/images/Home/Interactive_part/card3.jpg' },
    { image: '/images/Home/Interactive_part/card4.jpg' }
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
                <Box sx={{ width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: isMobile ? 'center' : 'flex-end' }} style={{ marginBottom: "50px" }}>
                    <Box sx={{ width: isMobile ? "100%" : "40%" }}>
                        <Typography
                            // className="text-center"
                            variant="h3"
                            color="#DBC6BC"
                            sx={{
                                lineHeight: 0.8,
                                fontWeight: 500,
                                fontFamily: 'Chronicle Display',
                                textAlign: isMobile ? 'center' : 'start',
                                fontSize: {
                                    xs: "40px",
                                    sm: "50px",
                                    md: "65px",
                                    lg: "120px"
                                }
                            }}
                        >
                            SPLENDOURS PROJECTS
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: isMobile ? '30px' : '0px' }}>
                        <WhiteCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
                    </Box>
                </Box>

                <Box><SplenderoursProductsCarousel /></Box>
            </Box>

            <ShortCustomBrownDivider />

            {isMobile ?
                <Box className="flex flex-col w-full items-center justify-center">
                    <Typography variant="body1" color="#DBC6BC" className="text-center" sx={{ width: "70%", fontFamily: "Chronicle Display", fontSize: '40px', fontWeight: 700, lineHeight: 0.9 }}>STATE OF</Typography>
                    <Typography variant="body1" color="#DBC6BC" className="text-center" sx={{ width: "70%", fontFamily: "Chronicle Display", fontSize: '40px', fontWeight: 700, lineHeight: 0.9 }}>THE ART</Typography>
                    <Typography variant="body1" color="#DBC6BC" className="text-center" sx={{ width: "70%", fontFamily: "Chronicle Display", fontSize: '40px', fontWeight: 700, lineHeight: 0.9 }}>SHOWROOM</Typography>
                </Box> :
                <Box className="flex flex-col px-20">
                    <Typography variant="body1" color="white" sx={{ fontFamily: "Chronicle Display", fontSize: { xs: '20px', sm: '5vw', lg: '75px' }, fontWeight: 700, lineHeight: 1.1, opacity: '10%' }}>SAME DAY QUOTES</Typography>
                    <Typography variant="body1" color="#DBC6BC" sx={{ fontFamily: "Chronicle Display", fontSize: { xs: '20px', sm: '5vw', lg: '75px' }, fontWeight: 700, lineHeight: 1.1, textAlign: 'center' }}>STATE OF THE ART SHOWROOM</Typography>
                    <Typography variant="body1" color="white" sx={{ fontFamily: "Chronicle Display", fontSize: { xs: '20px', sm: '5vw', lg: '75px' }, fontWeight: 700, lineHeight: 1.1, opacity: '10%', textAlign: "right" }}>SUPPLY & INSTALL PACKAGES</Typography>
                </Box>}

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
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '40px',
                                }}
                            >
                                WALLING RANGE
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: '13px',
                                }}
                            >
                                We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                            </Typography>
                        </Box>
                        <Box className="flex justify-center w-full">
                            <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
                        </Box>
                    </Box>
                    <Box className="flex w-full">
                        <WallingRangeEmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </Box>
                </Box>
            ) : isTablet ? (
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
                            variant="h3"
                            color="#283C28"
                            sx={{
                                lineHeight: '1',
                                textAlign: 'center',
                                fontWeight: 600,
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "30px",
                                    sm: "40px",
                                    md: "50px",
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
                                fontSize: '16px',
                                mt: 2,
                            }}
                        >
                            We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                        </Typography>
                        <Box className="flex justify-center mt-6">
                            <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
                        </Box>
                    </Box>

                    <Box className="flex justify-between gap-7 w-full mt-10 flex-wrap">
                        <CustomWallCard product_image_src="images/Home/WallingRange/product1.jpg" product_subname="CHARLOTTE" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product2.jpg" product_subname="JAMIESON" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product3.jpg" product_subname="BUFFALO" />
                    </Box>
                    <Box className="flex justify-between gap-7 w-full mt-6 flex-wrap">
                        <CustomWallCard product_image_src="images/Home/WallingRange/product4.jpg" product_subname="BELOKA" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product5.jpg" product_subname="SHOREHAM" />
                        <CustomWallCard product_image_src="images/Home/WallingRange/product6.jpg" product_subname="BEACHPORT" />
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
                                className="font-semibold"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    lineHeight: '0.8',
                                    textAlign: 'start',
                                    fontWeight: 700,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: "25px",
                                        sm: "45px",
                                        md: "55px",
                                        lg: "100px",
                                    },
                                }}
                            >
                                WALLING RANGE
                            </Typography>
                        </Box>
                        <Box className="flex flex-col w-[20vw] gap-y-6 mt-4">
                            <Box>
                                <Typography
                                    variant="h3"
                                    color="#000000"
                                    sx={{
                                        fontWeight: 400,
                                        lineHeight: '1.2',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: "8px",
                                            sm: "10px",
                                            md: "12px",
                                            lg: "18px",
                                        },
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise and pace that a moment to stop, reflect and connect with something pure
                                </Typography>
                            </Box>
                            <Box>
                                <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="flex flex-col w-full gap-y-7">
                        <Box className="flex justify-between w-full gap-7">
                            <CustomWallCard product_image_src="images/Home/WallingRange/product1.jpg" product_subname="CHARLOTTE" />
                            <CustomWallCard product_image_src="images/Home/WallingRange/product2.jpg" product_subname="JAMIESON" />
                            <CustomWallCard product_image_src="images/Home/WallingRange/product3.jpg" product_subname="BUFFALO" />
                        </Box>
                        <Box className="flex justify-between w-full gap-7">
                            <CustomWallCard product_image_src="images/Home/WallingRange/product4.jpg" product_subname="BELOKA" />
                            <CustomWallCard product_image_src="images/Home/WallingRange/product5.jpg" product_subname="SHOREHAM" />
                            <CustomWallCard product_image_src="images/Home/WallingRange/product6.jpg" product_subname="BEACHPORT" />
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
                                                fontWeight: 500,
                                                fontFamily: 'Chronicle Display',
                                                fontSize: isMobile ? '40px' : '70px',
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            textAlign: 'start',
                                            lineHeight: '1.2', // Adjust line height to match the image exactly
                                            fontWeight: 500,
                                            fontFamily: 'Chronicle Display',
                                            fontSize: '120px',
                                            marginBottom: '20px', // Space between lines as shown in the image
                                        }}
                                    >
                                        3D INTERACTIVE
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            textAlign: 'start',
                                            lineHeight: '1.2',
                                            fontWeight: 500,
                                            fontFamily: 'Chronicle Display',
                                            fontSize: '120px',

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
                                        fontWeight: 400,
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '20px',
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect and
                                    connect with something pure
                                </Typography>
                            </Box>
                            <Box className="flex w-full justify-center gap-2">
                                {[
                                    { label: 'View all', href: '/allvisualizers' },
                                    { label: 'Try Now!', href: '/visualizer/Chimney' },
                                ].map(({ label, href }, index) => (
                                    <Box key={index} className="flex">
                                        <Link href={href}>
                                            <WhiteCustomButton label={label} iconSrc={'/images/icons/Vector.svg'} />
                                        </Link>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ) : (
                        <Box className="flex flex-col justify-start w-1/4 gap-y-5 mt-5">
                            <Typography
                                variant="h3"
                                color="#ffffff"
                                style={{ textAlign: 'justify' }}
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: '8px',
                                        sm: '10px',
                                        md: '12px',
                                        lg: '18px',
                                    },
                                }}
                            >
                                We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect and
                                connect with something pure
                            </Typography>
                            <Box>
                                <Link href={'/allvisualizers'}>
                                    <WhiteCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
                                </Link>
                            </Box>
                        </Box>
                    )}
                </Box>

                {isMobile || isTablet ? <StairsCarousel images={images} /> : <Box className="w-full flex flex-col aspect-[3.77/1] min-w-1 bg-[#DBC6BC] rounded-[40px] p-8 px-12" style={{ marginTop: '230px' }}>
                    <Box className="flex justify-between w-1/4 gap-x-4" >

                        <CarouselPart data={PARTDATA} />
                        <Box className='flex flex-col h-[100px] justify-around'>
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
                                    fontWeight: 300,
                                    alignContent: 'flex-start',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "7px",
                                        sm: "10px",  // Small screens
                                        md: "10px",  // Medium screens
                                        lg: "12px"
                                    }
                                }}
                            >
                                Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="flex justify-center w-full">
                        <Carousel data={DATA} />
                    </Box>
                    <Box className="flex justify-between w-full mt-[-3.5vh] lg:mt-[40px]">
                        <Box>
                            <Typography color="#283C28 font-semibold" sx={{
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
                            <Typography color="#283C28 font-semibold" sx={{
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
                            <Link href={'/visualizer/Chimney'}><GreenCustomButton label={'Try Now!'} iconSrc={'/images/icons/Vector.svg'} /></Link>
                        </Box>
                    </Box>
                    : <></>
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
                                    fontFamily: 'Chronicle Display',
                                    fontSize: isTablet ? '50px' : '40px', // Adjust for tablets
                                }}
                            >
                                PAVING RANGE
                            </Typography>
                        </Box>
                        <Box className="flex w-full">
                            <Typography
                                variant="h3"
                                color="#000000"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: isTablet ? '16px' : '13px', // Adjust for tablets
                                }}
                            >
                                We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect, and connect with something pure.
                            </Typography>
                        </Box>
                        <Box className="flex justify-center w-full">
                            <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
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
                        backgroundImage: 'url(images/Home/PavingRange/background.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Box className="flex flex-col md:flex-row justify-between w-full">
                        <Box className="flex flex-col justify-center w-full md:w-1/4 gap-3">
                            <Box className="flex w-full flex-col gap-y-6 mt-4">
                                <Typography
                                    variant="h3"
                                    color="#000000"
                                    sx={{
                                        fontWeight: 400,
                                        textAlign: 'justify',
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.2',
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                            md: '16px',
                                            lg: '20px',
                                        },
                                    }}
                                >
                                    We believe that in a new age world filled with gadgets, noise, and pace that a moment to stop, reflect, and connect with something pure.
                                </Typography>
                            </Box>
                            <Box className="mt-5">
                                <GreenCustomButton label={'View all'} iconSrc={'/images/icons/Vector.svg'} />
                            </Box>
                        </Box>

                        <Box className="flex items-start justify-end w-full md:w-2/3">
                            <Typography
                                className="font-semibold"
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    textAlign: 'start',
                                    fontWeight: 700,
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '30px',
                                        sm: '45px',
                                        md: '60px',
                                        lg: '100px',
                                    },
                                }}
                            >
                                PAVING RANGE
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="flex flex-col w-full gap-y-7">
                        <Box className="flex flex-col md:flex-row justify-between w-full gap-y-7 md:gap-x-7">
                            <CustomWallCard product_image_src="images/Home/PavingRange/product1.jpg" product_subname="PORPHYRY" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product2.jpg" product_subname="QUARTZITE" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product3.jpg" product_subname="MARBLE" />
                        </Box>
                        <Box className="flex flex-col md:flex-row justify-between w-full gap-y-7 md:gap-x-7">
                            <CustomWallCard product_image_src="images/Home/PavingRange/product4.jpg" product_subname="LIMESTONE" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product5.jpg" product_subname="GRANITE" />
                            <CustomWallCard product_image_src="images/Home/PavingRange/product6.jpg" product_subname="BLUESTONE" />
                        </Box>
                    </Box>
                </Box>
            )}


            {isMobile ?
                <Box className="py-8">
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
                                    fontFamily: 'Chronicle Display',
                                    fontSize: {
                                        xs: '30px', // Extra small screens
                                        sm: '35px', // Small screens
                                        md: '40px', // Medium screens (tablets)
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
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                            md: '16px', // Adjusted for tablets
                                        },
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
                                                xs: '12px',
                                                sm: '13px',
                                                md: '14px', // Adjusted for tablets
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
                                            xs: '12px',
                                            sm: '14px', // Small screens
                                            md: '16px', // Medium screens (tablets)
                                            lg: '18px', // Larger screens
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
                            fontFamily: 'Chronicle Display',
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
                    <WhiteCustomButton label={'Send'} iconSrc={'/images/icons/Vector.svg'} onClick={handleSubmit} />
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
                <Box className="flex flex-col justify-end w-1/4">
                    <Typography
                        variant="h3"
                        color="white"
                        sx={{
                            fontWeight: 400,
                            alignContent: 'flex-start',
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: {
                                xs: "10px",
                                sm: "15px",  // Small screens
                                md: "18px",  // Medium screens
                                lg: "20px"
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
                                lg: "90px"
                            }
                        }}
                    >
                        STAY TUNED
                    </Typography>
                </Box>
                <Box className="w-1/2">
                    <CustomTextField value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box className="flex justify-end w-1/4">
                    <WhiteCustomButton label={'Send'} iconSrc={'/images/icons/Vector.svg'} onClick={handleSubmit} />
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