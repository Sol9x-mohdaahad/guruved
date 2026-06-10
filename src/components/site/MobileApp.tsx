"use client";

import { motion } from "framer-motion";
import { Apple, Play, Star } from "lucide-react";

export function MobileApp() {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold-soft via-gold/40 to-gold-soft p-8 md:p-16">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -left-10 -bottom-20 size-72 rounded-full bg-emerald-soft/60 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 flex items-end justify-center gap-4 lg:order-1"
          >
            {/* tablet */}
            <div className="hidden h-72 w-52 rotate-[-6deg] rounded-[1.75rem] border-[6px] border-ink/90 bg-white shadow-2xl md:block">
              <div className="m-2 h-full rounded-[1.25rem] bg-gradient-to-br from-emerald-soft to-white p-3">
                <div className="h-3 w-16 rounded bg-ink/15" />
                <div className="mt-2 h-2 w-24 rounded bg-ink/10" />
                <div className="mt-4 h-20 rounded-xl bg-emerald/80" />
                <div className="mt-3 space-y-2">
                  <div className="h-8 rounded-lg bg-white" />
                  <div className="h-8 rounded-lg bg-white" />
                  <div className="h-8 rounded-lg bg-white" />
                </div>
              </div>
            </div>
            {/* phone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="h-96 w-48 rotate-[5deg] rounded-[2rem] border-[6px] border-ink/90 bg-white shadow-2xl"
            >
              <div className="m-2 h-full rounded-[1.5rem] bg-gradient-to-br from-white to-emerald-soft/60 p-3">
                <div className="mx-auto h-1 w-12 rounded-full bg-ink/20" />
                <div className="mt-4 flex items-center gap-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-emerald to-gold" />
                  <div>
                    <div className="h-2 w-16 rounded bg-ink/20" />
                    <div className="mt-1 h-2 w-12 rounded bg-ink/10" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-xl bg-white shadow-sm" />
                  ))}
                </div>
                <div className="mt-3 h-16 rounded-xl bg-emerald" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
              Mobile app
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
              One Login. <span className="text-emerald">Endless Magic.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted-ink">
              Teachers, students and parents — one beautifully-crafted app, available on every
              device they already love.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="group flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition-transform hover:-translate-y-0.5">
                <Apple className="size-7" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-75">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="group flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition-transform hover:-translate-y-0.5">
                <Play className="size-6 fill-white" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-75">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "2M+", l: "Downloads" },
                { v: "4.5", l: "App Rating", icon: true },
                { v: "200K+", l: "Monthly Active" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                  <div className="flex items-center gap-1 text-2xl font-bold text-ink">
                    {s.v}
                    {s.icon && <Star className="size-4 fill-gold text-gold" />}
                  </div>
                  <div className="text-xs text-muted-ink">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
