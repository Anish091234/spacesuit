import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Aerospace Engineer',
      department: 'Engineering',
      location: 'Houston, TX',
      type: 'Full-time',
    },
    {
      title: 'Materials Scientist',
      department: 'Research & Development',
      location: 'Houston, TX',
      type: 'Full-time',
    },
    {
      title: 'Life Support Systems Engineer',
      department: 'Engineering',
      location: 'Houston, TX',
      type: 'Full-time',
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Operations',
      location: 'Houston, TX',
      type: 'Full-time',
    },
  ];

  return (
    <main className="relative min-h-screen bg-space-black">
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
              <span className="text-suit-blue font-medium text-sm">CAREERS</span>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
              Join Our
              <br />
              <span className="text-suit-silver">Mission</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.4}>
            <p className="text-xl text-suit-silver mb-12 leading-relaxed max-w-3xl">
              Be part of the team that&apos;s making human Mars exploration possible. We&apos;re
              looking for passionate individuals who want to push the boundaries of
              what&apos;s possible in space technology.
            </p>
          </SlideIn>

          <div className="mb-16">
            <SlideIn direction="up" delay={0.6}>
              <h2 className="text-3xl font-bold mb-8">Why Mars Suit?</h2>
            </SlideIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SlideIn direction="up" delay={0.7}>
                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-6">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-2">Cutting-Edge Work</h3>
                  <p className="text-suit-silver text-sm">
                    Work on technology that will enable the next giant leap for humanity.
                  </p>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.8}>
                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-6">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold mb-2">Innovation Culture</h3>
                  <p className="text-suit-silver text-sm">
                    Collaborate with world-class engineers and scientists in a creative
                    environment.
                  </p>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.9}>
                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-6">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-2">Impact</h3>
                  <p className="text-suit-silver text-sm">
                    Your work will directly contribute to humanity&apos;s future in space.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>

          <div>
            <SlideIn direction="up" delay={1.0}>
              <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            </SlideIn>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <SlideIn key={position.title} direction="up" delay={1.1 + index * 0.1}>
                  <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-6 hover:border-suit-blue/50 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-suit-blue transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-suit-silver">
                          <span className="flex items-center gap-1">
                            <span>🏢</span> {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <span>📍</span> {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <span>⏰</span> {position.type}
                          </span>
                        </div>
                      </div>
                      <button className="px-6 py-2 bg-suit-blue hover:bg-suit-blue/80 text-white rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>

          <SlideIn direction="up" delay={1.6}>
            <div className="mt-12 bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8 text-center">
              <p className="text-suit-silver mb-4">
                Don&apos;t see the right position? We&apos;re always looking for talented individuals.
              </p>
              <a
                href="mailto:careers@marssuit.com"
                className="inline-block px-8 py-3 bg-transparent border-2 border-suit-blue text-suit-blue hover:bg-suit-blue hover:text-white rounded-full font-medium transition-all"
              >
                Send Us Your Resume
              </a>
            </div>
          </SlideIn>
        </div>
      </div>
      <Footer />
    </main>
  );
}
