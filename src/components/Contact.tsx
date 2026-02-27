import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, we'd send the data to a server
    // For now, we'll just simulate a redirect or success
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeIDl73q6Us4LuHE6-6AVDK27V14lPx02_z-hB3k6gOuRQW9g/viewform";
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Get in Touch with ModelQuestions.com
          </h3>
          <p className="text-slate-600 mb-12 leading-relaxed">
            Have questions about our model test programs or sponsorship opportunities? Our team is here to help you.
          </p>

          <div className="space-y-8">
            {[
              { icon: <MapPin size={24} />, title: "Head Office", desc: "1st Floor, 7/21, Velachery – Tambaram Main Rd, Medavakkam, Chennai, Tamil Nadu – 600100" },
              { icon: <Phone size={24} />, title: "Phone Number", desc: "9500671950" },
              { icon: <Mail size={24} />, title: "Email Address", desc: "admin@modelquestions.com" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h4>
              <p className="text-slate-600 mb-8">Your inquiry has been received. Redirecting you to our detailed registration form...</p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name *</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                  <input required type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address *</label>
                  <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">City *</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Coimbatore" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Are You? *</label>
                <select required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all">
                  <option value="">Select an option</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="sponsor">Sponsor</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Submit Inquiry
                <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
