export const cameraConfig = {
  fov: 45,
  near: 0.1,
  far: 1000,
  position: [0, 1.5, 5] as [number, number, number],
};

export const lightingConfig = {
  ambient: {
    intensity: 0.4,
    color: '#ffffff',
  },
  directional: {
    intensity: 0.8,
    position: [5, 5, 5] as [number, number, number],
    color: '#ffffff',
  },
  spot: {
    intensity: 0.5,
    position: [-5, 5, 0] as [number, number, number],
    color: '#4169E1', // Tech blue
  },
};

export const modelConfig = {
  initialPosition: [0, 0, 0] as [number, number, number],
  initialRotation: [0, 0, 0] as [number, number, number],
  scale: 1,
};
