'use client';

import { useRef, useEffect, useState } from 'react';
import { SpacesuitScene } from '../three/SpacesuitScene';
import { SlideIn } from '../animations/SlideIn';

export function InnerShellSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Thermal Regulation',
      description: 'Advanced temperature control system maintains optimal body temperature in extreme Martian conditions.',
      icon: '🌡️',
    },
    {
      title: 'Moisture Wicking',
      description: 'Intelligent fabric technology manages perspiration and maintains comfort during long missions.',
      icon: '💧',
    },
    {
      title: 'Biometric Sensors',
      description: 'Real-time health monitoring tracks vital signs and alerts mission control to any anomalies.',
      icon: '❤️',
    },
    {
      title: 'Ergonomic Design',
      description: 'Flexible joint design allows full range of motion while maintaining structural integrity.',
      icon: '🤸',
    },
  ];

  return (
    <section
      id="helmet"
      ref={sectionRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-space-black via-space-dark to-space-black"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background 3D */}
        <div className="absolute inset-0 z-0">
          <SpacesuitScene highlightPart="innerShell" enableControls={false} />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title and description */}
          <div>
            <SlideIn direction="left">
              <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
                <span className="text-suit-blue font-medium text-sm">INNER SHELL</span>
              </div>
            </SlideIn>

            <SlideIn direction="left" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                The Core
                <br />
                <span className="text-suit-silver">Protection Layer</span>
              </h2>
            </SlideIn>

            <SlideIn direction="left" delay={0.4}>
              <p className="text-lg text-suit-silver mb-8">
                The inner shell is your first line of defense. Designed to be worn
                directly against the body, it provides essential life support
                functions while ensuring maximum comfort during extended missions.
              </p>
            </SlideIn>
          </div>

          {/* Right: Features list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <SlideIn key={feature.title} direction="right" delay={0.1 * index}>
                <div className="bg-space-dark/50 backdrop-blur-sm border border-space-gray/30 rounded-2xl p-6 hover:border-suit-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-suit-silver text-sm">{feature.description}</p>
                    </div>
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
