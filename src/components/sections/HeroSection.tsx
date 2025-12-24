'use client';

import { FadeIn } from '../animations/FadeIn';
import { SlideIn } from '../animations/SlideIn';
import { SpacesuitScene } from '../three/SpacesuitScene';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SpacesuitScene autoRotate={true} enableControls={false} />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black/60 via-transparent to-space-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-6 bg-gradient-to-r from-suit-white via-suit-silver to-suit-blue bg-clip-text text-transparent">
            The Future of Mars
            <br />
            Exploration
          </h1>
        </FadeIn>

        <SlideIn delay={0.5} direction="up">
          <p className="text-lg sm:text-xl md:text-2xl text-suit-silver text-center max-w-2xl mb-12">
            Next-generation spacesuit technology engineered for the harsh
            Martian environment
          </p>
        </SlideIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-suit-blue hover:bg-suit-blue/80 text-white rounded-full font-medium transition-all hover:scale-105">
              Explore Features
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-suit-white hover:bg-suit-white hover:text-space-black text-white rounded-full font-medium transition-all">
              View Specifications
            </button>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1.2}>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-sm text-suit-silver">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-suit-silver flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-suit-silver rounded-full animate-bounce" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
