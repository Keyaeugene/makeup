import { servicesData } from '@/data/services';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-light uppercase tracking-widest">SERVICES & PRICING</h1>
        <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
      </div>

      <div className="space-y-12">
        {servicesData.map((service) => (
          <div key={service.id} className="border-b border-zinc-200 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                <h3 className="text-md font-medium uppercase tracking-wider">{service.title}</h3>
                <span className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-500 font-light">{service.duration}</span>
              </div>
              <p className="text-xs text-zinc-1000 mt-2 font-light leading-relaxed">{service.description}</p>
            </div>
            <div className="text-right flex flex-col items-end w-full md:w-auto">
              <span className="text-lg font-light tracking-widest mb-2">{service.price}</span>
              <Link href={`/book?service=${service.id}`} className="text-[10px] tracking-widest font-semibold text-white bg-black px-4 py-2 uppercase hover:bg-zinc-800">
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}