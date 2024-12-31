'use client'
import * as React from 'react';
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
import Link from 'next/link'; // Import Link for navigation


export default function ActionAreaCard() {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const modelList = [
    {
      name: "Table",
      url: "images/modelImgs/table.jpg"
    },
    {
      name: "Bathroom",
      url: "images/modelImgs/bathroom.png"
    },
    {
      name: "Entry wall",
      url: "images/modelImgs/fire.jpg"
    },
    {
      name: "Fireplaces",
      url: "images/modelImgs/firewall.png"
    },
    {
      name: "Kitchen",
      url: "images/modelImgs/kitchen.png"
    },
    {
      name: "Outside Chimney",
      url: "images/modelImgs/outside.png"
    },
    {
      name: "Patios Pergolas",
      url: "images/modelImgs/patio.png"
    },
    {
      name: "Retaining Wall",
      url: "images/modelImgs/retain.png"
    },
    {
      name: "Shower",
      url: "images/modelImgs/shower.png"
    },
    {
      name: "Virtical Wall",
      url: "images/modelImgs/virtual.png"
    },
    {
      name: "Wall",
      url: "images/modelImgs/wall.png"
    },
    {
      name: "Stones",
      url: "images/modelImgs/textures.png"
    }
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
            <Grid item lg={2} md={3} sm={6} xs={8} style={{ margin: "auto" }}>
              <Link href={`/visualizer`} passHref>
                <Card className="bg-[#DCC5BD] rounded-lg">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.url}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" color="#283C28" component="div" sx={{ fontFamily: 'Chronicle Display',fontStyle:'italic' }}>
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
