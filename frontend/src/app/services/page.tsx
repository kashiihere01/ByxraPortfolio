"use client";

import { motion } from "framer-motion";
import ServicesGrid from "@/components/home/ServicesGrid";

export default function ServicesPage() {
  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6 text-dark-text"
        >
          Our <span className="text-primary-blue">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600"
        >
          Explore our comprehensive suite of digital solutions designed to elevate your brand and automate your operations.
        </motion.p>
      </div>
      
      {/* Reusing the Services Grid for the main content */}
      <ServicesGrid />
    </main>
  );
}
