"use client";

import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

export default function Services() {
  return (
    <section id="services">
      <FlowArt aria-label="Pheneron Services">
        {/* What We Do */}
        <FlowSection aria-label="What We Do" style={{ backgroundColor: "#1e1e1e", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — What We Do</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Operational
              <br />
              Systems
              <br />
              Built Right
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Pheneron builds operational systems for businesses that are tired of running manually.
          </p>
        </FlowSection>

        {/* What We Design */}
        <FlowSection aria-label="What We Design" style={{ backgroundColor: "#0f0f0f", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — What We Design</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Automation
              <br />
              &amp;
              <br />
              Infrastructure
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            We design and implement systems that reduce manual dependency and increase operational control.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Workflow Automation</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Streamline repetitive processes and eliminate bottlenecks across your operations.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Operational Dashboards</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Real-time visibility into your business metrics and performance indicators.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Enquiry Management</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Capture, organize, and manage customer inquiries with automated workflows.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">AI-Assisted Workflows</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Intelligent processes that adapt and improve with every execution.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Client Management</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Complete systems for tracking, organizing, and nurturing client relationships.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Process Digitization</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Transform legacy processes into modern, scalable digital infrastructure.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* How We Do It */}
        <FlowSection aria-label="How We Do It" style={{ backgroundColor: "#F5F0E8", color: "#000" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — How We Do It</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Custom
              <br />
              Built.
              <br />
              Not
              <br />
              Generic.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            No templates. No off-the-shelf solutions. We engineer systems designed specifically for your business.
          </p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Analysis</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                We analyze your current workflows to identify inefficiencies and opportunities.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Design</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Custom-built architecture tailored to your specific operational needs.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Implement</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Deploy seamlessly with zero disruption to your ongoing operations.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">04 — Train</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Comprehensive training so your team operates systems with confidence.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">05 — Optimize</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Continuous monitoring and refinement to improve efficiency over time.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">06 — Support</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Ongoing support and updates to keep your systems running at peak performance.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Why Pheneron */}
        <FlowSection aria-label="Why Pheneron" style={{ backgroundColor: "#1a1a2e", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Why Pheneron</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Control
              <br />
              Your
              <br />
              Operations
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Stop wasting time on manual tasks. Start building the operational infrastructure your business deserves.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Reduces Manual Work</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Eliminate repetitive tasks and free up your team for strategic work.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Improves Efficiency</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Streamlined workflows mean faster execution and fewer errors.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Scales Your Business</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Systems that grow with you without proportional increases in manual effort.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Real-Time Visibility</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Always know what's happening across your entire operation.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Cost Reduction</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Lower operational costs through intelligent process optimization.
              </p>
            </div>
            <div className="w-full sm:min-w-[180px] sm:flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Future-Proof</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Systems built to adapt as your business needs change and evolve.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Get Started */}
        <FlowSection aria-label="Get Started" style={{ backgroundColor: "#0a0e27", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Get Started</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Ready
              <br />
              To
              <br />
              Transform?
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Let&apos;s talk about how we can build the operational infrastructure your business needs to thrive.
          </p>
        </FlowSection>
      </FlowArt>
    </section>
  );
}
