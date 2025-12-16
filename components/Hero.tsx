'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'I build digital experiences that solve real-world problems';

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#8A9A5B]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#6b9071]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#8B1A4F]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
              Sandrine
              <br />
              <span className="text-[#6b9071]">Ingabire</span>
            </h1>
            <div className="flex flex-wrap gap-3 text-lg lg:text-xl">
              <span className="bg-[#6b9071]/20 text-gray-200 px-5 py-2.5 rounded-xl border border-[#6b9071]/20 font-medium">
                Software Developer
              </span>
              <span className="bg-[#6b9071]/20 text-gray-200 px-5 py-2.5 rounded-xl border border-[#6b9071]/20 font-medium">
                UI/UX Designer
              </span>
            </div>
          </div>
          
          <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
            {text}<span className="animate-pulse text-[#8A9A5B]">|</span>
          </p>

          <div className="flex flex-wrap gap-5 pt-6">
            <Link 
              href="/projects" 
              className="group relative px-10 py-4 bg-[#6b9071] text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#6b9071]/50 hover:rotate-1 transform-gpu"
            >
              <div className="absolute inset-0 bg-[#8A9A5B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
              <div className="absolute -inset-1 bg-[#6b9071] rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                View Projects
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <a 
              href="/cv.pdf" 
              download
              className="group relative px-10 py-4 border-2 border-[#8A9A5B]/50 text-[#8A9A5B] rounded-xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:border-[#6b9071] hover:-rotate-1 transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8A9A5B]/10 to-[#6b9071]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8A9A5B] to-[#6b9071] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#6b9071] group-hover:-translate-x-1 transition-all duration-300">
                <svg className="w-5 h-5 group-hover:-translate-x-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </a>
          </div>

          <div className="flex gap-4 pt-6">
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-xl glass-effect flex items-center justify-center hover:bg-[#6b9071]/20 transition-all duration-300 hover:scale-110 hover:border-[#6b9071]/50"
              title="GitHub"
            >
              <svg className="w-7 h-7 text-white group-hover:text-[#6b9071] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/ingabire-sandrine-443321381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-xl glass-effect flex items-center justify-center hover:bg-[#6b9071]/20 transition-all duration-300 hover:scale-110 hover:border-[#6b9071]/50"
              title="LinkedIn"
            >
              <svg className="w-7 h-7 text-white group-hover:text-[#6b9071] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/____1ngabire?igsh=MXJ1ZGE0a2g1bmJsMg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-xl glass-effect flex items-center justify-center hover:bg-[#6b9071]/20 transition-all duration-300 hover:scale-110 hover:border-[#6b9071]/50"
              title="Instagram"
            >
              <svg className="w-7 h-7 text-white group-hover:text-[#6b9071] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="mailto:ingasandrine031@gmail.com"
              className="group w-14 h-14 rounded-xl glass-effect flex items-center justify-center hover:bg-[#6b9071]/20 transition-all duration-300 hover:scale-110 hover:border-[#6b9071]/50"
              title="Email"
            >
              <svg className="w-7 h-7 text-white group-hover:text-[#6b9071] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={`relative ${mounted ? 'animate-float' : 'opacity-0'}`}>
          <div className="relative w-[400px] h-[400px] mx-auto">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-[#6b9071]/20 animate-ping" style={{animationDuration: '3s'}}></div>
            <div className="absolute inset-8 rounded-full border-2 border-[#6b9071]/20 animate-ping" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#6b9071] p-1 animate-glow shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="/images/profile.jpg"
                  alt="Sandrine Ingabire"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-[#8A9A5B]/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
            <div className="absolute bottom-10 -left-10 w-16 h-16 bg-[#8B1A4F]/40 rounded-full blur-xl animate-bounce" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -right-5 w-12 h-12 bg-[#6b9071]/40 rounded-full blur-lg animate-bounce" style={{animationDuration: '2.5s', animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="/about" className="flex flex-col items-center gap-2 text-[#8A9A5B] hover:text-[#6b9071] transition-colors group">
          <span className="text-sm font-semibold">Learn More</span>
          <svg className="w-8 h-8 group-hover:translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
