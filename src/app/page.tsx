import { HeroSection } from '@/components/sections/HeroSection';
import { InnerShellSection } from '@/components/sections/InnerShellSection';
import { OuterShellSection } from '@/components/sections/OuterShellSection';
import { LifeSupportSection } from '@/components/sections/LifeSupportSection';
import { SpecsSection } from '@/components/sections/SpecsSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <InnerShellSection />
      <OuterShellSection />
      <LifeSupportSection />
      <SpecsSection />
      <Footer />
    </main>
  );
}
