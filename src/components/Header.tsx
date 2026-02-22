'use client';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full flex items-center justify-between py-0 px-8 bg-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#f63436] via-[#fea930] to-[#f63436] opacity-20" />
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="SEOC Logo" className="h-40" />
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-10 text-lg font-medium">
          <li className="relative group cursor-pointer text-black"><a href="/">Home</a></li>
          <li className="cursor-pointer text-black"><a href="/about-us">About</a></li>
          <li className="relative group cursor-pointer text-black"><a href="/services">Services</a></li>
          <li className="relative group cursor-pointer text-black"><a href="/blogs">Blogs</a></li>
          <li className="relative group cursor-pointer text-black"><a href="/pages">Pages</a></li>
          <li className="cursor-pointer text-black"><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center text-black focus:outline-none z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="#4B2ED5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {/* Mobile Nav Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[350px] bg-white z-30 shadow-lg transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{maxWidth:'100vw'}}>
        <div className="flex items-center justify-between px-6 py-4">
          <img src="/logo.png" alt="SEOC Logo" className="h-10" />
          <button className="text-2xl text-black" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="#000" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
        <nav className="flex flex-col px-6 gap-2">
          <ul className="flex flex-col gap-2 text-lg font-medium">
            <li className="flex items-center justify-between py-2"><a href="/" onClick={() => setMenuOpen(false)}>Home</a><span className="text-xl">+</span></li>
            <li className="flex items-center justify-between py-2"><a href="/about-us" onClick={() => setMenuOpen(false)}>About</a><span className="text-xl">+</span></li>
            <li className="flex items-center justify-between py-2"><a href="/services" onClick={() => setMenuOpen(false)}>Services</a><span className="text-xl">+</span></li>
            <li className="flex items-center justify-between py-2"><a href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</a><span className="text-xl">+</span></li>
            <li className="flex items-center justify-between py-2"><a href="/pages" onClick={() => setMenuOpen(false)}>Pages</a><span className="text-xl">+</span></li>
            <li className="flex items-center justify-between py-2"><a href="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
          </ul>
          <a href="#" className="bg-[#4B2ED5] text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 mt-6 hover:bg-[#fea930] transition-colors">
            Get Started <span className="ml-1 bg-white text-[#4B2ED5] rounded-full p-1">↗</span>
          </a>
        </nav>
        {/* Contact Info */}
        <div className="px-6 mt-8">
          <div className="text-lg font-bold mb-2">Contact Info</div>
          <div className="flex items-center gap-2 mb-1 text-black">
            <span className="text-xl">📞</span>
            <span>+3(924)4596512</span>
          </div>
          <div className="flex items-center gap-2 mb-1 text-black">
            <span className="text-xl">✉️</span>
            <span>info@example.com</span>
          </div>
          <div className="text-lg font-bold mt-4 mb-2">Our Location</div>
          <div className="flex items-center gap-2 text-black">
            <span className="text-xl">📍</span>
            <span>55 East Birchwood Ave.Brooklyn,</span>
          </div>
        </div>
      </div>
      {/* Desktop CTA */}
      <a href="#" className="hidden md:flex bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full items-center gap-2 hover:bg-[#fea930] transition-colors">
        Get In Touch <span className="ml-1">↗</span>
      </a>
      {/* Overlay for mobile menu */}
      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-20" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;
