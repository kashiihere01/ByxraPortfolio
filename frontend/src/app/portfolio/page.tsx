"use client";

import { motion } from "framer-motion";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";

export default function PortfolioPage() {
  return (
    <main className="flex-grow pt-32 bg-dark-text min-h-screen">
      <div className="container mx-auto px-4 md:px-8 text-center mb-8 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6 text-white"
        >
          Our <span className="text-primary-blue">Work</span>
        </motion.h1>
      </div>
      
      <PortfolioShowcase />
    </main>
  );
}
