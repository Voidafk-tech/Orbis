
import React from 'react';
import { Page } from '../App';

interface AboutProps {
  navigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ navigate }) => {
  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">Why Partners Choose <br/><span className="text-primary">Orbis Accounting</span></h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            We aren't just your bookkeepers; we're an extension of your finance department. Our team brings senior-level accounting expertise to small and mid-sized businesses, eliminating the overhead of full-time hires while providing institutional-grade precision.
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4 items-start text-left max-w-md mx-auto">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-icons-outlined text-primary text-xs font-bold">done</span>
              </div>
              <div>
                <h4 className="font-bold">Proactive Strategy</h4>
                <p className="text-sm text-gray-400">We forecast issues before they hit your ledger, ensuring your growth path remains clear of financial roadblocks.</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('about')}
              className="mt-4 px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-lg"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
