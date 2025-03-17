'use client'

// Import necessary dependencies
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FaMoneyBill } from "react-icons/fa";

import { useMediaQuery } from '@mui/material';
import SplendoursOldHeader from './SplendoursOldHeader';
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)'); // Media query for mobile
    const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Box className={isMobile ? "flex items-center bg-color justify-between w-full h-full" : ""} >
            {isMobile &&
                <Box className={`flex justify-center w-full h-full lg:flex`}>
                    <header className={`fixed left-0 w-screen z-50 top-0`}>
                        <Box className={`bg-color justify-center  w-full h-full lg:flex`}>
                            <div className={"h-[30px] flex justify-center items-center gap-3 px-4 w-full relative"}>
                                <Link
                                    href={"https://staging.splendourinstone.com.au/walling/#free-stone-samples"}
                                    className="bg-customColor border border-customColor text-color w-[90px] h-[20px] rounded-full text-[10px] leading-tight-custom font-medium flex items-center justify-center hover:bg-white"
                                >
                                    Click Here
                                </Link>
                                <button className="border border-customColor h-[20px] px-5 text-customColor flex items-center justify-center gap-2 rounded-full text-[10px] leading-tight-custom font-semibold transition duration-300 hover:text-color hover:bg-customColor">
                                    <FaMoneyBill className="w-4 h-4" /> Trade Credit
                                </button>
                            </div>
                        </Box>
                        <Box className="bg-color flex justify-between">
                            <Box sx={{ "marginLeft": "4vw" }}>
                                <Image
                                    className='px-3'
                                    src={'/images/Header/mobile-main-logo.png'}
                                    alt="Logo"
                                    width={isMobile ? 150 : 250}
                                    height={isMobile ? 50 : 70}
                                />
                            </Box>
                            <Box className="flex items-center justify-center gap-x-2" sx={{ marginRight: '4vw' }}>
                                <Box className="flex items-end w-1/7">
                                    <Link href="/visualizer">
                                        <Box className="flex items-center justify-center">
                                            <Box
                                                className="relative"
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                }}
                                            >
                                                <Box
                                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    sx={{
                                                        width: 30,
                                                        height: 30,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Image
                                                        src="/images/Header/search.svg"
                                                        alt="Hamburger Menu"
                                                        width={15} // Adjust width as needed
                                                        height={15} // Adjust height as needed
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                                <Box
                                    className="block lg:hidden"
                                    onClick={handleMenuToggle}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <Box className="flex items-center justify-center">
                                        <Box
                                            className="relative"
                                            sx={{
                                                width: 30,
                                                height: 30,
                                            }}
                                        >
                                            <Box
                                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image
                                                    src="/images/Header/menu.svg"
                                                    alt="Hamburger Menu"
                                                    width={15} // Adjust width as needed
                                                    height={15} // Adjust height as needed
                                                />
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </header>
                </Box>
            }

            {isTablet &&
                <Box className={`flex justify-center top-0 w-full h-full  lg:flex`}>
                    <header className="fixed top-0 left-0 w-screen z-50">
                        <Box className={`flex  bg-color justify-center top-0 w-full h-full lg:flex`}>
                            <div className={" h-[30px] flex justify-center items-center gap-3 px-4 w-full relative"}>
                                <p className="text-[10px] leading-tight-custom text-customColor font-semibold text-center">
                                    REGISTER YOUR INFORMATION FOR FREE STONE SAMPLES SENT EXPRESS TO YOU!
                                </p>
                                <Link
                                    href={"https://staging.splendourinstone.com.au/walling/#free-stone-samples"}
                                    className="bg-customColor border border-customColor text-color w-[90px] h-[20px] rounded-full text-[10px] leading-tight-custom font-medium flex items-center justify-center hover:bg-white"
                                >
                                    Click Here
                                </Link>
                                <button className="border border-customColor h-[20px] px-5 text-customColor flex items-center justify-center gap-2 rounded-full text-[10px] leading-tight-custom font-semibold transition duration-300 hover:text-color hover:bg-customColor">
                                    <FaMoneyBill className="w-4 h-4" /> Trade Credit
                                </button>
                            </div>
                        </Box>
                        <Box className="bg-color flex justify-between" >
                            <Box sx={{ "marginLeft": "4vw" }}>
                                <Image
                                    className='px-3'
                                    src={'/images/Header/mobile-main-logo.png'}
                                    alt="Logo"
                                    width={isTablet ? 150 : 250}
                                    height={isTablet ? 50 : 70}
                                />
                            </Box>
                            <Box className="flex items-center justify-center gap-x-2" sx={{ marginRight: '4vw' }}>
                                <Box className="flex items-end w-1/7">
                                    <Link href="/visualizer">
                                        <Box className="flex items-center justify-center">
                                            <Box
                                                className="relative"
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                }}
                                            >
                                                {/* <Image
                                                    src="/images/Header/menu_circle.svg"
                                                    alt="Hamburger Menu Circle"
                                                    width={30}
                                                    height={30}
                                                /> */}
                                                <Box
                                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    sx={{
                                                        width: 30,
                                                        height: 30,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Image
                                                        src="/images/Header/search.svg"
                                                        alt="Hamburger Menu"
                                                        width={15} // Adjust width as needed
                                                        height={15} // Adjust height as needed
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>

                                    </Link>
                                </Box>
                                <Box
                                    className="block lg:hidden"
                                    onClick={handleMenuToggle}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <Box className="flex items-center justify-center">
                                        <Box
                                            className="relative"
                                            sx={{
                                                width: 30,
                                                height: 30,
                                            }}
                                        >
                                            {/* <Image
                                                src="/images/Header/menu_circle.svg"
                                                alt="Hamburger Menu Circle"
                                                width={30}
                                                height={30}
                                            /> */}
                                            <Box
                                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image
                                                    src="/images/Header/menu.svg"
                                                    alt="Hamburger Menu"
                                                    width={15} // Adjust width as needed
                                                    height={15} // Adjust height as needed
                                                />
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </header>
                </Box>
            }



            {/* Navigation Links - For Desktop and Mobile */}
            {isMobile ? <Box className={`flex w-full justify-between ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
                <Box className="flex items-center justify-between w-full">
                    <Box className=" text-center">
                        <Link href="/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Home
                            </Typography>
                        </Link>
                    </Box>
                    <Box className=" text-center">
                        <Link href="https://staging.splendourinstone.com.au/walling/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Walling
                            </Typography>
                        </Link>
                    </Box>
                    <Box className=" text-center">
                        <Link href="https://staging.splendourinstone.com.au/paving/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Paving
                            </Typography>
                        </Link>
                    </Box>
                    {/* <Box className=" text-center">
                        <Link href="/about">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Bricks
                            </Typography>
                        </Link>
                    </Box>
                    <Box className=" text-center">
                        <Link href="/services">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                CobbleStone
                            </Typography>
                        </Link>
                    </Box> */}
                    <Box className=" text-center">
                        <Link href="/portfolio">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Projects
                            </Typography>
                        </Link>
                    </Box>
                    <Box className=" text-center">
                        <Link href="/contact">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                CONTACT US
                            </Typography>
                        </Link>
                    </Box>
                    <Box className=" text-center">
                        <Link href="/faq">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "15px",
                                        lg: '20px',
                                    },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        color: '#FFD700', // Gold color on hover
                                    }
                                }}
                            >
                                Consultations
                            </Typography>
                        </Link>
                    </Box>

                    {/* Search Icon */}
                    <Box className="flex justify-center ">
                        <Link href="/">
                            <Box className="flex items-center justify-center">
                                <Box
                                    className="relative"
                                    sx={{
                                        width: 30,
                                        height: 30,
                                    }}
                                >
                                    <Image
                                        src="/images/Header/menu_circle.svg"
                                        alt="Hamburger Menu Circle"
                                        width={30}
                                        height={30}
                                    />
                                    <Box
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Image
                                            src="/images/Header/search.svg"
                                            alt="Hamburger Menu"
                                            width={18} // Adjust width as needed
                                            height={18} // Adjust height as needed
                                        />
                                    </Box>
                                </Box>
                            </Box>

                        </Link>
                    </Box>

                </Box>
            </Box> :
                <Box className={`flex justify-center top-0 w-full h-full ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
                    <SplendoursOldHeader></SplendoursOldHeader>
                </Box>}

            {/* Mobile Menu Overlay */}
            {isMobile && isMenuOpen && (
                <Box
                    className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-70"
                    onClick={handleMenuToggle}
                >
                    <Box
                        className="flex flex-col items-center justify-center p-6 bg-[#283c28] m-auto"
                        sx={{
                            animation: 'fadeIn 0.3s ease-out',
                        }}
                    >
                        <Link href="/">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                HOME
                            </Typography>
                        </Link>
                        <Link href="https://staging.splendourinstone.com.au/walling/">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                WALLING
                            </Typography>
                        </Link>
                        <Link href="https://staging.splendourinstone.com.au/paving/">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                PAVING
                            </Typography>
                        </Link>
                        {/* <Link href="https://staging.splendourinstone.com.au/reclaimed-bricks/">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Bricks
                            </Typography>
                        </Link> */}
                        <Link href="https://staging.splendourinstone.com.au/cobble-stones/">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                COBBLE STONES
                            </Typography>
                        </Link>
                        <Link href="https://staging.splendourinstone.com.au/reclaimed-bricks/">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                BRICKS
                            </Typography>
                        </Link>
                        <Link href="https://staging.splendourinstone.com.au/blog/">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                BLOG
                            </Typography>
                        </Link>
                        {/* 
                        <Link href="/services">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Service
                            </Typography>
                        </Link> */}
                        {/* <Link href="/portfolio">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Projects
                            </Typography>
                        </Link> */}
                        <Link href="/about">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                ABOUT
                            </Typography>
                        </Link>
                        <Link href="/contact">
                            <Typography
                                variant="h3"
                                color="#DBC6BC"
                                sx={{
                                    fontWeight: 500,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    // borderBottom: '2px solid #FFD700', // Gold underline
                                    // '&:hover': {
                                    //     color: '#FFD700',
                                    //     transform: 'translateX(10px)', // Slide effect on hover
                                    // }
                                }}
                            >
                                CONTACT
                            </Typography>
                        </Link>
                        {/* <Link href="/faq">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Constultations
                            </Typography>
                        </Link> */}
                    </Box>
                </Box>
            )}

            {isTablet && isMenuOpen && (
                <Box
                    className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-70"
                    onClick={handleMenuToggle}
                >
                    <Box
                        className="flex flex-col items-center justify-center p-6 bg-[#2c2c2c]"
                        sx={{
                            animation: 'fadeIn 0.3s ease-out',
                        }}
                    >
                        <Link href="/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Home
                            </Typography>
                        </Link>
                        <Link href="https://staging.splendourinstone.com.au/walling/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Walling
                            </Typography>
                        </Link>
                        <Link href="https://staging.splendourinstone.com.au/paving/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Paving
                            </Typography>
                        </Link>
                        {/* <Link href="https://staging.splendourinstone.com.au/reclaimed-bricks/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Bricks
                            </Typography>
                        </Link> */}
                        <Link href="https://staging.splendourinstone.com.au/cobble-stones/">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Cobblestone
                            </Typography>
                        </Link>

                        <Link href="/services">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Service
                            </Typography>
                        </Link>
                        <Link href="/portfolio">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Projects
                            </Typography>
                        </Link>
                        <Link href="/about">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                About
                            </Typography>
                        </Link>
                        <Link href="/contact">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                CONTACT US
                            </Typography>
                        </Link>
                        <Link href="/faq">
                            <Typography
                                variant="h3"
                                color="#FFFFFF"
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: "18px",
                                    marginBottom: '20px',
                                    padding: '10px 0',
                                    borderBottom: '2px solid #FFD700', // Gold underline
                                    '&:hover': {
                                        color: '#FFD700',
                                        transform: 'translateX(10px)', // Slide effect on hover
                                    }
                                }}
                            >
                                Constultations
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            )}


        </Box>
    );
};

export default Header;

