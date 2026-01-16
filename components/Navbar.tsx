
import React, { useState } from 'react';
import { Page } from '../App';

interface NavbarProps {
  navigate: (page: Page) => void;
  currentPage: Page;
}

export const LogoGraphic: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#82E05E" />
    <circle cx="22" cy="50" r="14" fill="white" />
    <circle cx="22" cy="50" r="7" fill="black" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ navigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { name: string; page: Page }[] = [
    { name: 'Services', page: 'services' },
    { name: 'Process', page: 'process' },
    { name: 'About', page: 'about' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate('home')}>
            <LogoGraphic className="h-12 w-12 group-hover:scale-110 transition-transform" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => navigate(link.page)}
                className={`text-sm font-medium transition-colors hover:text-primary ${currentPage === link.page ? 'text-primary underline underline-offset-4' : ''}`} 
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => navigate('contact')}
              className="px-5 py-2.5 bg-primary text-gray-900 font-bold rounded-full hover:brightness-110 transition-all text-sm"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              <span className="material-icons-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 px-4 py-6 space-y-4 shadow-xl">
          <button 
            className="block w-full text-left text-lg font-medium hover:text-primary transition-colors"
            onClick={() => { navigate('home'); setIsMenuOpen(false); }}
          >
            Home
          </button>
          {navLinks.map((link) => (
            <button 
              key={link.name}
              className={`block w-full text-left text-lg font-medium hover:text-primary transition-colors ${currentPage === link.page ? 'text-primary' : ''}`}
              onClick={() => { navigate(link.page); setIsMenuOpen(false); }}
            >
              {link.name}
            </button>
          ))}
          <button 
            className="block w-full px-5 py-3 bg-primary text-gray-900 font-bold rounded-xl text-center" 
            onClick={() => { navigate('contact'); setIsMenuOpen(false); }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
