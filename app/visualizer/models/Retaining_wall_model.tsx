'use client';
import * as THREE from 'three'; // Ensure to import THREE if not already imported
import React, { useState, Suspense, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, useProgress } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const Retaining_wall = ({
  modelPath,
  selectedBaseColor,
  selectedArm,
  selectedNormal,
  selectedHeight,
}: {
  modelPath: string;
  selectedBaseColor: string | null;
  selectedArm: string | null;
  selectedNormal: string | null;
  selectedHeight: string | null;
}) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // const [value] = React.useState<number | null>(5);
  const [minAzimuthAngle, setMinAzimuthAngle] = useState<number>(-Math.PI / 4);
  const [maxAzimuthAngle, setMaxAzimuthAngle] = useState<number>(Math.PI / 4);
  const [minPolarAngle, setMinPolarAngle] = useState<number>(Math.PI / 4);
  const [maxPolarAngle, setMaxPolarAngle] = useState<number>(Math.PI / 1.5);
  const [intensity, setIntensity] = useState<number>(2.5);
  
  const [textures, setTextures] = useState<{
    baseColor: THREE.Texture;
    arm: THREE.Texture;
    normal: THREE.Texture;
    height: THREE.Texture;
  }>({
    baseColor: useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_basecolor.jpg'),
    arm: useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_arm.jpg'),
    normal: useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_height.jpg'),
    height: useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_normal.jpg'),
  });


  useEffect(() => {
    // Helper function to configure texture repeat and offset
    const configureTexture = (texture: THREE.Texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 4); // Increase repeat values as needed
      texture.offset.set(0.1, 0.1); // Adjust offset values as needed
    };

    // Update textures based on the selected paths
    if (selectedBaseColor) {
      const texture = useLoader(TextureLoader, selectedBaseColor);
      configureTexture(texture);
      setTextures((prevState) => ({
        ...prevState,
        baseColor: texture,
      }));
    }
    if (selectedArm) {
      const texture = useLoader(TextureLoader, selectedArm);
      configureTexture(texture);
      setTextures((prevState) => ({
        ...prevState,
        arm: texture,
      }));
    }
    if (selectedNormal) {
      const texture = useLoader(TextureLoader, selectedNormal);
      configureTexture(texture);
      setTextures((prevState) => ({
        ...prevState,
        normal: texture,
      }));
    }
    if (selectedHeight) {
      const texture = useLoader(TextureLoader, selectedHeight);
      configureTexture(texture);
      setTextures((prevState) => ({
        ...prevState,
        height: texture,
      }));
    }
  }, [selectedBaseColor, selectedArm, selectedNormal, selectedHeight]);


  // Define type for settings
  type CameraSettings = {
    cameraPosition: [number, number, number]; // Explicitly defined as a tuple
    primitivePosition: [number, number, number];
    orbitTarget: [number, number, number];
    backgroundColor: string;
  };

  // Determine settings based on modelPath
  const settings1: CameraSettings =
  {
    cameraPosition: [0, 0, 5],
    primitivePosition: [0, -1.5, 0],
    orbitTarget: [0, 0, 0],
    backgroundColor: '#283C28',
  }

  const settings2: CameraSettings =
  {
    cameraPosition: [0, 0, 3.5],
    primitivePosition: [0, -0.8, 0],
    orbitTarget: [0, 0, 0],
    backgroundColor: '#283C28',
  }
  useEffect(() => {
    if (gltf && textures.baseColor) {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh && (child.name === 'main_change' || child.name === 'main_change2' || child.name === 'main_change3')) {
          child.material = new THREE.MeshStandardMaterial({
            map: textures.baseColor,
            normalMap: textures.normal,
            displacementMap: textures.height,
            displacementScale: 0,
            roughnessMap: textures.arm,
            roughness: 0.8,
            metalness: 0.0,
          });
          child.material.needsUpdate = true;
        }
      });

      // Apply model-specific transformations if needed
      setMinAzimuthAngle(-Math.PI);
      setMaxAzimuthAngle(0);
      setMinPolarAngle(Math.PI / 3);
      setMaxPolarAngle(Math.PI / 2);
      setIntensity(1);
    }
  }, [gltf, textures.baseColor, modelPath]);

  return (
    <>
      {isMobile ? (
        <Canvas
          style={{ height: '100%', width: '100%' }} // Make Canvas full screen
          key={modelPath} // Add this line to force re-mounting
          camera={{ position: settings1.cameraPosition }}
          shadows
          onCreated={({ gl }) => {
            gl.setClearColor(settings1.backgroundColor); // Set background color dynamically
          }}
          className='relativeScene'
        >
          <ambientLight intensity={0.5} color='green' />
          <directionalLight position={[1, 1, 1]} intensity={intensity} castShadow />
          <directionalLight position={[-1, -1, -1]} intensity={intensity} />
          <primitive object={gltf.scene} position={settings1.primitivePosition} castShadow />
          {/* <Sphere position={[0, 0, 0]} args={[0.1, 32, 32]} castShadow>
                  <meshStandardMaterial attach="material" color="blue" />
              </Sphere>
              <Sphere position={[1, 0, 0]} args={[0.1, 32, 32]} castShadow>
                  <meshStandardMaterial attach="material" color="red" />
              </Sphere>
              <Sphere position={[0, 0, 1]} args={[0.1, 32, 32]} castShadow>
                  <meshStandardMaterial attach="material" color="green" />
              </Sphere>
              <Sphere position={[0, 1, 0]} args={[0.1, 32, 32]} castShadow>
                  <meshStandardMaterial attach="material" color="green" />
              </Sphere> */}
          {/* <OrbitControls target={settings.orbitTarget} /> */}
          <OrbitControls
            target={settings1.orbitTarget}
            enableZoom={true}
            enablePan={false} // Disable panning if unnecessary
            minDistance={1} // Minimum zoom level
            maxDistance={5} // Maximum zoom level
            minPolarAngle={Math.PI / 4} // Minimum vertical angle (limit upward rotation)
            maxPolarAngle={Math.PI / 1.5} // Maximum vertical angle (limit downward rotation)
            minAzimuthAngle={-Math.PI / 4} // Limit left rotation (-45 degrees)
            maxAzimuthAngle={Math.PI / 4} // Limit right rotation (+45 degrees)
            enableDamping // Smooth the rotation for better UX
            dampingFactor={0.1}
          />
        </Canvas>
      ) : (
        <>
          {' '}
          <Canvas
            style={{ height: '100%', width: '100%' }} // Make Canvas full screen
            key={modelPath} // Add this line to force re-mounting
            camera={{ position: settings2.cameraPosition }}
            shadows
            onCreated={({ gl }) => {
              gl.setClearColor(settings2.backgroundColor); // Set background color dynamically
            }}
            className='relativeScene'
          >
            <directionalLight position={[1, 1, 1]} intensity={intensity} castShadow />
            <directionalLight position={[-1, -1, -1]} intensity={intensity} />
            <primitive object={gltf.scene} position={settings2.primitivePosition} castShadow />
            {/* <OrbitControls target={settings.orbitTarget} /> */}
            <OrbitControls
              target={settings2.orbitTarget}
              enableZoom={true}
              enablePan={false} // Disable panning if unnecessary
              minDistance={0} // Minimum zoom level
              maxDistance={4} // Maximum zoom level
              minPolarAngle={Math.PI / 4} // Minimum vertical angle (limit upward rotation)
              maxPolarAngle={Math.PI / 1.5} // Maximum vertical angle (limit downward rotation)
              minAzimuthAngle={-Math.PI / 4} // Limit left rotation (-45 degrees)
              maxAzimuthAngle={Math.PI / 4} // Limit right rotation (+45 degrees)
              enableDamping // Smooth the rotation for better UX
              dampingFactor={0.1}
            />
          </Canvas>
        </>
      )}
    </>
  );
};

export default Retaining_wall;