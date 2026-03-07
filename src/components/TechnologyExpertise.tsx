import React from 'react';

const techData = [
  {
    title: 'Frontend',
    color: 'bg-blue-50',
    tags: [
      { name: 'React', color: 'bg-blue-100 text-blue-600' },
      { name: 'Next.js', color: 'bg-blue-100 text-blue-600' },
      { name: 'Vue.js', color: 'bg-blue-100 text-blue-600' },
      { name: 'Angular', color: 'bg-blue-100 text-blue-600' },
      { name: 'TypeScript', color: 'bg-blue-100 text-blue-600' },
    ],
  },
  {
    title: 'Backend',
    color: 'bg-green-50',
    tags: [
      { name: 'Node.js', color: 'bg-green-100 text-green-600' },
      { name: 'Python', color: 'bg-green-100 text-green-600' },
      { name: 'Java', color: 'bg-green-100 text-green-600' },
      { name: '.NET', color: 'bg-green-100 text-green-600' },
      { name: 'PHP', color: 'bg-green-100 text-green-600' },
    ],
  },
  {
    title: 'Mobile',
    color: 'bg-purple-50',
    tags: [
      { name: 'React Native', color: 'bg-purple-100 text-purple-600' },
      { name: 'Flutter', color: 'bg-purple-100 text-purple-600' },
      { name: 'iOS', color: 'bg-purple-100 text-purple-600' },
      { name: 'Android', color: 'bg-purple-100 text-purple-600' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'bg-orange-50',
    tags: [
      { name: 'AWS', color: 'bg-orange-100 text-orange-600' },
      { name: 'Azure', color: 'bg-orange-100 text-orange-600' },
      { name: 'Docker', color: 'bg-orange-100 text-orange-600' },
      { name: 'Kubernetes', color: 'bg-orange-100 text-orange-600' },
    ],
  },
];

const TechnologyExpertise = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Technology Expertise</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          We work with cutting-edge technologies to deliver future-proof solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techData.map((category) => (
            <div
              key={category.title}
              className={`rounded-xl shadow-sm p-8 flex flex-col items-center ${category.color}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`px-4 py-1 rounded-full text-sm font-medium ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyExpertise;
