'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { ShieldAlert } from 'lucide-react';

export default function AdminGate() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Fetch data live in the background to count total items
  const bookings = useQuery(api.submissions.getBookings);
  const inquiries = useQuery(api.submissions.getInquiries);

  const totalCount = (bookings?.length || 0) + (inquiries?.length || 0);

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Grabs the passkey from your local .env file
    const correctPasskey = process.env.NEXT_PUBLIC_ADMIN_PASSKEY;

    if (password === correctPasskey) {
      setIsOpen(false);
      setError(false);
      setPassword('');
      router.push('/admin');
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative">
      {/* Admin Security Icon with Live Notification Counter Badge */}
      <button 
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none flex items-center justify-center"
        aria-label="Admin Portal"
      >
        <ShieldAlert className="w-5 h-5 stroke-[1.5]" />
        
        {/* Numerical Badge: Only shows when the count is greater than 0 */}
        {totalCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-black shadow-lg animate-pulse">
            {totalCount}
          </span>
        )}
      </button>

      {/* Password Auth Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="border border-zinc-800 bg-zinc-950 p-8 max-w-sm w-full rounded-lg text-center space-y-6">
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white">SECURE ACCESS REQUIRED</h3>
              <p className="text-[10px] text-zinc-500 tracking-wider mt-1">ENTER THE MASTER KEY CODE TO ACCESS THE DATABASE</p>
            </div>

            <form onSubmit={handleAccessSubmit} className="space-y-4">
              <input 
                type="password"
                placeholder="••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className="w-full bg-zinc-900 border border-zinc-800 p-3 text-center text-white tracking-[0.5em] text-sm focus:outline-none focus:border-white"
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-[10px] uppercase tracking-widest">ACCESS DENIED. INVALID PASSKEY.</p>
              )}

              <div className="flex gap-3 pt-2">
                <button 
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setError(false);
                    setPassword('');
                  }}
                  className="w-1/2 border border-zinc-800 text-zinc-400 py-2.5 text-[10px] tracking-widest uppercase hover:text-white hover:border-zinc-500"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-1/2 bg-white text-black py-2.5 text-[10px] tracking-widest font-semibold uppercase hover:bg-zinc-200"
                >
                  Authorize
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}