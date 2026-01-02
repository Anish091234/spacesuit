'use client';

import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';
import { RealSpacesuitScene } from '../three/RealSpacesuitScene';

export function BootsDetailSection() {
  const features = [
    {
      title: 'Advanced Traction System',
      description: 'Proprietary tread pattern with adaptive grip technology provides superior stability on loose regolith, ice, and rocky Martian surfaces.',
      icon: '👢',
    },
    {
      title: 'Impact Protection System',
      description: 'Reinforced toe and heel caps with shock-absorbing materials protect against impacts, crushing forces, and sharp objects.',
      icon: '🛡️',
    },
    {
      title: 'Active Thermal Regulation',
      description: 'Heated insoles with temperature sensors maintain optimal foot comfort in extreme cold, preventing frostbite and ensuring mobility.',
      icon: '🔥',
    },
    {
      title: 'Biomechanical Ankle Support',
      description: 'Dynamic stabilization framework prevents injury while allowing natural foot movement and adapting to uneven terrain in real-time.',
      icon: '🦿',
    },
  ];

  return (
    <section id="boots" className="relative min-h-screen bg-gradient-to-b from-space-dark via-space-black to-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: 3D Scene */}
          <div className="h-[500px] rounded-3xl overflow-hidden border border-space-gray/20 order-2 lg:order-1">
            <RealSpacesuitScene part="boots" autoRotate={true} enableControls={true} />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <SlideIn direction="right">
              <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
                <span className="text-suit-blue font-medium text-sm">BOOT SYSTEM</span>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Superior
                <br />
                <span className="text-suit-blue">Ground Contact</span>
              </h2>
            </SlideIn>

            <SlideIn direction="right" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8 leading-relaxed">
                The boot system ensures stable footing in all Martian environments,
                combining advanced protection, thermal comfort, and superior traction
                for safe exploration of the Red Planet&apos;s diverse terrain.
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
