'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface HUDOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function HUDOverlay({ isOpen, onClose, children }: HUDOverlayProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when overlay is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Only render on client-side
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop with glass morphism */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Main HUD Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative w-full h-full"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] p-3 bg-space-dark/80 backdrop-blur-md border border-space-gray/50 rounded-full hover:border-suit-blue/80 hover:bg-space-dark transition-all group"
              aria-label="Close HUD"
            >
              <svg
                className="w-6 h-6 text-suit-silver group-hover:text-suit-blue transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* ESC hint */}
            <div className="absolute top-6 left-6 z-[110] px-4 py-2 bg-space-dark/80 backdrop-blur-md border border-space-gray/30 rounded-full">
              <span className="text-suit-silver text-sm font-mono">
                Press <span className="text-suit-blue font-semibold">ESC</span> to exit
              </span>
            </div>

            {/* Children (MarsEnvironment + HUD Panels) */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
