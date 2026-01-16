
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <img 
              alt="Orbis Accounting Logo" 
              className="h-10 w-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIlIcz9sHFe-A9_0cn-dzL0KU6zkRZH7MnqWHMW5WobdEd3YGlqj1diJwsTChr2FvUMbzO64BfzPiIWFv0aEg7JdPYLiakzKPPEAfoIV8IsA-vTayagnBjwH2nznVMcjsBC8P75gS73i7b7TZrTaYvzuRRBkofgyzlRb9WbCRee0DlP3ACmtglV_IKAQ2ya23F1ajJOexsZTM2R148Y62UZrSrIK--KmmLafdVTUWUEQEflFBQEOLdHIA50QTmy6BwVocZ2ubyjzc" 
            />
            <p className="text-gray-400 max-w-sm">
              Precision bookkeeping and staff accounting for modern B2B enterprises. Elevating the standard of financial clarity.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-colors" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-colors" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Company</a></li>
              <li><a className="hover:text-primary transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Success Stories</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Support</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Support</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
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
