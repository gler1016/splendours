import React from 'react';
import Carousel from './CarouselPart';
import { Box } from '@mui/system';


const items = [
    { imageUrl: '/images/Portfolio/materials/material1.png', name: 'OUTDOOR', alt: 'Image 1' },
    { imageUrl: '/images/Portfolio/materials/material2.png', name: 'FIREPLACE', alt: 'Image 2' },
    { imageUrl: '/images/Portfolio/materials/material3.png', name: 'DINNING ROOM', alt: 'Image 3' },
    { imageUrl: '/images/Portfolio/materials/material4.png', name: 'POOLSIDE', alt: 'Image 4' },
];

const MaterialMobileCarousel = () => {
    return (
        <Box>
            <Carousel items={items} options={{ align: 'start' }} />
        </Box>
    );
};

export default MaterialMobileCarousel;
