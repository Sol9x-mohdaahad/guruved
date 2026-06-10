"use client";

import { motion } from "framer-motion";
import { Building2, Headphones, FlaskConical, Award } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { icon: Building2, value: 21000, suffix: "+", label: "Institutions Empowered" },
  { icon: Headphones, value: 300, suffix: "+", label: "Support Engineers" },
  { icon: FlaskConical, value: 200, suffix: "+", label: "R&D Experts" },
  { icon: Award, value: 150, suffix: "+", label: "Industry Awards" },
];

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-4 inset-y-0 -z-10 rounded-[3rem] bg-gradient-to-br from-gold-soft via-white to-emerald-soft/40 md:inset-x-8" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* hanging string */}
              <div className="mx-auto h-8 w-px bg-ink/20" />
              <div className="relative -mt-1 rounded-3xl border border-ink/5 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-1 left-1/2 size-3 -translate-x-1/2 rounded-full border-2 border-ink/20 bg-white" />
                <div className="grid size-12 place-content-center rounded-2xl bg-gradient-to-br from-emerald to-gold text-white">
                  <s.icon className="size-6" />
                </div>
                <div className="mt-5 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-sm text-muted-ink">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
