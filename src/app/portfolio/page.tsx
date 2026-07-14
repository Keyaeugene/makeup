'use client';
import { useState } from 'react';
import { portfolioItems, PortfolioItem } from '@/data/portfolio';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Bridal', 'Ruracio', 'Editorial', 'Gala Glam'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-light uppercase tracking-widest">THE WORK</h1>
        <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
      </div>

      <div className="flex justify-center gap-6 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-xs tracking-widest uppercase pb-1 ${activeFilter === cat ? 'border-b border-black text-black font-semibold' : 'text-zinc-400 hover:text-black'}`}
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
            className="group relative cursor-pointer aspect-[4/5] bg-zinc-100 overflow-hidden border border-zinc-200"
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
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
            <div className="bg-white max-w-2xl w-full text-black grid grid-cols-1 md:grid-cols-2 relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 text-sm font-bold">✕</button>
              <div className="relative aspect-[4/5] w-full">
                <Image src={selectedItem.src} alt={selectedItem.alt} fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-bold">{selectedItem.category}</span>
                <h2 className="text-xl font-light uppercase tracking-widest mt-2 mb-4">{selectedItem.title}</h2>
                <p className="text-xs text-zinc-600 font-light leading-relaxed">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}