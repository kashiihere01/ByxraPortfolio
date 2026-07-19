import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const filters = ['All', 'Websites', 'SEO', 'Marketing', 'Graphic Design', 'Video Editing', 'AI Automation'];

const projects = [
  { id: 1, title: 'Sarmad Lali Studios', category: 'Websites', img: '/portfolio-sarmad.png', tag: 'WordPress Portfolio', desc: 'Freelancer portfolio site for a YouTube content specialist, showcasing channel growth strategy, video editing, scriptwriting, and thumbnail design.', link: 'https://pixelcraft-taupe.vercel.app/' },
  { id: 2, title: 'Omega Masonry', category: 'Websites', img: '/portfolio-omega.png', tag: 'WordPress Local Service', desc: 'Local-service website for a Plano, TX masonry contractor, highlighting brick repair, retaining walls, stucco, chimney repair, and customer reviews.', link: 'https://pixelcraft-taupe.vercel.app/' },
  { id: 3, title: 'Nexus eVentures Corporation', category: 'Websites', img: '/portfolio-nexus.png', tag: 'Next.js Corporate Site', desc: 'Corporate website for a Gulf-market distribution company helping brands launch on Amazon UAE/KSA and Noon with localization, PPC, and fulfillment support.', link: 'https://pixelcraft-taupe.vercel.app/' },
  { id: 4, title: 'Creative Design Portfolio', category: 'Graphic Design', img: '/portfolio-graphic.jpg', tag: 'Graphic Design', desc: 'A showcase of premium graphic design work — brand identities, social media creatives, print materials, and visual assets crafted for clients across multiple industries.', link: 'https://celebrated-maamoul-935940.netlify.app' },
  { id: 5, title: 'SEO Portfolio', category: 'SEO', img: '/portfolio-seo.jpg', tag: 'SEO & Local Search', desc: 'Data-driven SEO strategy showcasing keyword research, on-page optimization, local SEO, and link building campaigns that consistently deliver top Google rankings.', link: 'https://misbah-mehmood-localseo-portfolio.lovable.app/' },
  { id: 6, title: 'Butlers Chocolate Café', category: 'Marketing', img: '/portfolio-butlers.jpg', tag: 'Digital Marketing', desc: 'Full digital marketing campaign for a premium chocolate café brand — social media growth, paid ads, and content strategy that drove footfall and online engagement.', link: 'https://portfloi-website.lovable.app/' },
  { id: 8, title: 'Video Editing Portfolio', category: 'Video Editing', img: '/portfolio-video.jpg', tag: 'Video Production', desc: 'Professional video editing showcase — cinematic cuts, color grading, motion graphics, and high-retention ad edits produced for brands across multiple industries.', link: 'https://celebrated-maamoul-935940.netlify.app' },
  { id: 9, title: 'DigiHomeo AI Automation', category: 'AI Automation', img: '/portfolio-ai.jpg', tag: 'AI Automation', desc: 'AI-powered automation solution for a digital homeopathy platform — intelligent workflows, smart patient management, and AI-driven engagement that scales seamlessly.', link: 'https://digihomeo.com/' },
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
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 backdrop-blur-sm">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">{(project as any).tag ?? project.category}</span>
                  <h3 className="text-white font-heading font-bold text-sm mb-3 leading-tight">{project.title}</h3>
                  <a
                    href={(project as any).link ?? '#'}
                    target={((project as any).link && (project as any).link !== '#') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/80 transition-colors shadow-[0_0_12px_rgba(62,160,255,0.4)]"
                  >
                    View Project →
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
