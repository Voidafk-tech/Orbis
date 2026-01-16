
import React from 'react';
import { Page } from '../App';

interface ProcessPageProps {
  navigate: (page: Page) => void;
}

const ProcessPage: React.FC<ProcessPageProps> = ({ navigate }) => {
  const detailedSteps = [
    {
      num: "01",
      title: "The Financial Audit",
      desc: "We dive deep into your existing ledgers to clean up historic data and establish a reliable baseline for future reporting.",
      icon: "fact_check"
    },
    {
      num: "02",
      title: "Platform Integration",
      desc: "Transitioning your manual processes to industry-leading tools like Sage50 and QuickBooks Online (QBO) for real-time visibility.",
      icon: "cloud_upload"
    },
    {
      num: "03",
      title: "Automated Workflows",
      desc: "Setting up rules for recurring entries, auto-pay cycles, and digital invoice capture to minimize human error.",
      icon: "bolt"
    },
    {
      num: "04",
      title: "Continuous Strategic Review",
      desc: "Monthly performance reviews where we analyze your P&L and Balance Sheet against your growth targets.",
      icon: "query_stats"
    }
  ];

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold mb-6">The Orbis <span className="text-primary">Methodology</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            A battle-tested 4-stage process that moves your business from financial chaos to predictable scalability.
          </p>
        </header>

        <div className="space-y-12">
          {detailedSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 dark:bg-gray-800/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
              <div className="text-6xl font-extrabold text-primary/20 shrink-0">{step.num}</div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-icons-outlined text-primary text-3xl">{step.icon}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button onClick={() => navigate('contact')} className="px-10 py-5 bg-primary text-gray-900 font-extrabold rounded-2xl hover:brightness-110 transition-all">
            See it in Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
