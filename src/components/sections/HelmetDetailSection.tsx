'use client';

import { useState } from 'react';
import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';
import { RealSpacesuitScene } from '../three/RealSpacesuitScene';
import { HUDOverlay } from '../hud/HUDOverlay';
import { HUDSimulation } from '../hud/HUDSimulation';

export function HelmetDetailSection() {
  const [hudOpen, setHudOpen] = useState(false);
  const features = [
    {
      title: 'Advanced Visor Technology',
      description: 'Multi-layer polycarbonate visor with UV protection, anti-glare coating, and automatic tinting for optimal visibility in harsh Martian sunlight.',
      icon: '👁️',
    },
    {
      title: 'Integrated Communication System',
      description: 'High-fidelity audio system with noise cancellation for crystal-clear communication with crew members and mission control.',
      icon: '📡',
    },
    {
      title: 'Heads-Up Display (HUD)',
      description: 'Real-time mission data, vital signs, navigation information, and environmental readings displayed directly in your field of view.',
      icon: '🖥️',
    },
    {
      title: 'Emergency Life Support',
      description: 'Built-in backup oxygen supply and pressure regulation system for critical situations, providing up to 30 minutes of emergency air.',
      icon: '💨',
    },
  ];

  return (
    <section id="helmet" className="relative min-h-screen bg-gradient-to-b from-space-dark via-space-black to-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div>
            <SlideIn direction="left">
              <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
                <span className="text-suit-blue font-medium text-sm">HELMET SYSTEM</span>
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Your Window to
                <br />
                <span className="text-suit-blue">The Red Planet</span>
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8 leading-relaxed">
                The helmet is your primary interface with the Martian environment.
                Featuring cutting-edge display technology, advanced life support systems,
                and robust protection, it keeps you connected, informed, and safe throughout
                your mission on Mars.
              </p>
            </SlideIn>
          </div>

          {/* Right: 3D Scene */}
          <div className="h-[500px] rounded-3xl overflow-hidden border border-space-gray/20">
            <RealSpacesuitScene part="helmet" autoRotate={true} enableControls={true} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.6 + index * 0.1}>
              <div className="bg-space-dark/50 backdrop-blur-sm border border-space-gray/30 rounded-2xl p-6 hover:border-suit-blue/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-suit-silver text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* HUD Simulation CTA */}
        <FadeIn delay={1.0}>
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setHudOpen(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-suit-blue/20 to-suit-blue/30 backdrop-blur-md border border-suit-blue/50 rounded-2xl hover:border-suit-blue hover:from-suit-blue/30 hover:to-suit-blue/40 transition-all shadow-lg hover:shadow-suit-blue/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👁️</span>
                <div className="text-left">
                  <div className="text-lg font-semibold text-white">Launch HUD Simulation</div>
                  <div className="text-xs text-suit-silver">Experience the helmet&apos;s heads-up display</div>
                </div>
                <svg
                  className="w-5 h-5 text-suit-blue group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </button>
          </div>
        </FadeIn>

        {/* HUD Overlay */}
        <HUDOverlay isOpen={hudOpen} onClose={() => setHudOpen(false)}>
          <HUDSimulation />
        </HUDOverlay>
      </div>
    </section>
  );
}
