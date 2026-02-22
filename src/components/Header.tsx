import React from 'react';

const Header = () => (
  <header className="w-full flex items-center justify-between py-0 px-8 bg-white relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#f63436] via-[#fea930] to-[#f63436] opacity-20" />
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="SEOC Logo" className="h-40" />
      {/* <span className="text-3xl font-bold text-[#FF0A54] tracking-wide">SEOC</span> */}
    </div>
    <nav className="flex-1 flex justify-center">
      <ul className="flex gap-10 text-lg font-medium">
        <li className="relative group cursor-pointer text-black"><a href="/">Home</a></li>
        <li className="cursor-pointer text-black">
          <a href="/about-us">About</a>
        </li>
        <li className="relative group cursor-pointer text-black">
           <a href="/services">Services</a> </li>
        <li className="relative group cursor-pointer text-black">
           <a href="/blogs">Blogs</a> </li>
        {/* <li className="relative group cursor-pointer text-black">Pages <span className="ml-1">▼</span></li> */}
        <li className="cursor-pointer text-black">
           <a href="/contact-us">Contact Us</a> </li>
      </ul>
    </nav>
    <a href="#" className="bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors">
      Get In Touch <span className="ml-1">↗</span>
    </a>
  </header>
);

export default Header;
