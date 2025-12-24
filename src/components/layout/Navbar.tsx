'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-space-black/80 backdrop-blur-md border-b border-space-gray/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-suit-blue to-mars-red" />
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              MARS SUIT
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#overview"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Overview
            </a>
            <a
              href="#features"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Features
            </a>
            <a
              href="#specs"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Specifications
            </a>
            <button className="px-6 py-2 bg-suit-blue hover:bg-suit-blue/80 text-white rounded-full text-sm font-medium transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
