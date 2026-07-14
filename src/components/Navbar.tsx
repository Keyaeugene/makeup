'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'SERVICES', path: '/services' },
    { name: 'BOOK NOW', path: '/book' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50 tracking-widest border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex flex-col md:flex-row items-center justify-between py-4 md:py-0 gap-2 md:gap-0">
        <Link href="/" className="text-xl font-bold uppercase tracking-[0.25em]">
          MINIMALIST ARTISTRY
        </Link>
        <div className="flex gap-8 text-xs font-light tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`transition-colors hover:text-zinc-400 ${pathname === link.path ? 'text-white border-b border-white pb-1' : 'text-zinc-400'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}