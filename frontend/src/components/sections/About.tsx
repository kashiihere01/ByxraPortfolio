import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Glow orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              About <span className="text-primary">BRYXA Digital</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We are a premium digital agency driving exponential growth for forward-thinking brands. By blending elite creative production, technical excellence, and next-gen AI automation, we transform ambitious visions into market-leading realities. We don't just build websites or run ads — we architect digital ecosystems designed to dominate.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-heading font-bold text-white mb-1">5+</div>
                <div className="text-sm font-medium text-white/60">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white mb-1">150+</div>
                <div className="text-sm font-medium text-white/60">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white mb-1">50+</div>
                <div className="text-sm font-medium text-white/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white mb-1">10+</div>
                <div className="text-sm font-medium text-white/60">Team Members</div>
              </div>
            </div>

            <button 
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-md hover:bg-white/10 hover:border-primary/50 transition-all group relative overflow-hidden"
              data-testid="about-learn-more"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Learn More</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/about-team.png" 
                alt="BRYXA Digital Team" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
