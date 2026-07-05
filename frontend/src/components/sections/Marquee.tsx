import { motion } from 'framer-motion';
import { SiGoogle, SiShopify, SiHubspot, SiMeta, SiSalesforce, SiSlack, SiFigma, SiStripe, SiOpenai, SiNotion } from 'react-icons/si';
import { FaAmazon, FaMicrosoft } from 'react-icons/fa';

const brands = [
  { icon: SiGoogle, name: "Google" },
  { icon: FaMicrosoft, name: "Microsoft" },
  { icon: FaAmazon, name: "Amazon" },
  { icon: SiShopify, name: "Shopify" },
  { icon: SiHubspot, name: "HubSpot" },
  { icon: SiMeta, name: "Meta" },
  { icon: SiSalesforce, name: "Salesforce" },
  { icon: SiSlack, name: "Slack" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiStripe, name: "Stripe" }
];

export default function Marquee() {
  return (
    <section className="py-12 bg-background relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-8 text-center relative z-20">
        <p className="text-sm font-secondary tracking-widest text-white/50 uppercase">Trusted By Growing Brands</p>
      </div>
      
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex space-x-16 items-center whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...brands, ...brands].map((Brand, i) => (
            <div key={i} className="flex items-center gap-3 text-white/30 hover:text-white/80 transition-colors duration-300">
              <Brand.icon className="w-8 h-8" />
              <span className="font-heading font-bold text-xl">{Brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
