'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Typography } from '@mui/material'

const NavbarMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative">
            {/* Menu Button */}
            <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menu Overlay */}
            {isMenuOpen && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-lg z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={toggleMenu}
                >
                    <motion.div
                        className="absolute top-0 right-0 h-full w-64 bg-[#283c28] p-6"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <ul className="space-y-4">
                            <li>
                                <Link href="/">
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            fontWeight: 500,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '18px',
                                            '&:hover': {
                                                color: '#FFD700',
                                            },
                                        }}
                                    >
                                        HOME
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#walling">
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            fontWeight: 500,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '18px',
                                            '&:hover': {
                                                color: '#FFD700',
                                            },
                                        }}
                                    >
                                        WALLING
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#paving">
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            fontWeight: 500,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '18px',
                                            '&:hover': {
                                                color: '#FFD700',
                                            },
                                        }}
                                    >
                                        PAVING
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            fontWeight: 500,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '18px',
                                            '&:hover': {
                                                color: '#FFD700',
                                            },
                                        }}
                                    >
                                        ABOUT
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            fontWeight: 500,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '18px',
                                            '&:hover': {
                                                color: '#FFD700',
                                            },
                                        }}
                                    >
                                        CONTACT
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <Typography
                                        variant="h3"
                                        color="#DBC6BC"
                                        sx={{
                                            fontWeight: 500,
                                            fontFamily: 'var(--font-montserrat)',
                                            fontSize: '18px',
                                            '&:hover': {
                                                color: '#FFD700',
                                            },
                                        }}
                                    >
                                        FREE MEASURE & QUOTE
                                    </Typography>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default NavbarMenu