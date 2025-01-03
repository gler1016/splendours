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


export default function ActionAreaCard() {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  const modelList = [
    {
      name: "Chimney",
      url: "images/modelImgs/Chimney.png"
    },
    {
      name: "House",
      url: "images/modelImgs/House.png"
    },
    {
      name: "Kitchen-Splashback",
      url: "images/modelImgs/Kitchen-Splashback.png"
    },
    {
      name: "Vertical-Wall-Bar",
      url: "images/modelImgs/Vertical-Wall-Bar.png"
    },
    {
      name: "Patios-Pergolas",
      url: "images/modelImgs/Patios-Pergolas.png"
    },
    {
      name: "Bathroom",
      url: "images/modelImgs/Bathroom.png"
    },
    {
      name: "Outside-Chimney",
      url: "images/modelImgs/Outside-Chimney.png"
    },
    {
      name: "Shower",
      url: "images/modelImgs/Shower.png"
    },
    {
      name: "Entry-Wall",
      url: "images/modelImgs/Entry-Wall.png"
    },
    {
      name: "Stones",
      url: "images/modelImgs/Stones.png"
    }
    // {
    //   name: "Fireplaces",
    //   url: "images/modelImgs/firewall.png"
    // },
    // {
    //   name: "Retaining-Wall",
    //   url: "images/modelImgs/retain.png"
    // },
  ]

  return (
    <>
      <Box className="flex items-center w-full px-3" sx={{ height: '15hv' }}>
        <Box
          className='flex items-center w-full px-3'
          sx={{ height: '15vh', borderTop: isMobile ? '1px solid #1E1E1E' : 'none' }}
        >
          <Header />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, paddingBottom: isMobile ? "30px" : '0px' }} className="w-full lg:p-24 md:p-12 sm:p-8">
        <Grid container spacing={2}>
          {modelList.map((item, index) => (
            <Grid item lg={2.4} md={3} sm={6} xs={8} style={{ margin: "auto" }} key={index}>
              <Link href={`/visualizer/${item.name}`} passHref>
                <Card className="bg-[#DCC5BD] rounded-lg" style={{border:'3px solid #DCC5BD'}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.url}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" color="#283C28" component="div" sx={{ fontFamily: 'Chronicle Display', fontStyle: 'italic' }}>
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
      </Box>
      {isMobile ? <FooterMobile /> : <Footer />}

    </>

  );
}
