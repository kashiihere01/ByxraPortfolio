import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Tag, X, ChevronRight, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  img: string;
  author: string;
  authorRole: string;
  content: Section[];
}

interface Section {
  heading?: string;
  body: string;
  list?: string[];
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "How AI Automation Is Transforming Digital Agencies in 2026",
    date: "June 12, 2026",
    readTime: "8 min read",
    category: "AI Solutions",
    author: "BRYXA Digital Team",
    authorRole: "AI & Automation Division",
    excerpt: "Discover how custom AI agents and intelligent workflows are reducing operational overhead by 40% while improving output quality for digital agencies worldwide.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
    content: [
      {
        heading: "The Agency Landscape Has Permanently Changed",
        body: "In 2024, AI was a novelty. In 2025, it was an experiment. In 2026, it is the operating system of every high-performing digital agency on the planet. The agencies that embraced intelligent automation early are now running leaner, faster, and more profitably than ever — while those that ignored the shift are scrambling to catch up.",
      },
      {
        heading: "What AI Automation Actually Means for an Agency",
        body: "When we talk about AI automation in an agency context, we're not talking about ChatGPT writing captions. We're talking about end-to-end workflow orchestration — systems that can:",
        list: [
          "Automatically pull client data from CRMs and generate weekly performance reports without a human lifting a finger",
          "Route incoming leads through qualification flows, score them by value, and notify the right team member in real time",
          "Generate first-draft ad creatives, social posts, and email sequences based on brand guidelines — ready for human review in minutes, not days",
          "Monitor campaign metrics 24/7 and trigger optimization alerts or automatic bid adjustments when performance thresholds are breached",
          "Onboard new clients automatically: send contracts, gather assets, create project boards, and notify the delivery team — all triggered by a single form submission",
        ]
      },
      {
        heading: "The Numbers Don't Lie",
        body: "At BRYXA Digital, after fully deploying AI automation across our internal operations in early 2026, we measured the following results over a 90-day period:",
        list: [
          "42% reduction in time spent on reporting and administrative tasks",
          "3x faster client onboarding from signed contract to project kickoff",
          "28% improvement in campaign performance from automated A/B testing loops",
          "Zero missed follow-ups thanks to automated CRM sequencing",
          "Revenue per team member increased by 67% without adding headcount",
        ]
      },
      {
        heading: "The Three Layers of AI Automation Every Agency Needs",
        body: "Based on our experience building automation systems for over 50 agencies globally, we've identified three distinct layers that need to work together for maximum impact.",
      },
      {
        heading: "Layer 1: Data & Reporting Automation",
        body: "The most painful part of agency life is manual reporting. Pulling data from Google Analytics, Meta Ads Manager, and HubSpot, formatting it into a client-friendly deck, and sending it every week is a soul-crushing task that takes 3-5 hours per client. AI automation eliminates this entirely. Tools like n8n, connected to your analytics platforms, can auto-generate branded reports, deliver them on schedule, and even write the insight commentary using GPT-4o trained on your agency's voice.",
      },
      {
        heading: "Layer 2: Client Communication & CRM Automation",
        body: "Most agencies lose deals not because they're bad at their craft, but because follow-up is inconsistent. An automated CRM system ensures every lead receives a response within minutes, every proposal gets a follow-up sequence, and every current client receives a proactive check-in — without a single human having to remember to do it.",
      },
      {
        heading: "Layer 3: Content & Creative Production",
        body: "This is where agencies are seeing the biggest productivity gains. AI-assisted creative production doesn't replace your designers and copywriters — it multiplies their output. An agency that used to produce 10 ad variations per week can now produce 100, with AI handling the iterations and humans making the strategic and aesthetic decisions.",
      },
      {
        heading: "Getting Started: Our Recommendation",
        body: "Don't try to automate everything at once. Start with the workflow that wastes the most of your team's time, automate it completely, measure the result, then move to the next. Most agencies see positive ROI within the first 30 days of their first automation deployment. The key is having the right architecture from the beginning — which is exactly what we build for our clients.",
      },
      {
        heading: "Ready to Automate Your Agency?",
        body: "At BRYXA Digital, we've built custom AI automation systems for agencies across e-commerce, real estate, education, and professional services. If you want to see what intelligent automation could look like for your business, reach out and let's build something extraordinary together.",
      },
    ]
  },
  {
    id: 2,
    title: "The Ultimate SEO Strategy Guide for E-Commerce Brands in 2026",
    date: "June 05, 2026",
    readTime: "11 min read",
    category: "SEO",
    author: "BRYXA Digital Team",
    authorRole: "SEO & Growth Division",
    excerpt: "A deep dive into the technical and content strategies that are driving massive organic growth for top e-commerce retailers — from Core Web Vitals to AI-generated search intent clusters.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=85",
    content: [
      {
        heading: "E-Commerce SEO in 2026 Is Not What It Was in 2024",
        body: "Google's algorithm has undergone its most significant transformation in a decade. The rise of AI-generated search results (SGE), the shift toward conversational queries, and the increasing weight given to real user experience signals have completely rewritten the SEO playbook. Brands that are still following 2022-era advice are actively losing ground to competitors who have adapted.",
      },
      {
        heading: "The Foundation: Technical SEO You Cannot Skip",
        body: "Before content, before backlinks, before anything else — your technical foundation must be bulletproof. For e-commerce specifically, these are the non-negotiables in 2026:",
        list: [
          "Core Web Vitals: LCP under 2.5 seconds, INP under 200ms, CLS below 0.1 — these are now direct ranking factors with significant weight",
          "Crawl budget optimization: ensure Googlebot isn't wasting crawl on faceted navigation URLs, pagination, and duplicate product variations",
          "Structured data: Product, Review, BreadcrumbList, and FAQPage schema are essential for rich results in both traditional and AI-generated search",
          "International targeting: proper hreflang implementation is critical if you sell in multiple markets",
          "JavaScript rendering: if your product pages rely heavily on client-side JS, you may be invisible to Google — server-side rendering is the only safe path",
        ]
      },
      {
        heading: "Keyword Strategy Has Evolved: Enter Search Intent Clustering",
        body: "Targeting individual keywords is a relic of the past. In 2026, the winning approach is search intent clustering — grouping keywords by the underlying user intent and creating content architectures that satisfy the entire intent cluster with a single, comprehensive resource. For an e-commerce brand, this means your category pages should be intent hubs, not just product listing pages. They should answer questions, compare options, provide buying guides, and showcase social proof — all while listing your products.",
      },
      {
        heading: "Content Architecture That Dominates Categories",
        body: "The most successful e-commerce SEO strategies we've seen in 2026 use a three-tier content architecture:",
        list: [
          "Tier 1 — Pillar Pages: broad category-level content targeting high-volume informational intent (e.g., 'best running shoes')",
          "Tier 2 — Cluster Pages: product-category pages targeting commercial investigation intent (e.g., 'best running shoes for flat feet')",
          "Tier 3 — Product Pages: optimized for transactional intent with rich schema, reviews, and conversion-focused copy",
        ]
      },
      {
        heading: "The Link Building Strategies That Still Work",
        body: "Backlink building remains one of the most impactful SEO levers — but the tactics have evolved dramatically. In 2026, the approaches that consistently move the needle for e-commerce brands are:",
        list: [
          "Digital PR: newsworthy data studies and product launches that earn links from major publications",
          "Supplier and partner link exchanges: legitimate, editorial links from brands you work with",
          "Broken link reclamation at scale using AI-assisted outreach tools",
          "Review and comparison site placements: high-authority product review content that ranks and links",
          "Community and forum presence: authentic participation in Reddit, Quora, and niche forums builds topical authority",
        ]
      },
      {
        heading: "AI Search Optimization: The Frontier",
        body: "Google's Search Generative Experience (SGE) and other AI-powered search surfaces are fundamentally changing how users discover products. Optimizing for AI citations requires a different strategy than traditional SEO: comprehensive, factually dense content that directly answers specific questions, structured in a way that AI can easily extract and cite. Brands that get featured in AI-generated answers are seeing click-through rates that rival top organic positions — and the competition for these spots is still relatively low.",
      },
      {
        heading: "Measuring What Matters: The 2026 E-Commerce SEO Dashboard",
        body: "Stop obsessing over keyword rankings in isolation. The metrics that matter for e-commerce SEO in 2026 are:",
        list: [
          "Organic revenue and organic revenue growth rate (not just traffic)",
          "Organic conversion rate by landing page type",
          "Share of Voice for your top 50 commercial keywords",
          "Core Web Vitals pass rate across your product catalog",
          "AI search citation frequency (trackable via brand mention monitoring tools)",
          "Page depth engagement — are users actually reading your content?",
        ]
      },
      {
        heading: "The Bottom Line",
        body: "E-commerce SEO in 2026 rewards brands that invest in genuine quality: technically excellent sites, content that truly serves user intent, and a brand reputation strong enough to earn links and mentions naturally. The shortcuts that worked in 2020 are now liabilities. If you want sustainable organic growth, the investment is worth making — and the brands that make it now will be nearly impossible to displace in 12 months.",
      },
    ]
  },
  {
    id: 3,
    title: "Why Premium Video Ads Drive 3x More Conversions Than Cheap UGC",
    date: "May 28, 2026",
    readTime: "7 min read",
    category: "Marketing",
    author: "BRYXA Digital Team",
    authorRole: "Creative Production Division",
    excerpt: "The era of cheap, lo-fi UGC content is ending. Here's the data behind why cinematic, high-retention video production is dominating paid social in 2026 — and what it means for your ad strategy.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=85",
    content: [
      {
        heading: "The UGC Bubble Is Deflating",
        body: "From 2021 to 2024, user-generated content was the golden child of paid social advertising. Raw, authentic, slightly-shaky phone videos consistently outperformed polished studio productions. Brands poured money into creator marketplaces and UGC agencies, and for a while — it worked. Then everyone did it. Now, every brand on Instagram and TikTok looks the same: someone in a bathroom talking into their iPhone. The differentiation advantage of UGC has vanished because it's no longer authentic — it's a template.",
      },
      {
        heading: "What the Data Shows in 2026",
        body: "We analyzed over 2,400 ad creative variations across 80 brands in our portfolio throughout 2025 and early 2026. The results were clear: for brands in the $50K+ monthly ad spend range, premium cinematic video ads are now outperforming raw UGC by a significant margin.",
        list: [
          "Average ROAS: 6.2x for premium video vs 4.1x for raw UGC (51% higher)",
          "Average watch time: 68% for premium video vs 41% for UGC (on 30-second creatives)",
          "Conversion rate from video view to purchase: 3.1% vs 0.9%",
          "Cost per acquisition: 34% lower for premium video despite higher CPM",
          "Brand recall at 7 days: 74% for cinematic vs 38% for raw UGC",
        ]
      },
      {
        heading: "Why the Psychology Has Shifted",
        body: "Consumer psychology adapts to advertising patterns faster than most marketers realize. When UGC first emerged, it stood out because it felt real in a sea of obviously corporate ads. Now, consumers have seen thousands of UGC-format ads and their pattern-recognition triggers instantly: 'this is an ad pretending not to be an ad.' The authenticity signal has inverted. Today, a genuinely well-crafted video with beautiful cinematography, professional color grading, and intentional sound design actually feels more authentic to many consumers — because it signals that a brand cares enough to invest in quality.",
      },
      {
        heading: "The Elements That Make a Video Ad Convert in 2026",
        body: "Based on our creative testing data, these are the elements that most strongly correlate with high-converting video ads:",
        list: [
          "First 1.5 seconds: pattern interruption that stops the scroll — movement, unexpected visual, or a bold statement",
          "Seconds 2-8: clear value proposition delivered visually, not just verbally",
          "Emotional arc: even a 30-second ad needs a mini-story with tension and resolution",
          "Sound design: 70% of viewers on Meta watch with sound off — your video must work silently and be even better with sound",
          "Native feel: shot and edited for the platform, not repurposed from other formats",
          "Call-to-action clarity: single, specific CTA with visual reinforcement in the final 3 seconds",
        ]
      },
      {
        heading: "The Hybrid Strategy: Smart Blend of Premium + UGC",
        body: "We're not saying abandon UGC entirely. The winning strategy in 2026 is a deliberate blend: use premium cinematic video for awareness and brand-building campaigns where you need maximum impact and brand recall. Use authentic, well-briefed UGC for retargeting and social proof campaigns where credibility is the key conversion driver. Each format has its role — the mistake is using cheap UGC for everything because it's easier and cheaper to produce.",
      },
      {
        heading: "The Production Investment Question",
        body: "The common objection we hear is: 'premium video costs too much.' Here's the counter: if a premium video ad generates 3x the conversions at 34% lower CPA, the higher production cost pays back within the first week of a substantial campaign. The real cost isn't the production — it's spending months on underperforming cheap creative when better results were available. Smart brands now treat video production as a performance investment, not a cost center.",
      },
      {
        heading: "What This Means for Your 2026 Ad Strategy",
        body: "If you're spending more than $10,000 per month on paid social advertising and relying primarily on raw UGC or static image ads, you are almost certainly leaving significant performance on the table. The brands outperforming you in your categories are investing in premium creative. The question isn't whether great video ads work — the data is settled. The question is whether you're ready to invest in creative quality as a genuine competitive advantage.",
      },
    ]
  }
];

