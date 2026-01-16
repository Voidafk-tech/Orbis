
import React from 'react';
import { Page } from '../App';

interface AboutPageProps {
  navigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 leading-tight">
              Decades of <span className="text-primary">Precision.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              Founded on the belief that mid-sized businesses deserve the same financial rigor as Fortune 500 companies. 
              Orbis Accounting was born to bridge the gap between simple bookkeeping and strategic CFO-level insight.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team consists of senior staff accountants who have spent years managing high-volume operations. We don't just "do the books"—we build the financial foundation your business needs to survive and thrive in competitive markets.
            </p>
          </div>
          <div className="relative">
             <img 
              alt="Professional business environment" 
              className="rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 aspect-[4/3] object-cover" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center py-20 border-y border-gray-100 dark:border-gray-800">
          <div>
            <h4 className="text-4xl font-extrabold text-primary mb-2">15+</h4>
            <p className="text-sm uppercase tracking-widest text-gray-400">Years Industry Experience</p>
          </div>
          <div>
            <h4 className="text-4xl font-extrabold text-primary mb-2">10+</h4>
            <p className="text-sm uppercase tracking-widest text-gray-400">Scaling B2B Clients</p>
          </div>
          <div>
            <h4 className="text-4xl font-extrabold text-primary mb-2">$10M+</h4>
            <p className="text-sm uppercase tracking-widest text-gray-400">Annually Managed Capital</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to grow with us?</h2>
          <button onClick={() => navigate('contact')} className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 font-bold rounded-xl transition-all">
            Meet the Partners
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
