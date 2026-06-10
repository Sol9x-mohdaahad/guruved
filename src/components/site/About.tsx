"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-3 shadow-soft">
            <Search className="ml-2 size-5 text-muted-ink" />
            <span className="text-2xl font-bold tracking-tight text-ink">What is Guruved?</span>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-muted-ink">
            Guruved is the world&apos;s first AI-native operating system built exclusively for
            educational institutions. We replace the patchwork of ERPs, LMSes, attendance apps and
            spreadsheets with a single, elegant platform that scales from a 200-student school to a
            multi-campus university network.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-ink">
            Built by educators and engineers, refined across{" "}
            <span className="font-semibold text-ink">21,000+ institutions</span> in 14 countries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-radial-emerald opacity-60 blur-2xl" />
          <div className="relative grid h-full w-full place-content-center rounded-[2.5rem] border border-ink/5 bg-white shadow-soft">
            <div className="relative">
              <div className="grid size-48 place-content-center rounded-[2rem] bg-gradient-to-br from-emerald via-emerald to-gold text-white shadow-gold">
                <Sparkles className="size-24" strokeWidth={1.5} />
              </div>
              <div className="mt-6 text-center text-3xl font-bold tracking-tight text-ink">
                Guruved
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
