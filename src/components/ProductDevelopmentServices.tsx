import React from 'react';

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    desc: 'Our Custom Software Development services deliver tailored solutions that meet your unique business needs. From web and mobile applications to enterprise platforms, we build scalable, secure, and high-performance software that enhances efficiency, drives growth, and maximizes user satisfaction.',
    highlight: true
  },
  {
    icon: '🔌',
    title: 'API Development',
    desc: 'At OpenGenX, our API development services deliver secure, scalable, and efficient integrations. We design APIs that connect applications, platforms, and third-party tools seamlessly, empowering businesses to enhance functionality, improve connectivity, and achieve greater flexibility in their digital solutions.'
  },
  {
    icon: '🖥️',
    title: 'Web Application Development',
    desc: 'Our Web Application Development services deliver secure, scalable, and high-performing web solutions tailored to your business needs. From responsive designs to advanced functionality, we create intuitive applications that enhance user experience, streamline operations, and support your digital growth.'
  },
  {
    icon: '📦',
    title: 'Product Development',
    desc: "Our product development services transform ideas into innovative, scalable solutions. From concept and design to deployment and support, we create high-performance software products that enhance user experience, streamline operations, and drive business growth in today's digital landscape."
  },
  {
    icon: '✏️',
    title: 'UI/UX Design',
    desc: 'Our UI/UX design services focus on creating intuitive, engaging, and visually appealing digital experiences. We design user-centric interfaces that blend creativity with functionality, ensuring seamless navigation, improved usability, and enhanced customer satisfaction for web, mobile, and enterprise applications.'
  },
  {
    icon: '🎧',
    title: 'Maintenance & Support',
    desc: 'At OpenGenX, our Maintenance & Support services ensure your software stays secure, reliable, and up to date. From bug fixes to performance optimization, we provide continuous improvements that keep your digital products running smoothly and future-ready.'
  }
];

const ProductDevelopmentServices = () => (
  <section className="w-full bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-4 text-blue-600 font-semibold text-sm tracking-widest">SERVICES</div>
      <h2 className="text-4xl font-bold text-center mb-8">Our Software Product Development Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {services.map((item, idx) => (
          <div key={item.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col items-start">
            <div className="mb-4 text-3xl bg-blue-50 rounded-full p-2 text-blue-600">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className={`text-gray-600 text-sm${item.highlight ? ' text-blue-700 font-semibold' : ''}`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductDevelopmentServices;
