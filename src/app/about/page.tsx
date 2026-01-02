import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-space-black">
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
              <span className="text-suit-blue font-medium text-sm">ABOUT US</span>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
              Engineering the
              <br />
              <span className="text-suit-silver">Future of Space</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.4}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-suit-silver mb-8 leading-relaxed">
                Mars Suit is at the forefront of next-generation spacesuit technology,
                dedicated to enabling humanity&apos;s expansion to Mars and beyond.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Our Mission</h2>
                  <p className="text-suit-silver leading-relaxed">
                    To develop advanced life support systems that protect and empower
                    astronauts during extended missions on Mars. We combine cutting-edge
                    materials science, biomechanical engineering, and AI-driven life support
                    to create the most capable spacesuits ever designed.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Our Vision</h2>
                  <p className="text-suit-silver leading-relaxed">
                    A future where humans can safely explore and inhabit Mars, equipped
                    with technology that feels like a natural extension of their own
                    capabilities. We believe that the key to successful Mars colonization
                    lies in the interface between human and environment.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Innovation</h2>
                  <p className="text-suit-silver leading-relaxed">
                    Our team of aerospace engineers, materials scientists, and medical
                    experts work together to push the boundaries of what&apos;s possible in
                    extreme environment protection. Every component is designed with
                    redundancy, reliability, and astronaut comfort in mind.
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Meet the Team Section */}
          <SlideIn direction="up" delay={0.6}>
            <div className="mt-20 pt-12 border-t border-space-gray/20">
              <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
              <p className="text-suit-silver text-center mb-12 max-w-2xl mx-auto">
                Our founders bring together expertise in aerospace engineering and innovation
                to push the boundaries of space exploration technology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Anish Rangdal */}
                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8 hover:border-suit-blue/50 transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-suit-blue to-mars-red mb-6 flex items-center justify-center text-4xl font-bold">
                      AR
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Anish Rangdal</h3>
                    <p className="text-suit-blue text-sm font-medium mb-4">Co-Founder &amp; CEO</p>
                    <p className="text-suit-silver text-sm leading-relaxed">
                      Visionary leader with a passion for advancing human space exploration.
                      Anish brings expertise in systems engineering and a commitment to
                      developing cutting-edge technology that will enable humanity&apos;s future
                      on Mars.
                    </p>
                  </div>
                </div>

                {/* Bhavisha Alwani */}
                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8 hover:border-suit-blue/50 transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-mars-red to-suit-blue mb-6 flex items-center justify-center text-4xl font-bold">
                      BA
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Bhavisha Alwani</h3>
                    <p className="text-suit-blue text-sm font-medium mb-4">Co-Founder &amp; CTO</p>
                    <p className="text-suit-silver text-sm leading-relaxed">
                      Technical innovator specializing in advanced materials and life support
                      systems. Bhavisha&apos;s expertise in aerospace engineering drives the
                      development of breakthrough technologies that make Mars exploration
                      safer and more efficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
      <Footer />
    </main>
  );
}
