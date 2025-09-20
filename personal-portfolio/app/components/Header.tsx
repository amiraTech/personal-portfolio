// app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-4 sm:px-10 py-4 flex justify-between items-center z-50 bg-white/80 dark:bg-[#000000]/80 backdrop-blur-sm">
      <Link href="/" className="text-xl font-bold">
        ©amirabuilds
      </Link>
      <div className="flex items-center gap-4 sm:gap-8">
        <nav className="hidden sm:flex items-center gap-2">
          <a href="/#about" className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-[#df0303] hover:text-white">
          About
          </a>
          <a href="/#projects" className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-[#df0303] hover:text-white">
          Projects
          </a>
          <a href="/#experiences" className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-[#df0303] hover:text-white">
          Experiences
          </a>
          <a href="/#services" className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-[#df0303] hover:text-white">
          Services
          </a>
          <a href="/contact" className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-[#df0303] hover:text-white">
          Contact
          </a>
        </nav>
      </div>
    </header>
  );
}