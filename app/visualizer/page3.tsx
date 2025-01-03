'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { useProgress } from '@react-three/drei';
import { Box, Typography, CircularProgress } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from '../components/Header';
import './page.css';
import Chimney from './models/Chimney_model';
import House from './models/House_model';
import KitchenSplashback from './models/Kitchen_splashback_model';
import VerticalWallBar from './models/Vertical_wall_bar_model';
import PatiosPergolas from './models/Patios_pergolas_model';
import Bathroom from './models/Bathroom_model';
import OutsideChimney from './models/Outside_Chimney_model';
import Shower from './models/Shower_model';
import EntryWall from './models/Entry_wall_model';
import Beachport from './models/Beachport_model';
import TextureCarousel from '../components/TextureChangeCarousel';

// Map model names to their respective paths
const modelMapping: { [key: string]: string } = {
    chimney: '/models/chimney.glb',
    house: '/models/house.glb',
    kitchen_splashback: '/models/Kitchen_splashback.glb',
    vertical_wall_bar: '/models/Vertical_wall_bar.glb',
    patios_pergolas: '/models/Patios_pergolas.glb',
    bathroom: '/models/bathroom.glb',
    outside_chimney: '/models/Outside_Chimney.glb',
    shower: '/models/Shower.glb',
    entry_wall: '/models/Entry_wall.glb',
    beachport: '/models/beachport.glb',
};

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh' flexDirection='column'>
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
    isZoomPlus: boolean;
    rotateStatus: number;
}) => {
    return (
        <Suspense fallback={<Loader />}>
            {modelPath === modelMapping.chimney ? (
                <Chimney
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                    zoomStatus={isZoomPlus}
                    rotateStatus={rotateStatus}
                />
            ) : modelPath === modelMapping.house ? (
                <House
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.kitchen_splashback ? (
                <KitchenSplashback
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.vertical_wall_bar ? (
                <VerticalWallBar
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.patios_pergolas ? (
                <PatiosPergolas
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.bathroom ? (
                <Bathroom
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.outside_chimney ? (
                <OutsideChimney
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.shower ? (
                <Shower
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.entry_wall ? (
                <EntryWall
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : modelPath === modelMapping.beachport ? (
                <Beachport
                    modelPath={modelPath}
                    selectedBaseColor={selectedBaseColor}
                    selectedArm={selectedArm}
                    selectedNormal={selectedNormal}
                    selectedHeight={selectedHeight}
                />
            ) : (
                <></>
            )}
        </Suspense>
    );
};

const Visualizer: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // Get the 'id' from route query
    const [modelPath, setModelPath] = useState<string | null>(null);

    useEffect(() => {
        if (id && typeof id === 'string' && modelMapping[id]) {
            setModelPath(modelMapping[id]); // Set model path based on query id
        }
    }, [id]);

    const [baseColor, setBaseColor] = useState<string>('');
    const [arm, setArm] = useState<string>('');
    const [normal, setNormal] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [isZoomPlus, setIsZoomPlus] = useState(false);
    const [rotateStatus, setRotateStatus] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleZoom = () => {
        setIsZoomPlus(!isZoomPlus);
    };

    const handleRotate = () => {
        setRotateStatus((val) => (val + 1) % 3);
    };

    if (!modelPath) return <Loader />; // Show loader until the model is determined

    return (
        <Box className='relative h-screen w-screen'>
            <Box className='absolute top-0 left-0 h-full w-full z-0'>
                <Scene
                    modelPath={modelPath}
                    selectedBaseColor={baseColor}
                    selectedArm={arm}
                    selectedNormal={normal}
                    selectedHeight={height}
                    isZoomPlus={isZoomPlus}
                    rotateStatus={rotateStatus}
                />
            </Box>

            {/* Overlay components */}
            <Box className='absolute top-0 left-0 w-full z-10 px-20 py-10'>
                <Header />
                <Box className='flex justify-between'>
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
            <Box className='absolute bottom-0 left-0 w-full z-10 px-20 py-10'>
                {/* Additional UI components */}
                {/* You can place the texture carousel and other components as needed */}
            </Box>
        </Box>
    );
};

export default Visualizer;