'use client';

import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';
import { SpacesuitScene } from '../three/SpacesuitScene';

export function TorsoDetailSection() {
  const features = [
    {
      title: 'Advanced Cooling System',
      description: 'Liquid cooling garment with distributed tubing network maintains optimal body temperature in extreme conditions, from -140°C to +120°C.',
      icon: '❄️',
    },
    {
      title: 'Flexible Composite Shell',
      description: 'Advanced multi-layer materials provide robust protection while allowing natural movement and preventing fatigue during extended EVAs.',
      icon: '🌊',
    },
    {
      title: 'Sealed Storage Compartments',
      description: 'Multiple pressurized pockets for secure storage of tools, geological samples, and emergency supplies without compromising suit integrity.',
      icon: '📦',
    },
    {
      title: 'Ergonomic Load Distribution',
      description: 'Internal framework and support structure distributes weight evenly across the body, reducing strain and enabling longer mission durations.',
      icon: '🏗️',
    },
  ];

  return (
    <section id="torso" className="relative min-h-screen bg-gradient-to-b from-space-dark via-space-black to-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: 3D Scene */}
          <div className="h-[500px] rounded-3xl overflow-hidden border border-space-gray/20 order-2 lg:order-1">
            <SpacesuitScene highlightPart="torso" autoRotate={true} enableControls={true} />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <SlideIn direction="right">
              <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
                <span className="text-suit-blue font-medium text-sm">TORSO ASSEMBLY</span>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Structural
                <br />
                <span className="text-suit-blue">Foundation</span>
              </h2>
            </SlideIn>

            <SlideIn direction="right" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8 leading-relaxed">
                The torso assembly provides the structural backbone of the suit,
                integrating critical support systems while maintaining flexibility
                and comfort during extended missions on the Martian surface.
              </p>
            </SlideIn>
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
      </div>
    </section>
  );
}
