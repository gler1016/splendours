
"use client"
// app/about/page.tsx

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import Header from '../components/Header';
import Header from '../components/Home/Header';
import Footer from '../components/Footer';

import { Box, Typography } from '@mui/material';

import StoneTypesFaqAccordion from "../components/Faqs/StoneTypesFaqAccordion";
import ConsultationFaqAccordion from '../components/Faqs/ConsultationFaqAccordion';
import CostFaqAccordion from '../components/Faqs/CostFaqAccordion';
import ServiceFaqAccordion from '../components/Faqs/ServiceFaqAccordion';
import StoneCareFaqAccordion from '../components/Faqs/StoneCareFaqAccordion';
import StoneBenefitsFaqAccordion from '../components/Faqs/StoneBenefitsFaqAccordion';
import ShowRoomFaqAccordion from '../components/Faqs/ShowRoomFaqAccordion';

import StoneTypesFaqAccordionMobile from '../components/Faqs/Mobile/StoneTypesFaqAccordion';
import ConsultationFaqAccordionMobile from '../components/Faqs/Mobile/ConsultationFaqAccordion';
import CostFaqAccordionMobile from '../components/Faqs/Mobile/CostFaqAccordion';
import ServiceFaqAccordionMobile from '../components/Faqs/Mobile/ServiceFaqAccordion';
import StoneCareFaqAccordionMobile from '../components/Faqs/Mobile/StoneCareFaqAccordion';
import StoneBenefitsFaqAccordionMobile from '../components/Faqs/Mobile/StoneBenefitsFaqAccordion';
import ShowRoomFaqAccordionMobile from '../components/Faqs/Mobile/ShowRoomFaqAccordion';
import Image from 'next/image';
import ShortCustomBrownDivider from '../components/Divider/ShortCustomBrownDivider';
import FullCustomBrownDivider from '../components/Divider/FullCustomBrownDivider';
import FooterMobile from '../components/FooterMobile';
import { motion } from 'framer-motion';
import Card3DEffect from '../components/3dEffects/Card3DEffect';


