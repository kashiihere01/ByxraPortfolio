import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Search, Megaphone, Share2,
  PenTool, Video, Film, Box,
  Cpu, Bot, MessageSquare, Repeat,
  FileText, Camera, PlayCircle, CheckCircle, ExternalLink
} from 'lucide-react';

const WA = 'https://wa.me/923147234624?text=I%20want%20to%20purchase%20this%20package';
const GH = 'https://github.com/bryxadigital-hash/Portfolio';

interface Tier { name: string; price: string; features: string[]; popular?: boolean; }
interface PortfolioItem { title: string; desc: string; img: string; }
interface Service {
  id: string; title: string; icon: React.ElementType;
  desc: string; fullDesc: string; image: string;
  benefits: string[]; process: string[]; tiers: Tier[];
  portfolio: PortfolioItem[];
}

const services: Service[] = [
  {
    id: 'web-dev', title: 'Web Development', icon: Code,
    desc: 'High-performance, scalable custom web applications and corporate sites.',
    fullDesc: 'We craft pixel-perfect, lightning-fast websites and web applications that convert visitors into customers. From landing pages to full-stack SaaS platforms, every line of code is built for performance, scalability, and SEO. We combine modern frameworks with clean architecture to deliver sites that look premium and load instantly.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=85',
    benefits: ['Mobile-first responsive design', 'Core Web Vitals optimized', 'SEO-ready architecture', 'CMS integration (WordPress/Headless)', 'Custom animations & interactions'],
    process: ['Discovery & wireframing', 'UI/UX design approval', 'Development & testing', 'Launch & handover'],
    tiers: [
      { name: 'Starter', price: '$499', features: ['5-page website', 'Responsive design', 'Contact form', 'Basic SEO', '1 revision round', '2-week delivery'] },
      { name: 'Professional', price: '$999', features: ['10-page website', 'Custom animations', 'CMS integration', 'Advanced SEO', 'Google Analytics', '3 revision rounds', '3-week delivery'], popular: true },
      { name: 'Enterprise', price: '$2,499', features: ['Unlimited pages', 'Full-stack app', 'E-commerce ready', 'API integrations', 'Priority support', 'Unlimited revisions', '5-week delivery'] }
    ],
    portfolio: [
      { title: 'Nova SaaS Platform', desc: 'Modern SaaS dashboard with real-time analytics', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80' },
      { title: 'Apex E-Commerce Store', desc: 'Full e-commerce solution with custom checkout', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80' },
      { title: 'Vertex Corporate Site', desc: 'Enterprise corporate website with CMS', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&q=80' },
    ]
  },
  {
    id: 'seo', title: 'SEO', icon: Search,
    desc: 'Data-driven search engine optimization to dominate rankings.',
    fullDesc: 'Our SEO strategies are built on deep technical audits, competitor analysis, and content authority. We don\'t chase algorithms — we build sustainable organic visibility that compounds over time and drives qualified traffic month after month.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=85',
    benefits: ['Technical SEO audit & fixes', 'Keyword strategy & mapping', 'On-page & off-page optimization', 'Monthly ranking reports', 'Link building campaigns'],
    process: ['Full SEO audit', 'Keyword & competitor research', 'On-page optimization', 'Link building & monitoring'],
    tiers: [
      { name: 'Starter', price: '$299/mo', features: ['10 target keywords', 'On-page optimization', 'Monthly report', 'Google Search Console setup', 'Basic link building'] },
      { name: 'Professional', price: '$599/mo', features: ['30 target keywords', 'Technical SEO fixes', 'Content optimization', 'Authority link building', 'Bi-weekly reports', 'Competitor tracking'], popular: true },
      { name: 'Enterprise', price: '$1,199/mo', features: ['Unlimited keywords', 'Full technical overhaul', 'Content creation', 'Premium link outreach', 'Weekly reports', 'Dedicated SEO manager'] }
    ],
    portfolio: [
      { title: 'Nexus SEO Campaign', desc: '420% organic traffic growth in 6 months', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80' },
      { title: 'TechCorp Ranking Drive', desc: '#1 rankings for 45 commercial keywords', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80' },
      { title: 'E-Commerce SEO Overhaul', desc: '3x revenue increase via organic search', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80' },
    ]
  },
  {
    id: 'google-ads', title: 'Google Ads', icon: Megaphone,
    desc: 'High-converting PPC campaigns with precise audience targeting.',
    fullDesc: 'We manage Google Ads campaigns that maximize ROI through meticulous keyword bidding, ad copy testing, and conversion tracking. Every rupee of your ad budget is optimized to bring you the highest-quality leads at the lowest cost per acquisition.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=85',
    benefits: ['Search, Display & Shopping campaigns', 'A/B tested ad creatives', 'Conversion tracking setup', 'Negative keyword management', 'Remarketing campaigns'],
    process: ['Account audit & setup', 'Campaign strategy & build', 'Launch & monitor', 'Optimize & scale'],
    tiers: [
      { name: 'Starter', price: '$349/mo', features: ['Up to $1k ad spend managed', '2 campaigns', 'Ad copy creation', 'Weekly optimization', 'Monthly report'] },
      { name: 'Professional', price: '$699/mo', features: ['Up to $5k ad spend managed', '5 campaigns', 'A/B testing', 'Remarketing setup', 'Landing page review', 'Bi-weekly reports'], popular: true },
      { name: 'Enterprise', price: '$1,399/mo', features: ['Unlimited ad spend', 'Full funnel campaigns', 'Shopping & Display ads', 'Dedicated account manager', 'Weekly strategy calls'] }
    ],
    portfolio: [
      { title: 'SaaS Lead Gen Campaign', desc: '8.4x ROAS on Google Search', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&q=80' },
      { title: 'E-Commerce Shopping Ads', desc: '67% reduction in cost per conversion', img: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=500&q=80' },
      { title: 'B2B Demand Generation', desc: '200+ qualified leads per month', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80' },
    ]
  },
  {
    id: 'meta-ads', title: 'Meta Ads', icon: Share2,
    desc: 'Scroll-stopping social advertising on Facebook and Instagram.',
    fullDesc: 'We create and manage Meta ad campaigns that stop the scroll and drive real business results. From awareness to retargeting, our creative-first approach pairs compelling visuals with laser-targeted audience segments to maximize your return.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=85',
    benefits: ['Facebook & Instagram campaigns', 'Custom audience targeting', 'Lookalike audience creation', 'Pixel setup & event tracking', 'Creative ad design included'],
    process: ['Pixel & account audit', 'Audience research & strategy', 'Ad creative production', 'Launch, test & scale'],
    tiers: [
      { name: 'Starter', price: '$349/mo', features: ['Up to $1k ad spend', '2 ad sets', 'Ad creative design', 'Audience research', 'Monthly report'] },
      { name: 'Professional', price: '$699/mo', features: ['Up to $5k ad spend', '5 ad sets', 'A/B creative testing', 'Retargeting campaigns', 'Lookalike audiences', 'Bi-weekly reports'], popular: true },
      { name: 'Enterprise', price: '$1,399/mo', features: ['Unlimited ad spend', 'Full funnel strategy', 'Video ad production', 'Lead gen campaigns', 'Dedicated manager', 'Weekly calls'] }
    ],
    portfolio: [
      { title: 'Fashion Brand Awareness', desc: '5.2x ROAS with video creatives', img: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=500&q=80' },
      { title: 'Real Estate Lead Campaign', desc: '320 qualified buyer leads in 30 days', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80' },
      { title: 'App Install Campaign', desc: '14,000+ installs at $0.80 CPI', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80' },
    ]
  },
  {
    id: 'social-media', title: 'SMM', icon: MessageSquare,
    desc: 'Organic growth and community management for your brand.',
    fullDesc: 'We grow your social media presence organically through strategic content calendars, community engagement, and platform-native storytelling. We manage your accounts end-to-end so you can focus on running your business while your audience grows.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85',
    benefits: ['Content calendar & planning', 'Daily posting & scheduling', 'Community engagement', 'Hashtag strategy', 'Monthly analytics report'],
    process: ['Brand voice audit', 'Content strategy & calendar', 'Creation & scheduling', 'Engagement & reporting'],
    tiers: [
      { name: 'Starter', price: '$199/mo', features: ['2 platforms', '12 posts/month', 'Basic graphics', 'Caption writing', 'Monthly report'] },
      { name: 'Professional', price: '$399/mo', features: ['4 platforms', '20 posts/month', 'Custom graphics', 'Stories & Reels', 'Community management', 'Bi-weekly reports'], popular: true },
      { name: 'Enterprise', price: '$799/mo', features: ['All platforms', '30+ posts/month', 'Video content', 'Influencer outreach', 'Ad boosting strategy', 'Weekly reports', 'Dedicated manager'] }
    ],
    portfolio: [
      { title: 'Food Brand Instagram', desc: '0 → 28K followers in 4 months', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80' },
      { title: 'Tech Startup LinkedIn', desc: '180% engagement rate increase', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80' },
      { title: 'E-Commerce TikTok', desc: '2.4M views on product launch reel', img: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&q=80' },
    ]
  },
  {
    id: 'graphic-design', title: 'Graphic Design', icon: PenTool,
    desc: 'Premium brand identities and marketing collateral.',
    fullDesc: 'From logos to full brand systems, our designers create visual identities that communicate authority, trust, and personality. We deliver production-ready files for print and digital use — every pixel purposeful, every color intentional.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=85',
    benefits: ['Brand identity & logo design', 'Social media templates', 'Business cards & stationery', 'Marketing materials', 'Brand guidelines document'],
    process: ['Brief & mood board', 'Concept designs', 'Revisions & refinement', 'Final file delivery'],
    tiers: [
      { name: 'Starter', price: '$149', features: ['Logo design', '3 concepts', '2 revision rounds', 'PNG & PDF files', '5-day delivery'] },
      { name: 'Professional', price: '$499', features: ['Full brand identity', 'Logo + color palette + typography', 'Business card design', 'Social media kit', '5 revision rounds', 'Brand guidelines PDF'], popular: true },
      { name: 'Enterprise', price: '$999', features: ['Complete brand system', 'All Professional inclusions', 'Stationery design', 'Marketing templates', 'Unlimited revisions', 'Dedicated designer'] }
    ],
    portfolio: [
      { title: 'Orbit Brand Identity', desc: 'Full rebrand for a SaaS startup', img: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&q=80' },
      { title: 'Pulse Visual System', desc: 'Comprehensive brand guidelines & assets', img: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&q=80' },
      { title: 'Neon Product Packaging', desc: 'Premium packaging design for retail launch', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80' },
    ]
  },
  {
    id: 'video-editing', title: 'Video Editing', icon: Film,
    desc: 'Cinematic, high-retention video post-production.',
    fullDesc: 'Our video editors transform raw footage into polished, high-retention content. Whether it\'s YouTube videos, corporate presentations, or social media clips — we add the color grading, sound design, and motion that makes viewers stay and take action.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=85',
    benefits: ['Color grading & correction', 'Motion graphics & titles', 'Sound design & mixing', 'Subtitle & caption overlays', 'Multi-format export'],
    process: ['Footage review & brief', 'Rough cut assembly', 'Color & sound polish', 'Final delivery'],
    tiers: [
      { name: 'Starter', price: '$99/video', features: ['Up to 5 min video', 'Basic color grading', 'Text overlays', 'Background music', '3-day delivery'] },
      { name: 'Professional', price: '$249/video', features: ['Up to 15 min video', 'Pro color grading', 'Motion graphics', 'Sound design', 'Subtitles', '5-day delivery'], popular: true },
      { name: 'Enterprise', price: '$599/video', features: ['Unlimited length', 'Cinematic color grade', 'Custom motion graphics', 'Full sound mix', 'Thumbnail design', 'Rush delivery available'] }
    ],
    portfolio: [
      { title: 'Neural Ad Creative', desc: 'Cinematic brand video for product launch', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&q=80' },
      { title: 'Aether 3D Promo', desc: 'Corporate explainer with 3D elements', img: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=500&q=80' },
      { title: 'Horizon YouTube Series', desc: '12-episode tech series, 500K+ views', img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=500&q=80' },
    ]
  },
  {
    id: '2d-animation', title: '2D Animation', icon: PlayCircle,
    desc: 'Engaging motion graphics and explainer videos.',
    fullDesc: 'We create compelling 2D animated videos that explain complex products simply, boost engagement, and build brand recall. Perfect for explainers, ads, and social content — our animations convert viewers into believers.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=85',
    benefits: ['Custom character animation', 'Explainer video production', 'Animated social content', 'Voiceover integration', 'Multiple format export'],
    process: ['Script & storyboard', 'Style frames approval', 'Animation production', 'Sound & delivery'],
    tiers: [
      { name: 'Starter', price: '$499', features: ['30-sec animation', 'Simple character design', 'Basic motion', 'Background music', '7-day delivery'] },
      { name: 'Professional', price: '$999', features: ['60-sec animation', 'Custom characters', 'Full motion design', 'Voiceover', 'Sound effects', '10-day delivery'], popular: true },
      { name: 'Enterprise', price: '$2,499', features: ['2-min animation', 'Multi-scene story', 'Pro voiceover', 'Full sound design', 'Unlimited revisions', 'Custom style guide'] }
    ],
    portfolio: [
      { title: 'FinTech Explainer', desc: '90-sec animated explainer, 1.2M views', img: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&q=80' },
      { title: 'EdTech Platform Ad', desc: 'Character-driven 2D ad for app launch', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80' },
      { title: 'Healthcare Awareness', desc: 'Animated infographic series for clinic', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80' },
    ]
  },
  {
    id: '3d-animation', title: '3D Animation', icon: Box,
    desc: 'Immersive 3D product visualizations and commercials.',
    fullDesc: 'Our 3D artists create photorealistic product renders, architectural visualizations, and cinematic 3D commercials that elevate your brand to a premium tier. When the product isn\'t filmed yet — we build it in 3D, indistinguishably real.',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=900&q=85',
    benefits: ['Product 3D modeling & render', 'Architectural visualization', '3D commercial production', 'VR/AR ready assets', 'Ultra-HD output'],
    process: ['Concept & reference gather', '3D modeling & rigging', 'Texturing & lighting', 'Render & compositing'],
    tiers: [
      { name: 'Starter', price: '$799', features: ['Single product render', 'Basic 3D model', '3 camera angles', 'HD output', '10-day delivery'] },
      { name: 'Professional', price: '$1,999', features: ['Product animation (30-sec)', 'High-detail 3D model', 'Custom environment', '4K output', 'Sound design', '14-day delivery'], popular: true },
      { name: 'Enterprise', price: '$4,999', features: ['Full 3D commercial', 'Multi-product scenes', 'Photorealistic render', 'Character animation', 'Unlimited revisions', 'Priority delivery'] }
    ],
    portfolio: [
      { title: 'Sneaker Product Launch', desc: 'Photorealistic 3D sneaker commercial', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
      { title: 'Luxury Watch 3D Ad', desc: '4K product visualization for campaign', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
      { title: 'Architecture Fly-Through', desc: 'Pre-sale visualization for real estate project', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80' },
    ]
  },
  {
    id: 'ai-auto', title: 'AI Automation', icon: Cpu,
    desc: 'Streamlining operations with intelligent AI workflows.',
    fullDesc: 'We build AI-powered automation systems that eliminate repetitive tasks, reduce overhead, and let your team focus on high-value work. From email automation to full business process orchestration using n8n, Make, and custom APIs.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85',
    benefits: ['Business process automation', 'n8n / Make / Zapier workflows', 'Data extraction & processing', 'Report auto-generation', 'Multi-system integration'],
    process: ['Process audit & mapping', 'Automation architecture', 'Build & test workflows', 'Deploy & monitor'],
    tiers: [
      { name: 'Starter', price: '$599', features: ['1 automation workflow', 'Up to 3 tool integrations', 'Basic triggers & actions', 'Documentation', '7-day build'] },
      { name: 'Professional', price: '$1,499', features: ['3 automation workflows', 'Up to 8 integrations', 'Complex logic & branching', 'Error handling', 'Monthly maintenance', '14-day build'], popular: true },
      { name: 'Enterprise', price: '$3,499', features: ['Unlimited workflows', 'Full system integration', 'AI decision nodes', 'Custom dashboard', 'Dedicated automation engineer', 'Ongoing support'] }
    ],
    portfolio: [
      { title: 'Synth AI Dashboard', desc: 'Full business intelligence automation system', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80' },
      { title: 'Echo Workflow System', desc: 'End-to-end CRM + billing automation', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80' },
      { title: 'Atlas Report Engine', desc: 'Auto-generates 40+ weekly reports via AI', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80' },
    ]
  },
  {
    id: 'ai-agents', title: 'AI Agents', icon: Bot,
    desc: 'Custom autonomous agents for complex business tasks.',
    fullDesc: 'We build custom AI agents that can research, write, analyze, and take actions autonomously. These aren\'t chatbots — they\'re intelligent systems that handle entire workflows without human intervention, running 24/7 on your behalf.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=85',
    benefits: ['Custom LLM-powered agents', 'Tool-use & web browsing', 'Memory & context management', 'API action capabilities', 'Multi-agent orchestration'],
    process: ['Use case definition', 'Agent architecture design', 'Build & fine-tune', 'Test & deploy'],
    tiers: [
      { name: 'Starter', price: '$799', features: ['Single-task AI agent', 'GPT-4o powered', 'Basic tool use', 'Web deployment', '10-day build'] },
      { name: 'Professional', price: '$2,499', features: ['Multi-tool AI agent', 'Custom knowledge base', 'Memory & persistence', 'Slack/WhatsApp integration', 'Monthly updates', '21-day build'], popular: true },
      { name: 'Enterprise', price: '$5,999', features: ['Full agent system', 'Multi-agent pipeline', 'Custom LLM fine-tuning', 'Enterprise integrations', 'SLA support', 'Dedicated AI engineer'] }
    ],
    portfolio: [
      { title: 'Sales Prospecting Agent', desc: 'Researches & qualifies 500 leads/day autonomously', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80' },
      { title: 'Content Research Agent', desc: 'Auto-generates SEO briefs from competitor data', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80' },
      { title: 'Customer Support Agent', desc: '92% resolution rate, 0 human escalations', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80' },
    ]
  },
  {
    id: 'chatbots', title: 'Chatbots', icon: MessageSquare,
    desc: 'Smart conversational interfaces for customer support.',
    fullDesc: 'We build intelligent chatbots that handle customer inquiries, qualify leads, book appointments, and support your team 24/7. Deployed on your website, WhatsApp, or any messaging platform — always on, never tired.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&q=85',
    benefits: ['24/7 automated support', 'Lead qualification & capture', 'Appointment booking', 'WhatsApp / Web deployment', 'Human handoff integration'],
    process: ['Flow mapping & scripting', 'Bot build & training', 'Platform integration', 'Launch & optimize'],
    tiers: [
      { name: 'Starter', price: '$399', features: ['FAQ chatbot', 'Up to 20 flows', 'Website deployment', 'Email lead capture', '7-day build'] },
      { name: 'Professional', price: '$899', features: ['Smart AI chatbot', 'Unlimited flows', 'WhatsApp integration', 'CRM connection', 'Appointment booking', '14-day build'], popular: true },
      { name: 'Enterprise', price: '$2,199', features: ['Full AI support agent', 'Multi-channel deployment', 'GPT-4o powered', 'Analytics dashboard', 'Ongoing training', 'Priority support'] }
    ],
    portfolio: [
      { title: 'Clinic Booking Bot', desc: 'Handles 300+ appointment bookings/month', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80' },
      { title: 'E-Commerce Support Bot', desc: '85% query resolution without human agents', img: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=500&q=80' },
      { title: 'Real Estate Lead Bot', desc: 'Qualifies and schedules property viewings 24/7', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80' },
    ]
  },
  {
    id: 'workflow', title: 'Workflow Automation', icon: Repeat,
    desc: 'Connecting tools to eliminate manual repetitive work.',
    fullDesc: 'We connect your stack — CRM, email, project management, invoicing, and more — so data flows automatically between tools. No more copy-pasting, missed follow-ups, or manual data entry holding your team back.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85',
    benefits: ['CRM & email automation', 'Invoice & billing triggers', 'Team notification systems', 'Data sync across platforms', 'Custom Zapier / Make flows'],
    process: ['Stack audit', 'Workflow design', 'Integration build', 'Test & deploy'],
    tiers: [
      { name: 'Starter', price: '$349', features: ['2 workflow automations', '3 app integrations', 'Basic triggers', 'Setup documentation', '5-day delivery'] },
      { name: 'Professional', price: '$799', features: ['5 workflows', '8 app integrations', 'Complex branching logic', 'Error notifications', 'Monthly check-in', '10-day delivery'], popular: true },
      { name: 'Enterprise', price: '$1,999', features: ['Unlimited workflows', 'Full stack integration', 'Custom API connections', 'Analytics reporting', 'Quarterly optimization', 'Dedicated engineer'] }
    ],
    portfolio: [
      { title: 'Agency Operations Hub', desc: 'Connects 12 tools, saves 20hrs/week', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80' },
      { title: 'Invoice Automation', desc: 'Zero-touch invoicing from CRM to payment', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80' },
      { title: 'HR Onboarding Flow', desc: 'Full employee onboarding in 1 click', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80' },
    ]
  },
  {
    id: 'content', title: 'Content Strategy', icon: FileText,
    desc: 'Strategic planning for omni-channel content distribution.',
    fullDesc: 'We build content strategies grounded in SEO data, audience psychology, and your business goals. From blog calendars to LinkedIn thought leadership, we plan content that builds authority and drives inbound leads consistently.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=85',
    benefits: ['Content audit & gap analysis', 'SEO-driven topic clusters', 'Editorial calendar creation', 'Copywriting & blog writing', 'Distribution strategy'],
    process: ['Brand & audience research', 'Content audit', 'Strategy document', 'Calendar & execution'],
    tiers: [
      { name: 'Starter', price: '$299/mo', features: ['8 blog posts/month', 'SEO keyword research', 'Content calendar', 'Basic distribution plan'] },
      { name: 'Professional', price: '$599/mo', features: ['16 pieces/month', 'Long-form articles', 'Social media copy', 'Email newsletter', 'Monthly performance report'], popular: true },
      { name: 'Enterprise', price: '$1,199/mo', features: ['30+ pieces/month', 'Video scripts', 'Whitepapers & case studies', 'Full distribution management', 'Dedicated content lead'] }
    ],
    portfolio: [
      { title: 'FinTech Content Hub', desc: '280% blog traffic growth in 3 months', img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=500&q=80' },
      { title: 'B2B Thought Leadership', desc: '14 LinkedIn articles, 40K+ impressions/mo', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80' },
      { title: 'E-Commerce Blog Strategy', desc: 'Content drives 38% of total revenue', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80' },
    ]
  },
  {
    id: 'ugc', title: 'UGC Ads', icon: Camera,
    desc: 'Authentic user-generated content that drives conversions.',
    fullDesc: 'We create UGC-style ad content that feels native, authentic, and trustworthy — exactly what modern audiences respond to. Our creators produce scroll-stopping videos that perform like organic content but convert like the best paid ads.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85',
    benefits: ['UGC video ad creation', 'Raw & edited formats', 'Multiple creator styles', 'Platform-native formats', 'Hook testing & iteration'],
    process: ['Brief & creative direction', 'Creator matching', 'Content production', 'Edit & deliver'],
    tiers: [
      { name: 'Starter', price: '$299', features: ['2 UGC videos', 'Single creator', 'Raw + edited versions', 'Vertical format', '7-day delivery'] },
      { name: 'Professional', price: '$699', features: ['5 UGC videos', '2 creators', 'Multiple hooks', 'Story & feed formats', 'Captions included', '10-day delivery'], popular: true },
      { name: 'Enterprise', price: '$1,499', features: ['10+ UGC videos', 'Multi-creator roster', 'Full A/B testing kit', 'All platform formats', 'Monthly retainer option', 'Rush delivery'] }
    ],
    portfolio: [
      { title: 'Beauty Brand UGC Pack', desc: '6.8x ROAS on 10 UGC video variants', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80' },
      { title: 'Supplement UGC Series', desc: '40-piece creator content kit for Meta', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80' },
      { title: 'App Review Campaign', desc: '22 authentic review videos, 4.1% CTR', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80' },
    ]
  },
  {
    id: 'motion', title: 'Motion Graphics', icon: Video,
    desc: 'Dynamic visual effects for brand storytelling.',
    fullDesc: 'We create kinetic motion graphics that bring your brand to life — from animated logos and lower thirds to full broadcast-quality title sequences. Perfect for YouTube intros, event screens, and high-impact ad creatives.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=85',
    benefits: ['Animated logo & ident', 'Lower thirds & titles', 'Social media animations', 'Broadcast-ready output', 'Brand-consistent motion system'],
    process: ['Style reference gathering', 'Motion concept design', 'Animation production', 'Export & delivery'],
    tiers: [
      { name: 'Starter', price: '$199', features: ['Animated logo (5-sec)', 'Basic motion style', '2 formats', 'Transparent background', '5-day delivery'] },
      { name: 'Professional', price: '$549', features: ['Logo + 3 lower thirds', 'Custom motion style', 'Intro/outro sequence', 'Sound design', 'Multiple formats', '7-day delivery'], popular: true },
      { name: 'Enterprise', price: '$1,299', features: ['Full motion brand kit', 'Unlimited assets', 'Brand motion guidelines', 'Broadcast quality', 'After Effects source files', 'Unlimited revisions'] }
    ],
    portfolio: [
      { title: 'Broadcast Title Package', desc: 'Full motion system for tech conference', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&q=80' },
      { title: 'Animated Brand Kit', desc: 'Logo, transitions & overlays for YouTube channel', img: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&q=80' },
      { title: 'Social Motion Pack', desc: '30 animated story & post templates', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=80' },
    ]
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = services.find(s => s.id === activeId);

  const handleClick = (id: string) => {
    const isOpening = activeId !== id;
    setActiveId(isOpening ? id : null);
    if (isOpening) {
      setTimeout(() => {
        document.getElementById('svc-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  };

  return (
    <section id="services" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/50 text-lg">Click any service to see full details, pricing & portfolio.</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {services.map((svc, idx) => (
            <motion.button
              key={svc.id}
              onClick={() => handleClick(svc.id)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.035, duration: 0.4 }}
              className={`text-left p-4 md:p-5 rounded-xl border transition-all duration-300 relative group ${
                activeId === svc.id
                  ? 'border-primary bg-primary/10 shadow-[0_0_22px_rgba(62,160,255,0.22)]'
                  : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
              }`}
              data-testid={`service-card-${svc.id}`}
            >
              {activeId === svc.id && (
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              )}
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                activeId === svc.id ? 'bg-primary text-white' : 'bg-white/5 text-primary group-hover:bg-primary/20'
              }`}>
                <svc.icon size={18} />
              </div>
              <h3 className="text-sm font-secondary font-bold text-white leading-tight mb-1">{svc.title}</h3>
              <p className="text-[11px] text-white/35 line-clamp-2 leading-snug">{svc.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* ── DETAIL PANEL ── */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              id="svc-detail"
              key={active.id}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.38 }}
              className="mt-10 space-y-0 rounded-2xl overflow-hidden border border-white/8 bg-background/60 backdrop-blur-sm"
            >
              {/* Top gradient bar */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              {/* ── SECTION 1 — Left: Info | Right: Image ── */}
              <div className="grid lg:grid-cols-2">
                {/* LEFT */}
                <div className="p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_16px_rgba(62,160,255,0.5)]">
                      <active.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">Service</p>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">{active.title}</h3>
                    </div>
                  </div>

                  <p className="text-white/65 text-sm md:text-base leading-relaxed mb-8">{active.fullDesc}</p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Key Benefits</h4>
                      <ul className="space-y-2.5">
                        {active.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/60 text-sm">
                            <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Our Process</h4>
                      <ol className="space-y-2.5">
                        {active.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/60 text-sm">
                            <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-6 py-2.5 rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-white text-sm font-semibold transition-all duration-300"
                      data-testid="service-contact-cta"
                    >
                      Get a Custom Quote →
                    </button>
                  </div>
                </div>

                {/* RIGHT — Big Image */}
                <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden">
                  <motion.img
                    key={active.id + '-img'}
                    src={active.image}
                    alt={active.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md">
                    <span className="text-primary text-xs font-bold tracking-wider uppercase">{active.title}</span>
                  </div>
                </div>
              </div>

              {/* ── SECTION 2 — Pricing ── */}
              <div className="border-t border-white/5 bg-white/[0.01] p-8 md:p-12">
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Transparent Pricing</p>
                  <h4 className="text-2xl md:text-3xl font-heading font-bold text-white">Choose Your Plan</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {active.tiers.map((tier, i) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                        tier.popular
                          ? 'border-primary bg-primary/10 shadow-[0_0_30px_rgba(62,160,255,0.18)]'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-wider uppercase whitespace-nowrap shadow-[0_0_12px_rgba(62,160,255,0.6)]">
                          ★ Most Popular
                        </div>
                      )}
                      <div className="mb-5">
                        <h5 className="text-white font-heading font-bold text-lg mb-1">{tier.name}</h5>
                        <p className="text-3xl font-heading font-bold text-primary">{tier.price}</p>
                      </div>
                      <ul className="space-y-2 flex-1 mb-6">
                        {tier.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-white/55 text-sm">
                            <CheckCircle size={13} className="text-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                          tier.popular
                            ? 'bg-primary text-white hover:bg-[#007BFF] shadow-[0_0_18px_rgba(62,160,255,0.4)]'
                            : 'border border-white/20 text-white/70 hover:border-primary hover:text-primary hover:bg-primary/5'
                        }`}
                        data-testid={`order-${active.id}-${tier.name.toLowerCase()}`}
                      >
                        Order Now
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── SECTION 3 — Portfolio ── */}
              <div className="border-t border-white/5 bg-white/[0.015] p-8 md:p-12">
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Case Studies</p>
                  <h4 className="text-2xl md:text-3xl font-heading font-bold text-white">{active.title} Portfolio</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {active.portfolio.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="group relative rounded-xl overflow-hidden border border-white/8 aspect-video bg-card"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h5 className="text-white font-heading font-bold text-base mb-1">{item.title}</h5>
                        <p className="text-white/60 text-xs mb-3">{item.desc}</p>
                        <a
                          href={GH}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline"
                          data-testid={`portfolio-view-${active.id}-${i}`}
                        >
                          View Project <ExternalLink size={11} />
                        </a>
                      </div>
                      {/* Always-visible label */}
                      <div className="absolute bottom-3 left-3 right-3 group-hover:opacity-0 transition-opacity duration-200">
                        <span className="text-white text-xs font-bold drop-shadow-lg line-clamp-1">{item.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a
                    href={GH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/15 text-white/60 hover:border-primary hover:text-primary text-sm font-medium transition-all"
                    data-testid="view-all-portfolio"
                  >
                    View Full Portfolio on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
