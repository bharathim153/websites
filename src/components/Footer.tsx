import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-zinc-200 pt-16 pb-8 px-4 w-full overflow-hidden">
      {/* Animated background rings */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] -z-10 animate-spin-slow">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="400" r="200" fill="#ff0a53" fillOpacity="0.12" />
          <circle cx="200" cy="400" r="140" fill="#ff0a53" fillOpacity="0.08" />
          <circle cx="200" cy="400" r="80" fill="#ff0a53" fillOpacity="0.05" />
        </svg>
      </div>
      <div className="absolute right-0 top-0 w-[400px] h-[400px] -z-10 animate-spin-slow-reverse">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="0" r="200" fill="#ff0a53" fillOpacity="0.12" />
          <circle cx="200" cy="0" r="140" fill="#ff0a53" fillOpacity="0.08" />
          <circle cx="200" cy="0" r="80" fill="#ff0a53" fillOpacity="0.05" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.png" alt="Iqoniqox Logo" width={260} height={260} />
            {/* <span className="ml-3 text-3xl font-bold text-[#ff0a53]">Iqoniqox</span> */}
          </div>
          <p className="text-zinc-600 mb-6">By optimizing content, leveraging relevant keywords, and adhering to best practices, businesses can secure prominent position (SEO)</p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#ffe3ef] rounded-full w-10 h-10 flex items-center justify-center text-[#ff0a53] hover:bg-[#ff0a53] hover:text-white transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/></svg></a>
            <a href="#" className="bg-[#ffe3ef] rounded-full w-10 h-10 flex items-center justify-center text-[#ff0a53] hover:bg-[#ff0a53] hover:text-white transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#ff0a53" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="#ff0a53" strokeWidth="2" strokeLinecap="round" /></svg></a>
            <a href="#" className="bg-[#ffe3ef] rounded-full w-10 h-10 flex items-center justify-center text-[#ff0a53] hover:bg-[#ff0a53] hover:text-white transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#ff0a53" strokeWidth="2" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#ff0a53" strokeWidth="2" strokeLinecap="round" /></svg></a>
            <a href="#" className="bg-[#ffe3ef] rounded-full w-10 h-10 flex items-center justify-center text-[#ff0a53] hover:bg-[#ff0a53] hover:text-white transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#ff0a53" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="#ff0a53" strokeWidth="2" strokeLinecap="round" /></svg></a>
          </div>
        </div>
        {/* About Link */}
        <div>
          <div className="font-bold text-xl mb-4 text-black">About Link</div>
          <ul className="text-zinc-700 space-y-2">
            <li><a href="#" className="hover:text-[#ff0a53] transition">Our Blog</a></li>
            <li><a href="#" className="hover:text-[#ff0a53] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#ff0a53] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#ff0a53] transition">Marketing</a></li>
            <li><a href="#" className="hover:text-[#ff0a53] transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-[#ff0a53] transition">Contact Us</a></li>
          </ul>
        </div>
        {/* Get in touch */}
        <div>
          <div className="font-bold text-xl mb-4 text-black">Get in touch</div>
          <ul className="text-zinc-700 space-y-2">
            <li className="flex items-center gap-2"><span className="text-xl">✉️</span> InfoIqoniqox@gmail.com</li>
            <li className="flex items-center gap-2"><span className="text-xl">📍</span> 8708 Technology Forest PI Suite 125 -G, The Woodlands, TX 773</li>
            <li className="flex items-center gap-2"><span className="text-xl">📞</span> 123-456-7890</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <div className="font-bold text-xl mb-4 text-black">Subscribe Our Newsletter</div>
          <form className="flex gap-2">
            <input type="email" placeholder="Enter Your email" className="bg-[#ffe3ef] rounded-full px-4 py-2 text-zinc-700 outline-none border-none flex-1" />
            <button type="submit" className="bg-[#ff0a53] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#fea930] transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
      <hr className="my-8 border-zinc-200" />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-zinc-500 text-sm">
        <div className="mb-2 md:mb-0">©Copyright 2024 Iqoniqox . All rights reserved</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#ff0a53] transition">Terms & Conditions</a>
          <a href="#" className="hover:text-[#ff0a53] transition">Privacy Policy</a>
        </div>
        <div className="ml-auto">
          <button className="bg-white border border-zinc-300 rounded-full w-12 h-12 flex items-center justify-center text-black hover:bg-[#ff0a53] hover:text-white transition"><span className="text-2xl">↑</span></button>
        </div>
      </div>
    </footer>
  );
}
