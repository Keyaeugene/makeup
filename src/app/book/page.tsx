'use client';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { servicesData } from '@/data/services';
import { useState, Suspense } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';

const bookingSchema = z.object({
  service: z.string().min(1, 'Please select a service option.'),
  date: z.string().min(1, 'Appointment date is required.'),
  name: z.string().min(2, 'Name must be filled.'),
  email: z.string().email('Please enter a valid email.'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

function BookingContent() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  const [success, setSuccess] = useState(false);
  const saveBooking = useMutation(api.submissions.createBooking);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { service: defaultService }
  });

  const onSubmit = async (data: BookingFormValues) => {
    try {
      await saveBooking({
        service: data.service,
        date: data.date,
        name: data.name,
        email: data.email
      });
      setSuccess(true);
    } catch (err) {
      console.error("Failed to save booking:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-16 text-white">
      <div className="text-center mb-12">
        {/* Changed text-black to text-white */}
        <h1 className="text-3xl font-light uppercase tracking-widest text-white">BOOK SESSION</h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-4" />
      </div>

      {success ? (
        <div className="border border-white p-8 text-center space-y-4 text-white">
          <h2 className="text-sm font-semibold uppercase tracking-wider">Booking Request Saved</h2>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            Your appointment has been registered in our database. A copy is routed to <strong className="text-white">atienoshalline29@gmail.com</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            {/* Changed label text color to text-zinc-300 */}
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-zinc-300">Service</label>
            <select 
              {...register('service')} 
              className="w-full bg-white border border-zinc-300 p-3 text-xs focus:outline-none focus:border-black text-black"
            >
              <option value="" className="text-black bg-white">-- Choose Option --</option>
              {servicesData.map((s) => (
                <option key={s.id} value={s.title} className="text-black bg-white">
                  {s.title} ({s.price})
                </option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-[10px] mt-1">{errors.service.message}</p>}
          </div>

          <div>
            {/* Changed label text color to text-zinc-300 */}
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-zinc-300">Date</label>
            <input 
              type="date" 
              {...register('date')} 
              className="w-full bg-white border border-zinc-300 p-3 text-xs focus:outline-none focus:border-black text-black" 
            />
            {errors.date && <p className="text-red-500 text-[10px] mt-1">{errors.date.message}</p>}
          </div>

          <div>
            {/* Changed label text color to text-zinc-300 */}
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-zinc-300">Your Name</label>
            <input 
              type="text" 
              {...register('name')} 
              className="w-full bg-white border border-zinc-300 p-3 text-xs focus:outline-none focus:border-black text-black" 
            />
            {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
          </div>

          <div>
            {/* Changed label text color to text-zinc-300 */}
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-zinc-300">Email Address</label>
            <input 
              type="email" 
              {...register('email')} 
              className="w-full bg-white border border-zinc-300 p-3 text-xs focus:outline-none focus:border-black text-black" 
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-white text-black py-4 text-xs font-semibold tracking-widest uppercase hover:bg-zinc-200 disabled:bg-zinc-600 transition-colors"
          >
            {isSubmitting ? 'Processing...' : 'Request Appointment'}
          </button>
        </form>
      )}
    </div>
  );
}

export default function Book() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-xs tracking-widest text-white">LOADING CONTENT...</div>}>
      <BookingContent />
    </Suspense>
  );
}