import { servicesData } from '@/data/services';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light uppercase tracking-widest text-white">SERVICES & PRICING</h1>
        <div className="w-12 h-[1px] bg-white mx-auto mt-4" />
      </div>

      <div className="space-y-12">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="border-b border-zinc-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-medium uppercase tracking-wider text-white">
                  {service.title}
                </h3>
                <span className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-200 font-light rounded whitespace-nowrap">
                  {service.duration}
                </span>
              </div>
              <p className="text-sm text-zinc-300 mt-2 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="text-right flex flex-col items-end w-full md:w-auto">
              <span className="text-xl font-light tracking-wide whitespace-nowrap mb-2 text-white">
                {service.price}
              </span>
              <Link
                href={`/book?service=${service.id}`}
                className="text-xs tracking-widest font-semibold text-black bg-white px-5 py-2.5 uppercase hover:bg-zinc-200 transition-colors whitespace-nowrap"
              >
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}