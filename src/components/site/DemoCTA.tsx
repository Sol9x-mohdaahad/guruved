"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { Smartphone } from "lucide-react";

export function DemoCTA() {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald via-emerald to-emerald/90 p-10 md:p-16">
        <div className="absolute -right-10 -top-10 size-72 rounded-full bg-gold/40 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 size-72 rounded-full bg-emerald-soft/30 blur-3xl" />
        {/* dotted bg */}
        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
              Ready to see <span className="text-gold">Guruved</span> in action?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              A 30-minute walkthrough with a product specialist — tailored to your institution.
            </p>
            <div className="mt-7">
              <CTAButton tone="gold" withArrow>
                Schedule a demo today
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* person silhouette holding phone */}
              <svg viewBox="0 0 200 240" className="size-64">
                <ellipse cx="100" cy="220" rx="90" ry="10" fill="black" opacity="0.15" />
                <circle cx="100" cy="50" r="28" fill="var(--gold)" />
                <path
                  d="M50 220 Q 50 130 100 130 Q 150 130 150 220 Z"
                  fill="var(--gold)"
                />
                <rect
                  x="120"
                  y="100"
                  width="50"
                  height="80"
                  rx="8"
                  fill="white"
                  stroke="var(--ink)"
                  strokeWidth="2"
                  transform="rotate(15 145 140)"
                />
              </svg>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute right-0 top-8 rounded-2xl bg-white p-3 shadow-soft"
              >
                <Smartphone className="size-5 text-emerald" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
