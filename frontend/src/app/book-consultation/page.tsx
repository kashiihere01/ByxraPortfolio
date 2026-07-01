"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function BookConsultationPage() {
  return (
    <main className="flex-grow pt-32 pb-24 bg-light-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 text-dark-text"
          >
            Book a <span className="text-primary-blue">Consultation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Select a time below to schedule a free 30-minute discovery call with our experts.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center justify-center min-h-[600px]"
        >
          {/* Placeholder for Calendly Integration */}
          <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue mb-6">
            <Calendar size={40} />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4">Calendly Integration Setup</h3>
          <p className="text-gray-500 text-center max-w-md mb-8">
            This space is reserved for your Calendly embed widget. Once you provide your Calendly link, the booking calendar will appear here seamlessly.
          </p>
          <div className="w-full max-w-3xl aspect-[4/3] bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-400 font-medium">Embed Calendly Widget Here</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
