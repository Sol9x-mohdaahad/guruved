"use client";

import { motion } from "framer-motion";
import { Sparkles, Cloud, BookOpen, GraduationCap, Brain, Cpu } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 size-[480px] rounded-full bg-radial-emerald opacity-70 blur-2xl" />
        <div className="absolute -right-20 -top-10 size-[420px] rounded-full bg-radial-gold opacity-80 blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/15 bg-emerald-soft/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald">
            <Sparkles className="size-3.5" /> School LMS Software
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl text-balance">
            Run School,{" "}
            <span className="text-emerald">Right From</span>{" "}
            Digital Space.
            <span className="block mt-2">
              One Platform.{" "}
              <span className="relative inline-block text-emerald">
                Limitless
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 50 0, 100 6 T 198 6"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Learning.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-ink">
            The AI-powered operating system for modern institutions — unify LMS, ERP, communications
            and analytics on one elegant, enterprise-grade platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton tone="emerald" withArrow>
              Get Started
            </CTAButton>
            <CTAButton tone="outline">See Features</CTAButton>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-ink">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-9 rounded-full border-2 border-background bg-gradient-to-br from-emerald to-gold"
                />
              ))}
            </div>
            <span>
              <span className="font-bold text-ink">21,000+</span> institutions onboard
            </span>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      {/* glowing bulb */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-8"
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold via-gold-soft to-white shadow-gold" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white to-gold-soft" />
          <div className="absolute inset-0 grid place-content-center">
            <RobotMascot />
          </div>
          {/* sparkles */}
          {[
            { top: "10%", left: "20%" },
            { top: "20%", right: "12%" },
            { bottom: "18%", left: "10%" },
            { bottom: "10%", right: "22%" },
          ].map((p, i) => (
            <motion.div
              key={i}
              style={p as React.CSSProperties}
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2 + i * 0.4, repeat: Infinity }}
              className="absolute"
            >
              <Sparkles className="size-5 text-emerald" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* floating chips */}
      <FloatingChip
        icon={<BookOpen className="size-4 text-emerald" />}
        label="Courses"
        sub="142 active"
        className="left-0 top-12"
        delay={0.2}
      />
      <FloatingChip
        icon={<GraduationCap className="size-4 text-gold" />}
        label="Students"
        sub="+12% this term"
        className="right-0 top-32"
        delay={0.5}
      />
      <FloatingChip
        icon={<Brain className="size-4 text-emerald" />}
        label="AI Insights"
        sub="3 new alerts"
        className="bottom-20 -left-2"
        delay={0.8}
      />
      <FloatingChip
        icon={<Cpu className="size-4 text-gold" />}
        label="Auto-Sync"
        sub="Real-time"
        className="bottom-4 right-4"
        delay={1.1}
      />

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-4 right-10"
      >
        <Cloud className="size-12 fill-white text-white drop-shadow-md" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-8 left-10"
      >
        <Cloud className="size-10 fill-white text-white drop-shadow-md" strokeWidth={1} />
      </motion.div>
    </div>
  );
}

function FloatingChip({
  icon,
  label,
  sub,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute flex items-center gap-2.5 rounded-2xl border border-ink/5 bg-white/90 p-2.5 pr-4 shadow-soft backdrop-blur ${className}`}
    >
      <div className="grid size-9 place-content-center rounded-xl bg-muted">{icon}</div>
      <div>
        <div className="text-xs font-semibold text-ink">{label}</div>
        <div className="text-[10px] text-muted-ink">{sub}</div>
      </div>
    </motion.div>
  );
}

function RobotMascot() {
  return (
    <svg viewBox="0 0 140 140" className="size-40">
      <defs>
        <linearGradient id="r1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--emerald)" />
          <stop offset="100%" stopColor="oklch(0.45 0.12 152)" />
        </linearGradient>
      </defs>
      {/* antenna */}
      <line x1="70" y1="14" x2="70" y2="28" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="70" cy="12" r="5" fill="var(--gold)" />
      {/* head */}
      <rect x="35" y="28" width="70" height="58" rx="18" fill="url(#r1)" />
      {/* eyes */}
      <circle cx="56" cy="56" r="7" fill="white" />
      <circle cx="84" cy="56" r="7" fill="white" />
      <circle cx="56" cy="56" r="3" fill="var(--ink)" />
      <circle cx="84" cy="56" r="3" fill="var(--ink)" />
      {/* smile */}
      <path d="M55 72 Q 70 80 85 72" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* body */}
      <rect x="45" y="88" width="50" height="32" rx="12" fill="white" stroke="var(--ink)" strokeOpacity="0.1" />
      <rect x="55" y="98" width="30" height="6" rx="3" fill="var(--gold)" />
      <rect x="55" y="108" width="20" height="4" rx="2" fill="var(--emerald)" opacity="0.6" />
    </svg>
  );
}
