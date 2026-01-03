'use client';

import { useState, useEffect, useRef } from 'react';

export interface VitalSigns {
  oxygen: number; // Percentage (0-100)
  power: number; // Percentage (0-100)
  temperature: number; // Celsius
  pressure: number; // kPa
}

export type VitalStatus = 'normal' | 'warning' | 'critical';

export interface VitalData {
  value: number;
  status: VitalStatus;
  trend: 'stable' | 'increasing' | 'decreasing';
}

export interface VitalsData {
  oxygen: VitalData;
  power: VitalData;
  temperature: VitalData;
  pressure: VitalData;
}

function getVitalStatus(value: number, min: number, max: number, warningThreshold: number): VitalStatus {
  if (value < warningThreshold || value > max) return 'critical';
  if (value < min * 1.1) return 'warning';
  return 'normal';
}

function getTrend(current: number, previous: number): 'stable' | 'increasing' | 'decreasing' {
  const diff = current - previous;
  if (Math.abs(diff) < 0.1) return 'stable';
  return diff > 0 ? 'increasing' : 'decreasing';
}

export function useVitalsSimulation() {
  const [vitals, setVitals] = useState<VitalSigns>({
    oxygen: 98,
    power: 87,
    temperature: 22,
    pressure: 101.3,
  });

  const previousVitalsRef = useRef<VitalSigns>(vitals);
  const timeRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      timeRef.current += 1;
      const time = timeRef.current / 10; // Slow down the simulation

      setVitals((prev) => {
        // Store previous values for trend calculation
        previousVitalsRef.current = prev;

        // Simulate realistic fluctuations
        const oxygen = Math.max(
          95,
          Math.min(100, prev.oxygen + (Math.random() - 0.5) * 0.3 + Math.sin(time * 0.1) * 0.1)
        );

        const power = Math.max(
          70,
          Math.min(100, prev.power - 0.02 + (Math.random() - 0.5) * 0.2) // Slowly decreasing
        );

        const temperature = Math.max(
          18,
          Math.min(26, 22 + Math.sin(time * 0.05) * 2 + (Math.random() - 0.5) * 0.3)
        );

        const pressure = Math.max(
          95,
          Math.min(105, 101.3 + Math.sin(time * 0.08) * 1.5 + (Math.random() - 0.5) * 0.2)
        );

        return {
          oxygen: Number(oxygen.toFixed(1)),
          power: Number(power.toFixed(1)),
          temperature: Number(temperature.toFixed(1)),
          pressure: Number(pressure.toFixed(2)),
        };
      });
    }, 500); // Update every 500ms

    return () => clearInterval(interval);
  }, []);

  // Calculate status and trends
  const vitalsData: VitalsData = {
    oxygen: {
      value: vitals.oxygen,
      status: getVitalStatus(vitals.oxygen, 95, 100, 90),
      trend: getTrend(vitals.oxygen, previousVitalsRef.current.oxygen),
    },
    power: {
      value: vitals.power,
      status: getVitalStatus(vitals.power, 70, 100, 30),
      trend: getTrend(vitals.power, previousVitalsRef.current.power),
    },
    temperature: {
      value: vitals.temperature,
      status: getVitalStatus(vitals.temperature, 18, 26, 15),
      trend: getTrend(vitals.temperature, previousVitalsRef.current.temperature),
    },
    pressure: {
      value: vitals.pressure,
      status: getVitalStatus(vitals.pressure, 95, 105, 90),
      trend: getTrend(vitals.pressure, previousVitalsRef.current.pressure),
    },
  };

  return vitalsData;
}
