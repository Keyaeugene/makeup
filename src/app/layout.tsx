import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luxury Makeup Portfolio',
  description: 'Clean, high-contrast custom portfolio inspired by professional editorial cosmetics layouts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen flex flex-col antialiased`}>
        {/* Wrap everything in your Convex Providers */}
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="bg-black text-zinc-500 py-10 text-center text-xs tracking-widest border-t border-zinc-900">
            &copy; {new Date().getFullYear()} LUXURY ARTISTRY. ALL RIGHTS RESERVED.
          </footer>
        </Providers>
      </body>
    </html>
  );
}