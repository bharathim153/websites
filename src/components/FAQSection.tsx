'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'How long does it typically take to develop a software product?',
    a: 'The timeline depends on project complexity, requirements, and scope. Most projects take between 3-6 months, but we provide a detailed estimate after understanding your needs.'
  },
  {
    q: 'Do you offer post-launch support and maintenance?',
    a: 'Yes, we offer ongoing support and maintenance packages to ensure your software remains secure, updated, and optimized.'
  },
  {
    q: 'Can you help with product strategy and design?',
    a: 'Absolutely! We assist with product strategy, UI/UX design, and technical architecture to ensure your product meets business goals and user needs.'
  },
  {
    q: 'Do you sign NDAs to protect my intellectual property?',
    a: 'Yes, we sign NDAs and maintain strict confidentiality to protect your intellectual property and sensitive information.'
  },
  {
    q: 'Will I own the source code after the project is completed?',
    a: 'Yes, you will have full ownership of the source code and intellectual property upon project completion.'
  },
  {
    q: 'Can you scale the software if my user base grows?',
    a: 'We build scalable solutions that can grow with your business, ensuring performance and reliability as your user base expands.'
  },
  {
    q: 'What is your approach to data security?',
    a: 'We follow industry best practices for data security, including encryption, secure authentication, and regular audits.'
  },
  {
    q: 'How do you ensure timely delivery?',
    a: 'We use agile methodologies, clear milestones, and regular communication to keep projects on track and deliver on time.'
  }
];

const FAQSection = () => {
  const [open, setOpen] = useState(Array(faqs.length).fill(false));

  const toggle = (idx: number) => {
    setOpen(open => open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-4 text-blue-600 font-semibold text-sm tracking-widest">FAQ</div>
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((item, idx) => (
            <div key={item.q} className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-medium text-gray-900 focus:outline-none"
                onClick={() => toggle(idx)}
              >
                {item.q}
                <span className={`transition-transform duration-200 text-blue-400 ${open[idx] ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open[idx] && (
                <div className="px-6 pb-5 text-gray-600 text-base">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
