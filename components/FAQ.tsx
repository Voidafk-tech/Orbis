
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What industries do you specialize in?",
      a: "We primarily support B2B service providers, logistics firms, tech startups, and manufacturing companies across North America."
    },
    {
      q: "How does the pricing work?",
      a: "Our pricing is modular based on the volume of transactions and the specific services (Payroll, AR/AP, Compliance) you require. Book a consultation for a custom quote."
    },
    {
      q: "Are you fully remote?",
      a: "Yes, we operate as a fully digital accounting partner, utilizing industry-standard systems like Sage50 and QuickBooks Online (QBO)."
    },
    {
      q: "How quickly can we get started?",
      a: "Onboarding typically takes 7-10 business days from the initial discovery call to full system integration."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold">{faq.q}</span>
                <span className={`material-icons-outlined transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
