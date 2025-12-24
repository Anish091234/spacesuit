import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// GSAP default configuration
export const gsapConfig = {
  ease: 'power2.out',
  duration: 0.8,
};

// ScrollTrigger defaults
export const scrollTriggerDefaults = {
  toggleActions: 'play none none reverse',
  start: 'top 80%',
  end: 'bottom 20%',
};

// Scroll-locked section config
export const createScrollLockedSection = (trigger: string, duration: string = '200%') => ({
  trigger,
  start: 'top top',
  end: `+=${duration}`,
  pin: true,
  scrub: 1,
  anticipatePin: 1,
});

export { gsap, ScrollTrigger };
