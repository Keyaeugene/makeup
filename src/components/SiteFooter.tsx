export function HomeFooter() {
  return (
    <footer className="relative bg-cream overflow-hidden">
      <div className="relative h-48 md:h-56 flex items-end justify-center pointer-events-none select-none">
        <div className="absolute bottom-4 left-[8%] w-16 h-3 bg-zinc-300/60 rounded-full rotate-[-25deg] blur-[0.5px]" />
        <div className="absolute bottom-8 left-[18%] w-3 h-20 bg-zinc-400/50 rounded-full" />
        <div className="absolute bottom-6 left-[22%] w-8 h-8 rounded-full bg-accent/20 border border-accent/30" />
        <div className="absolute bottom-10 left-[30%] w-12 h-12 border-2 border-zinc-300/70 rounded-sm rotate-12" />
        <div className="absolute bottom-4 left-[38%] w-6 h-14 bg-zinc-300/40 rounded-full" />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-accent/30"
              style={{ opacity: 0.4 + i * 0.1 }}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-[30%] w-10 h-10 border border-zinc-300/60 rounded-full" />
        <div className="absolute bottom-5 right-[22%] w-14 h-4 bg-zinc-300/50 rounded-full rotate-[15deg]" />
        <div className="absolute bottom-10 right-[15%] w-4 h-16 bg-zinc-400/40 rounded-full rotate-[8deg]" />
        <div className="absolute bottom-6 right-[8%] w-8 h-8 rounded-full bg-accent-light/25 border border-accent/20" />
      </div>
    </footer>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-cream-dark py-8 text-center bg-cream">
      <p className="text-[10px] tracking-[0.3em] uppercase text-muted">
        &copy; {new Date().getFullYear()} Sahli Makeup Artistry. All rights reserved.
      </p>
    </footer>
  );
}
