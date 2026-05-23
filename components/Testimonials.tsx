"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/cobe-globe";

const markers = [
  { id: "sf",       location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "nyc",      location: [40.7128,  -74.006 ] as [number, number], label: "New York"      },
  { id: "london",   location: [51.5074,   -0.1278] as [number, number], label: "London"        },
  { id: "dubai",    location: [25.2048,   55.2708] as [number, number], label: "Dubai"         },
  { id: "tokyo",    location: [35.6762,  139.6503] as [number, number], label: "Tokyo"         },
  { id: "sydney",   location: [-33.8688, 151.2093] as [number, number], label: "Sydney"        },
  { id: "saopaulo", location: [-23.5505,  -46.633] as [number, number], label: "São Paulo"     },
  { id: "singapore",location: [  1.3521,  103.819] as [number, number], label: "Singapore"     },
];

const arcs = [
  { id: "sf-tokyo",     from: [37.7595, -122.4367] as [number, number], to: [35.6762, 139.6503] as [number, number] },
  { id: "nyc-london",   from: [40.7128,  -74.006 ] as [number, number], to: [51.5074,  -0.1278] as [number, number] },
  { id: "london-dubai", from: [51.5074,   -0.1278] as [number, number], to: [25.2048,  55.2708] as [number, number] },
  { id: "dubai-sg",     from: [25.2048,   55.2708] as [number, number], to: [ 1.3521,  103.819] as [number, number] },
  { id: "sg-sydney",    from: [ 1.3521,   103.819] as [number, number], to: [-33.8688, 151.2093] as [number, number] },
];

const stats = [
  { value: "40+",  label: "Countries served"       },
  { value: "200+", label: "Enterprise clients"      },
  { value: "60%",  label: "Avg. manual work saved"  },
  { value: "99.9%",label: "Uptime SLA"              },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:py-28 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-400 uppercase mb-4">
            Global Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Automating Work <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Pheneron&apos;s AI pipelines run across every continent — helping teams move faster, wherever they are.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md lg:max-w-lg shrink-0"
          >
            <Globe
              markers={markers}
              arcs={arcs}
              markerColor={[0.55, 0.35, 1]}
              baseColor={[0.12, 0.12, 0.18]}
              arcColor={[0.55, 0.35, 1]}
              glowColor={[0.3, 0.2, 0.6]}
              dark={1}
              mapBrightness={4}
              markerSize={0.04}
              speed={0.004}
              theta={0.15}
              diffuse={1.2}
            />
          </motion.div>

          {/* Stats + copy */}
          <div className="flex flex-col gap-10 w-full">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 text-base leading-relaxed max-w-lg"
            >
              From Fortune 500 enterprises to ambitious scale-ups, Pheneron deploys intelligent automation that
              spans time zones, languages, and tech stacks — so your team focuses on what actually matters.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-2xl border border-white/10 bg-[#0e0e0e] p-6 card-glow"
                >
                  <p className="text-3xl font-black gradient-text mb-1">{s.value}</p>
                  <p className="text-white/50 text-xs tracking-wide uppercase">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
