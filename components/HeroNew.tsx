"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, X } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4";

const ACCENT = "#5E0ED7";

const navLinks = ["Solutions", "Process", "About", "Contact"];

const stats = [
  { value: "50", label: "AI SYSTEMS\nBUILT" },
  { value: "200K", label: "HOURS\nAUTOMATED" },
  { value: "30", label: "BUSINESSES\nSCALED" },
];

const headingWords = ["Intelligent", "Systems", "Delivered"];

// ─────────────────────────────────────────────────────────────────────────────
// Framer Motion variants (fire after loader exits)
// ─────────────────────────────────────────────────────────────────────────────

const fadeDown = {
  hidden: { opacity: 0, y: -22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.11,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ─────────────────────────────────────────────────────────────────────────────
// Pendulum loading screen — GSAP does all the heavy lifting
// ─────────────────────────────────────────────────────────────────────────────

function PendulumLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const pendulumRef = useRef<HTMLDivElement>(null);
  const pivotDotRef = useRef<HTMLDivElement>(null);
  const bobRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      // ── 1. breathing background glow ─────────────────────────────────────
      gsap.to(pulseRef.current, {
        scale: 1.35,
        opacity: 0.55,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // ── 2. wordmark slides in ─────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        wordmarkRef.current,
        { opacity: 0, y: -32, letterSpacing: "0.55em" },
        { opacity: 1, y: 0, letterSpacing: "0.42em", duration: 0.8 },
      );

      // ── 3. divider line grows from center ─────────────────────────────────
      tl.fromTo(
        dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.2",
      );

      // ── 4. pivot dot fades in ─────────────────────────────────────────────
      tl.fromTo(
        pivotDotRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3 },
        "-=0.15",
      );

      // ── 5. pendulum drops in then swings ─────────────────────────────────
      gsap.set(pendulumRef.current, { transformOrigin: "50% 0%", rotate: 0 });

      tl.fromTo(
        pendulumRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.1",
      );

      tl.to(
        pendulumRef.current,
        {
          rotate: -52,
          duration: 0.55,
          ease: "power2.out",
          onComplete() {
            // once released, swing freely
            gsap.to(pendulumRef.current, {
              rotate: 52,
              duration: 1.0,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        },
        "+=0.05",
      );

      // ── 6. bob glow pulses with swing ────────────────────────────────────
      gsap.delayedCall(1.4, () => {
        gsap.to(bobRef.current, {
          boxShadow:
            "0 0 20px rgba(94,14,215,0.9), 0 0 45px rgba(94,14,215,0.55), 0 0 80px rgba(94,14,215,0.25), inset 0 0 12px rgba(255,255,255,0.5)",
          duration: 1.0,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // ── 7. pivot dot glow ────────────────────────────────────────────────
      gsap.delayedCall(1.4, () => {
        gsap.to(pivotDotRef.current, {
          boxShadow:
            "0 0 6px rgba(94,14,215,0.8), 0 0 14px rgba(94,14,215,0.5)",
          duration: 1.0,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // ── 8. subtitle fades in ─────────────────────────────────────────────
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2",
      );
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative flex flex-col items-center justify-center w-full h-full select-none"
    >
      {/* breathing radial glow */}
      <div
        ref={pulseRef}
        className="pointer-events-none absolute"
        style={{
          width: "min(700px, 90vw)",
          height: "min(700px, 90vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(94,14,215,0.07) 0%, rgba(139,92,246,0.03) 50%, transparent 70%)",
          opacity: 0.35,
        }}
      />

      {/* PHENERON wordmark */}
      <div ref={wordmarkRef} style={{ opacity: 0 }}>
        <span
          className="block font-semibold uppercase text-black text-center text-shadow"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.6rem, 6vw, 4rem)",
            letterSpacing: "0.42em",
          }}
        >
          PHENERON
        </span>
      </div>

      {/* Divider — pivot bar */}
      <div
        className="relative flex items-center justify-center mt-5 sm:mt-7"
        style={{ width: "clamp(160px, 22vw, 260px)" }}
      >
        <div
          ref={dividerRef}
          className="absolute inset-y-0 left-0 right-0 flex items-center"
          style={{ opacity: 0, transformOrigin: "center" }}
        >
          <div className="h-px flex-1 bg-black/25" />
          <div
            ref={pivotDotRef}
            className="w-2 h-2 rounded-full mx-1 shrink-0"
            style={{
              backgroundColor: ACCENT,
              boxShadow: "0 0 4px rgba(94,14,215,0.5)",
            }}
          />
          <div className="h-px flex-1 bg-black/25" />
        </div>
        {/* height placeholder so the container has space */}
        <div className="h-2" />
      </div>

      {/* Pendulum — GSAP controls rotation from transformOrigin top */}
      <div className="flex justify-center mt-0">
        <div
          ref={pendulumRef}
          className="flex flex-col items-center"
          style={{ opacity: 0 }}
        >
          {/* String */}
          <div
            style={{
              width: "1px",
              height: "clamp(110px, 16vh, 175px)",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.08) 100%)",
            }}
          />
          {/* Bob */}
          <div
            ref={bobRef}
            className="rounded-full"
            style={{
              width: "clamp(16px, 2.2vw, 22px)",
              height: "clamp(16px, 2.2vw, 22px)",
              backgroundColor: ACCENT,
              boxShadow:
                "0 0 10px rgba(94,14,215,0.7), 0 0 24px rgba(94,14,215,0.4), inset 0 0 6px rgba(255,255,255,0.35)",
            }}
          />
        </div>
      </div>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="mt-8 sm:mt-11 font-semibold tracking-[0.3em] uppercase"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(9px, 1.1vw, 12px)",
          color: "rgba(0,0,0,0.3)",
          opacity: 0,
        }}
      >
        Initializing Systems
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroNew() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Hero (always rendered; video pre-loads while loader shows) ── */}
      <div
        className="relative min-h-screen flex flex-col overflow-hidden bg-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_SRC}
        />

        {/* White overlay — keeps black text crisp */}
        <div className="absolute inset-0 bg-white/35" />

        {/* ── NAV ── */}
        <nav className="relative z-10 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
          {/* Logo mark */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            custom={0}
          >
            <div
              className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: ACCENT }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </div>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                variants={fadeDown}
                initial="hidden"
                animate={loaded ? "visible" : "hidden"}
                custom={i + 1}
                className="text-sm font-semibold tracking-widest uppercase text-black hover:opacity-60 transition-opacity"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Hamburger */}
          <motion.button
            variants={fadeDown}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            custom={5}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1"
          >
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-white" />
          </motion.button>
        </nav>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 bg-white flex flex-col px-5 sm:px-8 pt-5"
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: ACCENT }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
                >
                  <X size={16} color="white" />
                </button>
              </div>

              <div className="flex flex-col gap-8 mt-16">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-semibold tracking-widest uppercase text-black hover:opacity-60 transition-opacity"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xl font-semibold tracking-widest uppercase"
                  style={{ color: ACCENT }}
                >
                  Schedule a Consult
                  <ArrowUpRight size={22} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── STATS ROW ── */}
        <div className="relative z-10 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
          <div className="flex items-end gap-5 sm:gap-8 md:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                animate={loaded ? "visible" : "hidden"}
                custom={i + 2}
                className="flex flex-col items-end text-right"
              >
                <div
                  className="font-semibold leading-none text-black"
                  style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}
                >
                  <span style={{ color: ACCENT, fontSize: "0.5em" }}>+</span>
                  {stat.value}
                </div>
                <p
                  className="font-semibold tracking-widest uppercase whitespace-pre-line leading-tight mt-1"
                  style={{
                    fontSize: "clamp(10px, 1.2vw, 13px)",
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM SECTION ── */}
        <div className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-5 md:gap-10">
          {/* Row A — tagline + CTA */}
          <div className="flex items-center justify-between gap-4">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
              custom={5}
              className="font-semibold tracking-widest uppercase leading-relaxed"
              style={{
                fontSize: "clamp(10px, 1.2vw, 13px)",
                color: "rgba(0,0,0,0.55)",
                maxWidth: "clamp(140px, 14vw, 220px)",
              }}
            >
              Replacing Manual /<br />
              Work With Smarter /<br />
              AI Systems
            </motion.p>

            <motion.a
              href="#"
              variants={fadeUp}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
              custom={6}
              className="flex items-center gap-1.5 font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{
                color: ACCENT,
                fontSize: "clamp(0.95rem, 2.2vw, 1.5rem)",
              }}
            >
              Schedule a Consult
              <ArrowUpRight
                style={{
                  width: "clamp(16px, 1.8vw, 22px)",
                  height: "clamp(16px, 1.8vw, 22px)",
                }}
              />
            </motion.a>
          </div>

          {/* Row B — description + main heading */}
          <div className="flex items-end justify-between gap-3 sm:gap-4">
            {/* Left description — hidden on mobile */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
              custom={7}
              className="hidden sm:block"
              style={{ width: "clamp(110px, 18vw, 280px)", flexShrink: 0 }}
            >
              <p
                className="font-semibold tracking-widest uppercase leading-relaxed text-left md:text-right"
                style={{
                  fontSize: "clamp(10px, 1vw, 13px)",
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                Your business doesn't need more employees. It needs better
                systems.
              </p>
            </motion.div>

            {/* Main heading — clip-reveal slide-up per word */}
            <div className="flex flex-col items-end w-full sm:w-auto">
              {headingWords.map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={loaded ? { y: 0 } : { y: "110%" }}
                    transition={{
                      delay: 0.35 + i * 0.13,
                      duration: 0.72,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-semibold uppercase text-right text-black"
                    style={{
                      fontSize: "clamp(2.4rem, 9.5vw, 9.5rem)",
                      lineHeight: 0.87,
                    }}
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Loading screen — fixed overlay, curtain-lifts away on exit ── */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-hidden bg-white"
            exit={{
              y: "-100%",
              transition: { duration: 0.78, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <PendulumLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
