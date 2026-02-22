"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

export default function Home() {
  const [bannerRef, bannerInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [aboutRef, aboutInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [caseRef, caseInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [workRef, workInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [pricingRef, pricingInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [blogRef, blogInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <div className="min-h-screen w-full bg-[#FFF6F9] font-poppins">
      <Header />
      {/* Banner Section */}
      <section
        ref={bannerRef}
        className={`w-full flex flex-col items-center justify-center pt-16 pb-32 px-4 relative overflow-hidden transition-all duration-700 ${bannerInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#f63436] via-[#fea930] to-[#f63436] opacity-20" />
        <div className="mb-4 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fea930]/20 text-[#f63436] font-medium text-sm">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
            Top #1 SEO & Marketing Agency
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center text-black mb-4 animate-slide-in-left delay-100">
          Local SEO Tactics To<br></br> <span className="text-[#f63436] underline decoration-[#fea930]/30 decoration-8">Dominate</span> Your Market
        </h1>
        <p className="text-lg text-center text-zinc-600 max-w-2xl mb-8 animate-slide-in-right delay-200 mt-5">
          Welcome to Iqoniqox where we specialize in revolutionizing your online presence through expert SEO and digital marketing solutions.
        </p>
        <form className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-full shadow-lg px-6 py-4 w-full max-w-4xl animate-fade-in-up delay-300">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-[#fea930]">🔗</span>
              <input type="text" placeholder="https://yoursite.com" className="outline-none border-none bg-transparent flex-1 text-zinc-700 py-2 px-2 rounded-full min-w-0" />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className="text-[#fea930]">✉️</span>
              <input type="email" placeholder="youremail@domain.com" className="outline-none border-none bg-transparent flex-1 text-zinc-700 py-2 px-2 rounded-full min-w-0" />
            </div>
          </div>
          <button type="submit" className="bg-[#f63436] text-white font-semibold px-4 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors w-full sm:w-auto mt-4 sm:mt-0">
            Analyze Now 
          </button>
        </form>


      </section>

      {/* Second Section: About Iqoniqox */}
      <section
        ref={aboutRef}
        className={`relative flex flex-col md:flex-row items-center justify-center gap-8 py-24 px-4 bg-white overflow-visible transition-all duration-700 ${aboutInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Left Image in Circle */}
        <div className="relative flex-shrink-0 animate-float">
          <div className="w-[340px] h-[540px] rounded-full overflow-hidden shadow-lg bg-zinc-100 flex items-center justify-center">
            <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/about-img2.png" alt="SEO Expert" className="object-cover w-full h-full" />
          </div>
          {/* Decorative pink star */}
          <div className="absolute -bottom-8 -left-8 text-4xl text-[#f63436]">✱</div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center md:items-start max-w-xl z-10">
          {/* Circular text badge */}
          <div className="relative flex items-center justify-center mb-10">
            <Link href="/about" passHref legacyBehavior>
              <a tabIndex={0} aria-label="About Iqoniqox" className="block focus:outline-none focus:ring-2 focus:ring-[#f63436] rounded-full p-2">
                <svg width="110" height="110" viewBox="0 0 110 110" className="absolute left-1/2 -translate-x-1/2 top-0 animate-spin-slow cursor-pointer animate-center-scale" style={{ zIndex: 1 }}>
                  <circle cx="55" cy="55" r="52" fill="#fea930" />
                  <defs>
                    <path id="circlePath" d="M55,55 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <text fontSize="12" fill="#fff" fontFamily="Arial" letterSpacing="2">
                    <textPath xlinkHref="#circlePath" startOffset="20">
                      BRAND WITH DEMOUI BUILD A SUCCESS
                    </textPath>
                  </text>
                  <text x="55" y="65" textAnchor="middle" fontSize="22" fill="#f63436" fontFamily="Arial">↗</text>
                </svg>
                <span className="sr-only">About Iqoniqox</span>
              </a>
            </Link>
            <div className="w-[110px] h-[110px]" />
          </div>
          {/* About badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe3ef] text-[#f63436] font-medium text-sm mb-4">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
            About Iqoniqox
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-black mb-4 animate-slide-in-left delay-100" style={{ lineHeight: 1.3 }}>
            Comprehensive SEO<br />& <span className="text-[#f63436] underline decoration-[#f63436]/30 decoration-8">Digital Marketing</span><br />Solutions.
          </h2>
          <p className="text-lg text-center md:text-left text-zinc-600 mb-6 animate-slide-in-right delay-200">
            Welcome to Iqoniqox your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.
          </p>
          <button className="bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors animate-fade-in-up delay-300">
            Learn More <span className="ml-1">↗</span>
          </button>
        </div>

        {/* Right Image in Circle */}
        <div className="relative flex-shrink-0 animate-float-reverse">
          <div className="w-[260px] h-[460px] rounded-full overflow-hidden shadow-lg bg-zinc-100 flex items-center justify-center">
            <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/about-img1.png" alt="Digital Marketer" className="object-cover w-full h-full" />
          </div>
          {/* Decorative pink atomic ring */}
          <svg className="absolute -top-8 -right-8" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#f63436" strokeWidth="2" />
            <ellipse cx="50" cy="50" rx="15" ry="40" stroke="#f63436" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" fill="#fea930" fillOpacity="0.3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className={`relative py-24 px-4 bg-[#f7f8fa] flex flex-col items-center transition-all duration-700 ${servicesInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe3ef] text-[#f63436] font-medium text-sm mb-4">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
          Our Service
        </span>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 animate-slide-in-left delay-100" style={{ lineHeight: 1.3 }}>
          Our Comprehensive Suite Of<br />Digital Marketing <span className="text-[#f63436] underline decoration-[#f63436]/30 decoration-8">Services.</span>
        </h2>
        {/* Service Cards Grid */}
        <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-25 mb-12 mt-12">
          {/* Center logo with rings */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[340px] h-[340px] rounded-full bg-[#fea93030] opacity-60 animate-spin-slow" />
              <div className="absolute w-[220px] h-[220px] rounded-full bg-[#f634364d] opacity-40 animate-pulse" />
              <div className="absolute w-[120px] h-[120px] rounded-full bg-[#0053a19c] opacity-30 animate-float" />
              <span className="w-24 h-24 z-10 flex items-center justify-center animate-center-transform">
                <div className="absolute w-[120px] h-[120px] rounded-full bg-[#ffe3ef] opacity-30 animate-float" />
              </span>
            </div>
          </div>
          {/* Card 1 */}
          <div className="relative z-10 bg-white rounded-xl shadow p-8 flex flex-col gap-2 animate-fade-in-up delay-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffe3ef] text-[#f63436]">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f63436" strokeWidth="2" /><path d="M15 10l-4 4-2-2" stroke="#f63436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" stroke="#f63436" strokeWidth="2" /></svg>
              </span>
              <span className="text-4xl font-bold text-[#ffe3ef] ml-auto">01</span>
            </div>
            <div className="font-bold text-black">Search Engine Optimization</div>
            <div className="text-sm text-zinc-600 mb-2">Our team of experts will optimize your site's on-page elements, create high-quality content, and build authoritative backlinks to boost your rankings attract.</div>
            <a href="#" className="text-sm font-semibold text-[#f63436] hover:underline flex items-center gap-1">Learn More <span>→</span></a>
          </div>
          {/* Card 2 */}
          <div className="relative z-10 bg-white rounded-xl shadow p-8 flex flex-col gap-2 animate-fade-in-up delay-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffe3ef] text-[#f63436]">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#f63436" strokeWidth="2" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#f63436" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
              <span className="text-4xl font-bold text-[#ffe3ef] ml-auto">02</span>
            </div>
            <div className="font-bold text-black">Pay-Per-Click(PPC) Advertising</div>
            <div className="text-sm text-zinc-600 mb-2">Maximize your ROI with strategic PPC campaigns tailored to your business objectives. Whether you're looking to increase brand awareness.</div>
            <a href="#" className="text-sm font-semibold text-[#f63436] hover:underline flex items-center gap-1">Learn More <span>→</span></a>
          </div>
          {/* Card 3 */}
          <div className="relative z-10 bg-white rounded-xl shadow p-8 flex flex-col gap-2 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffe3ef] text-[#f63436]">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f63436" strokeWidth="2" /><path d="M8 12h8M12 8v8" stroke="#f63436" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
              <span className="text-4xl font-bold text-[#ffe3ef] ml-auto">03</span>
            </div>
            <div className="font-bold text-black">Social Media Marketing</div>
            <div className="text-sm text-zinc-600 mb-2">Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.</div>
            <a href="#" className="text-sm font-semibold text-[#f63436] hover:underline flex items-center gap-1">Learn More <span>→</span></a>
          </div>
          {/* Card 4 */}
          <div className="relative z-10 bg-white rounded-xl shadow p-8 flex flex-col gap-2 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ffe3ef] text-[#f63436]">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#f63436" strokeWidth="2" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#f63436" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
              <span className="text-4xl font-bold text-[#ffe3ef] ml-auto">04</span>
            </div>
            <div className="font-bold text-black">Content Marketing</div>
            <div className="text-sm text-zinc-600 mb-2">Nurture leads, drive conversions, and build customer loyalty with targeted email marketing campaigns. From automated drip campaigns & personalized newsletters.</div>
            <a href="#" className="text-sm font-semibold text-[#f63436] hover:underline flex items-center gap-1">Learn More <span>→</span></a>
          </div>
        </div>
        {/* View More Button */}
        <button className="bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors animate-fade-in-up delay-500">
          View More Services <span className="ml-1">↗</span>
        </button>
      </section>

      {/* Case Study Section */}
      <section
        ref={caseRef}
        className={`relative py-24 px-4 bg-white flex flex-col items-center transition-all duration-700 ${caseInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe3ef] text-[#f63436] font-medium text-sm mb-4">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
          Case Study
        </span>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Our Handpicked Digital<br />Marketing <span className="text-[#f63436] underline decoration-[#f63436]/30 decoration-8">Case Study</span>
        </h2>
        {/* Cards Row */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl">
          {/* Card 1 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 w-full md:min-w-[180px] md:max-w-[180px] h-[340px] md:hover:min-w-[340px] md:hover:max-w-[340px] md:hover:z-20 md:hover:shadow-2xl md:hover:scale-105">
            <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/case-img1.png" alt="Website Design & Development" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute left-2 top-2 bg-[#ffe3ef] text-[#f63436] px-3 py-1 rounded-full text-xs font-semibold">Website Design & Development</span>
            <span className="absolute left-[30px] bottom-4 text-white text-lg font-bold rotate-[-90deg] origin-bottom-left hidden md:block">Website Design & Development</span>
            <span className="absolute left-2 bottom-4 text-white text-lg font-bold md:hidden">Website Design & Development</span>
          </div>
          {/* Card 2 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 w-full md:min-w-[180px] md:max-w-[180px] h-[340px] md:hover:min-w-[340px] md:hover:max-w-[340px] md:hover:z-20 md:hover:shadow-2xl md:hover:scale-105">
            <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/case-img2.png" alt="SEO" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute left-2 top-2 bg-[#ffe3ef] text-[#f63436] px-3 py-1 rounded-full text-xs font-semibold">SEO</span>
            <span className="absolute left-[30px] bottom-4 text-white text-lg font-bold rotate-[-90deg] origin-bottom-left hidden md:block">SEO</span>
            <span className="absolute left-2 bottom-4 text-white text-lg font-bold md:hidden">SEO</span>
          </div>
          {/* Card 3 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 w-full md:min-w-[180px] md:max-w-[180px] h-[340px] md:hover:min-w-[340px] md:hover:max-w-[340px] md:hover:z-20 md:hover:shadow-2xl md:hover:scale-105">
            <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/case-img3.png" alt="PPC Advertising" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute left-5 top-2 bg-[#ffe3ef] text-[#f63436] px-3 py-1 rounded-full text-xs font-semibold">PPC Advertising</span>
            <span className="absolute left-[30px] bottom-4 text-white text-lg font-bold rotate-[-90deg] origin-bottom-left hidden md:block">PPC Advertising</span>
            <span className="absolute left-2 bottom-4 text-white text-lg font-bold md:hidden">PPC Advertising</span>
          </div>
          {/* Card 4 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 w-full md:min-w-[340px] md:max-w-[340px] h-[340px]">
            <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/case-img4.png" alt="Social Media Marketing" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute left-2 top-2 bg-[#ffe3ef] text-[#f63436] px-3 py-1 rounded-full text-xs font-semibold">Social Media Marketing</span>
            <div className="absolute left-4 bottom-4 text-white">
              <div className="text-lg font-bold mb-1">Social Media Marketing</div>
              <div className="text-xs opacity-80">Digital Art. Illustrations</div>
            </div>
            {/* Example icons overlay */}
            <div className="absolute right-4 top-4 flex flex-row md:flex-col gap-2">
              <span className="bg-white/80 rounded-full p-2 text-[#f63436] shadow"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /></svg></span>
              <span className="bg-white/80 rounded-full p-2 text-[#fea930] shadow"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="#fea930" /></svg></span>
              <span className="bg-white/80 rounded-full p-2 text-[#0053a1] shadow"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#0053a1" /></svg></span>
            </div>
          </div>
        </div>

      </section>

      {/* Work Process Section */}
      <section
        ref={workRef}
        className={`relative py-24 px-4 bg-[#f7f8fa] flex flex-col items-center transition-all duration-700 ${workInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe3ef] text-[#f63436] font-medium text-sm mb-4 animate-fade-in-up">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
          Work Process
        </span>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-12 animate-fade-in-up">
          {/* Left: Heading and content */}
          <div className="flex-1 flex flex-col items-start md:items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-slide-in-left delay-100">
              Iqoniqox Your Path to<br />SEO & Digital<br />
              <span className="text-[#f63436] underline decoration-[#f63436]/30 decoration-8">Marketing Success</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-6 animate-slide-in-right delay-200">
              From increasing your website's visibility on search engines to engaging with your audience on social media,
            </p>
            <button className="bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors animate-fade-in-up delay-300">
              Learn More <span className="ml-1">↗</span>
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-end animate-fade-in-up delay-200">
            <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/case-img8.png" alt="Work Process" className="rounded-2xl w-full max-w-[420px] h-[320px] object-cover shadow-lg" />
          </div>
        </div>
        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center animate-fade-in-up delay-100">
            <span className="mb-4 bg-[#ffe3ef] rounded-full p-4 text-[#f63436]">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f63436" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="#f63436" strokeWidth="2" strokeLinecap="round" /></svg>
            </span>
            <div className="font-bold text-xl text-black mb-2">Strategy Development</div>
            <div className="text-sm text-zinc-600 mb-4 text-center">Based on our findings, we develop customized digital marketing strategy tailored objective.</div>
            <a href="#" className="text-sm font-semibold text-[#f63436] hover:underline flex items-center gap-1">Learn More <span>→</span></a>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center animate-fade-in-up delay-200">
            <span className="mb-4 bg-[#ffe3ef] rounded-full p-4 text-[#f63436]">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#f63436" strokeWidth="2" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#f63436" strokeWidth="2" strokeLinecap="round" /></svg>
            </span>
            <div className="font-bold text-xl text-black mb-2">Monitoring & Optimization</div>
            <div className="text-sm text-zinc-600 mb-4 text-center">We believe in the power of data-driven decision-making. Throughout the campaign,.</div>
            <a href="#" className="text-sm font-semibold text-[#f63436] hover:underline flex items-center gap-1">Learn More <span>→</span></a>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center animate-fade-in-up delay-300">
            <span className="mb-4 bg-[#ffe3ef] rounded-full p-4 text-[#f63436]">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f63436" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="#f63436" strokeWidth="2" strokeLinecap="round" /></svg>
            </span>
            <div className="font-bold text-xl text-black mb-2">Continuous Improvement</div>
            <div className="text-sm text-zinc-600 mb-4 text-center">Digital marketing is an ever-evolving field, and we're committed to staying ahead of the Iqoniqox curve.</div>
            <a href="#" className="text-sm font-semibold text-[#f63436] hover:underline flex items-center gap-1">Learn More <span>→</span></a>
          </div>
        </div>
      </section>

      {/* Pricing & Plan Section */}
      <section
        ref={pricingRef}
        className={`relative py-24 px-4 bg-white flex flex-col items-center transition-all duration-700 ${pricingInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe3ef] text-[#f63436] font-medium text-sm mb-4 animate-fade-in-up">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
          Pricing & Plan
        </span>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 animate-fade-in-up">
          Iqoniqox <span className="text-[#f63436] underline decoration-[#f63436]/30 decoration-8">Pricing Plan</span>
        </h2>
        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in-up">
          {/* Basic Plan */}
          <div className="bg-[#f7f8fa] rounded-xl shadow p-8 flex flex-col items-center animate-fade-in-up delay-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
            <div className="font-bold text-xl text-black mb-2">Basic Plan - Starter</div>
            <div className="text-sm text-zinc-600 mb-4 text-center">Our SEO and Digital Marketing agency offers a range of pricing plans tailored</div>
            <hr className="w-full border-zinc-200 mb-4" />
            <div className="text-4xl font-bold text-black mb-2">$999 <span className="text-base font-normal">/monthly</span></div>
            <button className="bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors mb-6 mt-2">
              Choose Your Plan <span className="ml-1">↗</span>
            </button>
            <div className="bg-white rounded-lg p-4 w-full mb-4">
              <div className="font-semibold mb-2">Service Include:</div>
              <ul className="text-sm text-zinc-600">
                <li className="flex items-center gap-2 mb-1"><span className="text-[#f63436]">✔</span> Keyword Research</li>
                <li className="flex items-center gap-2 mb-1"><span className="text-[#f63436]">✔</span> One Page Optimization</li>
                <li className="flex items-center gap-2 mb-1"><span className="text-[#f63436]">✔</span> Basic Analytics Reporting</li>
              </ul>
            </div>
            <div className="text-xs text-zinc-500 text-center">Small businesses or startups looking to establish their online presence.</div>
          </div>
          {/* Standard Plan - Highlighted */}
          <div className="bg-[#f63436] rounded-xl shadow-lg p-8 flex flex-col items-center animate-fade-in-up delay-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
            <div className="font-bold text-xl text-white mb-2">Standard Plan - Growth</div>
            <div className="text-sm text-white mb-4 text-center">Our SEO and Digital Marketing agency offers a range of pricing plans tailored</div>
            <hr className="w-full border-white/30 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">$1999 <span className="text-base font-normal">/monthly</span></div>
            <button className="bg-black text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors mb-6 mt-2">
              Choose Your Plan <span className="ml-1">↗</span>
            </button>
            <div className="bg-[#f63436] rounded-lg p-4 w-full mb-4">
              <div className="font-semibold mb-2 text-white">Service Include:</div>
              <ul className="text-sm text-white">
                <li className="flex items-center gap-2 mb-1"><span className="text-white">✔</span> Keyword Research</li>
                <li className="flex items-center gap-2 mb-1"><span className="text-white">✔</span> One Page Optimization</li>
                <li className="flex items-center gap-2 mb-1"><span className="text-white">✔</span> Basic Analytics Reporting</li>
              </ul>
            </div>
            <div className="text-xs text-white text-center">Small businesses or startups looking to establish their online presence.</div>
          </div>
          {/* Premium Plan */}
          <div className="bg-[#f7f8fa] rounded-xl shadow p-8 flex flex-col items-center animate-fade-in-up delay-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
            <div className="font-bold text-xl text-black mb-2">Premium Plan - Pro</div>
            <div className="text-sm text-zinc-600 mb-4 text-center">Our SEO and Digital Marketing agency offers a range of pricing plans tailored</div>
            <hr className="w-full border-zinc-200 mb-4" />
            <div className="text-4xl font-bold text-black mb-2">$2999 <span className="text-base font-normal">/monthly</span></div>
            <button className="bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors mb-6 mt-2">
              Choose Your Plan <span className="ml-1">↗</span>
            </button>
            <div className="bg-white rounded-lg p-4 w-full mb-4">
              <div className="font-semibold mb-2">Service Include:</div>
              <ul className="text-sm text-zinc-600">
                <li className="flex items-center gap-2 mb-1"><span className="text-[#f63436]">✔</span> Keyword Research</li>
                <li className="flex items-center gap-2 mb-1"><span className="text-[#f63436]">✔</span> One Page Optimization</li>
                <li className="flex items-center gap-2 mb-1"><span className="text-[#f63436]">✔</span> Basic Analytics Reporting</li>
              </ul>
            </div>
            <div className="text-xs text-zinc-500 text-center">Small businesses or startups looking to establish their online presence.</div>
          </div>
        </div>
      </section>


      {/* Testimonials Carousel Section */}
      <section
        ref={testimonialsRef}
        className={`relative py-24 px-4 bg-[#f7f8fa] flex flex-col items-center transition-all duration-700 ${testimonialsInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe3ef] text-[#f63436] font-medium text-sm mb-4 animate-fade-in-up">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
          Testimonials
        </span>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 animate-fade-in-up">
          "What Our <span className="text-[#f63436] underline decoration-[#f63436]/30 decoration-8">Client Say</span>"
        </h2>
        {/* Carousel */}
        <TestimonialsCarousel />
      </section>


      {/* Blog & News Section: Insights & Updates Digital Marketing */}
      <section
        ref={blogRef}
        className={`relative py-24 px-4 bg-white flex flex-col items-center transition-all duration-700 ${blogInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Blog badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe3ef] text-[#f63436] font-medium text-sm mb-4 animate-fade-in-up">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2Z" fill="#f63436" /><circle cx="12" cy="14" r="6" fill="#f63436" opacity=".2" /></svg>
          Blog & News
        </span>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 animate-fade-in-up">
          "Insights & Updates <span className="text-[#f63436] underline decoration-[#f63436]/30 decoration-8">Digital Marketing</span>"
        </h2>
        {/* Blog Cards Row */}
        <div className="flex flex-row gap-8 justify-center items-stretch w-full max-w-6xl">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#f7f8fa] p-8 flex flex-col w-full max-w-[540px] animate-fade-in-up">
            <div className="flex items-center gap-4 mb-4 text-zinc-500 text-sm">
              <span className="flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="#222" strokeWidth="2" strokeLinecap="round" /></svg> John Doe</span>
              <span className="flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#222" strokeWidth="2" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#222" strokeWidth="2" strokeLinecap="round" /></svg> 12 Feb 2024</span>
            </div>
            <div className="font-bold text-2xl text-black mb-2">Social Media Marketing Strategies to Drive Engagement and Conversions</div>
            <div className="text-zinc-600 mb-4">Discover the latest trends and best practices in social media marketing with our comprehensive guide. Learn how to leverage different.</div>
            <a href="#" className="font-semibold text-black hover:text-[#f63436] mb-4 flex items-center gap-1">Learn More <span className="text-lg">→</span></a>
            <div className="rounded-xl overflow-hidden mt-2">
              <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/blog-img6.png" alt="Social Media Marketing" className="object-cover w-full h-[220px]" />
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#f7f8fa] p-8 flex flex-col w-full max-w-[540px] animate-fade-in-up">
            <div className="flex items-center gap-4 mb-4 text-zinc-500 text-sm">
              <span className="flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="#222" strokeWidth="2" strokeLinecap="round" /></svg> John Doe</span>
              <span className="flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#222" strokeWidth="2" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#222" strokeWidth="2" strokeLinecap="round" /></svg> 12 Feb 2024</span>
            </div>
            <div className="font-bold text-2xl text-black mb-2">Content Marketing 101: How to Create Compelling Content That Converts</div>
            <div className="text-zinc-600 mb-4">Unlock the secrets to successful content marketing with our expert tips and strategies. Whether you're a beginner or a seasoned marketer.</div>
            <a href="#" className="font-semibold text-black hover:text-[#f63436] mb-4 flex items-center gap-1">Learn More <span className="text-lg">→</span></a>
            <div className="rounded-xl overflow-hidden mt-2">
              <img src="https://seoc-html-v2.vercel.app/assets/img/all-images/blog-img6.png" alt="Content Marketing" className="object-cover w-full h-[220px]" />
            </div>
          </div>
        </div>



      </section>

      {/* SEO Consultation CTA Section */}
      <section
        ref={ctaRef}
        className={`relative py-22 px-4 w-full flex flex-col items-center justify-center bg-[#ff0a53] overflow-hidden transition-all duration-700 ${ctaInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
      >
        {/* Animated background rings */}
        <div className="absolute left-0 top-0 w-[600px] h-[600px] -z-10">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="600" r="300" fill="#ff3a7a" fillOpacity="0.4" />
            <circle cx="300" cy="600" r="220" fill="#ff3a7a" fillOpacity="0.3" />
            <circle cx="300" cy="600" r="140" fill="#ff3a7a" fillOpacity="0.2" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-[600px] h-[600px] -z-10">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="0" r="300" fill="#ff3a7a" fillOpacity="0.4" />
            <circle cx="300" cy="0" r="220" fill="#ff3a7a" fillOpacity="0.3" />
            <circle cx="300" cy="0" r="140" fill="#ff3a7a" fillOpacity="0.2" />
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 animate-fade-in-up">Ready To Take Your SEO To<br />The Next Level</h2>
        <p className="text-lg text-center text-white/80 mb-8 animate-fade-in-up delay-100">Effective SEO strategies not only elevate a website's visibility but also drive targeted traffic, enhance user experience,</p>
        <button className="bg-black text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors animate-fade-in-up delay-200">
          Get A Free Consultation <span className="ml-1">↗</span>
        </button>
      </section>

      <Footer />
    </div>
  );
}
