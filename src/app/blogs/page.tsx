import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Blogs() {
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
            <span className="font-semibold text-black">Our Blogs</span>
          </nav>
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center mb-4" style={{color:'#f63436'}}>Our Blogs</h1>
        </div>
        {/* Screenshot-based Blog Grid Section */}
        <section className="w-full max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
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
            <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
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
            <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
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
            {/* Blog Card 4 */}
            <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Content Marketing Blog" className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <span>Ben Stokes</span>
                  <span>•</span>
                  <span>16 August 2023</span>
                </div>
                <div className="text-lg font-semibold mb-2">Content Marketing Strategies for 2023</div>
                <div className="text-gray-700 mb-4">Discover the latest content marketing strategies to boost engagement and conversions.</div>
                <a href="#" className="font-semibold text-[#6c3ee7] hover:text-[#fea930]">Read More <span className="ml-1">↗</span></a>
              </div>
            </div>
            {/* Blog Card 5 */}
            <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519389950473-47c0e7f7c63d?auto=format&fit=crop&w=600&q=80" alt="Web Design Blog" className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <span>Ben Stokes</span>
                  <span>•</span>
                  <span>16 August 2023</span>
                </div>
                <div className="text-lg font-semibold mb-2">Web Design Trends to Watch</div>
                <div className="text-gray-700 mb-4">Stay ahead with the latest web design trends for modern, user-friendly websites.</div>
                <a href="#" className="font-semibold text-[#6c3ee7] hover:text-[#f63436]">Read More <span className="ml-1">↗</span></a>
              </div>
            </div>
            {/* Blog Card 6 */}
            <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="SEO Blog" className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <span>Ben Stokes</span>
                  <span>•</span>
                  <span>16 August 2023</span>
                </div>
                <div className="text-lg font-semibold mb-2">SEO Myths Debunked</div>
                <div className="text-gray-700 mb-4">Learn the truth about common SEO myths and how to optimize your site effectively.</div>
                <a href="#" className="font-semibold text-[#6c3ee7] hover:text-[#fea930]">Read More <span className="ml-1">↗</span></a>
              </div>
            </div>
          </div>
        </section>
       
      </main>
      <Footer />
    </div>
  );
}
