'use client';
import React, { useState, Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { useProgress } from '@react-three/drei';
import { Box, Typography, CircularProgress } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from '../../components/Header';
import '../page.css';
import Chimney from '../models/Chimney_model';
import House from '../models/House_model';
import Kitchen_splashback from '../models/Kitchen_splashback_model';
import Vertical_wall_bar from '../models/Vertical_wall_bar_model';
// import Retaining_wall from './models/Retaining_wall_model';
import Patios_pergolas from '../models/Patios_pergolas_model';
import Bathroom from '../models/Bathroom_model';
import Outside_Chimney from '../models/Outside_Chimney_model';
import Shower from '../models/Shower_model';
import Entry_wall from '../models/Entry_wall_model';
import Beachport from '../models/Beachport_model';
import TextureCarousel from '../../components/TextureChangeCarousel';
import Card3DEffect from '../../components/3dEffects/Card3DEffect';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      flexDirection='column'
    >
      <CircularProgress color='primary' />
      <Typography variant='h6' color='textSecondary' mt={2}>
        {progress.toFixed(0)}% Loaded
      </Typography>
    </Box>
  );
};

const Scene = ({
  modelPath,
  selectedBaseColor,
  selectedArm,
  selectedNormal,
  selectedHeight,
  isZoomPlus,
  rotateStatus
}: {
  modelPath: string;
  selectedBaseColor: string | null;
  selectedArm: string | null;
  selectedNormal: string | null;
  selectedHeight: string | null;
  isZoomPlus: boolean | false;
  rotateStatus: number | 0;
}) => {
  return (
    <Suspense fallback={<Loader />}>
      {
        modelPath === '/models/Chimney.glb' ? (
          <Chimney
            modelPath={modelPath}
            selectedBaseColor={selectedBaseColor}
            selectedArm={selectedArm}
            selectedNormal={selectedNormal}
            selectedHeight={selectedHeight}
            zoomStatus={isZoomPlus}
            rotateStatus={rotateStatus}
          />
        ) : modelPath === '/models/House.glb' ? (
          <House
            modelPath={modelPath}
            selectedBaseColor={selectedBaseColor}
            selectedArm={selectedArm}
            selectedNormal={selectedNormal}
            selectedHeight={selectedHeight}
            zoomStatus={isZoomPlus}
            rotateStatus={rotateStatus}
          />
        ) : modelPath === '/models/Kitchen-Splashback.glb' ? (
          <Kitchen_splashback
            modelPath={modelPath}
            selectedBaseColor={selectedBaseColor}
            selectedArm={selectedArm}
            selectedNormal={selectedNormal}
            selectedHeight={selectedHeight}
            zoomStatus={isZoomPlus}
            rotateStatus={rotateStatus}
          />
        ) : modelPath === '/models/Vertical-Wall-Bar.glb' ? (
          <Vertical_wall_bar
            modelPath={modelPath}
            selectedBaseColor={selectedBaseColor}
            selectedArm={selectedArm}
            selectedNormal={selectedNormal}
            selectedHeight={selectedHeight}
            zoomStatus={isZoomPlus}
            rotateStatus={rotateStatus}
          />
        )
          // : modelPath === '/models/retaining_wall.glb' ? (
          //     <Retaining_wall
          //         modelPath={modelPath}
          //         selectedBaseColor={selectedBaseColor}
          //         selectedArm={selectedArm}
          //         selectedNormal={selectedNormal}
          //         selectedHeight={selectedHeight}
          //     />
          // ) 
          : modelPath === '/models/Patios-Pergolas.glb' ? (
            <Patios_pergolas
              modelPath={modelPath}
              selectedBaseColor={selectedBaseColor}
              selectedArm={selectedArm}
              selectedNormal={selectedNormal}
              selectedHeight={selectedHeight}
              zoomStatus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          ) : modelPath === '/models/Bathroom.glb' ? (
            <Bathroom
              modelPath={modelPath}
              selectedBaseColor={selectedBaseColor}
              selectedArm={selectedArm}
              selectedNormal={selectedNormal}
              selectedHeight={selectedHeight}
              zoomStatus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          ) : modelPath === '/models/Outside-Chimney.glb' ? (
            <Outside_Chimney
              modelPath={modelPath}
              selectedBaseColor={selectedBaseColor}
              selectedArm={selectedArm}
              selectedNormal={selectedNormal}
              selectedHeight={selectedHeight}
              zoomStatus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          ) : modelPath === '/models/Shower.glb' ? (
            <Shower
              modelPath={modelPath}
              selectedBaseColor={selectedBaseColor}
              selectedArm={selectedArm}
              selectedNormal={selectedNormal}
              selectedHeight={selectedHeight}
              zoomStatus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          ) : modelPath === '/models/Entry-Wall.glb' ? (
            <Entry_wall
              modelPath={modelPath}
              selectedBaseColor={selectedBaseColor}
              selectedArm={selectedArm}
              selectedNormal={selectedNormal}
              selectedHeight={selectedHeight}
              zoomStatus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          ) : modelPath === '/models/Stones.glb' ? (
            <Beachport
              modelPath={modelPath}
              selectedBaseColor={selectedBaseColor}
              selectedArm={selectedArm}
              selectedNormal={selectedNormal}
              selectedHeight={selectedHeight}
              zoomStatus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          ) : (
            <></>
          )
      }
    </Suspense>
  );
};


