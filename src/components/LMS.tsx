import { motion } from 'motion/react';
import { BookOpen, Video, BarChart3, Users, FileText, Award, CheckCircle, Star, Clock, Target } from 'lucide-react';

export default function LMS() {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Comprehensive Course Library",
      desc: "Access thousands of courses across multiple subjects including NEET, JEE, and other competitive exams."
    },
    {
      icon: <Video size={32} />,
      title: "AI-Based Relevant Videos",
      desc: "Smart video recommendations powered by AI that adapt to your learning pace and performance."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Overall Performance Reports",
      desc: "Detailed analytics and progress tracking with comprehensive reports on strengths and areas for improvement."
    },
    {
      icon: <Users size={32} />,
      title: "Interactive Learning Community",
      desc: "Connect with fellow students, participate in discussions, and collaborate on assignments."
    },
    {
      icon: <FileText size={32} />,
      title: "Assignment & Assessment Tools",
      desc: "Submit assignments, take quizzes, and receive instant feedback on your work."
    },
    {
      icon: <Award size={32} />,
      title: "Certification & Achievements",
      desc: "Earn certificates upon course completion and track your academic achievements."
    }
  ];

  const benefits = [
    "Personalized Learning Paths",
    "24/7 Access to Content",
    "Mobile-Friendly Interface",
    "Real-time Progress Tracking",
    "Expert Instructor Support",
    "Gamified Learning Experience"
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Learning Management System</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Comprehensive Online Learning Platform
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Our advanced LMS provides college students with a complete educational ecosystem featuring AI-powered content recommendations,
            detailed performance analytics, and interactive learning tools designed to maximize academic success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-white relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Video className="text-secondary mb-4" size={24} />
                <h4 className="font-bold mb-2">AI Video Recommendations</h4>
                <p className="text-sm opacity-90">Intelligent algorithm suggests relevant video content based on your learning patterns and performance data.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <BarChart3 className="text-secondary mb-4" size={24} />
                <h4 className="font-bold mb-2">Comprehensive Reports</h4>
                <p className="text-sm opacity-90">Get detailed overall reports including progress tracking, subject-wise analysis, and predictive performance insights.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Target className="text-secondary mb-4" size={24} />
                <h4 className="font-bold mb-2">Personalized Learning</h4>
                <p className="text-sm opacity-90">Adaptive learning paths that adjust to your pace, focusing on weak areas while reinforcing strengths.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed LMS Features */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl mb-16">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Comprehensive LMS Features</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AI-Powered Features */}
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Video className="text-primary" size={28} />
                AI-Based Learning Features
              </h4>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-2">Smart Video Recommendations</h5>
                  <p className="text-slate-600 text-sm">Our AI analyzes your learning patterns, performance data, and study habits to recommend the most relevant video content. The system adapts in real-time to your progress and areas of difficulty.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-2">Personalized Learning Paths</h5>
                  <p className="text-slate-600 text-sm">AI-driven adaptive learning creates customized study plans based on your strengths, weaknesses, and learning pace. The system continuously optimizes content delivery for maximum retention.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-2">Intelligent Assessment</h5>
                  <p className="text-slate-600 text-sm">Dynamic question selection adjusts difficulty based on your performance. The AI identifies knowledge gaps and focuses practice on areas needing improvement.</p>
                </div>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <BarChart3 className="text-primary" size={28} />
                Advanced Analytics & Reports
              </h4>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-2">Comprehensive Performance Reports</h5>
                  <p className="text-slate-600 text-sm">Detailed overall reports including progress tracking, subject-wise analysis, time spent on topics, accuracy rates, and predictive performance insights for upcoming exams.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-2">Real-time Progress Monitoring</h5>
                  <p className="text-slate-600 text-sm">Live dashboards showing daily progress, weekly goals achievement, and comparative analysis with peer groups. Instant feedback on assignments and quizzes.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-2">Predictive Analytics</h5>
                  <p className="text-slate-600 text-sm">AI-powered predictions of exam performance based on current progress. Early identification of at-risk students with personalized intervention recommendations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Features */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">Technical Specifications & Platform Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="text-primary mx-auto mb-3" size={32} />
                <h5 className="font-bold text-slate-900 mb-2">24/7 Availability</h5>
                <p className="text-slate-600 text-sm">Access course materials, submit assignments, and take assessments anytime, anywhere with our cloud-based infrastructure.</p>
              </div>
              <div className="text-center">
                <Users className="text-primary mx-auto mb-3" size={32} />
                <h5 className="font-bold text-slate-900 mb-2">Multi-Device Support</h5>
                <p className="text-slate-600 text-sm">Seamless experience across desktop, tablet, and mobile devices with responsive design and offline content access.</p>
              </div>
              <div className="text-center">
                <Award className="text-primary mx-auto mb-3" size={32} />
                <h5 className="font-bold text-slate-900 mb-2">Gamification Elements</h5>
                <p className="text-slate-600 text-sm">Engaging learning experience with badges, leaderboards, streaks, and achievement systems to maintain student motivation.</p>
              </div>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="mt-12 bg-slate-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">Implementation & Support</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-slate-900 mb-3">For Colleges & Institutions</h5>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>Custom course creation and curriculum mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>Integration with existing student management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>Bulk user management and role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>Detailed institutional analytics and reporting</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 mb-3">Technical Support</h5>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>24/7 technical support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>Regular platform updates and feature enhancements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>Data backup and security compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                    <span>Training sessions for faculty and administrators</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to Start Learning?</h3>
            <p className="text-lg opacity-90 mb-8">Join thousands of students already using our platform to achieve academic excellence.</p>
            <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors inline-block">
              Get Started Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}