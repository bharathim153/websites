

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TechnologyExpertise from "@/components/TechnologyExpertise";
import ProjectProcess from "@/components/ProjectProcess";
import TrustedClients from "@/components/TrustedClients";
import WhyItMatters from "@/components/WhyItMatters";
import ProductDevelopmentServices from "@/components/ProductDevelopmentServices";
import FAQSection from "@/components/FAQSection";

export default function Services() {


  return (
    <div className="min-h-screen w-full bg-[#FFF6F9] font-poppins">
      {/* Poppins font import for this page */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <Header />
      <main className="w-full min-h-[500px] flex flex-col items-start justify-center relative bg-gradient-to-br from-[#eaf0ff] via-[#f5f7ff] to-[#eafcff] py-24 px-8 md:px-24">
        {/* Pill label */}
        <div className="mb-8">
          <span className="inline-flex items-center px-6 py-2 rounded-full bg-blue-100 text-blue-700 text-base font-medium shadow-sm">
            <span className="mr-2">&#x1F4BB;</span> Software Product Development
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Software Product<br className="hidden md:block" /> Development Services</h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
          Expert software product development for web, mobile, and enterprise applications—turning ideas into solutions that grow with your business.
        </p>
        {/* Buttons */}
        <div className="flex gap-6 mt-2">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition-all">Start Your Project <span className="ml-2">→</span></a>
          <a href="#" className="bg-white border border-blue-300 text-blue-600 font-semibold px-8 py-4 rounded-full shadow text-lg transition-all hover:bg-blue-50">View All Services</a>
        </div>

         {/* Why It Matters Section (screenshot-based) */}
        <div className="w-full mt-16">
          <WhyItMatters />
        </div>

        {/* Technology Expertise Section (screenshot-based) */}
        <div className="w-full mt-16">
          <TechnologyExpertise />
        </div>

        {/* Project Process Section (screenshot-based) */}
        <div className="w-full mt-16">
          <ProjectProcess />
        </div>

        {/* Trusted Clients Section (screenshot-based) */}
        <div className="w-full mt-16">
          <TrustedClients />
        </div>

       

        {/* Product Development Services Section (screenshot-based) */}
        <div className="w-full mt-16">
          <ProductDevelopmentServices />
        </div>

        {/* FAQ Section (screenshot-based) */}
        <div className="w-full mt-16">
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
