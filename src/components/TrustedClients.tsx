import React from 'react';

const TrustedClients = () => (
  <section className="w-full bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Trusted By Leading Brands</h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        We are proud to have partnered with industry leaders and innovative startups.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Example client logos, replace with real logos as needed */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center w-48 h-24">
          <img src="/brand1.svg" alt="Brand 1" className="h-12" />
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center w-48 h-24">
          <img src="/brand2.svg" alt="Brand 2" className="h-12" />
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center w-48 h-24">
          <img src="/brand3.svg" alt="Brand 3" className="h-12" />
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center w-48 h-24">
          <img src="/brand4.svg" alt="Brand 4" className="h-12" />
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center w-48 h-24">
          <img src="/brand5.svg" alt="Brand 5" className="h-12" />
        </div>
      </div>
    </div>
  </section>
);

export default TrustedClients;
