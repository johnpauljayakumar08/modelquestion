import { motion } from 'motion/react';
import { Target, Rocket, ShieldCheck, Users, BarChart3, Globe } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target className="text-primary" />, title: "Vision", desc: "To become India’s most trusted platform for Competitive Exam Model Tests that empowers students with confidence, clarity, and competence through realistic exam experiences." },
    { icon: <Rocket className="text-secondary" />, title: "Mission", desc: "Provide exam-oriented model tests that mirror real competitive exams, reduce exam fear, and deliver accurate evaluation and detailed analytics." }
  ];

  const highlights = [
    "Real-time exam exposure",
    "Detailed subject-wise performance analysis",
    "Ranking & score reports",
    "Identification of strengths and improvement areas"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Leading Competitive Exam Model Tests Provider
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            ModelQuestions.com is a leading provider of Competitive Exam Model Tests operating under the ONS India Group. We specialize in designing and conducting large-scale offline and online model examinations that replicate real competitive exam environments.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our model tests empower students with real-time exam exposure and detailed subject-wise performance analysis, helping them build confidence for medical, engineering, and government exams.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="bg-primary/10 p-1 rounded-full">
                  <ShieldCheck size={18} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
