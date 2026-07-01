"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at Nova Bank",
    text: "BYRXA transformed our digital presence. The custom FinTech dashboard they built is not only beautiful but incredibly performant. Their attention to detail is unmatched.",
  },
  {
    name: "Marcus Thorne",
    role: "CMO at RetailCorp",
    text: "The AI Customer Agent integrated into our workflows reduced our support times by 80%. BYRXA doesn't just build websites; they build scalable systems.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, StyleHub",
    text: "From branding to the final e-commerce launch, the process was seamless. The smooth animations and premium feel of our site directly contributed to a 40% increase in conversions.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-light-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-dark-text mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it. Read how we&apos;ve helped ambitious brands achieve exceptional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-8 right-8 text-primary-blue/10 w-16 h-16 transform -scale-x-100 group-hover:text-primary-blue/20 transition-colors" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 font-medium">
                &quot;{test.text}&quot;
              </p>
              
              <div>
                <h4 className="text-dark-text font-bold font-heading">{test.name}</h4>
                <p className="text-primary-blue text-sm font-medium">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
