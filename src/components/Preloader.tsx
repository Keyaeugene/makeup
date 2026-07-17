'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-cream flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-serif text-3xl font-bold tracking-wide text-foreground"
            >
              Sahli
            </motion.h1>

            <div className="relative w-16 h-8 flex items-center justify-center mt-2">
              <motion.div
                animate={{ x: [-12, 12, -12], scale: [1, 0.85, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-4 h-4 rounded-full bg-accent opacity-90"
              />
              <motion.div
                animate={{ x: [12, -12, 12], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-5 h-5 rounded-full bg-accent-light opacity-60"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
