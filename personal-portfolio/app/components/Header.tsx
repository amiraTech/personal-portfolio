// app/components/Header.tsx
import Link from 'next/link';
//import ThemeToggle from './ThemeToggle'; // We'll still include this for later

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-10 py-5 flex justify-between items-center z-50 bg-[#1E1E1E] bg-opacity-80 backdrop-blur-sm">
      <a href="/#about" className="text-2xl text-white font-semibold">
        Amira.
      </a>
      <div className="flex items-center gap-8">
        <nav>
          <a href="/#about" className="text-lg text-gray-200 font-medium ml-8 hover:text-brand-pink transition-colors">
            About
          </a>
          <a href="/#projects" className="text-lg text-gray-200 font-medium ml-8 hover:text-brand-pink transition-colors">
            Projects
          </a>
          <a href="/#contacts" className="text-lg text-gray-200 font-medium ml-8 hover:text-brand-pink transition-colors">
            Contacts
          </a>
        </nav>
        {/* <ThemeToggle /> You can add this back later */}
      </div>
    </header>
  );
}