import { HeroSection } from '@/components/sections/HeroSection';
import { InnerShellSection } from '@/components/sections/InnerShellSection';
import { OuterShellSection } from '@/components/sections/OuterShellSection';
import { LifeSupportSection } from '@/components/sections/LifeSupportSection';
import { SpecsSection } from '@/components/sections/SpecsSection';
import { HelmetDetailSection } from '@/components/sections/HelmetDetailSection';
import { ArmsDetailSection } from '@/components/sections/ArmsDetailSection';
import { ChestDetailSection } from '@/components/sections/ChestDetailSection';
import { TorsoDetailSection } from '@/components/sections/TorsoDetailSection';
import { LegsDetailSection } from '@/components/sections/LegsDetailSection';
import { BootsDetailSection } from '@/components/sections/BootsDetailSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <InnerShellSection />
      <OuterShellSection />
      <LifeSupportSection />
      <SpecsSection />
      <HelmetDetailSection />
      <ArmsDetailSection />
      <ChestDetailSection />
      <TorsoDetailSection />
      <LegsDetailSection />
      <BootsDetailSection />
      <Footer />
    </main>
  );
}
