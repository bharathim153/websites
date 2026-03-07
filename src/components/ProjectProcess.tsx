import React from 'react';

const ProjectProcess = () => (
  <section className="w-full bg-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Our Project Process</h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        We follow a proven methodology to deliver successful software products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="rounded-xl shadow-sm p-8 flex flex-col items-center bg-blue-50">
          <div className="mb-4 text-3xl text-blue-600">📝</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Requirement Analysis</h3>
          <p className="text-gray-600 text-center text-sm">Understanding your business needs and defining project scope.</p>
        </div>
        {/* Step 2 */}
        <div className="rounded-xl shadow-sm p-8 flex flex-col items-center bg-green-50">
          <div className="mb-4 text-3xl text-green-600">🎨</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Design & Prototyping</h3>
          <p className="text-gray-600 text-center text-sm">Creating wireframes, UI/UX, and interactive prototypes.</p>
        </div>
        {/* Step 3 */}
        <div className="rounded-xl shadow-sm p-8 flex flex-col items-center bg-purple-50">
          <div className="mb-4 text-3xl text-purple-600">💻</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Development</h3>
          <p className="text-gray-600 text-center text-sm">Building robust, scalable, and secure software solutions.</p>
        </div>
        {/* Step 4 */}
        <div className="rounded-xl shadow-sm p-8 flex flex-col items-center bg-orange-50">
          <div className="mb-4 text-3xl text-orange-600">🚀</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Deployment & Support</h3>
          <p className="text-gray-600 text-center text-sm">Launching your product and providing ongoing maintenance.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectProcess;
