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
      name: "Chimney",
      url: "images/modelImgs/Chimney.jpg"
    },
    {
      name: "House",
      url: "images/modelImgs/House.jpg"
    },
    {
      name: "Kitchen-Splashback",
      url: "images/modelImgs/Kitchen-Splashback.jpg"
    },
    {
      name: "Vertical-Wall-Bar",
      url: "images/modelImgs/Vertical-Wall-Bar.jpg"
    },
    {
      name: "Patios-Pergolas",
      url: "images/modelImgs/Patios-Pergolas.jpg"
    },
    {
      name: "Bathroom",
      url: "images/modelImgs/Bathroom.jpg"
    },
    {
      name: "Outside-Chimney",
      url: "images/modelImgs/Outside-Chimney.jpg"
    },
    {
      name: "Shower",
      url: "images/modelImgs/Shower.jpg"
    },
    {
      name: "Entry-Wall",
      url: "images/modelImgs/Entry-Wall.jpg"
    },
    {
      name: "Stones",
      url: "images/modelImgs/Stones.jpg"
    }
    // {
    //   name: "Fireplaces",
    //   url: "images/modelImgs/firewall.jpg"
    // },
    // {
    //   name: "Retaining-Wall",
    //   url: "images/modelImgs/retain.jpg"
    // },
  ]

  return (
    <>
      <Box className="flex items-center w-full px-3" sx={{ height: '15hv' }}>
        <Box
          className='flex items-center w-full '
          sx={{ height:isMobile ? '15vh' : '40vh', padding:isMobile ? '3px' : '0px', borderTop: isMobile ? '1px solid #1E1E1E' : 'none' }}
        >
          <Header />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, paddingBottom: isMobile ? "30px" : '0px',marginBottom:'70px' }} className="w-full lg:p-24 md:p-12 sm:p-8">
        <Grid container spacing={2}>
          {modelList.map((item, index) => (
            <Grid item lg={2.4} md={3} sm={6} xs={8} style={{ margin: "auto" }} key={index}>
              <Link href={`/visualizer/${item.name}`} passHref>
              <Card3DEffect>
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
                      <Card3DEffect>
                      <Typography gutterBottom variant="h6" color="#283C28" component="div" sx={{ fontFamily: 'Chronicle Display', fontStyle: 'italic' }}>
                        {item.name}
                      </Typography>
                      </Card3DEffect>
                    </CardContent>
                  </CardActionArea>
                  </Card3DEffect>
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
