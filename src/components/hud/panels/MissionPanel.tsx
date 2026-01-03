'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export function MissionPanel() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', description: 'Conduct atmospheric analysis', completed: true },
    { id: '2', description: 'Collect rock samples from crater', completed: true },
    { id: '3', description: 'Deploy seismic sensors', completed: false },
    { id: '4', description: 'Photograph geological formations', completed: false },
    { id: '5', description: 'Return to base before sunset', completed: false },
  ]);

  // Mission timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="absolute bottom-6 right-6 w-96 z-50 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {/* Panel Header */}
        <div className="bg-space-dark/80 backdrop-blur-md border border-suit-blue/50 rounded-t-xl px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-suit-blue uppercase tracking-wider">Mission Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-suit-silver font-mono">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Mission Info */}
        <div className="bg-space-dark/70 backdrop-blur-md border-x border-b border-space-gray/30 rounded-b-xl p-4 space-y-4">
          {/* Mission Objective */}
          <div className="bg-space-black/30 rounded-xl p-3 border border-space-gray/20">
            <div className="text-xs text-suit-silver uppercase tracking-wider mb-2">Primary Objective</div>
            <p className="text-sm text-white leading-relaxed">
              Conduct geological survey of Jezero Crater and collect samples for analysis. Document findings and return safely to base.
            </p>
          </div>

          {/* Time and Progress */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-space-black/30 rounded-xl p-3 border border-space-gray/20">
              <div className="text-xs text-suit-silver uppercase tracking-wider mb-1">Mission Time</div>
              <div className="text-xl font-mono font-bold text-suit-blue">{formatTime(elapsedTime)}</div>
            </div>
            <div className="bg-space-black/30 rounded-xl p-3 border border-space-gray/20">
              <div className="text-xs text-suit-silver uppercase tracking-wider mb-1">Progress</div>
              <div className="text-xl font-mono font-bold text-green-400">
                {completedTasks}/{totalTasks}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-space-gray/30 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-suit-blue to-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>

          {/* Task Checklist */}
          <div className="space-y-2">
            <div className="text-xs text-suit-silver uppercase tracking-wider mb-2">Tasks</div>
            {tasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex items-center gap-3 text-sm ${
                  task.completed ? 'text-suit-silver line-through' : 'text-white'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    task.completed
                      ? 'bg-green-500/20 border-green-500'
                      : 'bg-space-black/30 border-space-gray'
                  }`}
                >
                  {task.completed && (
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span>{task.description}</span>
              </motion.div>
            ))}
          </div>

          {/* Communication Status */}
          <div className="bg-space-black/30 rounded-xl p-3 border border-green-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">📡</span>
                <div>
                  <div className="text-xs text-suit-silver">Communication</div>
                  <div className="text-sm font-semibold text-green-400">CONNECTED</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-suit-silver">Signal Strength</div>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <div
                      key={bar}
                      className={`w-1 rounded-full ${
                        bar <= 4 ? 'bg-green-500' : 'bg-space-gray/30'
                      }`}
                      style={{ height: `${bar * 3}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Protocol Button */}
          <button className="w-full bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-500/50 rounded-xl px-4 py-3 transition-all">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🚨</span>
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                Emergency Protocols
              </span>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
