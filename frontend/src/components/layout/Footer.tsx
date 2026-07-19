import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logoImg from '@assets/facebook_logo-removebg-preview_1781622955751.png';

export default function Footer() {
  return (
    <footer className="bg-card pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logoImg} alt="BRYXA Digital" className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(62,160,255,0.5)]" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Building Digital Excellence. We help brands scale through premium web development, strategic marketing, and AI automation solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">SEO & Marketing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Social Media</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Graphic Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>info@bryxadigital.com</li>
              <li>+92 314 7234624</li>
              <li>Lahore, Pakistan</li>
              <li className="pt-2">
                <a href="#contact" className="inline-block px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white transition-colors">
                  Free Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 BRYXA Digital. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-white/40 text-sm">
            Made with ❤️ in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
