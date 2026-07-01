"use client";

import { motion } from "framer-motion";
import CaseStudiesComponent from "@/components/home/CaseStudies";

export default function CaseStudiesPage() {
  return (
    <main className="flex-grow pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6 text-dark-text"
        >
          Case <span className="text-primary-blue">Studies</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600"
        >
          Deep dives into how we've solved complex problems and driven massive growth for our clients.
        </motion.p>
      </div>
      
      <CaseStudiesComponent />
    </main>
  );
}
