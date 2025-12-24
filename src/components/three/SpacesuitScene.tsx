'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Lighting } from './Lighting';
import { Placeholder } from './Placeholder';
import { cameraConfig } from '@/lib/three/sceneConfig';
import { Suspense } from 'react';

interface SpacesuitSceneProps {
  autoRotate?: boolean;
  highlightPart?: string | null;
  enableControls?: boolean;
  className?: string;
}

export function SpacesuitScene({
  autoRotate = false,
  highlightPart = null,
  enableControls = true,
  className = '',
}: SpacesuitSceneProps) {
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
          <Placeholder autoRotate={autoRotate} highlightPart={highlightPart} />
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
