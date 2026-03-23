import { motion } from 'motion/react';
import { AlertCircle, Shield, Lock, Users, FileText, Mail, Phone } from 'lucide-react';

export default function TermsAndConditions() {
  const sections = [
    {
      id: 1,
      title: "Platform Overview",
      icon: <Shield size={24} />,
      content: [
        "ONS India provides:",
        "• Offline mock tests for competitive exams",
        "• LMS for colleges and students",
        "• Academic performance tracking and analytics",
        "All services are subject to updates and improvements without prior notice."
      ]
    },
    {
      id: 2,
      title: "Program Information and Usage",
      icon: <FileText size={24} />,
      content: [
        "The information on this website, including course content, test structure, and LMS features, may be modified or updated at any time without prior notice.",
        "We do not guarantee uninterrupted access to the platform."
      ]
    },
    {
      id: 3,
      title: "Intellectual Property",
      icon: <Lock size={24} />,
      content: [
        "All content on this platform, including:",
        "• Test materials",
        "• LMS content",
        "• UI design",
        "• Software and features",
        "are the property of ONS India and are protected under applicable intellectual property laws.",
        "",
        "You may not:",
        "• Copy",
        "• Reproduce",
        "• Distribute",
        "• Modify",
        "any content without prior written permission."
      ]
    },
    {
      id: 4,
      title: "User Conduct",
      icon: <Users size={24} />,
      content: [
        "By using this platform, you agree:",
        "• To use the platform only for lawful educational purposes",
        "• Not to engage in cheating or manipulation of exam results",
        "• Not to share login credentials",
        "• Not to upload harmful, offensive, or illegal content",
        "Any violation may result in account suspension or termination."
      ]
    },
    {
      id: 5,
      title: "Institution Usage (LMS)",
      icon: <Building size={24} />,
      content: [
        "If you are using the platform through a college or institution:",
        "• Your academic performance data may be shared with your institution",
        "• Institutions may use the LMS for evaluation and monitoring",
        "• ONS India is not responsible for academic decisions made by institutions."
      ]
    },
    {
      id: 6,
      title: "Third-Party Links",
      icon: <AlertCircle size={24} />,
      content: [
        "Our platform may contain links to third-party websites ('Linked Sites').",
        "",
        "ONS India:",
        "• Does not control or monitor these sites",
        "• Is not responsible for their content or services",
        "• Does not guarantee accuracy of information on these sites",
        "Use of third-party sites is at your own risk."
      ]
    },
    {
      id: 7,
      title: "Limitation of Liability",
      icon: <Shield size={24} />,
      content: [
        "ONS India does not guarantee that:",
        "• The platform will be error-free",
        "• The content will always be complete or accurate",
        "",
        "We are not liable for:",
        "• Any data loss",
        "• Academic outcomes",
        "• Service interruptions",
        "• Issues arising from third-party services",
        "Your use of the platform is at your own risk."
      ]
    },
    {
      id: 8,
      title: "Privacy Policy",
      icon: <Lock size={24} />,
      content: [
        "Your use of this platform is also governed by our Privacy Policy:",
        "https://onsindia.net/privacy-policy"
      ]
    },
    {
      id: 9,
      title: "Changes to Terms",
      icon: <FileText size={24} />,
      content: [
        "We may update these Terms and Conditions at any time.",
        "You are advised to review this page periodically. Continued use of the platform indicates acceptance of updated terms."
      ]
    }
  ];

  return (
    <section id="terms" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Welcome to ONS India – an online learning platform and Learning Management System for college students and competitive exam preparation.
          </p>
          <p className="text-slate-600">
            By accessing and using this website (https://onsindia.net), you agree to comply with and be bound by the following terms and conditions. If you do not agree, please do not use this platform.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 mt-1">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {section.id}. {section.title}
                  </h2>
                  <div className="space-y-2">
                    {section.content.map((line, i) => (
                      <p
                        key={i}
                        className={`${
                          line.startsWith('•')
                            ? 'text-slate-700 ml-4'
                            : line === ''
                            ? ''
                            : 'text-slate-700 leading-relaxed'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 border-2 border-primary rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-primary p-3 rounded-xl text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold">Email</p>
                <p className="text-lg font-bold text-slate-900">infra@onsindia.net</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary p-3 rounded-xl text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold">Phone</p>
                <p className="text-lg font-bold text-slate-900">+91-9500671950</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Last updated: March 18, 2026
          </p>
          <p className="text-sm text-slate-600 mt-2">
            By using ONS India, you acknowledge that you have read and understood these Terms and Conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

// Icon component for Building (not in lucide-react list)
const Building = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
    <line x1="9" y1="5" x2="9" y2="9"></line>
    <line x1="15" y1="5" x2="15" y2="9"></line>
  </svg>
);
