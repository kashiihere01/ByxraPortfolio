import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "BRYXA Digital completely transformed our website and online visibility. Within just 3 months, our Google ranking jumped to the first page and our client inquiries doubled. Misbah's SEO strategy is genuinely world-class!",
    name: "Sarmad Lali",
    company: "Sarmad Lali Studios — YouTube & Content Creator",
    avatar: "https://i.pravatar.cc/200?img=33"
  },
  {
    text: "Our masonry business website was built in record time and looks absolutely professional. The team understood exactly what a local US contractor needs — fast loading, clear CTAs, and strong local SEO. Highly recommend BRYXA!",
    name: "James Harrington",
    company: "Omega Masonry — Plano, TX",
    avatar: "https://i.pravatar.cc/200?img=68"
  },
  {
    text: "Ali Hamza and his team completely revived our social media presence. Engagement on Instagram and Facebook grew 5x within two months, and we saw a clear increase in café footfall. Best digital marketing investment we've made.",
    name: "Fatima Malik",
    company: "Butlers Chocolate Café — Lahore",
    avatar: "https://i.pravatar.cc/200?img=47"
  },
  {
    text: "The AI automation system BRYXA built for our DigiHomeo platform is nothing short of revolutionary. Patient follow-ups, appointment reminders, and lead handling are all fully automated now. We save 30+ hours every week!",
    name: "Dr. Naveed Ahmad",
    company: "DigiHomeo — Digital Homeopathy Platform",
    avatar: "https://i.pravatar.cc/200?img=52"
  },
  {
    text: "Nisha's graphic design work is simply exceptional. Our brand identity — logos, social media templates, and all marketing materials — came out stunning. Our clients constantly compliment our visual branding. BRYXA delivers!",
    name: "Hira Baig",
    company: "Gloss Beauty Studio — Karachi",
    avatar: "https://i.pravatar.cc/200?img=25"
  },
  {
    text: "BRYXA Digital built us a world-class corporate website for our Gulf market expansion. Their strategy for launching on Amazon UAE and Noon — with full localization and PPC support — gave us a massive competitive edge from day one.",
    name: "Khalid Al-Mansouri",
    company: "Nexus eVentures Corporation — UAE",
    avatar: "https://i.pravatar.cc/200?img=57"
  },
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
