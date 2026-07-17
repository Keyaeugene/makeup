'use client';
import { useState } from 'react';
import { portfolioItems, PortfolioItem } from '@/data/portfolio';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Bridal', 'Editorial', 'Special Event', 'Lessons'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(item =>
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-foreground">The Work</h1>
        <div className="w-12 h-px bg-accent mx-auto mt-4" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-xs tracking-widest uppercase pb-1 transition-colors ${
              activeFilter === cat
                ? 'border-b border-accent text-accent font-semibold'
                : 'text-muted hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative cursor-pointer aspect-[4/5] bg-cream-dark overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-cream max-w-2xl w-full text-foreground grid grid-cols-1 md:grid-cols-2 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-sm font-bold z-10 hover:text-accent"
              >
                ✕
              </button>
              <div className="relative aspect-[4/5] w-full">
                <Image src={selectedItem.src} alt={selectedItem.alt} fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-[10px] tracking-widest text-muted uppercase font-bold">
                  {selectedItem.category}
                </span>
                <h2 className="font-serif text-xl font-semibold mt-2 mb-4">{selectedItem.title}</h2>
                <p className="text-xs text-muted font-light leading-relaxed">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
