'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

interface PlaceholderProps {
  autoRotate?: boolean;
  highlightPart?: string | null;
}

export function Placeholder({ autoRotate = false, highlightPart = null }: PlaceholderProps) {
  const groupRef = useRef<Group>(null);
  const innerShellRef = useRef<Mesh>(null);
  const outerShellRef = useRef<Mesh>(null);
  const tanksRef = useRef<Group>(null);
  const powerRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }

    // Update materials based on highlighted part
    if (innerShellRef.current) {
      const material = innerShellRef.current.material as any;
      material.emissive.setHex(highlightPart === 'innerShell' ? 0x00ff88 : 0x000000);
      material.emissiveIntensity = highlightPart === 'innerShell' ? 0.3 : 0;
    }

    if (outerShellRef.current) {
      const material = outerShellRef.current.material as any;
      material.opacity = highlightPart === 'innerShell' ? 0.3 : 0.7;
      material.emissive.setHex(highlightPart === 'outerShell' ? 0x4169E1 : 0x000000);
      material.emissiveIntensity = highlightPart === 'outerShell' ? 0.3 : 0;
    }

    if (tanksRef.current) {
      tanksRef.current.children.forEach((child) => {
        if (child instanceof Mesh) {
          const material = child.material as any;
          material.emissive.setHex(highlightPart === 'lifeSupport' ? 0xCD5C5C : 0x000000);
          material.emissiveIntensity = highlightPart === 'lifeSupport' ? 0.5 : 0;
        }
      });
    }

    if (powerRef.current) {
      powerRef.current.children.forEach((child) => {
        if (child instanceof Mesh) {
          const material = child.material as any;
          material.emissive.setHex(highlightPart === 'power' ? 0x00ff88 : 0x000000);
          material.emissiveIntensity = highlightPart === 'power' ? 0.5 : 0;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Inner Shell - Light gray capsule */}
      <mesh ref={innerShellRef} position={[0, 0, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.5, 1.5, 32, 64]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.3}
          roughness={0.4}
          emissive="#000000"
        />
      </mesh>

      {/* Outer Shell - Blue transparent capsule */}
      <mesh ref={outerShellRef} position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.6, 1.7, 32, 64]} />
        <meshStandardMaterial
          color="#4169E1"
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.7}
          emissive="#000000"
        />
      </mesh>

      {/* Life Support Tanks - Red cylinders on back */}
      <group ref={tanksRef}>
        <mesh position={[-0.35, 0.5, -0.3]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 32]} />
          <meshStandardMaterial color="#CD5C5C" metalness={0.8} roughness={0.2} emissive="#000000" />
        </mesh>
        <mesh position={[-0.15, 0.5, -0.3]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 32]} />
          <meshStandardMaterial color="#CD5C5C" metalness={0.8} roughness={0.2} emissive="#000000" />
        </mesh>
      </group>

      {/* Power Modules - Green boxes */}
      <group ref={powerRef}>
        <mesh position={[0.4, 0.2, -0.2]} castShadow>
          <boxGeometry args={[0.15, 0.25, 0.12]} />
          <meshStandardMaterial color="#00ff88" metalness={0.7} roughness={0.3} emissive="#000000" />
        </mesh>
        <mesh position={[0.4, -0.2, -0.2]} castShadow>
          <boxGeometry args={[0.15, 0.25, 0.12]} />
          <meshStandardMaterial color="#00ff88" metalness={0.7} roughness={0.3} emissive="#000000" />
        </mesh>
      </group>

      {/* Helmet - Sphere on top */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.2}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Connection ports - Small cylinders */}
      <mesh position={[-0.4, 0, 0.1]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.15, 16]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.4, 0, 0.1]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.15, 16]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}
