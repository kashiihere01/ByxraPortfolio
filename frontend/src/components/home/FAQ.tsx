"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes BYRXA different from other agencies?",
    answer: "We combine top-tier development with cutting-edge Agentic AI and automation. We don't just build websites; we build intelligent growth engines that actively scale your business operations.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A premium corporate website might take 4-6 weeks, while a full-scale AI automation system could take 2-3 months. We provide detailed timelines during our strategy phase.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer comprehensive retention and scaling packages that include ongoing development, SEO optimization, and AI model fine-tuning to ensure your systems perform at their peak.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer custom pricing based on your specific needs and the scope of work. We focus on delivering high-ROI solutions, typically starting at $10,000 for custom digital platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-dark-text mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-light-background"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-semibold text-lg font-heading transition-colors ${isOpen ? 'text-primary-blue' : 'text-dark-text'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary-blue text-white' : 'bg-white text-gray-500 shadow-sm'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
