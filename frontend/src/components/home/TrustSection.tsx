"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const metrics = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "AI Systems Built" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "M+", label: "Revenue Generated" },
];

function Counter({ from, to, suffix, duration = 2 }: { from: number; to: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (nodeRef.current) observer.unobserve(nodeRef.current);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <div ref={nodeRef} className="flex items-center text-4xl md:text-5xl font-heading font-bold text-dark-text">
      {count}
      <span className="text-primary-blue ml-1">{suffix}</span>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Trusted By Innovative Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for Client Logos */}
            {["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"].map((logo, idx) => (
              <div key={idx} className="text-xl font-bold font-heading text-gray-400">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              <Counter from={0} to={metric.value} suffix={metric.suffix} />
              <p className="text-gray-500 mt-2 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
