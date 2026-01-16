
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Next-Gen Bookkeeping</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1]">
              Your Business Growth, <span className="text-primary">Simplified.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Expert AR/AP management, WCB compliance, and payroll solutions designed for modern B2B scaling. We handle the numbers so you can focus on the vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="px-8 py-4 bg-primary text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform text-center shadow-lg shadow-primary/20" href="#contact">
                Start Your Growth
              </a>
              <a className="px-8 py-4 bg-gray-100 dark:bg-gray-800 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center" href="#services">
                View Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
              <img 
                alt="Professional collaboration in a modern office" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh6QErr2OffEqwxq8Jxg2JQOm2tgVnyUcTY-rUxqV__XTUh5vuQbaXkINb1QCtYlVUl-DQPHZqyHSv3DBsSEoBSK3TTLmZIxuT_ynsZDgCFgo_vQ1LWGbNGqQUGXDkMishgOuDlxX5s3HvXrmcQWSFhz7GCqWOM2sWGlO2t0P6mKUZy1jlavr3TjRgvQRCO02HpPUOhNZv0mIADrIBRq743tMTqP6Yb4W5vShP1Q3Nm30pqjStsfEhbL2ta3Y1EskWPxXzu4Unkdw" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
