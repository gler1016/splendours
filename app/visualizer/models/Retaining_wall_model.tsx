'use client';
import * as THREE from 'three'; // Ensure to import THREE if not already imported
import {Camera} from 'three';
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const textureCache: Record<string, THREE.Texture> = {};

const loadTexture = (path: string): THREE.Texture => {
  if (textureCache[path]) return textureCache[path];
  const texture = new THREE.TextureLoader().load(path);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.4, 1.4);
  texture.offset.set(0.1, 0.1);
  textureCache[path] = texture;
  return texture;
};


const Retaining_wall = ({
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
  const [gltf, setGltf] = useState<THREE.Group | null>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [intensity, setIntensity] = useState<number>(1);
  const [lightPoses, setLightPoses] = useState<[number, number, number]>([1, 1, 1]);

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
      cameraPosition: [0, 0, 5],
      primitivePosition: [0, -1.5, 0],
      orbitTarget: [0, 0, 0],
      backgroundColor: '#000000',
    }
  })
  const [settings2, setSettings2] = useState<CameraSettings>(() => {
    return {
      cameraPosition: [0, 0, 3.5],
      primitivePosition: [0, -0.8, 0],
      orbitTarget: [0, 0, 0],
      backgroundColor: '#000000',
    }
  })

  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/path-to-draco-decoder/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(modelPath, (loadedGltf) => {
      setGltf(loadedGltf.scene);
    });

    return () => {
      dracoLoader.dispose();
    };
  }, [modelPath]);


  useEffect(() => {
    if (selectedBaseColor) {
      setTextures((prevState) => ({ ...prevState, baseColor: loadTexture(selectedBaseColor) }));
    }
    if (selectedArm) {
      setTextures((prevState) => ({ ...prevState, arm: loadTexture(selectedArm) }));
    }
    if (selectedNormal) {
      setTextures((prevState) => ({ ...prevState, normal: loadTexture(selectedNormal) }));
    }
    if (selectedHeight) {
      setTextures((prevState) => ({ ...prevState, height: loadTexture(selectedHeight) }));
    }
  }, [selectedBaseColor, selectedArm, selectedNormal, selectedHeight]);

  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    if (gltf) {
      gltf.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh && child.name.startsWith('main_change')) {
          const material = child.material as THREE.MeshStandardMaterial;
          material.map = textures.baseColor;
          material.normalMap = textures.normal;
          material.displacementMap = textures.height;
          material.roughnessMap = textures.arm;
          material.displacementScale = 0;
          material.roughness = 0.8;
          material.metalness = 0.0;
          material.needsUpdate = true;
        }
      });

      console.log("rotateStatus :", rotateStatus)

      if (rotateStatus == 0) {
        gltf.rotation.y = 0; // Rotate 90 degrees
        setLightPoses([1, 1, 1]);
      }
      if (rotateStatus == 1) {
        gltf.rotation.y = Math.PI / 3.5;
        setLightPoses([0, 1, 1]);
      }
      if (rotateStatus == 2) {
        gltf.rotation.y = - Math.PI / 3.5;
        setLightPoses([0, 1, 1]);
      }

      setIntensity(1);

      setSettings1((prevSet) => ({
        ...prevSet,
        cameraPosition: [0, 0, zoomStatus ? 2.0 : 5]
      }));
      setSettings2((prevSet) => ({
        ...prevSet,
        cameraPosition: [0, 0, zoomStatus ? 1.5 : 3.5]
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
          {gltf && <primitive object={gltf} position={settings1.primitivePosition} castShadow />}
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
            onCreated={({ gl, camera }) => {
              gl.setClearColor(settings2.backgroundColor); // Set background color dynamically
              cameraRef.current = camera;
            }}
            className='relativeScene'
          >
            <directionalLight position={lightPoses} intensity={intensity} castShadow />
            <directionalLight position={[-1, -1, -1]} intensity={intensity} />
            {gltf && <primitive object={gltf} position={settings2.primitivePosition} castShadow />}
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