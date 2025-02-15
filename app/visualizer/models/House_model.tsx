'use client';
import * as THREE from 'three'; // Ensure to import THREE if not already imported
import { Camera } from 'three'
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { createColorTexture } from '@/lib/createColorTexture';

const House = ({
  modelPath,
  selectedBaseColor,
  selectedArm,
  selectedNormal,
  selectedHeight,
  zoomStatus,
  rotateStatus
}: {
  modelPath: string;
  selectedBaseColor: string | null;
  selectedArm: string | null;
  selectedNormal: string | null;
  selectedHeight: string | null;
  zoomStatus: boolean | false;
  rotateStatus: number | 0;
}) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [minAzimuthAngle, setMinAzimuthAngle] = useState<number>(-Math.PI / 4);
  const [maxAzimuthAngle, setMaxAzimuthAngle] = useState<number>(Math.PI / 4);
  const [minPolarAngle, setMinPolarAngle] = useState<number>(Math.PI / 4);
  const [maxPolarAngle, setMaxPolarAngle] = useState<number>(Math.PI / 1.5);
  const [intensity, setIntensity] = useState<number>(2.5);
  const [lightPoses, setLightPoses] = useState<[number, number, number]>([1, 1, 1]);
  const colorTexture = createColorTexture('#FFFF00');

  // Load all potential textures at the top level
  const defaultBaseColor = useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_basecolor.jpg');
  const defaultArm = useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_arm.jpg');
  const defaultNormal = useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_normal.jpg');
  const defaultHeight = useLoader(TextureLoader, '/Project_textures/01_beachport/textures/beachport_height.jpg');

  // Manage the current textures
  const [textures, setTextures] = useState<{
    baseColor: THREE.Texture;
    arm: THREE.Texture;
    normal: THREE.Texture;
    height: THREE.Texture;
  }>({
    baseColor: defaultBaseColor,
    arm: defaultArm,
    normal: defaultNormal,
    height: defaultHeight,
  });
  
  // Update textures based on the selected paths
  useEffect(() => {
    setTextures({
      baseColor: selectedBaseColor ? new THREE.TextureLoader().load(selectedBaseColor) : defaultBaseColor,
      arm: selectedArm ? new THREE.TextureLoader().load(selectedArm) : defaultArm,
      normal: selectedNormal ? new THREE.TextureLoader().load(selectedNormal) : defaultNormal,
      height: selectedHeight ? new THREE.TextureLoader().load(selectedHeight) : defaultHeight,
    });
  }, [selectedBaseColor, selectedArm, selectedNormal, selectedHeight, defaultBaseColor, defaultArm, defaultNormal, defaultHeight]);


  // Define type for settings
  type CameraSettings = {
    cameraPosition: [number, number, number]; // Explicitly defined as a tuple
    primitivePosition: [number, number, number];
    orbitTarget: [number, number, number];
    backgroundColor: string;
  };

  // Determine settings based on modelPath
  const [settings1, setSettings1] = useState<CameraSettings>(() => {
    return {
      cameraPosition: [0, -1, -1],
      primitivePosition: [0, -1.5, 0],
      orbitTarget: [3, -0.5, -2],
      backgroundColor: '#000000',
    }
  })
  const [settings2, setSettings2] = useState<CameraSettings>(() => {
    return {
      cameraPosition: [0, 0.4, 0.8],
      primitivePosition: [0, -1.5, 0],
      orbitTarget: [0, 0, 0],
      backgroundColor: '#000000',
    }
  })

  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    if (gltf && textures.baseColor) {
      gltf.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh && child.name === 'main_change') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff, // Set to white, but you can change it as needed
            map: textures.baseColor,
            lightMap: textures.baseColor,
            normalMap: textures.normal,
            metalnessMap: colorTexture,
            roughnessMap: colorTexture,
            // displacementMap: textures.height,
            // roughnessMap: textures.arm,
            // displacementScale: 0,
            emissive: 0x000000,
            emissiveIntensity: 1,
            roughness: 1,
            metalness: 1
          });
          child.material.needsUpdate = true;
        }
      });

      if (rotateStatus == 0) {
        gltf.scene.rotation.y = 0; // Rotate 90 degrees
        setLightPoses([1, 1, 1]);
      }
      if (rotateStatus == 1) {
        gltf.scene.rotation.y = Math.PI / 3.5;
        setLightPoses([0, 1, 1]);
      }
      if (rotateStatus == 2) {
        gltf.scene.rotation.y = - Math.PI / 3.5;
        setLightPoses([0, 1, 1]);
      }


      // Apply model-specific transformations if needed
      setMinAzimuthAngle(-Math.PI);
      setMaxAzimuthAngle(0);
      setMinPolarAngle(Math.PI / 3);
      setMaxPolarAngle(Math.PI / 2);
      setIntensity(1);

      setSettings1((prevSet) => ({
        ...prevSet,
        cameraPosition: [0, -1, zoomStatus ? 2.0 : -1]
      }));
      setSettings2((prevSet) => ({
        ...prevSet,
        cameraPosition: [0, 0.4, zoomStatus ? 1.5 : 0.8]
      }));
    }
  }, [gltf, textures.baseColor, modelPath, zoomStatus, rotateStatus]);

  useEffect(() => {
    if (isMobile) {
      if (cameraRef.current) {
        cameraRef.current.position.set(...settings1.cameraPosition);
      }
    } else {
      if (cameraRef.current) {
        cameraRef.current.position.set(...settings2.cameraPosition);
      }
    }
  }, [settings1.cameraPosition, settings2.cameraPosition, isMobile]);

  return (
    <>
      {isMobile ? (
        <Canvas
          style={{ height: '100%', width: '100%' }} // Make Canvas full screen
          key={modelPath} // Add this line to force re-mounting
          camera={{ position: settings1.cameraPosition }}
          shadows
          onCreated={({ gl, camera }) => {
            gl.setClearColor(settings1.backgroundColor); // Set background color dynamically
            cameraRef.current = camera;
          }}
          className='relativeScene'
        >
          <ambientLight intensity={0.5} color='#ffffff' />
          <directionalLight position={lightPoses} intensity={intensity} castShadow />
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
            minPolarAngle={minPolarAngle} // Minimum vertical angle (limit upward rotation)
            maxPolarAngle={maxPolarAngle} // Maximum vertical angle (limit downward rotation)
            minAzimuthAngle={minAzimuthAngle} // Limit left rotation (-25 degrees)
            maxAzimuthAngle={maxAzimuthAngle} // Limit right rotation (245 degrees)
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
            dpr={[2, 3]}
            gl={{
              antialias: true,         // Enable anti-aliasing for smoother edges
            }}
            onCreated={({ gl, camera }) => {
              gl.setClearColor(settings2.backgroundColor); // Set background color dynamically
              cameraRef.current = camera;
            }}
            className='relativeScene'
          >
            <directionalLight position={lightPoses} intensity={intensity} castShadow />
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

export default House;