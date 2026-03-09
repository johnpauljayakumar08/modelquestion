import { useState, useEffect, ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TargetMBBS from './components/TargetMBBS';
import Sponsorship from './components/Sponsorship';
import Contact from './components/Contact';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // update document title and meta tags whenever page changes
  const setMeta = (title: string, description: string, keywords: string) => {
    document.title = title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', description);
    let key = document.querySelector('meta[name="keywords"]');
    if (!key) {
      key = document.createElement('meta');
      key.setAttribute('name', 'keywords');
      document.head.appendChild(key);
    }
    key.setAttribute('content', keywords);
  };

  useEffect(() => {
    switch (activePage) {
      case 'home':
        setMeta(
          'ONS India – India’s Leading Student Assessment & Model Exam Platform',
          'ONS India conducts large-scale offline and online model exams for NEET, JEE, Government, Banking, TANCET & Board exams. Real exam experience with detailed performance analysis.',
          'student assessment platform India, NEET model exam, JEE mock test offline, competitive exam model test, school assessment India'
        );
        break;
      case 'target-mbbs':
        setMeta(
          'TARGET MBBS 2026 – NEET Model Exam in Coimbatore | ONS India',
          'Register for TARGET MBBS 2026 NEET Model Exam. Real exam environment, detailed analysis, rank report & subject-wise evaluation. Limited seats available.',
          'NEET model exam 2026, MBBS mock test Coimbatore, NEET practice exam offline, NEET assessment test'
        );
        break;
      case 'sponsorship':
        setMeta(
          'Sponsor TARGET MBBS 2026 – Student Outreach Opportunity | ONS India',
          'Become a Gold or Silver Sponsor for TARGET MBBS 2026. Direct access to 40,000+ students & parents. Strong brand visibility & lead generation opportunity.',
          'education event sponsorship India, student outreach program Coimbatore, college branding opportunity, academic event sponsorship'
        );
        break;
      case 'contact':
        setMeta('Contact – ONS India', 'Get in touch with ONS India for NCET model exams and sponsorship inquiries.', 'contact ModelQuestions, NEET model exam contact');
        break;
      default:
        break;
    }
  }, [activePage]);

  useEffect(() => {
    if (window.location.pathname === '/onslogin') {
      setActivePage('login');
    }
  }, []);


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
            <Sponsorship setActivePage={setActivePage} />
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
              <Sponsorship setActivePage={setActivePage} />
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
      case 'login':
        return <Login setActivePage={setActivePage} />;
      case 'admin':
        return (
          <PageWrapper>
            <AdminDashboard setActivePage={setActivePage} />
          </PageWrapper>
        );
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* hide navbar on login/admin pages */}
      {activePage !== 'login' && activePage !== 'admin' && (
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      )}
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
