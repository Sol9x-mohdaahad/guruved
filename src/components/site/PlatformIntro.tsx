"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { DashboardMockup } from "./DashboardMockup";
import { Sparkles, TrendingUp, Users } from "lucide-react";

export function PlatformIntro() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 size-[420px] rounded-full bg-radial-gold opacity-50 blur-2xl" />
        <div className="absolute right-1/4 bottom-0 size-[480px] rounded-full bg-radial-emerald opacity-60 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="The platform"
          title={
            <>
              Elevate. <span className="text-emerald">Educate.</span> Empower.
              <span className="block">Beyond ERP & LMS.</span>
            </>
          }
          subtitle="An AI-driven all-in-one operating system for educational institutions — finally, one place where teaching, operations and growth live together."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* layered mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <DashboardMockup variant="analytics" className="aspect-[16/10]" />

            {/* floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-6 top-10 hidden w-56 rounded-2xl border border-ink/5 bg-white p-4 shadow-soft md:block"
            >
              <div className="flex items-center gap-2">
                <div className="grid size-9 place-content-center rounded-xl bg-emerald-soft">
                  <TrendingUp className="size-4 text-emerald" />
                </div>
                <div>
                  <div className="text-xs text-muted-ink">Avg. grade</div>
                  <div className="text-lg font-bold text-ink">+18.4%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -right-6 top-1/3 hidden w-56 rounded-2xl border border-ink/5 bg-white p-4 shadow-gold md:block"
            >
              <div className="flex items-center gap-2">
                <div className="grid size-9 place-content-center rounded-xl bg-gold-soft">
                  <Sparkles className="size-4 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-ink">AI suggestion</div>
                  <div className="text-sm font-semibold text-ink">3 lessons to revise</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -bottom-6 left-1/3 hidden w-60 rounded-2xl border border-ink/5 bg-white p-4 shadow-soft md:block"
            >
              <div className="flex items-center gap-2">
                <div className="grid size-9 place-content-center rounded-xl bg-emerald text-white">
                  <Users className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-ink">Active today</div>
                  <div className="text-lg font-bold text-ink">12,482 students</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
