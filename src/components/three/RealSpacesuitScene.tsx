'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Lighting } from './Lighting';
import { SpacesuitModel } from './SpacesuitModel';
import { Placeholder } from './Placeholder';
import { cameraConfig } from '@/lib/three/sceneConfig';
import { Suspense, useState, useEffect } from 'react';

interface RealSpacesuitSceneProps {
  part?: 'helmet' | 'legs' | 'boots' | 'full';
  autoRotate?: boolean;
  enableControls?: boolean;
  className?: string;
}

export function RealSpacesuitScene({
  part = 'full',
  autoRotate = false,
  enableControls = true,
  className = '',
}: RealSpacesuitSceneProps) {
  const [useRealModels, setUseRealModels] = useState(false);

  // Check if models exist
  useEffect(() => {
    const checkModels = async () => {
      try {
        // Try to fetch one of the models to see if they exist
        const response = await fetch('/models/helmet.glb', { method: 'HEAD' });
        setUseRealModels(response.ok);
      } catch {
        setUseRealModels(false);
      }
    };
    checkModels();
  }, []);

  const getModelPath = () => {
    switch (part) {
      case 'helmet':
        return '/models/helmet.glb';
      case 'legs':
        return '/models/legs.glb';
      case 'boots':
        return '/models/boots.gltf'; // Using GLTF format for boots
      default:
        return '/models/helmet.glb'; // Default to helmet for full suit
    }
  };

  const getModelScale = () => {
    switch (part) {
      case 'helmet':
        return 8; // Smaller scale for helmet
      case 'legs':
        return 8; // Smaller scale for legs
      case 'boots':
        return 15; // Keep boots at current size
      default:
        return 10;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />

        <PerspectiveCamera
          makeDefault
          fov={cameraConfig.fov}
          near={cameraConfig.near}
          far={cameraConfig.far}
          position={cameraConfig.position}
        />

        <Lighting />

        <Suspense fallback={null}>
          {useRealModels ? (
            <SpacesuitModel
              modelPath={getModelPath()}
              autoRotate={autoRotate}
              highlightPart={part}
              scale={getModelScale()}
              position={[0, -1, 0]}
            />
          ) : (
            <Placeholder autoRotate={autoRotate} highlightPart={part} />
          )}
        </Suspense>

        {enableControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={8}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        )}
      </Canvas>
    </div>
  );
}
