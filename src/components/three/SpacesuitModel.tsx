'use client';

import { useRef, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface SpacesuitModelProps {
  modelPath: string;
  autoRotate?: boolean;
  highlightPart?: string | null;
  position?: [number, number, number];
  scale?: number;
}

function Model({ modelPath, autoRotate, highlightPart, position = [0, 0, 0], scale = 1 }: SpacesuitModelProps) {
  const groupRef = useRef<Group>(null);

  // Load the GLTF model
  const gltf = useGLTF(modelPath);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={gltf.scene.clone()} />
    </group>
  );
}

export function SpacesuitModel(props: SpacesuitModelProps) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  );
}

// Preload models for better performance
useGLTF.preload('/models/helmet.glb');
useGLTF.preload('/models/legs.glb');
useGLTF.preload('/models/boots.gltf');
