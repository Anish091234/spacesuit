'use client';

import { useEffect, RefObject } from 'react';
import { gsap } from '@/lib/animations/gsapConfig';

interface ScrollAnimationOptions {
  trigger: RefObject<Element> | string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onUpdate?: (progress: number) => void;
}

export function useScrollAnimation(
  animation: gsap.core.Tween | gsap.core.Timeline,
  options: ScrollAnimationOptions
) {
  useEffect(() => {
    const ScrollTrigger = require('gsap/dist/ScrollTrigger').ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const trigger = typeof options.trigger === 'string'
      ? options.trigger
      : options.trigger.current;

    if (!trigger) return;

    ScrollTrigger.create({
      trigger,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub !== undefined ? options.scrub : false,
      pin: options.pin || false,
      animation,
      onUpdate: (self: { progress: number }) => {
        if (options.onUpdate) {
          options.onUpdate(self.progress);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [animation, options]);
}
