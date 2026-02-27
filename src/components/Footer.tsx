import { GraduationCap, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleNavClick = (id: string) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <GraduationCap size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              ModelQuestions<span className="text-secondary">.com</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            India’s leading provider of Competitive Exam Model Tests. Specialized in large-scale offline and online simulations.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => handleNavClick('home')} className="hover:text-secondary transition-colors">Home</button></li>
            <li><button onClick={() => handleNavClick('about')} className="hover:text-secondary transition-colors">About Us</button></li>
            <li><button onClick={() => handleNavClick('target-mbbs')} className="hover:text-secondary transition-colors">TARGET MBBS 2026</button></li>
            <li><button onClick={() => handleNavClick('sponsorship')} className="hover:text-secondary transition-colors">Sponsorship</button></li>
            <li><button onClick={() => handleNavClick('contact')} className="hover:text-secondary transition-colors">Contact</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span>1st Floor, 7/21, Velachery – Tambaram Main Rd, Medavakkam, Chennai, Tamil Nadu – 600100</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <span>9500671950</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <span>admin@modelquestions.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe to get the latest exam updates and news.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary outline-none"
            />
            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-xs">
        <p>© 2026 ModelQuestions.com | A Group of ONS India | All Rights Reserved</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
