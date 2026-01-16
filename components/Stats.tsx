
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '200+', label: 'B2B Clients' },
    { value: '100%', label: 'Audit Accuracy' },
    { value: '$50M+', label: 'Managed Annually' },
  ];

  return (
    <section className="py-20 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-extrabold font-display text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
