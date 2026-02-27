import { motion } from 'motion/react';
import { Check, Star, Trophy, Users, Megaphone, MapPin, Briefcase } from 'lucide-react';

export default function Sponsorship() {
  const tiers = [
    {
      name: "SILVER SPONSOR",
      price: "₹50,000",
      icon: <Star className="text-slate-400" />,
      features: [
        "Logo on Posters & Admit Cards",
        "Digital Promotions",
        "Opportunity to Address Parents",
        "Lead Generation – Brand Recall"
      ],
      color: "bg-slate-100",
      btnColor: "bg-slate-900"
    },
    {
      name: "GOLD SPONSOR",
      price: "₹1,00,000",
      icon: <Trophy className="text-secondary" />,
      features: [
        "Logo on Banners, Admit Cards & Question Papers",
        "Digital Promotions",
        "Opportunity to Address Parents",
        "Entrance Branding",
        "Lead Generation – Strong Brand Recall"
      ],
      color: "bg-secondary/5 border-secondary/30",
      btnColor: "bg-secondary",
      popular: true
    }
  ];

  const reasons = [
    { icon: <Users />, title: "Direct Access", desc: "Direct access to thousands of students and parents at a single venue." },
    { icon: <Megaphone />, title: "Brand Visibility", desc: "High brand visibility at the critical decision-making stage for higher education." },
    { icon: <MapPin />, title: "Regional Outreach", desc: "Strong regional outreach in Coimbatore and surrounding districts." },
    { icon: <Briefcase />, title: "Showcase Programs", desc: "Perfect platform to showcase your academic programs and facilities." }
  ];

  return (
    <section id="sponsorship" className="section-padding bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Partnership</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Sponsor TARGET MBBS 2026
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Partner with India's leading Competitive Exam Model Tests provider and connect with over 40,000 students and parents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative p-8 rounded-3xl border-2 transition-all hover:shadow-2xl ${tier.color} ${tier.popular ? 'scale-105 z-10' : ''}`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{tier.name}</h4>
                <p className="text-4xl font-extrabold text-slate-900">{tier.price}</p>
              </div>
              <div className="p-3 bg-white rounded-2xl shadow-sm">
                {tier.icon}
              </div>
            </div>
            
            <ul className="space-y-4 mb-10">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl text-white font-bold transition-transform active:scale-95 ${tier.btnColor}`}>
              Become a Sponsor Today
            </button>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">Why Sponsor TARGET MBBS 2026?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-6">
                {reason.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
