import Footer from "@/components/Footer";

import Header from "@/components/Header";

export default function Services() {
                 
         
  return (
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
            <span className="font-semibold text-black">Our Services</span>
          </nav>
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center mb-4" style={{color:'#f63436'}}>Our Services</h1>
          {/* Screenshot-based Service Cards Section */}
          <section className="my-16 w-full flex flex-col items-center bg-[#f5f3ff] py-12 relative ">
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#f63436] via-[#fea930] to-[#f63436] opacity-10" />
            <span className="text-[#6c3ee7] font-medium mb-2">Our Service</span>
            <h2 className="text-5xl font-bold text-center mb-8">Social Media Service</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              {/* SEO Card */}
              <div className="bg-[#ffd6e0] rounded-xl shadow-md flex flex-col items-center p-8 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 text-center">Search Engine Optimization<br/>( SEO )</h3>
                <img src="/file.svg" alt="SEO" className="h-16 mb-4" />
                <p className="text-gray-700 text-center">Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.</p>
              </div>
              {/* PPC Card */}
              <div className="bg-[#d6d6ff] rounded-xl shadow-md flex flex-col items-center p-8 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 text-center">Pay-Per-Click (PPC)<br/>Advertising</h3>
                <img src="/window.svg" alt="PPC" className="h-16 mb-4" />
                <p className="text-gray-700 text-center">Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.</p>
              </div>
              {/* Social Media Marketing Card */}
              <div className="bg-[#ffe9a0] rounded-xl shadow-md flex flex-col items-center p-8 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 text-center">Social Media Marketing</h3>
                <img src="/globe.svg" alt="Social Media Marketing" className="h-16 mb-4" />
                <p className="text-gray-700 text-center">Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns to boost brand.</p>
              </div>
              {/* Website Design Card */}
              <div className="bg-[#d6ffd6] rounded-xl shadow-md flex flex-col items-center p-8 w-72 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 text-center">Website Design and<br/>Development</h3>
                <img src="/vercel.svg" alt="Website Design" className="h-16 mb-4" />
                <p className="text-gray-700 text-center">Make a lasting impression with a professionally designed and user-friendly website. Our web design and development services ensure website.</p>
              </div>
            </div>
            <a href="#" className="bg-[#6c3ee7] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors w-fit text-lg">View More Services <span className="ml-1">↗</span></a>
          </section>

          {/* Section 2: Screenshot-based Digital Advertising */}
          <section className="my-8 w-full bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center border-l-8 border-[#fea930]">
            <div className="md:w-1/2 w-full flex items-center justify-center bg-[#f5f3ff] p-8">
              <img src="/window.svg" alt="Digital Advertising" className="object-contain h-64 rounded-xl shadow-lg" />
            </div>
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <span className="text-[#fea930] font-medium mb-2">Digital Advertising</span>
              <h2 className="text-4xl font-bold mb-4" style={{color:'#f63436'}}>Digital Advertising</h2>
              <p className="text-gray-700 mb-6">Boost your online presence with SEOC’s Digital Advertising solutions. We create targeted campaigns that maximize your ROI, reach the right audience, and deliver impactful results. Let us help you navigate the digital landscape and achieve your marketing goals.</p>
              <a href="#" className="bg-[#fea930] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#f63436] transition-colors w-fit">View Our Services <span className="ml-1">↗</span></a>
            </div>
          </section>
             {/* Screenshot-based Team Section */}
            <section className="my-16 w-full flex flex-col items-center py-12 relative overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 -z-10 animate-gradient opacity-10" />
              <span className="text-[#6c3ee7] font-medium mb-2">Our Team</span>
              <h2 className="text-5xl font-bold text-center mb-8">Meet With Our Expert Team</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member 1" className="h-72 w-56 object-cover rounded-xl shadow-md mb-4" />
                  <div className="text-xl font-semibold">John Doe</div>
                  <div className="text-gray-500">CEO & Founder</div>
                </div>
                {/* Team Member 2 */}
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Team Member 2" className="h-72 w-56 object-cover rounded-xl shadow-md mb-4" />
                  <div className="text-xl font-semibold">Jane Smith</div>
                  <div className="text-gray-500">Digital Marketing Officer</div>
                </div>
                {/* Team Member 3 */}
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Team Member 3" className="h-72 w-56 object-cover rounded-xl shadow-md mb-4" />
                  <div className="text-xl font-semibold">Sarah Thompson</div>
                  <div className="text-gray-500">Web Designer</div>
                </div>
                {/* Team Member 4 */}
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Team Member 4" className="h-72 w-56 object-cover rounded-xl shadow-md mb-4" />
                  <div className="text-xl font-semibold">David Garcia</div>
                  <div className="text-gray-500">Content Writer</div>
                </div>
              </div>
            </section>
             {/* Screenshot-based Blog/News Section */}
                  <section className="my-16 w-full flex flex-col items-center bg-[#f5f3ff] py-12">
                    <span className="text-[#6c3ee7] font-medium mb-2">Our Blog</span>
                    <h2 className="text-5xl font-bold text-center mb-8">Our Latest Blog & News</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
                      {/* Blog Card 1 */}
                      <div className="bg-white rounded-xl shadow-md flex flex-col w-96 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="SEO Blog" className="h-56 w-full object-cover" />
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <span>Ben Stokes</span>
                            <span>•</span>
                            <span>16 August 2023</span>
                          </div>
                          <div className="text-lg font-semibold mb-2">10 Essential SEO Tips to Boost Your Website's Ranking</div>
                          <div className="text-gray-700 mb-4">Are you looking to improve your website's visibility and attract more organic traffic?</div>
                          <a href="#" className="font-semibold text-[#6c3ee7] hover:text-[#f63436]">Read More <span className="ml-1">↗</span></a>
                        </div>
                      </div>
                      {/* Blog Card 2 */}
                      <div className="bg-white rounded-xl shadow-md flex flex-col w-96 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1519389950473-47c0e7f7c63d?auto=format&fit=crop&w=600&q=80" alt="PPC Blog" className="h-56 w-full object-cover" />
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <span>Ben Stokes</span>
                            <span>•</span>
                            <span>16 August 2023</span>
                          </div>
                          <div className="text-lg font-semibold mb-2">The Power of PPC Advertising: How to Maximize Your ROI</div>
                          <div className="text-gray-700 mb-4">Unlock the full potential of your digital marketing strategy with the power of PPC.</div>
                          <a href="#" className="font-semibold text-[#6c3ee7] hover:text-[#fea930]">Read More <span className="ml-1">↗</span></a>
                        </div>
                      </div>
                      {/* Blog Card 3 */}
                      <div className="bg-white rounded-xl shadow-md flex flex-col w-96 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Responsive Web Design Blog" className="h-56 w-full object-cover" />
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <span>Ben Stokes</span>
                            <span>•</span>
                            <span>16 August 2023</span>
                          </div>
                          <div className="text-lg font-semibold mb-2">The Importance of Responsive Web Design in the Mobile Age</div>
                          <div className="text-gray-700 mb-4">Where mobile devices dominate internet usage, responsive web design more crucial.</div>
                          <a href="#" className="font-semibold text-[#6c3ee7] hover:text-[#f63436]">Read More <span className="ml-1">↗</span></a>
                        </div>
                      </div>
                    </div>
                  </section>
        </div>

      

      </main>
      <Footer />
    </div>
  );
}
