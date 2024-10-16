import React from 'react';

const Rewards = () => {
  // Example random rewards data
  const rewards = [
    {
      id: 1,
      name: 'Outstanding Volunteer Award',
      description: 'Recognizing the exceptional contributions of volunteers in community service.',
      date: '2024-05-15',
      status: 'Claimed',
    },
    {
      id: 2,
      name: 'Top Fundraiser Badge',
      description: 'Awarded to the individual who raised the most funds for NayePankh in 2024.',
      date: '2024-07-20',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Community Champion Certificate',
      description: 'Acknowledging efforts to improve the lives of underprivileged communities.',
      date: '2024-06-10',
      status: 'Claimed',
    },
    {
      id: 4,
      name: 'Impact Leader Recognition',
      description: 'For those who have made a significant impact through outreach programs.',
      date: '2024-08-05',
      status: 'Not Claimed',
    },
    {
      id: 5,
      name: 'Hygiene Awareness Advocate',
      description: 'For spreading awareness about menstrual hygiene and sanitation.',
      date: '2024-09-12',
      status: 'Claimed',
    },
  ];

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Rewards</h2>
      <p className="mt-2 text-gray-600">Here you can find information about rewards.</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rewards.map(reward => (
          <div key={reward.id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800">{reward.name}</h3>
            <p className="mt-2 text-gray-600">{reward.description}</p>
            <p className="mt-2 text-gray-500">Date Awarded: {reward.date}</p>
            <span className={`mt-2 inline-block px-2 py-1 text-xs font-semibold ${reward.status === 'Claimed' ? 'text-green-600 bg-green-200' : reward.status === 'Pending' ? 'text-yellow-600 bg-yellow-200' : 'text-red-600 bg-red-200'} rounded-full`}>
              {reward.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
