'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="group relative">
            <h1 className="text-4xl font-black text-white hover:text-[#6b9071] transition-all duration-300">
              S<span className="text-[#6b9071]">.</span>I
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6b9071] group-hover:w-full transition-all duration-300"></div>
          </Link>
          
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path} 
                className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  pathname === item.path
                    ? 'bg-[#6b9071] text-white shadow-lg shadow-[#6b9071]/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          <Link 
            href="/contact"
            className="hidden md:block px-6 py-2.5 bg-[#6b9071] text-white rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#6b9071]/50"
          >
            Let's Talk
          </Link>

          <button className="md:hidden text-white">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
