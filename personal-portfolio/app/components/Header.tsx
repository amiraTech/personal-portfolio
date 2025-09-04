// app/components/Header.tsx
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-4 sm:px-10 py-4 flex justify-between items-center z-50 bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-xl font-bold">
        ©amirabuilds
      </Link>
      <div className="flex items-center gap-4 sm:gap-8">
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium hover:text-brand-pink transition-colors">About</Link>
          <Link href="/projects" className="text-sm font-medium hover:text-brand-pink transition-colors">Projects</Link>
          <Link href="/experiences" className="text-sm font-medium hover:text-brand-pink transition-colors">Experiences</Link>
          <Link href="/services" className="text-sm font-medium hover:text-brand-pink transition-colors">Services</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-brand-pink transition-colors">Contact</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}