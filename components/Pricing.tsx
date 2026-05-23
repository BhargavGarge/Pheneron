"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 37,
    annualPrice: 29,
    description: "Perfect for small businesses just getting started with AI automation.",
    features: [
      "Up to 3 automated workflows",
      "AI email assistant",
      "Basic CRM integration",
      "5 hours/month support",
      "Monthly performance report",
    ],
    cta: "Choose this plan",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 75,
    annualPrice: 59,
    description: "For growing teams that need powerful automation across their entire stack.",
    features: [
      "Unlimited automated workflows",
      "AI assistant (multi-channel)",
      "Full CRM & ERP integration",
      "Sales funnel automation",
      "20 hours/month support",
      "Weekly analytics dashboard",
      "Priority email & chat support",
    ],
    cta: "Choose this plan",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "Custom-built AI solutions for large organizations with complex needs.",
    features: [
      "Everything in Professional",
      "Custom AI model development",
      "Dedicated AI engineer",
      "SLA guarantee",
      "On-premise deployment option",
      "Unlimited support hours",
      "Quarterly strategy sessions",
    ],
    cta: "Schedule a call",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No hidden fees. Pick a plan that fits your business and start automating today.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm ${!annual ? "text-white" : "text-white/40"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`w-12 h-6 rounded-full transition-colors duration-300 ${
              annual ? "bg-violet-500" : "bg-white/10"
            } relative`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                annual ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span className={`text-sm flex items-center gap-1.5 ${annual ? "text-white" : "text-white/40"}`}>
            Annual
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "border border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-transparent glow"
                  : "border border-white/10 bg-[#0e0e0e] card-glow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-xs font-semibold text-black bg-white px-4 py-1.5 rounded-full">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-white/40 mb-6">{plan.description}</p>

              <div className="mb-8">
                {plan.monthlyPrice ? (
                  <>
                    <span className="text-5xl font-bold text-white">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-white/40 text-sm ml-1">/month</span>
                    {annual && (
                      <p className="text-xs text-white/30 mt-1">billed annually</p>
                    )}
                  </>
                ) : (
                  <span className="text-3xl font-bold text-white">Custom</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                    <Check size={15} className="text-violet-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 text-white/80 hover:border-white/30 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
