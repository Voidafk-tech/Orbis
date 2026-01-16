
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
              <img 
                alt="Team collaborating in modern office" 
                className="rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 w-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwCapwJtE6DNgBPAwxD17oXeQVeknqFVeVTfj9W0CBFhwfn-e3AJxkjmQvxS87oprGGY9xrCIU7B51ELQzFDSpVb9BrieCHZ5DeeXC00h4ksCihDOj-3SvODYpfNvMkFlAjukLn3jAW7CjWbqR6A_eF0Odla4S0r1rN2KT0rOagCagD0m7DDfSOuBy18nlsOP6rVpYbZfDnR1xpLfcl5VTT-VVN1H3xkyDTmKNhyLfsVGRleVZqKAINHKi5Lx8kSwvkjzxWiK8rBY" 
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-display font-bold">Why Partners Choose <br/><span className="text-primary">Orbis Accounting</span></h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We aren't just your bookkeepers; we're an extension of your finance department. Our team brings senior-level accounting expertise to small and mid-sized businesses, eliminating the overhead of full-time hires while providing institutional-grade precision.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-xs font-bold">done</span>
                </div>
                <div>
                  <h4 className="font-bold">Proactive Strategy</h4>
                  <p className="text-sm text-gray-400">We forecast issues before they hit your ledger.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-xs font-bold">done</span>
                </div>
                <div>
                  <h4 className="font-bold">Bespoke Reporting</h4>
                  <p className="text-sm text-gray-400">KPI dashboards tailored to your specific industry metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
