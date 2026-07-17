import { servicesData } from '@/data/services';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl font-bold text-foreground">Services & Pricing</h1>
        <div className="w-12 h-px bg-accent mx-auto mt-4" />
      </div>

      <div className="space-y-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="border-b border-cream-dark pb-10 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8"
          >
            {/* Left: Title + Description */}
            <div className="flex-1 min-w-0">
              {/* Title row: stack on mobile, side-by-side on md+ */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <span className="text-xs px-3 py-1 bg-section-teal text-foreground font-medium rounded w-fit">
                  {service.duration}
                </span>
              </div>
              <p className="text-base text-foreground font-normal leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Right: Price + CTA */}
            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-3 w-full md:w-auto shrink-0">
              <span className="text-xl font-normal tracking-wide text-foreground">
                {service.price}
              </span>
              <Link
                href={`/book?service=${service.id}`}
                className="text-xs tracking-widest font-semibold text-cream bg-foreground px-6 py-2.5 uppercase hover:bg-accent transition-colors"
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