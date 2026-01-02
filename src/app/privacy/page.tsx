import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-space-black">
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
              <span className="text-suit-blue font-medium text-sm">PRIVACY POLICY</span>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
              Privacy
              <br />
              <span className="text-suit-silver">Policy</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.4}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-suit-silver mb-8 leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Introduction</h2>
                  <p className="text-suit-silver leading-relaxed">
                    Mars Suit is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Information We Collect</h2>
                  <p className="text-suit-silver leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                  </p>
                  <ul className="list-disc list-inside text-suit-silver space-y-2 ml-4">
                    <li>Personal Data</li>
                    <li>Derivative Data</li>
                    <li>Financial Data</li>
                    <li>Data from Contests, Giveaways, and Surveys</li>
                  </ul>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Use of Your Information</h2>
                  <p className="text-suit-silver leading-relaxed mb-4">
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                  </p>
                  <ul className="list-disc list-inside text-suit-silver space-y-2 ml-4">
                    <li>Create and manage your account</li>
                    <li>Process your transactions and send you related information</li>
                    <li>Send you technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                  </ul>
                </div>

                <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-4 text-suit-white">Contact Us</h2>
                  <p className="text-suit-silver leading-relaxed">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-suit-blue mt-4">
                    <a href="mailto:privacy@marssuit.com" className="hover:text-suit-blue/80 transition-colors">
                      privacy@marssuit.com
                    </a>
                  </p>
                </div>

                <div className="text-center text-suit-silver/60 text-sm mt-12 p-4 bg-space-dark/30 rounded-xl">
                  <p>This is a placeholder privacy policy. Please update with your actual privacy policy content.</p>
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
