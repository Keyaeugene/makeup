'use client';
import { useState } from 'react';
import { useAction } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const saveInquiry = useAction(api.actions.createInquiry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);
    try {
      await saveInquiry({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setSent(true);
    } catch (err) {
      console.error("Failed to send inquiry:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4 space-y-4 text-white">
        <h1 className="text-2xl font-light uppercase tracking-widest">CONTACT STUDIO</h1>
        <p className="text-xs text-zinc-300 font-light leading-relaxed tracking-wide">
          Available for global travel bookings, traditional Ruracio sessions, and private editorial makeup consultations.
        </p>
      </div>

      <div className="md:col-span-8 bg-zinc-50 p-8 border border-zinc-200 text-black">
        {sent ? (
          <div className="text-center py-12 space-y-4">
            <p className="text-xs uppercase tracking-widest font-semibold">Message Dispatched Successfully</p>
            <p className="text-xs text-zinc-800 font-light max-w-sm mx-auto">
              Your inquiry has been stored securely. A copy of this notification is sent to <strong className="text-black">atienoshalline29@gmail.com</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="YOUR NAME"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-zinc-300 p-3 text-xs tracking-widest focus:outline-none focus:border-black text-black"
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-zinc-300 p-3 text-xs tracking-widest focus:outline-none focus:border-black text-black"
            />
            <textarea
              rows={5}
              placeholder="MESSAGE BODY"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-zinc-300 p-3 text-xs tracking-widest focus:outline-none focus:border-black resize-none text-black"
            />

            {error && (
              <p className="text-xs text-red-600 font-light tracking-wide">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white text-xs tracking-widest uppercase font-semibold px-8 py-3 hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}