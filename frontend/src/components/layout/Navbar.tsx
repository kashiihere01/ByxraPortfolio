import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@assets/facebook_logo-removebg-preview_1781622955751.png';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceCategories = [
  {
    name: "Development",
    items: ["Web Development", "WordPress Development", "E-Commerce Development", "UI/UX Design"]
  },
  {
    name: "Marketing",
    items: ["SEO", "Google Ads", "Meta Ads", "SMM"]
  },
  {
    name: "Creative",
    items: ["Graphic Design", "Video Editing", "2D Animation", "3D Animation", "Creative Production & Advertising"]
  },
  {
    name: "Content Creation",
    items: ["Content Strategy", "Copywriting", "UGC Ads", "Educational Ads", "Cinematic Video Ads", "Product Advertisement Videos"]
  },
  {
    name: "Real Estate & Commercial",
    items: ["Real Estate Ads", "Property Showcase Videos", "Commercial Video Production", "Motion Graphics"]
  },
  {
    name: "AI Solutions",
    items: ["AI Automation", "AI Agents", "Chatbots", "Workflow Automation"]
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => scrollTo('hero')}
          data-testid="nav-logo"
        >
          <img src={logoImg} alt="BRYXA Digital" className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(62,160,255,0.6)]" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => scrollTo('hero')} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-home">Home</button>
          <button onClick={() => scrollTo('about')} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-about">About</button>
          
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button onClick={() => scrollTo('services')} className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors py-2" data-testid="nav-services">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-card/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl grid grid-cols-3 gap-6"
                >
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx}>
                      <h4 className="font-secondary font-semibold text-primary mb-3 text-sm">{cat.name}</h4>
                      <ul className="space-y-2">
                        {cat.items.map((item, i) => (
                          <li key={i}>
                            <button 
                              onClick={() => scrollTo('services')} 
                              className="text-white/70 hover:text-white text-sm text-left transition-colors"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => scrollTo('portfolio')} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-portfolio">Portfolio</button>
          <button onClick={() => scrollTo('pricing')} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-pricing">Pricing</button>
          <button onClick={() => scrollTo('team')} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-team">Team</button>
          <button onClick={() => scrollTo('blog')} className="text-sm font-medium text-white/80 hover:text-white transition-colors" data-testid="nav-blog">Blog</button>
        </nav>

        <div className="hidden lg:block">
          <button 
            onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(62,160,255,0.4)] hover:shadow-[0_0_30px_rgba(62,160,255,0.6)]"
            data-testid="nav-cta"
          >
            Get Proposal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
          data-testid="nav-mobile-toggle"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl border-l border-white/10 flex flex-col"
          >
            <div className="p-4 flex justify-end border-b border-white/10">
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2" data-testid="nav-mobile-close">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 p-8 overflow-y-auto">
              <button onClick={() => scrollTo('hero')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-home">Home</button>
              <button onClick={() => scrollTo('about')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-about">About</button>
              <button onClick={() => scrollTo('services')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-services">Services</button>
              <button onClick={() => scrollTo('portfolio')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-portfolio">Portfolio</button>
              <button onClick={() => scrollTo('pricing')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-pricing">Pricing</button>
              <button onClick={() => scrollTo('team')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-team">Team</button>
              <button onClick={() => scrollTo('blog')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-blog">Blog</button>
              <button onClick={() => scrollTo('contact')} className="text-2xl font-heading text-left font-bold text-white" data-testid="mobile-nav-contact">Contact</button>
              
              <button 
                onClick={() => scrollTo('contact')}
                className="mt-8 px-6 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-md hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(62,160,255,0.4)]"
                data-testid="mobile-nav-cta"
              >
                Get Proposal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
