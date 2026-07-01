"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex-grow pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 text-dark-text"
          >
            Get In <span className="text-primary-blue">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Have a project in mind? We'd love to hear about it. Reach out to our team.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10 bg-light-background p-10 rounded-3xl"
          >
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-blue mr-4 shadow-sm shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-dark-text">Email</h4>
                    <p className="text-gray-600">hello@byrxa.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-blue mr-4 shadow-sm shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-dark-text">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-blue mr-4 shadow-sm shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-dark-text">Office</h4>
                    <p className="text-gray-600">123 Innovation Drive<br/>Tech District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-semibold mb-4">Connect on WhatsApp</h4>
              <button className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors">
                <MessageSquare className="mr-2" size={20} /> Chat with us
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white"
          >
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">Services Interested In</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue transition-colors">
                  <option>Web Development</option>
                  <option>AI Automation</option>
                  <option>Digital Marketing</option>
                  <option>Branding & Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-primary-blue text-white rounded-lg font-bold text-lg hover:bg-hover-cyan transition-colors shadow-lg shadow-primary-blue/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
