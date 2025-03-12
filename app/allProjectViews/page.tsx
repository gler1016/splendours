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


  // {
  //   "resources": [
  //     {
  //       "product_name": "PARK ON PARK",
  //       "product_subname":"JAMIESON",
  //       "product_content":"Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.",
  //       "imageUrl": "images/Splendours_Products/main_products/product1.png",
  //       "subImageUrl":"images/Splendours_Products/sub_products/product1.png"
  //     },
  //     {
  //       "product_name": "SPLENDOURS PROJECTS",
  //       "product_subname":"CHARLOTTE",
  //       "product_content":"Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.",
  //       "imageUrl": "images/Splendours_Products/main_products/product2.png",
  //       "subImageUrl":"images/Splendours_Products/sub_products/product2.png"
  //     },
  //     {
  //       "product_name": "SPLENDOURS PROJECTS",
  //       "product_subname":"SILVER TRAVERTINE",
  //       "product_content":"Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.",
  //       "imageUrl": "images/Splendours_Products/main_products/product3.png",
  //       "subImageUrl":"images/Splendours_Products/sub_products/product3.png"
  //     },
  //     {
  //       "product_name": "STELLA MARIS",
  //       "product_subname":"ATLANTIC MARBLE",
  //       "product_content":"Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.",
  //       "imageUrl": "images/Splendours_Products/main_products/product4.png",
  //       "subImageUrl":"images/Splendours_Products/sub_products/product4.png"
  //     }
  //   ]
  // }


  const modelList = [
    {
      name: "PARK ON PARK",
      url: "images/Splendours_Products/main_products/product1.png",
      img_url: "https://www.splendourinstone.com.au/product/jamieson/"
    },
    {
      name: "SPLENDOURS PROJECTS",
      url: "images/Splendours_Products/main_products/product2.png",
      img_url: "https://www.splendourinstone.com.au/product/buffalo/"
    },
    {
      name: "SPLENDOURS PROJECTS",
      url: "images/Splendours_Products/main_products/product3.png",
      img_url: "https://www.splendourinstone.com.au/product/charlotte/"
    },
    {
      name: "STELLA MARIS",
      url: "images/Splendours_Products/main_products/product4.png",
      img_url: "https://www.splendourinstone.com.au/product/beloka/"
    }
  ]

  return (
    <>
      <Box className="flex items-center w-full px-3" sx={{ height: '15hv' }}>
        <Box
          className='flex items-center w-full px-1'
          sx={{ height: isMobile ? '15vh' : '40vh', borderTop: isMobile ? '1px solid #1E1E1E' : 'none' }}
        >
          <Header />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, paddingBottom: isMobile ? "30px" : '0px', marginBottom: '70px' }} className="w-full lg:p-24 md:p-12 sm:p-8">
        <Grid container spacing={2}>
          {modelList.map((item, index) => (
            <Grid item lg={2.4} md={3} sm={6} xs={8} style={{ margin: "auto" }} key={index}>
              <Link href={`${item.img_url}`} passHref>
              <Card3DEffect>
                <Card className="rounded-lg" style={{ backgroundColor: '#DCC5BD', border: '3px solid #DCC5BD' }}>
                <Card3DEffect>

                  <CardActionArea>
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
