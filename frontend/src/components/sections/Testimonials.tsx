import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "BRYXA Digital completely transformed our online presence. Their web development and SEO strategies increased our organic traffic by 300% in just four months.",
    name: "Sarah Jenkins",
    company: "TechNova Solutions",
    avatar: "/avatar-1.png"
  },
  {
    text: "The AI automation workflows they built for our customer support team saved us countless hours and significantly improved our response times. Elite level engineering.",
    name: "Marcus Reed",
    company: "Global Logistics Inc",
    avatar: "/avatar-2.png"
  },
  {
    text: "Their creative production is unmatched. The cinematic video ads they produced for our Q4 campaign resulted in our highest converting quarter to date.",
    name: "Elena Rostova",
    company: "Aura Cosmetics",
    avatar: "/avatar-3.png"
  },
  {
    text: "Working with BRYXA feels like having an elite in-house team. They are precise, fast, and truly care about scaling your business.",
    name: "David Chen",
    company: "Velocity Startups",
    avatar: "/avatar-1.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-white/60 text-lg">Don't just take our word for it. Here is what industry leaders think.</p>
        </div>

        <div className="max-w-4xl mx-auto relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-card border border-white/10 p-8 md:p-12 rounded-2xl w-full text-center shadow-2xl relative overflow-hidden">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                
                <p className="text-lg md:text-2xl text-white/90 font-secondary leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full border border-white/20 bg-background object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name}&background=0D1117&color=3EA0FF`;
                    }}
                  />
                  <div className="text-left">
                    <div className="text-white font-bold">{testimonials[currentIndex].name}</div>
                    <div className="text-white/50 text-sm">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
