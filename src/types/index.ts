import { ReactNode } from 'react';
import * as THREE from 'three';

export interface SectionProps {
  children?: ReactNode;
  className?: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  children: ReactNode;
}

export interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export interface SpacesuitPart {
  name: string;
  mesh?: THREE.Mesh | THREE.Group;
  position?: THREE.Vector3;
  isHighlighted?: boolean;
}

export type ScrollPhase = 'hero' | 'overview' | 'innerShell' | 'outerShell' | 'lifeSupport' | 'power' | 'connections' | 'specs';

export interface ScrollAnimationState {
  phase: ScrollPhase;
  progress: number;
}
