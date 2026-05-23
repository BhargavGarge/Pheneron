"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

const brands = ["Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn"];

function HeroButton({ children }: { children?: React.ReactNode }) {
  return (
    <button
      className="rounded-full border border-white/15 bg-white/5 text-foreground backdrop-blur-sm transition hover:bg-white/10"
      type="button"
    >
      {children}
    </button>
  );
}

function HeroNavbar() {
  return (
    <div className="w-full px-8 py-5">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center" />
        <div className="hidden items-center gap-7 md:flex" />
        <HeroButton />
      </div>
      <div className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </div>
  );
}

function LogoMarquee() {
  const marqueeItems = [...brands, ...brands];

  return (
    <div className="w-full pb-10">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-3 sm:gap-12 px-6">
        <p className="hidden sm:block whitespace-pre-line text-sm text-foreground/50 shrink-0">
          {"Relied on by brands\nacross the globe"}
        </p>

        <div className="relative flex-1 overflow-hidden">
          <div className="logo-marquee flex min-w-max items-center gap-8 sm:gap-16 pr-16">
            {marqueeItems.map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex items-center gap-3"
              >
                <div className="liquid-glass flex h-6 w-6 items-center justify-center rounded-lg text-xs font-semibold text-foreground/90">
                  {brand[0]}
                </div>
                <span className="text-base font-semibold text-foreground">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InlinePendulum() {
  return (
    <motion.div
      style={{ transformOrigin: "50% 0%" }}
      animate={{ rotate: [60, -60, 60] }}
      transition={{ repeat: Infinity, duration: 3, ease: [0.6, 0, 0.4, 1] }}
      className="flex flex-col items-center"
    >
      <div className="w-[1px] h-28 sm:h-36 bg-white" />
      <motion.div
        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white"
        style={{ boxShadow: "inset 0 0 40px white, 0 0 15px white" }}
        animate={{
          boxShadow: [
            "inset 0 0 25px white, 0 0 8px white",
            "inset 0 0 50px white, 0 0 20px white",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelFade = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const fadeTo = (target: number, duration: number) => {
      cancelFade();
      const start = performance.now();
      const startOpacity = Number.parseFloat(video.style.opacity || "0");

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        video.style.opacity = String(
          startOpacity + (target - startOpacity) * progress,
        );
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          frameRef.current = null;
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const handleCanPlay = () => {
      fadingOutRef.current = false;
      setVideoReady(true);
      fadeTo(1, 1200);
    };

    const handleTimeUpdate = () => {
      if (
        video.duration &&
        !fadingOutRef.current &&
        video.duration - video.currentTime <= 0.5
      ) {
        fadingOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      fadingOutRef.current = false;
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => {
      cancelFade();
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-visible bg-background text-foreground">
      {/* Video background — starts invisible, fades in on canplay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          loop={false}
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <HeroNavbar />

        <div className="relative flex flex-1 items-center justify-center overflow-visible px-6">
          {/* Blur backdrop — only visible once video is ready */}
          <AnimatePresence>
            {videoReady && (
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[527px] w-[984px] -translate-x-1/2 -translate-y-1/2 bg-gray-950 opacity-90 blur-[82px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1 }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            {/* Pendulum OR hero title — swaps on video ready */}
            <AnimatePresence mode="wait">
              {!videoReady ? (
                <motion.div
                  key="pendulum"
                  className="flex flex-col items-center"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <InlinePendulum />
                </motion.div>
              ) : (
                <TextScramble
                  key="title"
                  as="h1"
                  trigger={videoReady}
                  speed={0.18}
                  duration={4}
                  characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  className="text-[clamp(3rem,15vw,220px)] font-normal leading-[1.02] tracking-[-0.024em] text-foreground"
                  style={{ fontFamily: '"General Sans", sans-serif' }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  PHENERON
                </TextScramble>
              )}
            </AnimatePresence>

            {/* Subtext — always visible */}
            <p className="max-w-md text-lg leading-8 text-hero-sub/80">
              Your business doesn't need more employees.
              <br />
              It needs better systems.
            </p>

            {/* Schedule button — fades in after video is ready */}
            <AnimatePresence>
              {videoReady && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                >
                  <HeroButton>
                    <span className="inline-block px-7.25 py-6 text-base font-medium">
                      Schedule a Consult
                    </span>
                  </HeroButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Logo marquee — fades in after video is ready */}
        <AnimatePresence>
          {videoReady && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
            >
              <LogoMarquee />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
