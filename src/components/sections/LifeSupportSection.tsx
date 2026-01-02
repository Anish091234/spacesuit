'use client';

import { SpacesuitScene } from '../three/SpacesuitScene';
import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';

export function LifeSupportSection() {
  const specs = [
    { label: 'O₂ Capacity', value: '8 hours', unit: 'EVA Duration' },
    { label: 'CO₂ Scrubbing', value: '99.5%', unit: 'Efficiency' },
    { label: 'Pressure', value: '4.3 PSI', unit: 'Optimal' },
    { label: 'Redundancy', value: '3x', unit: 'Backup Systems' },
  ];

  return (
    <section id="chest" className="relative min-h-screen bg-gradient-to-b from-space-black to-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Scene */}
          <div className="h-[600px] rounded-3xl overflow-hidden border border-space-gray/20">
            <SpacesuitScene highlightPart="lifeSupport" autoRotate={false} />
          </div>

          {/* Right: Content */}
          <div>
            <SlideIn direction="right">
              <div className="inline-block px-4 py-2 bg-mars-red/20 border border-mars-red/40 rounded-full mb-6">
                <span className="text-mars-red font-medium text-sm">LIFE SUPPORT</span>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Breathe Easy on
                <br />
                <span className="text-mars-red">The Red Planet</span>
              </h2>
            </SlideIn>

            <SlideIn direction="right" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8">
                Our advanced life support system provides reliable oxygen supply
                and carbon dioxide removal, ensuring astronaut safety during
                extended surface operations.
              </p>
            </SlideIn>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {specs.map((spec, index) => (
                <FadeIn key={spec.label} delay={0.5 + index * 0.1}>
                  <div className="bg-space-dark/50 backdrop-blur-sm border border-space-gray/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-mars-red mb-1">
                      {spec.value}
                    </div>
                    <div className="text-sm text-suit-silver">{spec.label}</div>
                    <div className="text-xs text-suit-silver/60 font-mono mt-1">
                      {spec.unit}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <SlideIn direction="right" delay={0.9}>
              <ul className="space-y-3 text-suit-silver">
                <li className="flex items-start gap-3">
                  <span className="text-mars-red mt-1">✓</span>
                  <span>Triple-redundant oxygen tanks with automatic failover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mars-red mt-1">✓</span>
                  <span>Lithium hydroxide CO₂ scrubbers with regeneration capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mars-red mt-1">✓</span>
                  <span>Real-time air quality monitoring and alerts</span>
                </li>
              </ul>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
