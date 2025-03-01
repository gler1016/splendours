/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import NavbarMenu from "./3dEffects/NavbarMenu"; // Import the NavbarMenu component
import NavbarAceternity from "./3dEffects/NavbarAceterniy";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Media query for mobile
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box className="flex items-center justify-between w-full h-full sm:px-[4vw] md:px-[4vw] lg:px-[4vw]">
      <Box className="flex w-1/2 md:w-1/3 lg:w-1/3">
        <Box>
          <Link href={"/"}>
            <Image
              src={
                isMobile
                  ? "/images/Header/mobile-main-logo.png"
                  : "/images/Header/main-common-logo.svg"
              }
              alt="Logo"
              width={isMobile ? 150 : 250}
              height={isMobile ? 50 : 70}
            />
          </Link>
        </Box>
      </Box>

      {/* Navigation Links - For Desktop */}
      {!isMobile && (
        <Box className="flex justify-between mr-[1.5vw] w-1/2">
          <NavbarAceternity></NavbarAceternity>
          {/* <Box className="flex items-center justify-between w-full">
                        <Box className="text-center">
                            <Link href="/">
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '1.2vw',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            color: '#FFD700', // Gold color on hover
                                        },
                                    }}
                                >
                                    Home
                                </Typography>
                            </Link>
                        </Box>
                        <Box className="text-center">
                            <Link href="/#walling">
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '1.2vw',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            color: '#FFD700', // Gold color on hover
                                        },
                                    }}
                                >
                                    Walling
                                </Typography>
                            </Link>
                        </Box>
                        <Box className="text-center">
                            <Link href="/#paving">
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '1.2vw',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            color: '#FFD700', // Gold color on hover
                                        },
                                    }}
                                >
                                    Paving
                                </Typography>
                            </Link>
                        </Box>
                        <Box className="text-center">
                            <Link href="/portfolio">
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '1.2vw',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            color: '#FFD700', // Gold color on hover
                                        },
                                    }}
                                >
                                    Projects
                                </Typography>
                            </Link>
                        </Box>
                        <Box className="text-center">
                            <Link href="/contact">
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '1.2vw',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            color: '#FFD700', // Gold color on hover
                                        },
                                    }}
                                >
                                    Contact Us
                                </Typography>
                            </Link>
                        </Box>
                        <Box className="text-center">
                            <Link href="/faq">
                                <Typography
                                    variant="h3"
                                    color="#FFFFFF"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: '1.2vw',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            color: '#FFD700', // Gold color on hover
                                        },
                                    }}
                                >
                                    Consultations
                                </Typography>
                            </Link>
                        </Box>
                    </Box> */}
        </Box>
      )}

      {/* Mobile and Tablet Menu */}
      {(isMobile || isTablet) && <NavbarMenu />}
    </Box>
  );
};

export default Header;
