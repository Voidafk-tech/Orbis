
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Process from '../components/Process';
import About from '../components/About';
import ParallaxBanner from '../components/ParallaxBanner';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <>
      <Hero navigate={navigate} />
      <ParallaxBanner />
      <Services navigate={navigate} />
      <Stats />
      <Process navigate={navigate} />
      <About navigate={navigate} />
      <FAQ />
      <CTA navigate={navigate} />
    </>
  );
};

export default Home;
