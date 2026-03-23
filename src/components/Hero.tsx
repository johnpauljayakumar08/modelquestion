import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bannrimg from '../Assest/banner.jpg';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mt-10">
      {/* Background Elements */}
      <div className="absolute top-0  right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />
      
      <div className="max-w-7xl  mt-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6"> */}
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span> */}
            {/* India's Trusted Competitive Exam Model Tests */}
          {/* </div> */}
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            India’s Trusted Platform for <span className="text-primary">Competitive Exam Model Tests</span>
          </h1>
          
          <p className="text-xl text-slate-600 font-medium mb-4">
            Real Exam Environment. Structured Evaluation. Data-Driven Performance Insights.
          </p>
          
          <p className="text-slate-500 mb-8 max-w-lg">
            Offline & Online Model Exams for Medical, Engineering, Government, Banking, TANCET, CETs, Board Exams & Olympiads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/target-mbbs')}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Register for TARGET MBBS 2026
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/sponsorship')}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Become a Sponsor
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {['100% Real Simulation', 'Detailed Analytics', 'Expert Evaluation'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle size={18} className="text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src={bannrimg} 
              alt="Students Writing NEET Mock Test Offline" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-lg">TARGET MBBS 2026</p>
                <p className="text-sm opacity-80">Coimbatore Competitive Exam Event</p>
              </div>
            </div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">40,000+</p>
                <p className="text-s text-slate-500 font-medium">Aspirants</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
