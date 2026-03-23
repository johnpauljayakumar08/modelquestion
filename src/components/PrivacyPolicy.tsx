import { motion } from 'motion/react';
import { Shield, Lock, Eye, Users, Database, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Personal Information",
      icon: <Users size={24} />,
      content: [
        "You can browse our platform without registering.",
        "",
        "However, for accessing LMS features, mock tests, and other services, you may need to provide:",
        "• Name",
        "• Email address",
        "• Phone number",
        "• College/Institution details",
        "This information is used to create and secure your account."
      ]
    },
    {
      id: 2,
      title: "Account-Related Activities",
      icon: <Lock size={24} />,
      content: [
        "To access LMS features, users must create an account.",
        "",
        "We use your personal information to:",
        "• Authenticate your identity",
        "• Protect your account from unauthorized access",
        "• Provide access to courses, exams, and results",
        "",
        "You are responsible for maintaining the confidentiality of your login credentials."
      ]
    },
    {
      id: 3,
      title: "Usage Information",
      icon: <Eye size={24} />,
      content: [
        "We collect usage data to:",
        "• Improve platform performance",
        "• Personalize your learning experience",
        "• Track academic progress and performance",
        "",
        "We may use your information to:",
        "• Maintain and improve our services",
        "• Develop new features and tools",
        "• Provide analytics and insights"
      ]
    },
    {
      id: 4,
      title: "Communication & Marketing",
      icon: <Mail size={24} />,
      content: [
        "By submitting your contact details, you agree that:",
        "• We may contact you via phone, email, or WhatsApp",
        "• You may receive updates about courses, exams, and offers",
        "• You can opt-out of marketing communications anytime",
        "We may also send administrative or service-related communications."
      ]
    },
    {
      id: 5,
      title: "Public Information",
      icon: <Database size={24} />,
      content: [
        "Any information you voluntarily post in public areas (comments, forums, etc.) becomes publicly visible and is not considered private."
      ]
    },
    {
      id: 6,
      title: "Mandatory Information",
      icon: <Shield size={24} />,
      content: [
        "If you do not provide required personal information, certain services (like LMS access or exams) may not be available.",
        "ONS India is not responsible for service limitations due to incomplete information."
      ]
    },
    {
      id: 7,
      title: "Automatically Collected Information",
      icon: <Eye size={24} />,
      content: [
        "We use cookies and tracking tools to:",
        "• Remember user preferences",
        "• Improve user experience",
        "• Analyze traffic and usage patterns",
        "• Monitor platform performance"
      ]
    },
    {
      id: 8,
      title: "Data Sharing",
      icon: <Users size={24} />,
      content: [
        "We may share your information with:",
        "• Educational Institutions – for academic tracking and evaluation",
        "• Instructors/Trainers – to improve learning experience",
        "• Analytics Providers – to improve platform performance",
        "• Marketing Partners – for communication and promotions",
        "• Technology Providers – hosting, payment, and support services",
        "• Legal Authorities – if required by law",
        "",
        "We do not sell your personal data."
      ]
    },
    {
      id: 9,
      title: "Data Security",
      icon: <Lock size={24} />,
      content: [
        "We implement appropriate security measures to protect your data.",
        "",
        "However, no system is completely secure, and we cannot guarantee absolute security."
      ]
    },
    {
      id: 10,
      title: "Third-Party Services",
      icon: <Shield size={24} />,
      content: [
        "Our platform may include third-party integrations (payment gateways, analytics tools, etc.).",
        "",
        "We are not responsible for the privacy practices of these third parties."
      ]
    },
    {
      id: 11,
      title: "Disclaimer & Warranties",
      icon: <Shield size={24} />,
      content: [
        "The platform is provided on an 'as is' and 'as available' basis.",
        "",
        "We do not guarantee:",
        "• Error-free operation",
        "• Continuous availability",
        "• Complete accuracy of content"
      ]
    },
    {
      id: 12,
      title: "Payments, Cancellation & Refund",
      icon: <Database size={24} />,
      content: [
        "Payments (if applicable) may be processed through third-party providers",
        "Users are responsible for payment obligations",
        "Refund policies (if applicable) will be communicated separately",
        "Access to courses or LMS may be restricted for non-payment"
      ]
    },
    {
      id: 13,
      title: "Updates to Policy",
      icon: <Shield size={24} />,
      content: [
        "We may update this Privacy Policy at any time.",
        "Users are encouraged to review this page periodically."
      ]
    }
  ];

  return (
    <section id="privacy" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Effective Date: 18 March 2026
          </p>
          <p className="text-slate-600">
            By accessing or using https://onsindia.net ("Platform"), you agree to this Privacy Policy. This policy is effective from the date you register or use our services.
          </p>
          <p className="text-slate-600 mt-4">
            ONS India ("ONS India", "Company", "we", or "us") provides an online learning platform, including a Learning Management System (LMS) and online assessment tools for college students and competitive exam preparation.
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
            By using ONS India, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}