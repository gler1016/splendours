"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider'
import FloatingDock from './3dEffects/FloatingDock' // Import the FloatingDock component
import LinkWrapper from "./3dEffects/LinkWrapper";

const Footer = () => {
    return (
        <Box
            className="relative flex flex-col w-full px-16 rounded-t-[35px]"
            sx={{
                backgroundImage: 'url(images/FooterIcon/background.jpg)', // Add your image path here
                backgroundSize: 'cover', // Ensures the background image covers the entire area
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents repeating the background image
            }}
        >
            <Box className="flex w-full justify-between py-12">
                <Box className="flex w-1/4">
                    <Box>
                        <Image
                            src="/images/FooterIcon/footer-logo.svg"
                            alt="Logo"
                            width={182}
                            height={182}
                        />
                    </Box>
                </Box>
                <Box className="w-1/6">
                </Box>
                <Box className="flex flex-col w-1/4 justify-center gap-3">
                    <Box className="flex w-3/7">
                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "12px",
                                    sm: "25px",  // Small screens
                                    md: "30px",  // Medium screens
                                    lg: "50px"
                                }
                            }}
                        >
                            LINKS
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>
                                    <LinkWrapper href="/" previewImage="/images/LinkhoverImages/home.png">
                                    <Link href="/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >HOME</Typography>
                                    </Link>
                                    </LinkWrapper>
                                </li>
                                <li>

                                    <Link href="https://www.splendourinstone.com.au/walling/">
                                    <LinkWrapper href="https://www.splendourinstone.com.au/walling/" previewImage="/images/LinkhoverImages/wallingLink.png">

                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            WALLING
                                        </Typography>
                                        </LinkWrapper>

                                    </Link>
                                </li>
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>
                                <LinkWrapper href="https://www.splendourinstone.com.au/walling/" previewImage="/images/LinkhoverImages/pavving.png">

                                    <Link href="https://www.splendourinstone.com.au/paving/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            PAVING
                                        </Typography>
                                    </Link>
                                    </LinkWrapper>
                                </li>
                                <li>
                                <LinkWrapper href="https://www.splendourinstone.com.au/gallery/" previewImage="/images/LinkhoverImages/blog.png">
                                    <Link href="https://www.splendourinstone.com.au/gallery/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            BLOG
                                        </Typography>
                                    </Link>
                                    </LinkWrapper>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
                <Box className="flex flex-col w-1/4 justify-center gap-3">
                    <Box className="flex w-3/7">

                        <Typography
                            variant="h3"
                            color="#283C28"
                            sx={{
                                fontWeight: 400,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "12px",
                                    sm: "25px",  // Small screens
                                    md: "30px",  // Medium screens
                                    lg: "50px"
                                }
                            }}
                        >
                            INFO
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>

                                    <Link href="/about">
                                    <LinkWrapper href="https://www.splendourinstone.com.au/gallery/" previewImage="/images/LinkhoverImages/about.png">

                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >ABOUT</Typography>
                                                                            </LinkWrapper>

                                    </Link>
                                </li>
                                <li>
                                <LinkWrapper href="https://www.splendourinstone.com.au/gallery/" previewImage="/images/LinkhoverImages/gallery.png">

                                    <Link href="https://www.splendourinstone.com.au/gallery/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            GALLERY
                                        </Typography>
                                    </Link>
                                    </LinkWrapper>
                                </li>
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#283C28' }}>
                                <li>
                                    <Link href="/contact">
                                    <LinkWrapper href="https://www.splendourinstone.com.au/gallery/" previewImage="/images/LinkhoverImages/gallery.png">
                                    <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            CONTACT
                                        </Typography>
                                        </LinkWrapper>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                    <LinkWrapper href="https://www.splendourinstone.com.au/gallery/" previewImage="/images/LinkhoverImages/getintouch.png">

                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '8px',
                                                    sm: '10px',
                                                    md: '12px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                            }}
                                        >
                                            CONSULTATION
                                        </Typography>
                                        </LinkWrapper>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <FullCustomGreenDivider />

            <Box className="flex w-full justify-between pt-10 pb-16">
                {/* Replace the social media icons with the FloatingDock component */}
                <FloatingDock />

                <Box className="flex p-7">
                    <Typography
                        variant="h3"
                        color="#283C28"
                        sx={{
                            fontWeight: 600,
                            alignContent: 'flex-start',
                            justifyContent: 'flex-end',
                            fontFamily: 'Chronicle Display',
                            margintop:"10px",
                            fontSize: {
                                xs: "8px",
                                sm: "14px",  // Small screens
                                md: "18px",  // Medium screens
                                lg: "22px"
                            }
                        }}
                    >
                        SPLENDOUR IN STONE 2024 © <span className="font-light">ALL RIGHTS RESERVED</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;