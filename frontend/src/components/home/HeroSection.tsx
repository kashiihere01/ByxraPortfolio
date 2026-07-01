"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-light-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-blue/5 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-hover-cyan/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-white/50 border border-gray-200 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-sm"
        >
          <Sparkles className="text-primary-blue" size={16} />
          <span className="text-sm font-medium text-dark-text tracking-wide">
            Award-Winning Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-dark-text tracking-tighter leading-[1.1] mb-6 max-w-5xl mx-auto"
        >
          Build Websites, AI Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-hover-cyan">Growth Engines</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          We help businesses scale through development, automation, AI agents, marketing, branding and creative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/book-consultation"
            className="group px-8 py-4 bg-primary-blue text-white rounded-full font-semibold flex items-center justify-center transition-all hover:bg-hover-cyan hover:shadow-lg hover:shadow-primary-blue/25 hover:-translate-y-1 w-full sm:w-auto"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-white text-dark-text border border-gray-200 rounded-full font-semibold transition-all hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 w-full sm:w-auto"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
