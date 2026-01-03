'use client';

import { useHUDControls } from './hooks/useHUDControls';
import { MarsEnvironment } from './MarsEnvironment';
import { VitalsPanel } from './panels/VitalsPanel';
import { NavigationPanel } from './panels/NavigationPanel';
import { MissionPanel } from './panels/MissionPanel';
import { motion } from 'framer-motion';

export function HUDSimulation() {
  const controls = useHUDControls();

  return (
    <div className="relative w-full h-full overflow-hidden pointer-events-none">
      {/* Mars 360° Environment */}
      <MarsEnvironment rotation={controls.rotation} />

      {/* HUD Panels - with pointer-events-auto on each panel */}
      <VitalsPanel />
      <NavigationPanel />
      <MissionPanel />

      {/* Crosshair / Center Reticle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          animate={{ scale: controls.isDragging ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Crosshair */}
          <div className="w-8 h-8 border-2 border-suit-blue/50 rounded-full relative">
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-suit-blue rounded-full" />
            </div>
            {/* Crosshair lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-suit-blue/30 transform -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-suit-blue/30 transform -translate-x-1/2" />
          </div>

          {/* Drag indicator */}
          {controls.isDragging && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
            >
              <div className="bg-suit-blue/20 backdrop-blur-md border border-suit-blue/50 rounded-full px-4 py-2">
                <span className="text-xs text-suit-blue font-mono uppercase tracking-wider">
                  Drag to rotate view
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Control hints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <div className="bg-space-dark/60 backdrop-blur-md border border-space-gray/30 rounded-full px-6 py-3">
          <div className="flex items-center gap-6 text-xs text-suit-silver">
            <div className="flex items-center gap-2">
              <span className="text-lg">🖱️</span>
              <span>Move mouse to look around</span>
            </div>
            <div className="w-px h-4 bg-space-gray/50" />
            <div className="flex items-center gap-2">
              <span className="text-lg">👆</span>
              <span>Click & drag to rotate</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scanline overlay effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full scanline-overlay" />
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .scanline-overlay {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(65, 105, 225, 0.1) 50%,
            transparent 100%
          );
          background-size: 100% 4px;
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
