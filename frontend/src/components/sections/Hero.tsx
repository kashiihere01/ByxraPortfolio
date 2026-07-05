import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  "Web Development",
  "SEO Services",
  "Digital Marketing",
  "SMM",
  "Graphic Design",
  "Video Editing",
  "2D Animation",
  "3D Animation",
  "AI Automation",
  "AI Agents"
];

const images = [
  "/hero-1.png",
  "/hero-2.png",
  "/hero-3.png",
  "/hero-4.png"
];

function Counter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-3xl font-heading font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/60 font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6">
              Building Powerful Brands Through
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 h-[140px] md:h-[160px] flex items-start">
              <motion.span
                key={serviceIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
              >
                {services[serviceIndex]}
              </motion.span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              Helping businesses scale through websites, marketing, creative production and AI-powered automation solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(62,160,255,0.4)] hover:shadow-[0_0_30px_rgba(62,160,255,0.6)] hover:-translate-y-1"
                data-testid="hero-cta-start"
              >
                Get Started
              </button>
              <button 
                onClick={() => scrollTo('portfolio')}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-md hover:bg-white/10 transition-all hover:-translate-y-1"
                data-testid="hero-cta-portfolio"
              >
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <Counter end={150} suffix="+" label="Projects" />
              <Counter end={50} suffix="+" label="Clients" />
              <Counter end={5} suffix="+" label="Years Exp." />
              <Counter end={98} suffix="%" label="Satisfaction" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10" />
            {images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt="BRYXA Digital Work"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: imageIndex === idx ? 1 : 0,
                  scale: imageIndex === idx ? 1 : 1.1
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
