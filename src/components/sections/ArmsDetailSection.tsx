'use client';

import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';
import { SpacesuitScene } from '../three/SpacesuitScene';

export function ArmsDetailSection() {
  const features = [
    {
      title: 'Articulated Joint System',
      description: 'Advanced bearing and joint design allows full 360-degree range of motion for precise manipulation of tools and equipment in pressurized conditions.',
      icon: '🦾',
    },
    {
      title: 'Multi-Layer Pressure Seals',
      description: 'Redundant pressure seal system ensures atmospheric integrity during all mission phases, with automatic leak detection and isolation.',
      icon: '🔒',
    },
    {
      title: 'Enhanced Tactile Gloves',
      description: 'Pressure-sensitive fingertips with haptic feedback allow for delicate operations and precise control while maintaining full protection.',
      icon: '🧤',
    },
    {
      title: 'Integrated Tool Mounting',
      description: 'Built-in quick-connect mounting points and universal tool attachment system for seamless integration of mission-critical equipment.',
      icon: '🔧',
    },
  ];

  return (
    <section id="arms" className="relative min-h-screen bg-gradient-to-b from-space-dark via-space-black to-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: 3D Scene */}
          <div className="h-[500px] rounded-3xl overflow-hidden border border-space-gray/20 order-2 lg:order-1">
            <SpacesuitScene highlightPart="arms" autoRotate={true} enableControls={true} />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <SlideIn direction="right">
              <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
                <span className="text-suit-blue font-medium text-sm">ARM ASSEMBLIES</span>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Precision &amp;
                <br />
                <span className="text-suit-blue">Dexterity</span>
              </h2>
            </SlideIn>

            <SlideIn direction="right" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8 leading-relaxed">
                The arm assemblies combine cutting-edge materials engineering with
                biomechanical design to deliver unprecedented dexterity in pressurized
                environments. Perform complex tasks with the same precision as on Earth.
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
