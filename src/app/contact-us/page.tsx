import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactUs() {
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
                    <h1 className="text-5xl font-bold text-center mb-4" style={{color:'#f63436'}}>Contact Us</h1>
                </div>
            </main>

                {/* Section 2: Screenshot-based layout */}
                <section className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto my-12 bg-white rounded-lg shadow-md overflow-hidden border-l-8 border-[#fea930]">
                    {/* Left side: Contact info */}
                    <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                        <span className="text-[#f63436] font-medium mb-2">Contact Us</span>
                        <h2 className="text-4xl font-bold mb-4" style={{color:'#fea930'}}>Get in Touch with SEOC We Value Your Connection</h2>
                        <p className="text-gray-700 mb-6">Our dedicated team is committed to providing prompt and effective support to ensure your needs are met. We believe in open communication and are always ready to listen. Reach out to us via phone, email, or live chat, or visit our office during business hours.</p>
                        <div className="flex gap-8 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="bg-[#ede9fe] p-3 rounded-full">
                                    {/* Phone icon */}
                                    <svg width="32" height="32" fill="#a78bfa" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" /></svg>
                                </span>
                                <div>
                                    <div className="text-sm text-gray-500">Phone Number</div>
                                    <div className="font-bold text-lg">123-456-7890</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="bg-[#ede9fe] p-3 rounded-full">
                                    {/* Mail icon */}
                                    <svg width="32" height="32" fill="#a78bfa" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 7 8-7V18H4z" /></svg>
                                </span>
                                <div>
                                    <div className="text-sm text-gray-500">Email Address</div>
                                    <div className="font-bold text-lg">Infoseoc@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-[#ede9fe] p-3 rounded-full">
                                {/* Location icon */}
                                <svg width="32" height="32" fill="#a78bfa" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" /></svg>
                            </span>
                            <div>
                                <div className="font-bold text-lg">8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773</div>
                                <a href="#" className="text-[#f63436] underline font-medium">View Our Map</a>
                            </div>
                        </div>
                    </div>
                    {/* Right side: Contact form */}
                    <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-[#fafaff] shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold mb-6" style={{color:'#f63436'}}>Get In Touch</h3>
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="First Name" className="border border-gray-300 rounded-lg p-3" />
                            <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-lg p-3" />
                            <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-lg p-3" />
                            <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded-lg p-3" />
                            <textarea placeholder="Your Message" className="border border-gray-300 rounded-lg p-3 h-32" />
                                        <button type="submit" className="bg-[#f63436] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#fea930] transition-colors">
                                            Get In Touch <span className="ml-1">↗</span>
                                        </button>
                        </form>
                    </div>
                </section>
            <Footer />
        </div>
    );
}
