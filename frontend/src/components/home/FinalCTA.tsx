"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary-blue text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hover-cyan/30 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tight">
            Ready to Build Your <br />
            Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Big Thing?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how our premium development and AI automation solutions can scale your business to new heights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/book-consultation"
              className="group px-10 py-5 bg-white text-primary-blue font-bold text-lg rounded-full flex items-center justify-center transition-all hover:bg-hover-cyan hover:text-white hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/60 font-medium">
            No commitment required. We respect your time and confidentiality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
