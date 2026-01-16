
import React from 'react';
import { Page } from '../App';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, onClick }) => (
  <div onClick={onClick} className="group cursor-pointer p-8 bg-background-light dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
      <span className="material-icons-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
          <span className="material-icons-outlined text-primary text-sm">check_circle</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

interface ServicesProps {
  navigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ navigate }) => {
  const services = [
    {
      icon: 'receipt_long',
      title: 'AR/AP Management',
      description: 'Optimized accounts receivable and payable workflows to maintain healthy cash flow and supplier relations.',
      features: ['Invoicing & Collections', 'Vendor Reconciliation']
    },
    {
      icon: 'verified_user',
      title: 'WCB & Compliance',
      description: "Expert Workers' Compensation Board management to ensure your business remains compliant and risk-free.",
      features: ['Quarterly Reporting', 'Audit Preparation']
    },
    {
      icon: 'payments',
      title: 'Payroll & T4 Filings',
      description: 'End-to-end payroll processing including year-end T4 preparations and secure CRA submissions.',
      features: ['Bi-weekly Processing', 'Annual T4 Issuance']
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Precision-Focused Services</h2>
          <p className="text-gray-400">Comprehensive staff accounting and bookkeeping tailored for business efficiency.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} onClick={() => navigate('services')} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