const FaqPage = () => {

    // Mobile view (max-width 768px)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [isSwapped, setIsSwapped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsSwapped(prev => !prev);
        }, 3000); // Swap every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Box className="space-y-12">

            <Box className="flex items-center w-full px-3" sx={{ height: isMobile ? '15vh' : '40vh' }}>
                <Header />
            </Box>

            <Box className="space-y-12">

                {isMobile ? <Box className="flex w-full flex-col justify-center items-center gap-y-4">
                    <Box className="flex flex-col w-full justify-center items-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'center',
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: '42px'
                            }}
                        >
                            AT SPLENDOUR
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'center',
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '0.8',
                                fontSize: '42px'
                            }}
                        >
                            IN STONE,
                        </Typography>
                    </Box>
                    <Box className="flex w-full justify-center" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                        <Typography
                            variant="h3"
                            color="white"
                            sx={{
                                fontWeight: 300,
                                letterSpacing: '1.5',
                                textAlign: 'center',
                                lineHeight: '1.2',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '12px'
                            }}
                        >
                            we appreciate our clients’ need for the correct <br /> information to make informed decisions about<br /> your stone design project. Here are some<br /> answers to frequent questions asked:
                        </Typography>
                    </Box>
                </Box> : <Box className="flex w-full justify-between px-12 py-24">
                    <Box className="flex w-2/3 items-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 600,
                                lineHeight: '0.8',
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontSize: {
                                    xs: "25px",
                                    sm: "45px",  // Small screens
                                    md: "65px",  // Medium screens
                                    lg: "90px"
                                }
                            }}
                        >
                            AT SPLENDOUR IN STONE,
                        </Typography>
                    </Box>
                    <Box className="flex w-1/4 items-center">
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
                                    lg: "14px"
                                }
                            }}
                        >
                            we appreciate our clients&apos; need for the correct information to make informed decisions about your stone design project. Here are some answers to frequent questions asked:
                        </Typography>
                    </Box>
                </Box>}

                {/* <Box className="w-full flex flex-col"> */}
                {isMobile ? <StoneTypesFaqAccordionMobile /> : <Box className="py-6"><StoneTypesFaqAccordion /></Box>
                }
                {isMobile ? <ConsultationFaqAccordionMobile /> : <Box className="py-6"><ConsultationFaqAccordion /></Box>
                }
                {isMobile ? <CostFaqAccordionMobile /> : <Box className="py-6"><CostFaqAccordion /></Box>
                }
                {isMobile ? <ServiceFaqAccordionMobile /> : <Box className="py-6"><ServiceFaqAccordion /></Box>
                }
                {isMobile ? <StoneCareFaqAccordionMobile /> : <Box className="py-6"><StoneCareFaqAccordion /></Box>
                }
                {isMobile ? <StoneBenefitsFaqAccordionMobile /> : <Box className="py-6"><StoneBenefitsFaqAccordion /></Box>
                }
                {isMobile ? <ShowRoomFaqAccordionMobile /> : <Box className="py-6"><ShowRoomFaqAccordion /></Box>
                }
                {/* </Box> */}

                {isMobile ? <Box className="px-3"><ShortCustomBrownDivider /></Box> : <Box className="px-12"><ShortCustomBrownDivider /></Box>}


                {isMobile ? <Box className="flex w-full flex-col items-center px-3 gap-y-3">
                    <Box className="flex w-full flex-col items-center">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className='text-center'
                            sx={{
                                fontWeight: 400,
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '40px',
                                fontStyle: 'italic'
                            }}
                        >
                            I HAVE A
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className='text-center'
                            sx={{
                                fontWeight: 400,
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '40px',
                                fontStyle: 'italic'
                            }}
                        >
                            QUESTION NOT
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className='text-center'
                            sx={{
                                fontWeight: 400,
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '40px',
                                fontStyle: 'italic'
                            }}
                        >
                            ANSWERED
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className='text-center'
                            sx={{
                                fontWeight: 400,
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '40px',
                                fontStyle: 'italic'
                            }}
                        >
                            HERE. HOW CAN I
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            className='text-center'
                            sx={{
                                fontWeight: 400,
                                // fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontSize: '40px',
                                fontStyle: 'italic'
                            }}
                        >
                            REACH YOU?
                        </Typography>
                    </Box>
                    <Box className="flex w-full items-center justify-center">
                        <Typography
                            variant="h3"
                            color="#ffffff"
                            className="text-center"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: '12px',
                                lineHeight: '1.2'
                            }}
                        >
                            No problem! Our team is always ready to assist you. CONTACT US by phone at (03) 9873 4941, email us at info@splendourinstone.com, or visit our Contact Us page for details. We're happy to answer any questions you may have.
                        </Typography>
                    </Box>
                </Box> : <Box className="px-12"><Box className="flex w-full justify-between">
                    <Box className="flex flex-col w-[70%] items-start">
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                lineHeight: '1',
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px",  // Small screens
                                    md: "45px",  // Medium screens
                                    lg: "60px"
                                }
                            }}
                        >
                            I HAVE A QUESTION NOT
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px",  // Small screens
                                    md: "45px",  // Medium screens
                                    lg: "60px"
                                }
                            }}
                        >
                            ANSWERED HERE. HOW
                        </Typography>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                lineHeight: '1',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px",  // Small screens
                                    md: "45px",  // Medium screens
                                    lg: "60px"
                                }
                            }}
                        >
                            CAN I REACH YOU?
                        </Typography>
                    </Box>
                    <Box className="flex w-1/3 items-start">
                        <Typography
                            variant="h3"
                            color="#FFFFFF"
                            sx={{
                                fontWeight: 100,
                                alignContent: 'flex-start',
                                lineHeight: '1.4',
                                fontFamily: 'var(--font-montserrat)',
                                fontSize: {
                                    xs: "8px",
                                    sm: "10px",  // Small screens
                                    md: "12px",  // Medium screens
                                    lg: "14px"
                                }
                            }}
                        >
                            No problem! Our team is always ready to assist you. CONTACT US by phone at (03) 9873 4941, email us at info@splendourinstone.com, or visit our CONTACT US page for details. We're happy to answer any questions you may have.
                        </Typography>
                    </Box>
                </Box></Box>}

                {isMobile ? <Box><FullCustomBrownDivider /></Box> : <Box className="px-12"><FullCustomBrownDivider /></Box>}

                {isMobile ? <Box className="px-3"><Box className="flex flex-col w-full gap-y-5">
                    <Box className="flex w-full">
                        <Image
                            src="/images/Faqs/Mobile/image1.png"
                            alt="Image1"
                            width={358}
                            height={132}
                            className="w-full"
                        />
                    </Box>
                    <Box className="flex w-full">
                        <Image
                            src="/images/Faqs/Mobile/image2.png"
                            alt="image2"
                            width={358}
                            height={132}
                            className="w-full"
                        />
                    </Box>
                </Box></Box>
                    :
                    <Box className="px-12">
                        <Box className="flex justify-between w-full gap-6">
                            <motion.div
                                animate={{
                                    width: isSwapped ? '66.666667%' : '33.333333%'
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                                className="flex"
                                style={{
                                    height: '480px'
                                }}
                            >
                                <Card3DEffect>
                                    <Image
                                        src="/images/Faqs/image1.png"
                                        alt="Image1"
                                        width={552}
                                        height={480}
                                        className="rounded-[20px]"
                                        style={{
                                            width: '100%',
                                            height: '480px',
                                            objectFit: 'fill'
                                        }}
                                    />
                                </Card3DEffect>
                            </motion.div>

                            <motion.div
                                animate={{
                                    width: isSwapped ? '33.333333%' : '66.666667%'
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                                className="flex"
                                style={{
                                    height: '480px'
                                }}
                            >
                                <Card3DEffect>
                                    <Image
                                        src="/images/Faqs/image2.png"
                                        alt="image2"
                                        width={1136}
                                        height={480}
                                        className="rounded-[20px]"
                                        style={{
                                            width: '100%',
                                            height: '480px',
                                            objectFit: 'fill'
                                        }}
                                    />
                                </Card3DEffect>
                            </motion.div>
                        </Box>
                    </Box>}


            </Box>
            {isMobile ? <FooterMobile /> : <Footer />}
        </Box>
    );
};

export default FaqPage;
