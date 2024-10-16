import React from 'react';

const LearningModules = () => {
  // Example learning module data related to NayePankh foundation
  const modules = [
    {
      id: 1,
      title: 'Understanding Menstrual Hygiene',
      description: 'Learn about the importance of menstrual hygiene and how to maintain it effectively.',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Nutrition and Food Security',
      description: 'Explore the basics of nutrition, food security, and how to combat hunger in communities.',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Community Engagement Strategies',
      description: 'Discover effective strategies for engaging with communities to promote social change.',
      status: 'Not Started',
    },
    {
      id: 4,
      title: 'Fundraising for NGOs',
      description: 'Understand the principles of fundraising and how to mobilize resources for NGO activities.',
      status: 'Completed',
    },
    {
      id: 5,
      title: 'Awareness Campaigns',
      description: 'Learn how to design and implement effective awareness campaigns for social issues.',
      status: 'In Progress',
    },
  ];

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Learning Modules</h2>
      <p className="mt-2 text-gray-600">Explore the learning modules here to help uplift communities.</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map(module => (
          <div key={module.id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800">{module.title}</h3>
            <p className="mt-2 text-gray-600">{module.description}</p>
            <span className={`mt-2 inline-block px-2 py-1 text-xs font-semibold ${module.status === 'Completed' ? 'text-green-600 bg-green-200' : module.status === 'In Progress' ? 'text-yellow-600 bg-yellow-200' : 'text-red-600 bg-red-200'} rounded-full`}>
              {module.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningModules;
