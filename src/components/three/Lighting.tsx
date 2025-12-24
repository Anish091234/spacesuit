'use client';

import { lightingConfig } from '@/lib/three/sceneConfig';

export function Lighting() {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight
        intensity={lightingConfig.ambient.intensity}
        color={lightingConfig.ambient.color}
      />

      {/* Main directional light (sun-like) */}
      <directionalLight
        position={lightingConfig.directional.position}
        intensity={lightingConfig.directional.intensity}
        color={lightingConfig.directional.color}
        castShadow
      />

      {/* Spot light for dramatic effect */}
      <spotLight
        position={lightingConfig.spot.position}
        intensity={lightingConfig.spot.intensity}
        color={lightingConfig.spot.color}
        angle={0.6}
        penumbra={0.5}
      />

      {/* Fill light (opposite side) */}
      <pointLight position={[5, 0, -5]} intensity={0.3} color="#ffffff" />
    </>
  );
}
