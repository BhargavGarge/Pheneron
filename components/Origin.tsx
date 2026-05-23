"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/cobe-globe";

// Schmalkalden, Germany → Nagpur, India
const markers = [
  {
    id: "de",
    location: [50.73, 10.46] as [number, number],
    label: "Schmalkalden, Germany",
  },
  {
    id: "in",
    location: [21.15, 79.09] as [number, number],
    label: "Nagpur, India",
  },
];

const arcs = [
  {
    id: "de-in",
    from: [50.73, 10.46] as [number, number],
    to: [21.15, 79.09] as [number, number],
  },
];

export default function Origin() {
  return (
    <section className="py-16 px-4 md:py-28 md:px-6 overflow-hidden bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-400 uppercase mb-4">
            Our Story
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-xs lg:max-w-sm shrink-0"
          >
            <Globe
              markers={markers}
              arcs={arcs}
              markerColor={[0.55, 0.35, 1]}
              baseColor={[1, 1, 1]}
              arcColor={[1, 0.5, 0.2]}
              glowColor={[0.94, 0.93, 0.91]}
              dark={0}
              mapBrightness={10}
              markerSize={0.055}
              arcHeight={0.45}
              speed={0.002}
              theta={0.3}
              diffuse={1.1}
            />

            {/* Location labels */}
            <div className="flex justify-between mt-6 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                <span className="text-xs text-white/50 font-mono">GERMANY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                <span className="text-xs text-white/50 font-mono">INDIA</span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="flex flex-col gap-10 w-full">
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Built across{" "}
              <span className="gradient-text">two continents.</span>
              <br />
              Deployed globally.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/55 text-base leading-relaxed max-w-lg"
            >
              Traditional businesses everywhere run on the same broken systems.
              We fix them from wherever they are.
            </motion.p>

            {/* Honest callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-[#0e0e0e] p-5 sm:p-7 card-glow relative overflow-hidden"
            >
              {/* Decorative quote mark */}
              <span
                aria-hidden
                className="absolute -top-3 -left-1 text-8xl font-black text-white/5 select-none leading-none"
              >
                &ldquo;
              </span>

              <p className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-4">
                The honest part
              </p>
              <p className="text-white/70 text-sm leading-relaxed italic relative z-10">
                We&apos;re early. We don&apos;t have 50 case studies. What we
                have is two developers who understand operations deeply, a
                process that works, and the hunger to prove it. Our first
                clients get our best work because we have everything to prove.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
