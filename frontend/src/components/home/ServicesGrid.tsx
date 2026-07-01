"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Bot, Cpu, Search, TrendingUp, Palette, Video, Move3d, Film } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Monitor, title: "Full Stack Development", desc: "Custom web applications built with scalable architectures and modern tech stacks." },
  { icon: Code, title: "WordPress Development", desc: "Premium WordPress themes, plugins, and headless WP solutions." },
  { icon: Bot, title: "AI Automation", desc: "Streamline workflows with intelligent automation and ChatGPT integrations." },
  { icon: Cpu, title: "Agentic AI Development", desc: "Custom AI agents capable of autonomous decision-making and task execution." },
  { icon: Search, title: "SEO Optimization", desc: "Data-driven SEO strategies to dominate search rankings and drive organic traffic." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "High-ROI campaigns across social, search, and email channels." },
  { icon: Palette, title: "Graphic Design", desc: "Brand identities, UI/UX, and marketing collateral that captivate." },
  { icon: Video, title: "Video Editing", desc: "Cinematic edits, promotional videos, and shorts optimized for engagement." },
  { icon: Film, title: "2D Animation", desc: "Motion graphics and explainer videos that simplify complex concepts." },
  { icon: Move3d, title: "3D Animation", desc: "Immersive 3D product renders and animations for next-level visual impact." },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-light-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue font-semibold rounded-full mb-6"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-dark-text mb-6"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            From stunning visuals to intelligent backend systems, we provide end-to-end services to accelerate your digital growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-blue/5 to-hover-cyan/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150" />
              
              <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-3 text-dark-text">
                {service.title}
              </h3>
              
              <p className="text-gray-500 mb-6 line-clamp-3">
                {service.desc}
              </p>
              
              <Link
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-sm font-semibold text-primary-blue group-hover:text-hover-cyan transition-colors"
              >
                Learn More <motion.span className="ml-1" whileHover={{ x: 5 }}>→</motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
