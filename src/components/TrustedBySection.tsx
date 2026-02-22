'use client';
import React, { useRef, useEffect, useState } from 'react';

const logos = [
  {
    name: 'Amazon',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="32" fill="white">amazon</text>
        <path d="M20 35 Q30 45 40 35" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'FedEx',
    svg: (
      <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="32" fill="white">FedEx</text>
      </svg>
    ),
  },
  {
    name: 'Google',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="32" fill="white">Google</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="10" width="10" height="10" fill="white"/>
        <rect x="12" y="10" width="10" height="10" fill="white"/>
        <rect x="0" y="22" width="10" height="10" fill="white"/>
        <rect x="12" y="22" width="10" height="10" fill="white"/>
        <text x="28" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="32" fill="white">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Airbnb',
    svg: (
      <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 Q55 20 50 30 Q45 20 50 10 Z" stroke="white" strokeWidth="2" fill="none"/>
        <text x="60" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="32" fill="white">airbnb</text>
      </svg>
    ),
  },
];

const VISIBLE_COUNT = 4;

const TrustedBySection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Carousel auto-move
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Carousel navigation
  const prev = () => setCurrent((prev) => (prev - 1 + logos.length) % logos.length);
  const next = () => setCurrent((prev) => (prev + 1) % logos.length);

  // Get visible logos (looping)
  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      arr.push(logos[(current + i) % logos.length]);
    }
    return arr;
  };

  return (
    <section className="bg-[#4B2ED5] py-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Left: Text */}
        <div className="flex flex-col items-start md:items-start md:w-1/4 text-white mb-6 md:mb-0">
          <span className="text-lg font-semibold">Trusted by</span>
          <span className="text-lg font-semibold">Top Companies</span>
        </div>
        {/* Right: Carousel */}
        <div className="relative w-full md:w-3/4 flex items-center justify-center">
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-0 z-10 bg-[#4B2ED5] hover:bg-[#3a22a3] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex items-center gap-12 md:gap-16 w-full justify-center overflow-hidden">
            {getVisible().map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center justify-center" style={{ minWidth: 100, minHeight: 40 }}>
                {logo.svg}
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-0 z-10 bg-[#4B2ED5] hover:bg-[#3a22a3] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
