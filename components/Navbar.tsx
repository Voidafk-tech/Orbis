
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img 
              alt="Orbis Accounting Logo" 
              className="h-10 w-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjEOQsGsuIwLyuI-2YIttgTiVrS2OZPh-riEDo8ExRW5oKvOTbl-TKtcoz4ocoqvsVLEKzWOGeqbkne6x2n9MTnMs2V87lz3zQyqPV-PXXxtM1Awn9qUhstHYtdFu0nd04xEAOWw3q7Bmp03HjCAmauqXD-9kx145RXJc4TUC-ofAGqHI0pl_nayyrGxYsg-_L904-LCxKnyXv51Cz0UYQ1CbZlfAzkT_g5s3kt_cPTmyMlc5JJ0os3X1IYWkkxbUGyjjLqIs-Z4" 
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                className="text-sm font-medium hover:text-primary transition-colors" 
                href={link.href}
              >
                {link.name}
              </a>
            ))}
            <a className="px-5 py-2.5 bg-primary text-gray-900 font-bold rounded-full hover:brightness-110 transition-all text-sm" href="#consultation">
              Consultation
            </a>
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
          {navLinks.map((link) => (
            <a 
              key={link.name}
              className="block text-lg font-medium hover:text-primary transition-colors" 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            className="block px-5 py-3 bg-primary text-gray-900 font-bold rounded-xl text-center" 
            href="#consultation"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
