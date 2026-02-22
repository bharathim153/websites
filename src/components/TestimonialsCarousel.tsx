"use client";
import { useState, useEffect } from "react";

export function TestimonialsCarousel() {
  const testimonials = [
  {
    quote: "We've been partnering with SEOC for over a year now, and the results speak for themselves. Their comprehensive digital marketing solutions have helped us achieve measurable growth.",
    author: "David M.",
    stars: 5,
  },
  {
    quote: "As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us.",
    author: "Emily R.",
    stars: 5,
  },
  {
    quote: "Working with SEOC has been a game changer for our business. Their strategic approach to SEO digital marketing has significantly increased our online visibility and lead generation.",
    author: "Sarah L.",
    stars: 5,
  },
];

  const [index, setIndex] = useState(0);
  const visible = [index, (index + 1) % testimonials.length, (index + 2) % testimonials.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  

  return (
    <div className="relative w-full max-w-6xl flex items-center justify-center flex-col mx-auto py-12">
      {/* Left Button */}
      <button
        className="hidden sm:flex absolute left-0 z-10 bg-[#ffe3ef] text-[#f63436] rounded-full w-12 h-12 items-center justify-center shadow transition-all hover:bg-[#f63436] hover:text-white"
        onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        aria-label="Previous testimonial"
      >
        <span className="text-2xl">&#60;</span>
      </button>
      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full justify-center">
        {visible.map((i, idx) => (
          <div
            key={i}
            className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-start w-full max-w-[340px] min-w-[220px] transition-all duration-500 animate-fade-in-up ${idx === 1 ? "scale-105 z-20" : "scale-95 z-10"}`}
          >
            <span className="text-[#f63436] text-3xl mb-4">&#8220;</span>
            <div className="text-zinc-700 mb-6 text-base sm:text-lg">{testimonials[i].quote}</div>
            <div className="flex items-center gap-2 mt-auto w-full">
              <span className="font-bold text-black">{testimonials[i].author}</span>
              <span className="ml-2 flex gap-1">
                {[...Array(testimonials[i].stars)].map((_, s) => (
                  <span key={s} className="text-[#fea930] text-lg">★</span>
                ))}
              </span>
              <span className="ml-auto">
                <svg width="24" height="24" viewBox="0 0 24 24"><g><circle cx="12" cy="12" r="12" fill="#fff"/><text x="12" y="16" textAnchor="middle" fontSize="18" fill="#4285F4" fontWeight="bold">G</text></g></svg>
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Right Button */}
      <button
        className="hidden sm:flex absolute right-0 z-10 bg-[#ffe3ef] text-[#f63436] rounded-full w-12 h-12 items-center justify-center shadow transition-all hover:bg-[#f63436] hover:text-white"
        onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
        aria-label="Next testimonial"
      >
        <span className="text-2xl">&#62;</span>
      </button>
      {/* Mobile navigation below cards */}
      <div className="flex sm:hidden w-full justify-center mt-4 gap-4">
        <button
          className="bg-[#ffe3ef] text-[#f63436] rounded-full w-10 h-10 flex items-center justify-center shadow transition-all hover:bg-[#f63436] hover:text-white"
          onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
        >
          <span className="text-xl">&#60;</span>
        </button>
        <button
          className="bg-[#ffe3ef] text-[#f63436] rounded-full w-10 h-10 flex items-center justify-center shadow transition-all hover:bg-[#f63436] hover:text-white"
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <span className="text-xl">&#62;</span>
        </button>
      </div>
    </div>
  );
}


