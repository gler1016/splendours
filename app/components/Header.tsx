'use client'
import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@mui/material'
import NavbarMenu from './3dEffects/NavbarMenu' // Import the NavbarMenu component
// import NavbarAceternity from './3dEffects/NavbarAceterniy'
import SplendoursOldHeader from './Home/SplendoursOldHeader'
const Header: React.FC = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)') // Media query for mobile
    const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)')

    // const handleMenuToggle = () => {
    //     setIsMenuOpen(!isMenuOpen)
    // }

    return (
        <Box className="flex items-center justify-between w-full h-full ">
           { isMobile && 
           <Box className="flex w-1/2 md:w-1/3 lg:w-1/3">
        
                <Box>
                    <Link href={'/'}>
                    <p className="text-xs-custom leading-tight-custom text-customColor font-semibold text-center">
                    REGISTER YOUR INFORMATION FOR FREE STONE SAMPLES SENT EXPRESS TO YOU!
                        </p>
                        <Image
                            src={isMobile ? '/images/Header/mobile-main-logo.png' : '/images/Header/main-common-logo.svg'}
                            alt="Logo"
                            width={isMobile ? 150 : 250}
                            height={isMobile ? 50 : 70}
                        />
                    </Link>
                </Box>
            </Box>}

            {/* Navigation Links - For Desktop */}
            {!isMobile && (
                <Box >
                   <SplendoursOldHeader></SplendoursOldHeader>
                </Box>
            )}

            {/* Mobile and Tablet Menu */}
            {(isMobile || isTablet) && <NavbarMenu />}
        </Box>
    )
}

export default Header