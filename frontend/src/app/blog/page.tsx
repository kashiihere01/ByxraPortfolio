"use client";

import { motion } from "framer-motion";

const posts = [
  { title: "The Future of Agentic AI in Business", category: "AI Automation", date: "Oct 12, 2026", excerpt: "How autonomous agents are transforming the way companies scale." },
  { title: "Next.js 15 vs 14: What You Need to Know", category: "Web Dev", date: "Oct 05, 2026", excerpt: "A deep dive into the performance improvements of the new App Router." },
  { title: "High-Converting Design Principles", category: "Design", date: "Sep 28, 2026", excerpt: "Why micro-interactions and premium typography drive more sales." },
];

export default function BlogPage() {
  return (
    <main className="flex-grow pt-32 pb-24 bg-light-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 text-dark-text"
          >
            Insights & <span className="text-primary-blue">News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Stay updated with the latest trends in technology, design, and AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
            >
              <div className="text-sm font-semibold text-primary-blue mb-4">{post.category} &bull; {post.date}</div>
              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-hover-cyan transition-colors">{post.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
              <div className="text-sm font-semibold text-dark-text flex items-center group-hover:text-primary-blue transition-colors">
                Read Article <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
