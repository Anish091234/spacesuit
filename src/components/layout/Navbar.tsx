'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-suit-blue to-mars-red" />
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              MARS SUIT
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#helmet"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Helmet
            </a>
            <a
              href="#arms"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Arms
            </a>
            <a
              href="#chest"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Chest
            </a>
            <a
              href="#torso"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Torso
            </a>
            <a
              href="#legs"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Legs
            </a>
            <a
              href="#boots"
              className="text-sm text-suit-silver hover:text-suit-white transition-colors"
            >
              Boots
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-6 py-2 bg-suit-blue hover:bg-suit-blue/80 text-white rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2"
              >
                More
                <svg
                  className={cn(
                    'w-4 h-4 transition-transform',
                    dropdownOpen && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-space-dark border border-space-gray/30 rounded-2xl shadow-xl overflow-hidden z-50">
                  <a
                    href="/about"
                    className="block px-6 py-3 text-sm text-suit-silver hover:text-suit-white hover:bg-space-gray/20 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="/contact"
                    className="block px-6 py-3 text-sm text-suit-silver hover:text-suit-white hover:bg-space-gray/20 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Contact
                  </a>
                  <a
                    href="/careers"
                    className="block px-6 py-3 text-sm text-suit-silver hover:text-suit-white hover:bg-space-gray/20 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
