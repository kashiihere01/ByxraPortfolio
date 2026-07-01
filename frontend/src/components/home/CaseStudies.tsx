"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Zap } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Global E-Commerce Scaling",
    client: "TechGear Pro",
    metric: "314%",
    metricLabel: "Increase in Sales",
    challenge: "Legacy system couldn't handle high traffic spikes, resulting in lost revenue.",
    solution: "Migrated to Next.js with a headless Shopify backend and implemented global CDN edge caching.",
    icon: BarChart3,
  },
  {
    title: "AI Customer Support Agent",
    client: "FinServe AI",
    metric: "85%",
    metricLabel: "Reduction in Support Tickets",
    challenge: "Overwhelmed support team with repetitive inquiries.",
    solution: "Developed a custom LLM-powered agent integrated with their internal knowledge base.",
    icon: Zap,
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue font-semibold rounded-full mb-6"
          >
            Real Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-dark-text mb-6"
          >
            Data-Driven Case Studies
          </motion.h2>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-light-background rounded-3xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row items-center"
            >
              {/* Left Side: Metrics & Title */}
              <div className="w-full lg:w-1/3 p-10 lg:p-14 bg-dark-text text-white flex flex-col justify-center min-h-full">
                <study.icon className="text-hover-cyan w-12 h-12 mb-8" />
                <h4 className="text-gray-400 font-medium mb-2">{study.client}</h4>
                <h3 className="text-3xl font-heading font-bold mb-8">{study.title}</h3>
                
                <div>
                  <div className="text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-hover-cyan to-primary-blue mb-2">
                    {study.metric}
                  </div>
                  <p className="text-gray-400">{study.metricLabel}</p>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full lg:w-2/3 p-10 lg:p-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h5 className="text-xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">01</span>
                      Challenge
                    </h5>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">02</span>
                      Solution
                    </h5>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center font-semibold text-primary-blue hover:text-hover-cyan transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
