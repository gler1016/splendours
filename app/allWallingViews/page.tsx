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

    const modelList = [
        {
            name: "BEACHPORT",
            url: "Project_textures/01_beachport/textures/beachport_basecolor.jpg"
        },
        {
            name: "ATLANTIC FRENCH",
            url: "Project_textures/02_Atlantic_marble_french/textures/atlantic_french_basecolor.jpg"
        },
        {
            name: "BELOKA",
            url: "Project_textures/03_beloka/textures/beloka_basecolor.jpg"
        },
        {
            name: "BLANCO",
            url: "Project_textures/04_blanco/textures/blanco_basecolor.jpg"
        },
        {
            name: "BLUESTONE FLAMED",
            url: "Project_textures/06_bluestone_flamed/textures/bluestone1_basecolor.jpg"
        },
        {
            name: "BLUESTONE SAWN",
            url: "Project_textures/07_bluestone_sawn/textures/bluestone_sawn_basecolor.jpg"
        },
        {
            name: "BUFFALO",
            url: "Project_textures/08_buffalo/textures/buffalo_basecolor.jpg"
        },
        {
            name: "CHARLOTTE",
            url: "Project_textures/09_charlotte/textures/Charlotte_basecolor.jpg"
        },
        {
            name: "GRANGE",
            url: "Project_textures/10_grange/textures/grange_basecolor.jpg"
        },
        {
            name: "JAMIESON",
            url: "Project_textures/12_jamieson/textures/jamieson_basecolor.jpg"
        },
        {
            name: "JASPER",
            url: "Project_textures/13_jasper/textures/jasper_basecolor.jpg"
        },
        {
            name: "MARAKESH",
            url: "Project_textures/14_marakesh/textures/marakesh_basecolor.jpg"
        },
        {
            name: "PORPHYRY CRAZY",
            url: "Project_textures/15_porphyry_crazy/textures/porphyry_crazy_basecolor.jpg"
        },
        {
            name: "QUARTZ",
            url: "Project_textures/16_quartz/textures/quartz_basecolor.jpg"
        },
        {
            name: "ROMAN",
            url: "Project_textures/17_roman/textures/roman_basecolor.jpg"
        },
        {
            name: "SHOREHAM",
            url: "Project_textures/18_shoreham/textures/shoreham_basecolor.jpg"
        },
        {
            name: "SIENNA CRAZY",
            url: "Project_textures/19_sienna_crazy/textures/sienna_crazy_basecolor.jpg"
        },
        {
            name: "SIENNA SANDBLAST",
            url: "Project_textures/20_sienna_sandblast/textures/sienna_sandblast_basecolor.jpg"
        },
        {
            name: "STIRLING",
            url: "Project_textures/21_stirling/textures/stirling_basecolor.jpg"
        },
        {
            name: "TRAVERTINE IVORY",
            url: "Project_textures/22_travertine_ivory/textures/travertine_ivory_basecolor.jpg"
        },
        // {
        //     name: "TUSCANO",
        //     url: "Project_textures/23_tuscano/textures/tuscano_basecolor.jpg"
        // },
    ]

    return (
        <>
            <Box className="flex items-center w-full px-3" sx={{ height: '15hv' }}>
                <Box
                    className='flex items-center w-full '
                    sx={{ height:isMobile ? '15vh' : '40vh', padding: isMobile ? '3px' : '0px', borderTop: isMobile ? '1px solid #1E1E1E' : 'none' }}
                >
                    <Header />
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1, paddingBottom: isMobile ? "30px" : '0px', marginBottom: '70px' }} className="w-full lg:p-24 md:p-12 sm:p-8">
                <Grid container spacing={2}>
                    {modelList.map((item, index) => (
                        <Grid item lg={2.4} md={3} sm={6} xs={8} style={{ margin: "auto" }} key={index}>
                            <Link href={`${item.url}`} passHref>
                                <Card className="rounded-lg" style={{ backgroundColor: '#DCC5BD', border: '3px solid #DCC5BD' }}>
                                <Card3DEffect>
                                <CardActionArea>
                                        <Card3DEffect>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.url}
                                            alt={item.name}
                                        />
                                        </Card3DEffect>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="#283C28" component="div" sx={{ fontFamily: 'Chronicle Display', fontStyle: 'italic' }}>
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    </Card3DEffect>

                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {isMobile ? <FooterMobile /> : <Footer />}

        </>

    );
}