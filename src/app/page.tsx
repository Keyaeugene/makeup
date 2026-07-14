'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <div className="relative w-full min-h-[calc(100vh-5rem)] bg-[#EFA0A3] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 items-center gap-8 py-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex flex-col justify-center items-start text-black z-10 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
              30% OFF RESORT & BRIDAL GLAM Masterclass
            </h1>
            <p className="text-sm font-light max-w-sm tracking-wide leading-relaxed">
              Experience flawless beauty tailored for Nairobi's high-profile galas, equatorial light photography, and luxury destination weddings.
            </p>
            <Link href="/book" className="bg-black text-white uppercase text-xs tracking-widest font-semibold px-10 py-4 transition-transform hover:scale-105">
              Book Consultation
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:col-span-7 relative w-full h-[450px] md:h-[600px]"
          >
            <Image
              src="https://picsum.photos/1200/1000?random=10"
              alt="Beauty Focus Reference"
              fill
              priority
              className="object-cover object-center shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* NEW: Luxury Philosophy Statement (Bobbi Brown High-Contrast Aesthetic) */}
      <section className="bg-black text-white py-24 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-[10px] tracking-[0.4em] text-zinc-400 font-bold uppercase">THE PHILOSOPHY</h2>
          <h3 className="text-2xl md:text-4xl font-light tracking-widest uppercase leading-snug">
            CELEBRATING RICH MELANIN, RADIANT SKIN, AND TIMELESS GLAMOUR.
          </h3>
          <div className="w-16 h-[1px] bg-white mx-auto my-6" />
          <p className="text-xs md:text-sm text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            True artistry isn't about masking who you are—it's about structural definition and high-definition elegance. Our studio specializes in weightless, long-wear applications scientifically configured to withstand equatorial warmth while glowing flawlessly under photography studio lights. From pristine traditional dowry events to sleek corporate galas, we deliver unmatched prestige.
          </p>
        </div>
      </section>

      {/* NEW: Client Quick Links Feature Row */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-3">
            <h4 className="text-xs tracking-widest font-bold uppercase">Nairobi Studio Sessions</h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">Sophisticated, clean private suite experiences located in the serene heart of the city.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs tracking-widest font-bold uppercase">Destination Bridal Teams</h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">Full concierge travel mapping spanning Nairobi, Naivasha, Mombasa, and elegant coastal venues.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs tracking-widest font-bold uppercase">Traditional Celebrations</h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">Tailored soft-glam looks intentionally customized for memorable Ruracio and traditional ceremonies.</p>
          </div>
        </div>
      </section>
    </div>
  );
}