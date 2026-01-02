import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-space-black">
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-block px-4 py-2 bg-suit-blue/20 border border-suit-blue/40 rounded-full mb-6">
              <span className="text-suit-blue font-medium text-sm">CONTACT</span>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
              Get in
              <br />
              <span className="text-suit-silver">Touch</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.4}>
            <p className="text-xl text-suit-silver mb-12 leading-relaxed">
              Have questions about our spacesuit technology? Interested in partnership
              opportunities? We&apos;d love to hear from you.
            </p>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <SlideIn direction="left" delay={0.6}>
              <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8 hover:border-suit-blue/50 transition-all">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:info@marssuit.com"
                  className="text-suit-blue hover:text-suit-blue/80 transition-colors"
                >
                  info@marssuit.com
                </a>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.8}>
              <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8 hover:border-suit-blue/50 transition-all">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold mb-2">Location</h3>
                <p className="text-suit-silver">
                  Mars Technology Center
                  <br />
                  Houston, TX 77058
                </p>
              </div>
            </SlideIn>
          </div>

          <SlideIn direction="up" delay={1.0}>
            <div className="bg-space-dark/50 border border-space-gray/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-space-black border border-space-gray/30 rounded-lg focus:border-suit-blue focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-space-black border border-space-gray/30 rounded-lg focus:border-suit-blue focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-space-black border border-space-gray/30 rounded-lg focus:border-suit-blue focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-space-black border border-space-gray/30 rounded-lg focus:border-suit-blue focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-suit-blue hover:bg-suit-blue/80 text-white rounded-full font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </SlideIn>
        </div>
      </div>
      <Footer />
    </main>
  );
}
