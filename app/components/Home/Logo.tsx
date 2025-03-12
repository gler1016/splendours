import { useTheme, useMediaQuery } from '@mui/material';
import {Box} from '@mui/material';
import Image from 'next/image';
const Logo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const logoSrc = isMobile
        ? '/images/Header/mobile-main-logo.png'
        : '/images/Header/main-logo.svg';

    return (
        <Box
            sx={{
                width: { xs: 151, sm: 250, md: 300 },
                height: { xs: 47, sm: 60, md: 70 },
                position: 'relative',
            }}
        >
            <Image
                src={logoSrc}
                alt="Logo"
                width={isMobile ? 151 : 250}
                height={isMobile ? 47 : 60}
                style={{ objectFit: 'contain' }}
                priority
            />
        </Box>
    );
};

export default Logo;
