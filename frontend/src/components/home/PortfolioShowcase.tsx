"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web Dev", "AI", "Branding", "3D"];

const projects = [
  { id: 1, title: "FinTech Dashboard", category: "Web Dev", image: "/placeholder-1.jpg", client: "Nova Bank" },
  { id: 2, title: "AI Customer Agent", category: "AI", image: "/placeholder-2.jpg", client: "RetailCorp" },
  { id: 3, title: "SaaS Rebrand", category: "Branding", image: "/placeholder-3.jpg", client: "CloudSync" },
  { id: 4, title: "Product Renderings", category: "3D", image: "/placeholder-4.jpg", client: "AutoMotive XYZ" },
  { id: 5, title: "E-Commerce Platform", category: "Web Dev", image: "/placeholder-5.jpg", client: "StyleHub" },
  { id: 6, title: "Predictive Analytics", category: "AI", image: "/placeholder-6.jpg", client: "HealthPlus" },
];

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-dark-text text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              Featured Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Explore our latest projects showcasing our expertise in development, design, and AI automation.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mt-8 md:mt-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-primary-blue text-white" 
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 cursor-pointer"
              >
                {/* Fallback gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary-blue font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-white text-dark-text flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-dark-text transition-all font-semibold"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
