import { useState, useEffect, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TargetMBBS from './components/TargetMBBS';
import Sponsorship from './components/Sponsorship';
import Contact from './components/Contact';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import LMS from './components/LMS';
import { motion, AnimatePresence } from 'motion/react';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
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
    const path = location.pathname;
    if (path === '/') setActivePage('home');
    else if (path === '/about') setActivePage('about');
    else if (path === '/target-mbbs') setActivePage('target-mbbs');
    else if (path === '/sponsorship') setActivePage('sponsorship');
    else if (path === '/contact') setActivePage('contact');
    else if (path === '/lms') setActivePage('lms');
    else if (path === '/onslogin') setActivePage('login');
    else if (path === '/admin') setActivePage('admin');
  }, [location.pathname]);

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
      case 'lms':
        setMeta('Learning Management System – ONS India', 'Comprehensive online learning platform for college students with AI-based video recommendations, detailed performance reports, and interactive courses.', 'LMS college students, online learning platform, AI video recommendations, performance analytics');
        break;
      default:
        break;
    }
  }, [activePage]);

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* hide navbar on login/admin pages */}
      {activePage !== 'login' && activePage !== 'admin' && (
        <Navbar />
      )}

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <PageWrapper>
                <Hero />
                <About />
                <Services />
                <TargetMBBS />
                <Sponsorship />
                <Contact />
              </PageWrapper>
            } />
            <Route path="/about" element={
              <PageWrapper>
                <div className="pt-24">
                  <About />
                </div>
              </PageWrapper>
            } />
            <Route path="/target-mbbs" element={
              <PageWrapper>
                <div className="pt-24">
                  <TargetMBBS />
                </div>
              </PageWrapper>
            } />
            <Route path="/sponsorship" element={
              <PageWrapper>
                <div className="pt-24">
                  <Sponsorship />
                </div>
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <div className="pt-24">
                  <Contact />
                </div>
              </PageWrapper>
            } />
            <Route path="/lms" element={
              <PageWrapper>
                <div className="pt-24">
                  <LMS />
                </div>
              </PageWrapper>
            } />
            <Route path="/terms" element={
              <PageWrapper>
                <div className="pt-24">
                  <TermsAndConditions />
                </div>
              </PageWrapper>
            } />
            <Route path="/privacy-policy" element={
              <PageWrapper>
                <div className="pt-24">
                  <PrivacyPolicy />
                </div>
              </PageWrapper>
            } />
            <Route path="/onslogin" element={<Login />} />
            <Route path="/admin" element={
              <PageWrapper>
                <AdminDashboard />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
