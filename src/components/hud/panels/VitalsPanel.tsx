'use client';

import { useVitalsSimulation, VitalData } from '../hooks/useVitalsSimulation';
import { motion } from 'framer-motion';

interface VitalDisplayProps {
  label: string;
  vital: VitalData;
  unit: string;
  icon: string;
  maxValue: number;
}

function VitalDisplay({ label, vital, unit, icon, maxValue }: VitalDisplayProps) {
  const { value, status, trend } = vital;
  const percentage = (value / maxValue) * 100;

  // Color based on status
  const statusColors = {
    normal: 'from-green-500 to-emerald-500',
    warning: 'from-yellow-500 to-amber-500',
    critical: 'from-red-500 to-rose-500',
  };

  const textColors = {
    normal: 'text-green-400',
    warning: 'text-yellow-400',
    critical: 'text-red-400',
  };

  const borderColors = {
    normal: 'border-green-500/50',
    warning: 'border-yellow-500/50',
    critical: 'border-red-500/50',
  };

  // Trend indicator
  const trendIcons = {
    increasing: '↑',
    decreasing: '↓',
    stable: '→',
  };

  return (
    <div className={`bg-space-dark/60 backdrop-blur-md border ${borderColors[status]} rounded-xl p-4 relative overflow-hidden`}>
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="scanline" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            <div>
              <div className="text-xs text-suit-silver uppercase tracking-wider">{label}</div>
              <div className={`text-2xl font-mono font-bold ${textColors[status]}`}>
                {value}
                <span className="text-sm ml-1">{unit}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-lg ${textColors[status]}`}>{trendIcons[trend]}</span>
            <div className="text-xs text-suit-silver uppercase mt-1">{status}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-2 bg-space-gray/30 rounded-full overflow-hidden">
          <motion.div
            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${statusColors[status]} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          {/* Pulse animation for critical status */}
          {status === 'critical' && (
            <motion.div
              className="absolute inset-0 bg-red-500/30"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function VitalsPanel() {
  const vitals = useVitalsSimulation();

  return (
    <div className="absolute top-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Panel Header */}
        <div className="bg-space-dark/80 backdrop-blur-md border border-suit-blue/50 rounded-t-xl px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-suit-blue uppercase tracking-wider">Vital Signs</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-suit-silver font-mono">LIVE</span>
            </div>
          </div>
        </div>

        {/* Vitals Grid */}
        <div className="bg-space-dark/70 backdrop-blur-md border-x border-b border-space-gray/30 rounded-b-xl p-4 space-y-3">
          <VitalDisplay
            label="Oxygen"
            vital={vitals.oxygen}
            unit="%"
            icon="💨"
            maxValue={100}
          />
          <VitalDisplay
            label="Power"
            vital={vitals.power}
            unit="%"
            icon="🔋"
            maxValue={100}
          />
          <VitalDisplay
            label="Temperature"
            vital={vitals.temperature}
            unit="°C"
            icon="🌡️"
            maxValue={30}
          />
          <VitalDisplay
            label="Pressure"
            vital={vitals.pressure}
            unit="kPa"
            icon="⚡"
            maxValue={110}
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .scanline::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
