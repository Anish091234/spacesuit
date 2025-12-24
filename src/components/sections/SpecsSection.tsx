'use client';

import { SlideIn } from '../animations/SlideIn';
import { FadeIn } from '../animations/FadeIn';

export function SpecsSection() {
  const specifications = [
    {
      category: 'Physical',
      items: [
        { label: 'Total Weight', value: '55 kg' },
        { label: 'Height Range', value: '155-195 cm' },
        { label: 'Chest Circumference', value: '85-130 cm' },
      ],
    },
    {
      category: 'Environmental',
      items: [
        { label: 'Operating Temp', value: '-140°C to +120°C' },
        { label: 'Pressure Range', value: '4.3 PSI' },
        { label: 'Dust Protection', value: 'IP68' },
      ],
    },
    {
      category: 'Power & Life Support',
      items: [
        { label: 'Battery Life', value: '8 hours' },
        { label: 'O₂ Supply', value: '8 hours' },
        { label: 'Cooling System', value: 'Liquid cooling' },
      ],
    },
    {
      category: 'Communications',
      items: [
        { label: 'Radio Range', value: '50 km' },
        { label: 'Video', value: '1080p @ 60fps' },
        { label: 'Data Link', value: '10 Mbps' },
      ],
    },
  ];

  return (
    <section id="specs" className="relative min-h-screen bg-space-dark py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <SlideIn direction="up">
            <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
              <span className="text-suit-blue font-medium text-sm">SPECIFICATIONS</span>
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.2}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Technical
              <br />
              <span className="text-suit-silver">Specifications</span>
            </h2>
          </SlideIn>

          <SlideIn direction="up" delay={0.4}>
            <p className="text-lg text-suit-silver max-w-3xl mx-auto">
              Engineered for the extreme conditions of Mars with cutting-edge
              materials and technology.
            </p>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specifications.map((spec, index) => (
            <FadeIn key={spec.category} delay={0.1 * index}>
              <div className="bg-space-black/50 backdrop-blur-sm border border-space-gray/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6 text-suit-blue">
                  {spec.category}
                </h3>
                <ul className="space-y-4">
                  {spec.items.map((item) => (
                    <li key={item.label} className="border-b border-space-gray/20 pb-3 last:border-0">
                      <div className="text-sm text-suit-silver mb-1">{item.label}</div>
                      <div className="font-mono text-suit-white">{item.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center bg-gradient-to-r from-suit-blue/10 via-mars-red/10 to-suit-blue/10 border border-space-gray/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore Mars?</h3>
            <p className="text-suit-silver mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn more about the Mars Suit and how
              it can support your mission to the Red Planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-suit-blue hover:bg-suit-blue/80 text-white rounded-full font-medium transition-all hover:scale-105">
                Request Information
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-suit-white hover:bg-suit-white hover:text-space-black text-white rounded-full font-medium transition-all">
                Download Spec Sheet
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
