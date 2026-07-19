import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  dept: string;
  bio: string;
  avatar: string;
  social: { linkedin?: string; twitter?: string; instagram?: string; facebook?: string };
}

const team: TeamMember[] = [
  {
    name: "Ali Hamza Qureshi",
    role: "Founder & CEO",
    dept: "Leadership",
    bio: "Visionary entrepreneur behind BRYXA Digital. Ali leads strategy, client success, and the agency's mission to deliver world-class digital results for every partner.",
    avatar: "/team-marketing.jpg",
    social: { facebook: "https://web.facebook.com/profile.php?id=61589385832881", instagram: "https://www.instagram.com/alihamzaqureshi.dev/?hl=en" }
  },
  {
    name: "Web Developer",
    role: "Lead Web Developer",
    dept: "Development",
    bio: "Full-stack developer specializing in modern, high-performance websites and web apps that are built for speed, scale, and real business results.",
    avatar: "/team-webdev.jpg",
    social: { facebook: "https://web.facebook.com/profile.php?id=61588666050257" }
  },
  {
    name: "Nisha Jameel",
    role: "Graphic Designer · Video Editor · 2D & 3D Animator",
    dept: "Creative",
    bio: "Multi-talented creative powerhouse handling brand visuals, cinematic video editing, and stunning 2D & 3D animations that bring ideas to life.",
    avatar: "/team-nisha.jpg",
    social: { linkedin: "https://www.linkedin.com/in/nisha-jameel-437876376/", facebook: "https://web.facebook.com/profile.php?id=61589083510004" }
  },
  {
    name: "Misbah Mehmood",
    role: "SEO Specialist",
    dept: "Marketing",
    bio: "Data-driven SEO expert who has scaled organic traffic for 30+ brands. Misbah combines technical SEO with local search strategies that deliver real rankings.",
    avatar: "/team-seo.jpg",
    social: { facebook: "https://web.facebook.com/misbahmehmoodlocalseo" }
  },
  {
    name: "Ali Hamza Qureshi",
    role: "Digital Marketing · SMM · UGC Ads · Google Ads",
    dept: "Marketing",
    bio: "Performance-driven marketer handling digital campaigns, social media growth, UGC ad production, and Google Ads that consistently deliver strong ROI.",
    avatar: "/team-marketing.jpg",
    social: { facebook: "https://web.facebook.com/profile.php?id=61589385832881", instagram: "https://www.instagram.com/alihamzaqureshi.dev/?hl=en" }
  },
  {
    name: "AI Specialist",
    role: "AI Automation · AI Agents · AI Workflows · AI Ads",
    dept: "AI Solutions",
    bio: "Expert in building intelligent AI systems — from autonomous agents and smart workflows to AI-powered ad campaigns that run and optimize themselves.",
    avatar: "/team-ai.jpg",
    social: { facebook: "https://web.facebook.com/naveed.libraaa" }
  },
  {
    name: "Samina Seyal",
    role: "Content Creation · Content Strategist",
    dept: "Content",
    bio: "Creative content strategist crafting compelling narratives, scroll-stopping copy, and platform-native content that builds brand authority and drives engagement.",
    avatar: "/team-content.jpg",
    social: { facebook: "https://web.facebook.com/samina.seyal.94" }
  },
  {
    name: "Arzoo Parveen",
    role: "Paid Ads · PPC · Google Ads Specialist",
    dept: "Marketing",
    bio: "Results-driven PPC expert managing paid campaigns across Google and Meta. Arzoo engineers data-backed ad strategies that maximize ROAS and minimize wasted spend.",
    avatar: "/team-ppc.jpg",
    social: { instagram: "https://www.instagram.com/arzooparveenofficial/", linkedin: "https://www.linkedin.com/in/arzoo-parveen-0155632b5" }
  },
];

const deptColors: Record<string, string> = {
  "Leadership":   "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "Development":  "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Design":       "bg-pink-500/15 text-pink-400 border-pink-500/30",
  "Marketing":    "bg-green-500/15 text-green-400 border-green-500/30",
  "Creative":     "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "AI Solutions": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  "Content":      "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">The People Behind The Work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">Meet Our Team</h2>
          <p className="text-white/55 text-lg leading-relaxed">
            A hand-picked team of specialists united by one mission — delivering digital excellence that grows your business.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              className="group relative bg-card rounded-2xl border border-white/8 p-6 flex flex-col items-center text-center hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(62,160,255,0.12)] overflow-hidden"
            >
              {/* Top gradient on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Avatar */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-300 shadow-lg">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-card shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              </div>

              {/* Dept badge */}
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border mb-3 ${deptColors[member.dept] ?? 'bg-primary/10 text-primary border-primary/20'}`}>
                {member.dept}
              </span>

              {/* Name & Role */}
              <h3 className="text-white font-heading font-bold text-lg leading-tight mb-1">{member.name}</h3>
              <p className="text-primary text-xs font-semibold mb-4 tracking-wide">{member.role}</p>

              {/* Bio */}
              <p className="text-white/45 text-xs leading-relaxed mb-5 flex-1">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={14} />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-sky-400 hover:border-sky-400/40 transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={14} />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-pink-400 hover:border-pink-400/40 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={14} />
                  </a>
                )}
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Want to join our elite team?</p>
          <a
            href="mailto:careers@bryxadigital.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary hover:text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(62,160,255,0.15)] hover:shadow-[0_0_30px_rgba(62,160,255,0.35)]"
          >
            View Open Positions →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
