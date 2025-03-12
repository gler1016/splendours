'use client'
import * as React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterMobile from '../components/FooterMobile';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from 'react-responsive';
import Card3DEffect from '../components/3dEffects/Card3DEffect';


export default function ActionAreaCard() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    //   <CustomWallCard product_image_src="images/Home/PavingRange/product1.jpg" product_subname="PORPHYRY" />
    //   <CustomWallCard product_image_src="images/Home/PavingRange/product2.jpg" product_subname="QUARTZITE" />
    //   <CustomWallCard product_image_src="images/Home/PavingRange/product3.jpg" product_subname="MARBLE" />
    // </Box>
    // <Box className="flex flex-col md:flex-row justify-between w-full gap-y-7 md:gap-x-7">
    //   <CustomWallCard product_image_src="images/Home/PavingRange/product4.jpg" product_subname="LIMESTONE" />
    //   <CustomWallCard product_image_src="images/Home/PavingRange/product5.jpg" product_subname="GRANITE" />
    //   <CustomWallCard product_image_src="images/Home/PavingRange/product6.jpg" product_subname="BLUESTONE" />

    const modelList = [
        {
            name: "PORPHYRY",
            url: "images/Home/PavingRange/product1.jpg"
        },
        {
            name: "QUARTZITE",
            url: "images/Home/PavingRange/product2.jpg"
        },
        {
            name: "MARBLE",
            url: "images/Home/PavingRange/product3.jpg"
        },
        {
            name: "LIMESTONE",
            url: "images/Home/PavingRange/product4.jpg"
        },
        {
            name: "GRANITE",
            url: "images/Home/PavingRange/product5.jpg"
        },
        {
            name: "BLUESTONE",
            url: "images/Home/PavingRange/product6.jpg"
        },
    ]

    return (
        <>
            <Box className="flex items-center w-full px-3" sx={{ height: '15hv' }}>
                <Box
                    className='flex items-center w-full px-3'
                    sx={{ height:isMobile ? '15vh' : '40vh', borderTop: isMobile ? '1px solid #1E1E1E' : 'none' }}
                >
                    <Header />
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1, paddingBottom: isMobile ? "30px" : '0px', marginBottom: '70px' }} className="w-full lg:p-24 md:p-12 sm:p-8">
                <Grid container spacing={2}>
                    {modelList.map((item, index) => (
                        <Grid item lg={2.4} md={3} sm={6} xs={8} style={{ margin: "auto" }} key={index}>
                            <Link href={`${item.url}`} passHref>
                            <Card3DEffect >
                                <Card className="rounded-lg" style={{ backgroundColor: '#DCC5BD', border: '3px solid #DCC5BD' }}>
                                    <CardActionArea>
                                        <Card3DEffect>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.url}
                                            alt={item.name}
                                        />
                                        <CardContent>
                                        <Card3DEffect>

                                            <Typography gutterBottom variant="h6" color="#283C28" component="div" sx={{ fontFamily: 'Chronicle Display', fontStyle: 'italic' }}>
                                                {item.name}
                                            </Typography>
                                            </Card3DEffect>
                                        </CardContent>
                                        </Card3DEffect>
                                    </CardActionArea>
                                </Card>
                                </Card3DEffect>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {isMobile ? <FooterMobile /> : <Footer />}

        </>

    );
}
