// Import necessary dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Typography, useMediaQuery, Modal } from '@mui/material';
import Image from 'next/image';
import Header from './Home/Header';
import WhiteCustomButton from './WhiteButton';
import EnquiryForm from './3dEffects/EnquireFormModal';
import Magnifier from './Magnifier';
import { AboutWhiteBtn } from '../about/AboutwhiteBtn';
import blueImage from '@/public/Bluestone-Magnifier.jpg'


const Home = () => {
    const isMobile = useMediaQuery('(max-width: 768px)'); // Mobile breakpoint
    const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)'); // Tablet breakpoint

    const ImageBlue = blueImage;
    // State management for the EnquiryForm modal
    const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
    const [isTextureModalOpen1, setIsTextureModalOpen1] = useState(false); // Texture modal state
    const [isTextureModalOpen2, setIsTextureModalOpen2] = useState(false); // Texture modal state

    const handleOpenEnquiryForm = () => setIsEnquiryFormOpen(true);
    const handleCloseEnquiryForm = () => setIsEnquiryFormOpen(false);

    const handleOpenTextureModal1 = () => setIsTextureModalOpen1(true); // Open texture modal
    const handleCloseTextureModal1 = () => setIsTextureModalOpen1(false); // Close texture modal

    const handleOpenTextureModal2 = () => setIsTextureModalOpen2(true); // Open texture modal
    const handleCloseTextureModal2 = () => setIsTextureModalOpen2(false); // Close texture modal


    return (
        <>
            {/* EnquiryForm Modal */}
            <EnquiryForm open={isEnquiryFormOpen} handleClose={handleCloseEnquiryForm} />

            {/* Texture Modal1 */}
            <Modal
                open={isTextureModalOpen1}
                onClose={handleCloseTextureModal1}
                aria-labelledby="texture-modal-title"
                aria-describedby="texture-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        // bgcolor: 'background.paper',
                        boxShadow: 24,
                        // p: 1,
                        // borderRadius: 2,
                        width: isMobile ? '80%' : '30%',
                        textAlign: 'center',
                    }}
                    className="glassImage"
                >
                    <Typography id="texture-modal-title" color='#DBC6BC' variant="h6" component="h2" sx={{ mb: 2 }}>
                        JAMISON
                    </Typography>
                    <Magnifier
                        src="/Project_textures/12_jamieson/textures/jamieson_basecolor.jpg" // Replace with your texture image path
                        alt="Texture"
                        width={400}
                        height={300}
                        // style={{ width: '100%', height: 'auto' }}
                        // className="glass"
                        zoom={3} // Adjust the zoom level as needed
                    />
                </Box>
            </Modal>

            {/* Texture Modal2 */}
            <Modal
                open={isTextureModalOpen2}
                onClose={handleCloseTextureModal2}
                aria-labelledby="texture-modal-title"
                aria-describedby="texture-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        // bgcolor: 'background.paper',
                        boxShadow: 24,
                        // p: 1,
                        // borderRadius: 2,
                        width: isMobile ? '80%' : '30%',
                        textAlign: 'center',
                    }}
                    className="glassImage"
                >
                    <Typography id="texture-modal-title" color='#DBC6BC' variant="h6" component="h2" sx={{ mb: 2 }}>
                        BLUESTONE
                    </Typography>
                    <Magnifier
                        src={ImageBlue.src} // Replace with your texture image path
                        alt="Texture"
                        width={100}
                        height={100}
                        // style={{ width: '100%', height: 'auto' }}
                        // className="glass"
                        zoom={3} // Adjust the zoom level as needed
                    />
                </Box>
            </Modal>

            <Box
                className="flex"
                sx={{
                    width: '100%',
                    backgroundImage: 'url(/images/Home/background.jpg)', // Default desktop background
                    backgroundSize: '100% 100%',
                    backgroundPosition: '100% 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    '@media (max-width: 768px)': {
                        backgroundImage: 'url(/images/Home/background-mobile.png)', // Mobile background
                        height: '90vh',
                    },
                    '@media (min-width: 769px) and (max-width: 1024px)': {
                        backgroundImage: 'url(/images/Home/background-mobile.png)', // Tablet-specific background
                        height: '100vh',
                    },
                }}
            >
                <Box className="flex items-center w-[100vw]" sx={{ position: isMobile ? 'fixed' : '', zIndex: 50, top: 0, backgroundColor: isMobile ? '#283C28' : '', height: isMobile ? '35px' : isTablet ? '40px' : '40vh' }}>
                    <Header />
                </Box>


                <Box
                    className="relative flex items-center w-full"
                    sx={{ height: isMobile ? '60vh' : isTablet ? '55vh' : '72vh', marginTop: isMobile ? '15vh' : 0 }}
                >
                    <Box className="flex w-4/5"></Box>
                    <Box className="flex justify-between w-1/5 h-5/6" style={{ paddingRight: '20px' }}>
                        {isMobile ? (
                            <Box></Box>
                        ) : (
                            <Box className="flex items-end w-1/2">
                                <Image
                                    src="/images/Home/text_circle.png"
                                    alt="Logo"
                                    width={isTablet ? 70 : 90}
                                    height={isTablet ? 70 : 90}
                                />
                            </Box>
                        )}

                        <Box className="absolute" style={{ top: isMobile ? '25%' : isTablet ? '25%' : '56%', right: isTablet ? '30%' : '25%' }}>
                            <Image
                                src="/images/Home/zoom.svg"
                                alt="Zoom Icon"
                                width={32}
                                height={32}
                                onClick={handleOpenTextureModal1} // Open texture modal on click
                                style={{ cursor: 'pointer' }}
                            />
                        </Box>
                        <Box className="absolute" style={{ top: isMobile ? '110%' : isTablet ? '25%' : '95%', right: isMobile ? '20%' : isTablet ? '30%' : '40%' }}>
                            <Image
                                src="/images/Home/zoom.svg"
                                alt="Zoom Icon"
                                width={32}
                                height={32}
                                onClick={handleOpenTextureModal2} // Open texture modal on click
                                style={{ cursor: 'pointer' }}
                            />
                        </Box>

                        <Box
                            className=""
                            style={{
                                position: 'absolute',
                                right: isTablet ? '3vw' : '4vw',
                                top: isTablet ? '-5vh' : isMobile ? '0vh' : '-4vh',
                            }}
                        >
                            <Image
                                src="/images/Home/right_text.png"
                                alt="Logo"
                                width={18}
                                height={600}
                                className="h-[50vh] max-sm:h-[70vh]"
                            />
                        </Box>
                    </Box>
                </Box>

                {isMobile ? (<Box className="flex flex-col w-full" sx={{ paddingX: '4vw', height: '30vh' }}>

                    <Box className="flex items-center justify-start -mt-4 mb-2">
                        <Box

                        >
                            {/** Mobile-specific coloring for "STONE BY SPLENDOUR" */}
                            <Typography
                                variant='h3'
                                sx={{
                                    fontSize: '38px',
                                    fontWeight: 400,
                                    color: { xs: '#DBC6BC', sm: '#FFFFFF' }, // Change color for mobile only

                                }}
                            >
                                STONE BY <br /> SPLENDOUR
                            </Typography>
                            <Typography
                                variant='h3'
                                sx={{
                                    fontSize: '38px',
                                    fontWeight: 400,
                                    color: { xs: '#FFFFFF', sm: '#FFFFFF' }, // Keep "IN STONE" color unchanged
                                }}
                            >
                                IN STONE
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="flex items-center justify-between gap-x-[10px] w-full">
                        <WhiteCustomButton isMobile={isMobile} label={'Enquire Now!'} iconSrc={'images/Vector.svg'} onClick={handleOpenEnquiryForm} />
                        <Link href="/contact"><WhiteCustomButton isMobile={isMobile} label={'Contact Us'} iconSrc={'images/Vector.svg'} /></Link>
                    </Box>
                </Box>) : isTablet ? (
                    <Box
                        className="flex flex-col w-full"
                        sx={{ paddingX: '6vw', height: '25vh' }}
                    >
                        <Box className="flex items-center justify-center">
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: '46px',
                                    fontWeight: 400,
                                    color: '#DBC6BC',
                                    textAlign: 'center',
                                }}
                            >
                                STONE BY SPLENDOUR IN STONE
                            </Typography>
                        </Box>

                        <Box className="flex items-center justify-center gap-x-[15px] mt-4">
                            <WhiteCustomButton
                                isMobile={false}
                                label={'Enquire Now!'}
                                iconSrc={'images/Vectorn.svg'}
                                onClick={handleOpenEnquiryForm}
                            />
                            <Link href="/contact">
                                <WhiteCustomButton isMobile={false} label={'Contact Us'} iconSrc={'images/Vectorn.svg'} />
                            </Link>
                        </Box>
                    </Box>
                ) : (
                    <Box
                        className="flex flex-col w-full mb-6 sm:flex-row md:flex-row lg:flex-row md:px-[5vw] "
                        sx={{ height: '8vh' }}
                    >
                        <Box className="flex items-center mt-8 w-full sm:w-1/3 md:w-2/5">
                            <Box>
                                <AboutWhiteBtn
                                    label={'Enquire Now!'}
                                    icon={'images/Vectorn.svg'}
                                    onClick={handleOpenEnquiryForm}
                                />
                            </Box>
                            <Link href={'/contact'} className="ml-[2.5vw]" style={{ position: "relative" }}>

                                <AboutWhiteBtn label={'Contact Us'} icon={'images/Vectorn.svg'} />

                            </Link>
                        </Box>

                        <Box className="flex items-center justify-center -mr-14 w-[60vw]">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    alignContent: 'flex-start',
                                    fontFamily: 'Chronicle Display',
                                    fontSize: '3.4vw',
                                }}
                            >
                                STONE BY SPLENDOUR IN STONE
                            </Typography>
                        </Box>
                    </Box>


                )}
            </Box>
        </>
    );
};

export default Home;
