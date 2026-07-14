'use client';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4 space-y-4">
        <h1 className="text-2xl font-light uppercase tracking-widest">CONTACT STUDIO</h1>
        <p className="text-xs text-zinc-500 font-light leading-relaxed tracking-wide">
          Available for global travel bookings, bridal master consultation design houses, and fashion events.
        </p>
      </div>

      <div className="md:col-span-8 bg-zinc-50 p-8 border border-zinc-200">
        {sent ? (
          <div className="text-center py-12 text-xs uppercase tracking-widest">Message successfully dispatched.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
            <input type="text" placeholder="NAME" required className="w-full bg-white border border-zinc-300 p-3 text-xs tracking-widest focus:outline-none focus:border-black" />
            <input type="email" placeholder="EMAIL" required className="w-full bg-white border border-zinc-300 p-3 text-xs tracking-widest focus:outline-none focus:border-black" />
            <textarea rows={5} placeholder="MESSAGE" required className="w-full bg-white border border-zinc-300 p-3 text-xs tracking-widest focus:outline-none focus:border-black resize-none" />
            <button type="submit" className="bg-black text-white text-xs tracking-widest uppercase font-semibold px-8 py-3 hover:bg-zinc-800">
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}