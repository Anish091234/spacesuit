'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

interface HUDControlsState {
  rotation: [number, number, number];
  targetRotation: [number, number, number];
}

export function useHUDControls() {
  const [isDragging, setIsDragging] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef<[number, number, number]>([0, 0, 0]);
  const targetRotationRef = useRef<[number, number, number]>([0, 0, 0]);

  // Handle pointer down (start dragging)
  const handlePointerDown = (e: PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
    // Store current rotation as base for drag
    rotationRef.current = [...targetRotationRef.current];
  };

  // Handle pointer move (both hover and drag)
  const handlePointerMove = (e: PointerEvent) => {
    // Update mouse position for subtle movement effect
    const normalizedX = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
    const normalizedY = (e.clientY / window.innerHeight) * 2 - 1; // -1 to 1
    setMousePos({ x: normalizedX, y: normalizedY });

    if (isDragging) {
      // Calculate drag delta
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;

      // Convert to rotation (full 360° possible)
      const rotationY = (deltaX / window.innerWidth) * Math.PI * 2; // Horizontal rotation
      const rotationX = (deltaY / window.innerHeight) * Math.PI * 0.5; // Vertical rotation (limited)

      // Apply rotation with constraints
      const baseRotation = rotationRef.current;
      const newRotationY = baseRotation[1] + rotationY;
      const newRotationX = Math.max(
        -Math.PI / 4, // -45° limit
        Math.min(Math.PI / 4, baseRotation[0] + rotationX) // +45° limit
      );

      targetRotationRef.current = [newRotationX, newRotationY, 0];
    } else {
      // Subtle movement based on mouse position (when not dragging)
      const hoverRotationY = normalizedX * (Math.PI / 18); // ±10°
      const hoverRotationX = -normalizedY * (Math.PI / 36); // ±5°

      // Blend with current rotation
      const currentRotation = targetRotationRef.current;
      targetRotationRef.current = [
        currentRotation[0] * 0.95 + hoverRotationX * 0.05,
        currentRotation[1] * 0.95 + hoverRotationY * 0.05,
        0,
      ];
    }
  };

  // Handle pointer up (stop dragging)
  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Setup event listeners
  useEffect(() => {
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  // Smooth interpolation hook (call this in a component that uses useFrame)
  const getCurrentRotation = (): [number, number, number] => {
    const current = rotationRef.current;
    const target = targetRotationRef.current;

    // Lerp (linear interpolation) for smooth transition
    const damping = 0.1;
    const newRotation: [number, number, number] = [
      current[0] + (target[0] - current[0]) * damping,
      current[1] + (target[1] - current[1]) * damping,
      current[2] + (target[2] - current[2]) * damping,
    ];

    rotationRef.current = newRotation;
    return newRotation;
  };

  return {
    rotation: rotationRef.current,
    targetRotation: targetRotationRef.current,
    isDragging,
    mousePos,
    getCurrentRotation,
  };
}

// Helper component to apply rotation smoothly using useFrame
export function useSmoothedRotation(controls: ReturnType<typeof useHUDControls>) {
  const rotationRef = useRef<[number, number, number]>([0, 0, 0]);

  useFrame(() => {
    rotationRef.current = controls.getCurrentRotation();
  });

  return rotationRef.current;
}
