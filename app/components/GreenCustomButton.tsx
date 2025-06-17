// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const GreenCustomButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
    const theme = useTheme(); // Use Material-UI theme for consistent breakpoints
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile: screen width < 600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablet: 600px <= width < 960px

    return (
        <Button
            className="font-semibold gap-3 text-[14px]"
            variant="outlined"
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: { xs: "160px", sm: "200px", md: "200px"}, // Responsive width
                height: { xs: "42px", sm: "42px", md: "42px", lg: "42px"}, // Responsive height
                borderRadius: '50px',
                color: '#DBC6BC',
                fontSize: isMobile ? '16px' : isTablet ? '24px' : '24px', // Responsive font size
                fontWeight: 500,
                fontFamily: 'var(--font-montserrat)',
                backgroundColor: '#283C28', // Default background color
                borderColor: 'transparent', // Border color
                textTransform: 'none',
                px: isMobile ? '10px' : '12px', // Increase horizontal padding
                '&:hover': {
                    backgroundColor: '#283C28', // Hover background color
                    color: '#DCC5BD', // Hover font color
                    borderColor: '#283C28', // Hover border matches hover background
                },
            }}
        >
            <span>{label}</span>
            <Image
                src={iconSrc}
                alt="Button Icon"
                width={isMobile ? 25 : isTablet ? 28 : 30}
                height={isMobile ? 25 : isTablet ? 28 : 30}
                style={{
                    filter: 'brightness(0) saturate(100%) invert(89%) sepia(10%) saturate(320%) hue-rotate(15deg) brightness(93%) contrast(90%)',
                }}
            />
        </Button>
    );
};

export default GreenCustomButton;
