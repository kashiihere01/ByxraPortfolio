"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", desc: "We deep-dive into your business goals, target audience, and current digital footprint." },
  { id: "02", title: "Strategy", desc: "Crafting a tailored roadmap combining development, AI integration, and marketing." },
  { id: "03", title: "Execution", desc: "Our expert team builds, designs, and automates your new digital assets." },
  { id: "04", title: "Optimization", desc: "Rigorous testing, SEO tuning, and performance optimization before launch." },
  { id: "05", title: "Scale", desc: "Continuous support, growth marketing, and AI agent fine-tuning to scale operations." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-dark-text text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-blue/10 to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            How We Build <br/>
            <span className="text-primary-blue">Growth Engines</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Our battle-tested process guarantees high-quality delivery and measurable results at every stage.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/10" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between group">
                
                {/* Desktop layout alternates */}
                <div className={`md:w-5/12 flex ${index % 2 === 0 ? 'md:justify-end md:text-right' : 'md:order-2 md:justify-start text-left'} mb-6 md:mb-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md group-hover:border-primary-blue/50 transition-colors"
                  >
                    <h3 className="text-2xl font-bold font-heading mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-dark-text border-4 border-primary-blue flex items-center justify-center z-10 md:static mt-4 md:mt-0 shadow-[0_0_20px_rgba(0,102,255,0.4)]">
                  <span className="text-sm font-bold text-white">{step.id}</span>
                </div>

                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
