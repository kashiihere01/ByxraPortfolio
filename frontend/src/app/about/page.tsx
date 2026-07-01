"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6"
          >
            We Are <span className="text-primary-blue">BYRXA</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            A premium digital agency dedicated to building, automating, and scaling businesses through cutting-edge technology and world-class design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-heading font-bold">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower ambitious brands with the digital infrastructure they need to dominate their markets. We don't just write code; we engineer growth engines.
            </p>
            <ul className="space-y-4 pt-4">
              {['Innovation First', 'Data-Driven Results', 'Uncompromising Quality'].map((item, i) => (
                <li key={i} className="flex items-center text-dark-text font-medium text-lg">
                  <CheckCircle2 className="text-primary-blue mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-hover-cyan/20 mix-blend-multiply" />
            <div className="w-full h-full flex items-center justify-center text-gray-400 font-heading text-2xl">
              [Agency Office/Team Image]
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
