"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of businesses can benefit from AI automation?",
    a: "Any business that has repetitive tasks, large data volumes, or customer communication workflows can benefit. We've worked with companies in healthcare, finance, e-commerce, SaaS, logistics, and more. If your team is doing the same thing more than a few times a week, we can likely automate it.",
  },
  {
    q: "How long does it take to implement an AI automation solution?",
    a: "Most Starter and Professional implementations go live within 2–4 weeks. Enterprise builds typically take 4–8 weeks depending on complexity. We prioritize the highest-ROI automations first so you start seeing results quickly.",
  },
  {
    q: "Do I need technical knowledge to use Pheneron's systems?",
    a: "Not at all. We handle all the technical implementation, and our systems come with user-friendly dashboards. Your team can manage, monitor, and adjust automations without writing a single line of code.",
  },
  {
    q: "Will my data be secure?",
    a: "Absolutely. We follow enterprise-grade security practices including end-to-end encryption, SOC 2 compliance, role-based access control, and optional on-premise deployment for Enterprise clients. Your data is yours — we never train on it.",
  },
  {
    q: "What happens after the automation is deployed?",
    a: "We monitor performance continuously, provide regular reports, and proactively optimize workflows. Our team is available for support on every plan, and our AI systems improve over time through continuous learning.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-[#0e0e0e] overflow-hidden card-glow"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-white">{faq.q}</span>
                <span className="flex-shrink-0 text-white/40">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
