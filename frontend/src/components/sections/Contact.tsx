import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Our team will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Let's Build Together</h2>
          <p className="text-white/60 text-lg">Ready to scale? Drop us a line and let's discuss your next big move.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border border-white/10 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href="mailto:info@bryxadigital.com" className="text-white/60 hover:text-primary transition-colors text-sm">info@bryxadigital.com</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-6 rounded-2xl border border-white/10 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <a href="tel:+923147234624" className="text-white/60 hover:text-primary transition-colors text-sm">+92 314 7234624</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-2xl border border-white/10 flex items-start gap-4 cursor-pointer hover:border-primary/50 transition-colors group"
              onClick={() => window.open('https://wa.me/923147234624', '_blank')}
            >
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                <span className="text-white/60 text-sm">Chat with us directly</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-2xl border border-white/10 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <span className="text-white/60 text-sm">Lahore, Pakistan</span>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-white/80">Service of Interest</label>
                  <select 
                    id="service"
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="seo">SEO & Marketing</option>
                    <option value="creative">Creative & Video</option>
                    <option value="ai">AI Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Your Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project goals and timeline..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(62,160,255,0.4)] hover:shadow-[0_0_30px_rgba(62,160,255,0.6)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                data-testid="contact-submit"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
