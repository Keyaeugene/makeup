'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_IMAGES } from '@/data/portfolio';
import { HomeFooter } from '@/components/SiteFooter';

const heroSlides = [
  {
    title: 'Professional Makeup Artist',
    description:
      "Flawless beauty tailored for Nairobi's high-profile galas, equatorial light photography, and luxury destination weddings. Every look is crafted to enhance your natural radiance.",
  },
  {
    title: 'Bridal & Editorial Artistry',
    description:
      'From timeless bridal glam to bold editorial statements — bespoke makeup designed to last from ceremony to celebration, photographed beautifully in any light.',
  },
];

const services = [
  {
    title: 'Bridal Makeup',
    subtitle: 'From KSh 45,000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-2 3-5 5-5 8a5 5 0 0010 0c0-3-3-5-5-8z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Special Event Makeup',
    subtitle: 'From KSh 15,000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h16M12 4v16" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    title: 'Makeup Lessons',
    subtitle: 'From KSh 25,000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19l4-8 4 4 4-6 4 10H4z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const current = heroSlides[slide];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s === heroSlides.length - 1 ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-cream text-foreground">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4 py-12 lg:py-0">
          {/* Text slides left-to-right */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="space-y-6 z-10"
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] text-foreground">
                {current.title}
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed max-w-lg font-normal">
                {current.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-accent transition-colors group"
              >
                Read more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Image — static */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[420px] md:h-[520px] lg:h-[580px]"
          >
            <Image
              src={PORTFOLIO_IMAGES[0]}
              alt="Professional makeup artistry portrait"
              fill
              priority
              className="object-cover object-top image-blend-edges"
            />
          </motion.div>
        </div>
      </section>

      {/* All Eyes on You */}
<section className="relative py-20 lg:py-28 overflow-hidden">
  <div className="absolute inset-0 bg-section-teal" />
  <div className="absolute inset-y-0 left-0 w-1/4 bg-cream hidden lg:block" />
  <div className="absolute inset-y-0 right-0 w-1/4 bg-cream hidden lg:block" />

  <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
    {/* Services list */}
    <div className="lg:col-span-3 space-y-10 lg:pr-8">
      {services.map((service) => (
        <div key={service.title} className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center text-foreground/60 shrink-0 bg-white/50">
            {service.icon}
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground">{service.title}</h3>
            <p className="text-xs text-foreground/70 mt-1">{service.subtitle}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Center portrait */}
    <div className="lg:col-span-5 relative h-[400px] md:h-[480px] mx-auto w-full max-w-sm lg:max-w-none">
      <Image
        src={PORTFOLIO_IMAGES[0]}
        alt="Makeup artist at work"
        fill
        className="object-cover object-top image-blend-vertical"
      />
    </div>

    {/* Right panel */}
    <div className="lg:col-span-4 space-y-6 text-center lg:text-left lg:pl-8">
      <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
        All Eyes on You
      </h2>
      <p className="text-sm text-foreground/80 leading-relaxed font-normal max-w-sm mx-auto lg:mx-0">
        True beauty doesn&apos;t mask—it highlights. Our sessions are built around flawless,
        structural beauty custom engineered to last effortlessly from day-glam to high-fashion
        studio environments.
      </p>
      <Link
        href="/book"
        className="inline-block border border-foreground px-8 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-foreground hover:text-cream transition-colors"
      >
        Make an Appointment
      </Link>
    </div>
  </div>
</section>

      {/* Trust badges */}
      <section className="py-12 border-t border-cream-dark bg-cream">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-12">
          {['Natural', 'Quality', 'Premium', 'Certified', 'Trusted'].map((badge) => (
            <div
              key={badge}
              className="w-16 h-16 rounded-full border border-zinc-300 flex items-center justify-center"
            >
              <span className="text-[8px] uppercase tracking-wider text-foreground/70 text-center leading-tight px-1">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}