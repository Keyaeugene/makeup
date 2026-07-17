'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AdminGate from './AdminGate';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Book', path: '/book' },
  { name: 'Contact', path: '/contact' },
];

function LogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 3C10 8 6 10 6 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-4-4-6-8-11z"
        fill="#b85c6b"
        opacity="0.85"
      />
      <path
        d="M14 6c-2 4-4 5.5-4 8 0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.5-2-4-4-8z"
        fill="#d48996"
        opacity="0.6"
      />
      <circle cx="14" cy="14" r="2" fill="#b85c6b" />
    </svg>
  );
}

function SocialIcon({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-colors"
    >
      <span className="text-[10px] font-bold uppercase">{label[0]}</span>
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-cream/95 backdrop-blur-sm sticky top-0 z-50 border-b border-cream-dark">
      <div className="max-w-6xl mx-auto px-6 h-[72px] grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <LogoIcon />
          <span className="font-serif text-lg font-bold tracking-wide text-foreground">SAHLI</span>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors hover:text-accent ${
                pathname === link.path
                  ? 'text-accent font-medium'
                  : 'text-foreground/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social + admin */}
        <div className="flex items-center gap-3 justify-self-end">
          <div className="hidden sm:flex items-center gap-2">
            <SocialIcon label="Instagram" href="https://instagram.com" />
            <SocialIcon label="Facebook" href="https://facebook.com" />
            <SocialIcon label="Pinterest" href="https://pinterest.com" />
          </div>
          <div className="pl-2 border-l border-cream-dark h-6 flex items-center">
            <AdminGate />
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-cream-dark px-6 py-3 flex flex-wrap justify-center gap-4 text-xs">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={pathname === link.path ? 'text-accent font-medium' : 'text-foreground/70'}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
