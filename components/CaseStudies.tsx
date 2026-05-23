"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    company: "TrailForge",
    industry: "Supply Chain",
    quote: "Pheneron's automation slashed our inventory waste by 40%, saving us hundreds of thousands annually.",
    metric: "40%",
    metricLabel: "Inventory waste reduction",
    author: "James Carter",
    role: "COO, TrailForge",
    color: "from-violet-500/15 to-transparent",
    accent: "bg-violet-500",
  },
  {
    company: "MedixChain",
    industry: "Healthcare",
    quote: "Error rates in our data processing dropped by 80% within the first month of deployment.",
    metric: "80%",
    metricLabel: "Error reduction",
    author: "Dr. Sarah Kim",
    role: "CTO, MedixChain",
    color: "from-blue-500/15 to-transparent",
    accent: "bg-blue-500",
  },
  {
    company: "FinSolve",
    industry: "FinTech",
    quote: "We cut operational costs by 20% while processing 3x more transactions with the same team.",
    metric: "20%",
    metricLabel: "Cost reduction",
    author: "Michael Torres",
    role: "CEO, FinSolve",
    color: "from-emerald-500/15 to-transparent",
    accent: "bg-emerald-500",
  },
  {
    company: "ScaleByte",
    industry: "SaaS",
    quote: "Our sales team closed 3x more deals after Pheneron automated our lead nurturing pipeline.",
    metric: "3x",
    metricLabel: "More deals closed",
    author: "Lisa Patel",
    role: "VP Sales, ScaleByte",
    color: "from-orange-500/15 to-transparent",
    accent: "bg-orange-500",
  },
];

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="case-studies" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Real Results for
              <br />
              <span className="gradient-text">Real Businesses</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-sm leading-relaxed">
            Drag to explore how Pheneron transformed operations across industries.
          </p>
        </motion.div>

        {/* Drag hint */}
        <div className="flex items-center gap-2 mb-6 text-xs text-white/30 font-medium tracking-widest uppercase">
          <span>← Drag to explore →</span>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          onMouseDown={(e) => {
            const el = scrollRef.current;
            if (!el) return;
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMove = (ev: MouseEvent) => {
              const x = ev.pageX - el.offsetLeft;
              el.scrollLeft = scrollLeft - (x - startX);
            };
            const onUp = () => {
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex-shrink-0 w-80 md:w-96 rounded-2xl border border-white/10 bg-gradient-to-b ${c.color} bg-[#0e0e0e] p-8 card-glow`}
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Industry tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${c.accent}`} />
                <span className="text-xs text-white/40 font-medium">{c.industry}</span>
              </div>

              {/* Metric */}
              <div className="mb-6">
                <p className="text-5xl font-bold text-white">{c.metric}</p>
                <p className="text-sm text-white/40 mt-1">{c.metricLabel}</p>
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed mb-8 italic">"{c.quote}"</p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-white/5 pt-5">
                <div>
                  <p className="text-sm font-semibold text-white">{c.author}</p>
                  <p className="text-xs text-white/40">{c.role}</p>
                </div>
                <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all">
                  <ArrowRight size={14} className="text-white/60" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
