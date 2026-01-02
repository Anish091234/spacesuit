'use client';

import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';
import { SpacesuitScene } from '../three/SpacesuitScene';

export function ChestDetailSection() {
  const features = [
    {
      title: 'Primary Control Panel',
      description: 'Intuitive touch-sensitive control interface with haptic feedback for managing all suit systems, even with pressurized gloves.',
      icon: '🎛️',
    },
    {
      title: 'Life Support Hub',
      description: 'Central processing unit managing oxygen regulation, CO₂ scrubbing, thermal management, and atmospheric monitoring in real-time.',
      icon: '⚙️',
    },
    {
      title: 'Advanced Power Distribution',
      description: 'High-capacity battery system with intelligent power routing and redundant circuits for all critical systems and external equipment.',
      icon: '🔋',
    },
    {
      title: 'Reinforced Armor Plating',
      description: 'Multi-layered composite armor provides protection for vital organs and core life support systems against impacts and radiation.',
      icon: '🛡️',
    },
  ];

  return (
    <section id="chest" className="relative min-h-screen bg-gradient-to-b from-space-dark via-space-black to-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div>
            <SlideIn direction="left">
              <div className="inline-block px-4 py-2 bg-mars-red/20 border border-mars-red/40 rounded-full mb-6">
                <span className="text-mars-red font-medium text-sm">CHEST MODULE</span>
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Command &amp;
                <br />
                <span className="text-mars-red">Control Center</span>
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8 leading-relaxed">
                The chest module serves as the operational heart of the suit, housing
                critical life support systems and providing intuitive control over all
                suit functions. Your mission control center, right on your chest.
              </p>
            </SlideIn>
          </div>

          {/* Right: 3D Scene */}
          <div className="h-[500px] rounded-3xl overflow-hidden border border-space-gray/20">
            <SpacesuitScene highlightPart="chest" autoRotate={true} enableControls={true} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.6 + index * 0.1}>
              <div className="bg-space-dark/50 backdrop-blur-sm border border-space-gray/30 rounded-2xl p-6 hover:border-mars-red/50 transition-all">
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
      </div>
    </section>
  );
}
