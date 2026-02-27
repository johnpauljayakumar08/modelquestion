import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, Clock, Award } from 'lucide-react';

export default function TargetMBBS() {
  return (
    <section id="target-mbbs" className="section-padding bg-white">
      <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Flagship Event 2026
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              TARGET MBBS 2026
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-8">
              Ready to Experience the Real NEET Exam Environment?
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Practice Today. Perform Better Tomorrow. Join thousands of medical aspirants in our comprehensive NEET model exam designed to mirror the actual test environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <Calendar size={20} />, label: "Date", value: "19 April 2026" },
                { icon: <MapPin size={20} />, label: "Location", value: "Hindustan Matriculation Higher Secondary School, Coimbatore" },
                { icon: <Users size={20} />, label: "Capacity", value: "Limited Seats Only" },
                { icon: <Award size={20} />, label: "Benefits", value: "Real Exam Simulation And Detailed Rank Report" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl text-primary shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Register Now – Limited Seats Available
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/neet/1000/1200" 
              alt="Students Writing NEET Mock Test Offline" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 lg:from-transparent to-transparent" />
            
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500 text-white p-1 rounded-full">
                  <Clock size={16} />
                </div>
                <p className="text-sm font-bold text-slate-900">Registration Open</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secure your spot for the most realistic NEET simulation in Coimbatore. Early bird discounts available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-12">What's Included in TARGET MBBS?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Real Exam Simulation", desc: "Experience the actual NEET exam hall environment, strict invigilation, and OMR-based testing." },
            { title: "Instant Evaluation", desc: "Get your scores and detailed subject-wise performance analysis within 48 hours." },
            { title: "National Ranking", desc: "See where you stand among thousands of aspirants with our transparent ranking system." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6">
                {i + 1}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
