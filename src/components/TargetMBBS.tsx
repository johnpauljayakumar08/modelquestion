import { motion } from 'motion/react';
import React from 'react';
import { Calendar, Users, ArrowRight, Clock, Award } from 'lucide-react';
import { useState } from 'react';
import { GraduationCap, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
export default function TargetMBBS() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentClass: '',
    board: '',
    school: '',
    city: '',
    parentName: '',
    parentPhone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch('https://onsindia.net/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!resp.ok) throw new Error('Network response was not ok');
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          currentClass: '',
          board: '',
          school: '',
          city: '',
          parentName: '',
          parentPhone: ''
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Submission error', err);
      alert('Failed to submit registration. Please try again later.');
    }
  };
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

            {/* <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Register Now – Limited Seats Available
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>

          <div className="p-8 md:p-12 bg-white rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Register for TARGET MBBS 2026</h3>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Registration Successful!</h4>
                <p className="text-sm text-slate-600">We'll send you confirmation details at your email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Full Name *</label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email Address *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Phone Number *</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Current Class *</label>
                    <select 
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    >
                      <option value="">Select class</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                      <option value="drop">Drop Year</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Board *</label>
                    <select 
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    >
                      <option value="">Select board</option>
                      <option value="cbse">CBSE</option>
                      <option value="state">State Board</option>
                      <option value="icse">ICSE</option>
                      <option value="ib">IB</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">City *</label>
                    <input 
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Your city"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">School/College</label>
                    <input 
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Your school name (optional)"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Parent Name</label>
                    <input 
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Parent/Guardian name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                    />
                  </div>
                </div>

                {/* Row 5 */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Parent Phone</label>
                  <input 
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    placeholder="Parent contact number"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors mt-6 flex items-center justify-center gap-2 group"
                >
                  Confirm Registration
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <ul className="space-x-6 text-sm flex flex-row items-center gap-4">
                <li className="flex gap-3 items-center">
                  <Phone size={18} className="text-secondary shrink-0" />
                  <span>9500671950</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={18} className="text-secondary shrink-0" />
                  <span>infra@onsindia.net</span>
                </li>
              </ul>
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
