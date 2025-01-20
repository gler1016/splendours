// utils/createColorTexture.ts
import * as THREE from 'three';

// Function to create a color texture from a hex string
export const createColorTexture = (color: string): THREE.Texture => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('Failed to create canvas context.');
  }

  // Set the canvas size (e.g., 512x512 pixels)
  canvas.width = 512;
  canvas.height = 512;

  // Set the fill style to the color
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Create a Three.js texture from the canvas
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true; // Ensure the texture is marked for updating
  return texture;
};
