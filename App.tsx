
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GrowthPage from './pages/GrowthPage';

export type Page = 'home' | 'services' | 'process' | 'about' | 'contact' | 'growth';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const toggleTheme = () => setIsDark(prev => !prev);
  const navigate = (page: Page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'services': return <ServicesPage navigate={navigate} />;
      case 'process': return <ProcessPage navigate={navigate} />;
      case 'about': return <AboutPage navigate={navigate} />;
      case 'contact': return <ContactPage navigate={navigate} />;
      case 'growth': return <GrowthPage navigate={navigate} />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar navigate={navigate} currentPage={currentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />
    </div>
  );
};

export default App;
