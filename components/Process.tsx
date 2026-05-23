"use client";

import { motion } from "framer-motion";
import { PheneronWorkflowBlock } from "@/components/ui/n8n-workflow-block";

export default function Process() {
  return (
    <section id="process" className="py-16 px-4 md:py-28 md:px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Our Proven <span className="gradient-text">Workflow Process</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Interactive workflow builder showcasing our process automation
            capabilities.
          </p>
        </motion.div>

        {/* Workflow Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PheneronWorkflowBlock />
        </motion.div>
      </div>
    </section>
  );
}
