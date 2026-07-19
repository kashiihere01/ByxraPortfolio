import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const serviceSlides = [
  { label: "Web Development",        image: "/hero-web-dev.jpg",           sub: "Custom websites & web apps built for speed, scale, and conversions." },
  { label: "SEO Services",           image: "/hero-seo.jpg",               sub: "Dominate search rankings with data-driven SEO strategies that grow organically." },
  { label: "Digital Marketing",      image: "/hero-digital-marketing.jpg", sub: "Full-funnel digital marketing campaigns that drive real, measurable business growth." },
  { label: "SMM",                    image: "/hero-smm.jpg",               sub: "Build engaged communities and grow your brand across every social platform." },
  { label: "Graphic Design",         image: "/hero-graphic-design.jpg",    sub: "Premium brand identities and visual designs that command attention and trust." },
  { label: "Video Editing",          image: "/hero-video-editing.jpg",     sub: "Cinematic, high-retention video production that converts viewers into customers." },
  { label: "2D Animation",           image: "/hero-2d-animation.jpg",      sub: "Engaging 2D animated explainers and ads that simplify complex ideas beautifully." },
  { label: "3D Animation",           image: "/hero-3d-animation.jpg",      sub: "Photorealistic 3D product visuals and commercials that elevate your brand to premium." },
  { label: "AI Automation",          image: "/hero-ai-automation.jpg",     sub: "Intelligent workflows that eliminate repetitive tasks and multiply your team's output." },
  { label: "AI Agents",              image: "/hero-ai-agents2.jpg",        sub: "Autonomous AI agents that research, decide, and act 24/7 on your behalf." },
  { label: "Chatbots",               image: "/svc-chatbots.jpg",           sub: "Smart conversational chatbots deployed on your website or WhatsApp 24/7." },
  { label: "Workflow Automation",    image: "/svc-workflow.jpg",           sub: "Connect your entire tool stack and eliminate manual work with intelligent automations." },
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
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % serviceSlides.length);
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
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4 h-[80px] flex items-start">
              <motion.span
                key={slideIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
              >
                {serviceSlides[slideIndex].label}
              </motion.span>
            </h1>
            
            <motion.p
              key={slideIndex + '-sub'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base text-white/70 mb-8 leading-relaxed max-w-xl"
            >
              {serviceSlides[slideIndex].sub}
            </motion.p>
            
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
            className="relative h-[280px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10" />
            {serviceSlides.map((slide, idx) => (
              <motion.img
                key={idx}
                src={slide.image}
                alt={slide.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: slideIndex === idx ? 1 : 0,
                  scale: slideIndex === idx ? 1 : 1.1
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            ))}
            {/* Service label badge — synced with current slide */}
            <div className="absolute bottom-5 left-5 z-20 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md">
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                {serviceSlides[slideIndex].label}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
