import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tabs = ['Web Development', 'SEO', 'Social Media', 'AI Solutions'];

const pricingData: Record<string, any[]> = {
  'Web Development': [
    { name: 'Starter', price: '$1,999', features: ['Custom UI Design', 'Up to 5 Pages', 'Mobile Responsive', 'Basic SEO Setup', '1 Month Support'] },
    { name: 'Professional', price: '$4,999', popular: true, features: ['Premium Custom Design', 'Up to 15 Pages', 'CMS Integration', 'Advanced Animations', 'Speed Optimization', '3 Months Support'] },
    { name: 'Enterprise', price: 'Custom', features: ['Full Stack Application', 'Unlimited Pages', 'Complex E-Commerce', 'Custom API Integrations', 'Dedicated DevOps', '24/7 Priority Support'] }
  ],
  'SEO': [
    { name: 'Starter', price: '$800/mo', features: ['Keyword Research', 'On-Page Optimization', 'Basic Link Building', 'Monthly Reporting'] },
    { name: 'Professional', price: '$1,500/mo', popular: true, features: ['Advanced Competitor Analysis', 'Technical SEO Fixes', 'Premium Guest Posts', 'Content Strategy', 'Bi-Weekly Reporting'] },
    { name: 'Enterprise', price: '$3,500/mo', features: ['National/Global SEO', 'Enterprise Architecture', 'High Authority PR Links', 'Dedicated Account Manager', 'Real-time Dashboards'] }
  ],
  'Social Media': [
    { name: 'Starter', price: '$1,000/mo', features: ['2 Platforms', '12 Posts/Month', 'Basic Community Management', 'Monthly Analytics'] },
    { name: 'Professional', price: '$2,500/mo', popular: true, features: ['4 Platforms', '20 Posts + 4 Reels', 'Proactive Engagement', 'Influencer Outreach', 'Ad Account Setup'] },
    { name: 'Enterprise', price: '$5,000/mo', features: ['Omnichannel Strategy', 'Daily Posts & Stories', 'High-End Video Production', 'Full Ad Management', 'Dedicated Creative Team'] }
  ],
  'AI Solutions': [
    { name: 'Starter', price: '$2,500', features: ['Basic Chatbot Setup', 'FAQ Automation', 'Website Integration', 'Analytics Dashboard'] },
    { name: 'Professional', price: '$6,000', popular: true, features: ['Custom AI Agent', 'CRM Integration', 'Complex Lead Qualifying', 'Workflow Automation', 'Training & Tuning'] },
    { name: 'Enterprise', price: 'Custom', features: ['Autonomous Multi-Agents', 'Proprietary LLM Fine-Tuning', 'Enterprise Security', 'End-to-End Automation', 'Dedicated Engineering'] }
  ]
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('Web Development');

  return (
    <section id="pricing" className="py-24 bg-card relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Transparent Pricing</h2>
          <p className="text-white/60 text-lg mb-8">Elite services tailored to your scale. No hidden fees.</p>
          
          <div className="inline-flex bg-background p-1 rounded-lg border border-white/10 mb-8">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-white/60 hover:text-white'
                }`}
                data-testid={`pricing-tab-${tab}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData[activeTab].map((plan, idx) => (
            <motion.div
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative bg-background rounded-2xl p-8 border ${
                plan.popular ? 'border-primary shadow-[0_0_30px_rgba(62,160,255,0.15)]' : 'border-white/10'
              } flex flex-col hover:-translate-y-2 transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-heading font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/923147234624?text=I%20want%20to%20purchase%20the%20${plan.name}%20${activeTab}%20package`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded text-center font-bold transition-colors ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Order Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
