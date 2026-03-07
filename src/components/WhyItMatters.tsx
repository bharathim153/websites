import React from 'react';

const whyMatters = [
  {
    icon: '🛠️',
    title: 'Streamline Operations',
    desc: 'Our software product development services streamline operations by automating workflows, reducing manual errors, and improving efficiency across teams, enabling businesses to save time, optimize resources, and achieve seamless productivity.'
  },
  {
    icon: '⭐',
    title: 'Exceptional User Experiences',
    desc: 'Our software product development services focus on creating exceptional user experiences by designing intuitive, engaging, and seamless interfaces that enhance satisfaction, boost engagement, and ensure users interact effortlessly with your digital products.'
  },
  {
    icon: '📊',
    title: 'Data-Driven Decisions',
    desc: 'Data-Driven Decisions empower businesses to make informed choices using real-time insights. By leveraging analytics through software product development services, organizations can optimize strategies, improve efficiency, and drive sustainable growth.'
  },
  {
    icon: '🚀',
    title: 'Drive Business Growth',
    desc: 'Our software product development services empower businesses to expand revenue streams, optimize operations, and enhance customer engagement, delivering scalable, innovative software solutions that accelerate growth and strengthen market competitiveness.'
  },
  {
    icon: '🛡️',
    title: 'Security and Reliability',
    desc: 'Our software product development services prioritize security and reliability, ensuring robust systems that protect sensitive data, prevent breaches, and deliver consistent, dependable performance for seamless business operations and user trust.'
  }
];

const WhyItMatters = () => (
  <section className="w-full bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-4 text-blue-600 font-semibold text-sm tracking-widest">WHY IT MATTERS</div>
      <h2 className="text-4xl font-bold text-center mb-8">Why Software Product Development Is Essential for Your Growth</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {whyMatters.slice(0,3).map((item, idx) => (
          <div key={item.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col items-start">
            <div className="mb-4 text-3xl bg-blue-50 rounded-full p-2 text-blue-600">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-8">
        {whyMatters.slice(3).map((item, idx) => (
          <div key={item.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col items-start">
            <div className="mb-4 text-3xl bg-blue-50 rounded-full p-2 text-blue-600">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItMatters;
