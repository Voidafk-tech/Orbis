
import React from 'react';
import { Page } from '../App';
import { LogoGraphic } from './Navbar';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="cursor-pointer" onClick={() => navigate('home')}>
              <LogoGraphic className="h-16 w-16" />
            </div>
            <p className="text-gray-400 max-w-sm">
              Precision bookkeeping and staff accounting for modern B2B enterprises specializing in Sage50 and QuickBooks Online (QBO).
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => navigate('about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('services')} className="hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => navigate('process')} className="hover:text-primary transition-colors">Our Process</button></li>
              <li><button onClick={() => navigate('growth')} className="hover:text-primary transition-colors">Growth Strategy</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Support</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => navigate('contact')} className="hover:text-primary transition-colors">Contact</button></li>
              <li><button className="hover:text-primary transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-primary transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2024 Orbis Accounting. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>Modern Lime Variant</span>
            <span className="w-px h-3 bg-gray-200 dark:bg-gray-800"></span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
