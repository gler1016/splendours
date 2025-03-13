import * as React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';
import Card3DEffect from './3dEffects/Card3DEffect';

interface CustomWallCardProps {
    product_image_src: string,
    product_subname: string
}

const CustomWallCard: React.FC<CustomWallCardProps> = ({ product_image_src, product_subname }) => {
    return (
        <Card3DEffect>
            <Card
                className='w-full aspect-[1.23/1] relative transition-transform duration-300 ease-in-out '
                style={{ backgroundImage: `url(${product_image_src})`, borderRadius: '25px', backgroundSize: 'cover' }}
            >
                <CardContent sx={{
                    display: 'flex', alignContent: 'space-between', flexWrap: 'wrap', height: '100%', paddingY: '10%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))',
                    borderRadius: 'inherit'
                }}>
                    <Box sx={{ width: '100%', height: '100%', padding: '3%' }}>
                        <Typography
                            variant="h3"
                            color="#DBC6BC"
                            className="absolute bottom-7 left-7"
                            sx={{
                                fontWeight: 300,
                                alignContent: 'flex-start',
                                fontFamily: 'Chronicle Display',
                                fontStyle: 'italic',
                                fontSize: {
                                    xs: "15px",
                                    sm: "22px",  // Small screens
                                    md: "35px",  // Medium screens
                                    lg: "50px"
                                }
                            }}
                        >
                            {product_subname}
                        </Typography>
                    </Box>
                </CardContent>
            </Card >
        </Card3DEffect>
    );
}

export default CustomWallCard;
