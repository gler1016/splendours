"use client"; // This line makes this file a client component in Next.js

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FullCustomGreenDivider from '../components/Divider/FullCustomGreenDivider'
import FloatingDock from './3dEffects/FloatingDock' // Import the FloatingDock component
const Footer = () => {
    return (
        <Box
            className="relative flex flex-col w-full px-16 rounded-t-[35px]"
            sx={{
                backgroundImage: 'url(images/FooterIcon/background.jpg)', // Add your image path here
                backgroundSize: 'cover', // Ensures the background image covers the entire area
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents repeating the background image
                // color:'#DBC6BC',
            }}
        >
            <Box className="flex w-full justify-between py-12">
                <Box className="flex w-1/4  ">
                    <Box>
                        <Image
                            src="/images/Footer/splendour logo rounded.svg"
                            alt="Logo"
                            width={182}
                            height={182}
                        />
                    </Box>
                </Box>
                <Box className="w-1/6"></Box>
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
                                },
                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                "&:hover": {
                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                },
                            }}
                        >
                            LINKS
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '0px', color: '#283C28' }}>
                                <li>
                                    <Link href="/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            HOME
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.splendourinstone.com.au/walling/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            WALLING
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            PORTFOLIO
                                        </Typography>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="https://www.splendourinstone.com.au/paving/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            PAVING
                                        </Typography>
                                    </Link>
                                </li> */}
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '10px', color: '#283C28' }}>
                            <li>
                                    <Link href="https://www.splendourinstone.com.au/paving/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            PAVING
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.splendourinstone.com.au/blog/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            BLOG
                                        </Typography>
                                    </Link>
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
                                },
                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                "&:hover": {
                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                },
                            }}
                        >
                            INFO
                        </Typography>
                    </Box>
                    <Box className="flex w-full">
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '0px', color: '#283C28' }}>
                                <li>
                                    <Link href="/about">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            ABOUT
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.splendourinstone.com.au/gallery/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            GALLERY
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            FAQ
                                        </Typography>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="https://www.splendourinstone.com.au/consultation/ ">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            CONSULTATION
                                        </Typography>
                                    </Link>
                                </li> */}
                            </ul>
                        </Box>
                        <Box className="flex w-1/2">
                            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '45px', color: '#283C28' }}>
                                {/* <li>
                                    <Link href="/faq">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            FAQs
                                        </Typography>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/services">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            SERVICES
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            CONTACT
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.splendourinstone.com.au/consultation/ ">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            CONSULTATION
                                        </Typography>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="https://staging.splendourinstone.com.au/reclaimed-bricks/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            BRICKS
                                        </Typography>
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="https://staging.splendourinstone.com.au/cobble-stones/">
                                        <Typography
                                            variant="h4"
                                            color="#283C28"
                                            className="font-semibold"
                                            sx={{
                                                fontFamily: 'var(--font-montserrat)',
                                                fontSize: {
                                                    xs: '14px',
                                                    sm: '14px',
                                                    md: '14px',
                                                    lg: '15px',
                                                },
                                                fontWeight: 300,
                                                textAlign: 'start',
                                                transition: "transform 0.3s ease", // Smooth transition for the hover effect
                                                "&:hover": {
                                                    transform: "translateX(10px)", // Move 10px to the right on hover
                                                },
                                            }}
                                        >
                                            COBBLESTONE
                                        </Typography>
                                    </Link>
                                </li> */}
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <FullCustomGreenDivider />
            <Box className="flex w-full justify-between pt-10 pb-16">
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
                            margintop: "10px",
                            fontSize: {
                                xs: "14px",
                                sm: "16px",  // Small screens
                                md: "14px",  // Medium screens
                                lg: "18px"
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