const App = ({ params }: {
  params: { id: string }
}) => {
  const router = useRouter(); // Initialize useRouter here
  const id = params.id;
  // const models = ['/models/chimney.glb', '/models/house.glb'];
  const models = ['/models/Chimney.glb', '/models/House.glb', '/models/Kitchen-Splashback.glb', '/models/Vertical-Wall-Bar.glb', '/models/Patios-Pergolas.glb', '/models/Bathroom.glb', '/models/Outside-Chimney.glb', '/models/Shower.glb', '/models/Entry-Wall.glb', '/models/Stones.glb'];

  const modelImages = ["/images/modelImgs/Chimney.jpg", "/images/modelImgs/House.jpg", "/images/modelImgs/Kitchen-Splashback.jpg", "/images/modelImgs/Vertical-Wall-Bar.jpg", "/images/modelImgs/Patios-Pergolas.jpg", "/images/modelImgs/Bathroom.jpg", "/images/modelImgs/Outside-Chimney.jpg", "/images/modelImgs/Shower.jpg", "/images/modelImgs/Entry-Wall.jpg", "/images/modelImgs/Stones.jpg"]


  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  // Find the initial index based on the provided id when the component mounts
  useEffect(() => {
    const initialIndex = models.findIndex((model) => model.includes(id));
    setCurrentModelIndex(initialIndex !== -1 ? initialIndex : 0); // Set to 0 if not found
  }, [id]);

  // Set state for each texture individuall
  const [name, setName] = useState<string>('BEACHPORT');
  const [description, setDescription] = useState<string>('Beachport stone, as presented by Splendour in Stone, showcases a refined elegance with its natural quartz formation in a freeform style.');
  const [baseColor, setBaseColor] = useState<string>('/Project_textures/01_beachport/textures/beachport_basecolor.jpg');
  const [arm, setArm] = useState<string>('');
  const [normal, setNormal] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [isZoomPlus, setIsZoomPlus] = useState(false);
  const [rotateStatus, setRotateStatus] = useState(0);

  // Update individual textures when a new one is selected
  const handleTextureChange = (name: string, newBaseColor: string, newArm: string, newNormal: string, newHeight: string, newDescription: string) => {
    setName(name.slice(0, 9).toUpperCase());
    setDescription(newDescription);
    setBaseColor(newBaseColor);
    setArm(newArm);
    setNormal(newNormal);
    setHeight(newHeight);
  };


  // const handleTextureChange = (texturePath: string) => {
  //     setSelectedTexture(texturePath);
  // };

  // const handlePrevClick = () => {
  //   setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  // };

  const handlePrevClick = () => {
    setCurrentModelIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + models.length) % models.length; // Calculate new index
      console.log('model name :', models[newIndex])
      if (models[newIndex]) { // Check if the model exists
        router.push(`/visualizer/${models[newIndex].split('/').pop()?.split('.')[0]}`); // Use optional chaining
      }
      return newIndex; // Update state
    });
  };

  // const handleNextClick = () => {
  //   setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  // };

  const handleNextClick = () => {
    setCurrentModelIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % models.length; // Calculate new index
      console.log('model name :', models[newIndex])
      if (models[newIndex]) { // Check if the model exists
        router.push(`/visualizer/${models[newIndex].split('/').pop()?.split('.')[0]}`); // Use optional chaining
      }
      return newIndex; // Update state
    });
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleZoom = () => {
    setIsZoomPlus(!isZoomPlus);
  }

  const handleRotate = () => {
    setRotateStatus(val => (val + 1) % 3);
  }


  return (
    <Box className='relative h-screen w-screen'>
      {/* Full-screen Scene */}
      {isMobile ? (
        <>
          <Box className='absolute top-0 left-0 w-full z-10 px-4 space-y-2'>
            <Box className='mt-5'>
              <Header />
            </Box>
            <Box className='flex w-full justify-between'>
              <Box className='w-1/2'>
                <Box className='flex space-x-4'>
                  <Image
                    src={!isZoomPlus ? '/images/Visualizer/Navar/zoom-control.svg' : '/images/Visualizer/Navar/zoom-minus.svg'}
                    alt='Zoom Icon'
                    width={55}
                    height={55}
                    onClick={handleZoom}
                  />
                  <Image
                    src='/images/Visualizer/Navar/rotate-control.svg'
                    alt='Rotate Icon'
                    width={80}
                    height={55}
                    onClick={handleRotate}
                  />
                </Box>
              </Box>
              <Box className='flex flex-col items-end w-1/2'>
                <Box className='space-y-2 px-6'>
                  <Typography
                    className='font-normal text-start'
                    variant='h3'
                    color='#FFFFFF'
                    sx={{
                      fontWeight: 300,
                      lineHeight: 0.9,
                      fontFamily: 'var(--font-montserrat)',
                      fontSize: {
                        xs: '16px',
                        sm: '18px',
                        md: '20px',
                        lg: '24px',
                      },
                    }}
                  >
                    Category:<span style={{ color: '#DCC5BD' }}>{id}</span>
                  </Typography>
                  <Typography
                    className='font-normal text-start'
                    variant='h3'
                    color='#FFFFFF'
                    sx={{
                      fontWeight: 300,
                      lineHeight: 0.9,
                      fontFamily: 'var(--font-montserrat)',
                      fontSize: {
                        xs: '16px',
                        sm: '18px',
                        md: '20px',
                        lg: '24px',
                      },
                    }}
                  >
                    Tag:<span style={{ color: '#DCC5BD' }}>Exclusive</span>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className='w-full flex px-6 py-6'>
              <Image
                src='/images/Visualizer/static.jpg'
                alt='Image1'
                width={80}
                height={80}
                className='rounded-lg aspect-[1/1] w-[80px] h-[80px]'
              />
              <Box className='ml-4 flex flex-col justify-center items-center'>
                <Box className='flex w-full justify-start'>
                  <Typography
                    className='font-normal text-start'
                    variant='h3'
                    color='#FFFFFF'
                    sx={{
                      fontWeight: 400,
                      fontFamily: 'Chronicle Display',
                      fontSize: {
                        xs: '15px',
                        sm: '16px',
                        md: '20px',
                        lg: '24px',
                      },
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    className='font-normal text-start w-[80%]'
                    variant='h3'
                    color='#FFFFFF'
                    sx={{
                      fontWeight: 300,
                      lineHeight: '1',
                      fontFamily: 'var(--font-montserrat)',
                      fontSize: {
                        xs: '10px',
                        sm: '18px',
                        md: '20px',
                        lg: '24px',
                      },
                    }}
                  >
                    {/* Available in our freeform style, the Charlotte sandstone is made up of beautiful
                    soft hues such as cream, yellow and pink. */}
                    {description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className='absolute top-0 left-0 w-[100vw] z-0 h-[100vh]'>
            <Scene modelPath={models[currentModelIndex]} selectedBaseColor={baseColor}
              selectedArm={arm}
              selectedNormal={normal}
              selectedHeight={height}
              isZoomPlus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          </Box>
          <Box className='absolute top-700 left-0 z-10 px-4 w-[100vw] text-center space-y-5 bottom-8'>
            <Typography
              className='font-normal text-center'
              variant='h3'
              color='#FFFFFF'
              sx={{
                fontWeight: 400,
                lineHeight: 0.9,
                fontFamily: 'Chronicle Display',
                fontSize: {
                  xs: '36px',
                  sm: '45px',
                  md: '60px',
                  lg: '60px',
                },
              }}
            >
              {id}
            </Typography>
            <Typography
              className='font-normal text-center'
              variant='h3'
              color='#FFFFFF'
              sx={{
                fontWeight: 300,
                lineHeight: 0.9,
                fontFamily: 'var(--font-montserrat)',
                fontSize: {
                  xs: '16px',
                  sm: '18px',
                  md: '22px',
                  lg: '24px',
                },
              }}
            >
              Marble Charlotte and other to choose from
            </Typography>
            <Box className='flex justify-center mt-2 gap-x-2'>
              {/* {['stone1.png', 'stone2.png', 'stone3.png', 'stone4.png'].map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={`/images/About/Stones/${img}`}
                                    alt={`Stone ${idx + 1}`}
                                    width={78}
                                    height={78}
                                    className='cursor-pointer'
                                    onClick={() => handleTextureChange(`/textures/texture${idx + 1}.jpg`)}
                                />
                            ))} */}

              <TextureCarousel handleTextureChange={handleTextureChange} />
            </Box>
          </Box>
          <Box className='flex cursor-pointer z-50' onClick={handlePrevClick} id='leftScene'>
            <ArrowBackIosNewIcon sx={{ color: 'white' }} />
          </Box>
          <Box className='flex cursor-pointer' onClick={handleNextClick} id='rightScene'>
            <ArrowForwardIosIcon sx={{ color: 'white' }} />
          </Box>
        </>
      ) : (
        <>
          <Box className='absolute top-0 left-0 h-full w-full z-0 '>
            <Scene modelPath={`/models/${id}.glb`} selectedBaseColor={baseColor}
              selectedArm={arm}
              selectedNormal={normal}
              selectedHeight={height}
              isZoomPlus={isZoomPlus}
              rotateStatus={rotateStatus}
            />
          </Box>

          {/* Overlay components */}
          <Box className='absolute top-0 left-0 w-full z-10 px-20 py-10'>
            {/* Navbar */}
            <Box className='flex w-full justify-between '>
              <Box>
                <Link href='/'>
                  <Image
                    src='/images/Visualizer/Navar/main-logo.svg'
                    alt='Logo'
                    width={200}
                    height={60}
                  />
                </Link>
              </Box>
              <Box className='flex space-x-4'>
                <Image
                  src={!isZoomPlus ? '/images/Visualizer/Navar/zoom-control.svg' : '/images/Visualizer/Navar/zoom-minus.svg'}
                  alt='Zoom Icon'
                  width={55}
                  height={55}
                  onClick={handleZoom}
                  style={{ cursor: 'pointer' }}
                />
                <Image
                  src='/images/Visualizer/Navar/rotate-control.svg'
                  alt='Rotate Icon'
                  width={80}
                  height={55}
                  onClick={handleRotate}
                  style={{ cursor: 'pointer' }}
                />
              </Box>
            </Box>
          </Box>

          {/* Bottom Components */}
          <Box
            className='absolute bottom-0 left-0 w-full z-10 px-20 py-10'
            sx={{
              background: 'linear-gradient(to bottom, rgba(39, 59, 39, 0), rgba(39, 59, 39, 1))',
            }}
          >
            <Box className='flex w-full justify-between items-end mt-12'>
              {/* Left Section */}
              <Box className='w-1/4 flex'>
                <Image
                  // src='/images/Visualizer/static.jpg'
                  src={baseColor}
                  alt='Image1'
                  width={127}
                  height={127}
                  className='rounded-lg w-[100px] h-[100px]'
                />
                <Box className='ml-4 flex flex-col justify-center'>
                  <Typography
                    className='font-normal text-start'
                    variant='h3'
                    color='#FFFFFF'
                    sx={{
                      fontWeight: 400,
                      fontFamily: 'Chronicle Display',
                      fontSize: {
                        xs: '15px',
                        sm: '20px',
                        md: '25px',
                        lg: '30px',
                      },
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    className='font-normal text-start w-[80%]'
                    variant='h3'
                    color='#FFFFFF'
                    sx={{
                      fontWeight: 300,
                      fontFamily: 'var(--font-montserrat)',
                      fontSize: {
                        xs: '8px',
                        sm: '10px',
                        md: '12px',
                        lg: '12px',
                      },
                    }}
                  >
                    {/* Available in our freeform style, the Charlotte sandstone is made up of beautiful
                    soft hues such as cream, yellow and pink. */}
                    {description}
                  </Typography>
                </Box>
              </Box>

              {/* Center Section */}
              <Box className='w-1/3 text-center space-y-4'>
                <Typography
                  className='font-normal text-center'
                  variant='h3'
                  color='#FFFFFF'
                  sx={{
                    fontWeight: 400,
                    lineHeight: 0.9,
                    fontFamily: 'Chronicle Display',
                    fontSize: {
                      xs: '15px',
                      sm: '20px',
                      md: '25px',
                      lg: '30px',
                    },
                  }}
                >
                  {id}
                </Typography>
                <Typography
                  className='font-normal text-center'
                  variant='h3'
                  color='#FFFFFF'
                  sx={{
                    fontWeight: 300,
                    lineHeight: 0.9,
                    fontFamily: 'var(--font-montserrat)',
                    fontSize: {
                      xs: '10px',
                      sm: '10px',
                      md: '12px',
                      lg: '15px',
                    },
                  }}
                >
                  Marble Charlotte and other to choose from
                </Typography>
                <Box className='flex justify-center mt-2 gap-x-7'>
                  <TextureCarousel handleTextureChange={handleTextureChange} />
                  {/* {['stone1.png', 'stone2.png', 'stone3.png', 'stone4.png'].map((img, idx) => (
                                        <Image
                                            key={idx}
                                            src={`/images/About/Stones/${img}`}
                                            alt={`Stone ${idx + 1}`}
                                            width={80}
                                            height={80}
                                            className='cursor-pointer'
                                            onClick={() => handleTextureChange(`/textures/texture${idx + 1}.jpg`)}
                                        />
                                    ))} */}
                </Box>
              </Box>

              {/* <Box className='w-[15%]'></Box> */}

              {/* Right Section */}
              <Box className='w-1/4 flex justify-end'>
                <Box className='flex flex-col space-y-8'>
                  <Box className='space-y-2'>
                    <Typography
                      className='font-normal text-start'
                      variant='h3'
                      color='#FFFFFF'
                      sx={{
                        fontWeight: 300,
                        lineHeight: 0.9,
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: {
                          xs: '10px',
                          sm: '10px',
                          md: '12px',
                          lg: '15px',
                        },
                      }}
                    >
                      Category:<span style={{ color: '#DCC5BD' }}>{id}</span>
                    </Typography>
                    <Typography
                      className='font-normal text-start'
                      variant='h3'
                      color='#FFFFFF'
                      sx={{
                        fontWeight: 300,
                        lineHeight: 0.9,
                        fontFamily: 'var(--font-montserrat)',
                        fontSize: {
                          xs: '10px',
                          sm: '10px',
                          md: '12px',
                          lg: '15px',
                        },
                      }}
                    >
                      Tag:<span style={{ color: '#DCC5BD' }}>Exclusive</span>
                    </Typography>
                  </Box>
                  <Card3DEffect>
                    <Box className='flex w-full gap-x-5 items-center'>
                      {/* Previous Image */}
                      <Box className="relative group">
                        <Box className="flex flex-col items-center cursor-pointer"  onClick={handlePrevClick}>
                          <Image
                            src={modelImages[(currentModelIndex - 1 + modelImages.length) % modelImages.length]}
                            alt="Previous Model"
                            width={300}
                            height={300}
                            className="mb-4 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />
                          <Typography variant="caption" color="white" className="cursor-pointer">
                            Previous
                          </Typography>
                        </Box>
                      </Box>
                      <Box className='flex cursor-pointer items-center' onClick={handlePrevClick}>
                        <ArrowBackIosNewIcon sx={{ color: 'white' }} />
                      </Box>

                      <Box className='flex cursor-pointer items-center' onClick={handleNextClick}>
                        <ArrowForwardIosIcon sx={{ color: 'white' }} />
                      </Box>
                      {/* Next Image */}
                      <Box className="relative group">
                        <Box className='flex flex-col items-center cursor-pointer'  onClick={handleNextClick}>
                          <Image
                            src={modelImages[(currentModelIndex + 1) % modelImages.length]}
                            alt="Next Model"
                            width={300}
                            height={300}
                            className="mb-4 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />
                          <Typography variant='caption' color='white' className="cursor-pointer">Next</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card3DEffect>

                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default App;
