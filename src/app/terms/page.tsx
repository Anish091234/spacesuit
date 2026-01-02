import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-space-black">
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
              <span className="text-suit-blue font-medium text-sm">TERMS OF SERVICE</span>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
              Terms of
              <br />
              <span className="text-suit-silver">Service</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.4}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-suit-silver mb-8 leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Agreement to Terms</h2>
                  <p className="text-suit-silver leading-relaxed">
                    By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Use License</h2>
                  <p className="text-suit-silver leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on Mars Suit&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-suit-silver space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on Mars Suit&apos;s website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Disclaimer</h2>
                  <p className="text-suit-silver leading-relaxed">
                    The materials on Mars Suit&apos;s website are provided on an &apos;as is&apos; basis. Mars Suit makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Limitations</h2>
                  <p className="text-suit-silver leading-relaxed">
                    In no event shall Mars Suit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mars Suit&apos;s website.
                  </p>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Revisions</h2>
                  <p className="text-suit-silver leading-relaxed">
                    Mars Suit may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Contact Us</h2>
                  <p className="text-suit-silver leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="text-suit-blue mt-4">
                    <a href="mailto:legal@marssuit.com" className="hover:text-suit-blue/80 transition-colors">
                      legal@marssuit.com
                    </a>
                  </p>
                </div>

                <div className="text-center text-suit-silver/60 text-sm mt-12 p-4 bg-space-dark/30 rounded-xl">
                  <p>This is a placeholder terms of service. Please update with your actual terms of service content.</p>
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
