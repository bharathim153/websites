
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TrustedBySection from "@/components/TrustedBySection";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
        <div className="min-h-screen w-full bg-[#FFF6F9] font-poppins">
          {/* Poppins font import for this page */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <Header />
        <main className="min-h-[300px] w-full bg-[#f5f3ff] flex flex-col items-center justify-start pt-12 relative overflow-hidden">
          {/* Decorative left purple ball */}
          <div className="absolute left-[-60px] top-24 w-40 h-40 bg-[#a78bfa] rounded-full shadow-2xl opacity-80 blur-xl z-0" />
          {/* Decorative right pink asterisk */}
          <div className="absolute right-8 top-40 z-0 text-5xl select-none" style={{ color: '#f472b6' }}>*</div>
          <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-gray-700 text-base mt-8 mb-4">
              <a href="/" className="hover:underline">Home</a>
              <span className="mx-1">&#8250;</span>
              <span className="font-semibold text-black">About Us</span>
            </nav>
            {/* Heading */}
            <h1 className="text-5xl font-bold text-center text-black mb-4">About Us</h1>
          </div>


        </main>

        {/* Section 1: Left Image, Right Content */}
        <section className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto my-12 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center bg-gray-100">
            <img src="/logo.png" alt="About us 1" className="object-contain h-48" />
          </div>
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#a78bfa]">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-2">We strive to deliver the best digital solutions for our clients, focusing on innovation, quality, and customer satisfaction.</p>
            <p className="text-gray-500">Our team is passionate about technology and dedicated to making a positive impact in the industry.</p>
          </div>
        </section>

        {/* Section 2: Left Image, Right Content */}
        <section className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto my-12 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center bg-gray-100">
            <img src="/window.svg" alt="About us 2" className="object-contain h-48" />
          </div>
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#f472b6]">Our Vision</h2>
            <p className="text-gray-700 text-lg mb-2">To be a trusted partner for businesses worldwide, empowering them to achieve their goals through cutting-edge technology.</p>
            <p className="text-gray-500">We believe in continuous growth, learning, and delivering value to our stakeholders.</p>
          </div>
        </section>

        {/* Trusted By Section */}
        <TrustedBySection />
        <Footer />
      </div>
    </>
  );
}