export default function Blog() {
  const [openPost, setOpenPost] = useState<number | null>(null);

  const active = posts.find(p => p.id === openPost);

  const handleOpen = (id: number) => {
    setOpenPost(id);
    setTimeout(() => {
      document.getElementById('blog-article')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="blog" className="py-24 bg-card border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">Latest Insights</h2>
            <p className="text-white/50 text-lg">Strategies, deep dives & agency news.</p>
          </div>
          {openPost && (
            <button
              onClick={() => setOpenPost(null)}
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors"
              data-testid="blog-back-btn"
            >
              <ArrowLeft size={16} /> Back to all articles
            </button>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`bg-background rounded-2xl overflow-hidden border transition-all duration-300 group cursor-pointer ${
                openPost === post.id
                  ? 'border-primary shadow-[0_0_24px_rgba(62,160,255,0.18)]'
                  : 'border-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(62,160,255,0.1)] hover:border-white/20'
              }`}
              onClick={() => handleOpen(post.id)}
              data-testid={`blog-card-${post.id}`}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-white/35 text-xs mb-3 font-mono">
                  <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                </div>
                <h3 className={`text-lg font-heading font-bold mb-3 leading-snug transition-colors ${
                  openPost === post.id ? 'text-primary' : 'text-white group-hover:text-primary'
                }`}>
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm mb-5 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  openPost === post.id ? 'text-primary' : 'text-white/60 group-hover:text-primary'
                }`}>
                  {openPost === post.id ? 'Reading now' : 'Read More'} <ChevronRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FULL ARTICLE PANEL ── */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.article
              id="blog-article"
              key={active.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.42 }}
              className="mt-14 rounded-2xl overflow-hidden border border-white/8 bg-background/50 backdrop-blur-sm"
            >
              {/* Top accent */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              {/* Hero Image */}
              <div className="relative h-72 md:h-96 overflow-hidden">
                <motion.img
                  key={active.id + '-hero'}
                  src={active.img}
                  alt={active.title}
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Article meta overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      <Tag size={10} /> {active.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Calendar size={12} /> {active.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Clock size={12} /> {active.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-heading font-bold text-white leading-tight max-w-3xl">
                    {active.title}
                  </h2>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setOpenPost(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/40 border border-white/15 backdrop-blur flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                  data-testid="blog-close-btn"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Article Body */}
              <div className="px-6 md:px-16 lg:px-24 py-12 max-w-4xl mx-auto">
                {/* Author */}
                <div className="flex items-center gap-3 mb-10 pb-8 border-b border-white/8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                    B
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{active.author}</p>
                    <p className="text-white/40 text-xs">{active.authorRole}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-white/30 text-xs">{active.date} · {active.readTime}</p>
                  </div>
                </div>

                {/* Excerpt / Lead */}
                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-primary pl-5 italic">
                  {active.excerpt}
                </p>

                {/* Sections */}
                <div className="space-y-10">
                  {active.content.map((section, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      {section.heading && (
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-4 mt-2">
                          {section.heading}
                        </h3>
                      )}
                      <p className="text-white/60 text-base leading-relaxed mb-4">{section.body}</p>
                      {section.list && (
                        <ul className="space-y-2.5 mt-4 pl-1">
                          {section.list.map((item, li) => (
                            <li key={li} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
                              <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/25 text-primary text-[9px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                                {li + 1}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-14 pt-10 border-t border-white/8">
                  <div className="rounded-2xl bg-primary/8 border border-primary/15 p-8 text-center">
                    <h4 className="text-xl font-heading font-bold text-white mb-2">Ready to grow your business?</h4>
                    <p className="text-white/50 text-sm mb-6">Let BRYXA Digital handle the strategy, execution, and results.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <button
                        onClick={() => {
                          setOpenPost(null);
                          setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                        }}
                        className="px-6 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#007BFF] transition-colors shadow-[0_0_16px_rgba(62,160,255,0.35)]"
                        data-testid="blog-cta-contact"
                      >
                        Get a Free Consultation
                      </button>
                      <button
                        onClick={() => setOpenPost(null)}
                        className="px-6 py-2.5 border border-white/15 text-white/60 rounded-xl font-semibold text-sm hover:border-white/30 hover:text-white transition-all"
                        data-testid="blog-cta-back"
                      >
                        ← More Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
            </motion.article>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
