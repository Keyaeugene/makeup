'use client';
import { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export default function AdminDashboard() {
  const bookings = useQuery(api.submissions.getBookings);
  const inquiries = useQuery(api.submissions.getInquiries);
  const [activeTab, setActiveTab] = useState<'bookings' | 'inquiries'>('bookings');

  const isLoading = bookings === undefined || inquiries === undefined;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-white">
      {/* Header Section */}
      <div className="border-b border-zinc-800 pb-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light uppercase tracking-widest text-white">ADMIN PORTAL</h1>
          <p className="text-xs text-zinc-400 mt-1">
            Real-time Cloud Syncing • Routing to: <strong className="text-white">atienoshalline29@gmail.com</strong>
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`text-xs tracking-widest uppercase py-2 px-4 border transition-colors ${
              activeTab === 'bookings' 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-500'
            }`}
          >
            Bookings ({bookings ? bookings.length : 0})
          </button>
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`text-xs tracking-widest uppercase py-2 px-4 border transition-colors ${
              activeTab === 'inquiries' 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-500'
            }`}
          >
            Inquiries ({inquiries ? inquiries.length : 0})
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {isLoading ? (
        <div className="text-center py-20 text-xs tracking-widest text-zinc-500 uppercase animate-pulse">
          Syncing secure cloud data...
        </div>
      ) : activeTab === 'bookings' ? (
        <div className="space-y-6">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-white">Received Bookings</h2>

          {bookings.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-zinc-800 text-xs text-zinc-500 tracking-widest uppercase">
              No cloud bookings logged yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {bookings.map((booking) => (
                <div key={booking._id} className="border border-zinc-800 p-6 bg-zinc-950/40 space-y-4 rounded">
                  <div className="flex justify-between items-start border-b border-zinc-800 pb-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white">{booking.service}</h3>
                      <p className="text-[10px] text-zinc-400 uppercase mt-1">Target Appointment: <span className="text-white font-semibold">{booking.date}</span></p>
                    </div>
                    <span className="text-[9px] text-zinc-500 font-mono">
                      {new Date(booking._creationTime).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
                    <p><strong className="text-white">Client:</strong> {booking.name}</p>
                    <p><strong className="text-white">Email:</strong> {booking.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-white">Contact Inquiries</h2>

          {inquiries.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-zinc-800 text-xs text-zinc-500 tracking-widest uppercase">
              No general inquiries logged yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {inquiries.map((inquiry) => (
                <div key={inquiry._id} className="border border-zinc-800 p-6 bg-zinc-950/40 space-y-4 rounded">
                  <div className="flex justify-between items-start border-b border-zinc-800 pb-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white">{inquiry.name}</h3>
                      <p className="text-[10px] text-zinc-400 mt-1">{inquiry.email}</p>
                    </div>
                    <span className="text-[9px] text-zinc-500 font-mono">
                      {new Date(inquiry._creationTime).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed whitespace-pre-line bg-zinc-900/50 p-3 border border-zinc-800 rounded">
                    "{inquiry.message}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}