import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const filters = ['All', 'Websites', 'SEO', 'Marketing', 'Graphic Design', 'Video Editing', 'AI Automation'];

const projects = [
  { id: 1, title: 'Nova SaaS Platform', category: 'Websites', img: '/portfolio-1.png' },
  { id: 2, title: 'Apex E-Commerce', category: 'Websites', img: '/portfolio-2.png' },
  { id: 3, title: 'Synth AI Dashboard', category: 'AI Automation', img: '/portfolio-3.png' },
  { id: 4, title: 'Global Tech Rebrand', category: 'Graphic Design', img: '/hero-2.png' },
  { id: 5, title: 'Nexus SEO Campaign', category: 'SEO', img: '/blog-2.png' },
  { id: 6, title: 'Quantum Lead Gen', category: 'Marketing', img: '/hero-3.png' },
  { id: 7, title: 'Vertex App UI', category: 'Websites', img: '/portfolio-1.png' },
  { id: 8, title: 'Neural Ad Creative', category: 'Video Editing', img: '/blog-1.png' },
  { id: 9, title: 'Echo Workflows', category: 'AI Automation', img: '/portfolio-3.png' },
  { id: 10, title: 'Pulse Social Media', category: 'Marketing', img: '/hero-1.png' },
  { id: 11, title: 'Orbit Branding', category: 'Graphic Design', img: '/hero-2.png' },
  { id: 12, title: 'Aether 3D Promo', category: 'Video Editing', img: '/blog-1.png' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(p => activeFilter === 'All' || p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Our Work</h2>
          <p className="text-white/60 text-lg mb-8">Elite execution across every digital discipline.</p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
                data-testid={`portfolio-filter-${filter}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-card"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-white font-heading font-bold text-xl mb-4">{project.title}</h3>
                  <a 
                    href="https://github.com/bryxadigital-hash/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-background font-bold rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
