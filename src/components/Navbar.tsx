import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../Assest/onslogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'LMS', path: '/lms' },
    { name: 'TARGET MBBS 2026', path: '/target-mbbs' },
    { name: 'Sponsorship', path: '/sponsorship' },
    { name: 'Contact', path: '/contact' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'LMS', path: '/lms' },
    { name: 'TARGET MBBS 2026', path: '/target-mbbs' },
    { name: 'Sponsorship', path: '/sponsorship' },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-2 md:p-1 rounded-lg text-white group-hover:scale-110 transition-transform">
            <img src={logo} alt="ONS India Logo" className="w-10 h-10 md:w-32 md:h-32 object-contain" />
          </div>
          {/* <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            ModelQuestions<span className="text-secondary">.com</span>
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `text-sm font-semibold transition-colors hover:text-secondary ${isActive ? 'text-primary' : 'text-slate-600'}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/target-mbbs"
            className="btn-primary py-2 px-5 text-sm"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `text-left text-lg font-medium ${isActive ? 'text-primary' : 'text-slate-600'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/target-mbbs"
                className="btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
