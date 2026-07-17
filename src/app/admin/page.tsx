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
    <div className="max-w-6xl mx-auto px-6 py-16 text-zinc-900">
      {/* Header Section */}
      <div className="border-b border-zinc-300 pb-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-widest text-zinc-900">ADMIN PORTAL</h1>
          <p className="text-sm text-zinc-600 mt-1">
            Real-time Cloud Syncing • Routing to: <strong className="text-zinc-900">atienoshalline29@gmail.com</strong>
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`text-sm tracking-widest uppercase py-2 px-4 border transition-colors ${
              activeTab === 'bookings' 
                ? 'bg-zinc-900 text-white border-zinc-900' 
                : 'bg-transparent text-zinc-600 border-zinc-300 hover:text-zinc-900 hover:border-zinc-500'
            }`}
          >
            Bookings ({bookings ? bookings.length : 0})
          </button>
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`text-sm tracking-widest uppercase py-2 px-4 border transition-colors ${
              activeTab === 'inquiries' 
                ? 'bg-zinc-900 text-white border-zinc-900' 
                : 'bg-transparent text-zinc-600 border-zinc-300 hover:text-zinc-900 hover:border-zinc-500'
            }`}
          >
            Inquiries ({inquiries ? inquiries.length : 0})
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {isLoading ? (
        <div className="text-center py-20 text-sm tracking-widest text-zinc-500 uppercase animate-pulse">
          Syncing secure cloud data...
        </div>
      ) : activeTab === 'bookings' ? (
        <div className="space-y-6">
          <h2 className="text-base font-semibold tracking-widest uppercase text-zinc-900">Received Bookings</h2>

          {bookings.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-zinc-300 text-sm text-zinc-500 tracking-widest uppercase">
              No cloud bookings logged yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {bookings.map((booking) => (
                <div key={booking._id} className="border border-zinc-300 p-6 bg-white shadow-sm space-y-4 rounded">
                  <div className="flex justify-between items-start border-b border-zinc-200 pb-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">{booking.service}</h3>
                      <p className="text-xs text-zinc-500 uppercase mt-1">Target Appointment: <span className="text-zinc-900 font-bold">{booking.date}</span></p>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">
                      {new Date(booking._creationTime).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-700">
                    <p><strong className="text-zinc-900 font-semibold">Client:</strong> {booking.name}</p>
                    <p><strong className="text-zinc-900 font-semibold">Email:</strong> {booking.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-base font-semibold tracking-widest uppercase text-zinc-900">Contact Inquiries</h2>

          {inquiries.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-zinc-300 text-sm text-zinc-500 tracking-widest uppercase">
              No general inquiries logged yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {inquiries.map((inquiry) => (
                <div key={inquiry._id} className="border border-zinc-300 p-6 bg-white shadow-sm space-y-4 rounded">
                  <div className="flex justify-between items-start border-b border-zinc-200 pb-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">{inquiry.name}</h3>
                      <p className="text-xs text-zinc-500 mt-1">{inquiry.email}</p>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">
                      {new Date(inquiry._creationTime).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-700 italic leading-relaxed whitespace-pre-line bg-zinc-50 p-3 border border-zinc-200 rounded">
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