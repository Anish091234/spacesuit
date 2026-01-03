'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, useTexture } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { BackSide, Mesh } from 'three';

interface PanoramaSphereProps {
  rotation: [number, number, number];
}

function PanoramaSphere({ rotation }: PanoramaSphereProps) {
  const meshRef = useRef<Mesh>(null);

  // Load the Mars panorama texture
  const texture = useTexture('/textures/mars-panorama-optimized.jpg');

  return (
    <mesh ref={meshRef} rotation={rotation}>
      {/* Large inverted sphere for interior view */}
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial
        map={texture}
        side={BackSide} // Render inside of sphere
      />
    </mesh>
  );
}

interface MarsEnvironmentProps {
  rotation?: [number, number, number];
}

export function MarsEnvironment({ rotation = [0, 0, 0] }: MarsEnvironmentProps) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        {/* Camera with wider FOV for immersive view */}
        <PerspectiveCamera
          makeDefault
          fov={85}
          near={0.1}
          far={1000}
          position={[0, 0, 0]}
        />

        {/* Ambient light for visibility */}
        <ambientLight intensity={1.2} />

        {/* Fog for depth perception */}
        <fog attach="fog" args={['#1a1410', 100, 600]} />

        {/* 360° Panorama Sphere */}
        <Suspense fallback={null}>
          <PanoramaSphere rotation={rotation} />
        </Suspense>

        {/* TODO: Add 3D terrain elements (rocks, dunes) */}
      </Canvas>

      {/* Loading overlay */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center text-suit-silver">
            <div className="w-16 h-16 border-4 border-suit-blue/30 border-t-suit-blue rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg">Loading Mars Environment...</p>
          </div>
        </div>
      }>
        {null}
      </Suspense>
    </div>
  );
}
