'use client';
import * as THREE from 'three';
import { Camera } from 'three'
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { createColorTexture } from '@/lib/createColorTexture';

// Component to handle window lighting
const WindowLights = ({ 
  windowPositions, 
  intensity = 2,
  color = '#FFFFFF', // Warm window light color
  visible = true 
}: {
  windowPositions: Array<[number, number, number]>;
  intensity?: number;
  color?: string;
  visible?: boolean;
}) => {
  return (
    <>
      {windowPositions.map((position, index) => (
        <React.Fragment key={`window-light-${index}`}>
          {/* Point light for general window illumination */}
          <pointLight 
            position={position} 
            intensity={intensity} 
            color={color} 
            distance={3}
            decay={2}
            castShadow={true}
            visible={visible}
          />
          
          {/* Volumetric light effect (optional) */}
          <mesh position={position}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshBasicMaterial 
              color={color} 
              transparent={true}
              opacity={0.15}
              visible={visible}
            />
          </mesh>
        </React.Fragment>
      ))}
    </>
  );
};

// Main House component
const House = ({
  modelPath,
  selectedBaseColor,
  selectedArm,
  selectedNormal,
  selectedHeight,
  zoomStatus,
  rotateStatus,
  enableWindowLights = true,
  windowLightIntensity = 4,
  timeOfDay = 'day' // 'day', 'sunset', 'night'
}: {
  modelPath: string;
  selectedBaseColor: string | null;
  selectedArm: string | null;
  selectedNormal: string | null;
  selectedHeight: string | null;
  zoomStatus: boolean | false;
  rotateStatus: number | 0;
  enableWindowLights?: boolean;
  windowLightIntensity?: number;
  timeOfDay?: 'day' | 'sunset' | 'night';
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
  const sceneRef = useRef<THREE.Group>(new THREE.Group());
  
  // Window positions (adjust these based on your model)
  const [windowPositions, setWindowPositions] = useState<Array<[number, number, number]>>([
    [0.5, 0, 0.5],   // Front right window
    [-0.5, 0, 0.5],  // Front left window
    [0.8, 0, -0.2],  // Side window
    [-0.8, 0, -0.2], // Other side window
    [0, 0, -0.8]     // Back window
  ]);

  console.log(intensity)

  // Environment lighting settings based on time of day
  const [environmentSettings, setEnvironmentSettings] = useState({
    ambientIntensity: 0.5,
    directionalIntensity: 1.0,
    backgroundColor: '#000000',
    windowLightColor: '#FFF9E5',
    fogColor: '#ffffff',
    fogDensity: 0.01
  });

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

  // Update environment settings based on time of day
  useEffect(() => {
    switch (timeOfDay) {
      case 'day':
        setEnvironmentSettings({
          ambientIntensity: 0.8,
          directionalIntensity: 1.2,
          backgroundColor: '#87CEEB', // Sky blue
          windowLightColor: '#FFFFFF', // Bright white light
          fogColor: '#F0F8FF',
          fogDensity: 0.005
        });
        break;
      case 'sunset':
        setEnvironmentSettings({
          ambientIntensity: 0.4,
          directionalIntensity: 0.8,
          backgroundColor: '#FF7F50', // Coral sunset
          windowLightColor: '#FFA07A', // Light salmon
          fogColor: '#FFA07A',
          fogDensity: 0.02
        });
        break;
      case 'night':
        setEnvironmentSettings({
          ambientIntensity: 0.1,
          directionalIntensity: 0.2,
          backgroundColor: '#000033', // Dark night blue
          windowLightColor: '#FFF9E5', // Warm interior light
          fogColor: '#000033',
          fogDensity: 0.03
        });
        break;
    }
  }, [timeOfDay]);

  // Find window meshes and update positions
  useEffect(() => {
    if (gltf) {
      const newWindowPositions: Array<[number, number, number]> = [];
      
      // First attempt to find meshes with "window" in their name
      gltf.scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh && 
           (child.name.toLowerCase().includes('window') || 
            child.name.toLowerCase().includes('glass'))) {
          
          // Get world position of the window
          const position = new THREE.Vector3();
          child.getWorldPosition(position);
          
          // Store the position
          newWindowPositions.push([position.x, position.y, position.z]);
          
          // Make window material emissive if it's night
          if (timeOfDay === 'night' && enableWindowLights) {
            if (child.material) {
              // Clone the material to avoid affecting other objects
              child.material = child.material.clone();
              (child.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(environmentSettings.windowLightColor);
              (child.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8;
            }
          }
        }
      });
      
      // If we found windows, use those positions
      if (newWindowPositions.length > 0) {
        setWindowPositions(newWindowPositions);
      }
      
      // Initialize the scene reference
      sceneRef.current = gltf.scene;
    }
  }, [gltf, timeOfDay, enableWindowLights, environmentSettings.windowLightColor]);

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
        gltf.scene.rotation.y = 0;
        setLightPoses([1, 1, 1]);
      }
      if (rotateStatus == 1) {
        gltf.scene.rotation.y = Math.PI / 3.5;
        setLightPoses([0, 1, 1]);
      }
      if (rotateStatus == 2) {
        gltf.scene.rotation.y = -Math.PI / 3.5;
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
        cameraPosition: [0, -1, zoomStatus ? 2.0 : -1],
        backgroundColor: environmentSettings.backgroundColor
      }));
      setSettings2((prevSet) => ({
        ...prevSet,
        cameraPosition: [0, 0.4, zoomStatus ? 1.5 : 0.8],
        backgroundColor: environmentSettings.backgroundColor
      }));
    }
  }, [gltf, textures.baseColor, modelPath, zoomStatus, rotateStatus, environmentSettings.backgroundColor]);

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

  // Scene setup component
  const SceneSetup = () => {
    const { scene } = useThree();
    
    useEffect(() => {
      // Add fog to the scene
      scene.fog = new THREE.FogExp2(
        environmentSettings.fogColor, 
        environmentSettings.fogDensity
      );
      
      return () => {
        scene.fog = null;
      };
    }, [scene, environmentSettings.fogColor, environmentSettings.fogDensity]);
    
    return null;
  };

  return (
    <>
      {isMobile ? (
        <Canvas
          style={{ height: '100%', width: '100%' }} // Make Canvas full screen
          key={`${modelPath}-${timeOfDay}`} // Add timeOfDay to force re-mounting when it changes
          camera={{ position: settings1.cameraPosition }}
          shadows
          onCreated={({ gl, camera }) => {
            gl.setClearColor(environmentSettings.backgroundColor); // Set background color dynamically
            cameraRef.current = camera;
          }}
          className='relativeScene'
        >
          <SceneSetup />
          <ambientLight intensity={environmentSettings.ambientIntensity} color='#ffffff' />
          <directionalLight 
            position={lightPoses} 
            intensity={environmentSettings.directionalIntensity} 
            castShadow 
          />
          <directionalLight 
            position={[-1, -1, -1]} 
            intensity={environmentSettings.directionalIntensity * 0.5} 
          />
          
          {/* Add the house model */}
          <primitive object={gltf.scene} position={settings1.primitivePosition} castShadow />
          
          {/* Add window lights */}
          {enableWindowLights && (
            <WindowLights 
              windowPositions={windowPositions} 
              intensity={windowLightIntensity} 
              color={environmentSettings.windowLightColor}
              visible={timeOfDay !== 'day'}
            />
          )}
          
          <OrbitControls
            target={settings1.orbitTarget}
            enableZoom={true}
            enablePan={false} // Disable panning if unnecessary
            minDistance={1} // Minimum zoom level
            maxDistance={5} // Maximum zoom level
            minPolarAngle={minPolarAngle} // Minimum vertical angle (limit upward rotation)
            maxPolarAngle={maxPolarAngle} // Maximum vertical angle (limit downward rotation)
            minAzimuthAngle={minAzimuthAngle} // Limit left rotation
            maxAzimuthAngle={maxAzimuthAngle} // Limit right rotation
            enableDamping // Smooth the rotation for better UX
            dampingFactor={0.1}
          />
        </Canvas>
      ) : (
        <Canvas
          style={{ height: '100%', width: '100%' }} // Make Canvas full screen
          key={`${modelPath}-${timeOfDay}`} // Add timeOfDay to force re-mounting when it changes
          camera={{ position: settings2.cameraPosition }}
          shadows
          dpr={[2, 3]}
          gl={{
            antialias: true, // Enable anti-aliasing for smoother edges
          }}
          onCreated={({ gl, camera }) => {
            gl.setClearColor(environmentSettings.backgroundColor); // Set background color dynamically
            cameraRef.current = camera;
          }}
          className='relativeScene'
        >
          <SceneSetup />
          <ambientLight intensity={environmentSettings.ambientIntensity} color='#ffffff' />
          <directionalLight 
            position={lightPoses} 
            intensity={environmentSettings.directionalIntensity} 
            castShadow 
          />
          <directionalLight 
            position={[-1, -1, -1]} 
            intensity={environmentSettings.directionalIntensity * 0.5} 
          />
          
          {/* Add the house model */}
          <primitive object={gltf.scene} position={settings2.primitivePosition} castShadow />
          
          {/* Add window lights */}
          {enableWindowLights && (
            <WindowLights 
              windowPositions={windowPositions} 
              intensity={windowLightIntensity} 
              color={environmentSettings.windowLightColor}
              visible={timeOfDay !== 'day'}
            />
          )}
          
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
      )}
    </>
  );
};

export default House;