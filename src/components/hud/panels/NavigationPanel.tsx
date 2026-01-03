'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Waypoint {
  id: string;
  name: string;
  x: number; // 0-100
  y: number; // 0-100
  type: 'objective' | 'landmark' | 'hazard';
  distance: number; // in meters
}

const waypoints: Waypoint[] = [
  { id: '1', name: 'Base Camp', x: 50, y: 50, type: 'objective', distance: 0 },
  { id: '2', name: 'Rock Formation Alpha', x: 65, y: 35, type: 'landmark', distance: 247 },
  { id: '3', name: 'Crater Ridge', x: 40, y: 60, type: 'landmark', distance: 312 },
  { id: '4', name: 'Sample Site B', x: 75, y: 45, type: 'objective', distance: 428 },
  { id: '5', name: 'Dust Storm Zone', x: 30, y: 30, type: 'hazard', distance: 520 },
];

export function NavigationPanel() {
  const [heading, setHeading] = useState(0);

  // Simulate heading changes
  useEffect(() => {
    const interval = setInterval(() => {
      setHeading((prev) => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const waypointColors = {
    objective: '#4169E1', // suit-blue
    landmark: '#C0C0C0', // silver
    hazard: '#CD5C5C', // mars-red
  };

  const waypointIcons = {
    objective: '⭐',
    landmark: '📍',
    hazard: '⚠️',
  };

  return (
    <div className="absolute bottom-6 left-6 w-80 z-50 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Panel Header */}
        <div className="bg-space-dark/80 backdrop-blur-md border border-suit-blue/50 rounded-t-xl px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-suit-blue uppercase tracking-wider">Navigation</h3>
            <div className="text-xs text-suit-silver font-mono">
              HDG: {heading.toString().padStart(3, '0')}°
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-space-dark/70 backdrop-blur-md border-x border-b border-space-gray/30 rounded-b-xl p-4">
          {/* SVG Map */}
          <div className="relative aspect-square bg-space-black/50 rounded-xl overflow-hidden border border-space-gray/20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="rgba(192, 192, 192, 0.1)"
                    strokeWidth="0.5"
                  />
                </pattern>
                <radialGradient id="radarGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#4169E1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#4169E1" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Grid background */}
              <rect width="100" height="100" fill="url(#grid)" />

              {/* Radar sweep effect */}
              <motion.circle
                cx="50"
                cy="50"
                r="0"
                fill="url(#radarGradient)"
                animate={{ r: [0, 50] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Range circles */}
              <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(65, 105, 225, 0.2)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(65, 105, 225, 0.2)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(65, 105, 225, 0.2)" strokeWidth="0.5" />

              {/* Waypoints */}
              {waypoints.map((waypoint) => (
                <g key={waypoint.id}>
                  {/* Waypoint circle */}
                  <motion.circle
                    cx={waypoint.x}
                    cy={waypoint.y}
                    r="2"
                    fill={waypointColors[waypoint.type]}
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
                  />
                  {/* Pulse ring for objectives */}
                  {waypoint.type === 'objective' && (
                    <motion.circle
                      cx={waypoint.x}
                      cy={waypoint.y}
                      r="2"
                      fill="none"
                      stroke={waypointColors[waypoint.type]}
                      strokeWidth="0.5"
                      animate={{ r: [2, 5], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </g>
              ))}

              {/* Player position (center) */}
              <g>
                <motion.circle
                  cx="50"
                  cy="50"
                  r="3"
                  fill="#00ff00"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {/* Direction indicator */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="40"
                  stroke="#00ff00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  animate={{ rotate: heading }}
                  style={{ transformOrigin: '50% 50%' }}
                />
              </g>

              {/* Compass directions */}
              <text x="50" y="8" textAnchor="middle" fill="rgba(192, 192, 192, 0.5)" fontSize="4">
                N
              </text>
              <text x="92" y="52" textAnchor="middle" fill="rgba(192, 192, 192, 0.5)" fontSize="4">
                E
              </text>
              <text x="50" y="96" textAnchor="middle" fill="rgba(192, 192, 192, 0.5)" fontSize="4">
                S
              </text>
              <text x="8" y="52" textAnchor="middle" fill="rgba(192, 192, 192, 0.5)" fontSize="4">
                W
              </text>
            </svg>
          </div>

          {/* Waypoints Legend */}
          <div className="mt-4 space-y-2">
            {waypoints
              .filter((w) => w.type !== 'hazard')
              .slice(0, 3)
              .map((waypoint) => (
                <div
                  key={waypoint.id}
                  className="flex items-center justify-between text-xs bg-space-black/30 rounded px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span>{waypointIcons[waypoint.type]}</span>
                    <span className="text-suit-silver">{waypoint.name}</span>
                  </div>
                  <span className="text-suit-blue font-mono">{waypoint.distance}m</span>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
