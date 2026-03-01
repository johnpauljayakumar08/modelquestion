import { motion } from 'motion/react';
import { Monitor, Users, FileCheck, School, Trophy, Building2, CheckCircle2 } from 'lucide-react';
import whychooseimg from '../Assest/whychoseeus.png';
export default function Services() {
  const services = [
    { icon: <Users size={32} />, title: "Offline Model Examinations", desc: "Large-scale real exam simulation across cities." },
    { icon: <Monitor size={32} />, title: "Online Model Test Platform", desc: "Structured digital exams with instant evaluation." },
    { icon: <FileCheck size={32} />, title: "Competitive Exam Model Tests", desc: "NEET, JEE, Banking, Government Exams, TANCET, CETs." },
    { icon: <School size={32} />, title: "School & Board Exam Model Tests", desc: "Structured school academic evaluation programs." },
    { icon: <Trophy size={32} />, title: "Scholarship & Olympiad Tests", desc: "Talent identification & performance benchmarking." },
    { icon: <Building2 size={32} />, title: "Institutional Academic Initiatives", desc: "TARGET MBBS & city-level academic outreach events." }
  ];

  const benefits = [
    "Real Exam-Like Environment",
    "Detailed Performance Analytics",
    "Subject-wise Strength & Weakness Identification",
    "Large-Scale Offline & Online Execution Capability",
    "Strong Academic & Institutional Network",
    "Student-Centric Testing Approach",
    "Transparent Evaluation & Ranking Reports"
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Competitive Exam Model Tests
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We specialize in large-scale offline and online model examinations that mirror real competitive exam environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all group"
          >
            <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-primary rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-extrabold mb-8">Why Choose ModelQuestions.com?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary shrink-0 mt-1" />
                  <span className="text-sm font-medium opacity-90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <img 
              src={whychooseimg}
              alt="Detailed Performance Analytics" 
              className="rounded-2xl shadow-2xl border-4 border-white/20"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
