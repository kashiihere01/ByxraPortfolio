
"use client";
import Link from "next/link";
import { ArrowRight, Globe, Mail, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-heading font-bold tracking-tighter block">
              BYRXA<span className="text-primary-blue">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We help businesses scale through premium development, AI automation, marketing, and creative solutions. Build. Automate. Scale.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-blue transition-colors text-white">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-blue transition-colors text-white">
                <Mail size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-blue transition-colors text-white">
                <Phone size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-blue transition-colors text-white">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Portfolio", "Case Studies", "Blog"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-blue" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {["Full Stack Development", "AI Automation", "Agentic AI", "SEO & Marketing", "Creative Design"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest AI and tech insights.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-blue text-white transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-primary-blue hover:bg-hover-cyan text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center group"
              >
                Subscribe
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BYRXA Digital Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
