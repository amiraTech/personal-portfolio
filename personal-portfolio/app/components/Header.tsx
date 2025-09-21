// app/components/Header.tsx
"use client"; 

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", title: "About" },
    { href: "/#projects", title: "Projects" },
    { href: "/#experiences", title: "Experiences" },
    { href: "/#services", title: "Services" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-4 sm:px-10 py-4 flex justify-between items-center z-50 bg-black/80 backdrop-blur-sm">
        <Link href="/" className="text-xl font-bold">
          ©amirabuilds
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Desktop */}
          <nav className="hidden sm:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-[#df0303] hover:text-white"
              >
                {link.title}
              </a>
            ))}
          </nav>
          {/* Hamburger Menu */}
          <button
            className="sm:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center sm:hidden z-40 pt-20">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-2xl font-semibold text-white hover:text-razzmatazz transition-colors"
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}