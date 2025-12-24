'use client';

import { useRef, useEffect } from 'react';
import { SpacesuitScene } from '../three/SpacesuitScene';
import { SlideIn } from '../animations/SlideIn';

export function OuterShellSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: 'Radiation Shielding',
      description: 'Multi-layer protection against harmful cosmic radiation and solar particle events.',
      metric: '99.7% Protection',
    },
    {
      title: 'Micrometeorite Defense',
      description: 'Kevlar-reinforced outer layer withstands high-velocity particle impacts.',
      metric: '2mm Penetration',
    },
    {
      title: 'Dust Resistance',
      description: 'Specialized coating prevents Martian dust accumulation and penetration.',
      metric: 'IP68 Rated',
    },
    {
      title: 'Modular Attachments',
      description: 'Quick-connect ports for tools, sensors, and mission-specific equipment.',
      metric: '12 Connection Points',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-space-black via-space-dark to-space-black"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SpacesuitScene highlightPart="outerShell" enableControls={false} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <SlideIn direction="up">
              <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
                <span className="text-suit-blue font-medium text-sm">OUTER SHELL</span>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Fortress Against
                <br />
                <span className="text-suit-blue">The Unknown</span>
              </h2>
            </SlideIn>

            <SlideIn direction="up" delay={0.4}>
              <p className="text-lg text-suit-silver max-w-3xl mx-auto">
                The outer shell is engineered to withstand the harshest conditions in
                our solar system. Every layer, every seal, every component is designed
                for survival on Mars.
              </p>
            </SlideIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <SlideIn key={feature.title} direction="up" delay={0.1 * index}>
                <div className="bg-space-dark/50 backdrop-blur-sm border border-space-gray/30 rounded-2xl p-6 hover:border-suit-blue/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-suit-silver text-sm mb-4">{feature.description}</p>
                  <div className="inline-block px-3 py-1 bg-suit-blue/20 rounded-full">
                    <span className="text-suit-blue text-sm font-mono">{feature.metric}</span>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
