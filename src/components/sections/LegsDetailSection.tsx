'use client';

import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';
import { SpacesuitScene } from '../three/SpacesuitScene';

export function LegsDetailSection() {
  const features = [
    {
      title: 'Advanced Mobility Joints',
      description: 'Precision bearing systems enable natural walking, running, and climbing motions in Martian gravity (38% of Earth), with enhanced stability control.',
      icon: '🦵',
    },
    {
      title: 'Abrasion-Resistant Fabric',
      description: 'Military-grade reinforced fabric withstands rough Martian terrain, sharp rock formations, and continuous flexing without degradation.',
      icon: '🪨',
    },
    {
      title: 'Multi-Layer Thermal Insulation',
      description: 'Advanced insulation technology protects against extreme temperature variations while maintaining flexibility and preventing heat loss.',
      icon: '🌡️',
    },
    {
      title: 'Dust Infiltration Prevention',
      description: 'Sealed joint system prevents fine Martian dust particles from penetrating critical areas while maintaining full range of motion.',
      icon: '🌪️',
    },
  ];

  return (
    <section id="legs" className="relative min-h-screen bg-gradient-to-b from-space-dark via-space-black to-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div>
            <SlideIn direction="left">
              <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
                <span className="text-suit-blue font-medium text-sm">LEG ASSEMBLIES</span>
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Enhanced
                <br />
                <span className="text-suit-blue">Mobility</span>
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8 leading-relaxed">
                The leg assemblies are engineered for maximum mobility in Martian
                gravity, combining exceptional durability with flexibility for
                traversing challenging terrain and conducting extended surface operations.
              </p>
            </SlideIn>
          </div>

          {/* Right: 3D Scene */}
          <div className="h-[500px] rounded-3xl overflow-hidden border border-space-gray/20">
            <SpacesuitScene highlightPart="legs" autoRotate={true} enableControls={true} />
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
