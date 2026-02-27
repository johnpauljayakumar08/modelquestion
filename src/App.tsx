import { useState, useEffect, ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TargetMBBS from './components/TargetMBBS';
import Sponsorship from './components/Sponsorship';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Simple page transition wrapper
  const PageWrapper = ({ children }: { children: ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <PageWrapper>
            <Hero setActivePage={setActivePage} />
            <About />
            <Services />
            <TargetMBBS />
            <Sponsorship />
            <Contact />
          </PageWrapper>
        );
      case 'about':
        return (
          <PageWrapper>
            <div className="pt-24">
              <About />
            </div>
          </PageWrapper>
        );
      case 'target-mbbs':
        return (
          <PageWrapper>
            <div className="pt-24">
              <TargetMBBS />
            </div>
          </PageWrapper>
        );
      case 'sponsorship':
        return (
          <PageWrapper>
            <div className="pt-24">
              <Sponsorship />
            </div>
          </PageWrapper>
        );
      case 'contact':
        return (
          <PageWrapper>
            <div className="pt-24">
              <Contact />
            </div>
          </PageWrapper>
        );
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
